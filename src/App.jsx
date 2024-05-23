import React from 'react';
import { createRoot } from 'react-dom';

const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h3", {}, props.breed),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me Now"),
    React.createElement(Pet, {
      animal: "Goat",
      name: "Leggy",
      breed: "Local",
    }),
    React.createElement(Pet, {
      animal: "Cow",
      name: "Blacky",
      breed: "Beefy",
    }),
    React.createElement(Pet, {
      animal: "Chicken",
      name: "Kukuruku",
      breed: "Hybrid",
    }),
  ]);
};

const container = document.getElementById("root");
const root = createRoot(container);

root.render(React.createElement(App));
