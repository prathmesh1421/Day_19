import React from "react";
import { List } from "react-window";

// Row Component
const RowComponent = ({ index, style }) => {
  return (
    <div
      style={{
        ...style,
        padding: "10px",
        borderBottom: "1px solid #ccc",
        background: index % 2 === 0 ? "#f1f1f1" : "#ffffff",
      }}
    >
      Student {index + 1}
    </div>
  );
};

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Virtualized List</h2>

      <List
        rowComponent={RowComponent}
        rowCount={1000}
        rowHeight={50}
        rowProps={{}}
        style={{
          height: 400,
          width: 300,
          border: "2px solid black",
        }}
      />
    </div>
  );
}

export default App;
