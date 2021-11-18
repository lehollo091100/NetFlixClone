
import './App.css';
import Header from './components/Header/Header';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faGlobe,faSearch,faBell,faInfoCircle,faCaretRight,faUndoAlt,faChevronRight,faVolumeUp,faVolumeOff,faVolumeMute,faPlay,faPlus,faThumbsUp,faThumbsDown,faChevronDown,faCaretDown, faAlignLeft, faThLarge } from '@fortawesome/free-solid-svg-icons'
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Manage from './components/Manage/Manage';
import {  BrowserRouter as Router,Route,Link,Switch} from 'react-router-dom'
import TruyenHinh from './components/TruyenHinh/TruyenHinh';
import Login from './components/Login/Login';
import Signup from './components/Login/Signup';
import Intro from './components/Intro/Intro';
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/truyenhinh">
            <TruyenHinh cate="Phim T.hình"></TruyenHinh>
          </Route>
          <Route path="/phim">
            <TruyenHinh cate="Phim"></TruyenHinh>
          </Route>
          <Route path="/moivaphobien">
            <TruyenHinh cate="Mới & phổ biến"></TruyenHinh>
          </Route>
          <Route path="/mylist">
            <TruyenHinh cate="Danh sách của tôi"></TruyenHinh>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/signup">
            <Signup/>
          </Route>
          <Route path="/">
            <Intro/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
library.add(faGlobe,fab,faSearch,faBell,faInfoCircle,faCaretRight,faUndoAlt,faChevronRight,faVolumeUp,faVolumeOff,faVolumeMute,faPlay,faPlus,faThumbsUp,faThumbsDown,faChevronDown,faCaretDown,faAlignLeft,faThLarge)
