module.exports = function(grunt) {
    // instructions for grunt
    
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        jshint: {
            options: {
                jshintrc: true
            },
            src: [
                "dictionary/**/*.js",
                "queue/**/*.js",
                "stack/**/*.js"
            ]
        },
        jscs: {
            options: {
                config: ".jscsrc"
            },
            src: [
                "dictionary/**/*.js",
                "queue/**/*.js",
                "stack/**/*.js"
            ]
        },
        mocha_istanbul: {
            coverage: {
                src: ["tests/unit/**/*.test.js"]
            }
        },
        exec: {
            docs: "jsdoc2md -t readme.hbs dictionary/**/*.js > README.md"
        }
    });

    // Load the plugins
    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("grunt-jscs");
    grunt.loadNpmTasks("grunt-exec");
    grunt.loadNpmTasks("grunt-mocha-istanbul");
    
    grunt.registerTask("test", ["jshint", "jscs", "mocha_istanbul"]);
};
