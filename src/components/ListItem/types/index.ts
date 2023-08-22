export interface IHooksProps {
  itemIndex: number
  columnIndex: number
  moveItem: (
    sourceColumn: number,
    sourceIndex: number,
    targetColumn: number,
    targetIndex: number
  ) => void
}
export interface IProps extends IHooksProps {
  item: string
  isSelected: boolean
  onClick: () => void
}
export type DraggedItemType = {
  columnIndex: number
  itemIndex: number
}
