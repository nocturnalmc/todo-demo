import { useState, useEffect } from 'react';
import axios from 'axios';

export default function ModalTodo({
  setOpenModalTodo,
  idTodo,
  setIdTodo,
  reload,
  setReload,
}) {
  const [jenisTodo, setJenisTodo] = useState('');
  const [tajukTodo, setTajukTodo] = useState('');
  const [isiTodo, setIsiTodo] = useState('');
  const [doneTodo, setDoneTodo] = useState(false);

  useEffect(() => {
    if (idTodo) {
      const fetchSingleTodo = async () => {
        try {
          const { data } = await axios.get(`/api/todo/${idTodo}`);
          console.log(data.singleTodo);
          setJenisTodo(data.singleTodo.jenisTodo);
          setTajukTodo(data.singleTodo.tajukTodo);
          setIsiTodo(data.singleTodo.isiTodo);
          setDoneTodo(data.singleTodo.doneTodo);
        } catch (error) {
          console.error(error);
        }
      };
      fetchSingleTodo();
    }
  }, [idTodo]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!idTodo) {
      try {
        const response = await axios.post('/api/todo', {
          jenisTodo,
          tajukTodo,
          isiTodo,
          doneTodo,
        });

        console.log(response.data);
        setOpenModalTodo(false);
        setReload(!reload);
      } catch (error) {
        console.error(error);
      }
    }

    if (idTodo) {
      try {
        const response = await axios.patch(`/api/todo/${idTodo}`, {
          jenisTodo,
          tajukTodo,
          isiTodo,
          doneTodo,
        });

        console.log(response.data);
        setIdTodo('');
        setOpenModalTodo(false);
        setReload(!reload);
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center'>
      <form onSubmit={handleSubmit} className='w-96 bg-white rounded-md p-4'>
        <h2 className='font-medium text-lg'>Tambah Todo</h2>
        <select
          className='w-full border border-gray-300 rounded-md p-2 mt-2'
          placeholder='Jenis'
          required
          name='jenis-todo'
          id='jenis-todo'
          value={jenisTodo}
          onChange={(e) => setJenisTodo(e.target.value)}
        >
          <option value=''></option>
          <option value='kerja'>Kerja</option>
          <option value='hiburan'>Hiburan</option>
          <option value='keluarga'>Keluarga</option>
        </select>
        <input
          type='text'
          className='w-full border border-gray-300 rounded-md p-2 mt-2'
          placeholder='Tajuk'
          required
          name='tajuk-todo'
          id='tajuk-todo'
          value={tajukTodo}
          onChange={(e) => setTajukTodo(e.target.value)}
        />
        <textarea
          className='w-full border border-gray-300 rounded-md p-2 mt-2'
          placeholder='Isi'
          required
          name='isi-todo'
          id='isi-todo'
          value={isiTodo}
          onChange={(e) => setIsiTodo(e.target.value)}
        />
        <label
          htmlFor='done-todo'
          className='w-full p-2 mt-2 flex items-center justify-center space-x-2'
        >
          <input
            type='checkbox'
            name='done-todo'
            id='done-todo'
            checked={doneTodo}
            onChange={(e) => setDoneTodo(!doneTodo)}
          />
          <span>Selesai</span>
        </label>
        <div className='flex flex-row justify-end mt-2 space-x-2'>
          <button
            type='button'
            onClick={() => {
              setIdTodo('');
              setOpenModalTodo(false);
            }}
            className='bg-red-500 text-white rounded-md p-2 w-24'
          >
            Batal
          </button>
          <button
            type='submit'
            className='bg-blue-500 text-white rounded-md p-2 w-24'
          >
            Tambah
          </button>
        </div>
      </form>
    </div>
  );
}
