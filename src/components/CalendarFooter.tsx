import styled from 'styled-components';

interface CalendarFooterProps {
  selectedDateKey: string;
}

function CalendarFooter({ selectedDateKey }: CalendarFooterProps) {
  return <FooterText>{selectedDateKey}</FooterText>;
}

export default CalendarFooter;

const FooterText = styled.footer``;
