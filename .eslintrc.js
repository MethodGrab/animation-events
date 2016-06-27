module.exports = {
	extends : [
		'@methodgrab/eslint-config-standard',
		'@methodgrab/eslint-config-standard/es2015',
	],

	rules : {
		'no-invalid-this'       : 0,
		'no-param-reassign'     : 0,
		'prefer-arrow-callback' : 0,
	}
};
