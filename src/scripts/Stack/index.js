function Stack() {
    this._data = [];
}

Stack.prototype = {
    add: function add(value) {
        this._data.push(value);

        return this;
    },

    remove: function remove() {
        return this._data.pop();
    },

    clear: function clear() {
        // keep reference to initial data element
        this._data.splice(0);

        return this;
    },

    peek: function peek() {
        if (this._data.length) {
            return this._data[this._data.length - 1];
        }
    },

    exists: function exists(value) {
        return this._data.indexOf(value) !== -1;
    }
};

Object.defineProperty(Stack.prototype, "size", {
    get: function() {
        return this._data.length;
    },
    enumerable: true
});