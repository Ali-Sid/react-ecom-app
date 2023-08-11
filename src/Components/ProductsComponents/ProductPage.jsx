import { Grid } from "@mui/material";
import ProductCard from "./ProductCard";

function ProductPage() {
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
    <div style={{margin: "100px 20px"}}>
      <Grid container spacing={2} style={{justifyContent: "center"}}>
        {products.map((product, index) => (
          <ProductCard
            key={index}
            imageUrl={product.imageUrl}
            name={product.name}
            price={product.price}
          />
        ))}
      </Grid>
    </div>
  );
}



export default ProductPage;
