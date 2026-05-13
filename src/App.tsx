// import { useState } from "react";
import "./App.css";
// import AboutPage from "./components/AboutPage";
// import { MyButton } from "./components/MyButtons";
// import Products from "./components/Products";
import Games from "./pages/Games";

export function App() {
  // const [count, setCount] = useState(0);

  // const isLogin = false;
  return (
    <>
      {/* <h1>Parcel React App</h1>
      <p>
        Edit <code>src/App.tsx</code> to get started!
      </p>
      {isLogin ? <AboutPage /> : <><MyButton count={count} setCount={setCount} /><MyButton count={count} setCount={setCount}/></>}
      <Products /> */}

      <Games />
    </>
  );
}
