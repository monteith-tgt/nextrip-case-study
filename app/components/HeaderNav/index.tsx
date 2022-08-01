import { Link } from '@remix-run/react';

const HeaderNav = () => {
  return (
    <header className="text-center my-4 py-4">
      <h1 className="text-3xl font-bold">Real-time Departures</h1>
      <p>Find your next bus by route or stop</p>
      <nav>
        <ul className="pt-4 flex justify-center max-w-md mx-auto">
          <li>
            <Link className="block p-4 mx-2 bg-blue-800 text-white rounded" to={`/routes/`}>
              Find by Route
            </Link>
          </li>
          <li>
            <Link className="block p-4 mx-2 bg-blue-800 text-white rounded" to={`/stops/`}>
              Find by Stop
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderNav;
