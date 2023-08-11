import { Grid } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { EastOutlined } from "@mui/icons-material";
// import ProductPage from "./ProductsComponents/ProductPage";
import ProductCard from "./ProductsComponents/ProductCard";
import { PropTypes } from "prop-types";

function Home({cartCount}) {
  const navigate = useNavigate()

  const products = [
    {
      id: 1,
      imageUrl: "https://res.cloudinary.com/dr1pmtefx/image/upload/f_auto,q_auto/t-shirt_black_logo_front_1_ezpnfr",
      name: "Black T-Shirt",
      price: 19.99,
    },
    {
      id: 4,
      imageUrl: "https://res.cloudinary.com/dr1pmtefx/image/upload/f_auto,q_auto/OIP_meeqih",
      name: "Black Hoodie",
      price: 24.99,
    },
    {
      id: 7,
      imageUrl: "https://res.cloudinary.com/dr1pmtefx/image/upload/f_auto,q_auto/1391213369_fvjiz0",
      name: "Dual-Tone Runners",
      price: 12.99,
    },
    {
      id: 10,
      imageUrl: "https://res.cloudinary.com/dr1pmtefx/image/upload/f_auto,q_auto/bf051_g2_lbwnnq",
      name: "Travel Messenger Bag",
      price: 29.99,
    },
  ];


  return (
    <>
      <Navbar cartCount={cartCount}/>
      <div>
        <div style={{ width: "100vw", height: "100vh", paddingTop: "60px" }}>
          <img src="https://res.cloudinary.com/dr1pmtefx/image/upload/f_auto,q_auto/img1_sttb5x" alt="" />
          <div className="overlay">
            <h2>Welcome to our website</h2>
            <p>Discover amazing products and shop now!</p>
            <button onClick={() => navigate("/catalogue")}>Shop Now</button>
          </div>
        </div>
        <div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "80px",
            }}
          >
            <p style={{ color: "grey" }}>Latest Products</p>
            <p style={{ fontSize: "1.5rem", textAlign: "center" }}>
              Our newest styles are here to help you look your best.
            </p>
            <Link
            to="/catalogue"
              style={{
                fontSize: "1.6rem",
                color: "#0a0a0a",
                paddingTop: "20px",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: "10px",
                transition: "margin-left 0.2s ease-in-out",
              }}
              onMouseEnter={(e) => {
                e.target.style.marginLeft = "20px"; // Move the arrow towards the right on hover
              }}
              onMouseLeave={(e) => {
                e.target.style.marginLeft = "0"; // Reset the arrow position on hover out
              }}
              onClick={() => window.scrollTo(0, 0)} // So that it moves to the top of the page, by default it was displaying the bottom of the catalogue page when navigated
            >
              Explore Products <EastOutlined />
            </Link>
          </div>
          <div>
          <div style={{margin: "100px 20px"}}>
      <Grid container spacing={2} style={{justifyContent: "center"}}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            productId={product.id}
            imageUrl={product.imageUrl}
            name={product.name}
            price={product.price}
          />
        ))}
      </Grid>
    </div>
          </div>
        </div>
        <div style={{ height: "100vh", position: "relative" }}>
          <img
            src="https://res.cloudinary.com/dr1pmtefx/image/upload/f_auto,q_auto/vtehso6qne6xasnyrsv1"
            alt=""
            style={{ objectFit: "cover" }}
          />
          <div
            className="overlay"
            style={{
              position: "absolute",
              top: "50%",
              left: "60%",
              transform: "translate(-50%, -50%)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              color: "#0a0a0a",
              maxWidth: "80%", // Adjust the maximum width for mobile view
            }}
          >
            <h2>Discover New Arrivals</h2>
            <p>Explore the latest collection for this season.</p>
            <Link
              to="/catalogue"
              style={{
                fontSize: "1.6rem",
                color: "#0a0a0a",
                paddingTop: "20px",
                transition: "margin-left 0.2s ease-in-out",
              }}
              onMouseEnter={(e) => {
                e.target.style.marginLeft = "20px"; // Move the arrow towards the right on hover
              }}
              onMouseLeave={(e) => {
                e.target.style.marginLeft = "0"; // Reset the arrow position on hover out
              }}
              onClick={() => window.scrollTo(0, 0)}
            >
              Shop Now <EastOutlined />
            </Link>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            height: "30px",
            color: "grey",
            fontSize: "12px",
            padding: "2px 50px",
            width: "100%",
            boxSizing: "border-box", // Include padding in the element's total width
          }}
        >
          <p>&copy; Copyright 2023 Ecommerce App by Ali Siddiqui</p>
        </div>
      </div>
    </>
  );
}

Home.propTypes = {
  cartCount: PropTypes.number.isRequired,
}

export default Home;
