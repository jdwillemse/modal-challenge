import {
  ReactElement,
  ReactNode,
  SyntheticEvent,
  useCallback,
  useEffect,
  useRef,
} from "react";
import { createPortal } from "react-dom";

import css from "./modal.module.css";
import { useModalStore } from "../../slices/modalStore";

export interface ModalProps {
  id?: string;
  children: ReactNode;
}

function Modal({ id, children }: ModalProps): ReactNode {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const { activeModalID, closeModal } = useModalStore();
  // check if this instance is active here to prevent components higher up in the tree from rerendering
  const showModal = activeModalID === id;
  console.log(activeModalID, id);

  // close the modal when clicking outside of the content area
  const handleDialogClick = useCallback(
    (event: SyntheticEvent<HTMLElement>) => {
      if (event.target === dialogRef.current) {
        closeModal();
      }
    },
    [closeModal]
  );
  // setting open=true on the dialog element is not the preferred way to trigger a modal so the
  // opening and closing is handled here
  useEffect(() => {
    const ref = dialogRef.current;
    if (ref && showModal) {
      ref.showModal();
    }
    return () => {
      ref?.close();
    };
  }, [showModal]);
  // to avoid adding bloat to the DOM, the modals are only created when they need to be visible
  return showModal
    ? createPortal(
        <dialog
          onCancel={closeModal}
          className={css.modal}
          ref={dialogRef}
          aria-modal="true"
          aria-labelledby="modalTitle"
          onClick={handleDialogClick}
        >
          {/* to avoid code duplication the markup switch is placed here 
          and responds to a param passed from the parent */}
          <div className={css.wrapper}>{children}</div>
        </dialog>,
        document.body // This is an element outside the normal hierarchy
      )
    : null;
}

Modal.Header = ({
  children,
}: {
  children: ReactElement | ReactElement[];
}): ReactElement => (
  <div className={css.header}>
    <div className={css.titleWrapper} id="modalTitle">
      {children}
    </div>
  </div>
);

Modal.Body = ({
  children,
}: {
  children: ReactElement | ReactElement[];
}): ReactElement => <div className={css.body}>{children}</div>;

Modal.Footer = ({
  children,
}: {
  children: ReactElement | ReactElement[];
}): ReactElement => <div className={css.footer}>{children}</div>;

export default Modal;
