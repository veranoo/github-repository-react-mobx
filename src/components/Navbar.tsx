import React from 'react';

import styled from 'styled-components';

const NavStyled = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #dddddd;
  position: sticky;
  height: 50px;
  top: 0;

  && {
    img {
      width: 80px;
    }
  }
`;

const Navbar: React.FC = () => (
  <NavStyled>
    <img
      src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Octicons-logo-github.svg/1598px-Octicons-logo-github.svg.png'
      alt='Logo'
    />
  </NavStyled>
);

export default Navbar;
