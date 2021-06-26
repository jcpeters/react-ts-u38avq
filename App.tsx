import { FunctionComponent, useState } from "react";
import "./style.css";

interface fizzBuzz {
  fb_number: number;
  status: string;
}

export const App: FunctionComponent = () => {
  const [fizzBuzzIndex, setFizzBuzzIndex] = useState(3);
  const [currNum, setCurrNum] = useState(3);

  const handleClick = () => {
    setFizzBuzzIndex(fizzBuzzIndex + 1);
  };

  const getLabel = () => {
    if (fizzBuzzIndex % 3 === 0 && fizzBuzzIndex % 5 === 0) {
      return "Fizz Buzz";
    }
    if (fizzBuzzIndex % 3 === 0) {
      return "Fizz";
    }
    if (fizzBuzzIndex % 5 === 0) {
      return "Buzz";
    }
    return `${fizzBuzzIndex}`;
  };

  const fizzBuzzMe = () => {
    let numArr: Array<fizzBuzz> = [];

    for (let i = 0; i < 10; i++) {
      let bar = getLabel();
      let poop: fizzBuzz = {
        fb_number: fizzBuzzIndex,
        status: bar
      };
      numArr.push(poop);
      console.log(poop);
    }
    const listItems = numArr.map((index) => (
      <li>
        {index.fb_number} {index.status}
      </li>
    ));
    return <ul>{listItems}</ul>;
  };

  return (
    <>
      <div>
        <button
          data-testid="Button1"
          onClick={() => {
            handleClick();
          }}
        >
          Index: {fizzBuzzIndex}
        </button>
        <button
          data-testid="Button2"
          onClick={() => {
            handleClick();
          }}
        >
          Result: {getLabel()}
        </button>
        {fizzBuzzMe()} {fizzBuzzIndex}
      </div>
    </>
  );
};
