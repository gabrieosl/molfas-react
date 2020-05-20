/* eslint-disable react/prop-types */
import React from 'react';

import NavBar from '~/components/admin/NavBar';
import AdminHeader from '~/components/admin/AdminHeader';

import RawMaterial from './RawMaterials';

import { MainAdminPageContainer } from '~/styles/admin';

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
