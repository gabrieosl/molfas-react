/* eslint-disable react/prop-types */
import React from 'react';

import NavBar from '~/modules/admin/components/NavBar';
import AdminHeader from '~/modules/admin/components/AdminHeader';

import Products from './Products';

import { MainAdminPageContainer } from '~/shared/styles/admin';

const TITLE = 'produtos';

export default function ProductsPage() {
  return (
    <>
      <NavBar />
      <AdminHeader selected={TITLE} />
      <MainAdminPageContainer>
        <Products showTitle search defaultCreateButton readOnly={false} />
      </MainAdminPageContainer>
    </>
  );
}
