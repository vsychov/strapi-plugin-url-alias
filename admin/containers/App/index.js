/**
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { CheckPagePermissions } from '@strapi/helper-plugin';

import pluginPermissions from '../../permissions';
import ConfigPage from '../ConfigPage';

const App = () => {
  return (
    <CheckPagePermissions permissions={pluginPermissions.settings}>
      <ConfigPage />
    </CheckPagePermissions>
  );
};

export default App;