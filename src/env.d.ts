/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BUGSNAG_API: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
