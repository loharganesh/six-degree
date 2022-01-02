import * as React from 'react';
import { memo } from 'react';
import { ICONS } from './icon.registry';

const IconComp = (props) => {
  const { name = '', color = '#4A4D55', size = 28 } = props;
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d={ICONS[name]}
        fill={color}
      />
    </svg>
  );
};

export const Icon = memo(IconComp);
