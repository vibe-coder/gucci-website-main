import './styling/App.css';
import SectionOne from './home-page/Section-1';
import SectionTwo from './home-page/Section-2';
import SectionThree from './home-page/Section-3';
import SectionFour from './home-page/Section-4';


function App() {
  return (
    <div className="App-header">
      <SectionOne/>
      <SectionTwo/>
      <SectionThree/>
      <SectionFour/>
    </div>
  );
}

export default App;
