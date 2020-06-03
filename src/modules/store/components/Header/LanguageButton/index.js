import React, { useState, useEffect } from 'react';
import CountryFlag from 'react-country-flag';
import { MdArrowDropDown } from 'react-icons/md';

import { Container } from './styles';

const AVAILABLE_LANGUAGES = [
  {
    country: 'BR',
    language: 'Português',
  },
  {
    country: 'US',
    language: 'English',
  },
  {
    country: 'ES',
    language: 'Español',
  },
  {
    country: 'FR',
    language: 'Français',
  },
  {
    country: 'CN',
    language: '中文',
  },
  {
    country: 'JP',
    language: '日本語',
  },
];

function LanguageButton() {
  const [active, setActive] = useState(false);
  const [current, setCurrent] = useState({
    country: 'BR',
    language: 'Português',
  });

  useEffect(() => setActive(false), [current]);
  // const style = { height: '25px' };
  return (
    <Container>
      <button type="button" onClick={() => setActive(!active)}>
        <CountryFlag countryCode={current.country} svg />
        <span>{current.language}</span>
        <MdArrowDropDown />
      </button>
      {active && (
        <ul>
          {AVAILABLE_LANGUAGES.map(
            language =>
              language.language !== current.language && (
                <li onClick={() => setCurrent(language)}>
                  <CountryFlag
                    countryCode={language.country}
                    svg
                    // style={style}
                  />
                  <p>{language.language}</p>
                </li>
              )
          )}
        </ul>
      )}
    </Container>
  );
}

export default LanguageButton;
