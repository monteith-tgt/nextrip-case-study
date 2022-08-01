import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="flex justify-center">
      <Link className="text-center block p-4 mx-8 w-full max-w-xs" to="/">
        Start over
      </Link>
    </footer>
  );
};

export default Footer;
