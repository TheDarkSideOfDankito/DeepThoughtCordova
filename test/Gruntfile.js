module.exports = function (grunt) {
	grunt.initConfig({

		path: {
			src: [ 
				'../www/js/**'
			],
			test: [
				'unit/model/*', 'unit/persistence/*', 'unit/service/*'
			],
			lint: [
				'Gruntfile.js', '<%= path.src %>', '<%= path.test %>'
			]
		},

		jshint: {
			files: '<%= path.lint %>',
			options: {
				jshintrc: true,
				force: true // do not abort on errors but continue with next tasks
			}
		},

		mochaTest: {
			test: {
				src: '<%= path.test %>'
			}
		},

		jscs: {
			all: {
				files: {
					src: '<%= path.lint %>'
				},
				options: {
					preset: 'grunt',
					reporter: 'inline',
					force: true // do not abort on errors but continue with next tasks
				}
			}
		},

		watch: {
			files: '<%= path.lint %>',
			tasks: ['default']
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-mocha-test');
	grunt.loadNpmTasks('grunt-jscs');
	grunt.loadNpmTasks('grunt-notify');

	grunt.registerTask('default', [ 'jshint', 'jscs', 'mochaTest:test' ] );
};