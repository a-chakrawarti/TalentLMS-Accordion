import "./App.css";
import data from "./components/data";
import Questions from "./components/Questions";

function App() {
  return (
    <>
      <main>
        <div className="heading">
          <h3>Questions And Answers about Login</h3>
        </div>
        <div className="board">
          {data.map((ques) => (
            <Questions key={ques.id} data={ques} />
          ))}
        </div>
      </main>
    </>
  );
}

export default App;
