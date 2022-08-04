import { Container } from "./styles";

interface InputProps {
  newTask: string;
  handleSetNewTask: (event: any) => void;
}

export function Input({ newTask, handleSetNewTask }: InputProps) {
  return (
    <Container>
      <input
        type="text"
        value={newTask}
        onChange={handleSetNewTask} placeholder="Digite uma tarefa..."
      ></input>
    </Container>
  );
}