import {useUserGet} from "api/users";
import ContactCard from "components/ContactCard/index.js";

import styles from "./contacts_list.module.scss";
import {User} from "../../api/users.type";

const ContactsList = () => {
  const { data:users, error, isLoading } = useUserGet();

  if (!users && isLoading) return <div>Loading...</div>;
  if (!users && error) return <div>Error loading contacts</div>;

  return (
    <div className={styles.contacts}>
      {users?.map((user:User) => (
        <ContactCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export default ContactsList;
