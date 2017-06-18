import React from 'react';
import Enum from '../Enum.jsx';
import Link from '../containers/Link.jsx';

const Footer = () => (
  <p>
    Show:
    {' '}
    <Link filter={Enum.FILTER_SHOW_ALL}>
      All!
    </Link>
    {', '}
    <Link filter={Enum.FILTER_SHOW_ACTIVE}>
      Active
    </Link>
    {', '}
    <Link filter={Enum.FILTER_SHOW_COMPLETED}>
      Completed
    </Link>
  </p>
);

export default Footer;