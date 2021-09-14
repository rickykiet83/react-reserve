import { Container, Icon, Image, Menu } from 'semantic-ui-react';

import Link from 'next/link';

function Header() {
  const user = false;
  return (
    <Menu id='menu' inverted>
      <Container text>
        <Link href='/'>
          <Menu.Item header>
            <Image
              style={{ marginRight: '1em' }}
              size='mini'
              src='/static/logo.svg'
            ></Image>
            ReactReserve
          </Menu.Item>
        </Link>

        <Link href='/cart'>
          <Menu.Item header>
            <Icon name='cart' size='large' />
            Cart
          </Menu.Item>
        </Link>
        {user && (
          <Link href='/cart'>
            <Menu.Item header>
              <Icon name='plus square' size='large' />
              Create
            </Menu.Item>
          </Link>
        )}

        {user ? (
          <>
            <Link href='/account'>
              <Menu.Item header>
                <Icon name='user' size='large' />
                Account
              </Menu.Item>
            </Link>

            <Link href='/logout'>
              <Menu.Item header>
                <Icon name='sign out' size='large' />
                Logout
              </Menu.Item>
            </Link>
          </>
        ) : (
          <>
            <Link href='/login'>
              <Menu.Item header>
                <Icon name='sign in' size='large' />
                Login
              </Menu.Item>
            </Link>
            <Link href='/signup'>
              <Menu.Item header>
                <Icon name='signup' size='large' />
                Signup
              </Menu.Item>
            </Link>
          </>
        )}
      </Container>
    </Menu>
  );
}

export default Header;
