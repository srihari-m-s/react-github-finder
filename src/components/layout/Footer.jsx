export default function Footer() {
  const footerYear = new Date().getFullYear();

  return (
    <footer className="footer footer-center p-5 bg-gray-700 text-neutral-content">
      <div className="">
        <p className="">Copyright &copy; {footerYear} All Rights Reserved</p>
      </div>
    </footer>
  );
}
