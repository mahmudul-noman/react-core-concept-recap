import logo from './logo.svg';
import './App.css';
import Article from './components/Article/Article.js';
import MainBlog from './components/Blog/MainBlog';
import Mobile from './components/mobile/Mobile';
import Todos from './components/todos/Todos';


function App() {
  return (
    <div className="App" style={{padding: '50px'}}>
      <h1>Recap - <span style={{color: '#61DBFB'}}>React Core Concept</span></h1>
      <Article></Article>
      <MainBlog></MainBlog>
      <Mobile></Mobile>
      <Todos></Todos>
    </div>
  );
}

export default App;
