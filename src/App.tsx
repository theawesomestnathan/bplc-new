import Toggle from "./components/Toggle";
import Introduction from "./components/Introduction";
import About from "./components/About";
import Reviews from "./components/Reviews";
import Contacts from "./components/Contacts";

function App() {
  history.scrollRestoration = "manual";

  return (
    <div>
      <Toggle/>
      <Introduction/>
      <About/>
      <Reviews/>
      <Contacts/>
    </div>
  )
}

export default App
