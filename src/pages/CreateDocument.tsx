import { Form } from "features/CreateDocument";
import styles from "features/CreateDocument/CreateDocument.module.css";

const CreateDocument = () => {
  return (
    <section className={styles.create}>
      <div className="container">
        <div className={styles.container}>
          <h2 className="title">Create a new document</h2>
          <h2 className={styles.subtitle}>
            Let`s start with the key details for this document.
          </h2>
        </div>
        <div className={styles.pdf}>
          <Form />
        </div>
      </div>
    </section>
  );
};

export default CreateDocument;
