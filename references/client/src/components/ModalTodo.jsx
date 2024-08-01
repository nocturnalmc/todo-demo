export default function ModalTodo({ setOpenModalTodo }) {
  return (
    <div className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center'>
      <form className='w-96 bg-white rounded-md p-4'>
        <h2 className='font-medium text-lg'>Tambah Todo</h2>
        <select
          className='w-full border border-gray-300 rounded-md p-2 mt-2'
          placeholder='Jenis'
        >
          <option></option>
          <option>Kerja</option>
          <option>Hiburan</option>
          <option>Keluarga</option>
        </select>
        <input
          type='text'
          className='w-full border border-gray-300 rounded-md p-2 mt-2'
          placeholder='Tajuk'
        />
        <textarea
          className='w-full border border-gray-300 rounded-md p-2 mt-2'
          placeholder='Isi'
        />
        <label className='w-full p-2 mt-2 flex items-center justify-center space-x-2'>
          <input type='checkbox' />
          <span>Selesai</span>
        </label>
        <div className='flex flex-row justify-end mt-2 space-x-2'>
          <button
            type='button'
            onClick={() => setOpenModalTodo(false)}
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
