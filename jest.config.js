module.exports = {

	testMatch: [ "<rootDir>/tests/Jest/**/?(*.)+(spec|test).[jt]s?(x)" ],

	// Vue support
	moduleFileExtensions: [
		'js', 'json', 'vue'
	],

	transform: {
		'^.+\\.js$': '<rootDir>/node_modules/babel-jest',
		'.*\\.(vue)$': '<rootDir>/node_modules/vue-jest'
	},

	transformIgnorePatterns: ["/node_modules/(?!(bootstrap-vue)/)"],

	// support the same @ -> src alias mapping in source code
	moduleNameMapper: {
		"^@components/(.*)$": "<rootDir>/resources/js/components/$1",
		"^@resources/(.*)$": "<rootDir>/resources/$1"
	},

	// test results
	reporters: [
		"default",
		["./node_modules/jest-html-reporter", {
			pageTitle: "Test Results",
			outputPath: '<rootDir>/tests/Jest/Results/index.html'
		}]
	],

	// Code Coverage
	collectCoverage: true,
	collectCoverageFrom: ["resources/js/**/*.{js,vue}", "!**/node_modules/**"],
	coverageDirectory: "<rootDir>/tests/Jest/CodeCoverage",
	coverageReporters: ["html"]


}
