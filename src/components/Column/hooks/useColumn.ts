import { useState } from 'react'

const useColumn = () => {
  const [selectedItems, setSelectedItems] = useState<number[]>([])

  const handleItemClick = (index: number) => {
    setSelectedItems((prevSelectedItems) => {
      if (prevSelectedItems.includes(index)) {
        return prevSelectedItems.filter((item) => item !== index)
      } else {
        return [...prevSelectedItems, index]
      }
    })
  }
  return { selectedItems, handleItemClick }
}
export default useColumn
