import { ImgHTMLAttributes } from "react";

type Props = ImgHTMLAttributes<HTMLImageElement>;

export default function Image({ ...rest }: Props) {
  return <img {...rest} alt="" width={800} height={530} />;
}
