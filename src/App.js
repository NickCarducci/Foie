import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div style={{ width: "100%", maxWidth: "600px", textAlign: "center" }}>
        <h1
          style={{
            color: "rgb(200, 100, 100)",
            fontFamily: '"Pacifico", sans-serif'
          }}
        >
          Foie gras
        </h1>
        <iframe
          width="300px"
          src="https://www.youtube.com/embed/FySN9a4P168"
          title="https://www.youtube.com/embed/FySN9a4P168"
        ></iframe>
      </div>
    </div>
  );
}
