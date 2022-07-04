import { InputWrapper, Label, SuggestedTagsWrapper } from "../styles/AddNew.styles";
import Tag from "../Tag";
import CreateTags from "./CreateTags";
import { useState, useRef } from "react";
import { StyledTextarea } from "../styles/AddNew.styles";

const InputTextarea = ({ inputInfo }) => {
  // click Tag to create new tag in CreateTags
  const [tags, setTags] = useState([]);
  const ref = useRef(null);

  const SuggestedTag = (e) => {
    setTags((prevState) => [...prevState, e.target.value]);
  };

  return (
    <>
      <SuggestedTagsWrapper>
        <span>Suggested tags:</span>
        <Tag type="button" tagTypes="birthday" value="Birthday" onClick={SuggestedTag}>
          Birthday
        </Tag>
        <Tag type="button" tagTypes="wheelchair" value="Wheelchair" onClick={SuggestedTag}>
          Wheelchair
        </Tag>
        <Tag type="button" tagTypes="highchair" value="Highchair" onClick={SuggestedTag}>
          Highchair
        </Tag>
      </SuggestedTagsWrapper>
      <StyledTextarea
        type="text"
        id="notes"
        name="notes"
        rows="8"
        ref={ref}
        value={tags.toString()}
      />
      <InputWrapper>
        <div style={{ width: "100%", height: "150px", marginBottom: "50px" }}>
          <Label for="notes">Notes</Label>
          <CreateTags tags={tags} setTags={setTags} />
        </div>
      </InputWrapper>
    </>
  );
};

export default InputTextarea;
