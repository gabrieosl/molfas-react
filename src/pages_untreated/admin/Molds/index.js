/* eslint-disable react/prop-types */
import React from 'react';

import NavBar from '~/components/admin/NavBar';
import AdminHeader from '~/components/admin/AdminHeader';

import Molds from './Molds';

import { MainAdminPageContainer } from '~/styles/admin';

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
