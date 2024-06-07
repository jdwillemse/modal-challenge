import React, {
  ReactNode,
  SyntheticEvent,
  useCallback,
  useEffect,
  useRef,
} from "react";
import { createPortal } from "react-dom";

import css from "./modal.module.css";
import { useModalStore } from "../../slices/modalStore";
import Briefed from "./Briefed";
import Semantic from "./Semantic";

export interface ModalProps {
  id: string;
  title: string;
  children: ReactNode;
  semantic?: boolean;
}

function Modal({ id, semantic, ...props }: ModalProps): ReactNode {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const { activeModalID, closeModal } = useModalStore();
  const showModal = activeModalID === id;

  const handleDialogClick = useCallback((event: SyntheticEvent) => {
    if (event.target === dialogRef.current) {
      closeModal();
    }
  }, []);

  useEffect(() => {
    if (dialogRef.current && showModal) {
      dialogRef.current.showModal();
    }

    return () => {
      dialogRef.current?.close();
    };
  }, [dialogRef, showModal]);

  return createPortal(
    <dialog
      id="dialog"
      onCancel={closeModal}
      className={css.modal}
      ref={dialogRef}
      aria-modal="true"
      aria-labelledby={`${id}-title`}
      onClick={handleDialogClick}
    >
      {semantic ? (
        <Semantic id={id} {...props} />
      ) : (
        <Briefed id={id} {...props} />
      )}
    </dialog>,
    document.body // This is an element outside the normal hierarchy
  );
}

export default Modal;
