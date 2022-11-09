import React from "react";

const Modal = ({ handleUpdate, _id }) => {
  return (
    <>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />

      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <form onSubmit={(e) => handleUpdate(e, _id)}>
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <input type="submit" value="submit" />
          </form>
        </div>
      </div>
    </>
  );
};

export default Modal;
