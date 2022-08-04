import { Container } from "./styles";
import { FormToDo } from "../FormToDo";
import { Tasks } from "../Tasks";
import { FormEvent, useState } from "react";
import { EmptyTasks } from "../EmptyTasks";
import { v4 as uuidv4 } from 'uuid';

interface Task {
  id: string;
  description: string;
}

export function Template() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState<string>('');

  function handleSetNewTask(event: any) {
    setNewTask(event.target.value);
  }

  function handleAddTask(event: FormEvent) {
    event.preventDefault();
    if (newTask) {
      const objNewTask = {
        id: uuidv4(),
        description: newTask,
      }

      setTasks([...tasks, objNewTask]);
      setNewTask('');
    } else {
      alert('Digite algo no input!')
    }
  }

  function handleRemoveTask(taskRemove: Task) {
    const newListTasks = tasks;
    newListTasks.splice(newListTasks.indexOf(taskRemove), 1);
    setTasks([...newListTasks]);
  }

  return (
    <Container>
      <FormToDo handleAddTask={handleAddTask} newTask={newTask} handleSetNewTask={handleSetNewTask}></FormToDo>
      {tasks.length > 0 ? <Tasks listTasks={tasks} handleRemoveTask={handleRemoveTask} /> : <EmptyTasks />}
    </Container>
  );
}