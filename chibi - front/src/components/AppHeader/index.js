import './appheader.scss';
import NavBar from "./NavBar";

function AppHeader() {
    return (
      <div className="header">
          <h1 className="header__title">Chibi Café</h1>
            <NavBar />
      </div>
    );
  }
  
export default AppHeader;