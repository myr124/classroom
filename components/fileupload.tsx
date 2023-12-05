import React from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";

const Fileupload = () => {
  return (
    <div>
      <button className="btn flex flex-row align-middle justify-center">
        Upload <AiOutlineCloudUpload />
      </button>
    </div>
  );
};

export default Fileupload;
