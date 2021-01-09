/* imoprts */
import { Button, ButtonProps } from "reactstrap";

interface Props
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonProps {
  children?: React.ReactNode;
}

export default ({ ...props }: Props) => {
  return (
    <Button
      {...props}
      color="primary"
      style={{ height: 24, lineHeight: 0, ...props.style }}
    >
      {props.children}
    </Button>
  );
};
