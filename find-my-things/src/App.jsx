import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import MyThings from "./pages/MyThingsPage";
import ItemLocationPage from "./pages/ItemLocationPage";
import SettingsAndSupportPage from "./pages/SettingsAndSupportPage"
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/minhas-coisas" element={<MyThings />} />
        <Route path="/localizacao" element={<ItemLocationPage />} />
        <Route path="/configuracao-ajuda" element={<SettingsAndSupportPage />} />
      </Routes>
    </BrowserRouter>
  );
}
