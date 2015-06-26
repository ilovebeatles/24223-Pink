module.exports = function(grunt) {

  grunt.initConfig({
    
    pkg: grunt.file.readJSON('package.json'),

    less: {
      style: {
        files: {
          "css/style.css": ["less/style.less"]
        }
      }
    },
    autoprefixer: {
      options: {
        browsers: ['last 2 versions', 'ie 8', 'ie 9']
      },
    },
    watch: {
      css: {
        files: ['**/*.less'],
        tasks: ['less', 'autoprefixer'],
        options: {
          livereload: true,
        },
      },
    },
    lintspaces: {
      all: {
        src: [
          '*.html'
        ],
        options: {
          newline: true,
          newlineMaximum: 2,
          trailingspaces: true,
          indentationGuess: true,
          editorconfig: '.editorconfig',
          ignores: [
            'html-comments',
            'js-comments'
          ],
          showTypes: true,
          showCodes: true
        }
      }
    }
  });

  grunt.loadNpmTasks("grunt-contrib-less");
  grunt.loadNpmTasks('grunt-lintspaces');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-available-tasks');

  grunt.registerTask('buildless', ['less', 'autoprefixer', 'watch']);


  grunt.registerTask('build', ['lintspaces', 'less']);


};
