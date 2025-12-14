import "./ProductRow.css";

function ProductRow({ title, products }) {
  return (
    <div className="row">
      <h3>{title}</h3>

      <div className="row-products">
        {products.map((img, i) => (
          <img key={i} src={img} alt="product" />
        ))}
      </div>
    </div>
  );
}

export default ProductRow;
