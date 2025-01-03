import AuthForm from "./AuthForm"
import Firstpage from "./firstpage"
import {Link} from "react-router-dom"

const SignIn =()=>{
    return(

       <>
  <Firstpage>
  <div className="flex justify-center">
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
       </div> 
       
       <Link to={"/SignUp"} className="">create account</Link>
  </Firstpage>
   
      </>

    )
}

export default SignIn


 