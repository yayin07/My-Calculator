import React, { useState } from "react";
import { FiDelete } from "react-icons/fi";

const Calculator = () => {
  const [input, setInput] = useState("");

  const handleButtonClick = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput("");
  };

  const handleCalculate = () => {
    try {
      const result = eval(input);
      setInput(result.toString());
    } catch (error) {
      setInput("Error");
    }
  };

  const handleSlice = () => {
    setInput(input.slice(0, -1));
  };
  return (
    <div className="flex justify-center py-12">
      <div className="p-6 bg-gray-400  shadow-lg rounded-lg border ">
        <div className="text-center mb-4">My Calculator</div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full p-2 mb-4 text-right border rounded-md bg-gray-200"
        />

        <div className="grid grid-cols-4 gap-4 text-white">
          <button
            className=" p-2 bg-slate-700 rounded-md"
            onClick={() => handleButtonClick("7")}
          >
            7
          </button>
          <button
            className="p-2 bg-slate-700  rounded-md"
            onClick={() => handleButtonClick("8")}
          >
            8
          </button>

          <button
            className="p-2 bg-slate-700  rounded-md"
            onClick={() => handleButtonClick("9")}
          >
            9
          </button>

          <button
            className=" p-2 bg-slate-500  rounded-md flex justify-center items-center "
            onClick={handleSlice}
          >
            <FiDelete />
          </button>

          <button
            className="p-2 bg-slate-700  rounded-md"
            onClick={() => handleButtonClick("4")}
          >
            4
          </button>
          <button
            className="p-2 bg-slate-700  rounded-md"
            onClick={() => handleButtonClick("5")}
          >
            5
          </button>
          <button
            className="p-2 bg-slate-700  rounded-md"
            onClick={() => handleButtonClick("6")}
          >
            6
          </button>
          <button
            className="p-2 bg-yellow-500 rounded-md"
            onClick={() => handleButtonClick("/")}
          >
            ÷
          </button>

          <button
            className="p-2 bg-slate-700 rounded-md"
            onClick={() => handleButtonClick("1")}
          >
            1
          </button>
          <button
            className="p-2 bg-slate-700  rounded-md"
            onClick={() => handleButtonClick("2")}
          >
            2
          </button>
          <button
            className="p-2 bg-slate-700  rounded-md"
            onClick={() => handleButtonClick("3")}
          >
            3
          </button>
          <button
            className="p-2 bg-yellow-500 rounded-md"
            onClick={() => handleButtonClick("*")}
          >
            ×
          </button>
          <button
            className="p-2 bg-slate-700 rounded-md"
            onClick={() => handleButtonClick(".")}
          >
            .
          </button>
          <button
            className="col-span-2 p-2 bg-slate-700  rounded-md"
            onClick={() => handleButtonClick("0")}
          >
            0
          </button>

          <button
            className="p-2 bg-yellow-500 rounded-md"
            onClick={() => handleButtonClick("-")}
          >
            -
          </button>

          <button
            className="col-span-3 p-2 bg-slate-500  rounded-md"
            onClick={handleCalculate}
          >
            =
          </button>
          <button
            className="p-2 bg-yellow-500 rounded-md"
            onClick={() => handleButtonClick("+")}
          >
            +
          </button>
        </div>

        <div className="flex flex-row text-white">
          <button
            className="mt-4 p-2 bg-slate-500 rounded-md"
            onClick={handleClear}
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
