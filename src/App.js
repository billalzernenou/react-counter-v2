import "./App.css";
import Counter from "./Counter";
import Header from "./Header";
import Footer from "./Footer";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
library.add(faPlus, faMinus);

function App() {
  return (
    <div className="App">
      <Header />
      <Counter />
      <Footer />
    </div>
  );
}

export default App;
