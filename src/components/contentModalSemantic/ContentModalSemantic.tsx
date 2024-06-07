import { FC } from "react";

import Modal from "../modal/Modal";
import { ModalIDs, useModalStore } from "../../slices/modalStore";

function contentModalSemantic(): ReturnType<FC> {
  const closeModal = useModalStore.getState().closeModal;
  const id = ModalIDs.ModalSemantic;

  return (
    <Modal id={id} title="Semantic Modal" semantic={true}>
      <p>This modal content is more semantically meaningful.</p>
      <form id={`${id}-form`} method="dialog">
        <label>
          <span>Name</span>
          <input type="text" autoFocus required />
        </label>
      </form>
      <div className={"css.actionsWrapper"}>
        <button onClick={closeModal} aria-label="Close Modal">
          Close
        </button>
        <button type="submit" form={`${id}-form`}>
          Save
        </button>
      </div>
    </Modal>
  );
}

export default contentModalSemantic;
