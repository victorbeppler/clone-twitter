import React from 'react';
import { Container, Header, BackIcon , ProfileInfo } from './styles';

function main() {
  return (
      <Container>   
          <Header>
            <button>
                <BackIcon />
            </button>
            <ProfileInfo>
                <strong>Victor Hugo</strong>
                <span>15 Tweets</span>
            </ProfileInfo>
          </Header>
          {/* <ProfilePage /> */}
          {/* <ButtonMenu>
              <HomeIncon />
              <SearchIncon />
              <BellIcon />
              <EmailIcon />
          </ButtonMenu> */}
      </Container>
  );
}

export default main;