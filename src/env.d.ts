/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
    readonly LFM_API_KEY: string;
    readonly LFM_USER: string;
    // more env variables...
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
