import * as React from "react"

type HelloWorldProps = {
  greeting: string
};

const HelloWorld: React.FC<HelloWorldProps> = (props) => {
  return (
    <>
      Greeting {props.greeting}
    </>
  );
};

export default HelloWorld
