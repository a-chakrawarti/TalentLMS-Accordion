import "./App.css";
import data from "./components/data";
import Questions from "./components/Questions";

function App() {
  return (
    <>
      <main>
        <div className="heading">
          <h1>Questions & Answers about Login</h1>
        </div>
        {data.map((ques) => (
          <Questions data={ques} />
        ))}
      </main>
    </>
  );
}

export default App;
