import * as React from "react"
import axios from "axios"

type ApplicationProps = {};

const Application: React.FC<ApplicationProps> = () => {
  let [products, setProducts] = React.useState([]);
  let [files, setFiles] = React.useState([]);

  const changeFiles = (e) => {
    setFiles(e?.target?.files || []);
  }

  const fetchProducts = async () => {
    try {
      const response = await axios.get("/api/v1/products");
      setProducts(Array.isArray(response?.data) ? response.data : []);
    } catch (error) {
      console.error(error);
    }
  };

  const uploadProducts = async () => {
    try {
      const formData = new FormData();
  
      files.map((file, index) => {
        formData.append(`metadata${index}`, file);
      });

      await axios.post("/api/v1/products", formData);
      changeFiles(null);
      const response = await axios.get("/api/v1/products");
      setProducts(Array.isArray(response?.data) ? response.data : []);1
    } catch (error) {
      console.error(error);
    }
  };


  React.useEffect(() => {
    if (!products.length) fetchProducts();
  }, [fetchProducts, products, setProducts]);

  return (
    <div className="w-100 h-100">
      <input type="file" accept="text/csv" multiple onChange={changeFiles} />
      <button onClick={uploadProducts}>Upload</button>
      {Array.isArray(products) && products.length > 0 ? products.map((product, key) => (
        <div key={key} className="card">
          <div>date: {product.date}</div>
          <div>product_id: {product.product_id}</div>
          <div>weight: {product.weight}</div>
          <div>unit: {product.unit}</div>
        </div>
      )) : (
        <div className="card">
          No data found
        </div>
      )}
    </div>
  );
};

export default Application;
