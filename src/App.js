import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './components/Main/Main';
import Header from './components/Header/Header';
import Quizes from './components/Quizes/Quizes';
import Home from './components/Home/Home';

const router = createBrowserRouter([
  {path: '/', element: <Main></Main>, children: [
    {path: '/home', element: <Home></Home>},
    {path: '/home', element: <Header></Header>},

    {path: '/quizes', 
    loader:async() => {
        return fetch('https://jsonplaceholder.typicode.com/users');
    },
    element: <Quizes></Quizes>},
  ]},

  {path: '/*', element: <div>not 404 found</div>},
 ])


function App() {
  return (
    <div className="App">
      <h3>OnlineQuiz.com</h3>
      <RouterProvider router={router}></RouterProvider>

    </div>
  );
}

export default App;
