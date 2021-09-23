import { Container, Icon, Image, Menu } from 'semantic-ui-react';
import Router, { useRouter } from 'next/router';

import Link from 'next/link';
import NProgress from 'nprogress';

Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

function Header() {
  const router = useRouter();
  const user = true;

  function isActive(route) {
    return route === router.pathname;
  }

  return (
    <Menu id='menu' stackable inverted>
      <Container text>
        <Link href='/'>
          <Menu.Item header active={isActive('/')}>
            <Image
              style={{ marginRight: '1em' }}
              size='mini'
              src='/static/logo.svg'
            ></Image>
            ReactReserve
          </Menu.Item>
        </Link>

        <Link href='/cart'>
          <Menu.Item header active={isActive('/cart')}>
            <Icon name='cart' size='large' />
            Cart
          </Menu.Item>
        </Link>
        {user && (
          <Link href='/create'>
            <Menu.Item header active={isActive('/create')}>
              <Icon name='plus square' size='large' />
              Create
            </Menu.Item>
          </Link>
        )}

        {user ? (
          <>
            <Link href='/account'>
              <Menu.Item header active={isActive('/account')}>
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
            <Link href='/login' active={isActive('/login')}>
              <Menu.Item header>
                <Icon name='sign in' size='large' />
                Login
              </Menu.Item>
            </Link>
            <Link href='/signup' active={isActive('/signup')}>
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
