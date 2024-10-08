export default function Header() {
  return (
    <>
      <div className="flex flex-col items-stretch">
        <div className="flex flex-row justify-between items-stretch px-[20px] m-[30px_40px]">
          <img src="/logo-name.svg" alt="Positivus logo" />
          <img src="/burger.svg" alt="Menu" />
        </div>

        <h1 className="text-[34px] px-[20px]">Navigating the digital landscape for success</h1>
        <img className="px-[34px] h-[310px] w-[430px]" src="/header-image.svg" alt="Megaphone" />
        <p className="text-[16px] px-[10px]  mx-[10px]">
          Our digital marketing agency helps businesses grow and succeed online through a range of services including
          SEO, PPC, social media marketing, and content creation.
        </p>
        <button className="rounded-[14px] px-[35px] py-[20px] mx-[20px] bg-black text-[20px] text-grey">
          Book a consultant
        </button>
        <div className="grayscale mt-[60px] gap-x-[40px] gap-y-[20px] flex flex-row justify-evenly items-center flex-wrap overflow-scroll content-between">
          <img src="/logo-amazon.svg" alt="Amazon" />
          <img src="/logo-dribble.svg" alt="Dribble" />
          <img src="/logo-hubspot.svg" alt="HubSpot" />
          <img src="/logo-netflix.svg" alt="Netflix" />
          <img src="/logo-notion.svg" alt="Notion" />
          <img src="/logo-zoom.svg" alt="Zoom" />
        </div>
      </div>
    </>
  );
}
