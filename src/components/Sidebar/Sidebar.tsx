import React, { ReactNode, ReactElement } from 'react';
import styles from "./Sidebar.module.css";

interface Props {
  children: ReactNode;
  contentMin: string;
  noStretch: boolean;
  space: string;
  side: "left" | "right";
  sideWidth: string;
  style: React.CSSProperties;
}

const Sidebar = (props: Props) => {
  const style = {
      "--minInlineSize": props.contentMin,
      gap: props.space,
      ...props.style
    };

  const classNames = `
    ${styles.withSidebar}
    ${props.side === "left" ? styles.left : styles.right }
    ${props.noStretch ? styles.noStretch : ""}
  `;

  const contentChildIndex = (): number => {
    return props.side === "left" ? 0 : React.Children.count(props.children) - 1;
  }

  const childElements = (): ReactNode => {
  return React.Children.map(props.children, (child: ReactNode, index: number) => {
    const childElement = child as ReactElement<any>;
    const childElementStyles = {
        ...childElement.props.style,
    }

    if(index === contentChildIndex()) {
      childElementStyles["flexBasis"] = props.sideWidth;
    }

    return React.cloneElement(childElement, {style: childElementStyles})
  })
}

  return (
    <div className={classNames} style={style}>
      {childElements()}
    </div>
  );
};

Sidebar.defaultProps = {
  contentMin: "50%",
  noStretch: false,
  space: "1rem",
  side: "left",
  sideWidth: "",
  style: {},
}

export default Sidebar;