import React, { useState } from "react";
import { CounterButton } from "./CounterButton";
import styles from "../app.module.css";
import { CounterDisplay } from "./CounterDisplay";

type RowProps = {
  author: string;
  title: string;
  publisher: string;
};

export const Row = (props: RowProps) => {
  const [count, setCount] = useState<number>(0);

  const incrementByNumber = (num: number) => {
    setCount(count + num);
  };

  const decrementByNumber = (num: number) => {
    setCount(count - num);
  };

  return (
    <div className={styles.countContainer}>
      <div className={styles.bookData}>
        <div>Autore: {props.author}</div>
        <div>Titolo: {props.title}</div>
        <div>Casa editrice: {props.publisher}</div>
      </div>
      <div>
        <CounterButton
          value={1}
          label={"+1"}
          onClick={() => incrementByNumber(1)}
        />
        <CounterButton
          value={1}
          label={"+3"}
          onClick={() => incrementByNumber(3)}
        />
        <CounterButton
          value={1}
          label={"+5"}
          onClick={() => incrementByNumber(5)}
        />
      </div>
      <div>
        <CounterButton
          value={1}
          label={"-1"}
          onClick={() => decrementByNumber(1)}
        />
        <CounterButton label={"Reset"} onClick={() => setCount(0)} />
      </div>
      <CounterDisplay style={styles.displayNumber} count={count} />
    </div>
  );
};
