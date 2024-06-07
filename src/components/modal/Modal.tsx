import {
  ReactNode,
  SyntheticEvent,
  useCallback,
  useEffect,
  useRef,
} from "react";
import { createPortal } from "react-dom";

import css from "./modal.module.css";
import { useModalStore } from "../../slices/modalStore";

interface ModalProps {
  id: string;
  title: string;
  showModal: boolean;
  children: ReactNode;
}

function Modal({ id, title, showModal, children }: ModalProps): ReactNode {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const { closeModal } = useModalStore();
  const handleDialogClick = useCallback((event: SyntheticEvent) => {
    if (event.target === dialogRef.current) {
      closeModal();
    }
  }, []);
  console.log(dialogRef.current, title);

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
      <div className={css.wrapper}>
        <h2 id={`${id}-title`}>{title}</h2>
        {children}
        <button onClick={closeModal} aria-label="Close Modal">
          Close Me
        </button>
      </div>
    </dialog>,
    document.body // This is an element outside the normal hierarchy
  );
}

export default Modal;
