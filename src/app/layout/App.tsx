import './App.sass';
import { Outlet } from 'react-router-dom';
import { Header } from '../../widgets/header';
import { Footer } from '../../widgets/footer';

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
