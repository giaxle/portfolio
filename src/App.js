import styles from './App.scss';
import FrontPage from './components/frontpage/Frontpage';
import Main from './components/main/Main';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className={styles.App}>
        <Routes>
          <Route path="/portfolio" element={<FrontPage />} />
          <Route path="/main" element={<Main /> } />
        </Routes>
    </div>
  );
}

export default App;