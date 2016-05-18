module.exports = function(grunt) {
    // instructions for grunt
    
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        jshint: {
            options: {
                jshintrc: true
            },
            src: [
                "Dictionary/**/*.js",
                "Queue/**/*.js",
                "Stack/**/*.js"
            ]
        },
        jscs: {
            options: {
                config: ".jscsrc"
            },
            src: [
                "Dictionary/**/*.js",
                "Queue/**/*.js",
                "Stack/**/*.js"
            ]
        },
        mochaTest: {
            test: {
                src: ["tests/**/*.test.js"]
            }
        }
    });

    // Load the plugins
    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("grunt-jscs");
    grunt.loadNpmTasks("grunt-jsdoc");
    grunt.loadNpmTasks("grunt-mocha-test");
    
    grunt.registerTask("test", ["jshint", "jscs", "mochaTest"]);
};
