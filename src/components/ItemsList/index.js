/* eslint-disable react/prop-types */
import React, { useState, useEffect, useMemo } from 'react';
import { Redirect } from 'react-router-dom';
import { MdAdd } from 'react-icons/md';
import { toast } from 'react-toastify';

import SearchBar from '~/components/admin/SearchBar';

import {
  ItemsListHeader,
  ItemsListHeaderButtons,
  CreateOrCancelButton,
} from './styles';

import apiDefault from '~/services/apiAdmin';

export default function ItemsList({
  cards,
  apiURL = '',
  showTitle = false,
  search = false,
  defaultCreateButton = false,
  aggregate = false,
  readOnly = true,
  refreshParent = () => null,
  api = apiDefault,
  children,
  ...rest
}) {
  const [items, setItems] = useState([]);
  const [currentCard, setCurrentCard] = useState({
    type: 'show',
    title: 'Lista',
  });

  const Card = useMemo(
    () => (currentCard.type && cards[currentCard.type]) || cards.show,
    [currentCard, cards]
  );
  const hasCreateCard = useMemo(() => !!cards.create, [cards]);
  const hasUpdateCard = useMemo(() => !!cards.update, [cards]);
  const hasViewCard = useMemo(() => !!cards.view, [cards]);

  const isDefaultCard = useMemo(
    () => !currentCard.type || currentCard.type === 'show',
    [currentCard]
  );

  async function getItemsFromServer() {
    const response = await api.get(apiURL);
    if (response.status === 401) {
      return <Redirect to="/admin/signin" />;
    }
    setItems(
      response.data.map(data => ({
        data,
        filtered: true,
      }))
    );
    return 0;
  }

  function filterItems(filter = '') {
    filter = filter.toUpperCase();
    setItems(prev =>
      prev.map(item => ({
        ...item,
        filtered: item.data.name.toUpperCase().includes(filter),
      }))
    );
    setCurrentCard(prev => ({
      ...prev,
      title: filter ? `Itens que contêm: ${filter}` : 'Lista',
    }));
  }

  async function createItemToServer(item) {
    try {
      const response = await api.post(apiURL, item);
      if (response.status === 201) {
        toast.success(`Item ${response.data.name} criado`);
        setCurrentCard({ type: currentCard.nextCard || 'show' });
        getItemsFromServer();
        refreshParent();
      }
    } catch (err) {
      toast.error('Algo deu errado. Tente novamente');
    }
  }

  async function updateItemToServer(item) {
    try {
      const response = await api.put(`${apiURL}/${item.id}`, item);
      if (response.status === 200) {
        toast.success('Sucesso');
        setCurrentCard({ type: 'show' });
        getItemsFromServer();
        refreshParent();
      }
    } catch (err) {
      toast.error('Algo deu errado. Tente novamente');
    }
  }

  async function deleteItemFromServer(item) {
    // eslint-disable-next-line no-alert
    if (!window.confirm(`Confirma a exclusão de ${item.name}`)) {
      return;
    }
    try {
      await api.delete(`${apiURL}/${item.id}`);
      toast.success(`${item.name} removido`);
    } catch (err) {
      toast.error(`Erro ao deletar ${item.name}`);
    }
    getItemsFromServer();
    refreshParent();
  }

  async function aggregateItemsToServer(item) {
    try {
      const response = await api.post(aggregate, item);
      if (response.status === 201) {
        toast.success(`Item ${item.name} associado`);
        getItemsFromServer();
        refreshParent();
      }
    } catch (err) {
      toast.error('Algo deu errado. Tente novamente');
    }
  }

  function handleCreateOrCancelButton() {
    console.log(currentCard);
    setCurrentCard({
      type: currentCard.type === 'show' ? 'create' : 'show',
      readOnly: currentCard.type === 'show' ? true : readOnly,
      title: currentCard.type === 'show' ? 'Criar novo' : 'Lista',
    });
  }

  function handlecurrentCardItem(e) {
    setCurrentCard({
      ...currentCard,
      item: {
        ...currentCard.item,
        [e.target.name]: e.target.value,
      },
    });
  }

  function handleCurrentCardItemActive() {
    setCurrentCard(prev => ({
      ...prev,
      item: {
        ...prev.item,
        active: !prev.item.active,
      },
    }));
  }

  useEffect(() => {
    getItemsFromServer();
    // eslint-disable-next-line
  }, []);

  function addOnClickEventToChildrenButton(Child) {
    return (
      <Child.type
        {...Child.props}
        onClick={() => setCurrentCard({ type: Child.props.cardType, readOnly })}
      />
    );
  }
  const buttons =
    children &&
    (children.length
      ? children.map(child => addOnClickEventToChildrenButton(child))
      : addOnClickEventToChildrenButton(children));

  return (
    <>
      <ItemsListHeader>
        {showTitle && <strong className="title">{currentCard.title}</strong>}
        <ItemsListHeaderButtons>
          {isDefaultCard && search && <SearchBar onChange={filterItems} />}
          {!readOnly && isDefaultCard && buttons}
          {((!readOnly && defaultCreateButton && isDefaultCard) ||
            !isDefaultCard) && (
              <CreateOrCancelButton
                isDefaultCard={isDefaultCard}
                onClick={handleCreateOrCancelButton}
              >
                <MdAdd />
              </CreateOrCancelButton>
            )}
        </ItemsListHeaderButtons>
      </ItemsListHeader>

      <Card
        items={items}
        currentCard={currentCard}
        setCurrentCard={setCurrentCard}
        onCurrentCardItemChange={handlecurrentCardItem}
        onCurrentCardItemActiveChange={handleCurrentCardItemActive}
        onCreate={!readOnly && hasCreateCard && createItemToServer}
        onView={hasViewCard}
        onUpdate={!readOnly && hasUpdateCard && updateItemToServer}
        onDelete={!readOnly && deleteItemFromServer}
        onAggregate={aggregate && aggregateItemsToServer}
        apiURL={apiURL} // TODO REMOVE THIS
        refreshParent={refreshParent}
        refresh={getItemsFromServer}
        {...rest}
      />
    </>
  );
}
