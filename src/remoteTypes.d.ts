/* eslint-disable @typescript-eslint/no-explicit-any */
///<reference types="react" />

declare module "app1/CounterAppOne" {
  const CounterAppOne: React.ComponentType;

  export default CounterAppOne;
}

declare module "app2/CounterAppTwo" {
  const CounterAppTwo: React.ComponentType;

  export default CounterAppTwo;
}

declare module "leftSideBar/leftSideBar" {
  const { mount }: any;

  export { mount };
}

declare module "rightSidebar/rightSidebar" {
  const { mount }: any;

  export { mount };
}
