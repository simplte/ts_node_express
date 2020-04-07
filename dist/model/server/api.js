"use strict";
module.exports = {
    upload: function (key, name) {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve({ code: 200, msg: 'success' });
            }, 100);
        });
    },
    getList: function () {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                var _list = [
                    { id: 1, file_key: 'abc', file_name: 'bqc' },
                    { id: 1, file_key: 'abc', file_name: 'bqc' },
                    { id: 1, file_key: 'abc', file_name: 'bqc' },
                ];
                resolve(_list);
            }, 100);
        });
    }
};
