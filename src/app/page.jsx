import Navbar from "../components/navbar/Navbar";
import Firstinfo from "../components/favamaininfo/Firstinfo";
import Favacounter from "../components/favacounter/Favacounter";

export default function home() {
  return (
    <main>
      {/* navbar */}
      <Navbar />

      {/* home page first info */}
      <div>
        <Firstinfo />
      </div>

      {/* fava counter */}
      <div>
        <Favacounter />
      </div>
    </main>
  );
}
