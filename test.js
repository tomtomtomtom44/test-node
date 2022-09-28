function deepFreeze(obj) {
    var propNames = Object.getOwnPropertyNames(obj);
    for (var _i = 0, propNames_1 = propNames; _i < propNames_1.length; _i++) {
        var name_1 = propNames_1[_i];
        var value = obj[name_1];
        if (typeof value === 'object' && !Object.isFrozen(value)) {
            deepFreeze(value);
        }
    }
    return Object.freeze(obj);
}
var test = deepFreeze([1, [2, 3]]);
console.log(test[0]);
console.log(test[1]);
