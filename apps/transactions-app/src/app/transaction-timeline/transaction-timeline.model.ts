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

export interface GroupedTransactions {
  date: string;
  transactions: { name: string; amountInEur: number }[];
}
