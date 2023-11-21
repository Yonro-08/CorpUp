import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Button from "components/Button/Button";
import DocumentsLists from "features/Documents/components/DocumentsLists/DocumentsLists";

import styles from "features/Documents/Documents.module.css";

const Documents = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("user")) return;
    navigate("/signin");
  }, []);

  return (
    <section className={styles.documents}>
      <div className="container">
        <div className={styles.container}>
          <div className={styles.head}>
            <h2 className="title">Documents</h2>
            <Button
              className={styles.btn}
              onClick={() => {
                navigate("/create");
              }}
            >
              Create new Document
            </Button>
          </div>
          <DocumentsLists />
        </div>
      </div>
    </section>
  );
};

export default Documents;
