import { SVGProps, PathProps, CutoutProps } from "./icons.types";
import "./icons.scss";

const SVG: React.FC<SVGProps> = ({ children }) => {
  return (
    <svg width="100%" height="100%" viewBox="0 0 100 100">
      {children}
    </svg>
  );
};

const RoundTrianglePath: React.FC<PathProps> = ({ id }) => (
  <path
    id={id}
    d="M 62 25 L 62 25 87 75 C 87 75 100 100 75 100 L 25 100 C 25 100 0 100 13 75 L 38 25 C 38 25 50 0 62 25 Z"
    height="100%"
    width="100%"
  />
);

export const DoubleTriangleLeft: React.FC<CutoutProps> = ({ image }) => (
  <SVG>
    <defs>
      <RoundTrianglePath id="roundTriangleLeft" />
      <clipPath id="triangleCutoutLeft">
        <use href="#roundTriangleLeft" transform="rotate(30 80 60)">
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 80 60 "
            to="30 80 60"
            dur="1.2s"
            repeatCount="1"
          />
        </use>
      </clipPath>
    </defs>

    <use
      href="#roundTriangleLeft"
      className="triangle-logo-primary-color"
      transform="rotate(40 70 60)"
    >
      <animateTransform
        attributeName="transform"
        type="rotate"
        from="0 70 60 "
        to="40 70 60"
        dur="0.8s"
        repeatCount="1"
      />
    </use>
    <image
      href={image}
      width="100%"
      height="100%"
      clipPath="url(#triangleCutoutLeft)"
    />
  </SVG>
);

export const DoubleTriangleRight: React.FC<CutoutProps> = ({ image }) => (
  <SVG>
    <defs>
      <RoundTrianglePath id="roundTriangleRight" />
      <clipPath id="triangleCutoutRight">
        <use href="#roundTriangleRight" transform="rotate(-30 20 60)">
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 20 60 "
            to="-30 20 60"
            dur="0.8s"
            repeatCount="1"
          />
        </use>
      </clipPath>
    </defs>

    <use
      href="#roundTriangleRight"
      className="triangle-logo-primary-color"
      transform="rotate(-45 30 60)"
    >
      <animateTransform
        attributeName="transform"
        type="rotate"
        from="0 30 60 "
        to="-45 30 60"
        dur="1.2s"
        repeatCount="1"
      />
    </use>
    <image
      href={image}
      width="100%"
      height="100%"
      clipPath="url(#triangleCutoutRight)"
    />
  </SVG>
);

export const CurvedRectangleLeft: React.FC<CutoutProps> = ({ image }) => {
  return (
    <SVG>
      <defs>
        <clipPath id="curvedRectangleLeftCutout">
          <path
            d="M 0 0 L 95 0 C 95 0 80 20 90 40, 90 40 112 70 90 100 L 0 100 Z"
            stroke="black"
            id="curvedRectangleLeft"
          />
        </clipPath>
      </defs>

      <image
        href={image}
        height="100%"
        clipPath="url(#curvedRectangleLeftCutout)"
      />
    </SVG>
  );
};

export const CurvedRectangleRight: React.FC<CutoutProps> = ({ image }) => {
  return (
    <SVG>
      <defs>
        <clipPath id="curvedRectangleRightCutout">
          <path
            d="M 5 0 L 100 0 100 100 10 100 C 10 100 30 70 10 40, 10 40 -8 20 5 0 Z"
            stroke="black"
            id="curvedRectangleRight"
          />
        </clipPath>
      </defs>

      <image
        href={image}
        height="100%"
        clipPath="url(#curvedRectangleRightCutout)"
      />
    </SVG>
  );
};
