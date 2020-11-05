/* eslint-disable no-shadow */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-use-before-define */
import React, { useState } from 'react';

interface ITask {
  id: string;
  description: string;
  quantity: string;
  higherPrice: string;
  finalPrice: string;
}
const ListTask: React.FC = () => {
  const [newTask, setNewTask] = useState({
    id: '',
    description: '',
    quantity: '',
    higherPrice: '',
    finalPrice: '',
  });
  const [tasks, setTasks] = useState<ITask[]>([]);
  /* console.log(newTask); */
  console.log(tasks);

  const gettask = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setNewTask({
      ...newTask,
      [e.target.name]: [e.target.value],
      [e.target.name]: [e.target.value],
      [e.target.name]: [e.target.value],
      [e.target.name]: [e.target.value],
      [e.target.name]: [e.target.value],
    });
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTask(newTask);
  };
  const addTask = (newTask: ITask) => {
    const newTasks: ITask[] = [newTask];
    setTasks(newTasks);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={gettask} name="id" placeholder="id" />
        <input type="text" onChange={gettask} name="description" placeholder="descripcion" />
        <input type="text" onChange={gettask} name="quantity" placeholder="cantidad" />
        <input type="text" onChange={gettask} name="higherPrice" placeholder="precio por mayor" />
        <input type="text" onChange={gettask} name="finalPrice" placeholder="precio por menor" />
        <button type="submit">Guardar</button>
      </form>
      {tasks.map((t: ITask) => (
        <>
          <h2>{t.id[0]}</h2>
          <h2>{t.description[0]}</h2>
          <h2>{t.quantity[0]}</h2>
          <h2>{t.higherPrice[0]}</h2>
          <h2>{t.finalPrice[0]}</h2>
        </>
      ))}
    </div>
  );
};

export default ListTask;
