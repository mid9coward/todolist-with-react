import React from "react";

function Header({ title, subTitle }) {
  return (
    <h1 className="title">
      Todo List
      <span>Get one item done, one item at a time.</span>
    </h1>
  );
}

export default Header;
