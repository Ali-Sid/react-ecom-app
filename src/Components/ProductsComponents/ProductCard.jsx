import { Link } from "react-router-dom";
import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { PropTypes } from "prop-types";

function ProductCard({ productId, imageUrl, name, price, imageHeight, category }) {
  return (
    <Grid item xs={6} sm={6} md={2.2}>
      <Link to={`/product/${productId}`} style={{ textDecoration: "none" }} onClick={() => window.scrollTo(0, 0)}>
        <Card
          className="product-card"
          style={{ height: "100%", display: "flex", flexDirection: "column" }}
        >
          <CardMedia
            component="img"
            height={imageHeight}
            image={imageUrl}
            alt={name}
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              {name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {category} {/* Display the category */}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Price: ${price}
            </Typography>
          </CardContent>
        </Card>
      </Link>
    </Grid>
  );
}

ProductCard.propTypes = {
  productId: PropTypes.number.isRequired,
  imageUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  imageHeight: PropTypes.number,
  category: PropTypes.string
};

export default ProductCard;
