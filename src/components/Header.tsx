import { Button, Input, Label, Nav } from "reactstrap";
import SortDropdown from "./SortDropdown";

interface Props {
  data: {
    load: () => void;
    wipe: () => void;
  };
  favFilter: {
    value: boolean;
    toggle: () => void;
  };
  setOldestFirst: (val: boolean) => void;
}

function Header({ data, favFilter, setOldestFirst }: Props) {
  return (
    <header>
      <h1>Video App</h1>
      <Nav>
        <Button onClick={data.load}>Load demo videos</Button>
        <Button color="danger" onClick={data.wipe}>
          Delete all videos
        </Button>
        <Label check>
          <Input
            type="checkbox"
            checked={favFilter.value}
            onChange={favFilter.toggle}
          />
          Favorites only
        </Label>
        <SortDropdown setOldestFirst={setOldestFirst} />
      </Nav>
    </header>
  );
}

export default Header;
