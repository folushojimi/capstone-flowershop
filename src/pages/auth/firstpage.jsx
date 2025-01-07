const Firstpage =({children})=>{
    return(
        <>
      <div className="flex">
<div>
<img src="/images/flowers.jpg" alt="flowers" className="h-screen max-w-[550px] hidden md:block "/>
</div>

<div className="bg-green-400 w-full h-screen  flex flex-col justify-center items-center">
    <img src="/images/flower.png" alt="flower"/>
    {children}
</div>
     </div>
        </>
    )
}

export default Firstpage

  