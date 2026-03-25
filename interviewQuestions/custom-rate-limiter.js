function rateLimiter(options) {
  const store = new Map();

  const windowMs = options.windowMs;
  const max = options.max;

  return function (req, res, next) {
    const key = req.ip; // can also use userId
    const now = Date.now();

    if (!store.has(key)) {
      store.set(key, { count: 1, startTime: now });
      return next();
    }

    const entry = store.get(key);

    // Reset if window expired
    if (now - entry.startTime > windowMs) {
      store.set(key, { count: 1, startTime: now });
      return next();
    }

    entry.count++;

    if (entry.count > max) {
      return res.status(429).json({
        message: "Too many requests",
      });
    }

    next();
  };
}