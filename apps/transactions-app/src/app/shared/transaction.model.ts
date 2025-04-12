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
  id: string;
  name: string;
  amount: number;
  currencyRate: number;
}

export interface GroupedTransactions {
  date: string;
  transactions: GroupedTransaction[];
}
