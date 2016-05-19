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

    get: function get(key) {
        return this._data[key];
    },

    set: function set(key, value) {
        // monadic handler
        if (key && typeof key === "object") {
            Object.keys(key).forEach(function(k) {
                this.set(k, key[k]);
            }, this);
        } else {
            // set new entry
            this._data[key] = value;
        }

        return this;
    },

    remove: function remove(key) {
        if (this.hasKey(key)) {
            // remove from dictionary
            delete this._data[key];
        }

        return this;
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
