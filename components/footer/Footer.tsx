import Logo from "../navbar/Logo"

const Footer = () => {
  return (
    <div className="bg-black text-white flex flex-col md:flex-row items-center justify-between p-6 gap-4">
        <div>
            <Logo />
        </div>
        <div className="text-center md:text-right max-w-sm my-4">
            <h1 className="font-bold tracking-widest text-xl">Worknub HQ</h1>
            <h1 className="font-mono">2nd Floor, Building 2, West One, Opposite Environmental Tasl Force, Agodi GRA, Ibadan Oyo</h1>
            <h1 className="font-bold mt-2">+ 234 000 000 000</h1>
            <p className="text-sm font-serif mt-4">helpdesk@worknub.com</p>
        </div>
    </div>
  )
}
export default Footer