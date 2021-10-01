import { ReactElement } from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./Header";

export default function App(): ReactElement | null {
  return (
    <BrowserRouter>
      <main className="w-screen h-screen bg-main-300 text-white">
        <Header />
      </main>
    </BrowserRouter>
  );
}
