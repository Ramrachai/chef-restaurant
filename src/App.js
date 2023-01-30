import Pages from "./pages/Pages";
import { BrowserRouter as Router } from "react-router-dom";
import Navmenu from "./components/Navmenu";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Router basename="chefrestaurant">
        <Navmenu />
        <Pages />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
