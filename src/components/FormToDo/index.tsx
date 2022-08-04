import { ChangeEvent, FormEvent } from "react";
import { Button } from "../Button";
import { Input } from "../Input";
import { Form } from "./styles";

interface FormToDoProps {
  newTask: string;
  handleSetNewTask: (event: ChangeEvent) => void;
  handleAddTask: (event: FormEvent) => void;
}

export function FormToDo({ newTask, handleAddTask, handleSetNewTask }: FormToDoProps) {
  return (
    <Form onSubmit={handleAddTask}>
      <Input newTask={newTask} handleSetNewTask={handleSetNewTask} />
      <Button />
    </Form>
  );
}