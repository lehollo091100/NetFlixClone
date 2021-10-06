
import './App.css';
import Header from './components/Header/Header';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faSearch,faBell,faInfoCircle,faCaretRight,faUndoAlt,faChevronRight,faVolumeUp,faVolumeOff,faVolumeMute,faPlay,faPlus,faThumbsUp,faThumbsDown,faChevronDown } from '@fortawesome/free-solid-svg-icons'
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Manage from './components/Manage/Manage';
import {  BrowserRouter as Router,Route,Link,Switch} from 'react-router-dom'
import TruyenHinh from './components/TruyenHinh/TruyenHinh';
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/truyenhinh">
            <TruyenHinh></TruyenHinh>
          </Route>
          <Route path="/">
            <Manage></Manage>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
library.add(fab,faSearch,faBell,faInfoCircle,faCaretRight,faUndoAlt,faChevronRight,faVolumeUp,faVolumeOff,faVolumeMute,faPlay,faPlus,faThumbsUp,faThumbsDown,faChevronDown)
