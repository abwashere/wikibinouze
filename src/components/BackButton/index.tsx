import Link from "next/link";
import Image from "next/image";

type Props = { text: string };

export default function BackButton({ text }: Props) {
  return (
    <Link data-testid="back-button-div" href="/">
      <Image src="/icons/arrow_back.svg" alt="Back arrow icon" width={30} height={30} />

      <p className="ml-2">{text}</p>
    </Link>
  );
}
