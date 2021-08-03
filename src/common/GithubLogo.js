import React from "react";
import PropTypes from "prop-types";

const types = {
  github:
    "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z",
  menu:
    "M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z",
};

const LogoSvg = (props) => {
  const { size, scale, type } = props;
  const path = types[type];
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <g transform={`scale(${scale}, ${scale})`}>
        <path className="logo" d={path} />
      </g>
    </svg>
  );
};

const GithubLogo = (props) => {
  const isMobile = props.isMobile;
  const size = isMobile ? 72 : 24;
  const svgScale = isMobile ? 2.5 : 1;

  return (
    <a
      href={props.href}
      target="_blank"
      rel="noreferrer"
      title={props.title}
    >
      <div className={props.className}>
        <LogoSvg size={size} scale={svgScale} type={props.type}/>
      </div>
    </a>
  );
};

GithubLogo.propTypes = {
  type: PropTypes.string.isRequired,
  isMobile: PropTypes.bool.isRequired,
  className: PropTypes.string,
  title: PropTypes.string,
};

export default GithubLogo;
