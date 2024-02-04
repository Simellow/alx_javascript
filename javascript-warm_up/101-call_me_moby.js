#!/usr/bin/node
exports.xTimes = function (x, aFunction) {
    for (let i = 0; i < x; i++) {
        aFunction();
    }
}

