/* eslint-disable react/prop-types */
import React from 'react';

import NavBar from '~/modules/admin/components/NavBar';
import AdminHeader from '~/modules/admin/components/AdminHeader';

import RawMaterial from './RawMaterials';

import { MainAdminPageContainer } from '~/shared/styles/admin';

const TITLE = 'matéria prima';

export default function RawMaterialsPage() {
  return (
    <>
      <NavBar />
      <AdminHeader selected={TITLE} />
      <MainAdminPageContainer>
        <RawMaterial showTitle search defaultCreateButton readOnly={false} />
      </MainAdminPageContainer>
    </>
  );
}
