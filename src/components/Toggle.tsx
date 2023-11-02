import Fa from "solid-fa";
import { 
  faSun,
  faMoon
} from "@fortawesome/free-solid-svg-icons"

import { createSignal } from "solid-js";

function Toggle() {
  const [mode, setMode] = createSignal("dark");

  function toggleMode() {
    setMode(mode() === "light" ? "dark" : "light");
    document.documentElement.setAttribute("data-theme", mode());
  }

  return (
    <button 
      onClick={toggleMode}
      class="p-2 fixed">
      {mode() === "light" ? (
        <Fa icon={faMoon} class="text-yellow-400"/>
      ) : (
        <Fa icon={faSun} class="text-yellow-500"/>
      )}
    </button>
  )
}

export default Toggle;