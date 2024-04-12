import { Callout } from "@radix-ui/themes";
import { PropsWithChildren } from "react";

const ErrorMessage = ({ children }: PropsWithChildren) => {
  if (!children) {
    return null;
  }
  return <Callout.Text color="red">{children}</Callout.Text>;
};

export default ErrorMessage;
