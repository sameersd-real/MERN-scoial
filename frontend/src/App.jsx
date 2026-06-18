import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./components/Login";
import Signup from "./components/signup";

function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />



        
        {/* Default route */}
        <Route path="/" element={<Login />} /> 

        {/* all other routes */}
        <Route path="*" element={<Login />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;