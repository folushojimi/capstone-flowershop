import { useState } from "react";
import AuthForm from "./AuthForm";
import Firstpage from "./firstpage";
import { Link } from "react-router-dom";
import * as userService from "../../services/user";


const SignUp =()=>{
 
const[error, setError]=useState("")

    return(
        <>

         <Firstpage>
         <div className="flex flex-col justify-center ">

             <div className="text-center text-red-500">{error}</div>
          
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
        onSubmit={async (values)=>{
            if (values.username.length < 4){
                setError("username too short")
                return;
            }

            if (values.password.length < 4){
                setError("password too short")
                return;
            }

            if (values.password != values['confirm password']){
                setError("password do not match")
                return;
            }

           const response = await userService.createUsers({
            username: values.username,
            password: values.password
           })
           
             if(response.status === 201) {
                setError("")
                console.log('user created')
             }else{
                const data = await response.json()
                // console.log(data)
                setError(data.error)
             }


           }}

         />
         </div>
         <Link to={"/"} className="text-green-800 underline">sign in</Link> 
         </Firstpage>


       
 
        </>
    )
}

export default SignUp