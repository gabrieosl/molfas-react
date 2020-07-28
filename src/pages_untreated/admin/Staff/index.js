/* eslint-disable react/prop-types */
import React from 'react';

import NavBar from '~/components/admin/NavBar';
import AdminHeader from '~/components/admin/AdminHeader';

import Staff from './Staff';

import { MainAdminPageContainer } from '~/styles/admin';

const TITLE = 'staff';

export default function StaffPage() {
  return (
    <>
      <NavBar />
      <AdminHeader selected={TITLE} />
      <MainAdminPageContainer>
        <Staff showTitle search defaultCreateButton readOnly={false} />
      </MainAdminPageContainer>
    </>
  );
}
