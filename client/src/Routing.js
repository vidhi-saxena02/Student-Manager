import HomePage from "./Pages/HomePage";
import ManageStudents from "./Pages/ManageStudents";
import SideBar from "./components/SideBar";
import NavBar from "./components/NavBar";
import { useLocation } from "react-router-dom";
import { useState } from "react";

function Routing() {
  const location = useLocation();
  const username = location.state.email;
  const [isStud, setIsStud] = useState(true);

  const changeState = (state) => {
    setIsStud(!state);
  };
  return (
    <div>
      <div className="bg-gray-100 h-screen">
        <NavBar username={username} />
        <div className="container mx-4 grid grid-cols-6 gap-4 mt-10">
          <SideBar changeState={changeState} />
          <div className="col-span-5">
            {isStud ? <HomePage /> : <ManageStudents />}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Routing;
