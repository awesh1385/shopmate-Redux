import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/logo.png";
import "../components/Header.css";
import { useSelector } from "react-redux";
import ShopingBag from "../assets/pngwing.com.png";

export const Header = () => {
  const itemInCart = useSelector((state) => state.cartState.cartList.length);
  return (
    <header>
      <Link to="/" className="logo">
        <img src={Logo} alt="shoping logo" />
        <span>REDUX Cart</span>
      </Link>
      <nav className="navigation">
        <NavLink to="/" className="link">
          Home
        </NavLink>
        <NavLink to="/cart" className="link">
          Cart
        </NavLink>
      </nav>
      <Link to="/cart" className="items">
        <span> <img src={ShopingBag} alt="cartLogo"/> :{itemInCart}</span>
      </Link>
    </header>
  );
};
