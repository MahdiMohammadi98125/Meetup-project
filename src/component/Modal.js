function Modal(props) {
  function DeleteModalHanlder() {
    props.onDelete();
  }
  function ConfirmModalHandler() {
    props.onConfirm();
  }
  return (
    <div className="modal">
      <p>Are you sure?</p>
      <button className="btn btn--alt" onClick={DeleteModalHanlder}>
        Delete
      </button>
      <button className="btn" onClick={ConfirmModalHandler}>
        Confirm
      </button>
    </div>
  );
}

export default Modal;
