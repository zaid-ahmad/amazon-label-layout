import { forwardRef } from "react"

/* eslint-disable react/prop-types */
const PreviewPage = forwardRef(({ label, invoice }, ref) => {
  return (
    <div
      className='bg-white flex flex-col items-center border border-black'
      ref={ref}
    >
      <img alt='label will appear here' src={label} className='w-96' />
      <img alt='invoice will appear here' src={invoice} className='w-96' />
    </div>
  )
})

PreviewPage.displayName = "PreviewPage"

export default PreviewPage
