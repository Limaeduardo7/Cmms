import React, { createContext, useContext, useState, ReactNode } from 'react';

interface CurrencyContextProps {
  currency: string;
  setCurrency: (currency: string) => void;
  formatCurrency: (value: number, currency: string) => string;
}

const CurrencyContext = createContext<CurrencyContextProps | undefined>(undefined);

export const useCurrency = (): CurrencyContextProps => {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error('useCurrency must be used within a CurrencyProvider');
  }
  return context;
};

export const CurrencyProvider = ({ children }: { children: ReactNode }) => {
  const [currency, setCurrency] = useState('USD');

  const formatCurrency = (value: number, currency: string): string => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency }).format(value);
  };

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, formatCurrency }}>
      {children}
    </CurrencyContext.Provider>
  );
};
