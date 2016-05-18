"use strict";

function Dictionary() {
    if (!(this instanceof Dictionary)) {
        return new Dictionary();
    }

    this._data = Object.create(null);
}

Dictionary.prototype = {
    getValues: function() {
        return Object.keys(this._data).map(function(key) {
            return this._data[key];
        }, this);
    },

    getKeys: function() {
        return Object.keys(this._data);
    },

    add: function(key, value) {
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

    update: function(key, value) {
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

    remove: function(key) {
        var prev;

        if (this.exists(key)) {
            // store value
            prev = this._data[key];

            // remove from dictionary
            delete this._data[key];
        }

        return this;
    },

    get: function(key) {
        return this._data[key];
    },

    exists: function(key) {
        return Object.prototype.hasOwnProperty.call(this._data, key);
    },

    forEach: function(cb) {
        if (typeof cb !== "function") {
            throw new TypeError("Dictionary.forEach() expects a function as argument. Provided\n" + cb + " (" + typeof cb + ")");
        }
        Object.keys(this._data).forEach(function(key, i, a) {
            cb(key, this._data[key], i, a);
        }, this);

        return this;
    },

    clear: function() {
        this._data = Object.create(null);

        return this;
    }
};

module.exports = Dictionary;
