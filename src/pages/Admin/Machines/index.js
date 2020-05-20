/* eslint-disable react/prop-types */
import React from 'react';

import NavBar from '~/components/admin/NavBar';
import AdminHeader from '~/components/admin/AdminHeader';

import Machines from './Machines';

import { MainAdminPageContainer } from '~/styles/admin';

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
