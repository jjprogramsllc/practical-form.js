var path = require('path');

var moduleName = "jjp.practical-forms";

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    release: {
      options: {
        additionalFiles: ['bower.json'],
        afterBump: ['replace', 'build'],
        github: {
          repo: 'jjprogramsllc/practical-form.js',
          accessTokenVar: 'GITHUB_TOKEN'
        }
      }
    },

    replace: {
      build: {
        src: 'src/practical-forms.js',
        dest:'src/practical-forms.js',
        replacements: [{
          from: /VERSION\s=\s["\d\.]+;/, // string replacement
          to: 'VERSION = "<%= pkg.version %>";'
        }]
      }
    },

    clean: [".tmp", "dist"],

    jshint: {
      all: ['Gruntfile.js', 'src/**/*.js']
    },

    uglify: {
      build: {
        src: ['src/practical-forms.js', 'src/components/**/*.js', 'src/forms/**/*.js'],
        dest: '.tmp/<%= pkg.name %>.min.js'
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
        src: ['src/components/**/*.html', 'src/forms/**/*.html'],
        dest: '.tmp/<%= pkg.name %>.tpl.min.js',
      },
    },

    concat: {
      options: {
        banner: '/*! <%= pkg.name %> v<%= pkg.version %> | (c) <%=grunt.template.today("yyyy") %>, <%= pkg.author %> | Distributed under the <%= pkg.license %> License */\n',
      },
      build: {
        files: [{
          src: ['<%= html2js.build.dest %>', 'src/practical-forms.js', 'src/components/**/*.js', 'src/forms/**/*.js'],
          dest: 'dist/<%= pkg.name %>.js'
        }]
      },
      prod: {
        files: [{
          src: ['<%= html2js.build.dest %>', '<%= uglify.build.dest %>'],
          dest: 'dist/<%= pkg.name %>.min.js'
        }]
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

  require('load-grunt-tasks')(grunt);

  grunt.registerTask('default', ['build']);
  grunt.registerTask('build', ['clean', 'jshint', 'uglify', 'html2js', 'concat']);
  grunt.registerTask('dev', ['build', 'http-server', 'watch']);

};
