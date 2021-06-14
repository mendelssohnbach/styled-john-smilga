import styled from 'styled-components';

const ComplexTitle = (props) => {
  console.log(props);
  return (
    <div>
      <h1>{props.title}</h1>
      <div className="underline"></div>
    </div>
  );
};

const Wrapper = styled(ComplexTitle)`
  h1 {
    text-transform: capitalize;
    text-align: center;
  }
  .underline {
    width: 5rem;
    height: 0.25rem;
    background: #645cff;
    margin: 0 auto;
  }
`;

export default Wrapper;
