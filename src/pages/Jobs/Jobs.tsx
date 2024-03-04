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
      </div>
      <div className="beneficii">
        <div>calificare la locul de munca </div>
        <div>asigurare medicala</div>
        <div>program flexibil</div>
        <div>program pe perioada nedeterminata</div>
      </div>
      <div className="pozitii">POZITII DESCHISE</div>
    </>
  );
};
