import { useState } from 'react';
import './App.css';
import OtpInput from './OtpInput';

function App() {
  const [otp, setOtp] = useState('');
  const onChange = (value: string) => setOtp(value);

  return (
    <div className="App">
      <h2>React Typescript OTP Input</h2>
      <OtpInput valueLength={6} value={otp} onChange={onChange} />
    </div>
  );
}

export default App;
