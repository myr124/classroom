import { useState } from "react";
import Translation from "./translation";
import Fileupload from "./fileupload";

const Funcswitch = () => {
  const [tab, setTab] = useState("Tab 1");

  return (
    <div role="tablist" className="tabs tabs-lg tabs-lifted flex-grow">
      <input
        type="radio"
        name="my_tabs_2"
        role="tab"
        className="tab"
        aria-label="Microphone"
        onClick={() => {
          setTab("Tab 1");
        }}
        checked={tab === "Tab 1"}
      />
      <div
        role="tabpanel"
        className="tab-content bg-base-100 border-base-300 rounded-box p-6"
      >
        <Translation />
      </div>
      <input
        type="radio"
        name="my_tabs_2"
        role="tab"
        className="tab "
        aria-label="File Upload"
        onClick={() => {
          setTab("Tab 2");
        }}
        checked={tab === "Tab 2"}
      />
      <div
        role="tabpanel"
        className="tab-content bg-base-100 border-base-300 rounded-box p-6"
      >
        <Fileupload></Fileupload>
      </div>
    </div>
  );
};

export default Funcswitch;
