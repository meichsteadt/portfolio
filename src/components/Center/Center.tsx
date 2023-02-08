import React, { ReactNode } from 'react';
import styles from "./Center.module.css";

interface Props {
  andText: boolean;
  children: ReactNode;
  gutters: string;
  intrinsic: boolean;
  max: string;
  style: React.CSSProperties;
}

const Center = (props: Props) => {
  const style = {
      maxInlineSize: props.max, 
      paddingInlineStart: props.gutters, 
      paddingInlineEnd: props.gutters,
      textAlign: (props.andText ? "center" : "") as "center",
      ...props.style
    };

  const classNames = `
    ${styles.center}
    ${props.intrinsic ? styles.intrinsic : ""}
  `

  return (
    <div className={classNames} style={style}>
      {props.children}
    </div>
  );
};

Center.defaultProps = {
  andText: false,
  gutters: "0",
  intrinsic: false,
  max: "var(--measure)",
  style: {},
}

export default Center;