import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <footer className="border-t">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 p-5 text-center">
        <Link href="/">
          <Image
            src="/assets/icons/logo.svg"
            alt="logo"
            width={100}
            height={100}
          ></Image>
        </Link>
        <p>2025 Eventify. All Rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
