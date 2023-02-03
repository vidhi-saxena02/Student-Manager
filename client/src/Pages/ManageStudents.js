import { useEffect, useState } from "react";
import { db } from "../config";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import StudentList from "../components/StudentList";
import { doc, deleteDoc } from "firebase/firestore";

function ManageStudents() {
  const [students, setStudents] = useState([]);
  const [del, setDel] = useState(false);
  const [id, setId] = useState("");

  const handleDelete = (userid) => {
    setDel(true);
    setId(userid);
  };

  useEffect(() => {
    const q = query(collection(db, "students"), orderBy("RollNumber"));
    onSnapshot(q, (querySnapshot) => {
      setStudents(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);

  const renderedStudents = students.map((stud) => {
    return (
      <StudentList
        key={stud.id}
        id={stud.id}
        first={stud.data.firstName}
        middle={stud.data.MiddleName}
        last={stud.data.LastName}
        roll={stud.data.RollNumber}
        division={stud.data.divsion}
        classnum={stud.data.classNumber}
        handleDelete={handleDelete}
      />
    );
  });

  const handleYes = async () => {
    const studentdoc = doc(db, "students", id);
    try {
      await deleteDoc(studentdoc);
    } catch (err) {
      alert(err);
    }
    setDel(!del);
  };

  const handleCancel = () => {
    setDel(!del);
    console.log(id);
  };

  return (
    <div>
      {del ? (
        <div
          className="bg-red-100 border-t border-b border-red-500 text-red-700 px-4 py-3 mb-1"
          role="alert"
        >
          <p className="font-bold">Are you sure you want to Delete?</p>
          <button
            onClick={handleYes}
            className="border border-red-500 text-white bg-red-500 text-xl rounded py-1 px-2 mt-1"
          >
            Yes
          </button>
          <button
            onClick={handleCancel}
            className="border border-red-500 text-white bg-red-500 text-xl rounded py-1 px-2 mt-1 ml-2"
          >
            Cancel
          </button>
        </div>
      ) : (
        <></>
      )}
      <div className="ml-10 relative">
        <div className="font-bold text-xl mb-10">Manage Students</div>
        <div className="flex flex-col">
          <div className="overflow-x-auto">
            <div className="p-1.5 w-full inline-block align-middle">
              <div className="overflow-hidden border rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-red-500">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-left text-white uppercase "
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-left text-white uppercase "
                      >
                        Class
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-left text-white uppercase "
                      >
                        Roll No.
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-right text-white uppercase "
                      >
                        View
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-right text-white uppercase "
                      >
                        Edit
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-right text-white uppercase "
                      >
                        Delete
                      </th>
                    </tr>
                  </thead>
                  {renderedStudents}
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManageStudents;
