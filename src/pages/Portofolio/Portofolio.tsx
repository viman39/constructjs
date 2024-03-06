import { CurvedRectangle } from "../../components/common/Icons/Icons";
import {
  SCREEN_BREAKPOINT_MOBILE,
  useBreakPoint,
} from "../../utils/hooks/useScreenSize";
import { PORTOFOLIO } from "./portofolio.constants";
import "./portofolio.scss";

export const Portofolio = () => {
  const isMobile = useBreakPoint(SCREEN_BREAKPOINT_MOBILE);

  return (
    <>
      <div className="portofolio">
        <h2>Portofoliu</h2>
      </div>
      <div className="projects">
        {PORTOFOLIO.map(({ title, description, image }, index) =>
          index % 2 === 0 ? (
            <>
              <div>
                <h1>{title}</h1>
                <p>{description}</p>
              </div>
              <CurvedRectangle image={image} />
            </>
          ) : (
            <>
              {!isMobile && <CurvedRectangle image={image} />}
              <div>
                <h1>{title}</h1>
                <p>{description}</p>
              </div>
              {isMobile && <CurvedRectangle image={image} />}
            </>
          )
        )}
      </div>
    </>
  );
};
