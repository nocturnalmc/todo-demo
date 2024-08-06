import { useState, useEffect } from 'react';
import { FaPlus, FaRegEdit, FaRegTrashAlt, FaRedoAlt } from 'react-icons/fa';
import ModalTodo from './ModalTodo';
import axios from 'axios';

export default function TodoMain() {
  const [semuaTodo, setSemuaTodo] = useState([]);
  const [idTodo, setIdTodo] = useState('');

  const [openModalTodo, setOpenModalTodo] = useState(false);

  const [reload, setReload] = useState(false);

  useEffect(() => {
    const fetchSemuaTodo = async () => {
      try {
        const { data } = await axios.get('/api/todo');
        console.log(data.allTodo);
        setSemuaTodo(data.allTodo);
      } catch (error) {
        console.error(error);
      }
    };
    fetchSemuaTodo();
  }, [reload]);

  const deleteTodo = async (id) => {
    try {
      const response = await axios.patch(`/api/todo/delete/${id}`);
      console.log(response.data);
      setReload(!reload);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='flex flex-col items-center'>
      <h1 className='text-lg font-medium w-full flex flex-row justify-between items-center'>
        <span>todo</span>
        <span className='text-orange-500 flex space-x-2'>
          <FaRedoAlt onClick={() => setReload(!reload)} />
          <FaPlus onClick={() => setOpenModalTodo(true)} />
        </span>
      </h1>
      {semuaTodo.map((todo, index) => (
        <div className='w-96 rounded-md bg-orange-100 p-4'>
          <h2 className='font-medium text-lg'>{todo.tajukTodo}</h2>
          <p className='whitespace-pre-wrap'>{todo.isiTodo}</p>
          <span className='flex justify-end space-x-2 text-lg'>
            <FaRegEdit
              onClick={() => {
                setIdTodo(todo._id);
                setOpenModalTodo(true);
              }}
            />
            <FaRegTrashAlt onClick={() => deleteTodo(todo._id)} />
          </span>
        </div>
      ))}
      {openModalTodo && (
        <ModalTodo
          setOpenModalTodo={setOpenModalTodo}
          idTodo={idTodo}
          setIdTodo={setIdTodo}
          reload={reload}
          setReload={setReload}
        />
      )}
    </div>
  );
}
