import css from "./app.module.css";
import { ModalIDs } from "./stores/modalStore";
import { ContentModal } from "./components/ContentModal";
import { ModalTrigger } from "./components/ModalTrigger";

function App() {
  return (
    <div className={css.intro}>
      <h1>Modal Challenge</h1>
      <p>Thanks for taking the time to review this code challenge</p>
      <p>
        As I was not able to discuss the brief with the stakeholders I have had
        to interpret the intention behind the wording. With this in mind I did
        not use semantic <code>header</code>, <code>main</code>, and{" "}
        <code>footer</code> elements in the modal as from my research that seems
        to be the incorrect use of those elements.
      </p>
      <p>
        I did choose to use the native <code>dialog</code> element as it now has
        widespread support and seems to offer the best accessibility and by
        using native elements the improvements made by user agents is
        automatically conferred
      </p>
      <div>
        <ModalTrigger id={ModalIDs.ModalA}>With form</ModalTrigger>
        <ModalTrigger id={ModalIDs.ModalB}>Long text</ModalTrigger>
      </div>
      <ContentModal />
    </div>
  );
}

export default App;
