import { Route, Routes } from "react-router-dom"
import Register from "./components/Register"
import Login from "./components/Login"
import Layout from "./components/Layout"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
    </Routes>
  )
}

export default App