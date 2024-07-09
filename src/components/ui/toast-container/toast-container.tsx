import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
export const Toast = () => {
  return (
    <div>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        limit={1}
        rtl={false}
        pauseOnFocusLoss
        draggable
        theme="colored"
      />
    </div>
  )
}
