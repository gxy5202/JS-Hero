/**
 * bind() 方法创建一个新的函数，在 bind() 被调用时，这个新函数的 this 被指定为 bind() 的第一个参数，而其余参数将作为新函数的参数，供调用时使用
 * 
 * W3C标准步骤
 * This method performs the following steps when called:

    1. Let Target be the this value.
    2. If IsCallable(Target) is false, throw a TypeError exception.
    3. Let F be ? BoundFunctionCreate(Target, thisArg, args).
    4. Let L be 0.
    5. Let targetHasLength be ? HasOwnProperty(Target, "length").
    6. If targetHasLength is true, then
    a. Let targetLen be ? Get(Target, "length").
    b. If targetLen is a Number, then
    i. If targetLen is +∞𝔽, set L to +∞.
    ii. Else if targetLen is -∞𝔽, set L to 0.
    iii. Else,
    1. Let targetLenAsInt be ! ToIntegerOrInfinity(targetLen).
    2. Assert: targetLenAsInt is finite.
    3. Let argCount be the number of elements in args.
    4. Set L to max(targetLenAsInt - argCount, 0).
    7. Perform SetFunctionLength(F, L).
    8. Let targetName be ? Get(Target, "name").
    9. If targetName is not a String, set targetName to the empty String.
    10. Perform SetFunctionName(F, targetName, "bound").
    11. Return F.
 */
(function() {
    //mdn Object bind;
    Function.prototype.myBind = function(thisArg, ...args) {    
        const target = this;

        if (typeof target !== 'function') {
            throw new TypeError('is not a function');
        }

        const fn = function (target, thisArg, ...args) {

        }
    }
})(Function)
