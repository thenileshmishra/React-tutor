import { createContext } from "react";
import ComA from "./component/ComA";

const Text = createContext(); //object
const About = createContext();
const Temp = createContext();

function App() {
  const name = "Im REact Developer";
  const about = "Im from Bihar";
  const sdfas = "temporary nitish";
  return (
    <Text.Provider value={name}>
      <About.Provider value={about}>
        <Temp.Provider value={sdfas}>
          <ComA />
        </Temp.Provider>
      </About.Provider>
    </Text.Provider>
  );
}

export default App;

export { Text, About, Temp };
