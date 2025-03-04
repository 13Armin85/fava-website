import Navbar from "../components/navbar/Navbar";
import Firstinfo from "../components/favamaininfo/Firstinfo";
import Favacounter from "../components/favacounter/Favacounter";
import styles from "./page.module.css";

export default function home() {
  return (
    <main className={styles.main}>
      {/* navbar */}
      <Navbar />

      {/* home page first info */}

      <Firstinfo />

      {/* fava counter */}

      <Favacounter />
    </main>
  );
}
