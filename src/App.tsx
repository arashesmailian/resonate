import ContactsList from "components/ContactsList";
import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles.App}>
      <h1>Contacts</h1>
      <ContactsList />
    </div>
  );
}

export default App;
