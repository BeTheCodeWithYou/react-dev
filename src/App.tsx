import { useState } from "react";
import Alert from "./components/Alert";
import Buttons from "./components/Buttons";
import ListGroup from "./components/ListGroup";

function App() {
  let items = ["India", "UK", "Japan", "United States", "France"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const [alertVisibility, setAlertVisibility] = useState(false);
  return (
    <div>
      <ListGroup
        items={items}
        title="Countries"
        onSelectItem={handleSelectItem}
      ></ListGroup>
      <Buttons color="success" onClick={() => setAlertVisibility(true)}>
        my button here
      </Buttons>
      {alertVisibility && <Alert onClose={()=> setAlertVisibility(false)}>Alert me</Alert>}
    </div>
  );
}

export default App;
