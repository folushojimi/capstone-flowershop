import {BrowserRouter, Routes, Route,} from 'react-router-dom'
import SignUp from './pages/auth/SignUp'
import SignIn from './pages/auth/SignIn'

// import apiFetch from "./services/apiFetch"


// const response = await apiFetch("GET", "/api-key/info")
// console.log(response.status)


const App=()=> {
  
  return (
    <BrowserRouter>
     <>
<Routes>
<Route path='/' element={<SignIn/>}/>
<Route path='/SignUp' element={<SignUp/>}/>
</Routes>
    </>
    </BrowserRouter>
  )

}

export default App



  
  