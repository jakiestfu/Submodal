var fs = require('fs');

module.exports = function(grunt) {

    var pkg = grunt.file.readJSON('package.json'),
        js_path = 'src/*.js',
        css_path = 'src/*.css',

        banner = "/*! Submodal v<%= pkg.version %> */";

    grunt.initConfig({

        pkg: pkg,

        cssmin: {

            // App
            submodal: {
                options: {
                     banner: banner
                },
                files: {
                    'dist/bs.sm.min.css': [css_path]
                }
            }
        },

        uglify: {
            app: {
                options: {
                    banner: banner + "\n",
                    preserveComments: 'some'
                },
                files: {
                    'dist/bs.sm.min.js': ['dist/bs.sm.js']
                }
            }
        },

        jshint: {
            all: [js_path],
            options: {
                jshintrc: true
            }
        },

        watch: {
            all: {
                files: 'src/*.*',
                tasks: ['jshint', 'copy', 'cssmin', 'uglify']
            }
        },

         copy: {
            misc: {
                files: [
                    {expand: true,  cwd: 'src', src: ['*.css'], dest: 'dist/'},
                    {expand: true,  cwd: 'src', src: ['*.js'], dest: 'dist/'},
                ]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Register Tasks
    grunt.registerTask('default', ['jshint', 'copy', 'cssmin', 'uglify']);
    grunt.registerTask('develop', ['jshint', 'copy', 'cssmin', 'uglify', 'watch']);
};
