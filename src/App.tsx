import { FC, SyntheticEvent, useCallback } from "react";

import "./App.css";
import { ModalIDs, useModalStore } from "./stores/modalStore";
import ContentModal from "./components/contentModal/ContentModal";

function App(): ReturnType<FC> {
  const { openModal } = useModalStore.getState();
  const handleModalTrigger = useCallback(
    (event: SyntheticEvent<HTMLButtonElement>) => {
      const { modalId } = event.currentTarget.dataset;
      if (modalId) {
        openModal(modalId as ModalIDs);
      }
    },
    [openModal]
  );

  return (
    <>
      <h1>Modal Challenge</h1>
      <p>
        I've created two modals with slightly different markup. The one
        represents markup that literally interprets the wording of the brief.
        The second one implements more semantic markup. As I was not able to
        discuss the brief with the stakeholders I do not understand the
        intention behind the wording. With this in mind I want to cover my bases
        and present both implementations.
      </p>

      <button
        onClick={handleModalTrigger}
        data-modal-id={ModalIDs.ModalA}
        type="button"
      >
        With form
      </button>
      {/* <button
        onClick={handleModalTrigger}
        data-modal-id={ModalIDs.ModelB}
        type="button"
      >
        Long text
      </button> */}

      <ContentModal />
    </>
  );
}

export default App;
