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

export interface AllData {
    uuid: string;
    serielnumbers: string;
    amounts: number;
    transactiontype: string;
    transactiontypedatails: string;
    name: string;
    securedname: string;
    datetime: Date;
    details: {content: string[]};
    spendingmethods: string;
    supportingpics: {content: string[]};
    receiptpics: {content: string[]};
    bankname: string;
    accountnumber: string;
    securedaccountnumber: string;
    cafeurl: string;
}