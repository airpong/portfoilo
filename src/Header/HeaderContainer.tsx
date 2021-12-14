import React from "react";
import Presenter from "./HeaderPresenter";

interface props {
  menu: Array<String>;
}

const Container: React.FC<props> = (props) => {
  return <Presenter menu={props.menu} />;
};

export default Container;
