import React from "react";
import styled from "styled-components";
import { BsFillGridFill, BsList } from "react-icons/bs";
import { useState } from "react";

export const GridToList = ({ fn }) => {
  function changeList() {
    fn(1);
  }

  function changeGrid() {
    fn(3);
  }

  return (
    <div className="sort-selection">
      <div className="GridList">
        <button className="sorting-list-grid" onClick={changeGrid}>
          {/* <BsFillGridFill className="icon1" /> */}
          Grid
        </button>

        <button className="i2" onClick={changeList}>
          {/* <BsList className="icon2"  /> */}
          List
        </button>
      </div>
    </div>
  );
};
