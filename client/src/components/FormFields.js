import { useState } from "react";
import { db } from "../config";
import { collection, addDoc } from "firebase/firestore";
import DropDown from "./Dropdown";
import { options, options1 } from "../utils/options";

function FormFields() {
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [roll, setRoll] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [landmark, setLandmark] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");

  const [selection, setSelection] = useState(null);
  const handleSelect = (option) => {
    setSelection(option);
  };

  const [selection1, setSelection1] = useState(null);
  const handleSelect1 = (option1) => {
    setSelection1(option1);
  };

  const handlePincode = (e) => {
    var ASCIICode = e.which ? e.which : e.keyCode;
    if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57)) return false;
    setPincode(e.target.value);
    return true;
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
    if (e.target.value > 2) {
    }
    setRoll(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, "students"), {
        firstName: firstName,
        MiddleName: middleName,
        LastName: lastName,
        divsion: selection.label,
        RollNumber: roll,
        classNumber: selection1.label,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    setFirstName("");
    setMiddleName("");
    setLastName("");
    setCity("");
    setPincode("");
    setRoll("");
    setAddress1("");
    setAddress2("");
    setLandmark("");
    setSelection("Select...");
    setSelection1("Select...");
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

        <div className=" mt-20 flex">
          <textarea
            value={address1}
            onChange={(e) => {
              setAddress1(e.target.value);
            }}
            placeholder="Address Line 1"
            rows={3}
            cols={5}
            className="mt-3 px-1 py-2  mr-4 border-2 border-gray-200 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded"
          />
          <textarea
            value={address2}
            onChange={(e) => {
              setAddress2(e.target.value);
            }}
            placeholder="Address Line 2"
            rows={3}
            cols={5}
            className="mt-3 px-1 py-2 mr-4 border-2 border-gray-200 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded"
          />
        </div>

        <div className="flex flex-row justify-between ">
          <input
            value={landmark}
            onChange={(e) => {
              setLandmark(e.target.value);
            }}
            type="text"
            placeholder="Landmark"
            autoComplete="given-name"
            className="mt-3 px-1 mr-4 py-3 border-2 border-gray-200 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded"
          />

          <input
            value={city}
            onChange={(e) => {
              setCity(e.target.value);
            }}
            type="text"
            placeholder="City"
            className="mt-3 px-1 py-3 mr-4 border-2 border-gray-200 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded"
          />

          <input
            value={pincode}
            type="number"
            onChange={handlePincode}
            placeholder="Pincode"
            className="mt-3 px-1 py-3 border-2 border-gray-200 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>

        <button className=" mt-5 border border-red-600 bg-red-600 text-white font-semibold text-xl w-72 h-22 rounded py-1  ">
          Add Student
        </button>
      </form>
    </div>
  );
}

export default FormFields;
