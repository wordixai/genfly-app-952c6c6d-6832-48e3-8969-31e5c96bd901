const Footer = () => {
  return (
    <div className="w-full mt-8">
      <div 
        className="w-full pt-[60px] pb-[60px] px-4 md:px-8 lg:px-16 bg-cover bg-bottom bg-no-repeat"
        style={{ backgroundImage: "url('/assets/image/footer.webp')" }}
      >
        <div className="w-full flex">
          <div className="w-[25%] flex justify-center items-start">
            <img 
              alt="Macaron Logo" 
              width="56" 
              height="56" 
              src="https://macaron.im/_next/image?url=%2Ffavicon.ico&w=128&q=75&dpl=dpl_GQQLtm6CXRU3K1iKL9EoXpSkokM1"
            />
          </div>
          
          <div className="flex-1">
            <p className="font-[600] text-foreground mb-[18px] md:mb-[36px] text-[16px] md:text-[20px]">公司</p>
            <ul className="space-y-[16px]">
              <li>
                <a 
                  className="text-foreground font-[400] text-[12px] md:text-[16px] hover:text-secondary transition-colors" 
                  href="/blog"
                >
                  博客
                </a>
              </li>
            </ul>
          </div>
          
          <div className="flex-1">
            <p className="font-[600] text-foreground mb-[18px] md:mb-[36px] text-[16px] md:text-[20px]">法律</p>
            <ul className="space-y-[16px]">
              <li>
                <a 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-foreground font-[400] text-[12px] md:text-[16px]" 
                  href="/privacy-policy"
                >
                  隐私政策
                </a>
              </li>
              <li>
                <a 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-foreground font-[400] text-[12px] md:text-[16px]" 
                  href="/terms-of-service"
                >
                  条款和条件
                </a>
              </li>
            </ul>
          </div>
          
          <div className="flex-1">
            <p className="font-[600] text-foreground mb-[18px] md:mb-[36px] text-[16px] md:text-[20px]">社交</p>
            <ul className="space-y-[16px]">
              <li>
                <a 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-foreground font-[400] text-[12px] md:text-[16px]" 
                  href="https://x.com/macaron0fficial?s=21&t=cQtqajSHOSsk73hv8JMq4Q"
                >
                  X / Twitter
                </a>
              </li>
              <li>
                <a 
                  rel="noopener noreferrer" 
                  className="text-foreground font-[400] text-[12px] md:text-[16px]" 
                  href="/"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-foreground font-[400] text-[12px] md:text-[16px]" 
                  href="https://discord.com/invite/zEnS2JGM72"
                >
                  Discord
                </a>
              </li>
              <li>
                <a 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-foreground font-[400] text-[12px] md:text-[16px]" 
                  href="https://www.reddit.com/user/Relative-Win3271"
                >
                  Reddit
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;