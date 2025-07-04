import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Mensagens from "./pages/Mensagens";
import Header from "./components/Header";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mensagens" element={<Mensagens />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
