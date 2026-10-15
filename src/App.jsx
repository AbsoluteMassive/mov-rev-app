import "./App.css";
import Footer from "./assets/components/Footer/Footer";
import Navbar from "./assets/components/nav/Navbar";

function App() {
  return (
    <>
      <Navbar logoName={"Movie Review"}>
        <a href="#">link1</a>
        <a href="#">link2</a>
        <a href="#">link3</a>
      </Navbar>
      <main className="mainC">
        <h2>Hello world!</h2>
      </main>
      <Footer>
        <a href="#">Link1</a>
        <a href="#">link2</a>
        <a href="#">link3</a>
      </Footer>
    </>
  );
}

export default App;
