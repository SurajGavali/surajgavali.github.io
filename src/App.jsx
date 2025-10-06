import logo from './logo.svg';
import './App.css';
import TextPressure from './component/textPressure';


function App() {
  return (
    <div style={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)', // true center
    }}>
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
        minFontSize={200}
      />

    </div>
  );
}

export default App;
