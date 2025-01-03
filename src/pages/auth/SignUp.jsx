import AuthForm from "./AuthForm"
import Firstpage from "./firstpage"
import { Link } from "react-router-dom"
const SignUp =()=>{
 

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
            {
                label:"confirm password",
                type:"password"
            },
         ]}
           
        submitButtonLabel="create account"
         />
         </div>
         <Link to={"/"} className="">sign in</Link> 
         </Firstpage>


       
 
        </>
    )
}

export default SignUp