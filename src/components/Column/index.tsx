import { ReactComponent as Icon } from '@/assets/icon/head.svg'
import ListItem from '@/components/ListItem'
import { IProps } from './types'
import useColumn from './hooks/useColumn.ts'

const Column = ({ column, columnIndex, moveItem }: IProps) => {
  const { selectedItems, handleItemClick } = useColumn()
  return (
    <div className='border max-h-96 relative grid grid-rows-[32px,_1fr] overflow-hidden'>
      <div className='z-10 sticky top-0'>
        <div className='relative flex justify-start items-center bg-white h-8 w-full border'>
          <Icon className='absolute' />
          <span className='text-xs pt-1 pl-3'>{column.id}</span>
        </div>
      </div>
      <div className='border-t overflow-y-auto'>
        {column.items.map((item, itemIndex) => (
          <ListItem
            key={itemIndex}
            item={item}
            columnIndex={columnIndex}
            itemIndex={itemIndex}
            moveItem={moveItem}
            isSelected={selectedItems.includes(itemIndex)}
            onClick={() => handleItemClick(itemIndex)}
          />
        ))}
      </div>
    </div>
  )
}

export default Column
