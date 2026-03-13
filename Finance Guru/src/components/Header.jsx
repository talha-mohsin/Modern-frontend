import Button from "./Button";

function Header({ header, user }) {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img className="h-12 w-12" src={header.logo} alt="logo" />
          <span className="ml-3 text-l">{header.title}</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a className="mr-5 hover:text-gray-900">Home</a>
          <a className="mr-5 hover:text-gray-900">About</a>
          <a className="mr-5 hover:text-gray-900">Contact us</a>
        </nav>
        <Button label={user ? "Logout" : "Login"} />
      </div>
    </header>
  );
}

export default Header