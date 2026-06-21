// mdx.d.ts
declare module "*.mdx" {
  import type { ComponentType } from "preact";

  const Component: ComponentType<any>;
  export default Component;
  
  export const tableOfContents: () => any;
}
