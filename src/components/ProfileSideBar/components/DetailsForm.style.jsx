import styled from "styled-components";

const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const DetailsForm = ({ onSubmit, children }) => {
  return <Wrapper onSubmit={onSubmit}>{children}</Wrapper>;
};

export default DetailsForm;
