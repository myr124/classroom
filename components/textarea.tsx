import React from "react";

const Textarea = () => {
  return (
    <div className="flex flex-row justify-center align-middle">
      <textarea
        className="textarea textarea-info textarea-lg w-full max-w-xs text-fuchsia-500"
        placeholder="Bio"
      ></textarea>
    </div>
  );
};

export default Textarea;
