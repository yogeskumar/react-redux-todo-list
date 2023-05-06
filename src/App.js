import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import User from './pages/User';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="user" element={<User />} />
        <Route path="/" element={<Home />}>
          <Route index element={<Home />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
