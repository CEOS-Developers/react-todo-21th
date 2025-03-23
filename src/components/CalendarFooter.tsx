import styled from 'styled-components';

interface CalendarFooterProps {
  selectedDateKey: string;
}

function CalendarFooter({ selectedDateKey }: CalendarFooterProps) {
  return <FooterText>{selectedDateKey}</FooterText>;
}

export default CalendarFooter;

const FooterText = styled.footer`
  font-size: ${({ theme }) => theme.fontSize.large};
  font-weight: 500;
  text-align: left;
  padding: ${({ theme }) => theme.spacing.sm} 0;
`;
