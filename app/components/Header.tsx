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
    </header>
  );
};

export default Header;
