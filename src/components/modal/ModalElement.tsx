import {
  ReactElement,
  ReactNode,
  MouseEvent,
  useCallback,
  useEffect,
  useRef,
} from "react";

import css from "./modal.module.css";
import { useModalStore } from "../../stores/modalStore";

export interface ModalProps {
  showModal: boolean;
  children: ReactNode;
}

function ModalElement({ showModal, children }: ModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const { closeModal } = useModalStore();

  // close the modal when clicking outside of the content area
  const handleDialogClick = useCallback(
    (event: MouseEvent<HTMLElement>) => {
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

  return (
    <dialog
      onCancel={closeModal}
      className={css.modal}
      ref={dialogRef}
      aria-modal="true"
      aria-labelledby="modalTitle"
      onClick={handleDialogClick}
    >
      <div className={css.wrapper}>{children}</div>
    </dialog>
  );
}
// TODO: figure out how to comply with rule without disabling it
/* eslint-disable-next-line react/display-name */
ModalElement.Header = ({ children }: { children: ReactElement }) => (
  <div className={css.header}>
    <div className={css.titleWrapper}>{children}</div>
  </div>
);

/* eslint-disable-next-line react/display-name */
ModalElement.Body = ({
  children,
}: {
  children: ReactElement | ReactElement[];
}) => <div className={css.body}>{children}</div>;

/* eslint-disable-next-line react/display-name */
ModalElement.Footer = ({
  children,
}: {
  children: ReactElement | ReactElement[];
}) => <div className={css.footer}>{children}</div>;

export default ModalElement;
