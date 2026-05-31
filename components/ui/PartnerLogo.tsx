import Image from "next/image";

export type Partner = {
  id: string;
  name: string;
  logo: string;
  width: number;
  height: number;
  className?: string;
};

export function PartnerLogo({ partner }: { partner: Partner }) {
  return (
    <Image
      src={partner.logo}
      alt={partner.name}
      width={partner.width}
      height={partner.height}
      className={`partner-logo ${partner.className ?? ""}`}
    />
  );
}
