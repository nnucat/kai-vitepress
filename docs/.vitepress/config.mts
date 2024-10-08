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
                      { text: '専門科目 第1問', link: 'kakomonn/tokyo_university/science/phys_2022_sennmon_1.md' }
                    ]
                  },
                  {
                    text: '2020年度',
                    items: [
                      { text: '物理学 第1問', link: 'kakomonn/tokyo_university/science/phys_2020_phys_1.md' },
                      { text: '物理学 第2問', link: 'kakomonn/tokyo_university/science/phys_2020_phys_2.md' }
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
                      { text: '天文学', link: 'kakomonn/tokyo_university/science/astron_2023_astron.md' }
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
                      { text: '数理科学', link: 'kakomonn/tokyo_university/science/chem_2020_math_1.md' }
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
                      { text: '数学 第1問', link: 'kakomonn/tokyo_university/engineering/kyotsu_2023_math_1.md' },
                      { text: '数学 第2問', link: 'kakomonn/tokyo_university/engineering/kyotsu_2023_math_2.md' }
                    ]
                  },
                  {
                    text: '2022年度',
                    items: [
                      { text: '数学1', link: 'kakomonn/tokyo_university/engineering/kyotsu_2022_math_1.md' },
                      { text: '数学2', link: 'kakomonn/tokyo_university/engineering/kyotsu_2022_math_2.md' },
                      { text: '数学3', link: 'kakomonn/tokyo_university/engineering/kyotsu_2022_math_3.md' },
                      { text: '物理学1', link: 'kakomonn/tokyo_university/engineering/kyotsu_2022_phys_1.md' }
                    ]
                  },
                  {
                    text: '2021年度',
                    items: [
                      { text: '数学1', link: 'kakomonn/tokyo_university/engineering/kyotsu_2021_math_1.md' },
                      { text: '数学2', link: 'kakomonn/tokyo_university/engineering/kyotsu_2021_math_2.md' },
                      { text: '数学3', link: 'kakomonn/tokyo_university/engineering/kyotsu_2021_math_3.md' },
                      { text: '物理学1', link: 'kakomonn/tokyo_university/engineering/kyotsu_2021_phys_1.md' }
                    ]
                  },
                  {
                    text: '2020年度',
                    items: [
                      { text: '数学 第1問', link: 'kakomonn/tokyo_university/engineering/kyotsu_2020_math_1.md' },
                      { text: '数学 第2問', link: 'kakomonn/tokyo_university/engineering/kyotsu_2020_math_2.md' }
                    ]
                  },
                  {
                    text: '2017年度',
                    items: [
                      { text: '数学 第1問', link: 'kakomonn/tokyo_university/engineering/kyotsu_2017_math_1.md' },
                      { text: '数学 第2問', link: 'kakomonn/tokyo_university/engineering/kyotsu_2017_math_2.md' },
                      { text: '数学 第3問', link: 'kakomonn/tokyo_university/engineering/kyotsu_2017_math_3.md' },
                      { text: '数学 第4問', link: 'kakomonn/tokyo_university/engineering/kyotsu_2017_math_4.md' },
                      { text: '数学 第5問', link: 'kakomonn/tokyo_university/engineering/kyotsu_2017_math_5.md' }
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
                      { text: '物理学 第3問', link: 'kakomonn/tokyo_university/engineering/ap_2020_phys_3.md' }
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
                      { text: '問題3 情報工学I', link: 'kakomonn/tokyo_university/engineering/eeis_2022_3.md' },
                      { text: '問題4 情報工学II', link: 'kakomonn/tokyo_university/engineering/eeis_2022_4.md' }
                    ]
                  },
                  {
                    text: '2021年度',
                    items: [
                      { text: '問題4 情報工学II', link: 'kakomonn/tokyo_university/engineering/eeis_2021_4.md' }
                    ]
                  },
                  {
                    text: '2020年度',
                    items: [
                      { text: '問題3 情報工学I', link: 'kakomonn/tokyo_university/engineering/eeis_2020_3.md' },
                      { text: '問題4 情報工学II', link: 'kakomonn/tokyo_university/engineering/eeis_2020_4.md' }
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
                      { text: 'セッション 1', link: 'kakomonn/tokyo_university/engineering/tmi_2022_session_1.md' }
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
                      { text: '数学 第1問', link: 'kakomonn/tokyo_university/IST/kyotsu_2023_math_1.md' },
                      { text: '数学 第2問', link: 'kakomonn/tokyo_university/IST/kyotsu_2023_math_2.md' },
                      { text: '数学 第3問', link: 'kakomonn/tokyo_university/IST/kyotsu_2023_math_3.md' }
                    ]
                  },
                  {
                    text: '2022年度',
                    items: [
                      { text: '数学 第1問', link: 'kakomonn/tokyo_university/IST/kyotsu_2022_math_1.md' },
                      { text: '数学 第2問', link: 'kakomonn/tokyo_university/IST/kyotsu_2022_math_2.md' },
                      { text: '数学 第3問', link: 'kakomonn/tokyo_university/IST/kyotsu_2022_math_3.md' }
                    ]
                  },
                  {
                    text: '2020年度',
                    items: [
                      { text: '数学 第1問', link: 'kakomonn/tokyo_university/IST/kyotsu_2020_math_1.md' },
                      { text: '数学 第2問', link: 'kakomonn/tokyo_university/IST/kyotsu_2020_math_2.md' },
                      { text: '数学 第3問', link: 'kakomonn/tokyo_university/IST/kyotsu_2020_math_3.md' }
                    ]
                  },
                  {
                    text: '2019年度',
                    items: [
                      { text: '数学 第1問', link: 'kakomonn/tokyo_university/IST/kyotsu_2019_math_1.md' },
                      { text: '数学 第2問', link: 'kakomonn/tokyo_university/IST/kyotsu_2019_math_2.md' },
                      { text: '数学 第3問', link: 'kakomonn/tokyo_university/IST/kyotsu_2019_math_3.md' }
                    ]
                  },
                  {
                    text: '2018年度',
                    items: [
                      { text: '数学 第1問', link: 'kakomonn/tokyo_university/IST/kyotsu_2018_math_1.md' },
                      { text: '数学 第2問', link: 'kakomonn/tokyo_university/IST/kyotsu_2018_math_2.md' },
                      { text: '数学 第3問', link: 'kakomonn/tokyo_university/IST/kyotsu_2018_math_3.md' }
                    ]
                  },
                  {
                    text: '2017年度',
                    items: [
                      { text: '数学 第1問', link: 'kakomonn/tokyo_university/IST/kyotsu_2017_math_1.md' },
                      { text: '数学 第2問', link: 'kakomonn/tokyo_university/IST/kyotsu_2017_math_2.md' },
                      { text: '数学 第3問', link: 'kakomonn/tokyo_university/IST/kyotsu_2017_math_3.md' }
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
                      { text: '第1問', link: 'kakomonn/tokyo_university/IST/suuri_2023_1.md' },
                      { text: '第2問', link: 'kakomonn/tokyo_university/IST/suuri_2023_2.md' },
                      { text: '第3問', link: 'kakomonn/tokyo_university/IST/suuri_2023_3.md' },
                      { text: '第4問', link: 'kakomonn/tokyo_university/IST/suuri_2023_4.md' },
                      { text: '第5問', link: 'kakomonn/tokyo_university/IST/suuri_2023_5.md' }
                    ]
                  },
                  {
                    text: '2020年度',
                    items: [
                      { text: '第1問', link: 'kakomonn/tokyo_university/IST/suuri_2020_1.md' },
                      { text: '第2問', link: 'kakomonn/tokyo_university/IST/suuri_2020_2.md' },
                      { text: '第3問', link: 'kakomonn/tokyo_university/IST/suuri_2020_3.md' },
                      { text: '第4問', link: 'kakomonn/tokyo_university/IST/suuri_2020_4.md' },
                      { text: '第5問', link: 'kakomonn/tokyo_university/IST/suuri_2020_5.md' }
                    ]
                  },
                  {
                    text: '2019年度',
                    items: [
                      { text: '第1問', link: 'kakomonn/tokyo_university/IST/suuri_2019_1.md' },
                      { text: '第3問', link: 'kakomonn/tokyo_university/IST/suuri_2019_3.md' },
                      { text: '第4問', link: 'kakomonn/tokyo_university/IST/suuri_2019_4.md' }
                    ]
                  },
                  {
                    text: '2017年度',
                    items: [
                      { text: '第2問', link: 'kakomonn/tokyo_university/IST/suuri_2017_2.md' },
                      { text: '第3問', link: 'kakomonn/tokyo_university/IST/suuri_2017_3.md' },
                      { text: '第5問', link: 'kakomonn/tokyo_university/IST/suuri_2017_5.md' }
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
                      { text: '専門 第2問', link: 'kakomonn/tokyo_university/IST/denshi_2024_senmon_2.md' },
                      { text: '専門 第5問', link: 'kakomonn/tokyo_university/IST/denshi_2024_senmon_5.md' }
                    ]
                  },
                  {
                    text: '2023年度',
                    items: [
                      { text: '専門 第2問', link: 'kakomonn/tokyo_university/IST/denshi_2023_senmon_2.md' },
                      { text: '専門 第5問', link: 'kakomonn/tokyo_university/IST/denshi_2023_senmon_5.md' }
                    ]
                  },
                  {
                    text: '2020年度',
                    items: [
                      { text: '専門 第1問', link: 'kakomonn/tokyo_university/IST/denshi_2020_senmon_1.md' },
                      { text: '専門 第2問', link: 'kakomonn/tokyo_university/IST/denshi_2020_senmon_2.md' },
                      { text: '専門 第5問', link: 'kakomonn/tokyo_university/IST/denshi_2020_senmon_5.md' }
                    ]
                  },
                  {
                    text: '2019年度',
                    items: [
                      { text: '専門 第5問', link: 'kakomonn/tokyo_university/IST/denshi_2019_senmon_5.md' }
                    ]
                  },
                  {
                    text: '2018年度',
                    items: [
                      { text: '専門 第2問', link: 'kakomonn/tokyo_university/IST/denshi_2018_senmon_2.md' },
                      { text: '専門 第5問', link: 'kakomonn/tokyo_university/IST/denshi_2018_senmon_5.md' }
                    ]
                  },
                  {
                    text: '2017年度',
                    items: [
                      { text: '専門 第2問', link: 'kakomonn/tokyo_university/IST/denshi_2017_senmon_2.md' }
                    ]
                  },
                  {
                    text: '2016年度',
                    items: [
                      { text: '専門 第4問', link: 'kakomonn/tokyo_university/IST/denshi_2016_senmon_4.md' },
                      { text: '専門 第5問', link: 'kakomonn/tokyo_university/IST/denshi_2016_senmon_5.md' }
                    ]
                  },
                  {
                    text: '2015年度',
                    items: [
                      { text: '専門 第2問', link: 'kakomonn/tokyo_university/IST/denshi_2015_senmon_2.md' },
                      { text: '専門 第5問', link: 'kakomonn/tokyo_university/IST/denshi_2015_senmon_5.md' }
                    ]
                  },
                  {
                    text: '2014年度',
                    items: [
                      { text: '専門 第3問', link: 'kakomonn/tokyo_university/IST/denshi_2014_senmon_3.md' }
                    ]
                  },
                  {
                    text: '2013年度',
                    items: [
                      { text: '専門 第2問', link: 'kakomonn/tokyo_university/IST/denshi_2013_senmon_2.md' }
                    ]
                  },
                  {
                    text: '2011年度',
                    items: [
                      { text: '専門 第5問', link: 'kakomonn/tokyo_university/IST/denshi_2011_senmon_5.md' }
                    ]
                  }
                ]
              }
            ]
          },
          {
            text: "新領域創成科学研究科",
            items: [
              {
                text: "物質系専攻",
                items: [
                  {
                    text: "2020年度",
                    items: [
                      { text: "第3問", link: "kakomonn/tokyo_university/frontier_sciences/materials_2020_3.md" }
                    ]
                  }
                ]
              },
              {
                text: "複雑理工学専攻",
                items: [
                  {
                    text: "2023年度",
                    items: [
                      { text: "専門基礎科目 1.1 微分積分", link: "kakomonn/tokyo_university/frontier_sciences/cse_2023_1_1.md" },
                      { text: "専門基礎科目 2.1 線形代数", link: "kakomonn/tokyo_university/frontier_sciences/cse_2023_2_1.md" },
                      { text: "専門基礎科目 3.2 確率・統計", link: "kakomonn/tokyo_university/frontier_sciences/cse_2023_3_2.md" }
                    ]
                  },
                  {
                    text: "2022年度",
                    items: [
                      { text: "専門基礎科目 1.1 微分積分", link: "kakomonn/tokyo_university/frontier_sciences/cse_2022_1_1.md" },
                      { text: "専門基礎科目 2.1 線形代数", link: "kakomonn/tokyo_university/frontier_sciences/cse_2022_2_1.md" },
                      { text: "専門基礎科目 3.2 確率・統計", link: "kakomonn/tokyo_university/frontier_sciences/cse_2022_3_2.md" }
                    ]
                  },
                  {
                    text: "2020年度",
                    items: [
                      { text: "専門基礎科目 第1問 数学", link: "kakomonn/tokyo_university/frontier_sciences/cse_2020_1.md" },
                      { text: "専門基礎科目 第2問 数学", link: "kakomonn/tokyo_university/frontier_sciences/cse_2020_2.md" },
                      { text: "専門基礎科目 第3問 数学", link: "kakomonn/tokyo_university/frontier_sciences/cse_2020_3.md" },
                      { text: "専門基礎科目 第4問 数学", link: "kakomonn/tokyo_university/frontier_sciences/cse_2020_4.md" }
                    ]
                  },
                  {
                    text: "2019年度",
                    items: [
                      { text: "専門基礎科目 第1問 数学", link: "kakomonn/tokyo_university/frontier_sciences/cse_2019_1.md" },
                      { text: "専門基礎科目 第2問 数学", link: "kakomonn/tokyo_university/frontier_sciences/cse_2019_2.md" },
                      { text: "専門基礎科目 第4問 数学", link: "kakomonn/tokyo_university/frontier_sciences/cse_2019_4.md" },
                      { text: "専門基礎科目 第8問 物理学", link: "kakomonn/tokyo_university/frontier_sciences/cse_2019_8.md" }
                    ]
                  },
                  {
                    text: "2018年度",
                    items: [
                      { text: "専門基礎科目 第1問 数学", link: "kakomonn/tokyo_university/frontier_sciences/cse_2018_1.md" },
                      { text: "専門基礎科目 第2問 数学", link: "kakomonn/tokyo_university/frontier_sciences/cse_2018_2.md" },
                      { text: "専門基礎科目 第4問 数学", link: "kakomonn/tokyo_university/frontier_sciences/cse_2018_4.md" }
                    ]
                  }
                ]
              },
              {
                text: "メディカル情報生命専攻",
                items: [
                  {
                    text: "2023年度",
                    items: [
                      { text: "8月 問題7", link: "kakomonn/tokyo_university/frontier_sciences/cbms_202308_7.md" },
                      { text: "8月 問題8", link: "kakomonn/tokyo_university/frontier_sciences/cbms_202308_8.md" },
                      { text: "8月 問題9", link: "kakomonn/tokyo_university/frontier_sciences/cbms_202308_9.md" },
                      { text: "8月 問題10", link: "kakomonn/tokyo_university/frontier_sciences/cbms_202308_10.md" },
                      { text: "8月 問題11", link: "kakomonn/tokyo_university/frontier_sciences/cbms_202308_11.md" },
                      { text: "8月 問題12", link: "kakomonn/tokyo_university/frontier_sciences/cbms_202308_12.md" }
                    ]
                  },
                  {
                    text: "2024年度",
                    items: [
                      { text: "1月 問題7", link: "kakomonn/tokyo_university/frontier_sciences/cbms_202401_7.md" },
                      { text: "1月 問題8", link: "kakomonn/tokyo_university/frontier_sciences/cbms_202401_8.md" },
                      { text: "1月 問題9", link: "kakomonn/tokyo_university/frontier_sciences/cbms_202401_9.md" },
                      { text: "1月 問題10", link: "kakomonn/tokyo_university/frontier_sciences/cbms_202401_10.md" },
                      { text: "1月 問題11", link: "kakomonn/tokyo_university/frontier_sciences/cbms_202401_11.md" },
                      { text: "1月 問題12", link: "kakomonn/tokyo_university/frontier_sciences/cbms_202401_12.md" }
                    ]
                  }
                ]
              },
              {
                text: "海洋技術環境学専攻",
                items: [
                  {
                    text: "2022年度",
                    items: [
                      { text: "第1~6問", link: "kakomonn/tokyo_university/frontier_sciences/otpe_2022_all.md" }
                    ]
                  },
                  {
                    text: "2020年度",
                    items: [
                      { text: "第1~9問", link: "kakomonn/tokyo_university/frontier_sciences/otpe_2020_all.md" }
                    ]
                  },
                  {
                    text: "2019年度",
                    items: [
                      { text: "第1~9問", link: "kakomonn/tokyo_university/frontier_sciences/otpe_2019_all.md" }
                    ]
                  }
                ]
              }
            ]
          },
          {
            text: "総合文化研究科",
            items: [
              {
                text: "広域科学専攻・広域システム科学系",
                items: [
                  {
                    text: "2020年度",
                    items: [
                      { text: "総合科目 第3問", link: "kakomonn/tokyo_university/art_and_sciences/system_2020_3.md" }
                    ]
                  }
                ]
              }
            ]
          },
          {
            text: "情報学環・学際情報学府",
            items: [
              {
                text: "学際情報学専攻・生物統計情報学コース",
                items: [
                  {
                    text: "2020年度",
                    items: [
                      { text: "専門科目 第1問", link: "kakomonn/tokyo_university/III/biostat_bioinfo_2020_1.md" },
                      { text: "専門科目 第2問", link: "kakomonn/tokyo_university/III/biostat_bioinfo_2020_2.md" }
                    ]
                  },
                  {
                    text: "2019年度",
                    items: [
                      { text: "専門科目 第1問", link: "kakomonn/tokyo_university/III/biostat_bioinfo_2019_1.md" },
                      { text: "専門科目 第2問", link: "kakomonn/tokyo_university/III/biostat_bioinfo_2019_2.md" }
                    ]
                  },
                  {
                    text: "2018年度",
                    items: [
                      { text: "専門科目 第1問", link: "kakomonn/tokyo_university/III/biostat_bioinfo_2018_1.md" },
                      { text: "専門科目 第2問", link: "kakomonn/tokyo_university/III/biostat_bioinfo_2018_2.md" }
                    ]
                  }
                ]
              }
            ]
          },
          {
            text: "数理科学研究科",
            items: [
              {
                text: "数理科学専攻",
                items: [
                  {
                    text: "2022年度",
                    items: [
                      { text: "専門科目 A 第1問", link: "kakomonn/tokyo_university/mathematical_sciences/ms_2022_A_1.md" }
                    ]
                  },
                  {
                    text: "2021年度",
                    items: [
                      { text: "専門科目 B 第16問", link: "kakomonn/tokyo_university/mathematical_sciences/ms_2021_B_16.md" }
                    ]
                  },
                  {
                    text: "2020年度",
                    items: [
                      { text: "専門科目 A 第1問", link: "kakomonn/tokyo_university/mathematical_sciences/ms_2020_A_1.md" }
                    ]
                  }
                ]
              }
            ]
          }

        ]              
      },
      {
        text: "京都大学",
        link: "kakomonn/kyoto_university/index.md",
        items: [
          {
            text: "理学研究科",
            items: [
              {
                text: "数学・数理解析専攻",
                items: [
                  {
                    text: "2024年度",
                    items: [
                      { text: "基礎科目 [1] ~ [4]", link: "kakomonn/kyoto_university/science/math_2024_kiso_1_4.md" },
                      { text: "専門科目 [13]", link: "kakomonn/kyoto_university/science/math_2024_senmon_13.md" }
                    ]
                  },
                  {
                    text: "2023年度",
                    items: [
                      { text: "基礎科目 [1] ~ [3]", link: "kakomonn/kyoto_university/science/math_2023_kiso_1_3.md" }
                    ]
                  }
                ]
              },
              {
                text: "物理学・宇宙物理学専攻",
                items: [
                  {
                    text: "2022年度",
                    items: [
                      { text: "I-3 (AB)", link: "kakomonn/kyoto_university/science/phys_2022_I_3_AB.md" },
                      { text: "II-2C", link: "kakomonn/kyoto_university/science/phys_2022_II_2_C.md" }
                    ]
                  },
                  {
                    text: "2020年度",
                    items: [
                      { text: "I-2 (AB)", link: "kakomonn/kyoto_university/science/phys_2020_I_2_AB.md" }
                    ]
                  }
                ]
              },
              {
                text: "地球惑星科学専攻",
                items: [
                  {
                    text: "2023年度",
                    items: [
                      { text: "基礎科目 問題1", link: "kakomonn/kyoto_university/science/eps_2023_kiso_1.md" }
                    ]
                  }
                ]
              },
              {
                text: "化学専攻",
                items: [
                  {
                    text: "2023年度",
                    items: [
                      { text: "物理学 基礎", link: "kakomonn/kyoto_university/science/chem_2023_phys_kiso.md" }
                    ]
                  }
                ]
              }
            ]
          },
          {
            text: "情報学研究科",
            items: [
              {
                text: "数理工学専攻",
                items: [
                  {
                    text: "2024年度",
                    items: [
                      { text: "グラフ理論", link: "kakomonn/kyoto_university/informatics/amp_202308_graph_theory.md" },
                      { text: "凸最適化", link: "kakomonn/kyoto_university/informatics/amp_202308_convex_optimaztion.md" },
                      { text: "常微分方程式", link: "kakomonn/kyoto_university/informatics/amp_202308_ordinary_differential_equations" }
                    ]
                  },
                  {
                    text: "2023年度",
                    items: [
                      { text: "線形計画", link: "kakomonn/kyoto_university/informatics/amp_202208_linear_programming.md" },
                      { text: "グラフ理論", link: "kakomonn/kyoto_university/informatics/amp_202208_graph_theory.md" },
                      { text: "オペレーションズ・リサーチ", link: "kakomonn/kyoto_university/informatics/amp_202208_operation_research.md" }
                    ]
                  },
                  {
                    text: "2022年度",
                    items: [
                      { text: "線形計画", link: "kakomonn/kyoto_university/informatics/amp_202108_linear_programming.md" },
                      { text: "アルゴリズム基礎", link: "kakomonn/kyoto_university/informatics/amp_202108_algorithm.md" },
                      { text: "グラフ理論", link: "kakomonn/kyoto_university/informatics/amp_202108_graph_theory.md" },
                      { text: "オペレーションズ・リサーチ", link: "kakomonn/kyoto_university/informatics/amp_202108_operation_research.md" },
                      { text: "力学系数学", link: "kakomonn/kyoto_university/informatics/amp_202108_mathematics_for_dynamical_systems.md" }
                    ]
                  },
                  {
                    text: "2021年度",
                    items: [
                      { text: "線形計画", link: "kakomonn/kyoto_university/informatics/amp_202008_linear_programming.md" },
                      { text: "グラフ理論", link: "kakomonn/kyoto_university/informatics/amp_202008_graph_theory.md" },
                      { text: "力学系数学", link: "kakomonn/kyoto_university/informatics/amp_202008_mathematics_for_dynamical_systems.md" }
                    ]
                  },
                  {
                    text: "2020年度",
                    items: [
                      { text: "線形計画", link: "kakomonn/kyoto_university/informatics/amp_201908_linear_programming.md" },
                      { text: "アルゴリズム基礎", link: "kakomonn/kyoto_university/informatics/amp_201908_algorithm.md" },
                      { text: "グラフ理論", link: "kakomonn/kyoto_university/informatics/amp_201908_graph_theory.md" },
                      { text: "オペレーションズ・リサーチ", link: "kakomonn/kyoto_university/informatics/amp_201908_operation_research.md" },
                      { text: "力学系数学", link: "kakomonn/kyoto_university/informatics/amp_201908_mathematics_for_dynamical_systems.md" }
                    ]
                  },
                  {
                    text: "2019年度",
                    items: [
                      { text: "線形計画", link: "kakomonn/kyoto_university/informatics/amp_201808_linear_programming.md" },
                      { text: "オペレーションズ・リサーチ", link: "kakomonn/kyoto_university/informatics/amp_201808_operation_research.md" },
                      { text: "力学系数学", link: "kakomonn/kyoto_university/informatics/amp_201808_mathematics_for_dynamical_systems.md" }
                    ]
                  },
                  {
                    text: "2018年度",
                    items: [
                      { text: "線形計画", link: "kakomonn/kyoto_university/informatics/amp_201708_linear_programming.md" },
                      { text: "オペレーションズ・リサーチ", link: "kakomonn/kyoto_university/informatics/amp_201708_operation_research.md" },
                      { text: "力学系数学", link: "kakomonn/kyoto_university/informatics/amp_201708_mathematics_for_dynamical_systems.md" }
                    ]
                  },
                  {
                    text: "2017年度",
                    items: [
                      { text: "オペレーションズ・リサーチ", link: "kakomonn/kyoto_university/informatics/amp_201608_operation_research.md" },
                      { text: "力学系数学", link: "kakomonn/kyoto_university/informatics/amp_201608_mathematics_for_dynamical_systems.md" }
                    ]
                  },
                  {
                    text: "2016年度",
                    items: [
                      { text: "線形計画", link: "kakomonn/kyoto_university/informatics/amp_201508_linear_programming.md" },
                      { text: "オペレーションズ・リサーチ", link: "kakomonn/kyoto_university/informatics/amp_201508_operation_research.md" }
                    ]
                  },
                  {
                    text: "2015年度",
                    items: [
                      { text: "線形計画", link: "kakomonn/kyoto_university/informatics/amp_201408_linear_programming.md" },
                      { text: "オペレーションズ・リサーチ", link: "kakomonn/kyoto_university/informatics/amp_201408_operation_research.md" },
                      { text: "力学系数学", link: "kakomonn/kyoto_university/informatics/amp_201408_mathematics_for_dynamical_systems.md" }
                    ]
                  },
                  {
                    text: "2014年度",
                    items: [
                      { text: "線形計画", link: "kakomonn/kyoto_university/informatics/amp_201308_linear_programming.md" }
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
  markdown: {
    math: true
  }
})
