/* eslint-disable react/prop-types */
import React from 'react';

import NavBar from '~/components/admin/NavBar';
import AdminHeader from '~/components/admin/AdminHeader';

import Products from './Products';

import { MainAdminPageContainer } from '~/styles/admin';

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
