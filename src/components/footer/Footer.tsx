interface FooterProps {}
import Image from "next/image";

const Footer: React.FC<FooterProps> = () => {
  return (
    <div
      className="mt-auto bg-[#eaeaea] flex flex-col w-full
      sm:pl-24 mx-auto"
    >
    <div
      className="py-8 px-12 flex items-center bg-[#eaeaea]
    border-t border-[rgba(26, 26, 44, 0.05)]"
    >
      <Image
        height={24}
        width={80}
        objectFit="contain"
        src="/images/qogita.png"
        alt="logo"
      />
      <span className="text-sm whitespace-nowrap opacity-75 ml-4">
        &copy; 2021 | Developed by{" "}
        <a
          href="https://www.qogita.com/"
          className="text-[#1a1a2c] transition-all duration-200
          border-b border-dotted border-[#1a1a2c]
          hover:text-[#1a1a2c] hover:border-[##1a1a2c]"
        >
          Qogita
        </a>
      </span>
      </div>
    </div>
  );
};

export default Footer;
