// import { useState } from 'react'
import { Toaster } from 'react-hot-toast'
import Navbar from './components/Navbar'
import ProductList from './components/ProductList'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

function App() {

  return (
    <>
      <Navbar />
      <ProductList />
      <Toaster />
    </>
  )
}

export default App
