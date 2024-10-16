import { useState } from 'react';
import Home from './Component/Home';
import Modal from './Component/modal';


function App() {
  const [modal, setModal] = useState(false);

  return (
    <>
      <Home setModal={setModal} />
      {modal &&<Modal setModal={setModal} />}
      
    </>
  );
}

export default App;
