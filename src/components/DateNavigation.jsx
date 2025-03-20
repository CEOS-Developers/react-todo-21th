import styled from "styled-components";
import { PreviousButton, NextButton } from "./ArrowButton";

const DateNavigation = () => {
  return (
    <Navigation>
      <PreviousButton />
      <Date></Date>
      <NextButton />
    </Navigation>
  );
};

export default DateNavigation;

const Navigation = styled.nav``;

const Date = styled.time``;
