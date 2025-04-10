export interface Transaction {
  id: number;
  timestamp: string;
  amount: number;
  currencyCode: 'EUR' | 'USD';
  currencyRate?: number;
  description?: string;
  otherParty?: {
    name: string;
    iban?: string;
  };
}

export interface GroupedTransaction {
  name: string;
  amountInEur: number;
}

export interface GroupedTransactions {
  date: string;
  transactions: GroupedTransaction[];
}
