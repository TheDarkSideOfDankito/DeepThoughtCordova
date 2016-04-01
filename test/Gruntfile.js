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
				src: '<%= path.test %>',
				options: {
					reporter: 'XUnit',
	                captureFile: 'testresults/xunit.xml'
				}
			},
	        coverage: {
				src: '<%= path.test %>', // [paths.test +  '/**/*.js']
	            options: {
	                reporter: 'html-cov',
	                quiet: true,
	                captureFile: 'testresults/coverage.html'
	            }
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

	grunt.registerTask('default', [ 'jshint', 'jscs', 'mochaTest:test', 'mochaTest:coverage' ] );
};