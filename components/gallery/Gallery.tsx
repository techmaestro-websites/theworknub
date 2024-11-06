import PrivateOffice from '@/public/images/privateOffice.jpg'
import Conference from '@/public/images/conference.jpg'
import Dedicated from '@/public/images/dedicatedOffice.jpg'
import HotDesk from '@/public/images/hotdesk.jpg'
import Image from "next/image"

const Gallery = () => {
  return (
    <div className=' grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-2'>
        <Image src={PrivateOffice} alt='hero' className='w-full h-[25rem] rounded-md object-cover y' />
        <Image src={Conference} alt='hero' className='w-full h-[25rem] rounded-md object-cover ' />
        <Image src={Dedicated} alt='hero' className='w-full h-[25rem] rounded-md object-cover ' />
        <Image src={HotDesk} alt='hero' className='w-full h-[25rem] rounded-md object-cover ' />
    </div>
  )
}
export default Gallery