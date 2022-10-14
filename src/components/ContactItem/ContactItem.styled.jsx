import styled from 'styled-components';
import { RiUserFill } from 'react-icons/ri';

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  :not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const Contact = styled.p`
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: 500;
`;

export const IconUser = styled(RiUserFill)`
  padding: 3px;
  border: 1px solid #4287f5;
  border-radius: 50%;
  margin-right: 10px;
  color: #4287f5;
`;

export const Button = styled.button`
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;

  color: #242323;
  font-size: 30px;
  border: none;
  border-radius: 50%;
  border: 1px solid #242323;
  background-color: transparent;

  transition: all 100ms linear;
  cursor: pointer;

  :hover {
    background-color:black;
    color: red;
    /* border: 1px solid #fff; */
  }
`;
