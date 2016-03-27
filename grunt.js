/**
 * Created by awlad on 3/28/16.
 */
module.exports = function (grunt) {
    grunt.initConfig({
        execute: {
            target: {
                src: ['app.js']
            }
        },
        watch: {
            scripts: {
                files: ['app.js'],
                tasks: ['execute'],
            },
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-execute');
};