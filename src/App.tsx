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
    author: "Fulvio Valbusa (con Serena Marchi)",
    title: "Randagio",
    publisher: "Fandango Libri",
  },
  {
    id: 1,
    author: "Olivier Giroud",
    title: "Crederci, sempre",
    publisher: "Baldini & Castoldi",
  },
  {
    id: 2,
    author: "Andrea Marcolongo",
    title: "De arte gymnastica",
    publisher: "Editori Laterza",
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
