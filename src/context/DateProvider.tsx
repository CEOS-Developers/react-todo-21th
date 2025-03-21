import { JSX } from 'react/jsx-runtime';
import { useState } from 'react';
import { formatISO } from 'date-fns';

import { DateContext } from '@/hooks/useDate';

type DateProviderProps = {
  children: React.ReactNode;
};

export const DateProvider = ({ children }: DateProviderProps): JSX.Element => {
  const [selectedDate, setSelectedDate] = useState(
    formatISO(new Date(), { representation: 'date' })
  );

  return (
    <DateContext.Provider value={{ selectedDate, setSelectedDate }}>
      {children}
    </DateContext.Provider>
  );
};
