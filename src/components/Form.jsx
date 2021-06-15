import styled, { css } from 'styled-components/macro';

const Button = styled.button.attrs((props) => {
  return { type: props.type || 'button' };
})`
  background: var(--primary);
  border: none;
  color: white;
  padding: 0.25rem;
  cursor: pointer;
`;

const Form = () => {
  return (
    <div>
      <h1>some random stuff</h1>
      <Button type="button">click me</Button>
      <form
        css={`
          width: 300px;
          background: #fff;
          padding: 2rem;
          margin-top: 1rem;
        `}
      >
        <h2>Form</h2>
        <input type="text" />
        <Button>submit here</Button>
      </form>
    </div>
  );
};

export default Form;
