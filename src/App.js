import "./App.css";
import { Modal, TopBar } from "./components";
import { Home } from "./pages";

function App() {
  return (
    <div id="globalContainer">
      <TopBar />
      <Home />
      <Modal />
    </div>
  );
}

export default App;
