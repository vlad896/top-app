interface Props {
  size?: number
  color?: string
  [key: string]: any
}

export const CloseIcon = (props: Props) => {
  const { size = 12, color = '#1CC37E', ...rest } = props
  return (
    <svg
      {...rest}
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line x1="2.06066" y1="1.93934" x2="10.5459" y2="10.4246" stroke={color} stroke-width="3" />
      <line x1="1.93934" y1="10.4246" x2="10.4246" y2="1.93935" stroke={color} stroke-width="3" />
    </svg>
  )
}
