import withLoading from "../../hoc/withLoading";
function ProductList() {
    const products = ["iPhone", "Samsung", "Xiaomi"];

    return (
        <div>
            <h3>Products</h3>

            {products.map((product) => (
                <div key={product}>{product}</div>
            ))}
        </div>
    );
}
export default withLoading(ProductList);
