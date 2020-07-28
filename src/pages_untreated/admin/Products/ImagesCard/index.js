/* eslint-disable react/prop-types */
import React from 'react';
import { MdDelete, MdAdd, MdDone } from 'react-icons/md';

import api from '~/services/api';

import { Container, Image } from './styles';

export default function ImagesCard({
  items,
  onDelete,
  onCreate,
  apiURL,
  currentProduct,
  refreshParent,
  refresh,
}) {
  async function handleChange(e) {
    const data = new FormData();

    data.append('file', e.target.files[0]);

    await api.post(apiURL, data);

    refreshParent();
    refresh();
  }

  return (
    <Container>
      {items.map(image => (
        <Image>
          <img src={image.data.url} alt="" />
          {currentProduct.defaultImage &&
          currentProduct.defaultImage.path === image.data.path ? (
            <div className="default">
              <MdDone />
            </div>
          ) : (
            <>
              <button
                type="button"
                className="set-default"
                onClick={async () => {
                  await api.post(
                    `api/products/${currentProduct.id}/defaultpicture/${image.data.id}`
                  );
                  currentProduct.defaultImage = image.data;
                  refreshParent();
                  refresh();
                }}
              >
                Padrão
              </button>
              {onDelete && (
                <button
                  type="button"
                  className="delete-image"
                  onClick={() => onDelete({ ...image.data, name: 'image' })}
                >
                  <MdDelete />
                </button>
              )}
            </>
          )}
        </Image>
      ))}
      {onCreate && (
        <label htmlFor="add-image-button">
          <MdAdd />
          <input
            type="file"
            id="add-image-button"
            accept="image/*"
            onChange={handleChange}
            multiple
          />
        </label>
      )}
    </Container>
  );
}
