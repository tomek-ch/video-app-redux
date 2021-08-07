import { Button, Input, Label, Nav } from "reactstrap";

interface Props {
  data: {
    load: () => void;
    wipe: () => void;
  };
  favFilter: {
    value: boolean;
    toggle: () => void;
  };
}

function Header({ data, favFilter }: Props) {
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
      </Nav>
    </header>
  );
}

export default Header;
