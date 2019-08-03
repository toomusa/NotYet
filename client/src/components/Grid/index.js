
// import React from "react";
// import "./style.css";

// const Grid = () => {
//     return (
//         <div>
//             <h1>Grid</h1>
//         </div>
//     )
// }

// export default Grid;

import React from "react";

const Grid = props =>
  <div className={`container${props.fluid ? "-fluid" : ""}`}>
    {props.children}
  </div>;

export default Grid; 