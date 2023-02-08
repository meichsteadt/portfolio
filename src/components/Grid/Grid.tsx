import type React from "react";
import type { ReactNode, CSSProperties } from "react";
import styles from "./Grid.module.css";

interface Props {
  children: ReactNode;
  minWidth: string;
  space: string;
  style: CSSProperties;
}

const Grid = (props: Props) => {
  const style = {
    "--minWidth": props.minWidth,
    gridGap: props.space,
    ...props.style,
  };

  const classNames = `
    ${styles.grid}
  `;

  return (
    <div className={classNames} style={style}>
      {props.children}
    </div>
  );
};

Grid.defaultProps = {
  minWidth: "250px",
  space: "var(--s1)",
  style: {},
};

export default Grid;
