import { ReactNode } from "react";
import { createPortal } from "react-dom";

import { useModalStore } from "../../stores/modalStore";
import ModalElement from "./ModalElement";

export interface ModalProps {
  id?: string;
  children: ReactNode;
}

function ModalPortal({ id, children }: ModalProps) {
  const { activeModalID } = useModalStore();
  // check if this instance is active here to prevent components higher up in the tree from rerendering
  const showModal = activeModalID === id;

  // to avoid adding bloat to the DOM, the modals are only created when they need to be shown
  return showModal
    ? createPortal(
        <ModalElement showModal={showModal}>{children}</ModalElement>,
        document.body
      )
    : null;
}

ModalPortal.Header = ModalElement.Header;
ModalPortal.Body = ModalElement.Body;
ModalPortal.Footer = ModalElement.Footer;

export default ModalPortal;
