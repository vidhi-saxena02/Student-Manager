import { useState } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../config";
import DropDown from "./Dropdown";
import { options, options1 } from "../utils/options";

function EditFields({ id, onClose }) {
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [roll, setRoll] = useState("");
  const [selection, setSelection] = useState(null);
  const handleSelect = (option) => {
    setSelection(option);
  };

  const [selection1, setSelection1] = useState(null);
  const handleSelect1 = (option1) => {
    setSelection1(option1);
  };

  const handlefirst = (e) => {
    setFirstName(e.target.value);
  };
  const handleLast = (e) => {
    setLastName(e.target.value);
  };

  const handleMiddle = (e) => {
    setMiddleName(e.target.value);
  };

  const handleRoll = (e) => {
    setRoll(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const studentDocRef = doc(db, "students", id);
    try {
      await updateDoc(studentDocRef, {
        firstName: firstName,
        MiddleName: middleName,
        LastName: lastName,
        divsion: selection.label,
        RollNumber: roll,
        classNumber: selection1.label,
      });
    } catch (err) {
      alert(err);
    }
    onClose();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-row justify-between ">
          <input
            value={firstName}
            onChange={handlefirst}
            type="text"
            name="first_name"
            placeholder="First Name"
            autoComplete="given-name"
            className="mt-3 px-1 mr-4 py-3 border-2 border-gray-200 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded"
          />

          <input
            onChange={handleMiddle}
            value={middleName}
            type="text"
            placeholder="Middle Name"
            autoComplete="given-name"
            className="mt-3 px-1 py-3 mr-4 border-2 border-gray-200 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded"
          />

          <input
            onChange={handleLast}
            value={lastName}
            type="text"
            name="last_name"
            placeholder="Last Name"
            autoComplete="family-name"
            className="mt-3 px-1 py-3 border-2 border-gray-200 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>

        <div className="flex flex-row justify-between items-center bg-green-100 relative">
          <div className="w-1/3 absolute top-8">
            <DropDown
              options={options1}
              value={selection1}
              onChange={handleSelect1}
            />
          </div>

          <div className="  w-1/3 absolute top-8 left-[34%]">
            <DropDown
              options={options}
              value={selection}
              onChange={handleSelect}
            />
          </div>
          <input
            onChange={handleRoll}
            type="text"
            pattern="\d*"
            minLength="2"
            maxLength="2"
            value={roll}
            placeholder="Enter Roll Number in digit"
            className="absolute top-8 left-[68%] w-1/3 px-1 py-3 border-2 border-gray-200 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded"
          />
        </div>

        <button className="text-xl font-semibold border border-blue-500 bg-blue-500 text-white mt-48 float-right  rounded px-10 py-2">
          Submit
        </button>
      </form>
    </div>
  );
}

export default EditFields;
