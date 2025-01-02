import AuthForm from "./AuthForm"

const SignIn =()=>{
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
       ]}
       
        submitButtonLabel="sign in"
       />
       </div>
       
  
      </>

    )
}

export default SignIn

