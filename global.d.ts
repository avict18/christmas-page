import React from "react";

declare global {
  namespace JSX {
    interface Element extends React.ReactElement<any, any> {}
    interface IntrinsicElements {
      [key: string]: any;
    }
  }
}
