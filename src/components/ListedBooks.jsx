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
      <Tabs>
        <TabList>
          <Tab>Read List Books</Tab>
          <Tab>Wish List Books</Tab>
        </TabList>

        <TabPanel>
          <h2 className="text-2xl font-semibold text-blue-500 text-center">
            Books Added : {readList.length}
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
            Books Added : {wishList.length}
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
