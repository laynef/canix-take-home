import * as React from "react"

type HelloWorldProps = {
  greeting: string
};

const HelloWorld: React.FC<HelloWorldProps> = (props) => {
  return (
    <>
      Hello, {props.greeting}!
    </>
  );
};

export default HelloWorld
