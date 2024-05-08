import StorySvg from "@/assets/svg/box.svg";
import HomeSvg from "@/assets/svg/home.svg";
import AboutSvg from "@/assets/svg/introduction.svg";
import ProjectSvg from "@/assets/svg/project.svg";
import TechSvg from "@/assets/svg/tag.svg";
import Link from "next/link";

export default function Nav() {
  const list = ["HOME", "ABOUT", "PROJECT", "TECH", "STORY"] as const;

  return (
    <nav className="px-8 pt-12 bg-gray-100 text-gray-500 font-semibold">
      <ul className="h-60 text-sm">
        <li>
          <Link href="/" className="block py-3 hover:bg-indigo-100">
            <span className="inline-block w-5 h-5 ml-2 mr-4">
              <HomeSvg className="inline w-full h-full" />
            </span>
            HOME
          </Link>
        </li>
        <li>
          <Link href="/about" className="block py-3 hover:bg-indigo-100">
            <span className="inline-block w-5 h-5 ml-2 mr-4">
              <AboutSvg className="inline w-full h-full" />
            </span>
            ABOUT
          </Link>
        </li>
        <li>
          <Link href="/project" className="block py-3 hover:bg-indigo-100">
            <span className="inline-block w-5 h-5 ml-2 mr-4">
              <ProjectSvg className="inline w-full h-full" />
            </span>
            PROJECT
          </Link>
        </li>
        <li>
          <Link href="/tech" className="block py-3 hover:bg-indigo-100">
            <span className="inline-block w-5 h-5 ml-2 mr-4">
              <TechSvg className="inline w-full h-full" />
            </span>
            TECH
          </Link>
        </li>
        <li>
          <Link href="/remark" className="block py-3 hover:bg-indigo-100 rounded-lg">
            <span className="inline-block w-5 h-5 ml-2 mr-4">
              <StorySvg className="inline w-full h-full" />
            </span>
            REMARK
          </Link>
        </li>
      </ul>
    </nav>
  )

}
