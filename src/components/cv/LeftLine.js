import "./LeftLine.less";

const Photo = () => <div className="photo"></div>;

const LeftLine = () => {
  return (
    <div className="left-line">
      <div>
        <Photo />
        <div className="upper-line-intersect"></div>
      </div>
      <div className="left-color-line"></div>
    </div>
  );
};

export default LeftLine;
