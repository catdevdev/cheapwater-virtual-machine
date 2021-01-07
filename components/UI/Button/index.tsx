/* imoprts */
import { Button, ButtonProps } from "reactstrap";

interface Props
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonProps {
  children?: React.ReactNode;
}

export default ({ ...props }: Props) => {
  return (
    <Button style={{ height: 24, lineHeight: 0 }} {...props}>
      {props.children}
    </Button>
  );
};
