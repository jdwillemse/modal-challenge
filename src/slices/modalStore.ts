import { create } from "zustand";

export enum ModalIDs {
  MODAL_A = "modalA",
  MODAL_B = "modalB",
}

interface ModalStore {
  modalID: null | ModalIDs;
  openModal: (id: ModalIDs) => void;
  closeModal: () => void;
}

export const useModalStore = create<ModalStore>()((set) => ({
  modalID: null,
  openModal: (id) => set({ modalID: id }),
  closeModal: () => set({ modalID: null }),
}));
