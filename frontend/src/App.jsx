import { Routes, Route } from "react-router-dom";

import AppRoutes from "./Routes/AppRoutes";
import AdminRoutes from "./Routes/AdminRoutes";

const App = () => {
  return (
    <Routes>
      <Route path="/admin/*" element={<AdminRoutes />} />

      <Route path="/*" element={<AppRoutes />} />
    </Routes>
  );
};

export default App;
