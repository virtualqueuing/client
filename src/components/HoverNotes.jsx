import styled from "styled-components";

export const HoverNotesContainer = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: auto;
  border-radius: 20px;
  margin-bottom: 80px;
  padding: 0;
  left: 20px;
  border: 1px solid #e6e6e6;
  /* margin-left: -60px; */
  background-color: #fff;
  backdrop-filter: blur(5px);
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
  animation: popup 0.5s ease-in-out;
  @keyframes popup {
    0% {
      visibility: hidden;
      transition: all 0.5s ease-in-out;
      opacity: 0;
      margin-bottom: 0;
    }
    100% {
      visibility: visible;
      transition: all 0.5s ease-in-out;
      opacity: 1;
      margin-bottom: 80px;
    }
  }
`;

export const NotesBox = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
