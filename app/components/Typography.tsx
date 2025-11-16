import { ReactNode } from "react";
import cn from "@/app/util/cn";

type TypoType = "Head1" | "Head2" | "Head3" | "SubTitle1" | "P1" | "P2" | "P3";

interface TypographyProps {
  children: ReactNode;
  className?: string;
  title?: string;
}

const typoTypeMap: Record<TypoType, string> = {
  Head1: "text-6xl 2xl:text-8xl font-bold",
  Head2: "text-4xl 2xl:text-6xl font-bold",
  Head3: "text-3xl 2xl:text-5xl font-semibold",
  SubTitle1: "text-xl 2xl:text-3xl font-medium",
  P1: "text-base 2xl:text-xl",
  P2: "text-sm 2xl:text-lg",
  P3: "text-xs 2xl:text-base",
};

const BaseTypography = ({
  type,
  children,
  className,
  title,
}: TypographyProps & { type: TypoType }) => {
  const style = typoTypeMap[type];
  return (
    <p className={cn(style, className)} title={title}>
      {children}
    </p>
  );
};

const Typography = {
  Head1: (props: TypographyProps) => <BaseTypography type="Head1" {...props} />,
  Head2: (props: TypographyProps) => <BaseTypography type="Head2" {...props} />,
  Head3: (props: TypographyProps) => <BaseTypography type="Head3" {...props} />,
  SubTitle1: (props: TypographyProps) => (
    <BaseTypography type="SubTitle1" {...props} />
  ),
  P1: (props: TypographyProps) => <BaseTypography type="P1" {...props} />,
  P2: (props: TypographyProps) => <BaseTypography type="P2" {...props} />,
  P3: (props: TypographyProps) => <BaseTypography type="P3" {...props} />,
  Error: (props: TypographyProps) => (
    <BaseTypography type="P1" className="mb-[-24px] text-[12px]" {...props} />
  ),
};

export default Typography;
