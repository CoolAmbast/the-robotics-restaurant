import React from 'react'

interface RoboLogoProps extends React.SVGProps<SVGSVGElement> {
  className?: string
  size?: number | string
  showRing?: boolean
  variant?: 'gold' | 'accent' | 'adaptive'
}

/**
 * High-fidelity redrawn vector of the official Robo Logo from src/assets/robo_logo.svg
 * Precision-framed in a 1:1 square viewBox [100, 170, 664, 664] to ensure crystal-clear
 * visibility in all themes, favicons, and screen resolutions.
 */
export const RoboLogo: React.FC<RoboLogoProps> = ({
  className = 'w-10 h-10',
  size,
  showRing = true,
  variant = 'adaptive',
  ...props
}) => {
  // Theme-adaptive color tokens
  const strokeColor =
    variant === 'gold'
      ? '#e0b177'
      : variant === 'accent'
      ? '#8fba5d'
      : 'var(--tertiary, #e0b177)'

  const accentColor =
    variant === 'gold'
      ? '#8fba5d'
      : variant === 'accent'
      ? '#a3e635'
      : 'var(--accent, #8fba5d)'

  return (
    <svg
      viewBox="100 170 664 664"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={size ? { width: size, height: size } : undefined}
      aria-label="Robotics Restaurant Emblem"
      {...props}
    >
      <defs>
        {/* Subtle radial emblem backdrop so the logo is always high-contrast on any surface */}
        <radialGradient
          id="roboEmblemBg"
          cx="432"
          cy="504.45"
          r="325"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#2b1a0e" stopOpacity="0.95" />
          <stop offset="70%" stopColor="#1a0f07" stopOpacity="0.98" />
          <stop offset="100%" stopColor="#100903" stopOpacity="1" />
        </radialGradient>

        {/* Visor internal glow */}
        <linearGradient id="visorGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#0d1b0d" />
          <stop offset="50%" stopColor="#1a331a" />
          <stop offset="100%" stopColor="#0d1b0d" />
        </linearGradient>
      </defs>

      {/* Circular Emblem Base Disc */}
      <ellipse
        cx="432"
        cy="504.45"
        rx="320.61"
        ry="328.69"
        fill="url(#roboEmblemBg)"
      />

      {/* Outer Golden / Theme Ring */}
      {showRing && (
        <>
          <ellipse
            cx="432"
            cy="504.45"
            rx="320.61"
            ry="328.69"
            stroke={strokeColor}
            strokeWidth="11"
            strokeMiterlimit="10"
          />
          <ellipse
            cx="432"
            cy="504.45"
            rx="308"
            ry="316"
            stroke={accentColor}
            strokeWidth="2.5"
            strokeOpacity="0.6"
            strokeDasharray="6 6"
          />
        </>
      )}

      {/* Chef Hat Top & Folds */}
      <g stroke={strokeColor} strokeLinecap="round" strokeLinejoin="round">
        {/* Chef Hat Cloud Puff */}
        <path
          d="M504.3,290.04c0,13.72-11.23,25.06-25.83,26.89h-8.31c-.42-.05-.83-.05-1.21,0h-24.63c-7.41-.02-4.63-.29-9.01,0-.53.03-1.17.08-1.94.13-7.1.49-33.08-.13-41.26-.13-16.56,0-30.62-14.82-30.62-29.82s13.43-27.16,29.99-27.16c2.83,0,5.57.35,8.17,1.02,6.11-9.11,19.76-15.46,35.63-15.46,16.99,0,31.44,7.28,36.81,17.44.74-.05,1.48-.07,2.23-.07,16.57,0,29.99,12.15,29.99,27.16Z"
          fill="#fdf8f3"
          fillOpacity="0.08"
          strokeWidth="6"
        />

        {/* Chef Hat Band */}
        <path
          d="M482.88,316.93v22.21h-95.21v-22.21h4.44c.55,0,1.18,0,1.88,0s1.46.02,2.29.02h0c.38,0,.77,0,1.17.02.34,0,.7,0,1.06.02.38,0,.79,0,1.2.02h.41c.56,0,1.13.02,1.71.02.94.02,1.9.03,2.89.05h0c1.57.02,3.2.04,4.86.06.94.02,1.9.02,2.85.04,3.49.04,6.99.07,10.15.08h0c2.24,0,4.31,0,6.1-.03.41,0,.8-.02,1.18-.02.81-.02,1.55-.04,2.2-.07.31,0,.59-.02.85-.05.15,0,.29-.02.42-.02.78-.05,1.41-.1,1.94-.13h34.85c1.36.18,2.75.26,4.16.26s2.8-.08,4.16-.26h4.42Z"
          fill="#fdf8f3"
          fillOpacity="0.12"
          strokeWidth="6"
        />

        {/* Hat Pleats / Vertical Creases */}
        <path d="M401.24,284.59c-8.1,15.76-.18,31.96,5.5,33.6" strokeWidth="2.5" />
        <path d="M401.25,285.44c-1.28,15.59,4.98,28.92,14.02,29.81" strokeWidth="2.5" />
        <path d="M420.44,291.59c-3.2,12.04-.07,24.41,2.17,25.66" strokeWidth="2.5" />
        <path d="M420.45,292.25c-.51,11.91,1.97,22.09,5.54,22.77" strokeWidth="2.5" />
        <path d="M451.99,291.59c3.2,12.04.07,24.41-2.17,25.66" strokeWidth="2.5" />
        <path d="M451.99,292.25c.51,11.91-1.97,22.09-5.54,22.77" strokeWidth="2.5" />
        <path d="M471.64,284.59c8.1,15.76.18,31.96-5.5,33.6" strokeWidth="2.5" />
        <path d="M471.63,285.44c1.28,15.59-4.98,28.92-14.02,29.81" strokeWidth="2.5" />
      </g>

      {/* Robot Ears / Antennas */}
      <g stroke={accentColor} strokeWidth="6" strokeLinecap="round" fill="none">
        <path d="M372.46,359.31c-3.85,1.37-8.63.66-11.47,4.07-2.3,2.77-2.12,6.64-2.12,10.14,0,6.65,0,13.3,0,19.95,0,3.65.4,7.32,1.95,10.67,1.84,3.98,8.4,5.65,13.28,6.58" />
        <path d="M496.25,357.87c3.85,1.37,8.98.4,11.81,3.81,2.3,2.77,2.12,6.64,2.12,10.14,0,6.65,0,13.3,0,19.95,0,3.65-.4,7.32-1.95,10.67-1.84,3.98-7.92,6.16-12.8,7.09" />
      </g>

      {/* Robot Head Shell */}
      <path
        d="M476.39,339.15h-83.74c-11.73,1.77-20.82,12.83-20.82,26.1v34.31c0,14.5,10.86,26.36,24.14,26.36h77.1c13.28,0,24.14-11.86,24.14-26.36v-34.31c0-13.27-9.1-24.33-20.82-26.1Z"
        fill="#1e1309"
        stroke={strokeColor}
        strokeWidth="6"
        strokeMiterlimit="10"
      />

      {/* Robot Face Screen / Visor */}
      <path
        d="M478.58,367.4v30.01c0,5.04-3.78,9.17-8.4,9.17h-71.31c-4.62,0-8.4-4.13-8.4-9.17v-30.01c0-5.04,3.78-9.17,8.4-9.17h71.31c4.62,0,8.4,4.13,8.4,9.17Z"
        fill="url(#visorGrad)"
        stroke={accentColor}
        strokeWidth="5"
        strokeMiterlimit="10"
      />

      {/* Robot Glowing Eyes */}
      <ellipse cx="407.58" cy="382.41" rx="9.4" ry="9.75" fill={accentColor} />
      <ellipse cx="462.01" cy="382.41" rx="9.4" ry="9.75" fill={accentColor} />
      <ellipse cx="409" cy="380" rx="3.5" ry="3.5" fill="#ffffff" />
      <ellipse cx="463.5" cy="380" rx="3.5" ry="3.5" fill="#ffffff" />

      {/* Robot Neck */}
      <rect
        x="421.09"
        y="428.35"
        width="31.46"
        height="28.95"
        fill="#2b1a0e"
        stroke={strokeColor}
        strokeWidth="6"
        strokeMiterlimit="10"
      />

      {/* Robot Bowtie / Collar Joint */}
      <polygon
        points="436.88 489.5 456.76 473.56 456.59 461.66 417.17 461.66 416.67 474.42 436.88 489.5"
        fill={accentColor}
        stroke={strokeColor}
        strokeWidth="5"
        strokeLinejoin="round"
      />

      {/* Robot Hands / Shoulder Joints */}
      <polygon
        points="294.86 500.66 297.23 529.88 317.13 542.9 334.66 526.7 332.3 497.47 312.4 484.45 294.86 500.66"
        fill="#2b1a0e"
        stroke={strokeColor}
        strokeWidth="6"
      />
      <polygon
        points="533.11 492.06 528.09 520.93 544.07 538.75 565.07 527.7 570.09 498.83 554.11 481.01 533.11 492.06"
        fill="#2b1a0e"
        stroke={strokeColor}
        strokeWidth="6"
      />

      {/* Arms */}
      <rect
        x="258.4"
        y="542.55"
        width="34.41"
        height="124.98"
        transform="translate(218.95 -57.4) rotate(19.6)"
        fill="#2b1a0e"
        stroke={strokeColor}
        strokeWidth="6"
      />
      <polygon
        points="285.75 513.68 276.38 551.58 289.91 556.4 285.75 513.68"
        fill="#1a0f07"
        stroke={strokeColor}
        strokeWidth="6"
      />
      <rect
        x="571.19"
        y="538.76"
        width="34.41"
        height="124.98"
        transform="translate(1344.3876 970.2626) rotate(160.3989)"
        fill="#2b1a0e"
        stroke={strokeColor}
        strokeWidth="6"
      />
      <polygon
        points="578.25 509.88 587.62 547.78 574.09 552.6 578.25 509.88"
        fill="#1a0f07"
        stroke={strokeColor}
        strokeWidth="6"
      />

      {/* Robot Torso / Suit Left */}
      <polygon
        points="425.19 496.22 405.41 516.28 405.41 662.63 356.1 662.63 356.1 598.64 354.72 595.65 348.48 584.85 339.3 567.69 326.96 545.52 344.59 529.08 344.59 496.8 344.31 496.99 332.03 483.34 344.59 465.43 344.59 464.7 405.41 464.7 405.41 478.42 406.92 476.87 425.19 496.22"
        fill="#1a0f07"
        stroke={strokeColor}
        strokeWidth="6"
      />

      {/* Robot Torso / Suit Right & Buttons */}
      <path
        d="M521.07,526.53v-31.6l10.97-15.93-10.66-15.22-1.07.86v-1.98h-56.13v15.84l-47.38,44.84,1.32,2.01h-1.96v138.5h94.01v-70.03l27.76-50.66-16.87-16.62Z"
        fill="#24160c"
        stroke={strokeColor}
        strokeWidth="5"
      />

      {/* Glowing Suit Buttons */}
      <circle cx="435" cy="547.69" r="8.8" fill={accentColor} stroke={strokeColor} strokeWidth="2.5" />
      <circle cx="435" cy="583.67" r="8.8" fill={accentColor} stroke={strokeColor} strokeWidth="2.5" />
      <circle cx="435" cy="617.35" r="8.8" fill={accentColor} stroke={strokeColor} strokeWidth="2.5" />
      <circle cx="435.27" cy="645.95" r="8.8" fill={accentColor} stroke={strokeColor} strokeWidth="2.5" />

      {/* Pocket Square Accent */}
      <rect
        x="470.68"
        y="509.02"
        width="31.7"
        height="8.37"
        fill={strokeColor}
        stroke={strokeColor}
        strokeWidth="2"
      />
    </svg>
  )
}

export default RoboLogo
