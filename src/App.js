import "./styles.css";
import UniqueColorString from "./UniqueColorString/index";

export default function App() {
  return (
    <div className="app-container">
      <h1>Color Changing Text</h1>
      <UniqueColorString text="Hello, World!" className="color-changing-text" />
    </div>
  );
}
