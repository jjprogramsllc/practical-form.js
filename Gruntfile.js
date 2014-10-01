var path = require('path');

var moduleName = "jjp.PracticalForms";

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
      
    clean: [".tmp", "build"],
    
    concat:{
      build:{
        src: ['<%= html2js.build.dest %>', '<%= uglify.build.dest %>'],
        dest: 'build/<%= pkg.name %>.min.js'
      }
    },
    
    jshint: {
      all: ['Gruntfile.js', 'src/**/*.js']
    },
    
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
      },
      build: {
        src: ['src/praticalforms.js','src/components/**/*.js'],
        dest: '.tmp/<%= pkg.name %>.min.js'
      }
    },

    html2js:{
      options:{
        module:moduleName + ".templates",
        singleModule: true,
        htmlmin: {
          collapseBooleanAttributes:      true,
          collapseWhitespace:             true,
          removeAttributeQuotes:          true,
          removeComments:                 true, // Only if you don't use comment directives!
          removeEmptyAttributes:          true,
          removeRedundantAttributes:      true,
          removeScriptTypeAttributes:     true,
          removeStyleLinkTypeAttributes:  true
        },
        rename: function(filename){
        	return '/jjp/pf/' + path.basename(filename);
        },
      },
      
      build:{
        src: 'src/components/**/*.html',
        dest: '.tmp/<%= pkg.name %>.tpl.min.js',
      },
    },

    watch: {
      dev: {
        files: [ 'Gruntfile.js', 'src/**/*.js', 'src/**/*.html' ],
        tasks: ['clean','jshint', 'uglify', 'html2js', 'concat'],
        options: {
          atBegin: true
        }
      },
    }    

  });
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-html2js');

  grunt.registerTask('default', ['clean','jshint', 'uglify', 'html2js', 'concat', 'watch']);

};
