import Image from "next/image";

type ExpandableLogoProps = {
  isExpanded: boolean;
}

const ExpandableLogo = (props: ExpandableLogoProps) => {
  const { isExpanded } = props;

  return (
    <div className="w-full h-[50px] flex justify-center items-center">
      {!isExpanded && (
        <Image
          src="/favicon.png"
          alt="Favicon"
          width={50}
          height={50}
          style={{ objectFit: "cover" }}
        />
      )}
      {isExpanded && (
        <Image
          src="/logo.png"
          alt="Logo"
          width={100}
          height={80}
        />
      )}
    </div>
  );
};

export default ExpandableLogo;
