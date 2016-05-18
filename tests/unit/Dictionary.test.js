var expect = require("chai").expect,
    Dictionary = require("../../Dictionary");

describe("Dictionary", function() {
    var d = new Dictionary();

    it("should tolerate missing 'new' operator", function() {
        expect(Dictionary()).to.be.instanceof(Dictionary);
        expect(new Dictionary()).to.be.instanceof(Dictionary);
    });

    describe("#add()", function() {
        it("should return dictionary instance", function() {
            var b = d.add("val1", 1);

            expect(b).to.equal(d);
            expect(b).to.be.instanceof(Dictionary);
        });

        it("should create unique entries only", function() {
            expect(function() {
                return d.add("val2", 2);
            }).to.not.throw;
        });

        it("should reject duplicate keys", function() {
            expect(function() {
                return d.add("val1", 1);
            }).to.throw(Error);

            expect(Object.keys(d._data).filter(function(key) {
                return key === "val1";
            }).length).to.eql(1);
        });

        it("should accept two arguments (key, value)", function() {
            var b = d.add(null, 3);

            expect(b).to.be.instanceof(Dictionary);
            expect(b).to.equal(d);
            expect(d._data["null"]).to.eql(3);
        });

        it("should accept monadic form ({key:value})", function() {
            var b = d.add({val4:4});

            expect(b).to.be.instanceof(Dictionary);
            expect(b).to.equal(d);
            expect(d._data["val4"]).to.eql(4);
        });
    });

    describe("#update()", function() {
        it("should update existing entries only", function() {
            expect(d.update("val4", 5)).to.be.instanceof(Dictionary);
            expect(d.update("val4", 5)).to.equal(d);
            expect(d._data["val4"]).to.eql(5);

            expect(function() {
                return d.update("non-existent", 10);
            }).to.throw(Error);
        });

        it("should accept two arguments (key, value)", function() {
            expect(d.update("val4", 6)).to.be.instanceof(Dictionary);
            expect(d.update("val4", 6)).to.equal(d);
            expect(d._data["val4"]).to.eql(6);
        });

        it("should accept monadic form ({key:value})", function() {
            expect(d.update({"val4":7})).to.be.instanceof(Dictionary);
            expect(d.update({"val4":7})).to.equal(d);
            expect(d._data["val4"]).to.eql(7);
        });
    });

    describe("#exists()", function() {
        it("should confirm/infirm existence of entries", function() {
            expect(d.exists("val4")).to.be.true;
            expect(d.exists("non-existant")).to.be.false;
        });
    });

    describe("#getValues()", function() {
        var d = new Dictionary();

        [1, 2, "three", undefined, null].forEach(function(val) {
            d.add(val, val);
        });

        it("should return an array of all values in the dictionary", function() {
            expect(d.getValues().length).to.eql(5);
            expect(d.getValues()).to.include.members([1, 2, "three", undefined, null]);
        });
    });

    describe("#getKeys()", function() {
        it("should return an array of keys in the dictionary", function() {
            var d = new Dictionary();

            [1, 2, "three", undefined, null].forEach(function(val) {
                d.add(val, val);
            });

            it("should return an array of all values in the dictionary", function() {
                expect(d.getKeys().length).to.eql(5);
                expect(d.getKeys()).to.include.members(["1", "2", "three", "undefined", "null"]);
            });
        });
    });

    describe("#clear()", function() {
        it("should reset a dictionary's internal data to an empty object", function() {
            expect(Object.keys(d._data)).to.have.length.above(0);
            d.clear();
            expect(Object.keys(d._data)).to.have.length(0);
        });

        it("should return dictionary instance", function() {
            expect(d.clear()).to.be.instanceof(Dictionary);
            expect(d.clear()).to.equal(d);
        });
    });
});