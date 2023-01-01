import React from 'react';
import ReactDOM from 'react-dom/client';

/* Nested React Elements inside container div and rendering in root */
const heading1 = React.createElement("h1", {id: "title"}, "Namaste React using React");
const heading2 = React.createElement("h2", {id: "sub_title"}, "Nested React Elements");
const root = ReactDOM.createRoot(document.getElementById("root"));
const container = React.createElement("div", {id: "content"}, [heading1, heading2]);
root.render(container);