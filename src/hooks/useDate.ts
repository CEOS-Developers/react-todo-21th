import { createContext, useContext } from 'react';

type DateContextType = {
  selectedDate: string;
  setSelectedDate: React.Dispatch<React.SetStateAction<string>>;
};

export const DateContext = createContext<DateContextType | undefined>(
  undefined
);

export const useDate = () => {
  const context = useContext(DateContext);

  if (!context) {
    throw new Error('useDate must be used within a DateProvider');
  }
  return context;
};
