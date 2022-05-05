import { string, node, bool } from 'prop-types';

export const propTypes = {
  bannerImageSrc: string,
  children: node.isRequired,
  title: string,
  showBackButton: bool,

};

export const defaultProps = {
  bannerImageSrc: '',
  title: '',
  showBackButton: true
};
