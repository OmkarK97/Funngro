import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage';
import TeenPage from './pages/TeenPage';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/teen" element={<TeenPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
