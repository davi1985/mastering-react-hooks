type CardProps = {
  title: string;
  children: React.ReactNode;
};

export const Card = ({ children, title }: CardProps) => {
  return (
    <div>
      <header>{title}</header>

      <div>{children}</div>
    </div>
  );
};
