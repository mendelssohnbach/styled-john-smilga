// import styled from 'styled-components';
import BasicTitle from './components/BasicTitle';
import { DefaultButton, HipsterButton } from './components/Buttons';

function App() {
  return (
    <div style={{ padding: '2rem' }}>
      <BasicTitle special>styled components</BasicTitle>
      <BasicTitle>styled components</BasicTitle>
      <DefaultButton className="btn">click me</DefaultButton>
      <HipsterButton className="btn">click me</HipsterButton>
    </div>
  );
}

export default App;
