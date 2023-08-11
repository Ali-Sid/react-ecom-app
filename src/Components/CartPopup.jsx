import { PropTypes } from "prop-types";

const CartPopup = ({cartItems}) => {
  return (
    <div className="cart-popup" style={{marginTop: "416px", width: "350px", backgroundColor: "#fff", fontSize: "16px", display: "flex",flexDirection: "column", justifyContent: "center", textAlign: "center", paddingBottom: "50px" }}>
    <div className="cart-header">
      <h2 className="cart-title">Shopping Bag</h2>
      <span className="cart-counter">{cartItems.length}</span>
    </div>
    <div className="cart-body">
      {cartItems.length === 0 ? (
        <div className="cart-empty">
          <p>Your shopping bag is empty</p>
          <button className="cart-explore-btn">Explore Products</button>
        </div>
      ) : (
        <div className="cart-items">
          {/* Render the list of cart items */}
          {cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <img className="item-image" src={item.image} alt={item.name} />
              <div className="item-details">
                <p>{item.name}</p>
                <p>Size: {item.size}</p>
                <p>Quantity: {item.quantity}</p>
                {/* Add remove option/icon */}
                <button className="remove-icon">Remove</button>
              </div>
              <div className="item-price">
                <p>${item.price}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
    <div className="cart-footer">
      {/* Add subtotal and total amount */}
      <p className="subtotal">Subtotal: $XXX</p>
      <p className="total">Total: $XXX</p>
      <button className="checkout-btn">Go to checkout</button>
    </div>
  </div>
);
};

CartPopup.propTypes = {
    cartItems: PropTypes.array.isRequired,
  };

export default CartPopup