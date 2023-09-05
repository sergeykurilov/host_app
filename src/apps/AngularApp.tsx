import React, { useEffect } from "react";
import { mount } from "leftSideBar/leftSideBar";

export const AngularApp = () => {
  useEffect(() => {
    mount();
  }, []);

  // @ts-ignore
  return <app-root></app-root>;
};
