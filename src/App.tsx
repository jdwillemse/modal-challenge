import { FC, SyntheticEvent, useCallback } from "react";

import "./App.css";
import { ModalIDs, useModalStore } from "./slices/modalStore";
import ContentModalBrief from "./components/contentModalBrief/ContentModalBrief";
import ContentModalSemantic from "./components/contentModalSemantic/ContentModalSemantic";

function App(): ReturnType<FC> {
  const openModal = useModalStore.getState().openModal;
  const handleModalTrigger = useCallback(
    (event: SyntheticEvent<HTMLButtonElement>) => {
      const { modalId } = event.currentTarget.dataset;
      if (modalId) {
        openModal(modalId as ModalIDs);
      }
    },
    []
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
        data-modal-id={ModalIDs.ModalBrief}
        type="button"
      >
        Briefed
      </button>
      <button
        onClick={handleModalTrigger}
        data-modal-id={ModalIDs.ModalSemantic}
        type="button"
      >
        Semantic
      </button>

      <ContentModalBrief />
      <ContentModalSemantic />
    </>
  );
}

export default App;
