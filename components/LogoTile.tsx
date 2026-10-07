import Image from "next/image";

type Props = {
  src?: string;
  alt: string;
  wide?: boolean;
  light?: boolean;
  fallback: React.ReactNode;
};

export default function LogoTile({ src, alt, wide, light, fallback }: Props) {
  return (
    <div
      className={`flex-shrink-0 h-12 ${wide ? "w-32 px-2.5" : "w-12 p-1.5"} rounded-xl border flex items-center justify-center overflow-hidden transition-colors
        ${light ? "bg-white border-white/20" : "bg-white/5 border-white/10 text-neon"}
        group-hover:border-neon/40`}
    >
      {src ? (
        <Image
          src={src}
          alt={`${alt} logo`}
          width={128}
          height={48}
          unoptimized
          className="h-full w-full object-contain"
        />
      ) : (
        fallback
      )}
    </div>
  );
}