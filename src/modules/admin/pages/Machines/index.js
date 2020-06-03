/* eslint-disable react/prop-types */
import React from 'react';

import NavBar from '~/modules/admin/components/NavBar';
import AdminHeader from '~/modules/admin/components/AdminHeader';

import Machines from './Machines';

import { MainAdminPageContainer } from '~/shared/styles/admin';

const TITLE = 'máquinas';

export default function MachinesPage() {
  return (
    <>
      <NavBar />
      <AdminHeader selected={TITLE} />
      <MainAdminPageContainer>
        <Machines showTitle search defaultCreateButton readOnly={false} />
      </MainAdminPageContainer>
    </>
  );
}
