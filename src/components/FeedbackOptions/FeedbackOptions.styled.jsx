import styled from '@emotion/styled';

export const Button = styled.button`
  display: block;
  text-align: center;
  width: 150px;
  height: 45px;
  margin-top: 37px;
  margin-bottom: 30px;
  margin-right: auto;
  margin-left: auto;
  font-size: 24px;
  background: radial-gradient(circle, #fbfb05, #fb94c9);
  border: 1px solid black;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 1000ms;

  &:hover {
    color: white;
    background: radial-gradient(circle, #48fa17, #f21c8b);
    /* background-color: blue; */
    transform: scale(1.25);
    padding: 10px;
  }
`;
