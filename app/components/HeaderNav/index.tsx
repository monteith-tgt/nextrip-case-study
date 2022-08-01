import { Link } from '@remix-run/react';

const HeaderNav = () => {
  return (
    <header className="text-center my-4">
      <h1 className="text-3xl font-bold">Real-time Departures</h1>
      <p>Find your next bus by route or stop</p>
      <nav>
        <ul className="flex justify-center">
          <li>
            <Link className="block p-4 mx-8" to={`/routes/`}>
              Find by Route
            </Link>
          </li>
          <li>
            <Link className="block p-4 mx-8" to={`/stops/`}>
              Find by Stop
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderNav;
