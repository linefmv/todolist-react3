import Header from './components/Header/Header';
import List from './components/List/List';
import Relevant from './components/Relevant/Relevant';
import Routes from './routes/Routes';

function App() {
  return (
    <>
      <Relevant/>
      <Routes/>
      <Header />
      <List />
    </>
  );
}

export default App;