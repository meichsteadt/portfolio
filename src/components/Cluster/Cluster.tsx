import type React from "react";
import type { ReactNode } from "react";
import styles from "./Cluster.module.css";

interface Props {
  align?:
    | "normal"
    | "stretch"
    | "center"
    | "start"
    | "end"
    | "flex-start"
    | "flext-end"
    | "baseline";
  children?: ReactNode;
  justify?:
    | "center"
    | "start"
    | "end"
    | "flex-start"
    | "flext-end"
    | "left"
    | "right"
    | "space-between"
    | "space-around"
    | "stretch";
  space?: string;
  style?: React.CSSProperties;
}

const Cluster = (props: Props) => {
  const style = {
    alignItems: props.align,
    justifyContent: props.justify,
    gap: props.space,
    ...props.style,
  };

  const classNames = `${styles.cluster}`;

  return (
    <div className={classNames} style={style}>
      {props.children}
    </div>
  );
};

Cluster.defaultProps = {
  align: "start",
  children: null,
  justify: "start",
  space: "1rem",
  style: {},
};

export default Cluster;
