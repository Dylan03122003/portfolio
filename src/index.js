import ReactDOM from "react-dom/client"; // ReactDom object contains useful methods that we need to work

import App from "./App"; // This is the component
import "./App.scss";
import "./index.css"; // When we import this, the page will be styled
const root = ReactDOM.createRoot(document.getElementById("root")); // It is like selecting the container we want to render something into it
root.render(<App />); // render App component into root
