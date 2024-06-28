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