import { NavLink } from "react-router-dom"
import { Navs } from "../utils/Constants"
import logo from '../assets/react.svg'
import { FaCartShopping } from "react-icons/fa6";

const Navbar = () => {



    const styles = ({ isActive }) => {
        return {
            opacity: isActive ? "0.4" : "1",
            color: isActive ? "gray" : ""
        }
    }
    return (
        <nav className="container mx-auto py-[10px] px-[30px] border-b-2 flex justify-between items-center">
            <div>
                <img className="w-[70px]" src={logo} alt="" />
            </div>
            <ul className="flex">
                {Navs.map((value, index) => {
                    return (
                        <li className="mx-[10px] text-[30px]" key={index}>
                            <NavLink style={styles} to={value.path}>{value.text}</NavLink>
                        </li>
                    )
                })}
                <FaCartShopping className="mt-1 ml-10 text-[29px]" />
                <span className='bg-red-500 rounded-3xl h-[20px] w-[20px] mx-auto  ml-[-6px] mt-[-5px] text-white'>
                    <p className="ml-[5px] mt-[-5px]">0</p>
                </span>
            </ul>
        </nav>

    )
}

export default Navbar