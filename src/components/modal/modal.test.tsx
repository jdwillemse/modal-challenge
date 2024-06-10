import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";

import ModalElement from "./ModalElement";

describe("modal", () => {
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
    render(<ModalElement showModal={false}>Nothing to see here</ModalElement>, {
      container: document.body,
    });
    expect(screen.queryByRole("dialog")).toBeNull();
  });

  test("should render with simple structure", async () => {
    render(<ModalElement showModal={true}>Simple modal</ModalElement>, {
      container: document.body,
    });
    expect(screen.queryByRole("dialog")).toMatchSnapshot();
  });

  test("should render with namespaced structure", () => {
    render(
      <ModalElement showModal={true}>
        <ModalElement.Header>
          <h2>Header</h2>
        </ModalElement.Header>
        <ModalElement.Body>
          <p>Body</p>
        </ModalElement.Body>
        <ModalElement.Footer>
          <span>Footer</span>
        </ModalElement.Footer>
      </ModalElement>,
      { container: document.body }
    );
    expect(screen.queryByRole("dialog")).toMatchSnapshot();
  });
});
