import { Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import HomePage from "./Components/HomePage";
import Cars from "./pages/Cars";
import NewCar from "./pages/NewCar";
import Car from "./pages/Car";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/new" element={<NewCar />} />
        <Route path="/cars/:id" element={<Car />} />
      </Route>
    </Routes>
 );
}
export default App;
