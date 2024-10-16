const Home = ({setModal}) => {
  return (
     <div>
          <button onClick={()=>setModal(true)} className="w-[10%] h-10 ml-[40%] mt-[20%] bg-green-500 rounded-xl text-black font-serif text-xl border-2 border-black">Modal</button>
      </div>
  )
}

export default Home
