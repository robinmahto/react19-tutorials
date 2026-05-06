import "./App.css";
import AboutPage from "./components/AboutPage";
import { MyButton } from "./components/MyButtons";
import Products from "./components/Products";

export function App() {
  const isLogin = false;
  return (
    <>
      <h1>Parcel React App</h1>
      <p>
        Edit <code>src/App.tsx</code> to get started!
      </p>
      {isLogin ? <AboutPage /> : <MyButton />}
      <Products />
    </>
  );
}
