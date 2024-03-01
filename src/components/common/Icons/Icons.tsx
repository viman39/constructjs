import { SVGProps, PathProps, TrianglesProps } from "./icons.types";

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

const Triangles: React.FC<TrianglesProps> = ({ triangles }) => (
  <SVG>
    <defs>
      <RoundTrianglePath id="roundTriangle" />
      <clipPath id="triangleCutout">
        <use href="#roundTriangle" />
      </clipPath>
    </defs>

    {triangles.map(({ fill, transform }) => (
      <use href="#roundTriangle" fill={fill} transform={transform} />
    ))}
  </SVG>
);

export const DoubleTriangleRight = () => (
  <Triangles
    triangles={[
      { fill: "red", transform: "rotate(45 70 60)" },
      { fill: "yellow", transform: "rotate(30 80 60)" },
    ]}
  />
);

export const DoubleTriangleLeft = () => (
  <Triangles
    triangles={[
      { fill: "red", transform: "rotate(-45 30 60)" },
      { fill: "yellow", transform: "rotate(-30 20 60)" },
    ]}
  />
);
