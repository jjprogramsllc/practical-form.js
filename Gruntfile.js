module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: [".tmp", "build"],
    jshint: {
      all: ['Gruntfile.js', 'src/js/**/*.js']
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
        compress: {
          drop_console: true
        }
      },
      build: {
        src: 'src/js/**.js',
        dest: '.tmp/<%= pkg.name %>.min.js'
      }
    },

    ngtemplates:{
      options:{
        module:'PracticalForms',
        standalone: false,
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
      },
      build:{
        cwd: 'src/',
        src: 'templates/**.html',
        dest: '.tmp/<%= pkg.name %>.tpl.min.js',
      },
    },

    concat:{
      build:{
        src: ['<%= uglify.build.dest %>','<%= ngtemplates.build.dest %>'],
        dest: 'build/<%= pkg.name %>.min.js'
      }
    }

  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-angular-templates');

  grunt.registerTask('default', ['clean','jshint', 'uglify', 'ngtemplates', 'concat']);

};
