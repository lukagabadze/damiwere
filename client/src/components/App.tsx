import { ReactElement, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { fetchUser } from "../store/user/userActions";
import Auth from "./Auth";
import Header from "./Header";
import Requests from "./Requests";

export default function App(): ReactElement | null {
  const userStore = useAppSelector((store) => store.user);
  const dispatch = useAppDispatch();

  console.log(userStore);

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <main className="w-screen h-screen bg-main-300 text-white">
        <Header />

        <Switch>
          <Route path="/auth" component={Auth} />
          <Route path="/" component={Requests} />
        </Switch>
      </main>
    </BrowserRouter>
  );
}
