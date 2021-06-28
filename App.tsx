import { FunctionComponent, useState } from 'react';
import './style.css';

interface fizzBuzz {
  fb_number: number;
  status: string;
}

interface fiboBuzz {
  fb_index: number;
  fibo_seq: number;
  status: string;
}

let fibArr: Array<fiboBuzz> = [];

let fb_entry: fiboBuzz = {
  fb_index: 0,
  fibo_seq: 0,
  status: "0"
};
fibArr.push(fb_entry);

let fb_entry1: fiboBuzz = {
  fb_index: 1,
  fibo_seq: 1,
  status: "1"
}; 
fibArr.push(fb_entry1);

export const App: FunctionComponent = () => {
  const [fizzBuzzIndex, setFizzBuzzIndex] = useState(3);
  const [currNum, setCurrNum] = useState(3);

  const handleClick = () => {
    setFizzBuzzIndex(fizzBuzzIndex + 1);
  };

  
  const getLabel = (offset: number) => {
    let fbi = offset;
    if (fbi % 3 === 0 && fbi % 5 === 0) {
      return 'Fizz Buzz';
    }
    if (fbi % 3 === 0) {
      return 'Fizz';
    }
    if (fbi % 5 === 0) {
      return 'Buzz';
    }
    return `${fbi}`;
  };


  const fizzBuzzMe = () => {

    // declare the array starting with the first 2 values of the fibonacci sequence
    //let fibonacci = [0,1];
    
    function listFibonacci(num) {
    // starting at array index 1, and push current index + previous index to the array
        for (let i = 1; i < num; i++) {
          let fb_fish = fibArr[i].fibo_seq + fibArr[i - 1].fibo_seq;
          //console.log(i + 2,fb_fish,getLabel(fb_fish));
          let fb_entry: fiboBuzz = {
            fb_index: i + 2,
            fibo_seq: fb_fish,
            status: getLabel(fb_fish)
          };
          fibArr.push(fb_entry);
        }
        //console.log(fibArr)
        
        const listItems = fibArr.map(index => (
          <ul>
            <p>
              {index.fb_index} : {index.status} 6
            </p>
          </ul>
        ));

        return fibArr
        ;
    }
    
    return listFibonacci();



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

        {fizzBuzzMe()}
      </div>
    </>
  );
};
