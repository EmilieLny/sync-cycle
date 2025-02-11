import { Button, ButtonDefault } from "@/components/ui/Button/Button";
import { StyledComponentPropsWithAs } from "src/type";

export type ButtonProps = React.ComponentProps<typeof Button & typeof ButtonDefault>;

export type StyledButtonProps = StyledComponentPropsWithAs<ButtonProps>;

export type ToggleGroupItemProps = {
  val: "monthly" | "weekly";
  selectedValue: "monthly" | "weekly";
} & StyledButtonProps;
