import './App.css';
import DragAndDrop from './components/draganddrop/DragAndDrop';
import 'antd/dist/antd.css';
import ActorProfile from './components/actorprofile/ActorProfile';
import ActorMovies from './components/actormovies/ActorMovies';

function App() {
  return (
    <div className="App">
     <DragAndDrop/>
     <ActorProfile/>
     <ActorMovies/>
    </div>
  );
}

export default App;
