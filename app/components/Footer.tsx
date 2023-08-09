/**
 * Giving credit where credit is due! 😄
 */
const Footer = () => {
  return (
    <footer
      className="flex flex-col items-center justify-center font-display"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Developed with a laptop by Frances Coronel
      </h2>
      <p className="text-lg font-medium text-center">
        Developed with a{" "}
        <span role="img" aria-label="heart">
          👩🏽‍💻
        </span>{" "}
        by{" "}
        <a
          href="https://linkedin.com/in/francescoronel"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-secondary transition-all"
        >
          Frances Coronel
        </a>
      </p>
    </footer>
  );
};

export default Footer;
