import Firstinfo from "../components/favamaininfo/Firstinfo";
import Favacounter from "../components/favacounter/Favacounter";
import Services from "../components/main-services/Services";
import Customer from "../components/customer/Customer";
import Videoplayer from "../components/Videoplayer/Videoplayer";
import Slider from "../components/slider/Slider";
import Platform from "../components/platforms/Platform";
import Bestprojects from "@/components/Best projects/Bestprojects";
import Companies from "@/components/companies/Companies";
import styles from "./page.module.css";

export default function home() {
  return (
    <main className={styles.main}>
      {/* home page first info */}

      <Firstinfo />

      {/* fava counter */}

      <Favacounter />

      {/* services */}
      <Services />

      {/* customer */}
      <Customer />

      {/* video player */}
      <Videoplayer />

      {/* Slider */}
      <Slider />

      {/* platform section */}
      <Platform />

      {/* best project section */}
      <Bestprojects />

      {/* companies */}
      <Companies />
    </main>
  );
}
