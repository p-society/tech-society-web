export const achieve=({
    icons,
    achieve_title,
    desc,
    
})=>{
    return(

        <div className='p-4 pt-6 basis-1/3'>
          <img src={icons} alt="Card image" className='m-auto h-6 '/>
          <h4 className="capitalize font-roboto text-lg font-bold py-2 text-custom-white text-center">{achieve_title}</h4>
          <p className='text-custom-white text-center font-roboto text-0.6 pt-1'>{desc}</p>
        </div>
)
}

