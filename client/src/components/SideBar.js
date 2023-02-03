import { BiLogOut } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { getAuth, signOut } from "firebase/auth";

function SideBar({ changeState }) {
  const navigate = useNavigate();
  const [activestu, setActivestu] = useState(
    "font-bold border border-red-500 bg-red-500 text-white py-1 "
  );
  const [activeman, setActiveman] = useState("text-xl text-gray-600");

  const handleLogout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        alert("did not logout");
      });
  };

  const handleStudent = () => {
    changeState(false);
    setActivestu(
      "font-bold border border-red-500 bg-red-500 text-white rounded py-1"
    );
    setActiveman("text-xl text-gray-600");
  };

  const handleManger = () => {
    changeState(true);
    setActivestu("text-xl text-gray-600");
    setActiveman(
      "font-bold border border-red-500 bg-red-500 text-white rounded py-1"
    );
  };
  return (
    <div className=" top-10  flex flex-col gap-10 ">
      <button onClick={handleStudent} className={activestu}>
        Student
      </button>
      <button onClick={handleManger} className={activeman}>
        Manage
      </button>
      <div
        className="flex items-center gap-1 ml-10 hover:text-xl cursor-pointer"
        onClick={handleLogout}
      >
        <BiLogOut />
        Logout
      </div>
    </div>
  );
}

export default SideBar;
