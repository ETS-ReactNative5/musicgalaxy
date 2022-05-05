import React from 'react';

import {TEXT_STYLE_VARIANTS, TEXT_VARIANTS} from './styled';

export const Text = ({variant, ...rest}) => {
  const TextComponent = TEXT_STYLE_VARIANTS[variant || 'body'];
  return <TextComponent {...rest} />;
};

Text.VARIANTS = TEXT_VARIANTS;
