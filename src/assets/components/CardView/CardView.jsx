import "./CardView.css";

const CardView = ({ show, setShow, handleShowChange }) => {
  const allIcons = show.bookmark && show.review && show.watched;

  const handleAllIcons = () => {
    setShow((prev) => ({
      ...prev,
      bookmark: !allIcons,
      review: !allIcons,
      watched: !allIcons,
    }));
  };

  const allOthers = show.overview && show.rating && show.year;

  const handleAllOthers = () => {
    setShow((prev) => ({
      ...prev,
      overview: !allOthers,
      rating: !allOthers,
      year: !allOthers,
    }));
  };

  return (
    <div className="settingC" id="movieCardSettings">
      <h2>Movie card settings</h2>

      <div className="group">
        <label className="groupTitle">
          All icons
          <input type="checkbox" checked={allIcons} onChange={handleAllIcons} />
        </label>

        <div className="optionGrid">
          <label className="option">
            Bookmark
            <input
              type="checkbox"
              checked={show.bookmark}
              onChange={() => handleShowChange("bookmark")}
            />
          </label>

          <label className="option">
            Review
            <input
              type="checkbox"
              checked={show.review}
              onChange={() => handleShowChange("review")}
            />
          </label>

          <label className="option">
            Watched
            <input
              type="checkbox"
              checked={show.watched}
              onChange={() => handleShowChange("watched")}
            />
          </label>
        </div>
      </div>

      <div className="group">
        <label className="groupTitle">
          All others
          <input
            type="checkbox"
            checked={allOthers}
            onChange={handleAllOthers}
          />
        </label>

        <div className="optionGrid">
          <label className="option">
            Overview
            <input
              type="checkbox"
              checked={show.overview}
              onChange={() => handleShowChange("overview")}
            />
          </label>

          <label className="option">
            Rating
            <input
              type="checkbox"
              checked={show.rating}
              onChange={() => handleShowChange("rating")}
            />
          </label>

          <label className="option">
            Year
            <input
              type="checkbox"
              checked={show.year}
              onChange={() => handleShowChange("year")}
            />
          </label>
        </div>
      </div>
    </div>
  );
};

export default CardView;
