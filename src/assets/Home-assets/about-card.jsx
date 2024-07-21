export const Card=({
    imgSrc,
    card_title,
    descirption,
    
})=>{
    return(

        <div className='p-4 pt-6 basis-1/3 '>
          <img src={imgSrc} alt="Card image" className='m-auto h-6 sm:h-14 '/>
          <h4 className="capitalize font-roboto text-lg font-bold py-2 text-custom-white text-center lg:text-2xl">{card_title}</h4>
          <p className='text-custom-white text-center font-roboto text-0.6 pt-1 lg:text-base lg:px-20'>{descirption}</p>
        </div>
)
}