import { ReactComponent as Separator } from '@/assets/icon/separator.svg'
import { ReactComponent as Tablet } from '@/assets/icon/tablet.svg'
import { IProps } from './types'
import useItem from './hooks/useItem.ts'

const ListItem = ({
  item,
  isSelected,
  onClick,
  columnIndex,
  itemIndex,
  moveItem
}: IProps) => {
  const { ref, drop } = useItem({ columnIndex, itemIndex, moveItem })
  return (
    <div
      ref={(node) => ref(drop(node))}
      onClick={onClick}
      className={`${
        isSelected ? 'bg-sky-200' : 'bg-white'
      } list-group-item cursor-pointer items-center p-1 border flex`}
    >
      <Separator className='fill-gray-400' />
      <div className='flex flex-col'>
        <div className='flex justify-start items-center'>
          <span className='text-bold'>
            {item.replace(/\d+$/, `${columnIndex + 1}`)}
          </span>
        </div>
        <div className='flex justify-start items-center'>
          <span className='opacity-50'>1234567890</span>
          <Tablet className='icon' />
        </div>
      </div>
    </div>
  )
}

export default ListItem
