import { useState } from "react";
import Backdrop from "./Backdrop";
import Modal from "./Modal";

function Todo(props) {
  const [isModalOpen, setModalIsOpen] = useState(false);
  function deleteHandler() {
    setModalIsOpen(true);
  }

  function closeModalHandler() {
    setModalIsOpen(false);
  }
  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {isModalOpen && (
        <Modal onConfirm={closeModalHandler} onDelete={closeModalHandler} />
      )}
      {isModalOpen && <Backdrop onCancel={closeModalHandler} />}
    </div>
  );
}
export default Todo;
