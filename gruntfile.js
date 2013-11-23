'use strict';

module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      files: ['src/wheel.js'],
      options: {
        globals: {
          console: true,
          module: true,
          jQuery: true
        }
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n',
        mangle: true,
        compress: {
          global_defs: {
            'DEBUG': false
          },
          dead_code: true
        },
        report: 'min'
      },
      dist: {
        files: {
          'dist/wheel.min.js': ['src/wheel.js']
        }
      }
    },
    watch: {
      scripts: {
        files: ['src/wheel.js'],
        tasks: ['watch_scripts']
      }
    },
    copy: {
      main: {
        expand: true,
        cwd: 'src/',
        src: ['wheel.js'],
        dest: 'dist/'
      }
    },
    shell: {
      mycommand: {
        command: '',
        options: {
          stdout: true
        }
      }
    },
  });
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-shell');
  grunt.registerTask('test', ['jshint']);
  grunt.registerTask('watch_scripts', ['uglify', 'copy']);
  grunt.registerTask('default', ['watch']);
};
