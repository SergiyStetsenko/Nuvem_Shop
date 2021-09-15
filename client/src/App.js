import "./App.css";
import CreateHero from "./components/CreateHero/CreateHero";
import ListHero from "./components/ListHero/ListHero";

import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <CreateHero />
      <ListHero />
    </div>
  );
}

export default App;
