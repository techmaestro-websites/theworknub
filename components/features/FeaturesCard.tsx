import Office from '@/public/images/Office icon.png'
import Car from '@/public/images/Car-icon.png'
import Light from '@/public/images/Light-icon.png'
import Wifi from '@/public/images/Wi-Fi icon.png'
import Image from 'next/image'

const FeaturesCard = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 itens-center justify-center gap-10 px-4'>
        <div className='flex flex-col items-center justify-center gap-5 bg-[#EAFFE3] p-10 rounded-xl hover:translate-y-[-6px] transition-all'>
            <Image
                src={Office}
                alt="line"
                className="bg-[#F9690E] h-20 w-20 p-4 rounded-xl"
            />
            <h1 className='font-bold text-xl text-center uppercase tracking-widest'>Conductive workspace</h1>
            <p className='text-center font-semibold'>Hot desk, dedicated desk, private office, meeting room, rest lounge, a conducive and innovative space</p>
        </div>
        <div className='flex flex-col items-center justify-center gap-5 bg-[#EAFFE3] p-10 rounded-xl hover:translate-y-[-6px] transition-all'>
            <Image
                src={Wifi}
                alt="line"
                className="bg-[#F9690E] h-20 w-20 p-4 rounded-xl"
            />
            <h1 className='font-bold text-xl text-center uppercase tracking-widest'>Free and fast wi-fi</h1>
            <p className='text-center font-semibold'>Free, fast and reliable internet connection</p>
        </div>
        <div className='flex flex-col items-center justify-center gap-5 bg-[#EAFFE3] p-10 rounded-xl hover:translate-y-[-6px] transition-all'>
            <Image
                src={Light}
                alt="line"
                className="bg-[#F9690E] h-20 w-20 p-4 rounded-xl"
            />
            <h1 className='font-bold text-xl text-center uppercase tracking-widest'>uninterrupted electricity</h1>
            <p className='text-center font-semibold'>We provide stable power supply</p>
        </div>
        <div className='flex flex-col items-center justify-center gap-5 bg-[#EAFFE3] p-10 rounded-xl hover:translate-y-[-6px] transition-all'>
            <Image
                src={Car}
                alt="line"
                className="bg-[#F9690E] h-20 w-20 p-4 rounded-xl"
            />
            <h1 className='font-bold text-xl text-center uppercase tracking-widest'>Spacious Packing Space</h1>
            <p className='text-center font-semibold'>We have ample parking space</p>
        </div>
        
        
    </div>
  )
}
export default FeaturesCard