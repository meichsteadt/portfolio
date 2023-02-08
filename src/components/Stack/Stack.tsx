import React, { ReactElement, ReactNode } from 'react';
import styles from './Stack.module.css';

interface Props {
  children: ReactNode;
  recursive: boolean;
  space: string;
  splitAfter: number;
  style: React.CSSProperties;
}

const Stack = (props: Props) => {
  const classNames = `
    ${styles.stack}
    ${props.recursive? styles.recursive : null}
  `

  const style = {
    marginBlockStart: props.space,
    ...props.style
  };

  const childElements = (): ReactNode => {
    return React.Children.map(props.children, (child: ReactNode, index: number) => {
      const childElement = child as ReactElement<any>;
      const childElementStyles = {
          ...childElement.props.style,
      }

      if(index + 1 === props.splitAfter) {
        childElementStyles["marginBlockEnd"] = "auto";
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

Stack.defaultProps = {
  recursive: false,
  space: "var(--s1)",
  splitAfter: null,
  style: {},
}

export default Stack;