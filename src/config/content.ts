import { ReactNode } from 'react';

export interface SlideContent {
    id: string;
    title: string;
    subtitle?: string;
    points?: string[];
    description?: string;
    stats?: { label: string; value: string }[];
    imagePath?: string;
    layout?: 'split' | 'center' | 'grid';
}

export const content = {
    hero: {
        title: "多伦多Broker的线上获客到底怎么做？",
        subtitle: "DME Studio & Cyano 联合创始人",
        description: "我们不教你怎么发朋友圈，我们为成长型企业搭建从“高质感视觉资产”、“交互式Web App”到“企业级AI系统”的自动化增长引擎。",
    },

    // Slide 02
    threeDeadEnds: {
        title: "2026年，多伦多Broker的“三大死局”",
        points: [
            {
                title: "死局 1：转介绍遇到天花板",
                desc: "老客户的圈层洗完了，大单全靠碰运气。"
            },
            {
                title: "死局 2：买来的二手Lead有毒",
                desc: "花钱买名单，打过去客户说“我没填过”，接通率极低，员工每次打电话打到崩溃。"
            },
            {
                title: "死局 3：发自媒体纯属“自嗨”",
                desc: "花几小时做的小红书/视频号，点赞的全是同行刺探情报，真实的C端高客挂零。"
            }
        ]
    },

    // Slide 03
    realFunnel: {
        title: "打破迷思：线上获客的真实漏斗",
        subtitle: "错的认知：发个硬广海报 = 会有客户加我买保险。对的认知：",
        funnelSteps: [
            {
                step: "Traffic (流量渠道)",
                desc: "花钱或用内容向平台买精准曝光。"
            },
            {
                step: "Assets (创意资产)",
                desc: "用极高质感的视觉与文案，让客户停下手指。"
            },
            {
                step: "Functional Web (收网阵地)",
                desc: "用交互式网站把访客过滤、洗成带有电话的优质 Leads。"
            },
            {
                step: "AI & Follow-up (最强大脑)",
                desc: "用AI秒查核保规则，生成方案，建立专业信任。"
            }
        ]
    },

    // Module 2: Traffic Platforms
    trafficIntro: {
        tag: "Module 02 / Traffic Channels",
        title: "多伦多流量“兵器谱”：<br /><span class=\"text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300\">不要用大炮打蚊子</span>",
        description: "卖刚需的探亲险，和卖高客单的分红险，你要去的平台完全不一样。选错战场，钱秒没。",
        quadrants: [
            {
                title: "主动搜索意图",
                platform: "Google Search",
                desc: "客户带着钱包主动找你，意图极强，但单次点击极其昂贵。",
                color: "blue"
            },
            {
                title: "被动刷手机消遣",
                platform: "TikTok / Meta",
                desc: "流量极大且便宜，基于兴趣/标签强行推送，需要用情绪去“钩”住他们。",
                color: "purple"
            },
            {
                title: "长视频专家滤镜",
                platform: "YouTube",
                desc: "3-8分钟的高清白板拆解，低成本建立信任，老板加微信时已经把你当“老师”。",
                color: "rose"
            },
            {
                title: "华人特供圈层",
                platform: "小红书 / 微信",
                desc: "女性决策者主导与私域裂变体系。极度看重“封面颜值”和“干货信息差”。",
                color: "emerald"
            }
        ]
    },
    platforms: {
        google: {
            title: "意图收割机：Google Ads",
            points: [
                "底层机制：竞价排名（CPC）。客户带着钱包主动搜，意图全网最强。",
                "多伦多物价：极贵！搜“Toronto Life Insurance”，点击可能$15-$30。",
                "核心打法：打“长尾痛点词”。例如“万锦 父母 超级签证保险 哪家理赔快”（$3/次）。落地页必须严格对应险种！"
            ],
            mockSearch: {
                keyword: "万锦 父母 超级签证保险",
                adResult: {
                    title: "多伦多超级签证险 | 1分钟精准比价",
                    desc: "专为探亲父母设计，含 COVID 豁免。点击立即计算保费..."
                },
                organicResult: {
                    title: "某保险公司官网 - 首页",
                    desc: "我们提供全方位的寿险、车险、房屋险服务..."
                },
                priceTag: {
                    label: "长尾词点击单价",
                    price: "$3.00"
                }
            }
        },
        youtube: {
            title: "高净值专家滤镜：YouTube 视频广告",
            points: [
                "底层机制：贴片插播（In-stream）。看满30秒或点击才收费。",
                "多伦多物价：单次有效观看约 $0.05 - $0.20。",
                "核心打法：3-8分钟“白板拆解”深度视频，定向投给高收入列治文山/Oakville邮编区。"
            ],
            mockVideo: {
                title: "【白板拆解】企业主如何用保单合法避税？",
                info: "DME Studio · 14K views · Sponsored",
                metric: "CPV (单次观看): $0.15"
            }
        },
        meta: {
            title: "人生大事的狙击导弹：Meta (FB/IG)",
            points: [
                "底层机制：行为标签强行推送。算法知道你的一切。",
                "多伦多物价：获取表单线索（CPL）约 $30 - $80。",
                "核心打法：Life Events 定向。把房贷险投给过去3个月内“刚买新房/刚生宝宝”的人。"
            ],
            assetsTrends: [
                { platform: "IG", desc: "极具设计感的干货轮播图 (Carousel)", color: "purple" },
                { platform: "FB", desc: "真人出境直击痛点的短视频", color: "blue" }
            ],
            targetingTags: [
                { icon: "Home", label: "Recently moved (Past 3 months)", category: "Life Events", color: "blue" },
                { icon: "Heart", label: "Newly engaged (6 months)", category: "Life Events", color: "pink" },
                { icon: "Users", label: "New parents (0-12 months)", category: "Parents", color: "emerald" }
            ]
        },
        tiktok: {
            title: "流量暴风眼：TikTok",
            points: [
                "底层机制：兴趣推荐。只看前3秒能不能留住人。",
                "多伦多物价：流量大、成本低（$10-15/Lead），但考验前端洗量能力。",
                "核心打法：UGC原生感+强情绪。例如街拍：“安省车主注意，这3个附加险纯属冤大头！”"
            ],
            mockVideo: {
                author: "@多伦多保险大实话",
                desc: "【揭秘】安省车主注意！这3个附加险纯属冤大头，90%的人买错了！马上自查...",
                cta: "获取免费防坑指南 >",
                stats: {
                    likes: "12.4K",
                    comments: "842",
                    shares: "3.1K"
                }
            }
        },
        xiaohongshu: {
            title: "多伦多华人消费指南：小红书",
            points: [
                "底层机制：女性决策者极多，看重“封面颜值”和“干货信息差”。",
                "避坑指南：发公司宣传片0流量，发硬广极易封号。",
                "核心打法：高颜值Canva风大字报 + 避坑指南合集（如《新移民医保空窗期解法》）。"
            ],
            mockPosts: [
                {
                    coverTag: "避坑指南",
                    coverTitle1: "新移民医保空窗期",
                    coverTitle2: "千万别买错！",
                    title: "安省新移民前3个月没有OHIP怎么买保险？最全攻略",
                    author: "DME 保险局内人",
                    likes: "2.4K"
                },
                {
                    coverText: "公司日常宣传 (硬广)",
                    title: "我们是多伦多最专业的保险公司，欢迎咨询...",
                    author: "某传统老牌团队",
                    likes: "2"
                },
                {
                    coverTag: "干货分享",
                    coverTitle1: "高净值家庭",
                    coverTitle2: "分红险避税解析",
                    title: "企业主必看！利用分红险实现资产免税传承的3个步骤",
                    author: "财富研究院小助手",
                    likes: "1.8K"
                }
            ]
        },
        wechat: {
            title: "私域信任终极堡垒：微信生态",
            points: [
                "底层机制：基于熟人社交链裂变。高管点赞，几百个企业主朋友全能刷到。",
                "核心打法：朋友圈立“靠谱繁忙”人设；公众号发万字税务长文做背书；视频号发理赔跑腿Vlog。"
            ]
        }
    },

    // Module 3: Assets
    assetsTruth: {
        title: "残酷真相：同样的平台和预算，为什么别人获客只要 $20，你要 $100？",
        misconception: {
            title: "Broker 的普遍认知",
            quote: "“投放广告，就是把钱充进后台，按一下启动键。”",
            status: "系统判定：大错特错！"
        },
        truth: {
            title: "算法的无情惩罚",
            description: "平台算法极其聪明，它会根据互动率判断你的广告是不是“垃圾”。如果你的图丑、视频无聊、收音带回声，没人点，算法就会惩罚你，你的广告费就会成倍飙升！你的钱，被算法“吃掉”了。"
        }
    },
    shortVideoFormula: {
        title: "硬核实操：高转化短视频 Assets 的“印钞公式”",
        steps: [
            {
                phase: "前 3 秒",
                desc: "筛选人群 + 制造痛点：“年收入过15万的安省中产，你的 RRSP 可能买错了！”"
            },
            {
                phase: "中间 15 秒",
                desc: "打破常规认知的信息差，建立专家权威：“很多人以为RRSP只是延税，但你不知道，如果在当年提取出来买分红险...”"
            },
            {
                phase: "最后 5 秒",
                desc: "给出清晰直接的行动指令 (Call to Action)：“点击视频下方链接，花1分钟测一测你多交了多少税。”"
            }
        ]
    },
    assets: {
        definition: {
            title: "到底什么是能带单的\nCreative Assets？",
            description: "它不是一张朋友圈自拍，它是你24小时不休息的金牌销售员分身。",
            badAssets: [
                "手机前置随意拍摄的口播",
                "收音极差、带有大量回音",
                "背景杂乱无章，缺乏专业感",
                "毫无重点的流水账解说"
            ],
            premiumAssets: [
                "DME 独家商业肖像标准",
                "影棚级打光与清透画面质感",
                "录音室级别极净人声处理",
                "经过市场验证的高转化文案脚本"
            ],
            quote: "系统判定规律：你视觉资产的质感，就等同于你几百万保单的含金量。"
        },
        abTesting: {
            title: "广告不是赌博，是数学题",
            description: "基于 Assets 做 A/B Test，建立“资产赛马流水线”。",
            example: "同时跑两个视频开头（感性 vs 理性）",
            variants: [
                {
                    color: 'red',
                    name: 'Variant A',
                    type: '感性铺垫开头',
                    quote: '“今天讲一个真实案例，我一位单亲妈妈客户...”',
                    leads: 12,
                    cost: '$48.50'
                },
                {
                    color: 'cyan',
                    name: 'Variant B',
                    type: '痛点直击开头',
                    quote: '“安省被拒保过的人注意！你可能不知道这 3 个隐藏条款...”',
                    leads: 86,
                    cost: '$8.20'
                }
            ],
            decision: {
                title: "Data Decision",
                text: "果断停掉A，把本月剩下几千块全砸给B！",
                highlight: "这就是增长黑客模式。"
            }
        }
    },

    // Module 4: Functional Web
    functionalWeb: {
        blackHole: {
            title: "最大漏水点：掉进流量黑洞",
            description: "花了钱买点击，跳到一个加载了8秒的旧WordPress网站或复杂的全英文总官网，客户3秒内关掉，广告费100%打水漂。"
        },
        vsApp: {
            title: "名片站 vs 业务型 Web App",
            points: [
                {
                    label: "名片网站 (Brochure)",
                    subtitle: "Web 1.0",
                    desc: "像一本无聊的电子宣传册，只能看不能互动，转化率极低。",
                    features: [
                        "几张公司荣誉照片，一段冗长的“About Us”",
                        "罗列各种看不懂的险种名称（大病险、分红险...）",
                        "结尾放个极其生硬的“Contact Us”表格"
                    ],
                    reactionTitle: "客户心理:",
                    reactionText: "看了就跑。太被动了，我不想被人推销。"
                },
                {
                    label: "业务型 Web App (Functional Dev)",
                    subtitle: "DME 核心技术",
                    desc: "DME主推业务。一个微型软件，唯一目标就是丝滑截留客户并获取电话。",
                    features: [
                        "直接提供 交互式计算器 / 评测系统",
                        "客户输入年龄、痛点，系统自动生成定制方案",
                        "通过“拿结果”来诱导客户心甘情愿留下真实电话与邮箱"
                    ],
                    reactionTitle: "提升效果:",
                    reactionText: "300%"
                }
            ]
        },
        interactiveQuoter: {
            title: "用“微交互”换取高质破冰",
            description: [
                "不要一上来就让客户填名字和电话，他们防备心极重。",
                "先让他们做几道简单的“选择题”（测保费、测额度），付出沉没成本。当他们渴望看到最后那个“结果”时，留电话就成了理所当然。"
            ],
            whyItWorks: {
                title: "为什么这套系统值钱？",
                points: [
                    "直接淘汰不符合标准的劣质流量",
                    "在你打电话前，你已经完全掌握了客户画像",
                    "极高的专业感知，瞬间与同行拉开差距"
                ]
            },
            demoApp: {
                title: "保费在线测评",
                subtitle: "只需 30 秒，获取专属方案",
                steps: [
                    {
                        question: "您的年龄段是？",
                        options: ['20 - 30 岁', '31 - 40 岁', '41 - 50 岁', '50岁以上']
                    },
                    {
                        question: "您是否吸烟？",
                        hint: "这会大幅影响您的保费测算结果",
                        options: ['Non-Smoker (非吸烟)', 'Smoker (吸烟)']
                    },
                    {
                        question: "期望的身故理赔保额？",
                        options: ['$500,000 (基础保障)', '$1,000,000 (收入替代)', '$2,000,000+ (资产传承)'],
                        action: "生成我的专属测算结果"
                    },
                    {
                        title: "报告已生成！",
                        resultText: [
                            "根据您",
                            "的情况，获取",
                            "保额：",
                            "有一家加拿大头部保险公司的保费",
                            "远低于市场平均价"
                        ],
                        fields: ["您的姓名", "多伦多手机号码"],
                        action: "立即解锁测算报告 (PDF)",
                        disclaimer: "点击按钮即代表您同意我们的隐私条款，专业 Broker 将在24小时内发送测算结果给您。"
                    }
                ]
            }
        },
        leadQualification: {
            title: "当你在睡觉时，系统为你洗好了高质量的热线索 (Hot Leads)",
            description: "你的邮件里收到不再是“无头苍蝇”，而是附带了全部家底信息的精准名片。",
            crmMock: {
                title: "New Lead Notification - DME CRM Panel",
                tag: "Qualified Lead",
                contact: {
                    name: "Michael Zhang",
                    status: "Hot Prospect - Markham",
                    phone: "416-555-0198",
                    email: "michael.z88@gmail.com",
                    time: "今天 14:32 提交"
                },
                data: [
                    { label: "Age Range", value: "41 - 50 岁" },
                    { label: "Smoking Status", value: "Non-Smoker" },
                    { label: "Desired Coverage", value: "$1,000,000 (收入替代)" },
                    { label: "Source", value: "YouTube Ads (视频: 避税讲解)" }
                ],
                salesHint: "销售建议：客户资产雄厚，且非吸烟者，保费极具竞争力。源头是避税视频，拨打电话时直接从“高净值家庭的传承免税痛点”切入，极大概率可约到线下面谈或 Zoom。"
            }
        },
        blueprint: {
            title: "这不仅是营销，更是一台全自动的“印钞机”",
            description: "让我们把所有的齿轮组合在一起，看看它是如何摧枯拉朽般运转的。",
            steps: [
                {
                    id: 1,
                    title: "多渠道打猎",
                    description: "谷歌广告捞意图极强的“痛点词”；YouTube投给高收入小区；TikTok用情绪短视频低成本获客。",
                    tag: "Traffic Injection"
                },
                {
                    id: 2,
                    title: "好莱坞级资产",
                    description: "极其优质的封面、清透的光影布局、直击灵魂的文案。在进入漏斗的第一秒就通过“昂贵感”折服算法与客户。",
                    tag: "Premium Assets"
                },
                {
                    id: 3,
                    title: "自动收网阵地",
                    description: "把点击进来的流量，导向 Functional Web。通过“交互式测算”诱导他们留下真实的联系方式和核心数据。",
                    tag: "Web App Filter"
                },
                {
                    id: 4,
                    title: "超级大脑加持",
                    description: "Cyano Agent 1秒之内调取所有核保手册核实案例，并生成精美绝伦的 Proposal 企划书，发到你和客户的邮箱。",
                    tag: "Agentic AI Close"
                }
            ]
        },
        salesAutomation: {
            title: "这不仅是一个网站，这是你的<br /><span class=\"text-emerald-400\">24小时全自动销售分身</span>",
            steps: [
                {
                    id: 1,
                    title: "获取信任 (Trust)",
                    description: "客户半夜 2 点刷到你的短视频，被干货折服，点击主页链接。",
                    tag: "TRAFFIC",
                    color: "blue"
                },
                {
                    id: 2,
                    title: "引发互动 (Engagement)",
                    description: "进入高颜值的 Web App，被“免费测算保费”功能吸引，开始点击选项。",
                    tag: "INTERACT",
                    color: "cyan"
                },
                {
                    id: 3,
                    title: "收割线索 (Conversion)",
                    description: "为了看到最终报告，填写了真实的姓名与电话。你的手机同时收到弹窗通知，带着完整的客户背景数据，明天一早醒来，可以直接拨打这个“热线索”。",
                    tag: "CONVERT",
                    color: "emerald"
                }
            ]
        },
        speedApi: {
            title: "底层技术架构：极速秒开与全自动对接",
            description: "加载慢1秒转化降7%。我们采用最新Headless架构保证毫秒级打开。填完表单直接弹出Calendly预约，数据秒入CRM。"
        }
    },

    // Module 5: Cyano AI
    cyanoAi: {
        intro: {
            title: "为什么你不敢用 ChatGPT接待高净值客户？",
            painPoints: [
                {
                    title: "致命幻觉 (Hallucination)",
                    desc: "金融行业极其严谨。如果通用 AI 把分红率算错，或者瞎编了不符合 CRA 规定的免税条款，你要承担法律责任。"
                },
                {
                    title: "数据孤岛与隐私",
                    desc: "客户的税单、保单是极度私密的资产数据。你敢放心上传到公有云吗？你需要完全私有化部署的安全围栏。"
                }
            ],
            solution: {
                title: "Cyano.",
                subtitle: "Enterprise Agentic AI",
                description: [
                    "DME 联合头部 AI Labs 研发。",
                    "专门喂养北美税务、保险法案、各大公司核保指南出来的“超级助理”。",
                    "他不代替你销售，但他能让你一个人活成一支军队。"
                ],
                tags: [
                    { label: "Knowledge", value: "100% 垂直领域" },
                    { label: "Security", value: "企业私有化部署" }
                ]
            }
        },
        autoProposal: {
            title: "Cyano 核心能力 ①：一键生成“高逼格”企划书 (Auto Proposal)",
            before: {
                title: "过去的你：",
                steps: [
                    "拿到客户信息，打开公司古老的 Illustration 系统。",
                    "一顿狂点，导出一份全是表格、密密麻麻、自己都看不下去的 40页 PDF。",
                    "客户拿到手：“这都什么乱七八糟的？直接告诉我交多少钱，拿多少钱。”"
                ],
                warning: "传统企划书是“产品说明书”，不是“说服购买的方案”。"
            },
            after: {
                title: "现在的你 (带着 Cyano)：",
                steps: [
                    "把复杂的官方表格喂给系统。",
                    "Cyano 瞬间将其翻译成带有精美图表、大白话解释的“视觉化财富方案”。",
                    "附带极其诚恳、基于痛点定制的排版优美的介绍信 (Cover Letter)。"
                ],
                mockUi: [
                    "Cyano is compiling contextual data...",
                    "> Integrating SunLife illustration data...",
                    "> Analyzing client pain point (High Corporate Tax)...",
                    "Generating bespoke cover letter & visual charts...",
                    "✓ Proposal_Michael_Zhang_WealthTransfer_V1.pdf generated."
                ],
                sampleText: "查看生成的百万级方案 Sample"
            }
        },
        knowledgeBase: {
            title: "Cyano 核心能力 ②：永不崩溃的知识检索库 (Agentic Retrieval)",
            traditional: {
                title: "传统老手带新人的困境",
                description: [
                    "“师傅，这个患有二型糖尿病但控制很好的客户，能买 Manulife 的重疾险加费多少？”",
                    "新人每天问100个问题，师傅自己也要做单，根本回复不过来。"
                ]
            },
            cyano: {
                title: "Cyano 赋能团队",
                description: [
                    "把过去10年踩过的坑、各大保险公司几百页的 Underwriting Guide（核保指南）、加拿大最新税法，全部丢进 Cyano 的企业专属知识库 (RAG)。",
                    "新人不用再问师傅，直接在系统里用自然语言提问，Cyano 1秒给出答案截图及出处。"
                ]
            },
            mockChat: {
                botName: "Cyano Expert Assistant",
                status: "Online",
                userMessage: "客户有房颤病史，目前在吃药控制，想买 Equitable Life 的 Whole Life，大概率会被拒保还是加费？核保要求有哪些？",
                botResponse: {
                    reference: "根据 Equitable Life 2025 Underwriting Guide (Page 42 - Cardiovascular)：",
                    bullets: [
                        "如果有房颤病史且需服药控制，通常不会直接拒保（Decline），但会延期 (Postpone) 直至症状稳定6个月。",
                        "若稳定后评估，大概率会被评为 Sub-standard (加费评级，约 +50% 至 +100% 额外费率)。"
                    ],
                    source: "\"Atrial Fibrillation - controlled with medication: Ratings typically range from +50 to +100 depending on age and frequency of episodes. ECG and Attending Physician Statement (APS) absolutely required.\""
                },
                inputPlaceholder: "Ask Cyano about any underwriting guidelines..."
            }
        },
        anxiety: {
            title: "当前 AI 的焦虑与合规灾难",
            description: "用通用大模型(如ChatGPT)做客服，遇到不保的罕见病瞎编说“保”。在严监管的安省引发巨额索赔！"
        },
        rag: {
            title: "Cyano：有护栏的“专属企业级大脑”",
            description: "通用AI是‘闭卷考试’瞎猜。Cyano是‘开卷考试’，我们喂进加拿大顶尖保险公司的核保准则和几千页Policy，回答绝不越雷池半步。"
        },
        scenarios: {
            title: "Cyano 震撼落地三大场景",
            items: [
                "场景 1：秒级核保外脑。手机提问，3秒出结果，带高亮页码引用直接链接到PDF原文。",
                "场景 2：SOP提取与计划书生成(Proposal Generation)。语音变精美中英文草稿。",
                "场景 3：嵌入Web App的24/7多语种AI客服助理。"
            ]
        }
    },

    // Module 6: Closing
    closing: {
        blueprint: {
            title: "百万保单自动印钞机 全景图",
            flow: ["高质感 Assets", "跨平台 Ads 测试", "DME 功能型 Web App", "Cyano AI 大脑", "顶尖 Broker 签单"]
        },
        roi: {
            title: "算一笔账：<br /><span class=\"text-red-500\">你为什么要投资这套系统？</span>",
            subtitle: "不要看绝对成本，要看投入产出比 (ROI)。",
            oldWay: {
                title: "过去：雇佣“活人”的沉没成本",
                costs: [
                    {
                        name: "全职助理 (Admin/Sales Support)",
                        desc: "核保查询、做计划书、打陌生电话",
                        price: "$4,500 / 月"
                    },
                    {
                        name: "外包视频剪辑 + 小红书代运营",
                        desc: "质量参差不齐，无法把控金融合规风险",
                        price: "$2,000 / 月"
                    },
                    {
                        name: "买二手垃圾 Leads",
                        desc: "每天被挂电话，团队士气低落",
                        price: "$1,000 / 月"
                    }
                ],
                totalLabel: "每月保底流血消耗",
                totalPrice: "~$7,500+"
            },
            newWay: {
                title: "现在：投资 DCE 工业级自动系统",
                description: "一套高审美视频资产 <br />+ 一个能互动转化 Leads 的 Web App <br />+ Cyano 7x24小时无限次查询企划AI<br /><br />相当于你同时雇佣了 <strong class=\"text-white\">顶尖导演 + 资深系统架构师 + 10年核保经验老总</strong>，且永远不用发底薪，不会离职。",
                roiBox: {
                    title: "算账逻辑：一单回本",
                    desc: "系统哪怕每个月只帮你多签下 <strong class=\"text-red-400\">1 个高净值家庭</strong>的保单（例如 target premium 几万的单子），这套系统的搭建费就瞬间回本。<br />接下来系统帮你获的每一个客，都是<strong class=\"text-white\">纯利润</strong>。"
                }
            }
        },
        roadmap: {
            title: "如何落地？<br /><span class=\"text-emerald-400\">DME 90天联合实战冲刺 (Bootcamp)</span>",
            subtitle: "我们不是给你一套工具就跑，我们带你把机器跑通。",
            months: [
                {
                    id: "M1",
                    title: "Month 1: 基础设施搭建 (Building)",
                    tag: "Web App + Creative Assets + Cyano Setup",
                    color: "emerald",
                    items: [
                        "共同提炼你的个人 IP 与杀手锏业务",
                        "影棚实景拍摄 10 条高质感短视频资产",
                        "搭建带有交互计算器的专属 Web 阵地",
                        "完成 Cyano 专属保险知识库语料训练"
                    ]
                },
                {
                    id: "M2",
                    title: "Month 2: 赛马测试与爆款挖掘 (Testing)",
                    tag: "A/B Testing + Platform Ads + Data Review",
                    color: "blue",
                    items: [
                        "小预算启动 Google, Meta, TikTok 广告",
                        "测试不同痛点的短视频点击率",
                        "监控 Web App 转化漏斗哪步流失率最高",
                        "每周复盘，果断关停极差组，追加爆款预算"
                    ]
                },
                {
                    id: "M3",
                    title: "Month 3: 规模化放量与收割 (Scaling)",
                    tag: "Budget Scaling + CRM Conversion + AI Proposals",
                    color: "purple",
                    items: [
                        "确认爆款素材，砸钱大力出奇迹爆量",
                        "团队全力接打高意向 Leads（热线索）",
                        "熟练使用 Cyano 一键生成专业企划书逼单",
                        "形成固定的 ROI 模型，系统交接独立运转"
                    ]
                }
            ]
        },
        whyUs: {
            title: "为什么是 <span class=\"text-cyan-400\">DME Studio</span>？<br /><span class=\"text-gray-400 text-3xl font-light mt-2 block\">跨越数字与金融的鸿沟</span>",
            market: {
                title: "市面上的乱象",
                description: "<strong class=\"text-white\">拍视频的和做网站的</strong>：不懂保险。不仅写不出抓人的脚本，还经常因为一句话，把你坑进合规风险 (Compliance Issue) 里。<br /><br /><strong class=\"text-white\">懂保险和金融的</strong>：审美极其老派，还停留在发传单、讲 PPT、或者搞土味视频的思维里。"
            },
            dme: {
                title: "DME 降维打击",
                description: "我们是一支极度稀缺的复合舰队。<br />左脑是 <strong class=\"text-white\">硅谷级系统研发工程师与 AI 算法专家</strong>；<br />右脑是 <strong class=\"text-white\">好莱坞级视觉导演与百万圆桌 (MDRT) 级别的营销策划</strong>。<br /><br />既懂底层代码，又懂保险法案，还懂如何用光影把你的身价包装出高级感。"
            },
            team: [
                {
                    title: "Creative Direction",
                    desc: "视觉导演把控每一帧画面的“昂贵感”。",
                    color: "blue"
                },
                {
                    title: "Growth Hacking",
                    desc: "全域流量投放专家精准控制 CPA。不花冤枉钱。",
                    color: "purple"
                },
                {
                    title: "Web Architecture",
                    desc: "资深全栈工程师打造无缝互动的商业引擎。",
                    color: "emerald"
                },
                {
                    title: "AI & Compliance",
                    desc: "由行业顶尖大牛把控的保险专属大模型底座。",
                    color: "indigo"
                }
            ]
        },
        offer: {
            title: "停止内耗，<br /><span class=\"text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400\">开始工业化收割。</span>",
            subtitle: "Are you ready to scale?",
            description: "这个行业的红利，永远属于第一批拿到<strong class=\"text-white\">“高维武器”</strong>的人。",
            beta: {
                title: "Limited Beta Invitation",
                description: "为了保证交付质量和广告算法模型的纯净度。我们在 Q2 季度（多伦多地区）仅开放 <strong class=\"text-cyan-400 text-lg\">5 个</strong> Cyano 专属集成席位。",
                cta: "扫描二维码，预约 30 分钟架构师免费诊断。"
            }
        }
    }
};
