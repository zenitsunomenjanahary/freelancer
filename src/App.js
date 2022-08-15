import {Layout} from "antd";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import RegisterForm from "./components/Form/register/RegisterForm";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <Layout>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<RegisterForm/>}/>
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
