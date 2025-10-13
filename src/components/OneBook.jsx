const OneBook = ({ bookElement }) => {
  const { bookName, author, image, totalPages, rating } = bookElement;
  return (
    <div>
      <div className="card shadow-sm">
        <figure className="w-80 mx-auto bg-slate-200 py-8 mt-4">
          <img className="w-32 h-48" src={image} />
        </figure>
        <div className="card-body">
          <div className="border-b-2 border-gray-400 border-dashed">
            <h2 className="card-title">{bookName}</h2>
            <p className="mb-2">By : {author}</p>
          </div>
          <div className="card-actions justify-between">
            <div className="badge badge-outline">Pages : {totalPages}</div>
            <div className="badge badge-outline">Rating : {rating}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OneBook;
