#!/usr/bin/node
module.exports.xTimes = function xTimes(x, aFunction) {
    for (let i = 0; i < x; i++) {
        aFunction();
    }
}