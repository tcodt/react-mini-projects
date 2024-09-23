import { useEffect, useState } from "react";
import ItemsList from "./ItemsList";
import Pagination from "./Pagination";

export default function PaginationMain() {
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentpage] = useState(1);
  const itemsPerPage = 3;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.log("Error: ", error);
      }
    };

    fetchData();
  }, []);

  // Calculate the index of the last and first item on the current page
  const indexOfLastItem = currentPage * itemsPerPage; // 2 * 10 = 20
  const indexOfFirstItem = indexOfLastItem - itemsPerPage; // 20 - 10 = 10

  // Get the items for the current page
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  // Function to change the page
  const handlePageChange = (pageNumber) => setCurrentpage(pageNumber);

  // Calculate total pages
  const totalPages = Math.ceil(items.length / itemsPerPage);

  return (
    <div>
      <h2>React Pagination with API</h2>
      <ItemsList items={currentItems} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        handlePageChange={handlePageChange}
      />
    </div>
  );
}
