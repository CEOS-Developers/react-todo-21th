import { formatISO } from 'date-fns';

export const formatDate = (year: number, month: number, day: number) => {
  return formatISO(new Date(year, month - 1, day), {
    representation: 'date',
  });
};
