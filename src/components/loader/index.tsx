import React, { CSSProperties } from "react";
import { BeatLoader } from "react-spinners";

// const override: CSSProperties = {
//   display: "block",
//   margin: "0 auto",
//   borderColor: "red",
// };

const Loader = () => {
  return (
    <div className="text-center p-32">
      <BeatLoader
        color="#36d7b7"
        cssOverride={{}}
        loading
        margin={2}
        size={29}
        speedMultiplier={1}
      />
    </div>
  );
};

export default Loader;
