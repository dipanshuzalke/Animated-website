import './App.css'
import CoachesSection from './pages/CoachesSection';
import HeroSection from './pages/Hero'

function App() {
  return (
    <div className="App">
      <nav className="top-0 z-50 bg-white shadow-md py-8 px-16 flex justify-around items-center border border-b-gray-200">
        <div className="flex gap-12 text-lg font-bold">
          <a href="">Location</a>
          <a href="">Fitness</a>
        </div>
        <h1 className='text-xl font-bold'>My website</h1>
          <div className="flex gap-12 text-lg font-bold">
            <a href="">About</a>
          <a href="">Contact</a>
          </div>
      </nav>

      <HeroSection />
      <CoachesSection />
    </div>
  );
}


export default App
