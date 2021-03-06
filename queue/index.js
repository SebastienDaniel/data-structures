"use strict";

function Queue() {
    if (!(this instanceof Queue)) {
        return new Queue();
    }

    this._data = [];
}

Queue.prototype = {
    enqueue: function enqueue(value) {
        this._data.push(value);

        return this;
    },

    dequeue: function dequeue() {
        return this._data.shift();
    },

    clear: function clear() {
        // keep reference to initial data element
        this._data.splice(0);

        return this;
    },

    peek: function() {
        return this._data[0];
    },

    hasValue: function exists(value, test) {
        if (typeof test === "function") {
            return this._data.some(test, this);
        } else {
            return this._data.indexOf(value) !== -1;
        }
    },

    isEmpty: function isEmpty() {
        return this._data.length === 0;
    }
};

// size is not a method, it's a property
Object.defineProperty(Queue.prototype, "size", {
    get: function() {
        return this._data.length;
    },
    enumerable: true
});
