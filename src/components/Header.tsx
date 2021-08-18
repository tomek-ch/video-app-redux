import { useDispatch } from "react-redux";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Input,
  Label,
} from "reactstrap";
import useIsGridSelector from "../hooks/useIsGridSelector";
import useFavFilterSelector from "../hooks/useFavFilterSelector";
import useSortByOldestSelector from "../hooks/useSortByOldestSelector";
import useToggle from "../hooks/useToggle";
import { toggleFavFilter } from "../redux/favFilter";
import { toggleIsGrid } from "../redux/isGrid";
import { toggleSortByOldest } from "../redux/sortByOldest";
import { loadVideos, wipeData } from "../redux/videos";
import demoVideos from "../utils/demoVideos";

function Header() {
  const [dropdownOpen, toggleDropdown] = useToggle();
  const dispatch = useDispatch();

  const favFilter = useFavFilterSelector();
  const sortByOldest = useSortByOldestSelector();
  const isGrid = useIsGridSelector();

  const handleChange = (action: object) => {
    dispatch(action);
    toggleDropdown();
  };

  return (
    <header className="d-flex align-items-center justify-content-between my-3 top">
      <h1>Video App</h1>
      <nav>
        <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
          <DropdownToggle caret className="ms-auto">
            Menu
          </DropdownToggle>
          <DropdownMenu className="mt-1" right>
            <DropdownItem onClick={() => dispatch(wipeData())}>
              Delete all videos
            </DropdownItem>
            <DropdownItem onClick={() => dispatch(loadVideos(demoVideos))}>
              Load demo videos
            </DropdownItem>
            <DropdownItem divider />
            <Label check className="dropdown-item">
              <Input
                type="checkbox"
                checked={favFilter}
                onChange={() => handleChange(toggleFavFilter())}
                className="me-1"
              />
              Favorites only
            </Label>
            <Label check className="dropdown-item">
              <Input
                type="checkbox"
                checked={sortByOldest}
                onChange={() => handleChange(toggleSortByOldest())}
                className="me-1"
              />
              Oldest first
            </Label>
            <Label check className="dropdown-item">
              <Input
                type="checkbox"
                checked={isGrid}
                onChange={() => handleChange(toggleIsGrid())}
                className="me-1"
              />
              Grid view
            </Label>
          </DropdownMenu>
        </Dropdown>
      </nav>
    </header>
  );
}

export default Header;
