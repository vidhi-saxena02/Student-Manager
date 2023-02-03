import { useEffect } from "react";

function Modal({ onClose, children, actionBar, edit }) {
  useEffect(() => {
    document.body.classList.add("overflow-hidden");

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  return (
    <div>
      <div
        onClick={onClose}
        className="fixed inset-0 bg-gray-300 opacity-80"
      ></div>
      <div className="fixed inset-40 p-10 bg-white">
        <div className="flex flex-col justify-between h-full">
          {children}

          <div className="flex justify-end ">{!edit ? actionBar : <></>}</div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
