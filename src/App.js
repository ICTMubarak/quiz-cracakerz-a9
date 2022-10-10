import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './components/Main/Main';
import Header from './components/Header/Header';
import Quizes from './components/Quizes/Quizes';
import Home from './components/Home/Home';
import Statistics from './components/Statistics/Statistics';
import Blog from './components/Blog/Blog';

const router = createBrowserRouter([
  {path: '/', element: <Main></Main>, children: [
    {path: '/home', element: <Home></Home>},
    {path: '/header', element: <Header></Header>},
    {path: '/statistics', element: <Statistics></Statistics>},
    {path: '/blog', element: <Blog></Blog>},

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
     
      <RouterProvider router={router}></RouterProvider>

    </div>
  );
}

export default App;
