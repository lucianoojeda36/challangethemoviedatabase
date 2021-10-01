import './App.css';
import { Route } from "react-router-dom";
import DragAndDrop from './components/draganddrop/DragAndDrop';
import 'antd/dist/antd.css';
import DashBoard from './pages/dashboard/DashBoard';

function App() {
  return (
    <div className="App">
      <Route exact path='/' component={DragAndDrop} />
      <Route path='/DashBoard' component={DashBoard} />
    </div>
  );
}

export default App;
