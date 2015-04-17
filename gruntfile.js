module.exports = function( grunt ) {
	'use strict';

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		concat: {
			options: {
				banner: '/*!\n' +
					'* <%= pkg.name %>\n' +
					'* v<%= pkg.version %> - ' +
					'<%= grunt.template.today("yyyy-mm-dd") %>\n' +
					'<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
					'* (c) <%= pkg.author.name %>;' +
					'* Uses basket.js, https://github.com/addyosmani/basket.js\n' +
					'*/',
				stripBanners: true
			},
			dist: {
				src: ['lib/gerobak.js'],
				dest: 'dist/gerobak.js'
			}
		},
		uglify: {
			options: {
				report: 'gzip',
				banner: '<%= concat.options.banner %>'
			},
			dist: {
				options: {
					sourceMap: 'dist/gerobak.min.map'
				},
				files: {
					'dist/gerobak.min.js': ['dist/gerobak.js']
				}
			},
			full: {
				options: {
					sourceMap: 'dist/gerobak.full.map'
				},
				files: {
					'dist/gerobak.full.min.js': ['bower_components/rsvp/rsvp.min.js','bower_components/basket.js/dist/basket.js', 'node_modules/splitargs/splitargs.js', 'dist/gerobak.js']
				}
			}
		},
		qunit: {
			all: {
				options: {
					urls: ['http://localhost:8080/test/index.html']
				}
			}
		},
		watch: {
			scripts: {
				files: '<%= jshint.all %>',
				tasks: ['test']
			}
		},
		connect: {
			server: {
				options: {
					base: '.',
					port: 8080
				}
			}
		},
		jshint: {
			options: {
				jshintrc: '.jshintrc'
			},
			all: ['Gruntfile.js', 'lib/gerobak.js', 'test/tests.js']
		}
	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-qunit');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-watch');

	// Dev - default
	grunt.registerTask('default', ['test']);

	// Release
	grunt.registerTask('release', ['test', 'concat', 'uglify']);

	//Tests
	grunt.registerTask('test', ['jshint', 'connect', 'qunit']);
};
