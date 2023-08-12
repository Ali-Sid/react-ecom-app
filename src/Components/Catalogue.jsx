import { FormControlLabel, Checkbox, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import ProductCard from "./ProductsComponents/ProductCard";
import products from "./ProductsComponents/ProductList";
import { PropTypes } from "prop-types";
// import { Link } from "react-router-dom";

const Catalogue = ({cartCount}) => {


  // Window width
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const breakpoint = 600;

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);

      // Add overflow-x: hidden to body if the window width is less than the breakpoint
      if (window.innerWidth < breakpoint) {
        document.body.style.overflowX = "hidden";
      } else {
        document.body.style.overflowX = "auto";
      }

    };

    handleResize();

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // State to track checked categories
  const [checkedCategories, setCheckedCategories] = useState([]);

  // Function to handke checkbox change
  const handleCheckboxChange = (event) => {
    const category = event.target.name;
    event.target.checked
      ? setCheckedCategories([...checkedCategories, category])
      : setCheckedCategories(checkedCategories.filter((c) => c !== category));
  };

  // Filter products based on checked categories
  const filteredProducts =
    checkedCategories.length > 0
      ? products.filter((product) =>
          checkedCategories.includes(product.category)
        )
      : products;



  return (
    <>
      <Navbar cartCount={cartCount} />
      <div
        style={{
          display: "flex",
          flexDirection: windowWidth < breakpoint ? "column" : "row",
          marginTop: "50px",
          minHeight: "calc(100vh - 50px)",
          width: "100%"
        }}
      >
        <div style={{ flex: "0 0 200px", padding: "20px" }}>
          <h3>Filter By Category</h3>
          <div
            style={{
              display: "flex",
              flexDirection: windowWidth < breakpoint ? "row" : "column",
            }}
          >
            <FormControlLabel
              control={
                <Checkbox
                  checked={checkedCategories.includes("Tshirts")}
                  onChange={handleCheckboxChange}
                  name="Tshirts"
                />
              }
              label="Tshirts"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={checkedCategories.includes("Hoodies")}
                  onChange={handleCheckboxChange}
                  name="Hoodies"
                />
              }
              label="Hoodies"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={checkedCategories.includes("Shoes")}
                  onChange={handleCheckboxChange}
                  name="Shoes"
                />
              }
              label="Shoes"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={checkedCategories.includes("Bags")}
                  onChange={handleCheckboxChange}
                  name="Bags"
                />
              }
              label="Bags"
            />
          </div>
        </div>
        <div style={{ flex: "1", padding: "20px"}}>
          <h2 style={{textAlign: windowWidth < breakpoint && "center"}}>Product Catalogue</h2>
          {/* <Box mb={8}  sx={{height: "50vh", position: "relative"}}><img style={{position: "absolute", top: "0", width: "100%", height: "100%", objectFit: "cover", objectPosition: "center -10px"}} src="src/assets/pexels-shvets-production-9775889.jpg" alt="men wearing tshirts" /></Box> */}
          <Grid container spacing={2} style={{ justifyContent: "center" }}>
            {filteredProducts.map((product) => (
                // Pass the product object as state when clicking on the Link
                // <Link
                //   key={product.id}
                //   to={{
                //     pathname: `/product/${product.id}`,
                //     state: { product },
                //   }}
                // >
                  <ProductCard
                    key={product.id}
                    imageUrl={product.imageUrl}
                    name={product.name}
                    price={product.price}
                    category={product.category}
                    productId={product.id}
                    imageHeight={200}
                  />
                // </Link>
            ))}
          </Grid>
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
    </>
  );
};

Catalogue.propTypes = {
  cartCount: PropTypes.number.isRequired,
}

export default Catalogue;
