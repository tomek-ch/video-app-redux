import Nav from "./Nav";

interface Props {
  loadDemoData: () => void;
}

function Header({ loadDemoData }: Props) {
  return (
    <header>
      <h1>Video App</h1>
      <Nav {...{ loadDemoData }} />
    </header>
  );
}

export default Header;
