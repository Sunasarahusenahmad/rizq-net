import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Loading from "../../Utils/Loading";
import Company from "../../Pages/client/Company";

// Lazy load client pages
const HomePage = React.lazy(() => import("../../Pages/client/Index"));

function ClientRoutes() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        {/* Home Page */}
        <Route exact path="/" element={<HomePage />} />
        
        {/* Home Page */}
        <Route path="/company" element={<Company />} />
        
      </Routes>
    </Suspense>
  );
}

export default ClientRoutes;
