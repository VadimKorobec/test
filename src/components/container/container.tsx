interface ContainerProps {
  children: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return <div style={{ margin: "auto",maxWidth:'500px' }}>{children}</div>;
};

export default Container;
