export default function config () {
	return {
		autoDetect: true,
		hints: {
			ignoreCoverageForFile: /ignore file coverage|istanbul ignore file/,
		},
		reportConsoleErrorAsError: true,
		lowCoverageThreshold: 99,
	};
}
