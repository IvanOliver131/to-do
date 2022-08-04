import { Task } from "../Task";
import { Container } from "./styles";

interface ITask {
  id: string;
  description: string;
}

interface TasksProps {
  listTasks: ITask[];
  handleRemoveTask: (task: ITask) => void;
}

export function Tasks({ listTasks, handleRemoveTask }: TasksProps) {
  return (
    <Container>
      {listTasks.map((task: ITask) => {
        return (
          <div key={task.id}>
            <Task task={task} description={task.description} handleRemoveTask={() => handleRemoveTask(task)} />
          </div>
        )
      })}
    </Container>
  );
}