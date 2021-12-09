import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Counter from './components/Counter';
import LoginForm from './components/LoginForm';
import Todo from './components/Todo';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
