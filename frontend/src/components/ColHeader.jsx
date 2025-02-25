const ColHeader = ({ highlightedCol, setHighlightedCol }) => {
  const colHeaders = "ABCDEFGHIJ".split("")

  return (
    <thead>
      <tr>
        <th></th>
        {colHeaders.map((col, idx) => (
          <th scope="col"
            key={idx}
            onClick={() => setHighlightedCol((prev) => prev === col ? "" : col)}
            className={highlightedCol === col ? "highlight-col-cell" : ""}
          >
            {col}
          </th>
        ))}
      </tr>
    </thead>
  )
}
export default ColHeader