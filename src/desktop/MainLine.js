import "../style/MainLine.less";
import info from "../info";
import { Fragment } from "react";
import Icon from "../common/Icon";

const contacts = info.contacts;

const Contact = (props) => (
  <span>
    <a href={props.href} target="_blank" rel="noreferrer">
      <Icon code={props.icon} />
      <span>{props.name}</span>
    </a>
  </span>
);

const Contacts = () => (
  <Fragment>
    <div className="contacts">
      <Icon code="phone" />
      {contacts.phone}
      <Icon code="email" />
      {contacts.email}
    </div>

    <div className="contacts">
      <Contact
        icon="github"
        href={contacts.github.href}
        name={contacts.github.name}
      />
      <Contact
        icon="linkedin"
        href={contacts.linkedin.href}
        name={contacts.linkedin.name}
      />
    </div>

    <div className="contacts">
      <Contact
        icon="map"
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
