const Modal = ({ setModal }) => {
  return (
    <>
          <div className="ml-[30%] mt-[10%] rounded-3xl pl-[10%] bg-gray-500 h-[50%] w-[40%] border-4 border-black-500 shadow-lg">
              <div >
                   <button onClick={()=>{setModal(false)}} type="button" className="mx-4  w-[17%] h-8 text-lg bg-red-800 rounded-2xl font-serif ml-[80%] mt-2 border-2 border-black ">Close</button>
                  <button type="button"  className="mx-4 border-2 border-black w-[50%] h-10 rounded-xl my-3 hover:bg-slate-800 text-xl font-sans">Sign in with Google</button>
                  <button type="button" className="mx-4 border-2 border-black w-[50%] h-10 rounded-xl my-3 hover:bg-slate-800 text-xl font-sans">Sign in with gitHub</button>
                 
              </div>
              <div className="text-2xl font-sans ">
                  <span className="ml-5 py-10">Welcome to my Home</span>
              </div>
          </div>
    </>
  )
}

export default Modal
