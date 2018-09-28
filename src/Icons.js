import React from 'react';

export const ArrowUp = () => (
  <svg
    height="22"
    width="22"
    viewBox="0 0 22 22"
    version="1.0"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g transform="scale(0.03)">
      <g transform="translate(20 28.571)">
        <path
          d="m-20 670.72c0-1.86 349.99-699.99 350.57-699.29 1.95 2.354 350.07 699.46 349.43 699.72-0.42 0.17-79.3-33.69-175.29-75.25l-174.52-75.55-174.25 75.54c-95.828 41.55-174.62 75.54-175.09 75.54-0.467 0-0.85-0.32-0.85-0.71z"
          fill="#0f0"
        />
      </g>
    </g>
  </svg>
);

export const ArrowDown = () => (
  <svg
    height="22"
    width="22"
    viewBox="0 0 22 22"
    xmlns="http://www.w3.org/2000/svg"
    version="1.0"
  >
    <g transform="scale(0.03)">
      <g transform="translate(20,28.57142)">
        <path
          d="M 680.00001,-27.858649 C 680.00001,-26.000219 330.00773,672.12987 329.42789,671.42805 C 327.4824,669.07328 -20.639627,-28.032809 -19.999107,-28.291219 C -19.580737,-28.459999 59.298143,5.3997002 155.28729,46.952552 L 329.81303,122.50321 L 504.05513,46.965887 C 599.8883,5.4203742 678.68037,-28.571419 679.14863,-28.571419 C 679.61689,-28.571419 680.00001,-28.250669 680.00001,-27.858649 z "
          fill="#ff0000"
        />
      </g>
    </g>
  </svg>
);

export const Empty = () => (
  <svg
    height="22"
    width="22"
    viewBox="0 0 22 22"
    xmlns="http://www.w3.org/2000/svg"
    version="1.0"
  >
    <g>
      <path />
    </g>
  </svg>
);

export const Loader = () => (
  <svg
    width="135"
    height="140"
    viewBox="0 0 135 140"
    xmlns="http://www.w3.org/2000/svg"
    fill="#fff"
  >
    <rect y="10" width="15" height="120" rx="6">
      <animate
        attributeName="height"
        begin="0.5s"
        dur="1s"
        values="120;110;100;90;80;70;60;50;40;140;120"
        calcMode="linear"
        repeatCount="indefinite"
      />
      <animate
        attributeName="y"
        begin="0.5s"
        dur="1s"
        values="10;15;20;25;30;35;40;45;50;0;10"
        calcMode="linear"
        repeatCount="indefinite"
      />
    </rect>
    <rect x="30" y="10" width="15" height="120" rx="6">
      <animate
        attributeName="height"
        begin="0.25s"
        dur="1s"
        values="120;110;100;90;80;70;60;50;40;140;120"
        calcMode="linear"
        repeatCount="indefinite"
      />
      <animate
        attributeName="y"
        begin="0.25s"
        dur="1s"
        values="10;15;20;25;30;35;40;45;50;0;10"
        calcMode="linear"
        repeatCount="indefinite"
      />
    </rect>
    <rect x="60" width="15" height="140" rx="6">
      <animate
        attributeName="height"
        begin="0s"
        dur="1s"
        values="120;110;100;90;80;70;60;50;40;140;120"
        calcMode="linear"
        repeatCount="indefinite"
      />
      <animate
        attributeName="y"
        begin="0s"
        dur="1s"
        values="10;15;20;25;30;35;40;45;50;0;10"
        calcMode="linear"
        repeatCount="indefinite"
      />
    </rect>
    <rect x="90" y="10" width="15" height="120" rx="6">
      <animate
        attributeName="height"
        begin="0.25s"
        dur="1s"
        values="120;110;100;90;80;70;60;50;40;140;120"
        calcMode="linear"
        repeatCount="indefinite"
      />
      <animate
        attributeName="y"
        begin="0.25s"
        dur="1s"
        values="10;15;20;25;30;35;40;45;50;0;10"
        calcMode="linear"
        repeatCount="indefinite"
      />
    </rect>
    <rect x="120" y="10" width="15" height="120" rx="6">
      <animate
        attributeName="height"
        begin="0.5s"
        dur="1s"
        values="120;110;100;90;80;70;60;50;40;140;120"
        calcMode="linear"
        repeatCount="indefinite"
      />
      <animate
        attributeName="y"
        begin="0.5s"
        dur="1s"
        values="10;15;20;25;30;35;40;45;50;0;10"
        calcMode="linear"
        repeatCount="indefinite"
      />
    </rect>
  </svg>
);
