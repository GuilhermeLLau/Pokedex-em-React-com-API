import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import { CgPokemon } from 'react-icons/cg';
import { BsGithub } from 'react-icons/bs';
import { AiOutlineLinkedin } from 'react-icons/ai';

const Header = () => {
  return (
    <div className={styles.Header}>
      <Link to="/">
        <CgPokemon />
      </Link>
      <nav>
        <a
          href="https://linkedin.com/in/guilherme-láu-b98067247"
          target="_blank"
        >
          <AiOutlineLinkedin />
        </a>
        <a href="https://github.com/GuilhermeLLau" target="_blank">
          <BsGithub />
        </a>
      </nav>
    </div>
  );
};

export default Header;
