/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_MASTER_KEY: string
  readonly VITE_TEST: string
    // más variables de entorno...
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }