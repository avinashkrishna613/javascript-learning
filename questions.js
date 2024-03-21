function abc(num) {
    let cache = {};
    if (num in cache) {
        return cache[num];
    } else {
        let result = num+10;
        cache[num] = result;
        return result;
    }
}

console.log(abc(10));
console.log(abc(10));

console.log(val);