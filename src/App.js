import logo from './logo.svg';
import './App.css';
import TextPressure from './component/textPressure';

function App() {
  return (
    <div style={{position: 'relative', height: '300px'}}>
  <TextPressure
    text="Suraj Gavali!"
    flex={true}
    alpha={false}
    stroke={false}
    width={true}
    weight={true}
    italic={true}
    textColor="#000000"
    strokeColor="#ff0000"
    minFontSize={36}
  />

  <TextPressure
    text="CA. Sourabh Mahekar!"
    flex={true}
    alpha={false}
    stroke={false}
    width={true}
    weight={true}
    italic={true}
    textColor="#000000"
    strokeColor="#ff0000"
    minFontSize={36}
  />
</div>
  );

}

export default App;
