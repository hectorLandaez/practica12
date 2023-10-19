import "./App.css";
import Nav from "./components/Nav";
import FormikDoc from "./components/FormikDoc";
function App() {
  return (
    <>
      <Nav></Nav>
      <header>
        <h5>Unhappy with your website?</h5>
        <h1> We create beautiful and fast web services</h1>
      </header>
      <div className="dimg">
        <img
          src="./src\assets\edie-homepage-master\heroImage.jpg"
          className="fimg"
        />
      </div>
      <div className="seconddiv">
        <h1> Story, Emotion and purpose</h1>
        <p>
          {" "}
          We help transform your ideas into real world applications that will
          outperform your toughest competition and help you achieve your
          strategic goals in short period of time.
        </p>
        <FormikDoc></FormikDoc>
      </div>
    </>
  );
}

export default App;
