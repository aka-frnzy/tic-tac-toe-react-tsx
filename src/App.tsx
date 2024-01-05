import { useState } from "react";
import Block from "./Components/Block";
function App() {
  const [arr, setArr] = useState(Array(9).fill(null));
  const [player, setPlayer] = useState("X");

  const checkWinner = (arr: any[]) => {
    const win = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < win.length; i++) {
      const [a, b, c] = win[i];
      if (arr[a] !== null && arr[a] === arr[b] && arr[a] === arr[c]) {
        return true;
      }
    }
  }

  const handleclick = (i: number) => {

    const tempArr = Array.from(arr);
    if (tempArr[i] !== null) return;
    tempArr[i] = player;
    const win = checkWinner(tempArr);
    if (win) {
      window.alert(`${player} won`);
    }
    setPlayer(player === "X" ? "O" : "X");
    setArr(tempArr);
  }
  return (
    <>
      <div className='board'>
        <div className="row">
          <Block onClick={() => handleclick(0)} value={arr[0]} />
          <Block onClick={() => handleclick(1)} value={arr[1]} />
          <Block onClick={() => handleclick(2)} value={arr[2]} />
        </div>
        <div className="row">
          <Block onClick={() => handleclick(3)} value={arr[3]} />
          <Block onClick={() => handleclick(4)} value={arr[4]} />
          <Block onClick={() => handleclick(5)} value={arr[5]} />
        </div>
        <div className="row">
          <Block onClick={() => handleclick(6)} value={arr[6]} />
          <Block onClick={() => handleclick(7)} value={arr[7]} />
          <Block onClick={() => handleclick(8)} value={arr[8]} />
        </div>
      </div>
    </>
  )
}

export default App
