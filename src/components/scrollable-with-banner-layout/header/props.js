import { string, bool, object } from 'prop-types';

export const propTypes = {
  title: string,
  headerTitleStyles: object,
  showBackButton: bool,
};

export const defaultProps = {
  title: '',
  headerTitleStyles: {},
  showBackButton: true,
};
