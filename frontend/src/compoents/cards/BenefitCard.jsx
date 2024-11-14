/* eslint-disable react/prop-types */
import { orArr } from '../../assests'

function BenefitCard({num,heading,text}) {
  return (
    <div className='relative flex flex-col items-end p-7 sm:p-10 gap-4 sm:gap-6 max-lg:gap-10 w-full min-w-[290px] h-[340px] sm:w-[413px] sm:h-[346px]
    bg-white rounded-[10px] flex-grow-0 sm:flex-grow'>
    <h1 className='font-bold text-5xl sm:text-6xl order-0'>{num}</h1>
    <div className='flex flex-col gap-2 items-start order-1'>
        <h2 className='font-semibold text-xl'>{heading}</h2>
        <p className='text-[#4C4C4D] font-normal text-[20px] sm:text-[16px] leading-6 line-clamp-4'>{text}</p>
    </div>
    <img src={orArr} width={54} height={54} className='absolute bottom-7 right-7 sm:bottom-5 sm:right-5 custom:bottom-7 custom:right-7 order-2 cursor-pointer'/>
    </div>
  )
}

export default BenefitCard