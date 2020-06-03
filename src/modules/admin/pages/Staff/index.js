/* eslint-disable react/prop-types */
import React from 'react';

import NavBar from '~/modules/admin/components/NavBar';
import AdminHeader from '~/modules/admin/components/AdminHeader';

import Staff from './Staff';

import { MainAdminPageContainer } from '~/shared/styles/admin';

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
