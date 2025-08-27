import { PlusCircleIcon } from "lucide-react";
import React from "react";

function OpenModal() {
  return (
    <div>
      <button
        className="btn bg-white "
        onClick={() => document.getElementById("modal").showModal()}
      >
        <PlusCircleIcon className="size-5 mr-2" />
        Append time series
      </button>
    </div>
  );
}

export default OpenModal;
