import React, { FunctionComponent } from "react";

type CounterDisplayProps = {
  count: number;
  style?: string;
};

export const CounterDisplay: FunctionComponent<CounterDisplayProps> = ({
  count,
  style,
}) => {
  return <div className={style}>{count}</div>;
};
