// For CSS
declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}

declare module '*.module.scss' {
  const content: { [key: string]: string };
  export default content;
}

declare module '*.scss' {
  const content: { [key: string]: string };
  export default content;
}
declare module '*.svg' {
  import React = require('react');
  export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement> & { title?: string }>;
  const src: string;
  export default ReactComponent;
}
