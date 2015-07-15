module.exports = function(grunt) {

  grunt.initConfig({
    watch: {
    },
    nodemon: {
      dev: {
        options: {
          file: 'app.js',
          args: [],
          ignoredFiles: ['README.md', 'node_modules/**', '.DS_Store'],
          
        }
      }
    }
  });

}
