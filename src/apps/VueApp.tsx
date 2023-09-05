import React, { useEffect, useRef } from "react";
import { mount } from "rightSidebar/rightSidebar";

export const VueApp = () => {
  const ref = useRef(null);
  useEffect(() => {
    mount(ref.current);
  }, []);
  return <div className="right-sidebar-module" ref={ref} />;
};
