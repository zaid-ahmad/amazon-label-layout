import { useState } from "react"
import FileUpload from "./components/FileUpload"
import PreviewContainer from "./components/PreviewContainer"

export default function App() {
  const [label, setLabel] = useState(null)
  const [invoice, setInvoice] = useState(null)
  return (
    <>
      <FileUpload setLabel={setLabel} setInvoice={setInvoice} />
      {label === null || invoice === null ? (
        <div className='flex justify-center items-center'>
          <h2 className='text-xl text-zinc-800 font-medium mt-5 text-center px-2 md:px-0'>
            Please select the label and the invoice to generate the printout...
          </h2>
        </div>
      ) : (
        <PreviewContainer label={label} invoice={invoice} />
      )}
    </>
  )
}
