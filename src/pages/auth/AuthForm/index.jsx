import { useEffect, useState } from "react";

const AuthForm =({fields, submitButtonLabel})=> {


    // useState consverted to an object

    const [values, setValues]=useState(()=> {
        const initialState = {};
        for(let field of fields){
            initialState[field.label] = '';
        }

        return initialState
    });

   


 




    return(
     <>
        <form className="font-lato bg-white border rounded-lg border-slate-300 m-4 p-4">
            {

            fields.map((field)=> <div key={field.label} className="flex flex-col my-4">

             <label htmlFor={field.label}>
              {field.label}
            </label>

            <input 
              id={field.label}
              type={field.type}
              value={values[fields.label]}
              onChange={e=> {
                setValues({ ...values, [field.label]: e.target.value});
              }}
              className="w-64 px-2 py1 border bg-slate-50 border-slate-200 rounded-lg focus:outline-emerald-600"
            />
            </div>)

            }

            <button className="text-white bg-emerald-700 w-full py-2 rounded-lg mt-4">
            {submitButtonLabel}
            </button> 
        </form>

    </>  
    )
}

export default AuthForm