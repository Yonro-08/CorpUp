import { PDFViewer, PDFDownloadLink } from "@react-pdf/renderer";
import { useNavigate } from "react-router-dom";

import Input from "components/Input/Input";
import Button from "components/Button/Button";
import ServiceAgreement from "../sample/ServiceAgreement/ServiceAgreement";

import styles from "./Form.module.css";

const Form = () => {
  const navigate = useNavigate();

  const data = {
    company: {
      director: {
        fullName: "Иванова Ивана Ивановича",
        shortName: "И.И. Иванов",
      },
      companyName: {
        fullName: "Общество с ограниченной ответственностью «Ромашка»",
        shortName: "ООО «Ромашка»",
      },
    },
    contract: {
      city: "Москва",
      date: new Date(),
      paymentMethod: "безналичными",
      services: "",
      price: "",
      expirationDate: "01.01.2024",
      fine: "0.2%",
      bankDetails: {
        checkingAccount: "№0000000000000",
        name: "ОТДЕЛЕНИЕ N8888 ПАО СБЕРБАНК",
        BIK: "047501602",
        correspondentAccount: "301018000000000000602",
      },
    },
    customer: {
      fullName: "Иванов Александр Петрович",
      series: "KAZ",
      number: "N11111111",
      issued: "MIA",
      dateIssue: "09.09.2020",
      INN: "0000000000",
      KPP: "0000000",
    },
  };

  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <Input
          type="text"
          placeholder="Example name"
          title="Document name"
          required
        />
        <Input type="text" placeholder="Employer" title="Employer" />
        <Input type="text" placeholder="Employee" title="Employee" />
        <div className={styles.btnContainer}>
          <Button
            className={styles.btn}
            onClick={(e) => {
              e.preventDefault();
              navigate(-1);
            }}
          >
            Cancel
          </Button>
          <Button className={styles.btn}>Generate Document</Button>
        </div>
      </form>
      <PDFViewer className={styles.containerPDf} showToolbar={false}>
        <ServiceAgreement data={data} />
      </PDFViewer>
    </div>
  );
};

export default Form;
