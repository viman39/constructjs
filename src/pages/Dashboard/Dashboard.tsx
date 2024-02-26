import { useEffect, useState } from "react";
import "./dashboard.scss";
import { scrollElementIntoView } from "../../utils/dom";
import { useLocation } from "react-router-dom";

export const Dashboard = () => {
  const { hash } = useLocation();

  useEffect(() => {
    scrollElementIntoView(hash || "#logo");
  }, [hash]);

  return (
    <>
      <div className="home-section" id="#logo">
        <h1>LespeziArt Con</h1> <br />
        <span>
          Izolații care rezistă timpului, la înălțimea așteptărilor tale!
        </span>
      </div>
      <div className="aboutus-section" id="#aboutUs">
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod
          dolor sed turpis lacinia suscipit. Integer porta vitae erat in
          blandit. In in ipsum semper, volutpat leo sed, scelerisque purus. Orci
          varius natoque penatibus et magnis dis parturient montes, nascetur
          ridiculus mus. Sed ex est, iaculis eu feugiat in, interdum id sapien.
          Etiam vitae laoreet leo, non viverra massa. Curabitur et facilisis
          libero, nec eleifend sem. Fusce ultrices a augue in imperdiet. Nulla
          bibendum, metus nec pulvinar bibendum, diam lectus pulvinar ipsum, ac
          ultrices tellus mi quis metus. Ut massa erat, dictum sollicitudin
          bibendum tincidunt, venenatis vel dolor. Donec quis nisl sit amet mi
          eleifend faucibus eget ut velit. Cras sollicitudin scelerisque magna
          et faucibus. Aliquam sit amet porta ipsum, sed hendrerit quam. Nunc
          iaculis massa ut metus convallis, at eleifend nunc tincidunt.
        </div>
        <div>
          Morbi varius hendrerit quam ut blandit. Morbi est lectus, consectetur
          in erat nec, maximus euismod justo. Morbi sollicitudin lectus sed
          augue lacinia ultricies. Maecenas euismod tellus id urna posuere,
          blandit bibendum elit convallis. Vivamus nisi nulla, bibendum at
          tristique eget, consequat nec velit. Sed non congue nibh. Quisque sit
          amet pharetra lorem, a ornare lacus. Praesent sit amet dui et nunc
          tristique mollis. Aliquam bibendum accumsan odio, in tincidunt massa
          interdum non. Integer dapibus, est id mattis gravida, dui velit
          finibus leo, quis malesuada lectus ante tempus dolor. Vivamus aliquet
          egestas neque ac porta. Integer eu diam iaculis est facilisis gravida.
          Sed sit amet tincidunt orci.
        </div>
        <div>
          Vivamus in odio consequat, malesuada diam ut, imperdiet lacus. Morbi
          eget augue enim. Nam at leo eleifend, lacinia ante sed, rhoncus
          mauris. Sed feugiat dolor id ullamcorper laoreet. Etiam a sem quis
          orci bibendum finibus. In gravida luctus nisi quis blandit. Maecenas
          ornare interdum libero, eget cursus ipsum. Integer dapibus libero
          ante, et tincidunt nisi convallis eget. Donec a libero nisl. Nullam
          magna est, vehicula at luctus eget, finibus eget mi. Aenean interdum
          velit id nibh posuere porttitor.
        </div>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod
          dolor sed turpis lacinia suscipit. Integer porta vitae erat in
          blandit. In in ipsum semper, volutpat leo sed, scelerisque purus. Orci
          varius natoque penatibus et magnis dis parturient montes, nascetur
          ridiculus mus. Sed ex est, iaculis eu feugiat in, interdum id sapien.
          Etiam vitae laoreet leo, non viverra massa. Curabitur et facilisis
          libero, nec eleifend sem. Fusce ultrices a augue in imperdiet. Nulla
          bibendum, metus nec pulvinar bibendum, diam lectus pulvinar ipsum, ac
          ultrices tellus mi quis metus. Ut massa erat, dictum sollicitudin
          bibendum tincidunt, venenatis vel dolor. Donec quis nisl sit amet mi
          eleifend faucibus eget ut velit. Cras sollicitudin scelerisque magna
          et faucibus. Aliquam sit amet porta ipsum, sed hendrerit quam. Nunc
          iaculis massa ut metus convallis, at eleifend nunc tincidunt.
        </div>
        <div>
          Morbi varius hendrerit quam ut blandit. Morbi est lectus, consectetur
          in erat nec, maximus euismod justo. Morbi sollicitudin lectus sed
          augue lacinia ultricies. Maecenas euismod tellus id urna posuere,
          blandit bibendum elit convallis. Vivamus nisi nulla, bibendum at
          tristique eget, consequat nec velit. Sed non congue nibh. Quisque sit
          amet pharetra lorem, a ornare lacus. Praesent sit amet dui et nunc
          tristique mollis. Aliquam bibendum accumsan odio, in tincidunt massa
          interdum non. Integer dapibus, est id mattis gravida, dui velit
          finibus leo, quis malesuada lectus ante tempus dolor. Vivamus aliquet
          egestas neque ac porta. Integer eu diam iaculis est facilisis gravida.
          Sed sit amet tincidunt orci.
        </div>
        <div>
          Vivamus in odio consequat, malesuada diam ut, imperdiet lacus. Morbi
          eget augue enim. Nam at leo eleifend, lacinia ante sed, rhoncus
          mauris. Sed feugiat dolor id ullamcorper laoreet. Etiam a sem quis
          orci bibendum finibus. In gravida luctus nisi quis blandit. Maecenas
          ornare interdum libero, eget cursus ipsum. Integer dapibus libero
          ante, et tincidunt nisi convallis eget. Donec a libero nisl. Nullam
          magna est, vehicula at luctus eget, finibus eget mi. Aenean interdum
          velit id nibh posuere porttitor.
        </div>
      </div>
      <div className="sisteme-section" id="#waterproofing">
        SISTEME AICEA
      </div>
    </>
  );
};
