import React from 'react';
import { css } from 'react-emotion';

const icons = ['fas fa-envelope', 'fab fa-imdb', 'fab fa-youtube'];

const styles = {
  row: css`
    display: flex;
    align-items: center;
    justify-content: center;
    div {
      cursor: pointer;
      margin: 0 20px;
      :hover {
        color: red;
      }
    }
  `,
};

const InfoLinks = () => (
  <div className={styles.row}>
    {icons.map(icon => (
      <div key={icon}>
        <i className={`${icon} fa-4x`} />
      </div>
    ))}
  </div>
);

export default InfoLinks;
