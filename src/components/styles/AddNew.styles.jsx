import styled from "styled-components";

export const StyledLogo = styled.h1`
  text-align: center;
  margin-bottom: 20px;
  color: white;
  font-size: ${({ theme }) => theme.fontSizes["4x"]};
`;

export const StyledForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  margin: 0 80px;
  line-height: 2rem;

  input[type="text"],
  select,
  textarea {
    width: 100%;
    padding: 12px;
    box-sizing: border-box;
    margin-top: 4px;
    margin-bottom: 16px;
    resize: vertical;
    outline: none;
  }
`;

export const StyledInputText = styled.input`
  background-color: transparent;
  width: 100%;
  border: none;
  border-bottom: 3px solid rgba(255, 255, 255, 0.75);
  transform: matrix(1, 0, 0, 1, 0, 0);

  ::-webkit-input-placeholder {
    /* WebKit browsers */
    color: ${({ theme }) => theme.colors.InputText};
    font-size: ${({ theme }) => theme.fontSizes.md};
  }

  ::-moz-placeholder {
    /* Mozilla Firefox 19+ */
    color: ${({ theme }) => theme.colors.InputText};
    font-size: ${({ theme }) => theme.fontSizes.md};
  }
`;

export const StyledInputSelectFlex = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 12px;
  margin-bottom: 20px;
  position: relative;
`

export const CustomStyledInputSelectImage = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    height: auto;
    width: 30%;
    margin: 0;

    ::after {
      content: "";
      width: 30px;
      height: 30px;
      background-image: url("src/assets/arrowdown.svg");
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
      position: absolute;
      right: 0;
      padding-right: 10px;
      pointer-events: none;
    }
`;

export const CustomStyledInputSelectBg = styled.select`
  border: none;
  max-width: 290px;
  border-radius: 10px;
  color: #000;
  margin: 0 !important;
  background: linear-gradient(180deg, #f1e0e0 23.33%, rgba(253, 247, 247, 0) 194.67%);
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;

  :hover {
    cursor: pointer;
  }
`;

export const StyledTextarea = styled.label`
  font-weight: 500;
  font-family: Arial, Helvetica, sans-serif;
  color: ${({ theme }) => theme.colors.fontColor};
  font-size: ${({ theme }) => theme.colors.md};
  & + textarea {
  border: none;
  border-radius: 10px;
  min-height: 185px;
  background: linear-gradient(180deg, #f1e0e0 23.33%, rgba(253, 247, 247, 0) 194.67%);
  }
`;
