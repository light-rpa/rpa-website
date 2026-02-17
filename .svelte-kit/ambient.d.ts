
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```sh
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const RAILWAY_REPLICA_REGION: string;
	export const RAILWAY_VOLUME_ID: string;
	export const CLAWDBOT_GATEWAY_TOKEN: string;
	export const RAILWAY_REPLICA_ID: string;
	export const RAILWAY_PUBLIC_DOMAIN: string;
	export const OPENCLAW_WORKSPACE_DIR: string;
	export const npm_config_user_agent: string;
	export const NODE_VERSION: string;
	export const RAILWAY_GIT_AUTHOR: string;
	export const YARN_VERSION: string;
	export const HOSTNAME: string;
	export const npm_node_execpath: string;
	export const CLAWDBOT_STATE_DIR: string;
	export const npm_config_noproxy: string;
	export const RAILWAY_GIT_BRANCH: string;
	export const PORT: string;
	export const HOME: string;
	export const OPENCLAW_GATEWAY_TOKEN: string;
	export const VIPSHOME: string;
	export const OLDPWD: string;
	export const npm_package_json: string;
	export const RAILWAY_STATIC_URL: string;
	export const RAILWAY_SERVICE_NAME: string;
	export const NODE_NO_WARNINGS: string;
	export const npm_config_userconfig: string;
	export const npm_config_local_prefix: string;
	export const OPENCLAW_STATE_DIR: string;
	export const COLOR: string;
	export const RAILWAY_PRIVATE_DOMAIN: string;
	export const RAILWAY_PROJECT_NAME: string;
	export const npm_config_prefix: string;
	export const npm_config_npm_version: string;
	export const RAILWAY_SERVICE_ID: string;
	export const npm_config_cache: string;
	export const OPENCLAW_PUBLIC_PORT: string;
	export const OPENCLAW_NODE_OPTIONS_READY: string;
	export const npm_config_node_gyp: string;
	export const PATH: string;
	export const RAILWAY_GIT_COMMIT_MESSAGE: string;
	export const NODE: string;
	export const npm_package_name: string;
	export const RAILWAY_ENVIRONMENT_NAME: string;
	export const RAILWAY_DEPLOYMENT_ID: string;
	export const RAILWAY_PROJECT_ID: string;
	export const OPENCLAW_GATEWAY_PORT: string;
	export const RAILWAY_GIT_REPO_OWNER: string;
	export const npm_lifecycle_script: string;
	export const npm_package_version: string;
	export const npm_lifecycle_event: string;
	export const NODE_PATH: string;
	export const RAILWAY_ENVIRONMENT: string;
	export const RAILWAY_ENVIRONMENT_ID: string;
	export const RAILWAY_VOLUME_NAME: string;
	export const RAILWAY_SERVICE_CLAWDBOT_RAILWAY_TEMPLATE_URL: string;
	export const RAILWAY_BETA_ENABLE_RUNTIME_V2: string;
	export const npm_config_globalconfig: string;
	export const npm_config_init_module: string;
	export const SETUP_PASSWORD: string;
	export const PWD: string;
	export const npm_execpath: string;
	export const RAILWAY_VOLUME_MOUNT_PATH: string;
	export const CLAWDBOT_WORKSPACE_DIR: string;
	export const npm_config_global_prefix: string;
	export const RAILWAY_SNAPSHOT_ID: string;
	export const npm_command: string;
	export const RAILWAY_GIT_REPO_NAME: string;
	export const RAILWAY_GIT_COMMIT_SHA: string;
	export const NODE_ENV: string;
	export const OPENCLAW_PATH_BOOTSTRAPPED: string;
	export const INIT_CWD: string;
	export const EDITOR: string;
}

/**
 * Similar to [`$env/static/private`](https://svelte.dev/docs/kit/$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/main/packages/adapter-node) (or running [`vite preview`](https://svelte.dev/docs/kit/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured).
 * 
 * This module cannot be imported into client-side code.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > [!NOTE] In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		RAILWAY_REPLICA_REGION: string;
		RAILWAY_VOLUME_ID: string;
		CLAWDBOT_GATEWAY_TOKEN: string;
		RAILWAY_REPLICA_ID: string;
		RAILWAY_PUBLIC_DOMAIN: string;
		OPENCLAW_WORKSPACE_DIR: string;
		npm_config_user_agent: string;
		NODE_VERSION: string;
		RAILWAY_GIT_AUTHOR: string;
		YARN_VERSION: string;
		HOSTNAME: string;
		npm_node_execpath: string;
		CLAWDBOT_STATE_DIR: string;
		npm_config_noproxy: string;
		RAILWAY_GIT_BRANCH: string;
		PORT: string;
		HOME: string;
		OPENCLAW_GATEWAY_TOKEN: string;
		VIPSHOME: string;
		OLDPWD: string;
		npm_package_json: string;
		RAILWAY_STATIC_URL: string;
		RAILWAY_SERVICE_NAME: string;
		NODE_NO_WARNINGS: string;
		npm_config_userconfig: string;
		npm_config_local_prefix: string;
		OPENCLAW_STATE_DIR: string;
		COLOR: string;
		RAILWAY_PRIVATE_DOMAIN: string;
		RAILWAY_PROJECT_NAME: string;
		npm_config_prefix: string;
		npm_config_npm_version: string;
		RAILWAY_SERVICE_ID: string;
		npm_config_cache: string;
		OPENCLAW_PUBLIC_PORT: string;
		OPENCLAW_NODE_OPTIONS_READY: string;
		npm_config_node_gyp: string;
		PATH: string;
		RAILWAY_GIT_COMMIT_MESSAGE: string;
		NODE: string;
		npm_package_name: string;
		RAILWAY_ENVIRONMENT_NAME: string;
		RAILWAY_DEPLOYMENT_ID: string;
		RAILWAY_PROJECT_ID: string;
		OPENCLAW_GATEWAY_PORT: string;
		RAILWAY_GIT_REPO_OWNER: string;
		npm_lifecycle_script: string;
		npm_package_version: string;
		npm_lifecycle_event: string;
		NODE_PATH: string;
		RAILWAY_ENVIRONMENT: string;
		RAILWAY_ENVIRONMENT_ID: string;
		RAILWAY_VOLUME_NAME: string;
		RAILWAY_SERVICE_CLAWDBOT_RAILWAY_TEMPLATE_URL: string;
		RAILWAY_BETA_ENABLE_RUNTIME_V2: string;
		npm_config_globalconfig: string;
		npm_config_init_module: string;
		SETUP_PASSWORD: string;
		PWD: string;
		npm_execpath: string;
		RAILWAY_VOLUME_MOUNT_PATH: string;
		CLAWDBOT_WORKSPACE_DIR: string;
		npm_config_global_prefix: string;
		RAILWAY_SNAPSHOT_ID: string;
		npm_command: string;
		RAILWAY_GIT_REPO_NAME: string;
		RAILWAY_GIT_COMMIT_SHA: string;
		NODE_ENV: string;
		OPENCLAW_PATH_BOOTSTRAPPED: string;
		INIT_CWD: string;
		EDITOR: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
