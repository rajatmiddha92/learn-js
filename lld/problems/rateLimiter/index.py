import time
from collections import deque

strategyType = {
    "FIXED_WINDOW": "FIXED_WINDOW",
    "SLIDING_WINDOW": "SLIDING_WINDOW",
    "TOKEN_BUCKET": "TOKEN_BUCKET"
}

class RateLimitConfig:
    def __init__(self, limit, window_size, strategy):
        self.limit = limit
        self.window_size = window_size
        self.strategy = strategy

class RateLimiterStrategy:
    def allow_request(self, key, timestamp):
        raise NotImplementedError

class FixedWindowStrategy(RateLimiterStrategy):
    def __init__(self, config):
        self.config = config
        self.counter = {}

    def allow_request(self, key, timestamp):
        window = timestamp // self.config.window_size

        if key not in self.counter:
            self.counter[key] = {}

        if window not in self.counter[key]:
            self.counter[key] = {window: 0}

        if self.counter[key][window] < self.config.limit:
            self.counter[key][window] += 1
            return True

        return False            
    


class SlidingWindowStrategy(RateLimiterStrategy):
    def __init__(self, config):
        self.config = config
        self.logs = {}

    def allow_request(self, key, timestamp):
        if key not in self.logs:
            self.logs[key] = deque()

        window = self.logs[key]

        while window and window[0] <= timestamp - self.config.window_size:
            window.popleft()

        if len(window) < self.config.limit:
            window.append(timestamp)
            return True

        return False
    
class TokenBucketStrategy(RateLimiterStrategy):
    def __init__(self, config):
        self.capacity = config.limit
        self.refill_rate = config.limit / config.window_size
        self.tokens = {}
        self.last_refill = {}

    def allow_request(self, key, timestamp):
        if key not in self.tokens:
            self.tokens[key] = self.capacity
            self.last_refill[key] = timestamp

        elapsed = timestamp - self.last_refill[key]
        self.tokens[key] = min(
            self.capacity,
            self.tokens[key] + elapsed * self.refill_rate
        )

        self.last_refill[key] = timestamp

        if self.tokens[key] >= 1:
            self.tokens[key] -= 1
            return True

        return False
    
class RateLimiterFactory:
    @staticmethod
    def get_strategy(config):
        if config.strategy == strategyType["FIXED_WINDOW"]:
            return FixedWindowStrategy(config)
        elif config.strategy == strategyType["SLIDING_WINDOW"]:
            return SlidingWindowStrategy(config)
        elif config.strategy == strategyType["TOKEN_BUCKET"]:
            return TokenBucketStrategy(config)
        else:
            raise Exception("Invalid strategy")    

class RateLimiter:
    def __init__(self):
        self.strategies = {}

    def register(self, key, config):
        self.strategies[key] = RateLimiterFactory.get_strategy(config)

    def allow(self, key):
        timestamp = int(time.time())

        if key not in self.strategies:
            return True

        return self.strategies[key].allow_request(key, timestamp) 
    

class User :
    def __init__(self,id,ip):
        self.ip = ip
        self.id = id


    

rateLimiter = RateLimiter();
u1 = User("user123", "1.2.3.4");

config = RateLimitConfig(5, 10, strategyType["TOKEN_BUCKET"]);


rateLimiter.register(u1, config);


# simulate requests
for i in range(0,10): 
    allowed = rateLimiter.allow(u1);
    print(f"Request {i}: {allowed}")  