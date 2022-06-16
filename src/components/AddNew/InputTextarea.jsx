import { StyledTextarea, InputWrapper, Label, SuggestedTagsWrapper } from "../styles/AddNew.styles";
import Tag from "../Tag";

const InputTextarea = () => {
  return (
    <>
      <SuggestedTagsWrapper>
        <span>Suggested tags:</span>
        <Tag type="button" tagTypes="birthday">
          Birthday
        </Tag>
        <Tag type="button" tagTypes="wheelchair">
          Wheelchair
        </Tag>
        <Tag type="button" tagTypes="babyseat">
          Babyseat
        </Tag>
      </SuggestedTagsWrapper>
      <InputWrapper>
        <div style={{ width: "100%" }}>
          <Label for="notes">Notes</Label>
          <StyledTextarea id="notes" name="notes" rows="8" />
        </div>
      </InputWrapper>
    </>
  );
};

export default InputTextarea;
