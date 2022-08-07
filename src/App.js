import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import Checkout from "./Checkout";
import Login from "./Login";
import { useEffect, useContext } from "react";
import { StateContext } from "./StateProvider";
import "./firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";

function App() {
  const [{ basket }, dispatch] = useContext(StateContext);
  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        dispatch({ type: "SET_USER", user: authUser });
      } else {
        dispatch({ type: "SET_USER", user: null });
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          ></Route>
          <Route
            path="/checkout"
            element={
              <>
                {" "}
                <Header />
                <Checkout />
              </>
            }
          ></Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
