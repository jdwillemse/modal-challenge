import { ReactNode } from "react";

import css from "./modal.module.css";
import { ModalProps } from "./Modal";

function Briefed({ id, title, children }: ModalProps): ReactNode {
  return (
    <section className={css.wrapper}>
      <header>
        <h2 className={css.title} id={`${id}-title`}>
          {title}
        </h2>
      </header>
      {children}
    </section>
  );
}

export default Briefed;
