export interface IProps {
  column: {
    id: number
    items: string[]
  }
  columnIndex: number
  moveItem: (
    sourceColumn: number,
    sourceIndex: number,
    targetColumn: number,
    targetIndex: number
  ) => void
}
