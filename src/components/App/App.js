// import { getNews } from '../../utils/apiCalls';
import PageHeader from '../PageHeader/PageHeader';
import MainContent from '../../components/MainContent/MainContent';
import NavBar from '../NavBar/NavBar';
import './App.css';

function App() {
  return (
    <div className="App">
      <PageHeader />
      <main>
        <MainContent />
        <NavBar />
      </main>
    </div>
  );
}

export default App;
