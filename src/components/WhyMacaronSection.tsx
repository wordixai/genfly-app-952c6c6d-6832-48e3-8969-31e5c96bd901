const WhyMacaronSection = () => {
  return (
    <section className="w-full pt-12 pb-0 md:py-24">
      <div className="max-w-7xl mx-auto md:px-4">
        <div className="text-center mb-12 md:mb-16 p-8">
          <h2 className="text-4xl md:text-5xl section-title text-foreground mb-4">为什么选择 Macaron</h2>
          <p className="text-lg md:text-xl text-secondary max-w-2xl mx-auto">其他 AI 助手帮助你工作。Macaron 帮助你生活得更好。</p>
        </div>
        <div className="md:space-y-6 max-w-[960px] md:mx-auto">
          {/* Feature 1 */}
          <div 
            className="md:h-[279px] w-full rounded-none md:rounded-2xl bg-cover bg-center flex md:flex-row md:pl-10 flex-col items-center justify-between gap-6 md:gap-8"
            style={{ backgroundImage: "url('/assets/image/why-macaron/bg1.svg')" }}
          >
            <div className="flex-1 px-8 pt-10 md:pt-0" style={{ color: '#42036C' }}>
              <h3 className="text-xl font-semibold mb-3 leading-[30px]">Macaron 是你的个人代理</h3>
              <p className="text-lg leading-[1.6] opacity-60">Macaron 的目的不是让你更努力工作，而是帮助你生活得更好。你的生活最为重要。</p>
            </div>
            <div 
              className="w-[414px] md:h-full h-[278px] bg-contain bg-no-repeat bg-bottom rounded-lg"
              style={{ backgroundImage: 'url(/assets/image/why-macaron/decoration1.png)' }}
            ></div>
          </div>

          {/* Feature 2 */}
          <div 
            className="md:h-[279px] w-full rounded-none md:rounded-2xl bg-cover bg-center flex md:flex-row-reverse md:pr-10 flex-col items-center justify-between gap-6 md:gap-8"
            style={{ backgroundImage: "url('/assets/image/why-macaron/bg2.svg')" }}
          >
            <div className="flex-1 px-8 pt-10 md:pt-0" style={{ color: '#950200' }}>
              <h3 className="text-xl font-semibold mb-3 leading-[30px]">你的 Macaron 是真正独特的</h3>
              <p className="text-lg leading-[1.6] opacity-60">通过个人测试和深度记忆，Macaron 与你共同成长，并记住重要的事，就像真正的朋友一样。</p>
            </div>
            <div 
              className="w-[414px] md:h-full h-[278px] bg-contain bg-no-repeat bg-bottom rounded-lg"
              style={{ backgroundImage: 'url(/assets/image/why-macaron/decoration2.png)' }}
            ></div>
          </div>

          {/* Feature 3 */}
          <div 
            className="md:h-[279px] w-full rounded-none md:rounded-2xl bg-cover bg-center flex md:flex-row md:pl-10 flex-col items-center justify-between gap-6 md:gap-8"
            style={{ backgroundImage: "url('/assets/image/why-macaron/bg3.svg')" }}
          >
            <div className="flex-1 px-8 pt-10 md:pt-0" style={{ color: '#695A00' }}>
              <h3 className="text-xl font-semibold mb-3 leading-[30px]">没有演示，只有真正的解决方案</h3>
              <p className="text-lg leading-[1.6] opacity-60">Macaron 构建你真正需要的实用工具。只需一个简单的请求，无需繁琐调整。</p>
            </div>
            <div 
              className="w-[414px] md:h-full h-[278px] bg-contain bg-no-repeat bg-bottom rounded-lg"
              style={{ backgroundImage: 'url(/assets/image/why-macaron/decoration3.png)' }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyMacaronSection;