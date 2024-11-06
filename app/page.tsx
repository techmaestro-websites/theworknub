import Features from "@/components/features/Features"
import Footer from "@/components/footer/Footer"
import GalleryContainer from "@/components/gallery/GalleryContainer"
import HeroContainer from "@/components/hero/HeroContainer"
import Pricing from "@/components/pricing/Pricing"
import SpacesContainer from "@/components/spaces/SpacesContainer"

const HomePage = () => {
  return (
    <>
      <HeroContainer />
      <Features />
      <SpacesContainer />
      <Pricing />
      <GalleryContainer />
      <Footer />
    </>
  )
}
export default HomePage