import "./footer.css"
function Footer({
  Lang,
  Rtl
}) {
  return (
    <div className=" footer Bg-light   ">
      <div

        dir={
          Rtl ? "rtl" : "ltr"
        }
        className=" flex capitalize     justify-between  items-center  p-[0.5rem]  sm:p-[1rem] sm:py-[1.2rem]">

        <h4 className="  font-bold   text-[1rem]   md:text-xl Active-Color  ">
          {Lang?.PAGE_HOME?.lANDING?.SUB_TITLE}
        </h4>

        <div dir={
          Rtl ? "rtl" : "ltr"
        } className="  Second-Color   text-[1rem]   md:text-xl  ">
          {Lang?.FOOTER?.COPYR}
          <span dir={"ltr"}  className="mx-[.5rem]"> &copy; {new Date().getFullYear()}</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
