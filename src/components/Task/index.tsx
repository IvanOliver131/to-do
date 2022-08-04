import { BsTrashFill } from "@react-icons/all-files/bs/BsTrashFill";
import { Container } from "./styles";

interface TaskProps {
  task: object
  description: string;
  handleRemoveTask: (task: object) => void;
}
export function Task({ task, description, handleRemoveTask }: TaskProps) {
  return (
    <Container>
      <span>{description}</span>
      <button type="button" onClick={() => handleRemoveTask(task)}>
        <BsTrashFill color="black" />
      </button>
    </Container>
  );
}