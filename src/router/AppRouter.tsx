import { BrowserRouter, Route, Routes } from "react-router-dom"
import { AuthLayout, DashboardLayout } from "../layouts"
import { Home, Login, Signup } from "../views"

type props = {}

const AppRouter: React.FC<props> = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardLayout />} >
          <Route path="home" element={<Home />} />
        </Route>
        <Route path="/" element={<AuthLayout />}>
          <Route index element={<Login />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Route>
        <Route path="*" element={<div style={{ textAlign: 'center', paddingTop: '5vw' }}>404! Error</div>} />
      </Routes>
    </BrowserRouter>
  )
}
export default AppRouter