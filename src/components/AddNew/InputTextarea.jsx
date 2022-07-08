import { InputWrapper, Label, SuggestedTagsWrapper } from "../styles/AddNew.styles";
import Tag from "../Tag";
import CreateTags from "./CreateTags";
import { useState, useRef } from "react";
import { StyledTextarea } from "../styles/AddNew.styles";

const InputTextarea = ({ inputInfo }) => {
  // click Tag to create new tag in CreateTags
  const noteString = inputInfo?.notes[0].split(",");
  const cleanedNotes = noteString?.filter((s) => {
    return s && s.trim();
  });

  const [tags, setTags] = useState(cleanedNotes);
  const ref = useRef(null);

  const SuggestedTag = (e) => {
    setTags((prevState) => {
      if (!prevState) {
        return [e.target.value];
      }
      return [...prevState, e.target.value];
    });
    // console.log(e.target.value);
    // console.log(tags.toString())
    // console.log(ref.current.value)
    // console.log(StyledTextarea)
    // console.log(tags);
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
        value={tags?.toString()}
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
