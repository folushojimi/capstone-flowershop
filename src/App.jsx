import {BrowserRouter, Routes, Route } from 'react-router-dom'
import SignUp from './pages/auth/SignUp'
import SignIn from './pages/auth/SignIn'

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



{/* <div className="flex justify-center">
       <AuthForm
       
       fields={[
          {
            label:"username",
            type:"text"
          },
          {
            label:"password",
            type:"password"
          },
       ]}
       
        submitButtonLabel="sign in"
       />
       </div> */}
       
  