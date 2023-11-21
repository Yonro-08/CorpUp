import List from "../List/List";

import styles from "./DocumentsLists.module.css";

const DocumentsLists = () => {
  const data = [
    {
      title: "Example document #1.docs",
      href: "assets/documents/sample.pdf",
    },
    {
      title: "Example document #2.docs",
      href: "assets/documents/sample.pdf",
    },
    {
      title: "Example document #3.docs",
      href: "assets/documents/sample.pdf",
    },
    {
      title: "Example document #4.docs",
      href: "assets/documents/sample.pdf",
    },
  ];

  return (
    <div className={styles.container}>
      {data.map((elem, index) => (
        <List key={index} title={elem.title} href={elem.href} />
      ))}
    </div>
  );
};

export default DocumentsLists;
