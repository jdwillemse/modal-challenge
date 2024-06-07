import "./App.css";
import Modal from "./components/modal/Modal";
import { ModalIDs, useModalStore } from "./slices/modalStore";

function App() {
  const { modalID, openModal, closeModal } = useModalStore();

  const handleModalTrigger = (event) => {
    const { modal } = event.target.dataset;
    if (modal) {
      openModal(modal as ModalIDs);
    }
  };

  return (
    <>
      <h1>Modal Challenge</h1>

      <Modal
        id={ModalIDs.MODAL_A}
        showModal={modalID === ModalIDs.MODAL_A}
        title="AAAAA"
      >
        <p>Modal A content</p>
      </Modal>
      <Modal
        id={ModalIDs.MODAL_B}
        showModal={modalID === ModalIDs.MODAL_B}
        title="BBBBB"
      >
        <p>Modal B content</p>
      </Modal>

      <button
        onClick={handleModalTrigger}
        data-modal={ModalIDs.MODAL_A}
        type="button"
      >
        open A
      </button>
      <button
        onClick={handleModalTrigger}
        data-modal={ModalIDs.MODAL_B}
        type="button"
      >
        open B
      </button>
    </>
  );
}

export default App;
