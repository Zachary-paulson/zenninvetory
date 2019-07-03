import React from "react";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function Summary(props) {
  return <main className="summaryWrapper" {...props} />;
}

export default Summary;

