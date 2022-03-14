import { BrowserRouter, Routes, Route } from "react-router-dom";

import AuthState  from "src/components/context/auth/auth.state";

import AuthLayout from "src/components/shared/crossed/AuthLayout";

import Home   from 'src/pages/home';
import Login  from 'src/pages/auth/login';
import Recover from "src/pages/auth/recover";
import Register from "src/pages/auth/register";

function App() {
  return (
    <AuthState>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<AuthLayout />}>
            <Route path="login" element={<Login />} />
            <Route path="recover" element={<Recover />} />
            <Route path="register" element={<Register />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthState>
  );
}

export default App;
