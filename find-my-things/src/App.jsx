import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import MyThings from "./pages/MyThingsPage";
import ItemLocationPage from "./pages/ItemLocationPage";
import SettingsAndSupportPage from "./pages/SettingsAndSupportPage"
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/registrar" element={<RegisterPage />} />
        <Route path="/minhas-coisas" element={<MyThings />} />
        <Route path="/localizacao" element={<ItemLocationPage />} />
        <Route path="/configuracao-ajuda" element={<SettingsAndSupportPage />} />
      </Routes>
    </BrowserRouter>
  );
}
