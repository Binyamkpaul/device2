import Link from "next/link";
import Image from "next/image";
// ... (other imports)

const Nav = () => {
  // ... (other code)

  return (
    <>
      <nav className="flex fixed top-0 left-0 right-0 bg-gray-100 md:bg-lime-500 text-white glassmorphism md:glassmorphism-lime justify-between items-center h-20 z-50 shadow-sm">
        {/* LOGO Section */}
        <section className="flex justify-between items-center pl-3 md:pl-0 h-full">
          <div className="w-28 md:w-64 bg-transparent md:bg-white flex justify-center items-center rounded-tr-3xl h-full">
            <Link href="">
              <Image
                src="https://developer.ethiotelecom.et/assets/images/et-logo-2.svg"
                alt="logo"
                width={160}
                height={150}
                className="object-contain"
              />
            </Link>
          </div>

          {/* Add the first image */}
        </section>

        {/* Desktop Navigation */}
        <div className="sm:flex hidden w-full justify-between items-center">
          {/* ... (other code) */}
        </div>

        {/* Mobile Navigation */}
        <section className="bg-white rounded-tl-3xl flex justify-center items-center h-full w-80 ">
          <Link href="">
            <Image
              src="https://developer.ethiotelecom.et/assets/images/telebirr-logo-color.svg"
              alt="logo"
              width={160}
              height={150}
              className="object-contain"
            />
          </Link>
        </section>
      </nav>
    </>
  );
};

export default Nav;
