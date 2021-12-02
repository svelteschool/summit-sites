{
	"compilerOptions": {
		"moduleResolution": "node",
		"module": "es2020",
		"lib": ["es2020", "DOM"],
		"target": "es2019",
		/**
			svelte-preprocess cannot figure out whether you have a value or a type, so tell TypeScript
			to enforce using \`import type\` instead of \`import\` for Types.
			*/
		"importsNotUsedAsValues": "error",
		"isolatedModules": true,
		"resolveJsonModule": true,
		/**
			To have warnings/errors of the Svelte compiler at the correct position,
			enable source maps by default.
			*/
		"sourceMap": true,
		"esModuleInterop": true,
		"skipLibCheck": true,
		"forceConsistentCasingInFileNames": true,
		"baseUrl": ".",
		"allowJs": true,
		"checkJs": true,
		"paths": {
			"$lib": ["src/lib"],
			"$lib/*": ["src/lib/*"]
		}
	},
	"include": ["src/**/*.d.ts", "src/**/*.js", "src/**/*.ts", "src/**/*.svelte"]
}
