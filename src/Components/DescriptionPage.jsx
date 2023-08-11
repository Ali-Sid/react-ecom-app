import { useParams, Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import { Delete } from "@mui/icons-material";
import {
  Button,
  Popover,
  Box,
  Typography,
  Link as MuiLink,
} from "@mui/material";
import products from "./ProductsComponents/ProductList";
import { PropTypes } from "prop-types";

const DescriptionPage = () => {
  const { productId } = useParams();
  const [isMobile, setIsMobile] = useState(false);

  // Use state to keep track of the selected size
  const [selectedSize, setSelectedSize] = useState(null);

  // State to manage the popup visibility
  const [popupVisible, setPopupVisible] = useState(false);

  const [cartCount, setCartCount] = useState(0);

  // Function to handle "Add to Cart" button click
  const handleAddToCart = () => {
    // Update the cartCount using setCartCount
    setPopupVisible(true);
    setCartCount((prevCount) => prevCount + 1);
    // setSelectedProduct(product); // Save the selected product in state
    
  };

  const handleRemoveItem = () => {
    // to remove the item
    setCartCount((prevCount) => prevCount - 1);
    handleClosePopup();
  };

  // Function to close the popup
  const handleClosePopup = () => {
    setPopupVisible(false);
  };

  const navigate = useNavigate();

  const handleCheckout = () => {

    navigate("/checkout", {
      state: { selectedProduct: product, selectedSize: selectedSize },
    });
    
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  };

  // Function to handle button click
  const handleButtonClick = (size) => {
    setSelectedSize(size);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Check if products is an array and not empty
  if (!Array.isArray(products) || products.length === 0) {
    return <p>Product Not Found</p>;
  }

  const product = products.find((p) => p.id === parseInt(productId));

  if (!product) {
    // Handle the case when product is null or undefined
    return (
      <>
        <Navbar />
        <p>Product Not Found</p>
      </>
    );
  }

  const updateCartCount = (count) => {
    setCartCount(count);
  };

  return (
    <>
      <Navbar
        cartCount={cartCount}
        updateCartCount={updateCartCount}
        setPopupVisible={setPopupVisible}
        product={product}
      />
      <div
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          margin: "20px",
        }}
      >
        <div style={{ padding: "20px", marginTop: "20px" }}>
          <img
            style={{ width: "100%", height: "auto" }}
            src={product.imageUrl}
            alt={product.name}
          />
        </div>
        <div style={{ marginTop: "20px" }}>
          <h2>Product Description</h2>
          <h3>{product.name}</h3>
          <p>
            Price: <strong>${product.price}</strong>
          </p>
          <p>Category: {product.category}</p>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <h5 style={{ marginRight: "10px" }}>Select Size</h5>
            {["S", "M", "L", "XL"].map((size) => (
              <Button
                key={size}
                onClick={() => handleButtonClick(size)}
                variant="outlined"
                size="medium"
                sx={{ minWidth: "40px" }}
                style={{
                  backgroundColor:
                    selectedSize === size ? "#0a0a0a" : "#f1f1f1",
                  color: selectedSize === size ? "#fff" : "#0a0a0a",
                  borderColor: "#0a0a0a",
                  marginRight: "5px",
                }}
              >
                {size}
              </Button>
            ))}
          </div>
          {/* Note:
In this code, each button's onClick event handler updates the selected size in the state (selectedSize). 
The styles of the buttons are then adjusted based on whether the button's size matches the selected size. 
This way, only one button will have a black background at a time, and selecting one button will deselect the previously selected button.
*/}
          <Button
            variant="outlined"
            style={{ color: "#0a0a0a", borderColor: "#0a0a0a" }}
            onClick={handleAddToCart}
          >
            Add to Cart
          </Button>
        </div>
        {/* Popup */}
        <Popover
          open={popupVisible}
          onClose={handleClosePopup}
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
            <Typography variant="h6">Product Added to Cart</Typography>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <img
                src={product.imageUrl}
                style={{ width: "50px" }}
                alt="product"
              />
              <Typography style={{ display: "flex", alignItems: "center", marginLeft: "20px" }}>
                {" "}
                {product.name} ${product.price}
                <Delete
                  onClick={handleRemoveItem}
                  style={{ cursor: "pointer", marginRight: "5px", marginLeft: "20px" }}
                />
              </Typography>
            </div>
            <Typography style={{ marginTop: "10px" }}>
              Selected Size: {selectedSize}
            </Typography>
            <Box
              mt={2}
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <MuiLink component={Link} to="/catalogue">
                Continue Shopping
              </MuiLink>
              <Button
                variant="contained"
                color="primary"
                onClick={handleCheckout}
              >
                Checkout
              </Button>
            </Box>
          </Box>
        </Popover>
      </div>
    </>
  );
};

DescriptionPage.propTypes = {
  cartCount: PropTypes.number.isRequired,
  setCartCount: PropTypes.func.isRequired,
};

export default DescriptionPage;
