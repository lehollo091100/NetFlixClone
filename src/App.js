
import './App.css';
import Header from './components/Header/Header';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch,faBell,faInfoCircle,faCaretRight,faUndoAlt,faChevronRight,faVolumeUp,faVolumeOff,faVolumeMute,faPlay,faPlus,faThumbsUp,faThumbsDown,faChevronDown } from '@fortawesome/free-solid-svg-icons'
import Home from './components/Home/Home';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Home></Home>
    </div>
  );
}

export default App;
library.add(faSearch,faBell,faInfoCircle,faCaretRight,faUndoAlt,faChevronRight,faVolumeUp,faVolumeOff,faVolumeMute,faPlay,faPlus,faThumbsUp,faThumbsDown,faChevronDown)
