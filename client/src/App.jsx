import { BrowserRouter, Routes, Route } from "react-router-dom";
import Employee from "./Employee";
import CreateEmployees from "./CreateEmployees";
import UpdateEmployees from "./UpdateEmployees";
import Nav from "./Nav";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Employee />}></Route>
        <Route path="/create" element={<CreateEmployees />}></Route>
        <Route path="/update/:id" element={<UpdateEmployees />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
