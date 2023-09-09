/* eslint-disable react/prop-types */

import { useRef } from "react"
import PreviewPage from "./PreviewPage"

import ReactToPrint from "react-to-print"

const PreviewContainer = ({ label, invoice }) => {
  const componentRef = useRef()

  return (
    <>
      <div className='flex items-center justify-center w-full my-5'>
        <ReactToPrint
          trigger={() => (
            <button className='w-1/2 bg-emerald-500 rounded px-5 py-2 font-bold text-white'>
              Print Page
            </button>
          )}
          content={() => componentRef.current}
        />
      </div>
      <section className='px-96 pb-10'>
        <h2 className='block mb-2 font-medium text-gray-900'>Preview</h2>
        <PreviewPage label={label} invoice={invoice} ref={componentRef} />
      </section>
    </>
  )
}

export default PreviewContainer
