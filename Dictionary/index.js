"use strict";

function Dictionary() {
    if (!(this instanceof Dictionary)) {
        return new Dictionary();
    }

    this._data = Object.create(null);
}

Dictionary.prototype = {
    getValues: function getValues() {
        return Object.keys(this._data).map(function(key) {
            return this._data[key];
        }, this);
    },

    getKeys: function getKeys() {
        return Object.keys(this._data);
    },

    add: function add(key, value) {
        // monadic handler
        if (key !== null && typeof key === "object") {
            Object.keys(key).forEach(function(k) {
                this.add(k, key[k]);
            }, this);
        } else if (this.exists(key)) {
            throw Error("Dictionary already has a value for key: " + key + "\nUse update(key, value) instead");
        } else {
            // add new entry
            this._data[key] = value;
        }

        return this;
    },

    update: function update(key, value) {
        // monadic handler
        if (key !== null && typeof key === "object") {
            Object.keys(key).forEach(function(k) {
                this.update(k, key[k]);
            }, this);
        } else if (this.exists(key)) {
            this._data[key] = value;
        } else {
            throw Error("Dictionary does not have a value for key: " + key + "\nuse add(key, value) instead");
        }

        return this;
    },

    remove: function remove(key) {
        var prev;

        if (this.exists(key)) {
            // store value
            prev = this._data[key];

            // remove from dictionary
            delete this._data[key];
        }

        return this;
    },

    get: function get(key) {
        return this._data[key];
    },

    hasKey: function hasKey(key) {
        return Object.prototype.hasOwnProperty.call(this._data, key);
    },

    hasValue: function hasValue(value) {
        return Object.keys(this._data).some(function(key) {
            return this._data[key] === value;
        }, this);
    },

    forEach: function forEach(cb) {
        if (typeof cb !== "function") {
            throw new TypeError("Dictionary.forEach() expects a function as argument. Provided\n" + cb + " (" + typeof cb + ")");
        }
        Object.keys(this._data).forEach(function(key, i, a) {
            cb(key, this._data[key], i, a);
        }, this);

        return this;
    },

    clear: function clear() {
        this._data = Object.create(null);

        return this;
    },

    isEmpty: function isEmpty() {
        return Object.keys(this._data).length === 0;
    }
};

module.exports = Dictionary;
