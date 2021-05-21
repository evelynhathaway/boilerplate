export default {
	"presets": [
		"@babel/preset-typescript",
		[
			"@babel/preset-env",
			{
				"targets": {
					"esmodules": true,
				},
				"modules": false,
			},
		],
	],
	"plugins": [
		[
			"babel-plugin-add-import-extension",
			{
				extension: "js",
			},
		],
	],
	"ignore": [
		"**/__tests__/*",
	],
};
