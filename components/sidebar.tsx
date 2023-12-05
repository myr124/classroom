import React from "react";

const Sidebar = () => {
  return (
    <div>
      <ul className="menu bg-base-100 w-56 basis-1/3">
        <li>
          <a>Item 1</a>
        </li>
        <li>
          <a className="active">Item 2</a>
        </li>
        <li>
          <a>Item 3</a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
