/* eslint-disable react/prop-types */
import React, { useMemo } from 'react';
import { MdPlaylistAdd } from 'react-icons/md';

import SubProducts from '../SubProducts/SubProducts';
import SubProductsTable from './SubProductsTable';
import SubProductsCard from './SubProductCard';
import ItemsList from '~/shared/components/ItemsList';
import ImagesCard from './ImagesCard';

import { CardContainer, FieldActive } from '~/shared/styles/cards';

export default function Card({
  currentCard = {},
  onCreate = () => null,
  onUpdate = () => null,
  onCurrentCardItemChange = () => null,
  onCurrentCardItemActiveChange = () => null,
  refreshParent,
  refresh,
}) {
  const { item = {} } = currentCard;

  const readOnly = useMemo(() => currentCard.type === 'view', [currentCard]);

  const submitFunction = useMemo(() => {
    if (currentCard.type === 'create') {
      return onCreate;
    }
    if (currentCard.type === 'update') {
      return onUpdate;
    }
    return () => null;
  }, [currentCard, onCreate, onUpdate]);

  return (
    <CardContainer readOnly={!readOnly}>
      {item.id && (
        <>
          <strong>Imagens:</strong>
          <div className="subcard-container">
            <ItemsList
              cards={{ show: ImagesCard, create: () => null }}
              apiURL={`/api/products/${item.id}/pictures`}
              readOnly={readOnly}
              currentProduct={item}
              refreshParent={refresh}
            />
          </div>
        </>
      )}

      <strong>Nome:</strong>
      <input
        type="text"
        readOnly={readOnly}
        name="name"
        value={item.name}
        onChange={onCurrentCardItemChange}
      />
      <strong>Descrição:</strong>
      <textarea
        readOnly={readOnly}
        name="description"
        value={item.description}
        onChange={onCurrentCardItemChange}
      />
      <strong>Preço:</strong>
      <input
        type="text"
        readOnly={readOnly}
        name="price"
        value={item.price}
        onChange={onCurrentCardItemChange}
      />
      {item.id && (
        <>
          <strong>Sub-produtos: </strong>
          <div className="subcard-container">
            <SubProducts
              cards={{
                show: SubProductsTable,
                create: SubProductsCard,
                new: () => (
                  <SubProducts
                    cards={{ show: SubProductsTable, view: SubProductsCard }}
                    apiURL="/api/subproducts"
                    aggregate={`/api/products/${item.id}/subproducts`}
                    readOnly
                    refreshParent={refresh}
                  />
                ),
              }}
              apiURL={`/api/products/${item.id}/subproducts`}
              defaultCreateButton
              readOnly={readOnly}
              refreshParent={refreshParent}
            >
              <button className="add-cancel" type="button" cardType="new">
                <MdPlaylistAdd />
              </button>
            </SubProducts>
          </div>
        </>
      )}
      {item.id && (
        <FieldActive>
          <small>{item.active ? 'Produto ativo' : 'Produto inativo'}</small>
          {!readOnly ? (
            <button
              type="button"
              className="active"
              onClick={onCurrentCardItemActiveChange}
            >
              {item.active ? 'inativar' : 'ativar'}
            </button>
          ) : null}
        </FieldActive>
      )}
      {!readOnly && (
        <button
          className="submit-action-button"
          type="button"
          onClick={() => submitFunction(item)}
        >
          {item.id ? 'Atualizar' : 'Criar'}
        </button>
      )}
    </CardContainer>
  );
}
