export interface Stat {
    id: number;
    name: string;
    value: string | number;
}

export interface Sponsorship {
    id: number;
    transactiontype: string;
    amounts: number;
}

export interface Expense {
    uuid: string;
    serielnumbers: string;
    securedname: string;
    datetime: Date;
    amounts: number;
    details: {content: string[]};
    bankname: string;
    securedaccountnumber: string;
    spendingmethods: string;
    receiptpics: {content: string[]};
  }