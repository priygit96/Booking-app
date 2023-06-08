import './App.css'
import {Route, Routes} from "react-router-dom"
import IndexPage from './pages/IndexPage.jsx'
import LoginPage from './pages/LoginPage'
import Layout from './Layout'
import SignupPage from './pages/SignupPage'
function App() {
  return (
    <Routes>
      <Route path='/' element = {<Layout />} >
      
      <Route index element={<IndexPage />} />
      <Route path="/login" element = {<LoginPage />} />
      <Route path="/register" element= {<SignupPage />} />
      </Route>
      
      
    </Routes>
     
  )
}

export default App
