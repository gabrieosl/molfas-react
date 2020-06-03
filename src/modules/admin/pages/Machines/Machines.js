/* eslint-disable react/prop-types */
import React from 'react';
import ItemsList from '~/shared/components/ItemsList';

import Table from './MachinesTable';
import Card from './MachineCard';

const API_URL = '/api/machines';

export default function Machines({
  cards = { show: Table, update: Card, create: Card, view: Card },
  apiURL = API_URL,
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
