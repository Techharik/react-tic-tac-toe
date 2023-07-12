import { useState } from "react";
import Card from "./Card";
const itemArray = new Array(9).fill("empty");

const Gamecontainer = () => {
  const [value, setValue] = useState(false);
  const [winMessage, setWinMessage] = useState("");

  const resetFun = () => {
    setValue(false);
    setWinMessage("");
    itemArray.fill("empty", 0, 9);
  };

  const handleClick = (index) => {
    if (itemArray[index] === "empty") {
      itemArray[index] = value ? "cross" : "circle";
      setValue(!value);
    } else {
      alert("Aready filled");
    }

    if (
      itemArray[0] === itemArray[1] &&
      itemArray[0] === itemArray[2] &&
      itemArray[0] !== "empty"
    ) {
      setWinMessage(`${itemArray[0]} won`);
    } else if (
      itemArray[3] !== "empty" &&
      itemArray[3] === itemArray[4] &&
      itemArray[4] === itemArray[5]
    ) {
      setWinMessage(`${itemArray[3]} won`);
    } else if (
      itemArray[6] !== "empty" &&
      itemArray[6] === itemArray[7] &&
      itemArray[7] === itemArray[8]
    ) {
      setWinMessage(`${itemArray[6]} won`);
    } else if (
      itemArray[0] !== "empty" &&
      itemArray[0] === itemArray[3] &&
      itemArray[3] === itemArray[6]
    ) {
      setWinMessage(`${itemArray[0]} won`);
    } else if (
      itemArray[1] !== "empty" &&
      itemArray[1] === itemArray[4] &&
      itemArray[4] === itemArray[7]
    ) {
      setWinMessage(`${itemArray[1]} won`);
    } else if (
      itemArray[2] !== "empty" &&
      itemArray[2] === itemArray[5] &&
      itemArray[5] === itemArray[8]
    ) {
      setWinMessage(`${itemArray[2]} won`);
    } else if (
      itemArray[0] !== "empty" &&
      itemArray[0] === itemArray[4] &&
      itemArray[4] === itemArray[8]
    ) {
      setWinMessage(`${itemArray[0]} won`);
    } else if (
      itemArray[2] !== "empty" &&
      itemArray[2] === itemArray[4] &&
      itemArray[4] === itemArray[6]
    ) {
      setWinMessage(`${itemArray[0]} won`);
    }

    if (winMessage != "") {
      alert(winMessage);
      resetFun();
    }
  };

  return (
    <div className=" p-10 grid grid-cols-3 ">
      {itemArray.map((item, index) => {
        return (
          <>
            <div
              onClick={() => handleClick(index)}
              className="m-1 border-2 w-28  bg-green-100 p-5 text-center "
            >
              <Card name={item} key={index} className="" />
            </div>
          </>
        );
      })}

      <button
        onClick={() => resetFun()}
        class="group relative h-12  w-48 overflow-hidden rounded-lg bg-white text-lg shadow"
      >
        <div class="absolute inset-0 w-3 bg-amber-400 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
        <span class="relative text-black group-hover:text-white">reset</span>
      </button>
    </div>
  );
};

export default Gamecontainer;
