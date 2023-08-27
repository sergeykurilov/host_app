import React from "react";


type ContainerAppProps = {
  CounterAppOne: React.LazyExoticComponent<React.ComponentType<{}>>;
};

export const ContainerApp = ({
  CounterAppOne,
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
    </div>
  );
};
