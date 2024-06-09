import { create } from "zustand";

export enum ModalIDs {
  ModalA = "MODAL_A",
  ModalB = "MODAL_B",
}

interface ModalStore {
  activeModalID: null | ModalIDs;
  openModal: (id: ModalIDs) => void;
  closeModal: () => void;
}

export const useModalStore = create<ModalStore>()((set) => ({
  activeModalID: null,
  openModal: (id) => set({ activeModalID: id }),
  closeModal: () => set({ activeModalID: null }),
}));
