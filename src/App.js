import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { H2 } from "./components/H2";
import { Image } from "./components/Image";

function App() {
  

  return (
    <>
      <H2 label="P2 INDIVIDUAL ACTIVITY" />
      <hr />
      <div className="container">
        <div className="grid">
          <Image src="/cite.png" width={100} height={100} variant="circular" />
          <Image src="/cite.png" width={100} height={100} variant="circular" />
          <Image src="https://i.pinimg.com/564x/45/8d/22/458d2284f3ab82c4195be8664fafc673.jpg" width={200} height={200} variant="rounded" />
          <Image src="https://i.pinimg.com/564x/e4/9a/1f/e49a1f1ab4ad9a53c7e968ae21d25893.jpg" width={200} height={200} variant="rounded" />
        </div>
      </div>
      <div className="container">
        <div className="grid input">
          <Input variant="input1" placeholder="Textfield 1"/>
          <Input variant="input1" placeholder="Textfield 2"/>
          <Input variant="input2" placeholder="Textfield 3" />
          <Input variant="input2" placeholder="Textfield 4"/>
        </div>
      </div>
      <Button label="Cancel" variant="button1"/>
      <Button label="Submit" variant="button2"/>
      
    </>
  );
}

export default App;


