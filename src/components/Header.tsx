import React from 'react';
import { useTranslation } from 'react-i18next';

function Header({ titleKey }) {
  const { t: translate } = useTranslation();

  return <header>{translate('greet')}</header>;
}

export default Header;
