"use strict";

module.exports = function( grunt ) {

	grunt.loadNpmTasks( "grunt-contrib-jade" );
	grunt.loadNpmTasks( "grunt-contrib-uglify" );
	grunt.loadNpmTasks( "grunt-notify" );
	grunt.loadNpmTasks( "grunt-contrib-watch" );
	grunt.loadNpmTasks( "grunt-contrib-sass" );


	grunt.initConfig( {
		"jade": {
			"html": {
				"options": {
					"pretty": true, // - Change value to have lisible HTML
					"data": {
						"debug": false,
					},
				},
				"files": { // - Add jade's fill to compile here
					"bin/index.html": "src/jade/main.jade",
					"bin/chevaux.html" : "src/jade/chevaux.jade",
					"bin/cheval.html" : "src/jade/cheval.jade",
					"bin/article.html" : "src/jade/article.jade",
					"bin/contact.html" : "src/jade/contact.jade",
					"bin/connect.html" : "src/jade/connect.jade",
					"bin/admin.html" : "src/jade/admin.jade"
				}
			}
		},
		"uglify": {
			"scripts": {
				"files": {
					"bin/js/script-min.js": "src/js/script.js"
				}
			}
		},
		"sass": {                              // Nom de la tâche
			"styles": {                            // Nom de la sous-tâche
				"options": {                       // Options
					"style": "expanded",
					"loadPath": require('node-bourbon').includePaths
				},
				"files": {                         // Liste des fichiers
					"bin/css/main.css": "src/sass/main.scss"
				}
			}
		},
		"notify_hooks": {
			"options": {
				"enable": true,
				"success": true, // - Change value to see notify only for errors
				"duration": 1
			}
		},
		"watch": {
			"styles": {
				"files": [ "src/sass/**/*.scss" ],
				"tasks": [ "sass:styles", "notify_hooks" ]
			},
			"html": {
				"files": [ "src/jade/**/*.jade" ],
				"tasks": [ "jade:html", "notify_hooks" ]
			},
			"scripts": {
				"files": [ "src/js/*.js" ],
				"tasks": [ "uglify:scripts", "notify_hooks" ]
			}
		}
	} );

	grunt.registerTask( "work", [
		"jade",
		"sass",
		"uglify",
		"notify_hooks",
		"watch"
	] );
};
