import { useLoaderData, useParams } from "react-router-dom";
import { addToReadList } from "../utilities/localStorage1";
import { addToWishList } from "../utilities/localStorage2";

const OneBookDetail = () => {
  const params = useParams();
  const booksLoaderData = useLoaderData();
  // console.log(booksLoaderData);
  // console.log(params);
  // console.log(params.bookId);
  const bookIdFromParams = parseInt(params.bookId);
  // console.log(bookIdFromParams);
  const comparedBook = booksLoaderData?.find(
    (bookElement) => bookElement.bookId === bookIdFromParams
  );
  // console.log(comparedBook);
  const { bookId, bookName, author, image, review } = comparedBook;
  const handleMarkAsRead = (id) => {
    addToReadList(id);
  };

  const handleAddToWishList = (id) => {
    addToWishList(id);
  };
  return (
    <div className="mb-12">
      <h1 className="text-blue-500 text-2xl font-semibold text-center mb-6">
        Details Of Book Id : {params.bookId}
      </h1>
      <div className="hero bg-slate-300 rounded-2xl min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <img src={image} className="max-w-xs h-120 rounded-2xl shadow-2xl" />
          <div className="space-y-3">
            <h1 className="text-5xl font-bold">{bookName}</h1>
            <h1 className="text-2xl font-medium">By : {author}</h1>
            <p className="text-justify">Review : {review}</p>
            <div className="flex gap-6">
              <button
                onClick={() => handleMarkAsRead(bookId)}
                className="btn btn-primary"
              >
                Mark As Read
              </button>
              <button
                onClick={() => handleAddToWishList(bookId)}
                className="btn btn-secondary"
              >
                Add To Wish List
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OneBookDetail;
