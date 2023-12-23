// turbulence constants
const desktopBaseFrequency = 0.7
const mobileBaseFrequency = 0.5
const numOctaves = 4
const seed = 15

// specular lighting constants
const surfaceScale = 6
const specularConstant = 1.3
const specularExponent = 20
const lightingColor = "#797979"

export function DesktopGrain() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      viewBox="0 0 700 700"
      opacity="1"
    >
      <defs>
        <filter
          id="nnnoise-filter"
          x="-20%"
          y="-20%"
          width="140%"
          height="140%"
          filterUnits="objectBoundingBox"
          primitiveUnits="userSpaceOnUse"
          colorInterpolationFilters="linearRGB"
        >
          <feTurbulence
            type="fractalNoise"
            baseFrequency={desktopBaseFrequency}
            numOctaves={numOctaves}
            seed={seed}
            stitchTiles="stitch"
            x="0%"
            y="0%"
            width="100%"
            height="100%"
            result="turbulence"
          ></feTurbulence>
          <feSpecularLighting
            surfaceScale={surfaceScale}
            specularConstant={specularConstant}
            specularExponent={specularExponent}
            lightingColor={lightingColor}
            x="0%"
            y="0%"
            width="100%"
            height="100%"
            in="turbulence"
            result="specularLighting"
          >
            <feDistantLight azimuth="3" elevation="95"></feDistantLight>
          </feSpecularLighting>
        </filter>
      </defs>
      <rect width="700" height="700" fill="transparent"></rect>
      <rect
        width="700"
        height="700"
        fill="#a1a1a1"
        filter="url(#nnnoise-filter)"
      ></rect>
    </svg>
  )
}

export function MobileGrain() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      viewBox="0 0 700 700"
      opacity="1"
      width={700}
      height={700}
    >
      <defs>
        <filter
          id="nnnoise-filter"
          x="-20%"
          y="-20%"
          width="140%"
          height="200%"
          filterUnits="objectBoundingBox"
          primitiveUnits="userSpaceOnUse"
          colorInterpolationFilters="linearRGB"
        >
          <feTurbulence
            type="fractalNoise"
            baseFrequency={mobileBaseFrequency}
            numOctaves={numOctaves}
            seed="15"
            stitchTiles="stitch"
            x="0%"
            y="0%"
            width="100%"
            height="100%"
            result="turbulence"
          ></feTurbulence>
          <feSpecularLighting
            surfaceScale={surfaceScale}
            specularConstant={specularConstant}
            specularExponent={specularExponent}
            lightingColor={lightingColor}
            x="0%"
            y="0%"
            width="100%"
            height="100%"
            in="turbulence"
            result="specularLighting"
          >
            <feDistantLight azimuth="3" elevation="95"></feDistantLight>
          </feSpecularLighting>
        </filter>
      </defs>
      <rect width="700" height="700" fill="transparent"></rect>
      <rect
        width="700"
        height="700"
        fill="#a1a1a1"
        filter="url(#nnnoise-filter)"
      ></rect>
    </svg>
  )
}
