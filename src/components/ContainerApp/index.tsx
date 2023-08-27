import React from "react";


type ContainerAppProps = {
  CounterAppOne: React.LazyExoticComponent<React.ComponentType<{}>>;
  CounterAppTwo: React.LazyExoticComponent<React.ComponentType<{}>>;
};

export const ContainerApp = ({
  CounterAppOne,
  CounterAppTwo,
}: ContainerAppProps) => {
  return (
    <div>
      <React.Suspense fallback={"loading"}>
        <div>
          <div >
            APP-1
          </div>
          <CounterAppOne />
        </div>
      </React.Suspense>
      <React.Suspense fallback={"loading"}>
        <div>
          <div >
            APP-2
          </div>
          <CounterAppTwo />
        </div>
      </React.Suspense>
    </div>
  );
};
