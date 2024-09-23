/* eslint-disable react/prop-types */

import "./Pagination.css";

export default function ItemsList({ items }) {
  return (
    <ul className="pagination-container">
      {items.map((item) => (
        <li key={item.id} className="">
          <img src={item.image} alt="image" className="pagination-img" />
        </li>
      ))}
    </ul>
  );
}
