import LiveCounter from '../../assets/Home-assets/LiveCounter';

export const Achieve=({
    icons,
    dash,
    desc,
    
})=>{
    return(

        <div className='p-4 pt-6 h-28 w-24 lg:w-56'>
          <img src={icons} alt="Card image" className='m-auto h-6 lg:h-12 lg:w-12'/>
          <h4 className="capitalize font-roboto text-lg font-bold py-2 lg:text-2xl text-custom-white text-center"><LiveCounter  targetNumber={dash}></LiveCounter></h4>
          <p className='text-custom-white text-center font-roboto text-0.6 font-bold pt-1 lg:text-2xl '>{desc}</p>
        </div>
)
}

