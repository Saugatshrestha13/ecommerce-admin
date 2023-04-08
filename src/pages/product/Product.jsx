import { Publish } from "@material-ui/icons";
import { Link } from "react-router-dom";
import Chart from "../../components/chart/Chart";
import { productData } from "../../dummydata";
import "./product.css";

export default function Product() {
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to="/newproduct">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopLeft">
          <Chart data={productData} dataKey="Sales" title="Sales Performance" />
        </div>
        <div className="productTopRight">
          <div className="productInfoTop">
            <img
              src="https://liquorsnepal.com/wp-content/uploads/2021/07/old-durbar-reserve.jpg"
              alt=""
              className="productInfoImg"
            />
            <span className="productName">Old Durbar Whiskey</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoBottom">
              <span className="productInfoKey">id:</span>
              <span className="productInfoValue">125</span>
            </div>
            <div className="productInfoBottom">
              <span className="productInfoKey">sales:</span>
              <span className="productInfoValue">2400</span>
            </div>
            <div className="productInfoBottom">
              <span className="productInfoKey">active:</span>
              <span className="productInfoValue">yes</span>
            </div>
            <div className="productInfoBottom">
              <span className="productInfoKey">in stock:</span>
              <span className="productInfoValue">no</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>Product Name</label>
            <input type="text" placeholder="Old Durbar Whiskey" />
            <label>In Stock</label>
            <select name="inStock" id="idStock">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            <label>Active</label>
            <select name="active" id="active">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="productFormRight">
            <div className="productUpload">
              <img
                src="https://liquorsnepal.com/wp-content/uploads/2021/07/old-durbar-reserve.jpg"
                alt=""
                className="productUploadImg"
              />
              <label for="file">
                <Publish />
              </label>
              <input type="file" style={{ display: "none" }} />
            </div>
            <button className="productButton">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
}
