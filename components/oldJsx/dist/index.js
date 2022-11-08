import _JSXStyle from "styled-jsx/style";
import React from 'react';
const styles = new String("div{color:yellow;margin-bottom:1px;}");
styles.__hash = "3033026769";
styles.__scoped = "div.jsx-3622984912{color:yellow;margin-bottom:1px;}";
styles.__scopedHash = "3622984912";
export const newWithOldJsx = (i, j) => {
  // const margin = `1.${i}${j}px`;
  return () => {
    return /*#__PURE__*/React.createElement("div", {
      className: `jsx-${styles.__scopedHash}`
    }, j, ". Item", i, /*#__PURE__*/React.createElement(_JSXStyle, {
      styleId: styles.__scopedHash,
      css: styles.__scoped
    }));
  };
};