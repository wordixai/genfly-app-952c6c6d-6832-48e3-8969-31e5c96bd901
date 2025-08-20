import { Button } from '@/components/ui/button';

interface PlaybookItem {
  title: string;
  description: string;
  imageUrl: string;
  href: string;
}

const playbooks: PlaybookItem[] = [
  {
    title: 'Fit Plan Generator',
    description: 'Your body your blueprint fitness planner',
    imageUrl: 'https://macaron-system.oss-accelerate.aliyuncs.com/image/project_template/6892e5caaa6e16ed138ee4d1-1.png?x-oss-process=image/format,webp/resize,p_20',
    href: '/playbook/fit-plan-generator'
  },
  {
    title: 'Baby Meal Planner',
    description: 'Fresh baby meals from farm to spoon',
    imageUrl: 'https://macaron-system.oss-accelerate.aliyuncs.com/image/project_template/68941203129a8b22ebbd18c4-1.png?x-oss-process=image/format,webp/resize,p_20',
    href: '/playbook/baby-meal-planner'
  },
  {
    title: 'Law Study Guide',
    description: 'Law wisdom at your fingertips today',
    imageUrl: 'https://macaron-system.oss-accelerate.aliyuncs.com/image/project_template/6893a06e96e8fcf6105f8975-1.png?x-oss-process=image/format,webp/resize,p_20',
    href: '/playbook/law-study-guide'
  },
  {
    title: 'Book Match Guide',
    description: 'Find your next favorite book match',
    imageUrl: 'https://macaron-system.oss-accelerate.aliyuncs.com/image/project_template/6892e40e7bac40bbf77f6e33-1.png?x-oss-process=image/format,webp/resize,p_20',
    href: '/playbook/book-match-guide'
  },
  {
    title: 'Foundation Match Pro',
    description: 'Find your perfect foundation match today',
    imageUrl: 'https://macaron-system.oss-accelerate.aliyuncs.com/image/project_template/6893a82696e8fcf6105f8aae-1.png?x-oss-process=image/format,webp/resize,p_20',
    href: '/playbook/foundation-match-pro'
  },
  {
    title: 'StyleSync',
    description: 'Your closet styles your perfect day',
    imageUrl: 'https://macaron-system.oss-accelerate.aliyuncs.com/image/project_template/68936c05def845e53c83c0a3-1.png?x-oss-process=image/format,webp/resize,p_20',
    href: '/playbook/stylesync'
  },
  {
    title: 'GreenWave Energy',
    description: 'Clean energy powers tomorrows future today',
    imageUrl: 'https://macaron-system.oss-accelerate.aliyuncs.com/image/project_template/6892550cc28019528d81a777-1.png?x-oss-process=image/format,webp/resize,p_20',
    href: '/playbook/greenwave-energy'
  },
  {
    title: 'Beauty Brand Hub',
    description: 'Natural beauty for modern radiance',
    imageUrl: 'https://macaron-system.oss-accelerate.aliyuncs.com/image/project_template/6893138b1bb07ead242b868e-1.png?x-oss-process=image/format,webp/resize,p_20',
    href: '/playbook/beauty-brand-hub'
  },
  {
    title: 'Bubble Tea Filter',
    description: 'Sweet sips that fit your limits',
    imageUrl: 'https://macaron-user.oss-accelerate.aliyuncs.com/admin/99e1db8c-e106-4543-b24b-f6cd5d7d852c.png?x-oss-process=image/format,webp/resize,p_20',
    href: '/playbook/bubble-tea-filter'
  },
  {
    title: 'Gift Guide Pro',
    description: 'Perfect gifts for every birthday story',
    imageUrl: 'https://macaron-system.oss-accelerate.aliyuncs.com/image/project_template/6894419938b4126bb126cb00-1.png?x-oss-process=image/format,webp/resize,p_20',
    href: '/playbook/gift-guide-pro'
  },
  {
    title: 'Serum Compare',
    description: 'Smart serum picks for your skin',
    imageUrl: 'https://macaron-system.oss-accelerate.aliyuncs.com/image/project_template/6893a06d96e8fcf6105f893c-1.png?x-oss-process=image/format,webp/resize,p_20',
    href: '/playbook/serum-compare'
  },
  {
    title: 'MBTI Game Match',
    description: 'Find your gaming personality match',
    imageUrl: 'https://macaron-system.oss-accelerate.aliyuncs.com/image/project_template/68933785b4928472052820b9-1.png?x-oss-process=image/format,webp/resize,p_20',
    href: '/playbook/mbti-game-match'
  }
];

const PlaybookSection = () => {
  return (
    <section className="w-full py-12 md:py-24">
      <div className="max-w-7xl mx-auto md:px-4">
        <div className="text-center mb-12 md:mb-16 p-8">
          <h2 className="text-4xl md:text-5xl section-title text-foreground mb-4">实际操作</h2>
          <p className="text-lg md:text-xl text-secondary max-w-2xl mx-auto">其他 AI 助手帮助你工作。Macaron 帮助你更好生活。</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-[960px] mx-auto">
          {playbooks.map((playbook, index) => (
            <div key={index}>
              <a className="block" href={playbook.href}>
                <div className="group relative w-full flex flex-col rounded-3xl overflow-hidden cursor-pointer bg-[#F1EFE9] border border-muted transition-all duration-300 ease-out hover:shadow-lg h-[356px]">
                  <div className="w-full flex-1 relative overflow-hidden flex flex-col">
                    <div className="p-5 pb-2 flex flex-col z-30 flex-shrink-0">
                      <div className="flex items-center gap-2 sm:gap-3 h-[26px] mb-[12px]">
                        <h3 className="text-[20px] leading-[1.3] font-normal line-clamp-1 drop-shadow-sm text-foreground flex-1 min-w-0">
                          {playbook.title}
                        </h3>
                      </div>
                      <p className="text-[16px] leading-[1.3] text-secondary line-clamp-2 min-h-[2.6em]">
                        {playbook.description}
                      </p>
                    </div>
                    <div className="flex-1 relative flex items-center justify-center pointer-events-none mt-3">
                      <div 
                        className="top-0 absolute w-[60%] aspect-[9/19.5] rounded-[12px] bg-white shadow-xl z-20 transition-transform duration-300 ease-out group-hover:-translate-y-3 bg-origin-border bg-cover bg-center"
                        style={{ backgroundImage: `url(${playbook.imageUrl})` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>

        <div className="flex justify-center w-full mt-12 md:mt-16">
          <div className="w-[290px] h-auto">
            <Button className="bg-macaron-gradient noise-background text-white border border-white/70 shadow-[inset_0px_0px_17px_0px_rgba(255,255,255,0.25)] h-14 rounded-full px-10 text-base relative overflow-visible z-20 w-full">
              <span className="relative z-20">在灵感库中查看超过 200 个案例</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlaybookSection;