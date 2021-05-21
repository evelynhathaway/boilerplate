// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

export default {
	preset: "ts-jest",
	clearMocks: true,
	collectCoverage: true,
	collectCoverageFrom: [
		"src/**/*",
		"!**/__tests__/**/*",
	],
	coverageThreshold: {
		global: {
			branches: 100,
			functions: 100,
			lines: 100,
			statements: 100,
		},
	},
	verbose: true,
};
