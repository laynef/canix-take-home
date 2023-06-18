import * as React from "react"

type HelloWorldProps = {
  greeting: string
};

const HelloWorld: React.FC<HelloWorldProps> = (props) => {
  return (
    <h1 className="text-center w-100 font-weight-light">
      Hello, {props.greeting}!
    </h1>
  );
};

export default HelloWorld
