/// <reference types="vite/client" />
declare module "*.md" {
  const value: string | URL | Request; // markdown is just a string
  export default value;
}
