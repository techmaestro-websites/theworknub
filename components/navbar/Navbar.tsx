import Logo from "./Logo"
import NavLink from "./NavLink"
import Cta from "./Cta"

const Navbar = () => {
  return (
    <nav className="bg-[#EAFFE3]">
        <div className=" container flex flex-row items-center justify-between flex-wrap gap-4 py-8">
            <Logo />
            <NavLink />
            <Cta label="book a space" />
        </div>
    </nav>
  )
}
export default Navbar