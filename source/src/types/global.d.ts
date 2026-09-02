declare module "*.jsx" {
  import type { FC } from "react";
  const component: FC<Record<string, unknown>>;
  export default component;
}

declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}

declare module 'swiper/css';
declare module 'swiper/css/bundle';