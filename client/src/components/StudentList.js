import { useState } from "react";
import Modal from "./Modal";

import EditFields from "./EditField";
import View from "./View";

function StudentList({
  id,
  first,
  middle,
  last,
  division,
  classnum,
  roll,
  handleDelete,
}) {
  // const handleDelete = async () => {
  //   // const studentdoc = doc(db, "students", id);
  //   // try {
  //   //   await deleteDoc(studentdoc);
  //   // } catch (err) {
  //   //   alert(err);
  //   // }
  // };

  const [showModal, setShowModal] = useState(false);

  const [edit, setEdit] = useState(false);

  const handleClickView = () => {
    setShowModal(true);

    setEdit(false);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const handleClickEdit = () => {
    setShowModal(true);
    setEdit(true);
  };

  const actionBar = (
    <div>
      <button onClick={handleClose}>Close</button>
    </div>
  );

  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar} edit={edit}>
      {edit ? (
        <EditFields id={id} onClose={handleClose} />
      ) : (
        <View
          first={first}
          last={last}
          middle={middle}
          division={division}
          classnum={classnum}
          roll={roll}
        />
      )}
    </Modal>
  );

  return (
    <tbody className="divide-y divide-gray-200">
      <tr>
        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
          {first} {middle} {last}
        </td>
        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
          {classnum}-{division}
        </td>
        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
          {roll}
        </td>

        <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
          <button
            className="text-red-500 hover:text-red-700"
            onClick={handleClickView}
          >
            View
          </button>
        </td>
        <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
          <button
            className="text-red-500 hover:text-red-700"
            onClick={handleClickEdit}
          >
            Edit
          </button>
        </td>
        <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
          <button
            className="text-red-500 hover:text-red-700"
            onClick={() => handleDelete(id)}
          >
            Delete
          </button>
        </td>
      </tr>
      <>{showModal && modal}</>
    </tbody>
  );
}

export default StudentList;
