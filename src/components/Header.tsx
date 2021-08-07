import { Button, Nav } from "reactstrap";

interface Props {
  loadDemoData: () => void;
  wipeData: () => void;
}

function Header({ loadDemoData, wipeData }: Props) {
  return (
    <header>
      <h1>Video App</h1>
      <Nav>
        <Button onClick={loadDemoData}>Load demo videos</Button>
        <Button color="danger" onClick={wipeData}>
          Delete all videos
        </Button>
      </Nav>
    </header>
  );
}

export default Header;
