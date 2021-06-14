import styled from 'styled-components';

const StyledBtn = styled(Button)`
  text-transform: capitalize;
`;

function App() {
  return (
    <div style={{ padding: '2rem' }}>
      <h2>more complex title</h2>
    </div>
  );
}

export default App;
