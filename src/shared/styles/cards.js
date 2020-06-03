import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  padding-bottom: 10px;

  .submit-action-button {
    margin-top: 20px;
    height: 30px;
    background: #3f72af;
    color: #fff;
    font-size: 20px;
    font-weight: bold;
    border-radius: 5px;
  }

  .subcard-container {
    background: ${props => (props.readOnly ? '#fff' : '#ddd')};
    border: 1px #3f72af55 solid;
    border-radius: 5px;
    padding: 5px 15px;
  }

  strong {
    display: flex;
    align-items: center;
    font-size: 20px;
  }

  input,
  select,
  textarea {
    background: ${props => (props.readOnly ? '#fff' : '#ddd')};
    height: 30px;
    font-size: 18px;
    padding: 0 10px;
    border: 1px #3f72af55 solid;
    border-radius: 5px;
  }

  textarea {
    height: 150px;
  }
`;

export const FieldActive = styled.div`
  display: flex;
  margin: 15px 0;
  align-items: center;
  justify-content: space-between;

  button {
    border: 0;
    background: #325ca8;
    color: #fff;
    padding: 0 5px;
    border-radius: 4px;
  }
`;

export const Avatar = styled.div``;
