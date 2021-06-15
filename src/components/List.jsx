import styled, { css } from 'styled-components/macro';

const fruits = ['orange', 'apple', 'banana', 'peach'];

const List = () => {
  return (
    <ul>
      {fruits.map((item, index) => {
        return <li key={index}>{item}</li>;
      })}
    </ul>
  );
};

export default List;
