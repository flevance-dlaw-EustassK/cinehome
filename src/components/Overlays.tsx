import React from "react";

const Overlays: React.FC = () => {
  return (
    <>
      <div className="fixed-overlay film-grain" aria-hidden="true" />
      <div className="fixed-overlay vignette" aria-hidden="true" />
    </>
  );
};

export default Overlays;