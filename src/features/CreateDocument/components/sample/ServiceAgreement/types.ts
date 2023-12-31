export type MyDocumentProps = {
  data: {
    company: {
      director: {
        fullName: string;
        shortName: string;
      };
      companyName: {
        fullName: string;
        shortName: string;
      };
    };
    contract: {
      city: string;
      date: Date;
      paymentMethod: string;
      services: string;
      price: string;
      expirationDate: string;
      fine: string;
      bankDetails: {
        name: string;
        BIK: string;
        correspondentAccount: string;
        checkingAccount: string;
      };
    };
    customer: {
      fullName: string;
      series: string;
      number: string;
      issued: string;
      dateIssue: string;
      INN: string;
      KPP: string;
    };
  };
};

export type TextListProps = {
  data: string[];
};
