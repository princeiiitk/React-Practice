import { useEffect, useState } from 'react';
import Card from './Component/Card';
import Togglebtn from './Component/Togglebtn';
import { ThemProvider } from './Context/ThemContext';

function App() {
  const [theme, setTheme] = useState('light');

  const darkTheme = () => {
    setTheme('dark');
  }

  const lightTheme = () => {
    setTheme('light');
  }

  useEffect(() => {
    document.querySelector('html').classList.remove('dark', 'light');
    document.querySelector('html').classList.add(theme);
  }, [theme]);

  return (
    <ThemProvider value={{ ThemMode: theme, darkTheme, lightTheme }}>
      <div className='ml-[35%]'>
        <Togglebtn />
      </div>
      <Card />
    </ThemProvider>
  );
}

export default App;
