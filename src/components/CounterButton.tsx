import React, { MouseEvent, FunctionComponent } from "react";

type CounterButtonProps = {
  label: string;
  value?: number;
  style?: string;
  onClick: (value: number, event?: MouseEvent<HTMLDivElement>) => void;
};

export const CounterButton: FunctionComponent<CounterButtonProps> = (props) => {
  return (
    <div
      className={props.style}
      onClick={() => {
        if (props.value) props.onClick(props.value);
      }}
      style={{cursor: "pointer"}}
    >
      <div className="child">{props.label}</div>
    </div>
  );
};
