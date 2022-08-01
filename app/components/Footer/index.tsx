import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="flex justify-center">
      <Link className="my-12 text-center block p-4 bg-blue-800 text-white rounded w-full max-w-xs" to="/">
        Start over
      </Link>
    </footer>
  );
};

export default Footer;
