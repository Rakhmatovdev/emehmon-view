import { BrowserRouter, Route, Routes, Navigate } from "react-router";
import Home from "./views/home/Home.tsx";
import Dashboard from "./views/dashboard/Dashboard.tsx";
import QueryProvider from "./config/providers/query.provider.tsx";
import ReduxProvider from "./config/providers/redux.provider.tsx";
import Login from "./views/auth/signin/Login.tsx";
import * as React from "react";
import DefaultLayout from "./components/LayoutStructure/index.tsx";
import Reset from "./views/auth/reset/Reset.tsx";
import Arrived from "./views/kogg/Arrived.tsx";
import Departed from "./views/kogg/Departed.tsx";
import Registered from "./views/kogg/Registered.tsx";
import Adjustment from "./views/kорректировка/Adjustment.tsx";
import Arm from "./views/иммигранты/Arm.tsx";
import  Borders from "./views/иммигранты/Borders.tsx";
import ArmDetail from "./views/иммигранты/ArmDetail.tsx";
import Application from "./views/applications/Applications.tsx";
import ApplicationDetail from "./views/applications/ApplicationDetail.tsx";


const AuthGuard = ({ children }: { children: React.ReactNode }) => {
  const access = localStorage.getItem("accessToken");

  if (!access) {
    return <Navigate to="/auth/login" replace />;
  }
  return <DefaultLayout>{children}</DefaultLayout>;
};


function App() {
  const protectedRoutes = [
    { path: "/", element: <Home /> },
    { path: "/dashboard", element: <Dashboard /> },
    { path: "/arrived", element: <Arrived /> },
    { path: "/departed", element: <Departed /> },
    { path: "/registered", element: <Registered /> },
    { path: "/adjustment", element: <Adjustment /> },
    { path: "/arm", element: <Arm /> },
    { path: "/arm/:id", element: <ArmDetail /> },
    { path: "/arm/borders", element: <Borders /> },
    { path: "/applications", element: <Application /> },
    { path: "/applications/:id", element: <ApplicationDetail /> },
  ];
  return (
    <ReduxProvider>
      <QueryProvider>
        <BrowserRouter>
          <Routes>
         
  <Route path="/auth">
    <Route path="login" element={<Login />} />
    <Route path="reset" element={<Reset />} />
  </Route>

  {protectedRoutes.map(({ path, element }) => (
    <Route key={path} path={path} element={<AuthGuard>{element}</AuthGuard>} />
  ))}

  <Route path="*" element={<Navigate to="/" replace />} />

          </Routes>
        </BrowserRouter>
      </QueryProvider>
    </ReduxProvider>
  );
}

export default App;
