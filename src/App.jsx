import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/navigation/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <main>
        <section></section>
        <section></section>
        <section></section>
      </main>
      <footer>
        <div>
          <p>tlf: 12345678</p>
          <p>address: purgatory 3</p>
          <p>email: tired@fake.email</p>
        </div>
      </footer>
    </>
  );
}

export default App;
