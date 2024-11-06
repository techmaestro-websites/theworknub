import Hotdesk from '@/public/images/hotdesk.jpg'
import Dedicated from '@/public/images/dedicatedOffice.jpg'
import Team from '@/public/images/team.jpg'
import Office from '@/public/images/privateOffice.jpg'
import Conference from '@/public/images/conference.jpg'
import Image from 'next/image'
import { Card, CardContent } from '../ui/card'

const SpaceCard = () => {
  return (
   <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 itens-center justify-center gap-10 px-4'>
        <Card className='flex flex-col items-center justify-center gap-5 bg-[#F9690E] py-4 rounded-xl'>
            <CardContent>
                <Image
                    src={Hotdesk}
                    alt="line"
                    className="p-2 rounded-xl h-[300px] w-full]"
                />
                <h1 className='font-bold text-xl  text-white uppercase tracking-widest my-2'>Hot Desk</h1>
                <p className='text-white font-light'>Hot desk, dedicated desk, private office, meeting room, rest lounge, a conducive and innovative space</p>
            </CardContent>
        </Card>
        <Card className='flex flex-col items-center justify-center gap-5 bg-[#F9690E] py-4 rounded-xl'>
            <CardContent>
                <Image
                    src={Dedicated}
                    alt="line"
                    className="p-2 rounded-xl h-[300px]"
                />
                <h1 className='font-bold text-xl  text-white uppercase tracking-widest my-2'>Dedicated Desk</h1>
                <p className='text-white font-light'>Your own personal workspace, available for as long as you need. Settle in, stay focused and make it yours - whether for a week, a month or longer</p>
            </CardContent>
        </Card>
        <Card className='flex flex-col items-center justify-center gap-5 bg-[#F9690E] py-4 rounded-xl'>
            <CardContent>
                <Image
                    src={Team}
                    alt="line"
                    className="p-2 rounded-xl h-[300px]"
                />
                <h1 className='font-bold text-xl  text-white uppercase tracking-widest my-2'>Meeting Room</h1>
                <p className='text-white font-light'>Book the perfect meeting room for your team, fully equiped with everything you need to collaborate and create seamlessly</p>
            </CardContent>
        </Card>
        <Card className='flex flex-col items-center justify-center gap-5 bg-[#F9690E] py-4 rounded-xl'>
            <CardContent>
                <Image
                    src={Office}
                    alt="line"
                    className="p-2 rounded-xl h-[300px]"
                />
                <h1 className='font-bold text-xl  text-white uppercase tracking-widest my-2'>Private Office</h1>
                <p className='text-white font-light'>Step into your own personal offices, designed for focus, comfort and success</p>
            </CardContent>
        </Card>
        <Card className='flex flex-col items-center justify-center gap-5 bg-[#F9690E] py-4 rounded-xl'>
            <CardContent>
                <Image
                    src={Conference}
                    alt="line"
                    className="p-2 rounded-xl h-[300px]"
                />
                <h1 className='font-bold text-xl  text-white uppercase tracking-widest my-2'>Conference Room</h1>
                <p className='text-white font-light'>Host your next big idea in our cozy, fully-equipped mini event space. Perfect for workshops, trainings, conferences, meetups or gatherings</p>
            </CardContent>
        </Card>
        
    </div>
  )
}
export default SpaceCard