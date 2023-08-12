import {
  IconButton,
  Badge,
  Popover,
  Box,
  Typography,
  Link as MuiLink,
  Button,
} from "@mui/material";
import { ShoppingBasketOutlined, Delete } from "@mui/icons-material";
import { Link } from "@mui/material";
import { useState, useEffect } from "react";
import HamburgerMenu from "./Hamburger";
import { useNavigate, Link as NavLink } from "react-router-dom";
import { PropTypes } from "prop-types";


function Navbar({ cartCount }) {
  const [isMobile, setIsMobile] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // const [showCartPopup, setShowCartPopup] = useState(false);

  // const handleCartIconClick = () => {
  //   setShowCartPopup(!showCartPopup);
  // };

  const navigate = useNavigate()

  const handleCartIconClick = () => {
    navigate("/cart")
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // const handleCartIconClick = () => {
  //   setIsPopupOpen(!isPopupOpen); // Toggle the popup state
  // };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "60px",
        backgroundColor: "#f1f1f1",
        paddingLeft: "20px",
        paddingRight: "20px",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        fontSize: "1.3rem",
        color: "#0a0a0a",
        zIndex: "100",
      }}
    >
      <nav style={{ display: "flex", alignItems: "center" }}>
        <Link href="/" style={{ marginRight: "30px", color: "#0a0a0a" }}>
          Ecommerce App
        </Link>

        {/* Use a separate div to group the menu items */}
        <div>
          {!isMobile && (
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "50px",
                marginLeft: "30vw",
              }}
            >
              <Link href="/" style={{ color: "#0a0a0a" }}>
                Home
              </Link>
              <NavLink to="/catalogue" style={{ color: "#0a0a0a", textDecoration: "underline" }}>
                Shop
              </NavLink>
            </div>
          )}
        </div>
      </nav>

      {/* Cart icon */}
      <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        <IconButton
          component={Link}
          to="/cart"
          color="inherit"
          onClick={handleCartIconClick}
        >
          <Badge badgeContent={cartCount} color="primary">
            <ShoppingBasketOutlined />
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </Badge>
        </IconButton>
        {/* {showCartPopup && <CartPopup cartItems={[]} />}{" "} */}
        {/* Pass the cart items as props */}
        {!isMobile ? (
          <div>
            <NavLink to="/login" style={{ color: "#0a0a0a" }}>
              Logout
            </NavLink>
          </div>
        ) : (
          <div>
            <HamburgerMenu />
          </div>
        )}
        {/* Popover */}
        <Popover
          open={isPopupOpen} // Set the open state of the popover
          onClose={() => setIsPopupOpen(false)} // Close the popover when clicked outside
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          style={{ top: "60px" }}
        >
          <Box p={2} width={300}>
            <Typography style={{ textAlign: "center" }} variant="h6">
              Shopping Bag
            </Typography>
            <Typography style={{ display: "flex", alignItems: "center" }}>
              {" "}
              <Delete style={{ cursor: "pointer", marginRight: "5px" }} />
            </Typography>
            <Box mt={2} display="flex" justifyContent="space-between">
              <MuiLink component={Link} to="/catalogue">
                Continue Shopping
              </MuiLink>
              <Button variant="contained" color="primary">
                Checkout
              </Button>
            </Box>
          </Box>
        </Popover>
      </div>
    </div>
  );
}

Navbar.propTypes = {
  cartCount: PropTypes.number,
};

export default Navbar;
