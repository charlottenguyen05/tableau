const ColHeader = ({ highlightedCol, setHighlightedCol, setHighlightedRow}) => {
  const colHeaders = "ABCDEFGHIJ".split("")

  return (
    <thead>
      <tr>
        <th></th>
        {colHeaders.map((col, idx) => (
          <th scope="col"
            key={col}
            onClick={() => {
              setHighlightedCol((prev) => prev === col ? "" : col)
              setHighlightedRow(null)
            }}
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