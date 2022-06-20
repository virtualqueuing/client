import { InputWrapper, Label, SuggestedTagsWrapper } from "../styles/AddNew.styles";
import Tag from "../Tag";
import CreateTags from "./CreateTags";
// import { useState } from "react";

const InputTextarea = (params) => {
  // click Tag to create new tag in CreateTags
  console.log(params.inputInfo)
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
        <div style={{ width: "100%", height: "150px", marginBottom: "50px" }}>
          <Label for="notes">Notes</Label>
          <CreateTags />
          {/* <StyledTextarea id="notes" name="notes" rows="8"/> */}
        </div>
      </InputWrapper>
    </>
  );
};

export default InputTextarea;
