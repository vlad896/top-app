interface Props {
  size?: number
  color?: string
  className?: string
}

export const SortIcon = (props: Props) => {
  const { size = 20, color = '#7653FC', className } = props
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="20" height="3" rx="1.5" />
      <rect y="5" width="14" height="3" rx="1.5" />
      <rect y="10" width="8" height="3" rx="1.5" />
    </svg>
  )
}
