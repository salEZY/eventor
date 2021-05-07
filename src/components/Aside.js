import React from "react";
import Countries from "./Countries";
import ChangeView from "./ChangeView";
import Categories from "./Categories";
import AutoComplete from "./AutoComplete";

const Aside = ({ cssClass }) => {
  return (
    <aside className={cssClass}>
      <h2 style={{ color: "white" }}>EventoR</h2>
      <Countries />
      <AutoComplete />
      <Categories />
      <ChangeView />
    </aside>
  );
};

export default Aside;
