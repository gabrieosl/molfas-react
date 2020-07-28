/* eslint-disable react/prop-types */
import React from 'react';
import ItemsList from '~/components/ItemsList';

import Table from './SubProductsTable';
import Card from './SubProductCard';

export default function Subproduct({
  cards = { show: Table, update: Card, create: Card, view: Card },
  apiURL = '',
  showTitle = false,
  search = false,
  defaultCreateButton = false,
  readOnly = true,
  aggregate = false,
  children,
  ...rest
}) {
  return (
    <ItemsList
      cards={cards}
      apiURL={apiURL}
      showTitle={showTitle}
      search={search}
      defaultCreateButton={defaultCreateButton}
      readOnly={readOnly}
      aggregate={aggregate}
      {...rest}
    >
      {children}
    </ItemsList>
  );
}
