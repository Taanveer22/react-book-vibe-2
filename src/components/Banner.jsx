import heroImage from "../assets/books.jpg";
const Banner = () => {
  return (
    <div className="hero rounded-2xl bg-slate-300 min-h-screen mb-12">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={heroImage} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold mb-12">
            Books to freshen up <br /> your bookshelf
          </h1>
          <button className="btn btn-success text-xl font-bold">
            View The List
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
