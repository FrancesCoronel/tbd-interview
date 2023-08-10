const Header = () => {
  return (
    <header className="flex flex-col items-center justify-center">
      <h1
        className="text-6xl font-bold text-center font-display text-primary"
        tabIndex={0}
        aria-label="The Los Alamos Research App (LARA)"
      >
        The Los Alamos Research App (LARA)
      </h1>
      <p className="text-xl text-center text-gray-500 mt-8">
        The Los Alamos Research App (LARA) allows scientists collaborate and
        manage sensitive research related to the creation of the first atomic
        bomb.
      </p>
    </header>
  );
};

export default Header;
