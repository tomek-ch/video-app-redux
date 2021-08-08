import { Button, Input, Label, Nav } from "reactstrap";
import { useVideosContext } from "../context/VideosContext";
import SortDropdown from "./SortDropdown";

function Header() {
  const { loadDemoData, wipeData, favoritesOnly, toggleFavFilter } =
    useVideosContext();

  return (
    <header>
      <h1>Video App</h1>
      <Nav>
        <Button onClick={loadDemoData}>Load demo videos</Button>
        <Button color="danger" onClick={wipeData}>
          Delete all videos
        </Button>
        <Label check>
          <Input
            type="checkbox"
            checked={favoritesOnly}
            onChange={toggleFavFilter}
          />
          Favorites only
        </Label>
        <SortDropdown />
      </Nav>
    </header>
  );
}

export default Header;
