import { ReactNode } from "react";

import css from "./modal.module.css";
import { ModalProps } from "./Modal";

function Semantic({ id, title, children }: ModalProps): ReactNode {
  return (
    <section className={css.wrapper}>
      <h2 className={css.title} id={`${id}-title`}>
        {title}
      </h2>
      {children}
    </section>
  );
}

export default Semantic;
