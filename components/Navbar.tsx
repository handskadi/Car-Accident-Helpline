import Image from "next/image";

const Navbar: React.FC = () => {
  return (
    <nav className="w-full py-4 px-4 bg-white relative shadow">
      <div className="flex items-center justify-center gap-2">
        {/* <p className="text-md whitespace-nowrap font-bold">Superannuation claims</p>

        <p className="text-sm whitespace-nowrap">
          | Powered By
        </p> */}
        <Image
          src="/logo.svg"
          alt="Car Accident Helpline Logo"
          width={80}
          height={39}
          priority
        />
      </div>
    </nav>

  );
};

export default Navbar;
