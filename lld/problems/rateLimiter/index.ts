type StrategyType = "FIXED_WINDOW" | "SLIDING_WINDOW" | "TOKEN_BUCKET";

class RateLimitConfig {
    limit: number;
    windowSize: number; // seconds
    strategy: StrategyType;

    constructor(limit: number, windowSize: number, strategy: StrategyType) {
        this.limit = limit;
        this.windowSize = windowSize;
        this.strategy = strategy;
    }
}

interface RateLimiterStrategy {
    allowRequest(key: User, timestamp: number): boolean;
}

class FixedWindowStrategy implements RateLimiterStrategy {
    private config: RateLimitConfig;
    private counter: Map<User, Map<number, number>>;

    constructor(config: RateLimitConfig) {
        this.config = config;
        this.counter = new Map();
    }

    allowRequest(key: User, timestamp: number): boolean {
        const window = Math.floor(timestamp / this.config.windowSize);

        if (!this.counter.has(key)) {
            this.counter.set(key, new Map());
        }

        const userWindowMap = this.counter.get(key)!;

        if (!userWindowMap.has(window)) {
            userWindowMap.set(window, 0);
        }

        const count = userWindowMap.get(window)!;

        if (count < this.config.limit) {
            userWindowMap.set(window, count + 1);
            return true;
        }

        return false;
    }
}

class SlidingWindowStrategy implements RateLimiterStrategy {
    private config: RateLimitConfig;
    private logs: Map<User, number[]>;

    constructor(config: RateLimitConfig) {
        this.config = config;
        this.logs = new Map();
    }

    allowRequest(key: User, timestamp: number): boolean {
        if (!this.logs.has(key)) {
            this.logs.set(key, []);
        }

        const window = this.logs.get(key)!;

        // Remove expired timestamps
        while (window.length && window[0] <= timestamp - this.config.windowSize) {
            window.shift();
        }

        if (window.length < this.config.limit) {
            window.push(timestamp);
            return true;
        }

        return false;
    }
}

class TokenBucketStrategy implements RateLimiterStrategy {
    private capacity: number;
    private refillRate: number;
    private tokens: Map<User, number>;
    private lastRefill: Map<User, number>;

    constructor(config: RateLimitConfig) {
        this.capacity = config.limit;
        this.refillRate = config.limit / config.windowSize;
        this.tokens = new Map()
        this.lastRefill = new Map();
    }

    allowRequest(key: User, timestamp: number): boolean {
        if (!this.tokens.has(key)) {
            this.tokens.set(key, this.capacity);
            this.lastRefill.set(key, timestamp);
        }

        const last = this.lastRefill.get(key)!;
        const elapsed = timestamp - last;

        const refill = elapsed * this.refillRate;
        const currentTokens = Math.min(
            this.capacity,
            this.tokens.get(key)! + refill
        );

        this.tokens.set(key, currentTokens);
        this.lastRefill.set(key, timestamp);

        if (currentTokens >= 1) {
            this.tokens.set(key, currentTokens - 1);
            return true;
        }

        return false;
    }
}

class RateLimiterFactory {
    static getStrategy(config: RateLimitConfig): RateLimiterStrategy {
        switch (config.strategy) {
            case "FIXED_WINDOW":
                return new FixedWindowStrategy(config);
            case "SLIDING_WINDOW":
                return new SlidingWindowStrategy(config);
            case "TOKEN_BUCKET":
                return new TokenBucketStrategy(config);
            default:
                throw new Error("Invalid strategy");
        }
    }
}

class RateLimiter {
    public strategies: Map<User, RateLimiterStrategy>;

    constructor() {
        this.strategies = new Map();
    }

    register(key: User, config: RateLimitConfig) {
        const strategy = RateLimiterFactory.getStrategy(config);
        this.strategies.set(key, strategy);
    }

    allow(key: User): boolean {
        // convert milliseconds to seconds  
        const timestamp = Math.floor(Date.now() / 1000);
        console.log(timestamp);

        if (!this.strategies.has(key)) {
            return true; // no limit
        }

        const strategy = this.strategies.get(key)!;
        return strategy.allowRequest(key, timestamp);
    }
}

class User {
    public id: string;
    public ip: string;
    constructor(id: string, ip: string) {
        this.ip = ip;
        this.id = id
    }
}

const rateLimiter = new RateLimiter();
const u1 = new User("user123", "1.2.3.4");

const config = new RateLimitConfig(5, 10, "FIXED_WINDOW");

rateLimiter.register(u1, config);
console.dir(rateLimiter, { depth: null })
// simulate requests
for (let i = 0; i < 10; i++) {
    setTimeout(() => {
        const allowed = rateLimiter.allow(u1);
        console.log(`Request ${i}: ${allowed}`);
    }, i * 1000);

}
// run command - npx tsx filePath
