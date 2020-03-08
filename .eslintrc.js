module.exports = {
	"plugins": [
		"evelyn",
	],
	"extends": [
		"plugin:evelyn/default",
		"plugin:evelyn/source",
		"plugin:evelyn/node",
	],
	"overrides": [
		{
			"files": [
				"lib/**/*.js",
			],
			"extends": [
				"plugin:evelyn/built",
			],
		},
	],
};
