import { useState } from "react";
import Translation from "./translation";

const Funcswitch = () => {
  const [tab, setTab] = useState("Tab 1");

  return (
    <div>
      <div role="tablist" className="tabs tabs-lifted">
        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab "
          aria-label="Files"
          onClick={() => {
            setTab("Tab 1");
          }}
          checked={tab === "Tab 1"}
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6"
        >
          Tab content 1
        </div>
        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab"
          aria-label="Microphone"
          onClick={() => {
            setTab("Tab 2");
          }}
          checked={tab === "Tab 2"}
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
          className="tab"
          aria-label="Notes"
          onClick={() => {
            setTab("Tab 3");
            console.log(tab);
          }}
          checked={tab === "Tab 3"}
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6"
        >
          Tab content 3
        </div>
      </div>
    </div>
  );
};

export default Funcswitch;
