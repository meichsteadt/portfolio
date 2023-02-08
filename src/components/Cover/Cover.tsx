import React, { ReactElement, ReactNode } from "react";
import styles from "./Cover.module.css";

interface Props {
  centeredIndex: number;
  children: ReactNode;
  fullWidth: boolean;
  minHeight: string;
  padding: string;
  space: string;
  style: React.CSSProperties;
}

const Cover = (props: Props) => {
  const style = {
    minBlockSize: props.minHeight,
    padding: props.padding,
    "--space": props.space,
    ...props.style,
  };

  const classNames = `
    ${styles.cover}
    ${props.fullWidth ? styles.fullWidth : ""}
  `;

  const childElements = (): ReactNode => {
    return React.Children.map(
      props.children,
      (child: ReactNode, index: number) => {
        const childElement = child as ReactElement<any>;
        const childElementStyles = {
          ...childElement.props.style,
        };

        if (index === props.centeredIndex) {
          childElementStyles["marginBlock"] = "auto";
        } else if (index === 0) {
          childElementStyles["marginBlockStart"] = "0";
        } else if (index === React.Children.count(props.children) - 1) {
          childElementStyles["marginBlockEnd"] = "0";
        }

        return React.cloneElement(childElement, { style: childElementStyles });
      }
    );
  };

  return (
    <div className={classNames} style={style}>
      {childElements()}
    </div>
  );
};

Cover.defaultProps = {
  centeredIndex: 0,
  fullWidth: false,
  minHeight: "100vh",
  padding: "1rem",
  space: "var(--s1)",
  style: {},
};

export default Cover;
