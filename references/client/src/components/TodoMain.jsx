import { useState } from 'react';
import { FaPlus, FaRegEdit, FaRegTrashAlt } from 'react-icons/fa';
import ModalTodo from './ModalTodo';

export default function TodoMain() {
  const [openModalTodo, setOpenModalTodo] = useState(false);
  return (
    <div className='flex flex-col items-center'>
      <h1 className='text-lg font-medium w-full flex flex-row justify-between items-center'>
        <span>todo</span>
        <span className='text-orange-500'>
          <FaPlus onClick={() => setOpenModalTodo(true)} />
        </span>
      </h1>
      <div className='w-96 rounded-md bg-orange-100 p-4'>
        <h2 className='font-medium text-lg'>Tajuk</h2>
        <p className='whitespace-pre-wrap'>Isi</p>
        <span className='flex justify-end space-x-2 text-lg'>
          <FaRegEdit />
          <FaRegTrashAlt />
        </span>
      </div>
      {openModalTodo && <ModalTodo setOpenModalTodo={setOpenModalTodo} />}
    </div>
  );
}
