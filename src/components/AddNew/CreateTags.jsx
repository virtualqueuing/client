import styled from "styled-components";
import { useState } from "react";
import Tag from "../Tag";
import theme from "../../theme";

const Container = styled.div`
  background-color: white;
  display: flex;
  justify-content: left;
  width: 100%;
  height: 100%;
  border-radius: 15px;
  box-shadow: 0 0 4px rgb(0, 0, 0, 50%);
  flex-wrap: wrap;
  border: none;
  padding: 20px 14px;
  & input {
    width: auto !important;
    padding: 5px 15px 5px 30px;
    border: none;
    height: 25px;
    border-radius: 15px;
    margin-right: 15px;
    font-size: ${({ theme }) => theme.fontSizes.md};
    padding: 14px;
    padding-left: 14px;
    :focus {
      outline: none;
    }
  }
`;

const NewTag = styled(Tag)`
  padding: 5px 15px;
  box-shadow: 1px 1px 2px rgb(0, 0, 0, 30%);
  cursor: pointer;
`;

// random index from 0 to tagColorList.length

const CreateTags = (props) => {
  const [input, setInput] = useState("");
  // const [tags, setTags] = useState([]);
  const [isKeyReleased, setIsKeyReleased] = useState(false);
  const onChange = (e) => {
    const { value } = e.target;
    setInput(value);
  };

  const onKeyDown = (e) => {
    const { key } = e;
    const trimmedInput = input.trim();

    if (key === "Enter" && trimmedInput.length > 0 && !props.tags.includes(trimmedInput)) {
      e.preventDefault();
      props.setTags((prevState) => [...prevState, trimmedInput]);
      setInput("");
      // console.log(props.tags)
    }

    if (key === "Backspace" && !input.length && props.tags.length && isKeyReleased) {
      const tagsCopy = [...props.tags];
      const poppedTag = tagsCopy.pop();
      e.preventDefault();
      props.setTags(tagsCopy);
      setInput(poppedTag);
    }

    setIsKeyReleased(false);
  };

  const onKeyUp = () => {
    setIsKeyReleased(true);
  };

  const deleteTag = (index) => {
    props.setTags((prevState) => prevState.filter((tag, i) => i !== index));
  };

  return (
    <Container>
      {props.tags.map((tag, index) => (
        <NewTag
          key={index}
          onClick={() => deleteTag(index)}
          style={{ backgroundColor: theme.colors.components.tags.tagColorList[index] }}
        >
          {tag}
        </NewTag>
      ))}
      <input
        value={input}
        type="text"
        placeholder="Enter a tag"
        onKeyDown={onKeyDown}
        onKeyUp={onKeyUp}
        onChange={onChange}
      />
    </Container>
  );
};

export default CreateTags;
