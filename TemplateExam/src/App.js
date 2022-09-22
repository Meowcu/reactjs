import Header from "./template/Header";
import Footer from "./template/Footer";
import PageContent from "./template/PageContent";
import Navbar from "./template/Navbar";
//<> </> Fragment olarak geçiyor
function App() {
  return (
    <>
<Header />
<Navbar/>
<PageContent />
<Footer/>
    </>
  );
}

export default App;
