import { AddIcon } from "@chakra-ui/icons";
import {
  Button,
  Flex,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/todoSlice";

const AddTodo = ({ handleAdd }) => {
  const [value, setValue] = useState("");

  const dispatch = useDispatch();
  const handleSubmit = () => {
    dispatch(addTodo({ text: value }));
    setValue("");
  };

  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Flex pos="absolute" bottom="-4" left="0" right="0" justify="center">
        <Button leftIcon={<AddIcon />} onClick={onOpen}>
          Add a task
        </Button>
      </Flex>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add A New Task</ModalHeader>
          <ModalBody>
            <Flex align="center">
              <Input
                flex="3"
                placeholder="New task..."
                value={value}
                onChange={(e) => setValue(e.target.value)}
                mr="4"
              ></Input>
              <Button flex="1" textTransform="capitalize" onClick={handleSubmit}>
                Add
              </Button>
            </Flex>
          </ModalBody>
          <ModalFooter>
            <Button
              mr="3"
              onClick={() => {
                setValue("");
              }}
            >
              Clear
            </Button>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddTodo;
