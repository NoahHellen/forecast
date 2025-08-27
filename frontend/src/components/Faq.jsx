import React from "react";

function Faq() {
  return (
    <div className="space-y-4">
      <div className="collapse bg-white shadow-sm">
        <input type="checkbox" />
        <div className="collapse-title font-semibold ">
          How do I create an account?
        </div>
        <div className="collapse-content text-sm">
          Click the "Sign Up" button in the top right corner and follow the
          registration process.
        </div>
      </div>

      <div className="collapse bg-white shadow-sm">
        <input type="checkbox" />
        <div className="collapse-title font-semibold">
          How do I create an account?
        </div>
        <div className="collapse-content text-sm">
          Click the "Sign Up" button in the top right corner and follow the
          registration process.
        </div>
      </div>
    </div>
  );
}

export default Faq;
