import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { Button } from "@mui/material";

function Cart() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/catalogue");
  };

  const selectedProduct = location.state?.selectedProduct; // Get selected product from location state

  return (
    <div>
      <Navbar />
      <div style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
         {selectedProduct ? (
          <>
            <p>Your shopping cart:</p>
            <p>Product: {selectedProduct.name}</p>
            <p>Price: ${selectedProduct.price}</p>
            {/* ... (other product details) */}
          </>
        ) : (
          <p>Your shopping cart is empty!</p>
        )}
        <Button onClick={handleButtonClick}>Continue Shopping</Button>
      </div>
    </div>
  );
}

export default Cart;
