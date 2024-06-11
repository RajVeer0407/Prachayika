import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Menu = ({ route }) => {
  return (
    <SMenu>
      <MenuButton>{route.name}</MenuButton>
      <SubRoutesContainer>
        {route.subRoutes.map((subRoute) => (
          <SubRoute to={subRoute.link} key={subRoute.name}>
            {subRoute.name}
          </SubRoute>
        ))}
      </SubRoutesContainer>
    </SMenu>
  );
};

export default Menu;
const SubRoutesContainer = styled.div`
  position: absolute;
  min-width: 17rem;
  display: flex;
  flex-direction: column;
  box-shadow: 0 8px 16px 0px rgba(0, 0, 0, 0.2);
  padding: 1rem;
  left: -1rem;
  visibility: hidden;
  background: white;
  opacity: 0;
  border-radius: 1rem;
  transition: visibility 0.3s ease-in-out, opacity 0.3s ease-in-out;
  z-index: 999;
`;
const SMenu = styled.div`
  position: relative;
  display: inline-block;
  font-size: 1.2rem;
  font-weight: 600;

  &:hover ${SubRoutesContainer} {
    visibility: visible;
    opacity: 1;
    cursor: pointer;
  }
`;

const MenuButton = styled.div`
  padding: .5rem;
  &:hover {
    transition: 0.3s ease;
    color: black;
    border-radius: 10px;
    background-color: white;
    box-shadow: 0px 0px 10px white;
  }
`;

const SubRoute = styled(Link)`
  text-decoration: none;
  color: black;
  padding: 1rem;
  border-radius: 0.5rem;

  &:hover {
    transition: 0.1s ease-in;
    color: black;
    background-color: #9fe3d6;
  }
`;
