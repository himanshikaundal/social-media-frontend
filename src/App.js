import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import store, { persistor } from "./redux/store";
import Home from './pages/Home'
import RequireAuth from "./compnents/RequireAuth";
import { PersistGate } from "redux-persist/integration/react";


const App = () => {

  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/home" element={<RequireAuth><Home /> </RequireAuth>} />
            </Routes>
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </>
  );
};

export default App;
