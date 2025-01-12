import {useState } from "react";
import Fields from "./fields";

const AuthForm =({fields, submitButtonLabel, onSubmit})=> {


    // useState converted to an object
    const [values, setValues]=useState(()=> {
        const initialState = {};
        for(let field of fields){
            initialState[field.label] = '';
        }

        return initialState

    });
    // console.log(values)

   const [loading, setLoading]=useState(false)


    return(
     <>
        <form className="font-lato bg-white border rounded-lg border-slate-300 m-4 p-4"
        onSubmit={async (e)=>{
            e.preventDefault();
            setLoading(true);
            await onSubmit(values);
            setLoading(false);
        }}
        >
            {

            fields.map((field)=> 
            <Fields 
            key={field.label}
            label={field.label}
            type={field.type}
            value={values[field.label]}
            onChange={e=> {
              setValues({ ...values, [field.label]: e.target.value});
            }}
            />
            )
            
            }

            <button className="text-white bg-emerald-700 w-full py-2 rounded-lg mt-4">
            {submitButtonLabel}

             {loading &&
             <div className="">
            {/*make sure to add the logo and the tailwind animation spinner here*/}
             </div>
             }
             

            </button> 

        </form>

    </>  
    )
}

export default AuthForm