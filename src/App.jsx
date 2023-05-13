import { Routes, Route, Navigate } from "react-router-dom";
import { Navbar } from "@/widgets/layout";
import routes from "@/routes";

function App() {
  return (
    <div className="scroll-smooth">
      <div className=" w-full px-8">
        <Navbar routes={routes} />
      </div>
      
      <Routes>
        {routes.map(
          ({ path, element }, key) =>
            element && <Route key={key} exact path={path} element={element} />
        )}
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </div>
  );
}

export default App;
