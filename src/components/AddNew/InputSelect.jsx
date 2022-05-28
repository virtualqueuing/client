import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 12px;
  margin-bottom: 20px;
  position: relative;
`;

const Arrow = styled.div`
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

const SelectStyle = styled.select`
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

const people = [];
for (let i = 1; i <= 12; i++) {
  people.push({ value: i }, { children: i });
}

const tableType = [
  {
    value: "small",
    children: "Small",
  },
  {
    value: "medium",
    children: "Medium",
  },
  {
    value: "large",
    children: "Large",
  },
];

const InputSelect = () => {
  return (
    <Wrapper>
      <Arrow>
        <SelectStyle name="people" required>
          <option value="" disabled selected hidden>
            People
          </option>
          {people.map(({ value, children }) => (
            <option key={value}>{children} </option>
          ))}
        </SelectStyle>
      </Arrow>
      <Arrow>
        <SelectStyle name="tableType" required>
          <option value="title" disabled selected hidden>
            Table Type
          </option>
          {tableType.map(({ value, children }) => (
            <option key={value}>{children} </option>
          ))}
        </SelectStyle>
      </Arrow>
    </Wrapper>
  );
};

export default InputSelect;
