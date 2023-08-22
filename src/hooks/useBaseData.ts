import { useState } from 'react'

const useBaseData = () => {
  function generateRandomData(columnNumber: number) {
    const numItems = Math.floor(Math.random() * 11) + 4
    const items = []

    for (let i = 1; i <= numItems; i++) {
      const itemNumber = Math.floor(Math.random() * 100) + 1
      items.push(`Item ${itemNumber} = ${columnNumber}`)
    }
    return items
  }

  function generateColumns() {
    return Array.from({ length: 10 }, (_, index) => ({
      id: index + 1,
      items: generateRandomData(index + 1)
    }))
  }
  const columns = generateColumns()
  const [boardColumns, setBoardColumns] = useState(columns)
  const moveItem = (
    sourceColumn: number,
    sourceIndex: number,
    targetColumn: number,
    targetIndex: number
  ) => {
    const updatedColumns = [...boardColumns]
    const sourceTasks = [...updatedColumns[sourceColumn].items]
    const targetTasks = [...updatedColumns[targetColumn].items]

    const [taskToMove] = sourceTasks.splice(sourceIndex, 1)
    targetTasks.splice(targetIndex, 0, taskToMove)

    updatedColumns[sourceColumn].items = sourceTasks
    updatedColumns[targetColumn].items = targetTasks

    setBoardColumns(updatedColumns)
  }
  return { boardColumns, moveItem }
}
export default useBaseData
