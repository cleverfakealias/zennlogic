/// <reference types="vite/client" />

declare interface ImportMetaEnv {
  readonly VITE_RECAPTCHA_SITE_KEY: string;
  // add more env variables here as needed
}

declare interface ImportMeta {
  readonly env: ImportMetaEnv;
}
