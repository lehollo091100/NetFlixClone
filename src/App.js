
import './App.css';
import Header from './components/Header/Header';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faSearch,faBell,faInfoCircle,faCaretRight,faUndoAlt,faChevronRight,faVolumeUp,faVolumeOff,faVolumeMute,faPlay,faPlus,faThumbsUp,faThumbsDown,faChevronDown } from '@fortawesome/free-solid-svg-icons'
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Manage from './components/Manage/Manage';
function App() {
  return (
    <div className="App">
      {/* <Header></Header> */}
      {/* <Home></Home> */}
      <Manage></Manage>
    </div>
  );
}

export default App;
library.add(fab,faSearch,faBell,faInfoCircle,faCaretRight,faUndoAlt,faChevronRight,faVolumeUp,faVolumeOff,faVolumeMute,faPlay,faPlus,faThumbsUp,faThumbsDown,faChevronDown)
