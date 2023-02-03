import { BsFillPersonFill } from "react-icons/bs";

function View({ first, middle, last, division, classnum, roll }) {
  return (
    <div class="flex justify-center">
      <div class="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
        <BsFillPersonFill className="text-3xl text-red-500 font-bold " />
        <h5 class="text-gray-900 text-xl leading-tight font-medium mb-2">
          Name- {first} {middle} {last}
        </h5>
        <p class="text-gray-700 text-base mb-4">
          Class- {classnum}-{division}
        </p>
        <div>Roll No-{roll}</div>
      </div>
    </div>
  );
}

export default View;
