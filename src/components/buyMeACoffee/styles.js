import styled from 'styled-components'
import { WHITE } from '../../constants/colors'

export const BmcButton = styled.a`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  color: ${WHITE};
  background-color: #ff813f;
  border-radius: 5px;
  border: 1px solid transparent;
  padding: 7px 10px 7px 10px;
  box-shadow: 0px 1px 2px rgba(190, 190, 190, 0.5);
  font-family: Montserrat, sans-serif;
  transition: 0.3s all linear;

  &:hover,
  &:active,
  &:focus {
    text-decoration: none;
    box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5);
    opacity: 0.85;
    color: ${WHITE};
  }
`

export const CoffeeImage = styled.img`
  height: 30px;
  width: 30px;
  margin-bottom: 1px;
  box-shadow: none;
  border: none;
`

export const Text = styled.span`
  margin: 0 15px;
  font-size: 17px;
  text-align: center;
`
