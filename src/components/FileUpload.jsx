/* eslint-disable react/prop-types */
const FileUpload = ({ setLabel, setInvoice }) => {
  const onLabelChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setLabel(URL.createObjectURL(event.target.files[0]))
    }
  }

  const onInvoiceChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setInvoice(URL.createObjectURL(event.target.files[0]))
    }
  }

  return (
    <div className='flex flex-col items-center sm:justify-center mt-5 sm: p-2'>
      <div className='md:w-1/2 w-full'>
        <label
          className='block mb-2 text-sm font-medium text-gray-900'
          htmlFor='default_size'
        >
          Upload Label
        </label>
        <input
          className='block w-full mb-5 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none p-3'
          id='default_size'
          type='file'
          onChange={onLabelChange}
        />
      </div>

      <div className='md:w-1/2 w-full'>
        <label
          className='block mb-2 text-sm font-medium text-gray-900'
          htmlFor='default_size'
        >
          Upload Invoice
        </label>
        <input
          className='block w-full mb-5 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none p-3'
          id='default_size'
          type='file'
          onChange={onInvoiceChange}
        />
      </div>
    </div>
  )
}

export default FileUpload
