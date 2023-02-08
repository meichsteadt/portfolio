import React, { ReactNode, CSSProperties, ReactElement } from "react";
import styles from "./Switcher.module.css";

interface Props {
  children: ReactNode;
  limit: number;
  space: string;
  style: CSSProperties;
  threshold: string;
}

const Switcher = (props: Props) => {
  const style = {
    "--threshold": props.threshold,
    gap: props.space,
    ...props.style,
  };

  const classNames = `
    ${styles.switcher}
  `;

  const childElements = (): ReactNode => {
    return React.Children.map(
      props.children,
      (child: ReactNode, index: number) => {
        const childElement = child as ReactElement<any>;
        const childElementStyles = {
          ...childElement.props.style,
        };

        if (index >= props.limit) {
          childElementStyles["flexBasis"] = "100%";
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

Switcher.defaultProps = {
  children: null,
  limit: 2,
  space: "var(--s1)",
  style: {},
  threshold: "30rem",
};

export default Switcher;
