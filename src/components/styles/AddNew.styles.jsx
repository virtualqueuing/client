import styled, { css } from "styled-components";

export const AddNewWrapper = styled.div`
  max-width: 670px;
  height: 710px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  z-index: 999;
  border-radius: 30px;
  -webkit-box-shadow: 0px 20px 30px 15px rgba(0, 0, 0, 0.15);
  box-shadow: 0px 20px 30px 15px rgba(0, 0, 0, 0.15);
`;

export const LayoutWrapper = styled.div`
  margin: 20px 20px 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
`;

export const HeaderInfo = styled.div`
  & > h2 {
    font-size: ${({ theme }) => theme.fontSizes["2x"]};
    margin-bottom: 0;
  }

  & > p {
    font-size: ${({ theme }) => theme.fontSizes.lg};
    margin-top: 12px;
  }
`;

export const HeaderAlert = styled.span`
  display: inline-block;
  padding: 20px 15px 20px 35px;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.components.neutralButton.background};
  color: ${({ theme }) => theme.colors.components.neutralButton.fontColor};
  background-image: ${`url('src/assets/Icons/exclamation-circle.svg')`};
  background-repeat: no-repeat;
  background-size: 20px;
  background-position: 12px;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  margin: 0 50px;
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

export const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0;
  margin-bottom: 20px;
  width: 100%;
  & > div {
    width: 45%;
    position: relative;
  }
`;

export const Label = styled.label`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.fonts.inactiveRoute};
  position: absolute;
  padding: 0 4px;
  margin-left: 10px;
  top: -12px;
  display: inline-block;
  background-color: white;
  z-index: 10;
`;

const InputLayout = css`
  height: 60px;
  border: 1px solid;
  border-color: ${({ theme }) => theme.colors.fonts.inactiveRoute};
  border-radius: 10px;
`;

export const StyledInputText = styled.input`
  ${InputLayout};
  font-size: ${({ theme }) => theme.fontSizes["1x"]};
  position: relative;
`;

export const StyledInputSelect = styled.select`
  ${InputLayout};
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.fonts.secondary};
  position: relative;
  width: 100%;
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;

  :hover {
    cursor: pointer;
  }
`;

export const SuggestedTagsWrapper = styled.div`
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  justify-content: left;
  width: 100%;

  & > span {
    font-size: ${({ theme }) => theme.fontSizes.md};
    color: ${({ theme }) => theme.colors.fonts.inactiveRoute};
    padding-right: 10px;
  }
`;

export const StyledTextarea = styled.textarea`
  ${InputLayout};
  display: none;
  font-size: ${({ theme }) => theme.fontSizes["1x"]};
  font-family: Arial, Helvetica, sans-serif;
  position: relative;
  min-height: 185px;
  width: 500px;
`;

export const HorizontalDivider = styled.div`
  height: 1px;
  margin: auto;
  margin-bottom: 30px;
  width: 90%;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.fonts.inactiveRoute};
  opacity: 0.8;
`;

export const CustomerInputSelectBg = styled.div`
  ::after {
    content: "";
    background-image: ${`url('src/assets/Icons/down-arrow-svgrepo-com.svg')`};
    width: 15px;
    height: 15px;
    right: 15px;
    top: 28px;
    position: absolute;
    pointer-events: none;
  }
`;
