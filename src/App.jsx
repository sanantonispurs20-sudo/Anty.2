import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Search from './pages/Search';
import Profile from './pages/Profile';
import MovieDetail from './pages/MovieDetail';

function App() {
  return (
    <Router>
      <div className="bg-surface font-body-md text-on-surface min-h-screen flex flex-col selection:bg-primary-container selection:text-on-primary-container">
        <Header />
        <main className="w-full max-w-7xl mx-auto px-margin pt-20 flex-1 bg-surface">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/movie/:id" element={<MovieDetail />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
