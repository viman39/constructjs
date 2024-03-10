import {
  CurvedRectangleLeft,
  CurvedRectangleRight,
} from "../../components/common/Icons/Icons";
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
              {isMobile && <CurvedRectangleRight image={image} />}
              <div>
                <h1 className="text-logo-primary">{title}</h1>
                <p>{description}</p>
              </div>
              {!isMobile && <CurvedRectangleRight image={image} />}
            </>
          ) : (
            <>
              <CurvedRectangleLeft image={image} />
              <div>
                <h1 className="text-logo-primary">{title}</h1>
                <p>{description}</p>
              </div>
            </>
          )
        )}
      </div>
    </>
  );
};
