import { describe, expect, test } from "vitest";

import { useModalStore, ModalIDs } from "./modalStore";

describe("modalStore", () => {
  test("should have the correct state when called", () => {
    const { openModal, closeModal } = useModalStore.getState();

    expect(useModalStore.getState().activeModalID).toBeNull();
    openModal(ModalIDs.ModalA);
    expect(useModalStore.getState().activeModalID).toEqual(ModalIDs.ModalA);
    closeModal();
    expect(useModalStore.getState().activeModalID).toBeNull();
  });
});
