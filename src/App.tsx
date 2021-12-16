import React from "react";
import { Header } from "./components/Header";
import { Row } from "./components/Row";

type dataProps = {
  id: number;
  author: string;
  title: string;
  publisher: string;
}[];

const data: dataProps = [
  {
    id: 0,
    author: "Ezio Luzzi",
    title: "Tutto il mio calcio minuto per minuto",
    publisher: "Baldini & Castoldi",
  },
  {
    id: 1,
    author: "Andrea Masciaga",
    title: "Ma restiamo con i piedi per terra",
    publisher: "Rizzoli",
  },
  {
    id: 2,
    author: "Andriy Shevchenko, Alessandro Alciato",
    title: "Forza gentile",
    publisher: "Baldini & Castoldi",
  },
];

const App = () => {
  return (
    <>
      <Header />
      {data.map((e) => {
        return (
          <Row author={e.author} title={e.title} publisher={e.publisher} />
        );
      })}
    </>
  );
};

export default App;
