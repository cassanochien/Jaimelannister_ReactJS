import { Outlet } from "react-router-dom";
import Header from "../Components/Header/header";
import Footer from "../Components/Footer/footer";
function PublicLayout() {
  return (
    <>
      <header>
        <Header />
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default PublicLayout;
