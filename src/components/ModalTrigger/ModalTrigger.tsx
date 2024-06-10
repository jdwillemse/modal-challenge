import { ReactElement, MouseEvent, useCallback } from "react";

import css from "./modalTrigger.module.css";
import { useModalStore, ModalIDs } from "../../stores/modalStore";

interface ModalTriggerType {
  id: ModalIDs;
  children: string | ReactElement;
}

function ModalTrigger({ id, children }: ModalTriggerType) {
  const { openModal } = useModalStore.getState();
  const handleModalTrigger = useCallback(
    (event: MouseEvent<HTMLButtonElement>) => {
      const { modalId } = event.currentTarget.dataset;
      if (modalId) {
        openModal(modalId as ModalIDs);
      }
    },
    [openModal]
  );

  return (
    <button
      onClick={handleModalTrigger}
      data-modal-id={id}
      type="button"
      className={css.button}
    >
      {children}
    </button>
  );
}

export default ModalTrigger;
