import styled from "styled-components";
import { useState, memo } from "react";
import Tag from "../Tag";
import theme from "../../theme";
import propTypes from "prop-types";
import isEmpty from "lodash/isEmpty";

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
    width: auto;
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

export const NewTag = styled(Tag)`
  padding: 5px 15px;
  box-shadow: 1px 1px 2px rgb(0, 0, 0, 30%);
  cursor: pointer;
  margin: 5px;
`;

const CreateTags = ({ tags, setTags }) => {
  const [input, setInput] = useState("");
  const [isKeyReleased, setIsKeyReleased] = useState(false);
  const onChange = (e) => {
    const { value } = e.target;
    setInput(value);
  };

  const onKeyDown = (e) => {
    const { key } = e;
    const trimmedInput = input.trim();

    if (key === "Enter" && trimmedInput.length > 0 && !tags.includes(trimmedInput)) {
      e.preventDefault();
      setTags((prevState) => [...prevState, trimmedInput]);
      setInput("");
    }

    if (key === "Backspace" && !input.length && tags.length && isKeyReleased) {
      const tagsCopy = [...tags];
      const poppedTag = tagsCopy.pop();
      e.preventDefault();
      setTags(tagsCopy);
      setInput(poppedTag);
    }

    setIsKeyReleased(false);
  };

  const onKeyUp = () => {
    setIsKeyReleased(true);
  };

  const deleteTag = (index) => {
    setTags((prevState) => prevState.filter((tag, i) => i !== index));
  };

  return (
    <Container>
      {!isEmpty(tags) &&
        tags.map((tag,index) => (
          <NewTag
            key={tag}
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

export default memo(CreateTags);

CreateTags.propTypes = {
  tags: propTypes.arrayOf(propTypes.string),
  setTags: propTypes.func.isRequired,
};
