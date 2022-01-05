import './App.css';
import Title from './title/containers/Title'
import Nav from './nav/containers/Nav'
import Article from './article/containers/Article';

const App = () => {
  return (
    <div className="App">
      <Title />
      <div className='grid'>
        <Nav />
        <Article />
      </div>
    </div>
  );
}

export default App;
