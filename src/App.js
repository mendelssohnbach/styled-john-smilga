// import styled from 'styled-components';
import BasicTitle from './components/BasicTitle';
import { DefaultButton } from './components/Buttons';

function App() {
  return (
    <div style={{ padding: '2rem' }}>
      <BasicTitle>styled components</BasicTitle>
      <DefaultButton className="btn">click me</DefaultButton>
    </div>
  );
}

export default App;
