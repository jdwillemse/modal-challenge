import { FC } from "react";

import Modal from "../modal/Modal";
import { ModalIDs, useModalStore } from "../../slices/modalStore";

function ContentModalBrief(): ReturnType<FC> {
  const closeModal = useModalStore.getState().closeModal;
  const id = ModalIDs.ModalBrief;

  return (
    <Modal id={id} title="As Interpreted From Briefing">
      <p>
        I believe this is what you asked for but it is not what you actually
        want.
      </p>
      <form id={`${id}-form`} method="dialog">
        <label>
          <span>Name</span>
          <input type="text" autoFocus required />
        </label>
      </form>
      <footer>
        <button onClick={closeModal} aria-label="Close Modal">
          Close
        </button>
        <button type="submit" form={`${id}-form`}>
          Save
        </button>
      </footer>
    </Modal>
  );
}

export default ContentModalBrief;
