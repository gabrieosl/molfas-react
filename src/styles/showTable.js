import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;
  border-spacing: 0 15px;
  border: 0;

  img {
    height: 50px;
    width: 50px;
    object-fit: cover;
    border-radius: 50%;
    margin-right: 5px;
  }

  th {
    text-align: left;
    color: #666;
    font-size: 16px;
  }

  tr {
    &.active,
    &.type-a {
      background: #eee;
    }

    &.type-b {
      background: #3f72af33;
    }

    &.inactive {
      opacity: 0.7;
      background: repeating-linear-gradient(
        -45deg,
        #fff,
        #fff 5px,
        #ccc 5px,
        #ccc 10px
      ) !important;
    }
  }

  td {
    padding: 10px 5px;

    &:first-child {
      border-radius: 5px 0 0 5px;
      padding-left: 10px;
    }

    &:last-child {
      border-radius: 0 5px 5px 0;
      padding-right: 10px;
    }
  }

  p {
    color: #112d4e;
    display: flex;
    align-items: center;
    font-size: 16px;
    line-height: 1.5em;
    max-height: 3em;
    overflow: hidden;
    text-overflow: ellipsis;

    &.title1 {
      font-weight: bold;
      font-size: 18px;
    }

    &.active {
      color: #007700;
      font-weight: bold;
    }

    &.inactive {
      color: #770000;
      font-weight: bold;
    }
  }
`;

export const SubItem = styled.div``;

export const CategoryTag = styled.div``;
