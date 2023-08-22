import Column from '@/components/Column'
import './App.css'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import useBaseData from '@/hooks/useBaseData.ts'

function App() {
  const { boardColumns, moveItem } = useBaseData()
  return (
    <header>
      <div className='wrapper'>
        <div className='grid grid-cols-5 grid-rows-2'>
          <DndProvider backend={HTML5Backend}>
            {boardColumns.map((column, columnIndex) => (
              <Column
                key={column.id}
                column={column}
                columnIndex={columnIndex}
                moveItem={moveItem}
              />
            ))}
          </DndProvider>
        </div>
      </div>
    </header>
  )
}

export default App
