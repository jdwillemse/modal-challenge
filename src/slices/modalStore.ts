import { create } from "zustand";

export enum ModalIDs {
  ModalBrief = "MODAL_BRIEF",
  ModalSemantic = "MODAL_SEMANTIC",
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
