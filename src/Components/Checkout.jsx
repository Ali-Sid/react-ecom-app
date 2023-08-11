import {
  Box,
  Typography,
  TextField,
  FormControl,
  RadioGroup,
  Radio,
  Button,
  FormControlLabel,
  useMediaQuery,
} from "@mui/material";
import Navbar from "./Navbar";
import { useNavigate, useLocation } from "react-router-dom";

export default function Checkout() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const navigate = useNavigate();
  const location = useLocation();
  const orderDetails = location.state?.orderDetails || {}; // Get order details from location state
  const selectedProduct = location.state?.selectedProduct || null;

  const { selectedSize } = location.state;



  const handlePlaceOrder = (event) => {
    event.preventDefault();

    // Generate a random number between 10000 and 99999
    const randomNumber =
      Math.floor(Math.random() * (99999 - 10000 + 1)) + 10000;

    // Combine the random number and timestamp to create the order number
    const orderNumber = randomNumber.toString();

    // Create a new FormData instance
    const formData = new FormData();

    // Get the input values from the form
    const formInputs = event.target.querySelectorAll("input");
    formInputs.forEach((input) => {
      console.log("Input Name:", input.name, "Input Value:", input.value);
      formData.append(input.name, input.value);
    });

    // Populate order details dynamically from formData
    formData.forEach((value, key) => {
      orderDetails[key] = value;
    });

    console.log("Order Details:", orderDetails); // Debugging output

    // Add the order number to orderDetails
    orderDetails.orderNumber = orderNumber;


    // Navigate to Thank You page with order details
    navigate("/thank-you", {
      state: {
        orderDetails: orderDetails,
        selectedProduct: selectedProduct, selectedSize: selectedSize
      },
    });
  };

  return (
    <div>
      <Navbar />
      <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", margin: isMobile ? "50px" : "100px" }}>
        <div style={{ marginTop: "20px" }}>
          <form onSubmit={handlePlaceOrder}>
            <Box>
              <Typography variant="h5">Billing Details</Typography>
              <TextField
                margin="normal"
                required
                fullWidth
                label="First Name"
                name="firstName"
                type="text"
                autoFocus
              />
              <TextField
                margin="normal"
                fullWidth
                label="Last Name"
                name="lastName"
                type="text"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                label="Phone Number"
                name="number"
                type="text"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                label="Address"
                name="address"
                type="text"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                label="City"
                name="city"
                type="text"
                autoFocus
              />
              <TextField
                margin="normal"
                fullWidth
                label="State/Province"
                name="state"
                type="text"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                label="Country"
                name="country"
                type="text"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                label="Postcode"
                name="postcode"
                type="text"
                autoFocus
              />
            </Box>
            <Box sx={{ marginTop: "50px" }}>
              <Typography variant="h5">Payment Method</Typography>
              <FormControl sx={{ mt: "20px" }}>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="female"
                  name="radio-buttons-group"
                >
                  <FormControlLabel
                    value="cash"
                    control={<Radio />}
                    label="Cash On Delivery"
                  />
                  {/* <FormControlLabel
                    value="paypal"
                    control={<Radio />}
                    label={
                      <img
                        src="src/assets/580b57fcd9996e24bc43c530.png"
                        alt="paypal"
                        style={{ width: "80px", marginTop: "5px" }}
                      />
                    }
                  />

                  <FormControlLabel
                    value="card"
                    control={<Radio />}
                    label={
                      <img
                        src="src/assets/visa-logo-png-2026.png"
                        alt="card"
                        style={{ width: "80px", marginTop: "5px" }}
                      />
                    }
                  /> */}
                </RadioGroup>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    marginTop: "20px",
                    backgroundColor: "#0a0a0a",
                    color: "#fff",
                  }}
                >
                  Place Order
                </Button>
              </FormControl>
            </Box>
          </form>
        </div>
        <div style={{marginLeft: !isMobile && "50px", marginTop: isMobile && "50px"}}>
          {" "}
          {selectedProduct && (
            <div style={{textAlign: "center"}}>
              <h3>Order Summary</h3>
              <img src={selectedProduct.imageUrl} style={{width: "280px"}} alt="" />
              <p>Product: <strong>{selectedProduct.name}</strong>, Size: <strong>{selectedSize}</strong></p>
              <p>Price: <strong>${selectedProduct.price}</strong></p>
              {/* ... (other product details) */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
