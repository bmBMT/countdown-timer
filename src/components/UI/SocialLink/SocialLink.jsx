import {  } from 'react'
import IonIcon from "@reacticons/ionicons";

const SocialLink = ({ name, href }) => {
  return (
      <a href={href}>
        <IonIcon name={name} size="large" ></IonIcon>
      </a>
  );
};

export default SocialLink;
