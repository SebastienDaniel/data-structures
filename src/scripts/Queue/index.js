function Queue() {
    this._data = [];
}

Queue.prototype = {
    add: function add(value) {
        this._data.push(value);

        return this;
    },

    remove: function remove() {
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

    exists: function exists(value) {
        return this._data.indexOf(value) !== -1;
    }
};

// size is not a method, it's a property
Object.defineProperty(Queue.prototype, "size", {
    get: function() {
        return this._data.length;
    },
    enumerable: true
});