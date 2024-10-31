import {type FC} from "react";

import CardRowItem from "components/CardIRowtem";
import type { User } from "api/users.type";

import styles from "./contact_card.module.scss";

type Props = {
  user: User;
};

const ContactCard:FC<Props> = ({ user }) => {

    const { name, email, website, phone,address,company } = user;
  return (
    <div className={styles.contactCard}>
      <h2>{name}</h2>
      <CardRowItem title={"Phone"} text={phone} />
      <CardRowItem title={"Email"} text={email} />
      <CardRowItem title={"Website"} text={website} />
      <CardRowItem title={"address"} text={`${address.suite} ${address.street} ${address.city}`} />
      <CardRowItem title={"company"} text={company.name} />

    </div>
  );
};

export default ContactCard;
