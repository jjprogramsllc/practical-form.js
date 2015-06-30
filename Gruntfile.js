var path = require('path');

var moduleName = "jjp.practical-forms";

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    clean: [".tmp", "build"],

    jshint: {
      all: ['Gruntfile.js', 'src/**/*.js']
    },

    uglify: {
      build: {
        src: ['src/practical-forms.js', 'src/components/**/*.js'],
        dest: '.tmp/<%= pkg.name %>-<%= pkg.version %>.min.js'
      }
    },

    html2js: {
      options: {
        module: moduleName + ".templates",
        singleModule: true,
        htmlmin: {
          collapseBooleanAttributes: true,
          collapseWhitespace: true,
          removeAttributeQuotes: true,
          removeComments: true, // Only if you don't use comment directives!
          removeEmptyAttributes: true,
          removeRedundantAttributes: true,
          removeScriptTypeAttributes: true,
          removeStyleLinkTypeAttributes: true
        },
        rename: function(filename) {
          return '/jjp/pf/' + path.basename(filename);
        },
      },

      build: {
        src: 'src/components/**/*.html',
        dest: '.tmp/<%= pkg.name %>-<%= pkg.version %>.tpl.min.js',
      },
    },

    concat: {
      options: {
        banner: '/*! <%= pkg.name %> v<%= pkg.version %> | (c) <%=grunt.template.today("yyyy") %>, <%= pkg.author %> | Distributed under the <%= pkg.license %> License */\n',
      },
      build: {
        src: ['<%= html2js.build.dest %>', 'src/practical-forms.js', 'src/components/**/*.js'],
        dest: 'build/<%= pkg.name %>-<%= pkg.version %>.js'
      },
      prod: {
        src: ['<%= html2js.build.dest %>', '<%= uglify.build.dest %>'],
        dest: 'build/<%= pkg.name %>-<%= pkg.version %>.min.js'
      },
    },
    'http-server': {
      'dev': {
        root: "./",
        port: 8282,
        host: "0.0.0.0",
        showDir: true,
        autoIndex: true,
        ext: "html",
        // run in parallel with other tasks
        runInBackground: true,
      }
    },

    watch: {
      build: {
        files: ['Gruntfile.js', 'src/**/*.js', 'src/**/*.html'],
        tasks: ['clean', 'jshint', 'uglify', 'html2js', 'concat'],
      },
    }

  });
  grunt.loadNpmTasks('grunt-http-server');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-html2js');

  grunt.registerTask('default', ['clean', 'jshint', 'uglify', 'html2js', 'concat', 'http-server','watch']);
  grunt.registerTask('prod', ['clean', 'jshint', 'uglify', 'html2js', 'concat']);

};
