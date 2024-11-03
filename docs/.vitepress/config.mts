import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base:"/kai-vitepress/",
  title: "The Kai Project",
  description: "A free and open source past question website.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Links', link: '/sites' }
    ],

    sidebar: [
      {
        text: '東京大学',
        items: [
          {
            text: '理学系研究科',
            items: [
              {
                text: '物理学専攻',
                items: [
                  {
                    text: '2022年度',
                    items: [
                      { text: '専門科目 第1問', link: '/tokyo_university/science/phys_2022_sennmon_1.md' }
                    ]
                  },
                  {
                    text: '2020年度',
                    items: [
                      { text: '物理学 第1問', link: '/tokyo_university/science/phys_2020_phys_1.md' },
                      { text: '物理学 第2問', link: '/tokyo_university/science/phys_2020_phys_2.md' }
                    ]
                  }
                ]
              },
              {
                text: '天文学専攻',
                items: [
                  {
                    text: '2023年度',
                    items: [
                      { text: '天文学', link: '/tokyo_university/science/astron_2023_astron.md' }
                    ]
                  }
                ]
              },
              {
                text: '化学専攻',
                items: [
                  {
                    text: '2020年度',
                    items: [
                      { text: '数理科学', link: '/tokyo_university/science/chem_2020_math_1.md' }
                    ]
                  }
                ]
              }
            ]
          },
          {
            text: '工学系研究科',
            items: [
              {
                text: '共通',
                items: [
                  {
                    text: '2023年度',
                    items: [
                      { text: '数学 第1問', link: '/tokyo_university/engineering/kyotsu_2023_math_1.md' },
                      { text: '数学 第2問', link: '/tokyo_university/engineering/kyotsu_2023_math_2.md' }
                    ]
                  },
                  {
                    text: '2022年度',
                    items: [
                      { text: '数学1', link: '/tokyo_university/engineering/kyotsu_2022_math_1.md' },
                      { text: '数学2', link: '/tokyo_university/engineering/kyotsu_2022_math_2.md' },
                      { text: '数学3', link: '/tokyo_university/engineering/kyotsu_2022_math_3.md' },
                      { text: '物理学1', link: '/tokyo_university/engineering/kyotsu_2022_phys_1.md' }
                    ]
                  },
                  {
                    text: '2021年度',
                    items: [
                      { text: '数学1', link: '/tokyo_university/engineering/kyotsu_2021_math_1.md' },
                      { text: '数学2', link: '/tokyo_university/engineering/kyotsu_2021_math_2.md' },
                      { text: '数学3', link: '/tokyo_university/engineering/kyotsu_2021_math_3.md' },
                      { text: '物理学1', link: '/tokyo_university/engineering/kyotsu_2021_phys_1.md' }
                    ]
                  },
                  {
                    text: '2020年度',
                    items: [
                      { text: '数学 第1問', link: '/tokyo_university/engineering/kyotsu_2020_math_1.md' },
                      { text: '数学 第2問', link: '/tokyo_university/engineering/kyotsu_2020_math_2.md' }
                    ]
                  },
                  {
                    text: '2017年度',
                    items: [
                      { text: '数学 第1問', link: '/tokyo_university/engineering/kyotsu_2017_math_1.md' },
                      { text: '数学 第2問', link: '/tokyo_university/engineering/kyotsu_2017_math_2.md' },
                      { text: '数学 第3問', link: '/tokyo_university/engineering/kyotsu_2017_math_3.md' },
                      { text: '数学 第4問', link: '/tokyo_university/engineering/kyotsu_2017_math_4.md' },
                      { text: '数学 第5問', link: '/tokyo_university/engineering/kyotsu_2017_math_5.md' }
                    ]
                  }
                ]
              },
              {
                text: '物理工学専攻',
                items: [
                  {
                    text: '2020年度',
                    items: [
                      { text: '物理学 第3問', link: '/tokyo_university/engineering/ap_2020_phys_3.md' }
                    ]
                  }
                ]
              },
              {
                text: '電気系工学専攻',
                items: [
                  {
                    text: '2022年度',
                    items: [
                      { text: '問題3 情報工学I', link: '/tokyo_university/engineering/eeis_2022_3.md' },
                      { text: '問題4 情報工学II', link: '/tokyo_university/engineering/eeis_2022_4.md' }
                    ]
                  },
                  {
                    text: '2021年度',
                    items: [
                      { text: '問題4 情報工学II', link: '/tokyo_university/engineering/eeis_2021_4.md' }
                    ]
                  },
                  {
                    text: '2020年度',
                    items: [
                      { text: '問題3 情報工学I', link: '/tokyo_university/engineering/eeis_2020_3.md' },
                      { text: '問題4 情報工学II', link: '/tokyo_university/engineering/eeis_2020_4.md' }
                    ]
                  }
                ]
              },
              {
                text: '技術経営戦略学専攻',
                items: [
                  {
                    text: '2022年度',
                    items: [
                      { text: 'セッション 1', link: '/tokyo_university/engineering/tmi_2022_session_1.md' }
                    ]
                  }
                ]
              }
            ]
          },
          {
            text: '情報理工学研究科',
            items: [
              {
                text: '共通',
                items: [
                  {
                    text: '2023年度',
                    items: [
                      { text: '数学 第1問', link: '/tokyo_university/IST/kyotsu_2023_math_1.md' },
                      { text: '数学 第2問', link: '/tokyo_university/IST/kyotsu_2023_math_2.md' },
                      { text: '数学 第3問', link: '/tokyo_university/IST/kyotsu_2023_math_3.md' }
                    ]
                  },
                  {
                    text: '2022年度',
                    items: [
                      { text: '数学 第1問', link: '/tokyo_university/IST/kyotsu_2022_math_1.md' },
                      { text: '数学 第2問', link: '/tokyo_university/IST/kyotsu_2022_math_2.md' },
                      { text: '数学 第3問', link: '/tokyo_university/IST/kyotsu_2022_math_3.md' }
                    ]
                  },
                  {
                    text: '2020年度',
                    items: [
                      { text: '数学 第1問', link: '/tokyo_university/IST/kyotsu_2020_math_1.md' },
                      { text: '数学 第2問', link: '/tokyo_university/IST/kyotsu_2020_math_2.md' },
                      { text: '数学 第3問', link: '/tokyo_university/IST/kyotsu_2020_math_3.md' }
                    ]
                  },
                  {
                    text: '2019年度',
                    items: [
                      { text: '数学 第1問', link: '/tokyo_university/IST/kyotsu_2019_math_1.md' },
                      { text: '数学 第2問', link: '/tokyo_university/IST/kyotsu_2019_math_2.md' },
                      { text: '数学 第3問', link: '/tokyo_university/IST/kyotsu_2019_math_3.md' }
                    ]
                  },
                  {
                    text: '2018年度',
                    items: [
                      { text: '数学 第1問', link: '/tokyo_university/IST/kyotsu_2018_math_1.md' },
                      { text: '数学 第2問', link: '/tokyo_university/IST/kyotsu_2018_math_2.md' },
                      { text: '数学 第3問', link: '/tokyo_university/IST/kyotsu_2018_math_3.md' }
                    ]
                  },
                  {
                    text: '2017年度',
                    items: [
                      { text: '数学 第1問', link: '/tokyo_university/IST/kyotsu_2017_math_1.md' },
                      { text: '数学 第2問', link: '/tokyo_university/IST/kyotsu_2017_math_2.md' },
                      { text: '数学 第3問', link: '/tokyo_university/IST/kyotsu_2017_math_3.md' }
                    ]
                  }
                ]
              },
              {
                text: '数理情報学',
                items: [
                  {
                    text: '2023年度',
                    items: [
                      { text: '第1問', link: '/tokyo_university/IST/suuri_2023_1.md' },
                      { text: '第2問', link: '/tokyo_university/IST/suuri_2023_2.md' },
                      { text: '第3問', link: '/tokyo_university/IST/suuri_2023_3.md' },
                      { text: '第4問', link: '/tokyo_university/IST/suuri_2023_4.md' },
                      { text: '第5問', link: '/tokyo_university/IST/suuri_2023_5.md' }
                    ]
                  },
                  {
                    text: '2020年度',
                    items: [
                      { text: '第1問', link: '/tokyo_university/IST/suuri_2020_1.md' },
                      { text: '第2問', link: '/tokyo_university/IST/suuri_2020_2.md' },
                      { text: '第3問', link: '/tokyo_university/IST/suuri_2020_3.md' },
                      { text: '第4問', link: '/tokyo_university/IST/suuri_2020_4.md' },
                      { text: '第5問', link: '/tokyo_university/IST/suuri_2020_5.md' }
                    ]
                  },
                  {
                    text: '2019年度',
                    items: [
                      { text: '第1問', link: '/tokyo_university/IST/suuri_2019_1.md' },
                      { text: '第3問', link: '/tokyo_university/IST/suuri_2019_3.md' },
                      { text: '第4問', link: '/tokyo_university/IST/suuri_2019_4.md' }
                    ]
                  },
                  {
                    text: '2017年度',
                    items: [
                      { text: '第2問', link: '/tokyo_university/IST/suuri_2017_2.md' },
                      { text: '第3問', link: '/tokyo_university/IST/suuri_2017_3.md' },
                      { text: '第5問', link: '/tokyo_university/IST/suuri_2017_5.md' }
                    ]
                  }
                ]
              },
              {
                text: '電子情報学',
                items: [
                  {
                    text: '2024年度',
                    items: [
                      { text: '専門 第2問', link: '/tokyo_university/IST/denshi_2024_senmon_2.md' },
                      { text: '専門 第5問', link: '/tokyo_university/IST/denshi_2024_senmon_5.md' }
                    ]
                  },
                  {
                    text: '2023年度',
                    items: [
                      { text: '専門 第2問', link: '/tokyo_university/IST/denshi_2023_senmon_2.md' },
                      { text: '専門 第5問', link: '/tokyo_university/IST/denshi_2023_senmon_5.md' }
                    ]
                  },
                  {
                    text: '2020年度',
                    items: [
                      { text: '専門 第1問', link: '/tokyo_university/IST/denshi_2020_senmon_1.md' },
                      { text: '専門 第2問', link: '/tokyo_university/IST/denshi_2020_senmon_2.md' },
                      { text: '専門 第5問', link: '/tokyo_university/IST/denshi_2020_senmon_5.md' }
                    ]
                  },
                  {
                    text: '2019年度',
                    items: [
                      { text: '専門 第5問', link: '/tokyo_university/IST/denshi_2019_senmon_5.md' }
                    ]
                  },
                  {
                    text: '2018年度',
                    items: [
                      { text: '専門 第2問', link: '/tokyo_university/IST/denshi_2018_senmon_2.md' },
                      { text: '専門 第5問', link: '/tokyo_university/IST/denshi_2018_senmon_5.md' }
                    ]
                  },
                  {
                    text: '2017年度',
                    items: [
                      { text: '専門 第2問', link: '/tokyo_university/IST/denshi_2017_senmon_2.md' }
                    ]
                  },
                  {
                    text: '2016年度',
                    items: [
                      { text: '専門 第4問', link: '/tokyo_university/IST/denshi_2016_senmon_4.md' },
                      { text: '専門 第5問', link: '/tokyo_university/IST/denshi_2016_senmon_5.md' }
                    ]
                  },
                  {
                    text: '2015年度',
                    items: [
                      { text: '専門 第2問', link: '/tokyo_university/IST/denshi_2015_senmon_2.md' },
                      { text: '専門 第5問', link: '/tokyo_university/IST/denshi_2015_senmon_5.md' }
                    ]
                  },
                  {
                    text: '2014年度',
                    items: [
                      { text: '専門 第3問', link: '/tokyo_university/IST/denshi_2014_senmon_3.md' }
                    ]
                  },
                  {
                    text: '2013年度',
                    items: [
                      { text: '専門 第2問', link: '/tokyo_university/IST/denshi_2013_senmon_2.md' }
                    ]
                  },
                  {
                    text: '2011年度',
                    items: [
                      { text: '専門 第5問', link: '/tokyo_university/IST/denshi_2011_senmon_5.md' }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ],


    socialLinks: [
      { icon: 'github', link: 'https://github.com/Myyura/the_kai_project' }
    ]
  },
  locales: {
    root: {
      label: '日本語',
      lang: 'jp'
    },
    en: {
      label: 'English',
      lang: 'en',         
    },
    zh_cn: {
      label: '简体中文',
      lang: 'zh_cn',         
    }
  },
})
