import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getReadList } from "../utilities/localStorage1";
import OneBook from "./OneBook";
import { getWishList } from "../utilities/localStorage2";

const ListedBooks = () => {
  const [readList, setReadList] = useState([]);
  const [wishList, setWishList] = useState([]);

  // ===========sort functionality===================
  const [sort, setSort] = useState("");
  const handleSort = (type) => {
    console.log(type);
    setSort(type);

    //================== readlist sorting===============
    if (sort === "ratings") {
      const sortedReadList = [...readList].sort((a, b) => a.rating - b.rating);
      setReadList(sortedReadList);
    } else if (sort === "pages") {
      const sortedReadList = [...readList].sort(
        (a, b) => a.totalPages - b.totalPages
      );
      setReadList(sortedReadList);
    }

    // ============wishlist sorting=====================
    if (sort === "ratings") {
      const sortedWishList = [...wishList].sort((x, y) => y.rating - x.rating);
      setWishList(sortedWishList);
    } else if (sort === "pages") {
      const sortedWishList = [...wishList].sort(
        (x, y) => y.totalPages - x.totalPages
      );
      setWishList(sortedWishList);
    }
  };

  const booksLoaderData = useLoaderData();
  // console.log(booksLoaderData);
  useEffect(() => {
    const storedList = getReadList();
    // console.log(storedList);
    // console.log(typeof storedList[0]);

    const comparedReadList = booksLoaderData.filter((bookElement) =>
      storedList.includes(bookElement.bookId)
    );
    setReadList(comparedReadList);
  }, [booksLoaderData]);

  useEffect(() => {
    const storedList = getWishList();
    console.log(storedList);

    const comparedWishList = booksLoaderData.filter((bookElement) =>
      storedList.includes(bookElement.bookId)
    );
    setWishList(comparedWishList);
  }, [booksLoaderData]);
  return (
    <div className="mb-12">
      <div className="flex justify-center items-center mb-24">
        <div className="dropdown dropdown-open">
          <div tabIndex={0} role="button" className="btn btn-info m-1">
            {sort ? `Sort By ${sort}` : `Sort By`}
          </div>
          <ul
            tabIndex="-1"
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li onClick={() => handleSort("ratings")}>
              <a>Ratings</a>
            </li>
            <li onClick={() => handleSort("pages")}>
              <a>Pages</a>
            </li>
          </ul>
        </div>
      </div>

      <Tabs>
        <TabList>
          <Tab>Read List Books</Tab>
          <Tab>Wish List Books</Tab>
        </TabList>

        <TabPanel>
          <h2 className="text-2xl font-semibold text-blue-500 text-center">
            Read List Books Added : {readList.length}
          </h2>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {readList.map((bookElement) => (
              <OneBook
                key={bookElement.bookId}
                bookElement={bookElement}
              ></OneBook>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <h2 className="text-2xl font-semibold text-blue-500 text-center">
            Wish List Books Added : {wishList.length}
          </h2>

          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {wishList.map((bookElement) => (
              <OneBook
                key={bookElement.bookId}
                bookElement={bookElement}
              ></OneBook>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
