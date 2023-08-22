import { useDrag, useDrop } from 'react-dnd'
import { DraggedItemType, IHooksProps } from '@/components/ListItem/types'

const useItem = ({ itemIndex, columnIndex, moveItem }: IHooksProps) => {
  const [, ref] = useDrag({
    type: 'ITEM',
    item: { columnIndex, itemIndex }
  })
  const [, drop] = useDrop({
    accept: 'ITEM',
    hover: (draggedItem: DraggedItemType) => {
      if (draggedItem.columnIndex !== columnIndex) {
        moveItem(
          draggedItem.columnIndex,
          draggedItem.itemIndex,
          columnIndex,
          itemIndex
        )
        draggedItem.columnIndex = columnIndex
        draggedItem.itemIndex = itemIndex
      }
    }
  })
  return { ref, drop }
}
export default useItem
