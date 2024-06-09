import { FC, FormEvent, useCallback } from "react";

import css from "./contentModal.module.css";
import cssModal from "../modal/modal.module.css";
import Modal from "../modal/Modal";
import { ModalIDs, useModalStore } from "../../slices/modalStore";
import CloseButton from "../closeButton/CloseButton";

function ContentModal(): ReturnType<FC> {
  const closeModal = useModalStore.getState().closeModal;
  const briefID = ModalIDs.ModalBrief;
  const semanticID = ModalIDs.ModalSemantic;
  // I include a form since the brief asks for a 'save' button which only makes sense in the context of a form
  const handleSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      // form data is not handled any further in this test
      console.log(event.timeStamp);
      closeModal();
    },
    [closeModal]
  );

  return (
    <>
      <Modal id={briefID}>
        <div className={cssModal.header}>
          <h2 className={cssModal.title} id="modalTitle">
            Long text modal
          </h2>
        </div>
        <div className={cssModal.body}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            tempus vitae justo in ornare. Duis porta ligula quis lectus pharetra
            posuere. Vestibulum ante ipsum primis in faucibus orci luctus et
            ultrices posuere cubilia curae; Aliquam erat volutpat. Curabitur
            laoreet nisi et varius malesuada. Aenean ullamcorper tempor urna,
            eget dictum dui porttitor non. Curabitur ornare odio et tellus
            lobortis, ac venenatis lacus vulputate. Cras imperdiet suscipit
            lacinia. Aliquam dapibus eget justo a ultrices. Ut pharetra quam
            lobortis, pulvinar eros ut, vestibulum ex. Integer malesuada purus
            purus, ac consectetur elit ultrices vitae. Fusce sit amet urna eget
            ante efficitur convallis. Ut eleifend efficitur libero, dapibus
            dignissim leo cursus id. In molestie consectetur efficitur.
          </p>
          <p>
            Integer vulputate neque libero, non tincidunt lacus sollicitudin id.
            Donec vitae dolor id mauris condimentum varius at a ipsum. Maecenas
            mattis felis vitae erat efficitur, sed sagittis odio cursus. Sed
            enim risus, ornare ac mattis ut, finibus maximus odio. Proin ornare
            lobortis mattis. Integer ornare commodo ipsum, quis varius orci
            luctus nec. Aliquam erat volutpat.
          </p>
          <p>
            In finibus non mi vel ultricies. Pellentesque semper tortor sed
            neque dignissim rhoncus. Donec congue sed magna nec sagittis. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Ut facilisis,
            erat sit amet dignissim luctus, augue lacus sagittis metus, sit amet
            fermentum neque felis at risus. Integer vitae dolor sed mauris
            eleifend vehicula. Cras ultrices quam nibh, sed laoreet magna
            vulputate eget. Curabitur a nibh sit amet ligula porta sagittis at
            eu turpis.
          </p>
          <p>
            Sed in gravida metus, posuere rutrum nunc. Aenean a odio non libero
            ullamcorper fringilla. Nulla non aliquam dolor. Donec lobortis
            elementum metus, ac varius neque sodales id. Aliquam volutpat, erat
            quis volutpat ornare, arcu tellus iaculis erat, at ornare augue arcu
            sed felis. Vivamus sit amet rutrum urna. Sed non lobortis sem, sit
            amet accumsan risus.
          </p>
          <p>
            Praesent condimentum sagittis lectus eget aliquam. Nunc tempus
            lacinia viverra. Nunc risus nulla, efficitur sit amet laoreet nec,
            finibus vitae augue. In viverra scelerisque mi, sit amet placerat
            massa vulputate ut. Nunc eget velit ante. Quisque eget volutpat
            erat. Mauris ipsum tellus, congue nec hendrerit id, condimentum ac
            dui. Donec eu dui enim. Duis mattis sagittis tempor. Ut faucibus
            dolor in ornare tempor. Integer hendrerit tempus tellus, id
            tincidunt lacus ullamcorper quis. Nullam facilisis tortor a suscipit
            vulputate.
          </p>
        </div>
        <div className={cssModal.footer}>
          <button
            type="button"
            className={(cssModal.button, cssModal.buttonSecondary)}
            onClick={closeModal}
            aria-label="Close Modal"
            autoFocus
          >
            Close
          </button>
        </div>
      </Modal>

      <Modal id={semanticID}>
        <Modal.Header>
          <h2>Semantic Modal</h2>
        </Modal.Header>
        <Modal.Body>
          <p>
            Nunc eros sem, semper a imperdiet id, laoreet quis est. Sed eget
            lacus pharetra, viverra felis ac, pellentesque velit. Sed non justo
            vel dui venenatis vulputate.
          </p>
          <form
            id={`${ModalIDs.ModalSemantic}-form`}
            method="dialog"
            className={css.form}
            onSubmit={handleSubmit}
          >
            <label>
              <span>Name</span>
              <input type="text" autoFocus required />
            </label>
          </form>
          <p>
            Aenean quis quam at sapien interdum interdum a et orci. Praesent
            imperdiet erat at diam lobortis condimentum. Pellentesque rhoncus
            est lorem, sit amet venenatis ligula suscipit eget. Pellentesque
            semper porttitor turpis, nec congue turpis. Etiam sit amet fringilla
            sapien, a volutpat odio. Proin tortor enim, convallis a convallis
            quis, porta quis enim. Donec ac ipsum et tortor vestibulum tristique
            vitae finibus metus.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <button
            type="button"
            className={(css.button, css.buttonSecondary)}
            onClick={closeModal}
            aria-label="Close Modal"
          >
            Close
          </button>
          <button
            type="submit"
            className={(css.button, css.buttonPrimary)}
            form={`${semanticID}-form`}
          >
            Save
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ContentModal;
