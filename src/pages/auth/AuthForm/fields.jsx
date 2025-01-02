const Fields =({label, type,  onChange, value})=>{

    return(
        <>
<div className="flex flex-col my-4"> 

<label htmlFor={label}>
 {label}
</label>

<input 
 id={label}
 type={type}
 value={value}
 onChange={onChange}
 className="w-64 px-2 py1 border bg-slate-50 border-slate-200 rounded-lg focus:outline-emerald-600"
/>
</div>
        </>
    )
}

export default Fields