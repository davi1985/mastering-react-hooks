type CardProps = {
  title: string
  children: React.ReactNode
}

export const Card = ({ children, title }: CardProps) => {
  return (
    <div className="border rounded-sm p-6">
      <header className="pb-4 mb-4 border-b font-bold">{title}</header>

      <div>{children}</div>
    </div>
  )
}
