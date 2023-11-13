import 'bootstrap/dist/css/bootstrap.css';
import './assets/styles/App.scss';
import Header from "./components/Header";
import Footer from "./components/Footer";

import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="SSBook">
      <Header/>
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
