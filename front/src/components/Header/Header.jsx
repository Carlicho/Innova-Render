import  { useContext } from 'react';
import { ThemeContext } from '../../App'
import NavBar from './NavBar/Nav';
import styles from './Header.module.css';
import { TiShoppingCart } from 'react-icons/ti';
import LoginButton from '../Buttons/LoginButton';
import styled from 'styled-components';
import SearchBar2 from './SearchBar/SearchBar2';
import ReactSwitch from 'react-switch'; 

const Header = ({ setResults }) => {
  const { theme, toggleTheme } = useContext(ThemeContext); // Usa el contexto de tema

  const Sh1 = styled.h1`
    font-size: 3.125rem;
    letter-spacing: 12px;
    text-shadow: 3px 3px 4px #ffffff;
    text-shadow: -2px -2px -2px  #ffffff;
    color: #02339d;
  `;

  return (
    <div>
      <div className={styles.Headertop}>
        <div className={styles.mainHeader}>
          <Sh1>Innova</Sh1>
          <SearchBar2 setResults={setResults} />
          <LoginButton />
          <TiShoppingCart size="3.24rem" />

          {/* Agrega el switch del modo claro/oscuro */}
          <ReactSwitch
            onChange={toggleTheme}
            checked={theme === 'dark'} // Si el tema es oscuro, el switch estará marcado
            checkedIcon={false}
            uncheckedIcon={false}
            height={24}
            width={48}
            handleDiameter={24}
            offColor="#DDD"
            onColor="#333"
          />
        </div>
        <NavBar />
      </div>
    </div>
  );
};

export default Header;