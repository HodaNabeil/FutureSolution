


import "./footer.css"
import { useLang } from "@/Hooks";
function Footer() {
  const Lang = useLang()
  return (
    <div className=" footer Bg-light   ">
      <div className=" flex justify-between  items-center p-[1rem]">
        <h4 className="  font-bold     text-xl Active-Color  uppercase">
          {Lang?.PAGE_HOME?.lANDING?.SUB_TITLE}
        </h4>
        <div className="  Second-Color   ">
          COPYRIGHT ©{Lang?.FOOTER?.COPYR}
        </div>
      </div>
    </div>
  );
}

export default Footer;
