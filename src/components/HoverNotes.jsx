import styled from "styled-components";

export const HoverNotesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  animation: popup 0.4s ease-in-out;
  @keyframes popup {
    0% {
      visibility: hidden;
      transition: all 0.4s ease-in-out;
      opacity: 0;
    }
    100% {
      visibility: visible;
      transition: all 0.4s ease-in-out;
      opacity: 1;
    }
  }
`;

export const NotesBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
