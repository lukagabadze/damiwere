import { ReactElement, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { getUser } from "../api/userApi";
import Auth from "./Auth";
import Header from "./Header";

export default function App(): ReactElement | null {
  useEffect(() => {
    getUser();
  }, []);

  return (
    <BrowserRouter>
      <main className="w-screen h-screen bg-main-300 text-white">
        <Header />

        <Switch>
          <Route path="/auth">
            <Auth />
          </Route>
        </Switch>
      </main>
    </BrowserRouter>
  );
}
