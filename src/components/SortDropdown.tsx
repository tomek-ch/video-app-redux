import { useState } from "react";
import {
  Dropdown,
  DropdownMenu,
  DropdownToggle,
  DropdownItem,
} from "reactstrap";

interface Props {
  setOldestFirst: (val: boolean) => void;
}

function SortDropdown({ setOldestFirst }: Props) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>Sort videos</DropdownToggle>
      <DropdownMenu>
        <DropdownItem onClick={() => setOldestFirst(false)}>
          Newest
        </DropdownItem>
        <DropdownItem onClick={() => setOldestFirst(true)}>Oldest</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}

export default SortDropdown;
