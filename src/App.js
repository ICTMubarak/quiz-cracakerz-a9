import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './components/Main/Main';
import Header from './components/Header/Header';
import Quizes from './components/Quizes/Quizes';
import Home from './components/Home/Home';
import Statistics from './components/Statistics/Statistics';
import Blog from './components/Blog/Blog';
import Start from './components/Start/Start';

const router = createBrowserRouter([
  {path: '/', element: <Main></Main>, children: [
    {path: '/home', element: <Home></Home>},
    {path: '/header', element: <Header></Header>},
    {path: '/statistics', 
    loader:async() => {
      return fetch('https://openapi.programming-hero.com/api/quiz');
  },
    element: <Statistics></Statistics>},
    {path: '/blog', element: <Blog></Blog>},

    {path: '/quizes', 
    loader:async() => {
        return fetch('https://openapi.programming-hero.com/api/quiz');
    },
    element: <Quizes></Quizes>},

    {path: '/start/:startId', 
    loader: async ({params}) => {
     // console.log('p=',params.startId);
     const ID = params.startId;
      //return console.log(params.friendID)
  
          return fetch(`https://openapi.programming-hero.com/api/quiz/${ID}`);
          
    },
    element: <Start></Start>},
    
    
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
