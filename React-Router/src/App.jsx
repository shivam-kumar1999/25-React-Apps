import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './component/Home'
import About from './component/About'
import Footer from './component/Footer'
import Contact  from './component/Contact'
import Navigation from './Navigation'

const App = () => {

  const router= createBrowserRouter([
    {
      path:'/',
      element: <> <Navigation/> <Home/> </>    
    },

    {
      path:'/about',
      element: <> <Navigation/>  <About/> </>  
    },
    {
      path:'/contact',
      element:  <> <Navigation/> <Contact/> </>  
    },
    {
      path:'/footer',
      element: <> <Navigation/> <Footer/> </>    
    }
  ])
  return (

   <>
     
     <RouterProvider router={router}></RouterProvider>

    </>
    
  )
}

export default App