import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/home/Home";
import Layout from "./components/layout/Layout";
import Login from "./pages/auth/Login";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout> <Home /> </Layout>} /> {/* Route for Home page */}
          <Route path="/login" element={ <Login /> } />             {/* Route for Login page */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
