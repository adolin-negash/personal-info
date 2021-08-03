import "../style/LeftLine.less";

import info from "../info";

const Photo = () => <div className="photo"></div>;

const Languages = () => (
  <div className="language">
    <p>Говорю на:</p>
    {info.languages.map((lang) => (
      <p key={lang.code}>
        <span>{lang.flag}</span>
        &nbsp;
        <span>{lang.name}</span>
        &nbsp;-&nbsp;
        <span>{lang.level}</span>
      </p>
    ))}
  </div>
);

const Skills = () => (
  <div className="skills">
    <span></span>
  </div>
);

const LeftLine = () => {
  return (
    <div className="left-line">
      <div>
        <Photo />
        <div className="upper-line-intersect"></div>
      </div>
      <div className="left-color-line">
        <Languages />
        <Skills />
      </div>
    </div>
  );
};

export default LeftLine;
