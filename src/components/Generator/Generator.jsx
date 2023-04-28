import { useEffect, useState } from "react";
import Color from "./Color";
import "./Generator.css";
import { Link, useNavigate } from "react-router-dom";

const Generator = () => {
  const [state, setState] = useState({
    colorsNum: 5,
    colors: [],
  });
  for (let i = 0; i < state.colorsNum; i += 1) {
    state.colors.push({ hexCode: generateColor() });
  }

  function generateColor() {
    return "#" + Math.random().toString(16).slice(-6);
  }

  function updateColor(index) {
    let colors = state.colors.slice();
    const currentColor = generateColor();
    colors[index].hexCode = currentColor;
    setState({
      colors: colors,
    });
  }
  const user = null;
  // const navigate = useNavigate();
  // useEffect(() => {
  //   if (!user) {
  //     navigate('/login')
  //   }
  // }, []);
  return (
    <div className="color-container">
      {state.colors.map((color, index) => (
        <Color
          key={`color-${index}`}
          index={index}
          update={updateColor}
          hexCode={color.hexCode}
        ></Color>
      ))}
      <form action="">
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          className="border border-black"
        ></textarea>
        <button>add your comment </button>
      </form>
    </div>
  );
};

export default Generator;
