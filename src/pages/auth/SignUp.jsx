import AuthForm from "./AuthForm"

const SignUp =()=>{
 

    return(
        <>

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

        </>
    )
}

export default SignUp