import NavbarComponent from "../navbar";

export default function Layout({children}){
  return (
    <>
      <NavbarComponent />
      {children}
    </>
  )
}