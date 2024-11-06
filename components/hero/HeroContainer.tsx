import HeroImage from "@/components/hero/HeroImage"
import HeroText from '@/components/hero/HeroText'
import Focus from '@/public/images/focustext.png'
import Image from "next/image"

const HeroContainer = () => {
  return (
    <section className="relative bg-[#EAFFE3] py-20 h-[90vh]">
        <div className=" container grid grid-cols-1 md:grid-cols-2 items-center gap-24">
            <HeroText />
            <HeroImage />
        </div>
        <Image
            src={Focus}
            alt="line"
            className="absolute w-[18rem] bottom-0 left-8 object-cover hidden lg:block"
        />
    </section>
  )
}
export default HeroContainer