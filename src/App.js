import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import store from "./redux/store";
import Home from './pages/Home'
import ForgetPassword from "./pages/ForgetPassword";
import ViewProfile from "./pages/ViewProfile";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/Home" element={<Home/>} />
          <Route path="/forgetpassword" element={<ForgetPassword/>}/>
          <Route path="/viewProfile" element={<ViewProfile/>}/>
          
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
