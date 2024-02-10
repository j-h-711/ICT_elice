import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main/Main";

import "./App.css";

export const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
    </Routes>
  );
};

export default App;
