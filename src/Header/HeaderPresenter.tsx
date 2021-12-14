import React from "react";
import styled from "styled-components";

interface props {
  menu: Array<String>;
}

const Header = styled.div`
  background-color: black;
  width: document.body.clientWidth;
  height: 20px;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  align-items: center;
`;

const Menu = styled.div`
  color: white;
  margin-right: 10px;
  display: inline;
`;

const Title = styled.text`
  color: white;
`;

const Menus = styled.div`
  display: inline;
`;

const Presenter: React.FC<props> = ({ menu }) => {
  return (
    <Header>
      <Title>Pong's Portfoilo</Title>
      <Menus>
        {menu.map((target) => {
          return <Menu>{target}</Menu>;
        })}
      </Menus>
    </Header>
  );
};

export default Presenter;
