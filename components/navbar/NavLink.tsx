import { Nav } from "@/utils/links"
import Link from "next/link"

const NavLink = () => {
  return (
    <div className="flex items-center justify-center rounded-full gap-4 bg-[#3BEB00] px-6 py-2 shadow-md">
        {Nav.map((link) => (
            <li key={link.href} className="list-none">
                <Link 
                    href={link.href}
                    className="capitalize font-semibold px-2 hover:text-gray-500"
                >
                    {link.label}
                </Link>
            </li>
        ))}
    </div>
  )
}
export default NavLink