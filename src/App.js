import { GoBell, GoCloudDownload, GoDatabase } from "react-icons/go";
import Button from "./Button";

function App() {
  return (
    <div>
      <div>
        <Button secondary rounded outline>
          <GoBell className="mr-1"/>
          2374
        </Button>
      </div>
      <div>
        <Button danger outline>
          <GoCloudDownload />
          111111
        </Button>
      </div>
      <div>
        <Button warning>
          <GoDatabase />
          cool123
        </Button>
      </div>
      <div>
        <Button primary outline>
          3323333
        </Button>
      </div>
      <div>
        <Button primary rounded>
          44444444
        </Button>
      </div>
    </div>
  );
}

export default App;
