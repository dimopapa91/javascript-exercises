var TimeLimitedCache = function() {
    this.cache = new Map(); // store key -> { value, expireAt }
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function(key, value, duration) {
    const now = Date.now();
    const expireAt = now + duration;

    const exists = this.cache.has(key) && this.cache.get(key).expireAt > now;

    this.cache.set(key, { value, expireAt });
    return exists;
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function(key) {
    const now = Date.now();
    if (!this.cache.get(key)) return -1;
    const entry = this.cache.get(key);
    if (entry.expireAt <= now) {
        this.cache.delete(key); // clean up expired key
        return -1;
    }
    return entry.value;
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function() {
    const now = Date.now();
    let count = 0;
    for (const [key, entry] of this.cache.entries()) {
        if (entry.expireAt > now) {
            count++;
        } else {
            this.cache.delete(key); // clean up expired key
        }
    }
    return count;
};

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */