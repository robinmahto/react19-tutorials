import { useState } from "react";

const SearchBar = () => {};
const ProductTable = () => {};
const ProductCategoryRow = () => {};
const ProductRow = () => {};

const FilterableProductTable = ({ product }) => {
  const [productName, setProductName] = useState("");
  const productfilters = product?.filter((data)=> data.name.toLowerCase().includes(productName))
  // console.log("productsFilters : ", productfilters);
  return (
    <>
      <div>
        {/* search bar and filter */}
        <div>
          <input
            type="text"
            placeholder="search product"
            value={productName}
            onChange={(e) => {
              setProductName(e.target.value);
            }}
          />
          <div>
            <label htmlFor="product">
              <input type="checkbox" /> show only stocked product
            </label>
          </div>
        </div>

        {/* table for product listed down */}
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {productfilters?.map((data, index) => {
              return (
                <tr key={index}>
                  <th colSpan={2}>{data.category}</th>
                  <td>{index + 1}</td>
                  <td>{data.name}</td>
                  <td>{data.price}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default FilterableProductTable;
