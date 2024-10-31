import {type FC, useState} from "react";

import CardRowItem from "components/CardIRowtem";
import type { User } from "api/users.type";

import styles from "./contact_card.module.scss";

type Props = {
  user: User;
};

const ContactCard:FC<Props> = ({ user }) => {
  const [collapse,setCollapse] = useState(false);

    const toggleCardCollapse = () => {
        setCollapse(prev=>!prev)
    }
  return (
    <div className={`${styles.contactCard} ${styles.collapse}`}>
      <h2>{user.name}</h2>
      <CardRowItem title={"Email"} text={user.email} />
      <CardRowItem title={"Website"} text={user.website} />
        <CardRowItem title={"Phone"} text={user.phone} />
        {!collapse && <i onClick={toggleCardCollapse}>Show More {">>"}</i>}
        {collapse &&
            <>
            <CardRowItem title={"Phone"} text={user.phone}/>
            <CardRowItem title={"Phone"} text={user.phone}/>
            <CardRowItem title={"Phone"} text={user.phone}/>
            <CardRowItem title={"Phone"} text={user.phone}/>
            <i onClick={toggleCardCollapse}>Show Less {"<<"}</i>
            </>
        }
    </div>
  );
};

export default ContactCard;
