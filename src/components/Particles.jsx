import React, { useCallback, useMemo } from "react";
import Tsparticles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

// Adapter keeping the legacy react-particles-js `params` shape
// while rendering with react-tsparticles v2.
export default function Particles({ canvasClassName, params = {} }) {
  const init = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const options = useMemo(() => {
    const { particles = {}, interactivity, fpsLimit, retina_detect } = params;
    const { number, lineLinked, move, size, opacity } = particles;
    const out = { particles: {} };
    if (number) {
      out.particles.number = {
        value: number.value,
        density: number.density && {
          enable: number.density.enable,
          area: number.density.value_area,
        },
      };
    }
    if (lineLinked) out.particles.links = lineLinked;
    if (move) out.particles.move = { enable: true, ...move };
    if (size) out.particles.size = size;
    if (opacity?.anim) {
      out.particles.opacity = {
        animation: {
          enable: opacity.anim.enable,
          speed: opacity.anim.speed,
          minimumValue: opacity.anim.opacity_min,
        },
      };
    }
    if (interactivity) {
      out.interactivity = {
        detectsOn: interactivity.detectsOn,
        events: {
          onHover: interactivity.events?.onHover,
          resize: interactivity.events?.resize,
        },
        modes: interactivity.modes,
      };
    }
    if (fpsLimit) out.fpsLimit = fpsLimit;
    if (retina_detect) out.detectRetina = true;
    return out;
  }, [params]);

  return (
    <Tsparticles
      init={init}
      options={options}
      className={canvasClassName}
    />
  );
}
