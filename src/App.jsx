import { Button } from 'flowbite-react'
import './App.css'
import Header from './Component/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import FooterCom from './Component/FooterCom'
import Login from './Component/Login'
import Profile from './Pages/Profile'
import Card from './Pages/Card'
import Policy from './Pages/Policy'
import Transaction from './Pages/Transaction'

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
         <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/card' element={<Card />} />
          <Route path='/policy' element={<Policy />} />
          <Route path='/transactions' element={<Transaction />} />
         </Routes>
        <FooterCom />
      </BrowserRouter>
    </>
  )
}

export default App
