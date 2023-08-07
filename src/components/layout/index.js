import NavbarComponent from 'src/components/navbar';

export default function Layout({ children }) {
  return (
    <>
      <NavbarComponent />
      {children}
    </>
  );
}
