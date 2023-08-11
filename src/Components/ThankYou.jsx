import { useLocation } from "react-router-dom";
import { useMediaQuery } from "@mui/material";
import Navbar from "./Navbar";

export default function ThankYou() {
  const location = useLocation();
  const isMobile = useMediaQuery("(max-width: 768px)");
  const orderDetails = location.state?.orderDetails || {};
  const selectedProduct = location.state?.selectedProduct || null;
  const { selectedSize } = location.state;


  return (
    <div>
      <Navbar />
      <div
        style={{ display: "flex", flexDirection: isMobile ? "column" : "row" }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "50px",
          }}
        >
          <h2>Thank You for Your Order!</h2>
          <h4>Your order will be arrived within 2 days</h4>
          <p>Your Order Details:</p>
          <p>Your Order Number: #{orderDetails.orderNumber}</p>
          <p>Name: {orderDetails.firstName}</p>
          <p>Address: {orderDetails.address}, {orderDetails.city}, {orderDetails.country}</p>
          {/* ... display other order details ... */}
        </div>
        <div
          style={{
            marginLeft: !isMobile && "50px",
            marginTop: isMobile && "50px",
          }}
        >
          {selectedProduct && selectedSize && (
            <div style={{ textAlign: "center" }}>
              <h3>Order Summary</h3>
              <img
                src={selectedProduct.imageUrl}
                style={{ width: "280px" }}
                alt=""
              />
              <p>
                Product: <strong>{selectedProduct.name}</strong>, Size:{" "}
                <strong>{selectedSize}</strong>
              </p>
              <p>
                Price: <strong>${selectedProduct.price}</strong>
              </p>
              {/* ... (other product details) */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
