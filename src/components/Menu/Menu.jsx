import { Link } from "react-router-dom";
import './menu.styles.css';
const Menu = () => {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/list">Lista</Link>
      </li>
    </ul>
  );
};

export default Menu;
                                                                                                                                                                                                                                                                                                                                                                                                                                                  