import React from "react";
import '../../index.css';

type ContainerAppProps = {
  CounterAppOne: React.LazyExoticComponent<React.ComponentType<{}>>;
  CounterAppTwo: React.LazyExoticComponent<React.ComponentType<{}>>;
};

export const ContainerApp = ({
  CounterAppOne,
  CounterAppTwo,
}: ContainerAppProps) => {
  return (
    <div className="flex bg-amber-50">
      <React.Suspense fallback={"loading"}>
        <div>
          <div className="bg-amber-300">
            APP-1
          </div>
          <CounterAppOne />
        </div>
      </React.Suspense>
      <React.Suspense fallback={"loading"}>
        <div>
          <div className="font-bold">
            APP-2
          </div>
          <CounterAppTwo />
        </div>
      </React.Suspense>
    </div>
  );
};
