import { Button, Nav } from "reactstrap";

interface Props {
  loadDemoData: () => void;
}

function MyNav({ loadDemoData }: Props) {
  return (
    <Nav>
      <Button onClick={loadDemoData}>Load demo videos</Button>
    </Nav>
  );
}

export default MyNav;
