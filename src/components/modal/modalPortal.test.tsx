import { describe, expect, test } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";

import ModalPortal from "./ModalPortal";
import { useModalStore, ModalIDs } from "../../stores/modalStore";

describe("modalPortal", () => {
  function renderTestModal() {
    render(<ModalPortal id={ModalIDs.ModalA}>Modal content</ModalPortal>, {
      container: document.body,
    });
  }

  beforeAll(() => {
    // these functions need to be mocked because jsdom does not currently support HTMLDialogElement
    HTMLDialogElement.prototype.showModal = vi.fn(function mock(
      this: HTMLDialogElement
    ) {
      this.open = true;
    });
    HTMLDialogElement.prototype.close = vi.fn(function mock(
      this: HTMLDialogElement
    ) {
      this.open = false;
    });
  });

  test("should not render when not shown", () => {
    renderTestModal();
    expect(screen.queryByRole("dialog")).toBeNull();
  });

  test("should render dialog correctly when called", async () => {
    const { openModal, closeModal } = useModalStore.getState();

    renderTestModal();

    openModal(ModalIDs.ModalA);
    await waitFor(() =>
      expect(screen.queryByRole("dialog")).toBeInTheDocument()
    );

    closeModal();
    await waitFor(() =>
      expect(screen.queryByRole("dialog")).not.toBeInTheDocument()
    );
  });
});
