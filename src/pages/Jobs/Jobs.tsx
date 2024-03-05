import {
  Activity,
  CornerRightDown,
  FileText,
  GitPullRequest,
  UserPlus,
} from "react-feather";
import { scrollContactIntoView } from "../../components/Footer/Footer";
import { Button } from "../../components/common/Button/Button";
import "./jobs.scss";

export const Jobs = () => {
  return (
    <>
      <div className="negative-curvature">
        <h2>Haide in echipa noastră!</h2>
      </div>
      <div className="scop">
        <h2>Scopul nostru</h2>
        <p>
          Scopul nostru este să creăm un mediu în care fiecare membru al echipei
          noastre aduce o valoare distinctă pentru a realiza proiecte de succes.
          Căutăm în fiecare zi să înțelegem mai bine clienții, colegii, precum
          și rolul pe care îl avem la nivelul comunității în care ne dezvoltăm
          echipa.
        </p>
        <Button type="text" onClick={scrollContactIntoView}>
          <h3>
            Contactează-ne{" "}
            <CornerRightDown className="ml-xs" height="16px" width="16px" />
          </h3>
        </Button>
      </div>
      <div className="beneficii">
        <div>
          <UserPlus className="text-logo-primary" width="48px" height="48px" />
          <h3>Calificare la locul de munca</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            massa est, facilisis quis tortor fringilla, tempor aliquet turpis.
            Curabitur quis nunc iaculis, tristique lectus eu, scelerisque metus.
            Curabitur maximus rutrum tincidunt.
          </p>
        </div>
        <div>
          <Activity className="text-logo-primary" width="48px" height="48px" />
          <h3>Asigurare medicala</h3>
          <p>
            Nam eget justo neque. Sed aliquet diam ut dui volutpat, nec
            condimentum metus suscipit. Proin purus ligula, pretium non molestie
            ut, aliquet in justo. Sed nisl nisl, luctus vel dui et, euismod
            vulputate felis. Vivamus nec vehicula augue, pulvinar porttitor
            orci. Sed urna erat, posuere at eros at, blandit iaculis orci.
            Pellentesque quis eros diam.
          </p>
        </div>
        <div>
          <GitPullRequest
            className="text-logo-primary"
            width="48px"
            height="48px"
          />
          <h3>Program flexibil</h3>
          <p>
            In at consequat risus, quis feugiat urna. Pellentesque vitae egestas
            libero. Fusce et risus in ipsum luctus sagittis eu sit amet eros.
            Aenean id risus vitae tortor dapibus egestas et vel eros.
          </p>
        </div>
        <div>
          <FileText className="text-logo-primary" width="48px" height="48px" />
          <h3>Program pe perioada nedeterminata</h3>
          <p>
            Donec ac libero nibh. Proin luctus ultricies mauris et ornare.
            Nullam eget efficitur eros, eget vulputate leo. Donec pellentesque
            eleifend vestibulum. Vestibulum vitae suscipit erat. Vestibulum sit
            amet leo eu tortor vehicula ornare.
          </p>
        </div>
      </div>
    </>
  );
};
