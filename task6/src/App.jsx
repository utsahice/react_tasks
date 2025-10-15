import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BlogList from './BlogList';
import BlogDetail from './BlogDetail';
import NotFound from './NotFound';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BlogList />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
