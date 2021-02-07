import { library } from "@fortawesome/fontawesome-svg-core";
import { faKey } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(faKey);

const Header = () => {
  return (
    <div className="header">
      <FontAwesomeIcon icon="key" color="#5C48D3" size="3x" />
      <h1>React Counter v2</h1>
    </div>
  );
};

export default Header;
