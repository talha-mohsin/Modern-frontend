import { useEffect, useState } from "react";
import { getAllProducts } from "./utils/getProducts";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [addToCart, setAddToCart] = useState([]);
  const [counter, setCounter] = useState(0);
  const [isCart, setisCart] = useState(false);

  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    let data = await getAllProducts();
    setProducts(data);
  }

  // addToCartHandler
  function addToCartHandler(product) {
    setCounter(counter + 1);
    setAddToCart([...addToCart, product]);
  }

  return (
    <>
      <div className="navbar">
        <h2 style={{ color: "white" }}>ShoppingStore</h2>
        <span
          onClick={() => (!isCart ? setisCart(true) : setisCart(false))}
          style={{ color: "white" }}
        >
          {isCart ? (
            <i className="fa-regular fa-circle-right"></i>
          ) : (
            <>
              <i className="fa-solid fa-cart-shopping"></i>
              <span> {counter}</span>
            </>
          )}
        </span>
      </div>

      <div className="btns">
        <button className="btn">All</button>
        <button className="btn btnCategory">Men's clothing</button>
        <button className="btn btnCategory">Jewelery</button>
        <button className="btn btnCategory">Electronics</button>
        <button className="btn btnCategory">Women's clothing</button>
        <select className="btn" id="selectCategory">
            <option value="Men's clothing">Men's clothing</option>
            <option value="Jewelery">Jewelery</option>
            <option value="Electronics">Electronics</option>
            <option value="Women's clothing">Women's clothing</option>
        </select>
      </div>

      <div className="products">
        {isCart
          ? addToCart.map((product) => {
              return (
                <div className="product" key={product.id}>
                  <div className="productImg">
                    <img src={product.image} alt="" />
                  </div>
                  <div className="details">
                    <h3>{product.title}</h3>
                    <p>${product.price}</p>
                  </div>
                </div>
              );
            })
          : products.map((product) => {
              return (
                <div className="product" key={product.id}>
                  <div className="productImg">
                    <img src={product.image} alt="" />
                  </div>
                  <div className="details">
                    <h3>{product.title}</h3>
                    <p>${product.price}</p>
                    <button
                      className="btn"
                      onClick={() => addToCartHandler(product)}
                    >
                      Add to Cart <span></span>
                    </button>
                  </div>
                </div>
              );
            })}
      </div>
      <footer style={{color : `rgb(249, 79, 17)`, paddingBottom: `10px`}}>© 2026 ShoppingStore | built by Talha Mohsin</footer>
    </>
  );
}

export default App;
