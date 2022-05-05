import { object, string } from 'prop-types';

export const propTypes = {
  insets: object,
  bannerTitle: string,
  bannerImageSrc: string,
};

export const defaultProps = {
  insets: {},
  bannerImageSrc: '',
};
