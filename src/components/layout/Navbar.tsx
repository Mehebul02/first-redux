import { logo } from "@/assets/images"
import { Link } from "react-router-dom"
import { ModeToggle } from "../mode-toggle"

const Navbar = () => {
    return (
        <div>

            <nav className="max-w-7xl mx-auto flex items-center justify-between py-4 px-4 sm:px-6 lg:px-8">
                <div className="flex items-center">
                    <img src={logo} alt="logo" />
                    <h1 className="font-medium ">Redux</h1>
                </div>
              <div className="space-x-4">
              <Link to='/'>Tasks</Link>
              <Link to='/users'>Users</Link>
              <div>
                <ModeToggle/>
              </div>
              </div>
            </nav>
        </div>
    )
}

export default Navbar