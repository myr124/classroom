import React from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";

const Fileupload = () => {
  return (
    <div className="flex flex-row align-middle justify-center">
      <button className="btn-lg ">
        Upload <AiOutlineCloudUpload />
      </button>
    </div>
  );
};

export default Fileupload;
