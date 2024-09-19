import React from "react";
import { useCart } from "react-use-cart";
import Table from "react-bootstrap/Table";
import "./Cart.css";

const Cart = () => {
  const {
    items,
    isEmpty,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
    totalUniqueItems,
  } = useCart();
  if (isEmpty)
    return <h1 className="text-center">Your Cart is Empty, Shop Now</h1>;

  return (
    <section className="py-4 container">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-12 cart-details">
          <h5 className="cart-unique">
            Cart: ({totalUniqueItems}), Total Items: {totalItems}{" "}
          </h5>

          <div className="table-responsive">
          <Table className="table" striped bordered hover variant="dark">
            <thead>
              <tr className="table-head-rows">
                <th>#</th>
                <th>Item Name</th>
                <th>item Price</th>
                <th>Item Quantity</th>
                <th>
                  <i class="fa-solid fa-minus"></i>
                </th>
                <th>
                  <i class="fa-solid fa-plus"></i>
                </th>
                <th>Remove Item</th>
              </tr>
            </thead>

            <tbody>
              {items.map((item, index) => {
                return (
                  <tr key={index} className="table-row justify-content-center">
                    <td>
                      <img src={item.image} alt="" className="cart-img" />
                    </td>
                    <td>{item.title}</td>
                    <td>${item.price}</td>
                    <td>Quantity: {item.quantity}</td>

                    <td>
                      <button
                        className=" btn-minus"
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity - 1)
                        }
                      >
                        <i class="fa-solid fa-minus"></i>
                      </button>
                    </td>

                    <td>
                      <button
                        className="  btn-minus"
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity + 1)
                        }
                      >
                        <i class="fa-solid fa-plus"></i>
                      </button>
                    </td>

                    <td>
                      <button 
                        className="btn-remove "
                        onClick={() => removeItem(item.id)}>
                        <i className="fa-solid fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
          </div>
        </div>

        <div className="col-auto ms-auto mt-4">
          <h2 className="total-price">Total Price: ${cartTotal}</h2>
        </div>

        <div className="col-auto mt-4">
            <button className="empty-btn btn-spacing" onClick={() => emptyCart()}>Clear Cart</button>
            <button className="checkout btn-spacing" >Proceed To Checkout</button>
        </div>
      </div>
    </section>
  );
};

export default Cart;
