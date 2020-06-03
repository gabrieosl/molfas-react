/* eslint-disable react/prop-types */
import React from 'react';

import NavBar from '~/modules/admin/components/NavBar';
import AdminHeader from '~/modules/admin/components/AdminHeader';

import Molds from './Molds';

import { MainAdminPageContainer } from '~/shared/styles/admin';

const TITLE = 'moldes';

export default function MoldsPage() {
  return (
    <>
      <NavBar />
      <AdminHeader selected={TITLE} />
      <MainAdminPageContainer>
        <Molds showTitle search defaultCreateButton readOnly={false} />
      </MainAdminPageContainer>
    </>
  );
}
