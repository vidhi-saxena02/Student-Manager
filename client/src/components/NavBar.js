import logo from "../assets/logo.png";
import { BsFillPersonFill } from "react-icons/bs";

function NavBar({ username }) {
  return (
    <div className="flex flex-row justify-between items-center ">
      <img src={logo} alt="logo" className="w-32 h-22 mx-2" />

      <div className="flex flex-row justify-between items-center border-solid border-2 border-gray-200 h-10 w-60 mr-10 bg-white">
        <BsFillPersonFill className="w-10 h-7" />
        <div className="font-semibold px-7 text-xl ">{username}</div>
      </div>
    </div>
  );
}

export default NavBar;
