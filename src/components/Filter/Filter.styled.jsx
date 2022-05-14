import styled from 'styled-components';

export const Wrapper = styled.div`
  display: inline-flex;
  width: 500px;
  height: auto;
  padding: 20px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  border: 0;
  border-radius: 7px;
  box-shadow: 5px 6px 4px #d6503e70;
  background-color: #af4335;

  &:hover {
    box-shadow: 1px 2px 1px #9c2818, 3px 5px 4px #f53c23, 5px 11px 8px #d6503e,
      10px 20px 15px #d6503e;
    transition: all 400ms cubic-bezier(0.4, 0, 0.3, 1);
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  color: #fff;
  font-size: 30px;
  font-weight: 600;
  text-shadow: 1px 1px 2px #4d0c03;
`;

export const Input = styled.input`
  width: 460px;
  height: 40px;
  padding: 10px 30px;
  outline: none;
  border: 0;
  border-radius: 4px;
  margin-bottom: 20px;
  color: #4d0c03;
  font-size: 20px;
  box-shadow: 3px 4px 2px #ffffff50;

  &:hover,
  &:focus {
    outline: 1px solid #d4240d;
    transition: outline 200ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;
