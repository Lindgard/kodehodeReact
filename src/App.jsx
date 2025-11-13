import { useState } from "react";
import "./App.css";
import Header from "./components/navigation/Header.jsx";
import Button from "./components/common/Buttons.jsx";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <>
      <Header />
      <main>
        <section className='flex items-center justify-center'>
          <Button onClick={increment}>+</Button>
          <Button onClick={decrement}>-</Button>
          <p className='text-5xl'>{count}</p>
        </section>
        <section>Hello World 2</section>
        <section>Hello World 3</section>
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
