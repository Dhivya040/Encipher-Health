import ConditionalRender from "./ConditionalRender";
import ToggleMessage from "./ToggleMessage";
import LoginToggle from "./LoginToggle";
import FruitList from "./FruitList";
import StudentList from "./StudentList";
import ControlledInput from "./ControlledInput";
import FormValidation from "./FormValidation";
import BootstrapButton from "./BootstrapButton";
import TailwindCard from "./TailwindCard";

function App() {
  return (
    <div>
      <ConditionalRender />
      <ToggleMessage />
      <LoginToggle />
      <FruitList />
      <StudentList />
      <ControlledInput />
      <FormValidation />
      <BootstrapButton />
      <TailwindCard />
    </div>
  );
}

export default App;