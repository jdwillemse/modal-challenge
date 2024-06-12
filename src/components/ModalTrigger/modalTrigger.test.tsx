import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import ModalTrigger from "./ModalTrigger";
import { useModalStore, ModalIDs } from "@stores/modalStore";

describe("modalTrigger", () => {
  const user = userEvent.setup();

  function renderModalTrigger() {
    render(<ModalTrigger id={ModalIDs.ModalA}>show modal</ModalTrigger>, {
      container: document.body,
    });
  }

  test("should render correctly", () => {
    renderModalTrigger();
    expect(screen.queryByRole("button")).toMatchSnapshot();
  });

  test("should trigger modal when clicked", async () => {
    const incSpy = vi.spyOn(useModalStore.getState(), "openModal");

    renderModalTrigger();

    await user.click(
      await screen.findByRole("button", { name: /show modal/i })
    );

    expect(incSpy).toHaveBeenCalledWith(ModalIDs.ModalA);
  });
});
