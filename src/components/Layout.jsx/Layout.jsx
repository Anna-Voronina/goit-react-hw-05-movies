import { NavLink, Outlet } from 'react-router-dom';

export const Layout = () => {
  const links = [
    { path: '/', title: 'Home' },
    { path: '/movies', title: 'Movies' },
  ];

  return (
    <>
      <header>
        <ul>
          {links.map(({ path, title }) => (
            <li key={path}>
              <NavLink to={path}>{title}</NavLink>
            </li>
          ))}
        </ul>
      </header>
      <Outlet />
    </>
  );
};
