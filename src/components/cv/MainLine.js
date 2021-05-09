import "./MainLine.less";
import info from "../../info";
import { FiMail, FiPhone } from "react-icons/fi";
import { BiMapPin } from "react-icons/bi";
import { SiLinkedin, SiGithub } from "react-icons/si";
import { Fragment } from "react";

const contacts = info.contacts;

const Contact = (props) => (
  <span>
    <a href={props.href} target="_blank">
      {props.icon}
      &nbsp;&nbsp;
      <span>{props.name}</span>
    </a>
  </span>
);

const Contacts = () => (
  <Fragment>
    <div className="contacts">
      <span>
        <FiPhone /> {contacts.phone}
      </span>
      <span>
        <FiMail /> {contacts.email}
      </span>
    </div>

    <div className="contacts">
      <Contact
        icon={<SiGithub />}
        href={contacts.github.href}
        name={contacts.github.name}
      />
      <Contact
        icon={<SiLinkedin />}
        href={contacts.linkedin.href}
        name={contacts.linkedin.name}
      />
    </div>

    <div className="contacts">
      <Contact
        icon={<BiMapPin />}
        href={contacts.location.href}
        name={contacts.location.name}
      />
    </div>
  </Fragment>
);

const MainLine = () => {
  return (
    <div className="main-line">
      <div className="upper-color-line">
        <p className="main-name">{info.full_name}</p>
        <Contacts />
      </div>
    </div>
  );
};

export default MainLine;
