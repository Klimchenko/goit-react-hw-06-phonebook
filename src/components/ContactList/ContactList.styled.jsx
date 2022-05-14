import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  width: 500px;
  height: auto;
  margin-left: auto;
  margin-right: auto;
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 10px;
`;

export const Text = styled.p`
  margin-right: 10px;
  color: #fff;
  font-size: 20px;
  font-weight: 500;
  text-shadow: 1px 2px 3px #f53c23;
`;

export const Button = styled.button`
  font-size: 20px;
  font-weight: 700;
  display: inline-block;
  cursor: pointer;
  background-color: #fff;
  color: #861607;
  border-radius: 7px;
  border: 1px solid transparent;
  padding: 1px 10px;
  box-shadow: 5px 6px 4px #4d0c0370;
  text-shadow: 1px 1px 2px #4d0c03;

  &:hover {
    color: #fff;
    background-color: #861607;
    box-shadow: 1px 2px 1px #9c2818, 3px 5px 4px #f53c23, 5px 11px 8px #d6503e,
      10px 20px 15px #d6503e;
    transition: all 400ms cubic-bezier(0.4, 0, 0.3, 1);
  }
`;
