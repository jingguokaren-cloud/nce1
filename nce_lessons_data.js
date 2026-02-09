// 新概念英语第一册课文数据 (单数课 1-39)
const lessonsData = {
    1: {
        title: "Excuse me!",
        titleCn: "对不起！",
        sentences: [
            {
                speaker: "A", speakerClass: "speaker-sam", english: "Excuse me!", chinese: "对不起！",
                phrases: [{ en: "Excuse me", cn: "打扰一下；劳驾（礼貌用语）" }],
                grammar: ""
            },
            {
                speaker: "B", speakerClass: "speaker-penny", english: "Yes?", chinese: "什么事？",
                phrases: [],
                grammar: ""
            },
            {
                speaker: "A", speakerClass: "speaker-sam", english: "Is this your handbag?", chinese: "这是您的手提包吗？",
                phrases: [],
                grammar: ""
            },
            {
                speaker: "B", speakerClass: "speaker-penny", english: "Pardon?", chinese: "请再说一遍？",
                phrases: [],
                grammar: ""
            },
            {
                speaker: "A", speakerClass: "speaker-sam", english: "Is this your handbag?", chinese: "这是您的手提包吗？",
                phrases: [],
                grammar: ""
            },
            {
                speaker: "B", speakerClass: "speaker-penny", english: "Yes, it is.", chinese: "是的，是我的。",
                phrases: [],
                grammar: ""
            },
            {
                speaker: "B", speakerClass: "speaker-penny", english: "Thank you very much.", chinese: "非常感谢！",
                phrases: [{ en: "Thank you very much", cn: "非常感谢" }],
                grammar: ""
            }
        ],
        coreGrammar: [
            {
                topic: "一般疑问句 Is this...?",
                explanation: "🎩 想问别人\"这是不是某个东西\"？把 is 请到句子最前面当\"领队\"，句子就变成问句啦！就像给句子戴上一顶\"问号魔法帽\"！",
                examples: [
                    { en: "Is this a book?", cn: "这是一本书吗？", answer: "Yes, it is. / No, it isn't." },
                    { en: "Is this your bag?", cn: "这是你的包吗？", answer: "Yes, it is. / No, it isn't." },
                    { en: "Is this a pen?", cn: "这是一支笔吗？", answer: "Yes, it is. / No, it isn't." }
                ]
            },
            {
                topic: "物主代词 your/my",
                explanation: "🎒 怎么说\"我的\"或\"你的\"？用 my（我的）和 your（你的）！就像给东西贴上\"归属标签\"📌，告诉别人这是谁的！",
                examples: [
                    { en: "This is my book.", cn: "这是我的书。" },
                    { en: "Is this your bag?", cn: "这是你的包吗？" },
                    { en: "This is my pen.", cn: "这是我的笔。" }
                ]
            }
        ]
    },
    3: {
        title: "Sorry, sir.",
        titleCn: "对不起，先生。",
        sentences: [
            {
                speaker: "MAN", speakerClass: "speaker-sam", english: "My coat and my umbrella, please.", chinese: "请把我的大衣和雨伞拿给我。",
                phrases: [{ en: "my coat", cn: "我的大衣" }, { en: "my umbrella", cn: "我的雨伞" }],
                grammar: ""
            },
            {
                speaker: "MAN", speakerClass: "speaker-sam", english: "Here is my ticket.", chinese: "这是我的票。",
                phrases: [{ en: "Here is...", cn: "这是...（用于递交物品）" }],
                grammar: ""
            },
            {
                speaker: "GIRL", speakerClass: "speaker-penny", english: "Thank you, sir.", chinese: "谢谢，先生。",
                phrases: [{ en: "Thank you", cn: "谢谢" }],
                grammar: ""
            },
            {
                speaker: "GIRL", speakerClass: "speaker-penny", english: "Number five.", chinese: "是5号。",
                phrases: [{ en: "Number + 数字", cn: "...号" }],
                grammar: ""
            },
            {
                speaker: "GIRL", speakerClass: "speaker-penny", english: "Here's your umbrella and your coat.", chinese: "这是您的雨伞和大衣。",
                phrases: [{ en: "Here's...", cn: "这是...（递东西时用）" }, { en: "your umbrella", cn: "您的雨伞" }],
                grammar: ""
            },
            {
                speaker: "MAN", speakerClass: "speaker-sam", english: "This is not my umbrella.", chinese: "这不是我的雨伞。",
                phrases: [{ en: "This is not...", cn: "这不是...（否定句型）" }],
                grammar: ""
            },
            {
                speaker: "GIRL", speakerClass: "speaker-penny", english: "Sorry, sir.", chinese: "对不起，先生。",
                phrases: [],
                grammar: ""
            },
            {
                speaker: "GIRL", speakerClass: "speaker-penny", english: "Is this your umbrella?", chinese: "这把是您的吗？",
                phrases: [{ en: "Is this...?", cn: "这是...吗？（一般疑问句）" }],
                grammar: ""
            },
            {
                speaker: "MAN", speakerClass: "speaker-sam", english: "No, it isn't.", chinese: "不，不是。",
                phrases: [{ en: "No, it isn't.", cn: "不，不是。（否定回答）" }],
                grammar: ""
            },
            {
                speaker: "GIRL", speakerClass: "speaker-penny", english: "Is this it?", chinese: "这把是吗？",
                phrases: [{ en: "Is this it?", cn: "这是那个吗？" }],
                grammar: ""
            },
            {
                speaker: "MAN", speakerClass: "speaker-sam", english: "Yes, it is.", chinese: "是的，是这把。",
                phrases: [{ en: "Yes, it is.", cn: "是的。（肯定回答）" }],
                grammar: ""
            },
            {
                speaker: "MAN", speakerClass: "speaker-sam", english: "Thank you very much.", chinese: "非常感谢。",
                phrases: [{ en: "Thank you very much", cn: "非常感谢" }],
                grammar: ""
            }
        ]
    },
    5: {
        title: "Nice to meet you.",
        titleCn: "很高兴见到你。",
        sentences: [
            {
                speaker: "MR BLAKE", speakerClass: "speaker-sam", english: "Good morning.", chinese: "早上好。",
                phrases: [{ en: "Good morning", cn: "早上好（12点前的问候语）" }],
                grammar: ""
            },
            {
                speaker: "STUDENTS", speakerClass: "speaker-penny", english: "Good morning, Mr. Blake.", chinese: "早上好，布莱克先生。",
                phrases: [],
                grammar: ""
            },
            {
                speaker: "MR BLAKE", speakerClass: "speaker-sam", english: "This is Miss Sophie Dupont.", chinese: "这位是索菲娅·杜邦小姐。",
                phrases: [{ en: "This is...", cn: "这是...（介绍他人的标准句型）" }],
                grammar: ""
            },
            {
                speaker: "MR BLAKE", speakerClass: "speaker-sam", english: "Sophie is a new student.", chinese: "索菲娅是一名新学生。",
                phrases: [],
                grammar: ""
            },
            {
                speaker: "MR BLAKE", speakerClass: "speaker-sam", english: "She is French.", chinese: "她是法国人。",
                phrases: [],
                grammar: ""
            },
            {
                speaker: "MR BLAKE", speakerClass: "speaker-sam", english: "Sophie, this is Hans.", chinese: "索菲娅，这是汉斯。",
                phrases: [],
                grammar: ""
            },
            {
                speaker: "MR BLAKE", speakerClass: "speaker-sam", english: "He is German.", chinese: "他是德国人。",
                phrases: [],
                grammar: ""
            },
            {
                speaker: "HANS", speakerClass: "speaker-penny", english: "Nice to meet you.", chinese: "很高兴见到你。",
                phrases: [{ en: "Nice to meet you", cn: "很高兴见到你（初次见面用）" }],
                grammar: ""
            },
            {
                speaker: "MR BLAKE", speakerClass: "speaker-sam", english: "And this is Naoko.", chinese: "这是直子。",
                phrases: [],
                grammar: ""
            },
            {
                speaker: "MR BLAKE", speakerClass: "speaker-sam", english: "She's Japanese.", chinese: "她是日本人。",
                phrases: [],
                grammar: ""
            },
            {
                speaker: "NAOKO", speakerClass: "speaker-penny", english: "Nice to meet you.", chinese: "很高兴见到你。",
                phrases: [],
                grammar: ""
            },
            {
                speaker: "MR BLAKE", speakerClass: "speaker-sam", english: "And this is Chang-woo.", chinese: "这是昌宇。",
                phrases: [],
                grammar: ""
            },
            {
                speaker: "MR BLAKE", speakerClass: "speaker-sam", english: "He's Korean.", chinese: "他是韩国人。",
                phrases: [],
                grammar: ""
            },
            {
                speaker: "CHANG-WOO", speakerClass: "speaker-sam", english: "Nice to meet you.", chinese: "很高兴见到你。",
                phrases: [],
                grammar: ""
            },
            {
                speaker: "MR BLAKE", speakerClass: "speaker-sam", english: "And this is Luming.", chinese: "这是鲁明。",
                phrases: [],
                grammar: ""
            },
            {
                speaker: "MR BLAKE", speakerClass: "speaker-sam", english: "He's Chinese.", chinese: "他是中国人。",
                phrases: [],
                grammar: ""
            },
            {
                speaker: "LUMING", speakerClass: "speaker-sam", english: "Nice to meet you.", chinese: "很高兴见到你。",
                phrases: [],
                grammar: ""
            },
            {
                speaker: "MR BLAKE", speakerClass: "speaker-sam", english: "And this is Xiaohui.", chinese: "这是晓惠。",
                phrases: [],
                grammar: ""
            },
            {
                speaker: "MR BLAKE", speakerClass: "speaker-sam", english: "She's Chinese, too.", chinese: "她也是中国人。",
                phrases: [],
                grammar: ""
            },
            {
                speaker: "XIAOHUI", speakerClass: "speaker-penny", english: "Nice to meet you.", chinese: "很高兴见到你。",
                phrases: [],
                grammar: ""
            }
        ]
    },
    7: {
        title: "Are you a teacher?",
        titleCn: "你是教师吗？",
        sentences: [
            {
                speaker: "ROBERT", speakerClass: "speaker-sam", english: "I am a new student.", chinese: "我是一名新学生。",
                phrases: [],
                grammar: ""
            },
            {
                speaker: "ROBERT", speakerClass: "speaker-sam", english: "My name's Robert.", chinese: "我的名字叫罗伯特。",
                phrases: [{ en: "My name's...", cn: "我的名字叫...（自我介绍用）" }],
                grammar: ""
            },
            {
                speaker: "SOPHIE", speakerClass: "speaker-penny", english: "Nice to meet you.", chinese: "很高兴见到你。",
                phrases: [{ en: "Nice to meet you", cn: "很高兴见到你（初次见面用）" }],
                grammar: ""
            },
            {
                speaker: "SOPHIE", speakerClass: "speaker-penny", english: "My name's Sophie.", chinese: "我的名字叫索菲娅。",
                phrases: [],
                grammar: ""
            },
            {
                speaker: "ROBERT", speakerClass: "speaker-sam", english: "Are you French?", chinese: "你是法国人吗？",
                phrases: [],
                grammar: ""
            },
            {
                speaker: "SOPHIE", speakerClass: "speaker-penny", english: "Yes, I am.", chinese: "是的，我是。",
                phrases: [],
                grammar: ""
            },
            {
                speaker: "SOPHIE", speakerClass: "speaker-penny", english: "Are you French, too?", chinese: "你也是法国人吗？",
                phrases: [],
                grammar: ""
            },
            {
                speaker: "ROBERT", speakerClass: "speaker-sam", english: "No, I am not.", chinese: "不，我不是。",
                phrases: [],
                grammar: ""
            },
            {
                speaker: "SOPHIE", speakerClass: "speaker-penny", english: "What nationality are you?", chinese: "你是哪国人？",
                phrases: [{ en: "What nationality are you?", cn: "你是哪国人？" }],
                grammar: ""
            },
            {
                speaker: "ROBERT", speakerClass: "speaker-sam", english: "I am Italian.", chinese: "我是意大利人。",
                phrases: [],
                grammar: ""
            },
            {
                speaker: "ROBERT", speakerClass: "speaker-sam", english: "Are you a teacher?", chinese: "你是教师吗？",
                phrases: [],
                grammar: ""
            },
            {
                speaker: "SOPHIE", speakerClass: "speaker-penny", english: "No, I'm not.", chinese: "不，我不是。",
                phrases: [],
                grammar: ""
            },
            {
                speaker: "ROBERT", speakerClass: "speaker-sam", english: "What's your job?", chinese: "你是做什么工作的？",
                phrases: [{ en: "What's your job?", cn: "你是做什么工作的？" }],
                grammar: ""
            },
            {
                speaker: "SOPHIE", speakerClass: "speaker-penny", english: "I'm a keyboard operator.", chinese: "我是电脑录入员。",
                phrases: [{ en: "keyboard operator", cn: "键盘操作员；电脑录入员" }],
                grammar: ""
            },
            {
                speaker: "SOPHIE", speakerClass: "speaker-penny", english: "What's your job?", chinese: "你是做什么工作的？",
                phrases: [],
                grammar: ""
            },
            {
                speaker: "ROBERT", speakerClass: "speaker-sam", english: "I'm an engineer.", chinese: "我是工程师。",
                phrases: [],
                grammar: ""
            }
        ]
    },
    9: {
        title: "How are you today?",
        titleCn: "你今天好吗？",
        sentences: [
            {
                speaker: "STEVEN", speakerClass: "speaker-sam", english: "Hello, Helen.", chinese: "你好，海伦。",
                phrases: [],
                grammar: ""
            },
            {
                speaker: "HELEN", speakerClass: "speaker-penny", english: "Hi, Steven.", chinese: "你好，史蒂文。",
                phrases: [],
                grammar: ""
            },
            {
                speaker: "STEVEN", speakerClass: "speaker-sam", english: "How are you today?", chinese: "你今天好吗？",
                phrases: [{ en: "How are you?", cn: "你好吗？（问候语）" }],
                grammar: ""
            },
            {
                speaker: "HELEN", speakerClass: "speaker-penny", english: "I'm very well, thank you.", chinese: "很好，谢谢你。",
                phrases: [{ en: "very well", cn: "非常好" }],
                grammar: ""
            },
            {
                speaker: "HELEN", speakerClass: "speaker-penny", english: "And you?", chinese: "你好吗？",
                phrases: [{ en: "And you?", cn: "你呢？（反问对方同样的问题）" }],
                grammar: ""
            },
            {
                speaker: "STEVEN", speakerClass: "speaker-sam", english: "I'm fine, thanks.", chinese: "很好，谢谢。",
                phrases: [{ en: "I'm fine", cn: "我很好" }],
                grammar: ""
            },
            {
                speaker: "STEVEN", speakerClass: "speaker-sam", english: "How is Tony?", chinese: "托尼好吗？",
                phrases: [{ en: "How is + 某人?", cn: "某人好吗？（询问他人近况）" }],
                grammar: ""
            },
            {
                speaker: "HELEN", speakerClass: "speaker-penny", english: "He's fine, thanks.", chinese: "他很好，谢谢。",
                phrases: [],
                grammar: ""
            },
            {
                speaker: "HELEN", speakerClass: "speaker-penny", english: "How's Emma?", chinese: "埃玛好吗？",
                phrases: [],
                grammar: ""
            },
            {
                speaker: "STEVEN", speakerClass: "speaker-sam", english: "She's very well, too, Helen.", chinese: "她也很好，海伦。",
                phrases: [],
                grammar: ""
            },
            {
                speaker: "STEVEN", speakerClass: "speaker-sam", english: "Goodbye, Helen.", chinese: "再见，海伦。",
                phrases: [],
                grammar: ""
            },
            {
                speaker: "STEVEN", speakerClass: "speaker-sam", english: "Nice to see you.", chinese: "见到你真高兴。",
                phrases: [{ en: "Nice to see you", cn: "很高兴见到你（对已认识的人用）" }],
                grammar: ""
            },
            {
                speaker: "HELEN", speakerClass: "speaker-penny", english: "Nice to see you, too, Steven.", chinese: "我见到你也很高兴，史蒂文。",
                phrases: [],
                grammar: ""
            },
            {
                speaker: "HELEN", speakerClass: "speaker-penny", english: "Goodbye.", chinese: "再见。",
                phrases: [],
                grammar: ""
            }
        ]
    },
    11: {
        title: "Is this your shirt?",
        titleCn: "这是你的衬衫吗？",
        sentences: [
            {
                speaker: "TEACHER", speakerClass: "speaker-sam", english: "Whose shirt is that?", chinese: "那是谁的衬衫？",
                phrases: [{ en: "Whose + 名词", cn: "谁的...（询问所有权）" }],
                grammar: ""
            },
            {
                speaker: "TEACHER", speakerClass: "speaker-sam", english: "Is this your shirt, Dave?", chinese: "戴夫，这是你的衬衫吗？",
                phrases: [],
                grammar: ""
            },
            {
                speaker: "DAVE", speakerClass: "speaker-penny", english: "No, sir. It's not my shirt.", chinese: "不，先生。这不是我的衬衫。",
                phrases: [],
                grammar: ""
            },
            {
                speaker: "DAVE", speakerClass: "speaker-penny", english: "This is my shirt.", chinese: "这是我的衬衫。",
                phrases: [],
                grammar: ""
            },
            {
                speaker: "DAVE", speakerClass: "speaker-penny", english: "My shirt's blue.", chinese: "我的衬衫是蓝色的。",
                phrases: [],
                grammar: ""
            },
            {
                speaker: "TEACHER", speakerClass: "speaker-sam", english: "Is this shirt Tim's?", chinese: "这件衬衫是蒂姆的吗？",
                phrases: [],
                grammar: ""
            },
            {
                speaker: "DAVE", speakerClass: "speaker-penny", english: "Perhaps it is, sir.", chinese: "也许是，先生。",
                phrases: [],
                grammar: ""
            },
            {
                speaker: "DAVE", speakerClass: "speaker-penny", english: "Tim's shirt's white.", chinese: "蒂姆的衬衫是白色的。",
                phrases: [],
                grammar: ""
            },
            {
                speaker: "TEACHER", speakerClass: "speaker-sam", english: "Tim!", chinese: "蒂姆！",
                phrases: [],
                grammar: ""
            },
            {
                speaker: "TIM", speakerClass: "speaker-sam", english: "Yes, sir?", chinese: "什么事，先生？",
                phrases: [],
                grammar: ""
            },
            {
                speaker: "TEACHER", speakerClass: "speaker-sam", english: "Is this your shirt?", chinese: "这是你的衬衫吗？",
                phrases: [],
                grammar: ""
            },
            {
                speaker: "TIM", speakerClass: "speaker-sam", english: "Yes, sir. It's my shirt.", chinese: "是的，先生。这是我的衬衫。",
                phrases: [],
                grammar: ""
            },
            {
                speaker: "TEACHER", speakerClass: "speaker-sam", english: "Here you are.", chinese: "给你。",
                phrases: [{ en: "Here you are", cn: "给你（递交物品时用）" }],
                grammar: ""
            },
            {
                speaker: "TEACHER", speakerClass: "speaker-sam", english: "Catch!", chinese: "接着！",
                phrases: [],
                grammar: ""
            },
            {
                speaker: "TIM", speakerClass: "speaker-sam", english: "Thank you, sir.", chinese: "谢谢您，先生。",
                phrases: [],
                grammar: ""
            }
        ]
    },
    13: {
        title: "A new dress",
        titleCn: "一件新连衣裙",
        sentences: [
            {
                speaker: "LOUISE", speakerClass: "speaker-penny", english: "What colour's your new dress?", chinese: "你的新连衣裙是什么颜色的？",
                phrases: [{ en: "What colour is + 名词?", cn: "...是什么颜色的？" }],
                grammar: ""
            },
            {
                speaker: "ANNA", speakerClass: "speaker-sam", english: "It's green.", chinese: "是绿色的。",
                phrases: [],
                grammar: ""
            },
            {
                speaker: "ANNA", speakerClass: "speaker-sam", english: "Come upstairs and see it.", chinese: "上楼来看看吧。",
                phrases: [{ en: "Come and + 动词", cn: "过来...吧（邀请某人做某事）" }],
                grammar: ""
            },
            {
                speaker: "LOUISE", speakerClass: "speaker-penny", english: "Thank you.", chinese: "谢谢。",
                phrases: [],
                grammar: ""
            },
            {
                speaker: "ANNA", speakerClass: "speaker-sam", english: "Look! Here it is!", chinese: "看！就是这件！",
                phrases: [{ en: "Here it is!", cn: "就在这儿！（展示物品时用）" }],
                grammar: ""
            },
            {
                speaker: "LOUISE", speakerClass: "speaker-penny", english: "That's a nice dress.", chinese: "这件连衣裙真好看。",
                phrases: [{ en: "That's a nice + 名词", cn: "那真是个不错的...（赞美用语）" }],
                grammar: ""
            },
            {
                speaker: "LOUISE", speakerClass: "speaker-penny", english: "It's very smart.", chinese: "它非常时髦。",
                phrases: [],
                grammar: ""
            },
            {
                speaker: "ANNA", speakerClass: "speaker-sam", english: "My hat's new, too.", chinese: "我的帽子也是新的。",
                phrases: [],
                grammar: ""
            },
            {
                speaker: "LOUISE", speakerClass: "speaker-penny", english: "What colour is it?", chinese: "它是什么颜色的？",
                phrases: [],
                grammar: ""
            },
            {
                speaker: "ANNA", speakerClass: "speaker-sam", english: "It's the same colour.", chinese: "是一样的颜色。",
                phrases: [{ en: "the same + 名词", cn: "相同的..." }],
                grammar: ""
            },
            {
                speaker: "ANNA", speakerClass: "speaker-sam", english: "It's green, too.", chinese: "也是绿色的。",
                phrases: [],
                grammar: ""
            },
            {
                speaker: "LOUISE", speakerClass: "speaker-penny", english: "That is a lovely hat!", chinese: "那真是一顶可爱的帽子！",
                phrases: [],
                grammar: ""
            }
        ]
    },
    15: {
        title: "Your passports, please.",
        titleCn: "请出示你们的护照。",
        sentences: [
            {
                speaker: "OFFICER", speakerClass: "speaker-sam", english: "Are you Swedish?", chinese: "你们是瑞典人吗？",
                phrases: [],
                grammar: ""
            },
            {
                speaker: "GIRLS", speakerClass: "speaker-penny", english: "No, we are not.", chinese: "不，我们不是。",
                phrases: [],
                grammar: ""
            },
            {
                speaker: "GIRLS", speakerClass: "speaker-penny", english: "We are Danish.", chinese: "我们是丹麦人。",
                phrases: [],
                grammar: ""
            },
            {
                speaker: "OFFICER", speakerClass: "speaker-sam", english: "Are your friends Danish, too?", chinese: "你们的朋友也是丹麦人吗？",
                phrases: [],
                grammar: ""
            },
            {
                speaker: "GIRLS", speakerClass: "speaker-penny", english: "No, they aren't.", chinese: "不，他们不是。",
                phrases: [],
                grammar: ""
            },
            {
                speaker: "GIRLS", speakerClass: "speaker-penny", english: "They are Norwegian.", chinese: "他们是挪威人。",
                phrases: [],
                grammar: ""
            },
            {
                speaker: "OFFICER", speakerClass: "speaker-sam", english: "Your passports, please.", chinese: "请出示你们的护照。",
                phrases: [{ en: "名词 + please", cn: "请（给我）...（服务场合的省略句）" }],
                grammar: ""
            },
            {
                speaker: "GIRLS", speakerClass: "speaker-penny", english: "Here they are.", chinese: "给您。",
                phrases: [{ en: "Here they are", cn: "它们在这儿（递交复数物品时用）" }],
                grammar: ""
            },
            {
                speaker: "OFFICER", speakerClass: "speaker-sam", english: "Are these your cases?", chinese: "这些是你们的箱子吗？",
                phrases: [],
                grammar: ""
            },
            {
                speaker: "GIRLS", speakerClass: "speaker-penny", english: "No, they aren't.", chinese: "不，不是。",
                phrases: [],
                grammar: ""
            },
            {
                speaker: "GIRLS", speakerClass: "speaker-penny", english: "Our cases are brown.", chinese: "我们的箱子是棕色的。",
                phrases: [],
                grammar: ""
            },
            {
                speaker: "GIRLS", speakerClass: "speaker-penny", english: "Here they are.", chinese: "在这里。",
                phrases: [],
                grammar: ""
            },
            {
                speaker: "OFFICER", speakerClass: "speaker-sam", english: "Are you tourists?", chinese: "你们是游客吗？",
                phrases: [],
                grammar: ""
            },
            {
                speaker: "GIRLS", speakerClass: "speaker-penny", english: "Yes, we are.", chinese: "是的，我们是。",
                phrases: [],
                grammar: ""
            },
            {
                speaker: "OFFICER", speakerClass: "speaker-sam", english: "Are your friends tourists too?", chinese: "你们的朋友也是游客吗？",
                phrases: [],
                grammar: ""
            },
            {
                speaker: "GIRLS", speakerClass: "speaker-penny", english: "Yes, they are.", chinese: "是的，他们也是。",
                phrases: [],
                grammar: ""
            },
            {
                speaker: "OFFICER", speakerClass: "speaker-sam", english: "That's fine.", chinese: "很好。",
                phrases: [{ en: "That's fine", cn: "很好；没问题" }],
                grammar: ""
            },
            {
                speaker: "OFFICER", speakerClass: "speaker-sam", english: "Thank you very much.", chinese: "非常感谢。",
                phrases: [],
                grammar: ""
            }
        ]
    },
    17: {
        title: "How do you do?",
        titleCn: "你好！",
        sentences: [
            {
                speaker: "MR JACKSON", speakerClass: "speaker-sam", english: "Come and meet our employees, Mr. Richards.", chinese: "来见见我们的雇员，理查兹先生。",
                phrases: [{ en: "Come and + 动词", cn: "来...吧（邀请）" }],
                grammar: ""
            },
            {
                speaker: "MR RICHARDS", speakerClass: "speaker-penny", english: "Thank you, Mr. Jackson.", chinese: "谢谢，杰克逊先生。",
                phrases: [],
                grammar: ""
            },
            {
                speaker: "MR JACKSON", speakerClass: "speaker-sam", english: "This is Nicola Grey, and this is Claire Taylor.", chinese: "这位是尼古拉·格雷，这位是克莱尔·泰勒。",
                phrases: [{ en: "This is..., and this is...", cn: "这位是...，这位是...（介绍多人）" }],
                grammar: ""
            },
            {
                speaker: "MR RICHARDS", speakerClass: "speaker-penny", english: "How do you do?", chinese: "你们好！",
                phrases: [{ en: "How do you do?", cn: "你好！（正式初见问候语）" }],
                grammar: ""
            },
            {
                speaker: "MR RICHARDS", speakerClass: "speaker-penny", english: "Those women are very hard-working.", chinese: "那些女员工工作很努力。",
                phrases: [{ en: "hard-working", cn: "勤劳的、努力工作的" }],
                grammar: ""
            },
            {
                speaker: "MR RICHARDS", speakerClass: "speaker-penny", english: "What are their jobs?", chinese: "她们是做什么工作的？",
                phrases: [{ en: "What are their jobs?", cn: "他们/她们是做什么工作的？" }],
                grammar: ""
            },
            {
                speaker: "MR JACKSON", speakerClass: "speaker-sam", english: "They're keyboard operators.", chinese: "她们是电脑录入员。",
                phrases: [{ en: "keyboard operators", cn: "电脑录入员" }],
                grammar: ""
            },
            {
                speaker: "MR JACKSON", speakerClass: "speaker-sam", english: "This is Michael Baker, and this is Jeremy Short.", chinese: "这位是迈克尔·贝克，这位是杰里米·肖特。",
                phrases: [],
                grammar: ""
            },
            {
                speaker: "MR RICHARDS", speakerClass: "speaker-penny", english: "How do you do?", chinese: "你们好！",
                phrases: [],
                grammar: ""
            },
            {
                speaker: "MR RICHARDS", speakerClass: "speaker-penny", english: "They aren't very busy!", chinese: "他们不是很忙！",
                phrases: [],
                grammar: ""
            },
            {
                speaker: "MR RICHARDS", speakerClass: "speaker-penny", english: "What are their jobs?", chinese: "他们是做什么工作的？",
                phrases: [],
                grammar: ""
            },
            {
                speaker: "MR JACKSON", speakerClass: "speaker-sam", english: "They're sales reps.", chinese: "他们是销售代表。",
                phrases: [{ en: "sales rep", cn: "销售代表（sales representative的缩写）" }],
                grammar: ""
            },
            {
                speaker: "MR JACKSON", speakerClass: "speaker-sam", english: "They are very lazy.", chinese: "他们非常懒。",
                phrases: [],
                grammar: ""
            },
            {
                speaker: "MR RICHARDS", speakerClass: "speaker-penny", english: "Who is this young man?", chinese: "这个年轻人是谁？",
                phrases: [{ en: "Who is...?", cn: "...是谁？（询问身份）" }],
                grammar: ""
            },
            {
                speaker: "MR JACKSON", speakerClass: "speaker-sam", english: "This is Jim.", chinese: "这是吉姆。",
                phrases: [],
                grammar: ""
            },
            {
                speaker: "MR JACKSON", speakerClass: "speaker-sam", english: "He is our office assistant.", chinese: "他是我们办公室的勤杂人员。",
                phrases: [{ en: "office assistant", cn: "办公室助理" }],
                grammar: ""
            }
        ]
    },
    19: {
        title: "Tired and thirsty",
        titleCn: "又累又渴",
        sentences: [
            {
                speaker: "MOTHER", speakerClass: "speaker-penny", english: "What's the matter, children?", chinese: "孩子们，怎么了？",
                phrases: [{ en: "What's the matter?", cn: "怎么了？出什么事了？" }],
                grammar: ""
            },
            {
                speaker: "CHILDREN", speakerClass: "speaker-sam", english: "We're tired and thirsty, Mum.", chinese: "妈妈，我们又累又渴。",
                phrases: [{ en: "tired and thirsty", cn: "又累又渴" }],
                grammar: ""
            },
            {
                speaker: "MOTHER", speakerClass: "speaker-penny", english: "Sit down here.", chinese: "坐在这儿吧。",
                phrases: [{ en: "Sit down", cn: "坐下" }],
                grammar: ""
            },
            {
                speaker: "MOTHER", speakerClass: "speaker-penny", english: "Are you all right now?", chinese: "你们现在好些了吗？",
                phrases: [{ en: "Are you all right?", cn: "你好吗？/你没事吧？" }],
                grammar: ""
            },
            {
                speaker: "CHILDREN", speakerClass: "speaker-sam", english: "No, we aren't.", chinese: "不，还没有。",
                phrases: [],
                grammar: ""
            },
            {
                speaker: "CHILDREN", speakerClass: "speaker-sam", english: "Look! There's an ice cream man.", chinese: "看！有个卖冰淇淋的。",
                phrases: [{ en: "There is...", cn: "有...（表示存在）" }, { en: "ice cream man", cn: "卖冰淇淋的人" }],
                grammar: ""
            },
            {
                speaker: "CHILDREN", speakerClass: "speaker-sam", english: "Two ice creams, please.", chinese: "请来两份冰淇淋。",
                phrases: [{ en: "数量 + 名词, please.", cn: "请来...（点餐用语）" }],
                grammar: ""
            },
            {
                speaker: "MOTHER", speakerClass: "speaker-penny", english: "Here you are, children.", chinese: "给你们，孩子们。",
                phrases: [{ en: "Here you are", cn: "给你（递东西时用）" }],
                grammar: ""
            },
            {
                speaker: "CHILDREN", speakerClass: "speaker-sam", english: "Thanks, Mum.", chinese: "谢谢，妈妈。",
                phrases: [],
                grammar: ""
            },
            {
                speaker: "CHILDREN", speakerClass: "speaker-sam", english: "These ice creams are nice.", chinese: "这些冰淇淋真好吃。",
                phrases: [],
                grammar: ""
            },
            {
                speaker: "MOTHER", speakerClass: "speaker-penny", english: "Are you all right now?", chinese: "你们现在好了吗？",
                phrases: [],
                grammar: ""
            },
            {
                speaker: "CHILDREN", speakerClass: "speaker-sam", english: "Yes, we are, thank you.", chinese: "是的，好了，谢谢。",
                phrases: [],
                grammar: ""
            }
        ]
    },
    21: {
        title: "Which book?",
        titleCn: "哪一本书？",
        sentences: [
            {
                speaker: "MAN", speakerClass: "speaker-sam", english: "Give me a book, please, Jane.", chinese: "请给我一本书，简。",
                phrases: [{ en: "Give me..., please.", cn: "请给我...（请求）" }],
                grammar: ""
            },
            {
                speaker: "JANE", speakerClass: "speaker-penny", english: "Which book?", chinese: "哪一本书？",
                phrases: [{ en: "Which + 名词?", cn: "哪一个...？（选择疑问）" }],
                grammar: ""
            },
            {
                speaker: "JANE", speakerClass: "speaker-penny", english: "This one?", chinese: "这本吗？",
                phrases: [{ en: "this one", cn: "这一个（代词用法）" }],
                grammar: ""
            },
            {
                speaker: "MAN", speakerClass: "speaker-sam", english: "No, not that one.", chinese: "不，不是那本。",
                phrases: [{ en: "not that one", cn: "不是那个" }],
                grammar: ""
            },
            {
                speaker: "MAN", speakerClass: "speaker-sam", english: "The red one.", chinese: "那本红色的。",
                phrases: [{ en: "the + 颜色 + one", cn: "那个...色的（指定物品）" }],
                grammar: ""
            },
            {
                speaker: "JANE", speakerClass: "speaker-penny", english: "This one?", chinese: "这本吗？",
                phrases: [],
                grammar: ""
            },
            {
                speaker: "MAN", speakerClass: "speaker-sam", english: "Yes, please.", chinese: "是的，请给我。",
                phrases: [],
                grammar: ""
            },
            {
                speaker: "JANE", speakerClass: "speaker-penny", english: "Here you are.", chinese: "给你。",
                phrases: [{ en: "Here you are", cn: "给你（递东西时用）" }],
                grammar: ""
            },
            {
                speaker: "MAN", speakerClass: "speaker-sam", english: "Thank you.", chinese: "谢谢。",
                phrases: [],
                grammar: ""
            }
        ]
    },
    23: {
        title: "Which glasses?",
        titleCn: "哪几只杯子？",
        sentences: [
            {
                speaker: "MAN", speakerClass: "speaker-sam", english: "Give me some glasses, please, Jane.", chinese: "请给我几只杯子，简。",
                phrases: [{ en: "some + 复数名词", cn: "一些...（不确定数量）" }],
                grammar: ""
            },
            {
                speaker: "JANE", speakerClass: "speaker-penny", english: "Which glasses?", chinese: "哪几只杯子？",
                phrases: [],
                grammar: ""
            },
            {
                speaker: "JANE", speakerClass: "speaker-penny", english: "These glasses?", chinese: "这些吗？",
                phrases: [{ en: "these + 复数名词", cn: "这些...（指复数）" }],
                grammar: ""
            },
            {
                speaker: "MAN", speakerClass: "speaker-sam", english: "No, not those.", chinese: "不，不是那些。",
                phrases: [],
                grammar: ""
            },
            {
                speaker: "MAN", speakerClass: "speaker-sam", english: "The ones on the shelf.", chinese: "架子上的那些。",
                phrases: [{ en: "the ones", cn: "那些（代替复数名词）" }, { en: "on the shelf", cn: "在架子上" }],
                grammar: ""
            },
            {
                speaker: "JANE", speakerClass: "speaker-penny", english: "These?", chinese: "这些吗？",
                phrases: [],
                grammar: ""
            },
            {
                speaker: "MAN", speakerClass: "speaker-sam", english: "Yes, please.", chinese: "是的，请给我。",
                phrases: [],
                grammar: ""
            },
            {
                speaker: "JANE", speakerClass: "speaker-penny", english: "Here you are.", chinese: "给你。",
                phrases: [],
                grammar: ""
            },
            {
                speaker: "MAN", speakerClass: "speaker-sam", english: "Thanks.", chinese: "谢谢。",
                phrases: [],
                grammar: ""
            }
        ]
    },
    25: {
        title: "Mrs. Smith's kitchen",
        titleCn: "史密斯太太的厨房",
        sentences: [
            {
                speaker: "TEXT", speakerClass: "speaker-sam", english: "Mrs. Smith's kitchen is small.", chinese: "史密斯太太的厨房很小。",
                phrases: [{ en: "名词's + 名词", cn: "...的...（所有格）" }],
                grammar: ""
            },
            {
                speaker: "TEXT", speakerClass: "speaker-sam", english: "There is a refrigerator in the kitchen.", chinese: "厨房里有一个冰箱。",
                phrases: [{ en: "There is + 单数名词", cn: "有一个...（表示存在）" }],
                grammar: ""
            },
            {
                speaker: "TEXT", speakerClass: "speaker-sam", english: "The refrigerator is white.", chinese: "冰箱是白色的。",
                phrases: [],
                grammar: ""
            },
            {
                speaker: "TEXT", speakerClass: "speaker-sam", english: "It is on the right.", chinese: "它在右边。",
                phrases: [{ en: "on the right/left", cn: "在右边/左边" }],
                grammar: ""
            },
            {
                speaker: "TEXT", speakerClass: "speaker-sam", english: "There is an electric cooker in the kitchen.", chinese: "厨房里有一个电灶。",
                phrases: [{ en: "electric cooker", cn: "电灶" }],
                grammar: ""
            },
            {
                speaker: "TEXT", speakerClass: "speaker-sam", english: "The cooker is blue.", chinese: "电灶是蓝色的。",
                phrases: [],
                grammar: ""
            },
            {
                speaker: "TEXT", speakerClass: "speaker-sam", english: "It is on the left.", chinese: "它在左边。",
                phrases: [],
                grammar: ""
            },
            {
                speaker: "TEXT", speakerClass: "speaker-sam", english: "There is a table in the middle of the room.", chinese: "房间中央有一张桌子。",
                phrases: [{ en: "in the middle of", cn: "在...的中间" }],
                grammar: ""
            },
            {
                speaker: "TEXT", speakerClass: "speaker-sam", english: "There is a bottle on the table.", chinese: "桌子上有一个瓶子。",
                phrases: [{ en: "on the table", cn: "在桌子上" }],
                grammar: ""
            },
            {
                speaker: "TEXT", speakerClass: "speaker-sam", english: "The bottle is empty.", chinese: "瓶子是空的。",
                phrases: [],
                grammar: ""
            },
            {
                speaker: "TEXT", speakerClass: "speaker-sam", english: "There is a cup on the table, too.", chinese: "桌子上还有一个杯子。",
                phrases: [],
                grammar: ""
            },
            {
                speaker: "TEXT", speakerClass: "speaker-sam", english: "The cup is clean.", chinese: "杯子是干净的。",
                phrases: [],
                grammar: ""
            }
        ]
    },
    27: {
        title: "Mrs. Smith's living room",
        titleCn: "史密斯太太的客厅",
        sentences: [
            {
                speaker: "TEXT", speakerClass: "speaker-sam", english: "Mrs. Smith's living room is large.", chinese: "史密斯太太的客厅很大。",
                phrases: [{ en: "living room", cn: "客厅" }],
                grammar: ""
            },
            {
                speaker: "TEXT", speakerClass: "speaker-sam", english: "There is a television in the room.", chinese: "房间里有一台电视机。",
                phrases: [],
                grammar: ""
            },
            {
                speaker: "TEXT", speakerClass: "speaker-sam", english: "The television is near the window.", chinese: "电视机在窗户旁边。",
                phrases: [{ en: "near the window", cn: "在窗户旁边" }],
                grammar: ""
            },
            {
                speaker: "TEXT", speakerClass: "speaker-sam", english: "There are some magazines on the television.", chinese: "电视机上有几本杂志。",
                phrases: [{ en: "There are + 复数名词", cn: "有一些...（表示复数存在）" }],
                grammar: ""
            },
            {
                speaker: "TEXT", speakerClass: "speaker-sam", english: "There is a table in the room.", chinese: "房间里有一张桌子。",
                phrases: [],
                grammar: ""
            },
            {
                speaker: "TEXT", speakerClass: "speaker-sam", english: "There are some newspapers on the table.", chinese: "桌子上有几份报纸。",
                phrases: [],
                grammar: ""
            },
            {
                speaker: "TEXT", speakerClass: "speaker-sam", english: "There are some armchairs in the room.", chinese: "房间里有几把扶手椅。",
                phrases: [],
                grammar: ""
            },
            {
                speaker: "TEXT", speakerClass: "speaker-sam", english: "The armchairs are near the table.", chinese: "扶手椅在桌子旁边。",
                phrases: [],
                grammar: ""
            },
            {
                speaker: "TEXT", speakerClass: "speaker-sam", english: "There is a stereo in the room.", chinese: "房间里有一套立体声音响。",
                phrases: [],
                grammar: ""
            },
            {
                speaker: "TEXT", speakerClass: "speaker-sam", english: "The stereo is near the door.", chinese: "音响在门旁边。",
                phrases: [{ en: "near the door", cn: "在门旁边" }],
                grammar: ""
            },
            {
                speaker: "TEXT", speakerClass: "speaker-sam", english: "There are some books on the stereo.", chinese: "音响上有几本书。",
                phrases: [],
                grammar: ""
            },
            {
                speaker: "TEXT", speakerClass: "speaker-sam", english: "There are some pictures in the room.", chinese: "房间里有几幅画。",
                phrases: [],
                grammar: ""
            },
            {
                speaker: "TEXT", speakerClass: "speaker-sam", english: "The pictures are on the wall.", chinese: "画挂在墙上。",
                phrases: [{ en: "on the wall", cn: "在墙上" }],
                grammar: ""
            }
        ]
    },
    29: {
        title: "Come in, Amy.",
        titleCn: "进来，艾米。",
        sentences: [
            {
                speaker: "MRS JONES", speakerClass: "speaker-penny", english: "Come in, Amy.", chinese: "进来，艾米。",
                phrases: [{ en: "Come in", cn: "进来（邀请入内）" }],
                grammar: ""
            },
            {
                speaker: "MRS JONES", speakerClass: "speaker-penny", english: "Shut the door, please.", chinese: "请关门。",
                phrases: [{ en: "Shut the door", cn: "关门" }],
                grammar: ""
            },
            {
                speaker: "MRS JONES", speakerClass: "speaker-penny", english: "This bedroom's very untidy.", chinese: "这间卧室太乱了。",
                phrases: [],
                grammar: ""
            },
            {
                speaker: "AMY", speakerClass: "speaker-sam", english: "What must I do, Mrs. Jones?", chinese: "我应该做些什么呢，琼斯太太？",
                phrases: [{ en: "What must I do?", cn: "我必须做什么？" }],
                grammar: ""
            },
            {
                speaker: "MRS JONES", speakerClass: "speaker-penny", english: "Open the window and air the room.", chinese: "打开窗户，给房间通通风。",
                phrases: [{ en: "air the room", cn: "给房间通风" }],
                grammar: ""
            },
            {
                speaker: "MRS JONES", speakerClass: "speaker-penny", english: "Then put these clothes in the wardrobe.", chinese: "然后把这些衣服放进衣柜里。",
                phrases: [],
                grammar: ""
            },
            {
                speaker: "MRS JONES", speakerClass: "speaker-penny", english: "Then make the bed.", chinese: "然后整理床铺。",
                phrases: [{ en: "make the bed", cn: "整理床铺" }],
                grammar: ""
            },
            {
                speaker: "MRS JONES", speakerClass: "speaker-penny", english: "Dust the dressing table.", chinese: "给梳妆台除除尘。",
                phrases: [{ en: "dressing table", cn: "梳妆台" }],
                grammar: ""
            },
            {
                speaker: "MRS JONES", speakerClass: "speaker-penny", english: "Then sweep the floor.", chinese: "然后扫地。",
                phrases: [{ en: "sweep the floor", cn: "扫地" }],
                grammar: ""
            }
        ]
    },
    31: {
        title: "Where's Sally?",
        titleCn: "萨莉在哪里？",
        sentences: [
            {
                speaker: "JEAN", speakerClass: "speaker-penny", english: "Where's Sally, Jack?", chinese: "杰克，萨莉在哪儿？",
                phrases: [{ en: "Where's...?", cn: "...在哪里？（询问位置）" }],
                grammar: ""
            },
            {
                speaker: "JACK", speakerClass: "speaker-sam", english: "She's in the garden, Jean.", chinese: "她在花园里，琼。",
                phrases: [{ en: "in the garden", cn: "在花园里" }],
                grammar: ""
            },
            {
                speaker: "JEAN", speakerClass: "speaker-penny", english: "What's she doing?", chinese: "她在干什么？",
                phrases: [{ en: "What's + 主语 + doing?", cn: "...正在做什么？" }],
                grammar: ""
            },
            {
                speaker: "JACK", speakerClass: "speaker-sam", english: "She's sitting under the tree.", chinese: "她正坐在树下。",
                phrases: [{ en: "under the tree", cn: "在树下" }],
                grammar: ""
            },
            {
                speaker: "JEAN", speakerClass: "speaker-penny", english: "Is Tim in the garden, too?", chinese: "蒂姆也在花园里吗？",
                phrases: [],
                grammar: ""
            },
            {
                speaker: "JACK", speakerClass: "speaker-sam", english: "Yes, he is.", chinese: "是的，他也在。",
                phrases: [],
                grammar: ""
            },
            {
                speaker: "JACK", speakerClass: "speaker-sam", english: "He's climbing the tree.", chinese: "他正在爬树。",
                phrases: [{ en: "climb the tree", cn: "爬树" }],
                grammar: ""
            },
            {
                speaker: "JEAN", speakerClass: "speaker-penny", english: "I beg your pardon?", chinese: "你说什么？",
                phrases: [{ en: "I beg your pardon?", cn: "请再说一遍？/你说什么？" }],
                grammar: ""
            },
            {
                speaker: "JEAN", speakerClass: "speaker-penny", english: "Who's climbing the tree?", chinese: "谁在爬树？",
                phrases: [{ en: "Who's + 动词ing?", cn: "谁正在...？" }],
                grammar: ""
            },
            {
                speaker: "JACK", speakerClass: "speaker-sam", english: "Tim is.", chinese: "蒂姆在爬树。",
                phrases: [],
                grammar: ""
            },
            {
                speaker: "JEAN", speakerClass: "speaker-penny", english: "What about the dog?", chinese: "那狗呢？",
                phrases: [{ en: "What about...?", cn: "...怎么样？/那...呢？" }],
                grammar: ""
            },
            {
                speaker: "JACK", speakerClass: "speaker-sam", english: "The dog's in the garden, too.", chinese: "狗也在花园里。",
                phrases: [],
                grammar: ""
            },
            {
                speaker: "JACK", speakerClass: "speaker-sam", english: "It's running across the grass.", chinese: "它正在草地上跑。",
                phrases: [{ en: "run across", cn: "跑过、穿过" }],
                grammar: ""
            },
            {
                speaker: "JACK", speakerClass: "speaker-sam", english: "It's running after a cat.", chinese: "它在追一只猫。",
                phrases: [{ en: "run after", cn: "追逐" }],
                grammar: ""
            }
        ]
    },
    33: {
        title: "A fine day",
        titleCn: "晴天",
        sentences: [
            {
                speaker: "TEXT", speakerClass: "speaker-sam", english: "It's a fine day today.", chinese: "今天天气很好。",
                phrases: [{ en: "a fine day", cn: "晴朗的一天" }],
                grammar: ""
            },
            {
                speaker: "TEXT", speakerClass: "speaker-sam", english: "There are some clouds in the sky, but the sun is shining.", chinese: "天空中有一些云，但阳光灿烂。",
                phrases: [{ en: "in the sky", cn: "在天空中" }, { en: "the sun is shining", cn: "阳光灿烂" }],
                grammar: ""
            },
            {
                speaker: "TEXT", speakerClass: "speaker-sam", english: "Mr. Jones is with his family.", chinese: "琼斯先生和他的家人在一起。",
                phrases: [{ en: "with + 某人", cn: "和...在一起" }],
                grammar: ""
            },
            {
                speaker: "TEXT", speakerClass: "speaker-sam", english: "They are walking over the bridge.", chinese: "他们正在过桥。",
                phrases: [{ en: "walk over", cn: "走过、跨过" }],
                grammar: ""
            },
            {
                speaker: "TEXT", speakerClass: "speaker-sam", english: "There are some boats on the river.", chinese: "河上有几艘船。",
                phrases: [{ en: "on the river", cn: "在河上" }],
                grammar: ""
            },
            {
                speaker: "TEXT", speakerClass: "speaker-sam", english: "Mr. Jones and his wife are looking at them.", chinese: "琼斯先生和他的妻子正在看那些船。",
                phrases: [{ en: "look at", cn: "看着" }],
                grammar: ""
            },
            {
                speaker: "TEXT", speakerClass: "speaker-sam", english: "Sally is looking at a big ship.", chinese: "萨莉正在看一艘大船。",
                phrases: [],
                grammar: ""
            },
            {
                speaker: "TEXT", speakerClass: "speaker-sam", english: "The ship is going under the bridge.", chinese: "那船正从桥下驶过。",
                phrases: [{ en: "go under", cn: "从...下面经过" }],
                grammar: ""
            },
            {
                speaker: "TEXT", speakerClass: "speaker-sam", english: "Tim is looking at an aeroplane.", chinese: "蒂姆正在看一架飞机。",
                phrases: [],
                grammar: ""
            },
            {
                speaker: "TEXT", speakerClass: "speaker-sam", english: "The aeroplane is flying over the river.", chinese: "飞机正飞越河流。",
                phrases: [{ en: "fly over", cn: "飞越" }],
                grammar: ""
            }
        ]
    },
    35: {
        title: "Our village",
        titleCn: "我们的村庄",
        sentences: [
            {
                speaker: "TEXT", speakerClass: "speaker-sam", english: "This is a photograph of our village.", chinese: "这是我们村庄的照片。",
                phrases: [{ en: "a photograph of", cn: "一张...的照片" }],
                grammar: ""
            },
            {
                speaker: "TEXT", speakerClass: "speaker-sam", english: "Our village is in a valley.", chinese: "我们的村庄在一个山谷里。",
                phrases: [{ en: "in a valley", cn: "在山谷里" }],
                grammar: ""
            },
            {
                speaker: "TEXT", speakerClass: "speaker-sam", english: "It is between two hills.", chinese: "它在两座小山之间。",
                phrases: [{ en: "between A and B", cn: "在A和B之间" }],
                grammar: ""
            },
            {
                speaker: "TEXT", speakerClass: "speaker-sam", english: "The village is on a river.", chinese: "村庄在一条河边。",
                phrases: [{ en: "on a river", cn: "在河边" }],
                grammar: ""
            },
            {
                speaker: "TEXT", speakerClass: "speaker-sam", english: "Here is another photograph of the village.", chinese: "这是村庄的另一张照片。",
                phrases: [{ en: "Here is...", cn: "这是...（倒装句）" }],
                grammar: ""
            },
            {
                speaker: "TEXT", speakerClass: "speaker-sam", english: "My wife and I are walking along the banks of the river.", chinese: "我和妻子正沿着河边走。",
                phrases: [{ en: "walk along", cn: "沿着...走" }, { en: "the banks of the river", cn: "河岸" }],
                grammar: ""
            },
            {
                speaker: "TEXT", speakerClass: "speaker-sam", english: "We are on the left.", chinese: "我们在左边。",
                phrases: [],
                grammar: ""
            },
            {
                speaker: "TEXT", speakerClass: "speaker-sam", english: "There is a boy in the water.", chinese: "河里有个男孩。",
                phrases: [{ en: "in the water", cn: "在水里" }],
                grammar: ""
            },
            {
                speaker: "TEXT", speakerClass: "speaker-sam", english: "He is swimming across the river.", chinese: "他正游向河对岸。",
                phrases: [{ en: "swim across", cn: "游过" }],
                grammar: ""
            },
            {
                speaker: "TEXT", speakerClass: "speaker-sam", english: "Here is another photograph.", chinese: "这是另一张照片。",
                phrases: [],
                grammar: ""
            },
            {
                speaker: "TEXT", speakerClass: "speaker-sam", english: "This is the school building.", chinese: "这是学校的大楼。",
                phrases: [{ en: "school building", cn: "学校大楼" }],
                grammar: ""
            },
            {
                speaker: "TEXT", speakerClass: "speaker-sam", english: "It is beside a park.", chinese: "它在一个公园旁边。",
                phrases: [{ en: "beside + 名词", cn: "在...旁边" }],
                grammar: ""
            },
            {
                speaker: "TEXT", speakerClass: "speaker-sam", english: "The park is on the right.", chinese: "公园在右边。",
                phrases: [],
                grammar: ""
            },
            {
                speaker: "TEXT", speakerClass: "speaker-sam", english: "Some children are coming out of the building.", chinese: "一些孩子正从大楼里出来。",
                phrases: [{ en: "come out of", cn: "从...出来" }],
                grammar: ""
            },
            {
                speaker: "TEXT", speakerClass: "speaker-sam", english: "Some of them are going into the park.", chinese: "他们中的一些正走进公园。",
                phrases: [{ en: "some of them", cn: "他们中的一些" }, { en: "go into", cn: "走进" }],
                grammar: ""
            }
        ]
    },
    37: {
        title: "Making a bookcase",
        titleCn: "做书架",
        sentences: [
            {
                speaker: "DAN", speakerClass: "speaker-sam", english: "You're working hard, George.", chinese: "你干得真卖力，乔治。",
                phrases: [{ en: "work hard", cn: "努力工作" }],
                grammar: ""
            },
            {
                speaker: "DAN", speakerClass: "speaker-sam", english: "What are you doing?", chinese: "你在干什么？",
                phrases: [],
                grammar: ""
            },
            {
                speaker: "GEORGE", speakerClass: "speaker-penny", english: "I'm making a bookcase.", chinese: "我在做书架。",
                phrases: [],
                grammar: ""
            },
            {
                speaker: "GEORGE", speakerClass: "speaker-penny", english: "Give me that hammer, please, Dan.", chinese: "请把那把锤子给我，丹。",
                phrases: [{ en: "Give me + 物", cn: "把...给我" }],
                grammar: ""
            },
            {
                speaker: "DAN", speakerClass: "speaker-sam", english: "Which hammer?", chinese: "哪把锤子？",
                phrases: [],
                grammar: ""
            },
            {
                speaker: "DAN", speakerClass: "speaker-sam", english: "This one?", chinese: "这把吗？",
                phrases: [],
                grammar: ""
            },
            {
                speaker: "GEORGE", speakerClass: "speaker-penny", english: "No, not that one.", chinese: "不，不是那把。",
                phrases: [],
                grammar: ""
            },
            {
                speaker: "GEORGE", speakerClass: "speaker-penny", english: "The big one.", chinese: "那把大的。",
                phrases: [],
                grammar: ""
            },
            {
                speaker: "DAN", speakerClass: "speaker-sam", english: "Here you are.", chinese: "给你。",
                phrases: [{ en: "Here you are", cn: "给你（递东西）" }],
                grammar: ""
            },
            {
                speaker: "GEORGE", speakerClass: "speaker-penny", english: "Thanks, Dan.", chinese: "谢谢，丹。",
                phrases: [],
                grammar: ""
            },
            {
                speaker: "DAN", speakerClass: "speaker-sam", english: "What are you going to do now, George?", chinese: "你现在要做什么，乔治？",
                phrases: [{ en: "be going to + 动词", cn: "打算/将要做..." }],
                grammar: ""
            },
            {
                speaker: "GEORGE", speakerClass: "speaker-penny", english: "I'm going to paint it.", chinese: "我准备把它漆一下。",
                phrases: [],
                grammar: ""
            },
            {
                speaker: "DAN", speakerClass: "speaker-sam", english: "What colour are you going to paint it?", chinese: "你准备漆什么颜色？",
                phrases: [],
                grammar: ""
            },
            {
                speaker: "GEORGE", speakerClass: "speaker-penny", english: "I'm going to paint it pink.", chinese: "我准备漆成粉红色。",
                phrases: [],
                grammar: ""
            },
            {
                speaker: "DAN", speakerClass: "speaker-sam", english: "Pink!", chinese: "粉红色！",
                phrases: [],
                grammar: ""
            },
            {
                speaker: "GEORGE", speakerClass: "speaker-penny", english: "This bookcase isn't for me.", chinese: "这个书架不是给我的。",
                phrases: [{ en: "for + 人", cn: "给...的" }],
                grammar: ""
            },
            {
                speaker: "GEORGE", speakerClass: "speaker-penny", english: "It's for my daughter, Susan.", chinese: "是给我女儿苏珊的。",
                phrases: [],
                grammar: ""
            },
            {
                speaker: "GEORGE", speakerClass: "speaker-penny", english: "Pink's her favourite colour.", chinese: "粉红色是她最喜欢的颜色。",
                phrases: [{ en: "favourite + 名词", cn: "最喜欢的..." }],
                grammar: ""
            }
        ]
    },
    39: {
        title: "Don't drop it!",
        titleCn: "别摔了！",
        sentences: [
            {
                speaker: "SAM", speakerClass: "speaker-sam", english: "What are you going to do with that vase, Penny?", chinese: "你打算把那个花瓶怎么办，彭妮？",
                phrases: [{ en: "do with", cn: "处理、对待" }],
                grammar: ""
            },
            {
                speaker: "PENNY", speakerClass: "speaker-penny", english: "I'm going to put it on this table, Sam.", chinese: "我打算把它放在这张桌子上，山姆。",
                phrases: [],
                grammar: ""
            },
            {
                speaker: "SAM", speakerClass: "speaker-sam", english: "Don't do that. Give it to me.", chinese: "别放在那儿。把它给我。",
                phrases: [{ en: "Don't + 动词", cn: "不要...（否定祈使句）" }],
                grammar: ""
            },
            {
                speaker: "PENNY", speakerClass: "speaker-penny", english: "What are you going to do with it?", chinese: "你打算把它怎么办？",
                phrases: [],
                grammar: ""
            },
            {
                speaker: "SAM", speakerClass: "speaker-sam", english: "I'm going to put it here, in front of the window.", chinese: "我打算把它放在这儿，窗户前面。",
                phrases: [{ en: "in front of", cn: "在...前面" }],
                grammar: ""
            },
            {
                speaker: "PENNY", speakerClass: "speaker-penny", english: "Be careful! Don't drop it!", chinese: "小心！别摔了！",
                phrases: [{ en: "Be careful!", cn: "小心！" }],
                grammar: ""
            },
            {
                speaker: "PENNY", speakerClass: "speaker-penny", english: "Don't put it there, Sam. Put it here, on this shelf.", chinese: "别放在那儿，山姆。放在这儿，这个架子上。",
                phrases: [],
                grammar: ""
            },
            {
                speaker: "SAM", speakerClass: "speaker-sam", english: "There we are! It's a lovely vase.", chinese: "好了！这是一个漂亮的花瓶。",
                phrases: [{ en: "There we are!", cn: "好了！（表示完成）" }],
                grammar: ""
            },
            {
                speaker: "PENNY", speakerClass: "speaker-penny", english: "Those flowers are lovely, too.", chinese: "那些花也很漂亮。",
                phrases: [],
                grammar: ""
            }
        ]
    },
    41: {
        title: "Penny's bag",
        titleCn: "彭妮的提包",
        sentences: [
            {
                speaker: "SAM", speakerClass: "speaker-sam", english: "Is that bag heavy, Penny?", chinese: "那个提包重吗，彭妮？",
                phrases: [],
                grammar: ""
            },
            {
                speaker: "PENNY", speakerClass: "speaker-penny", english: "Not very.", chinese: "不太重。",
                phrases: [],
                grammar: ""
            },
            {
                speaker: "SAM", speakerClass: "speaker-sam", english: "Here! Put it on this chair.", chinese: "放在这儿！把它放在这把椅子上。",
                phrases: [],
                grammar: ""
            },
            {
                speaker: "SAM", speakerClass: "speaker-sam", english: "What's in it?", chinese: "里面是什么？",
                phrases: [],
                grammar: ""
            },
            {
                speaker: "PENNY", speakerClass: "speaker-penny", english: "A piece of cheese. A loaf of bread. A bar of soap. A bar of chocolate.", chinese: "一块乳酪、一块面包、一块肥皂、一块巧克力。",
                phrases: [{ en: "a piece of", cn: "一块/片" }, { en: "a loaf of", cn: "一条（面包）" }, { en: "a bar of", cn: "一条/块" }],
                grammar: ""
            },
            {
                speaker: "PENNY", speakerClass: "speaker-penny", english: "A bottle of milk. A pound of sugar. Half a pound of coffee.", chinese: "一瓶牛奶、一磅糖、半磅咖啡。",
                phrases: [{ en: "a bottle of", cn: "一瓶" }, { en: "a pound of", cn: "一磅" }],
                grammar: ""
            },
            {
                speaker: "PENNY", speakerClass: "speaker-penny", english: "A quarter of a pound of tea. And a tin of tobacco.", chinese: "四分之一磅茶叶和一听烟丝。",
                phrases: [{ en: "a quarter of", cn: "四分之一" }, { en: "a tin of", cn: "一听/罐" }],
                grammar: ""
            },
            {
                speaker: "SAM", speakerClass: "speaker-sam", english: "Is that tin of tobacco for me?", chinese: "那听烟丝是给我的吗？",
                phrases: [],
                grammar: ""
            },
            {
                speaker: "PENNY", speakerClass: "speaker-penny", english: "Well, it's certainly not for me!", chinese: "噢，当然不是给我的！",
                phrases: [],
                grammar: ""
            }
        ]
    },
    43: {
        title: "Hurry up!",
        titleCn: "快点！",
        sentences: [
            {
                speaker: "PENNY", speakerClass: "speaker-penny", english: "Can you make the tea, Sam?", chinese: "你能沏茶吗，山姆？",
                phrases: [{ en: "make the tea", cn: "沏茶" }],
                grammar: ""
            },
            {
                speaker: "SAM", speakerClass: "speaker-sam", english: "Yes, of course I can, Penny.", chinese: "当然可以，彭妮。",
                phrases: [{ en: "of course", cn: "当然" }],
                grammar: ""
            },
            {
                speaker: "SAM", speakerClass: "speaker-sam", english: "Is there any water in this kettle?", chinese: "这壶里有水吗？",
                phrases: [{ en: "Is there any...?", cn: "有...吗？（不可数名词）" }],
                grammar: ""
            },
            {
                speaker: "PENNY", speakerClass: "speaker-penny", english: "Yes, there is.", chinese: "有。",
                phrases: [],
                grammar: ""
            },
            {
                speaker: "SAM", speakerClass: "speaker-sam", english: "Where's the tea?", chinese: "茶叶在哪儿？",
                phrases: [],
                grammar: ""
            },
            {
                speaker: "PENNY", speakerClass: "speaker-penny", english: "It's over there, behind the teapot.", chinese: "在那边，茶壶后面。",
                phrases: [{ en: "over there", cn: "在那边" }, { en: "behind + 名词", cn: "在...后面" }],
                grammar: ""
            },
            {
                speaker: "PENNY", speakerClass: "speaker-penny", english: "Can you see it?", chinese: "你看见了吗？",
                phrases: [],
                grammar: ""
            },
            {
                speaker: "SAM", speakerClass: "speaker-sam", english: "I can see the teapot, but I can't see the tea.", chinese: "我能看见茶壶，但看不见茶叶。",
                phrases: [],
                grammar: ""
            },
            {
                speaker: "PENNY", speakerClass: "speaker-penny", english: "There it is! It's in front of you!", chinese: "就在那儿！就在你前面！",
                phrases: [{ en: "in front of", cn: "在...前面" }],
                grammar: ""
            },
            {
                speaker: "SAM", speakerClass: "speaker-sam", english: "Ah yes, I can see it now.", chinese: "啊，是的，我现在看见了。",
                phrases: [],
                grammar: ""
            },
            {
                speaker: "SAM", speakerClass: "speaker-sam", english: "Where are the cups?", chinese: "杯子在哪儿？",
                phrases: [],
                grammar: ""
            },
            {
                speaker: "PENNY", speakerClass: "speaker-penny", english: "There are some in the cupboard.", chinese: "橱柜里有一些。",
                phrases: [{ en: "in the cupboard", cn: "在橱柜里" }],
                grammar: ""
            },
            {
                speaker: "PENNY", speakerClass: "speaker-penny", english: "Can you find them?", chinese: "你能找到吗？",
                phrases: [],
                grammar: ""
            },
            {
                speaker: "SAM", speakerClass: "speaker-sam", english: "Yes. Here they are.", chinese: "找到了。在这儿。",
                phrases: [{ en: "Here they are", cn: "它们在这儿" }],
                grammar: ""
            },
            {
                speaker: "PENNY", speakerClass: "speaker-penny", english: "Hurry up, Sam! The kettle's boiling!", chinese: "快点，山姆！水开了！",
                phrases: [{ en: "Hurry up!", cn: "快点！" }],
                grammar: ""
            }
        ]
    },
    45: {
        title: "The boss's letter",
        titleCn: "老板的信",
        sentences: [
            {
                speaker: "THE BOSS", speakerClass: "speaker-sam", english: "Can you come here a minute please, Bob?", chinese: "你能来一下吗，鲍勃？",
                phrases: [{ en: "a minute", cn: "一会儿" }],
                grammar: ""
            },
            {
                speaker: "BOB", speakerClass: "speaker-penny", english: "Yes, sir?", chinese: "什么事，先生？",
                phrases: [],
                grammar: ""
            },
            {
                speaker: "THE BOSS", speakerClass: "speaker-sam", english: "Where's Pamela?", chinese: "帕梅拉在哪儿？",
                phrases: [],
                grammar: ""
            },
            {
                speaker: "BOB", speakerClass: "speaker-penny", english: "She's next door. She's in her office, sir.", chinese: "她在隔壁，在她的办公室里，先生。",
                phrases: [{ en: "next door", cn: "隔壁" }],
                grammar: ""
            },
            {
                speaker: "THE BOSS", speakerClass: "speaker-sam", english: "Can she type this letter for me? Ask her please.", chinese: "她能为我打一下这封信吗？请问问她。",
                phrases: [{ en: "type a letter", cn: "打一封信" }],
                grammar: ""
            },
            {
                speaker: "BOB", speakerClass: "speaker-penny", english: "Yes, sir.", chinese: "好的，先生。",
                phrases: [],
                grammar: ""
            },
            {
                speaker: "BOB", speakerClass: "speaker-penny", english: "Can you type this letter for the boss please, Pamela?", chinese: "你能为老板打一下这封信吗，帕梅拉？",
                phrases: [],
                grammar: ""
            },
            {
                speaker: "PAMELA", speakerClass: "speaker-sam", english: "Yes, of course I can.", chinese: "当然可以。",
                phrases: [],
                grammar: ""
            },
            {
                speaker: "BOB", speakerClass: "speaker-penny", english: "Here you are.", chinese: "给你。",
                phrases: [{ en: "Here you are", cn: "给你（递东西）" }],
                grammar: ""
            },
            {
                speaker: "PAMELA", speakerClass: "speaker-sam", english: "Thank you, Bob.", chinese: "谢谢你，鲍勃。",
                phrases: [],
                grammar: ""
            },
            {
                speaker: "PAMELA", speakerClass: "speaker-sam", english: "Bob!", chinese: "鲍勃！",
                phrases: [],
                grammar: ""
            },
            {
                speaker: "BOB", speakerClass: "speaker-penny", english: "Yes? What's the matter?", chinese: "怎么了？",
                phrases: [{ en: "What's the matter?", cn: "怎么了？" }],
                grammar: ""
            },
            {
                speaker: "PAMELA", speakerClass: "speaker-sam", english: "I can't type this letter.", chinese: "我打不了这封信。",
                phrases: [],
                grammar: ""
            },
            {
                speaker: "PAMELA", speakerClass: "speaker-sam", english: "I can't read it! The boss's handwriting is terrible!", chinese: "我看不懂！老板的字太糟糕了！",
                phrases: [],
                grammar: ""
            }
        ]
    },
    47: {
        title: "A cup of coffee",
        titleCn: "一杯咖啡",
        sentences: [
            {
                speaker: "MRS YOUNG", speakerClass: "speaker-penny", english: "Do you like coffee, Mrs. Price?", chinese: "您喜欢咖啡吗，普莱斯太太？",
                phrases: [{ en: "Do you like...?", cn: "你喜欢...吗？" }],
                grammar: ""
            },
            {
                speaker: "MRS PRICE", speakerClass: "speaker-sam", english: "Yes, I do.", chinese: "是的，我喜欢。",
                phrases: [],
                grammar: ""
            },
            {
                speaker: "MRS YOUNG", speakerClass: "speaker-penny", english: "Do you want a cup?", chinese: "您想来一杯吗？",
                phrases: [{ en: "Do you want...?", cn: "你想要...吗？" }],
                grammar: ""
            },
            {
                speaker: "MRS PRICE", speakerClass: "speaker-sam", english: "Yes, please, Mrs. Young.", chinese: "好的，谢谢，杨太太。",
                phrases: [{ en: "Yes, please", cn: "好的，请" }],
                grammar: ""
            },
            {
                speaker: "MRS YOUNG", speakerClass: "speaker-penny", english: "Do you want any sugar?", chinese: "您要放糖吗？",
                phrases: [],
                grammar: ""
            },
            {
                speaker: "MRS PRICE", speakerClass: "speaker-sam", english: "Yes, please.", chinese: "好的，请放。",
                phrases: [],
                grammar: ""
            },
            {
                speaker: "MRS YOUNG", speakerClass: "speaker-penny", english: "Do you want any milk?", chinese: "您要放牛奶吗？",
                phrases: [],
                grammar: ""
            },
            {
                speaker: "MRS PRICE", speakerClass: "speaker-sam", english: "No, thank you. I don't like milk in my coffee. I like black coffee.", chinese: "不，谢谢。我不喜欢咖啡里放牛奶。我喜欢黑咖啡。",
                phrases: [{ en: "black coffee", cn: "黑咖啡（不加奶）" }],
                grammar: ""
            },
            {
                speaker: "MRS YOUNG", speakerClass: "speaker-penny", english: "Do you like biscuits?", chinese: "您喜欢饼干吗？",
                phrases: [],
                grammar: ""
            },
            {
                speaker: "MRS PRICE", speakerClass: "speaker-sam", english: "Yes, I do.", chinese: "是的，我喜欢。",
                phrases: [],
                grammar: ""
            },
            {
                speaker: "MRS YOUNG", speakerClass: "speaker-penny", english: "Do you want one?", chinese: "您想来一块吗？",
                phrases: [],
                grammar: ""
            },
            {
                speaker: "MRS PRICE", speakerClass: "speaker-sam", english: "Yes, please.", chinese: "好的，谢谢。",
                phrases: [],
                grammar: ""
            }
        ]
    },
    49: {
        title: "At the butcher's",
        titleCn: "在肉店",
        sentences: [
            {
                speaker: "BUTCHER", speakerClass: "speaker-sam", english: "Do you want any meat today, Mrs. Bird?", chinese: "您今天要买点肉吗，伯德太太？",
                phrases: [{ en: "at the butcher's", cn: "在肉店" }],
                grammar: ""
            },
            {
                speaker: "MRS BIRD", speakerClass: "speaker-penny", english: "Yes, please.", chinese: "是的，要买。",
                phrases: [],
                grammar: ""
            },
            {
                speaker: "BUTCHER", speakerClass: "speaker-sam", english: "Do you want beef or lamb?", chinese: "您要牛肉还是羊肉？",
                phrases: [],
                grammar: ""
            },
            {
                speaker: "MRS BIRD", speakerClass: "speaker-penny", english: "Beef, please.", chinese: "请给我牛肉。",
                phrases: [],
                grammar: ""
            },
            {
                speaker: "BUTCHER", speakerClass: "speaker-sam", english: "This lamb's very good.", chinese: "这羊肉很好。",
                phrases: [],
                grammar: ""
            },
            {
                speaker: "MRS BIRD", speakerClass: "speaker-penny", english: "I like lamb, but my husband doesn't.", chinese: "我喜欢羊肉，但我丈夫不喜欢。",
                phrases: [],
                grammar: ""
            },
            {
                speaker: "BUTCHER", speakerClass: "speaker-sam", english: "What about some steak? This is a nice piece.", chinese: "来点牛排怎么样？这块很好。",
                phrases: [{ en: "What about...?", cn: "...怎么样？（提议）" }],
                grammar: ""
            },
            {
                speaker: "MRS BIRD", speakerClass: "speaker-penny", english: "Give me that piece, please.", chinese: "请给我那块。",
                phrases: [],
                grammar: ""
            },
            {
                speaker: "MRS BIRD", speakerClass: "speaker-penny", english: "And a pound of mince, too.", chinese: "还要一磅肉馅。",
                phrases: [{ en: "a pound of", cn: "一磅..." }],
                grammar: ""
            },
            {
                speaker: "BUTCHER", speakerClass: "speaker-sam", english: "Do you want a chicken, Mrs. Bird? They're very nice.", chinese: "您要只鸡吗，伯德太太？这些鸡很好。",
                phrases: [],
                grammar: ""
            },
            {
                speaker: "MRS BIRD", speakerClass: "speaker-penny", english: "No, thank you.", chinese: "不，谢谢。",
                phrases: [],
                grammar: ""
            },
            {
                speaker: "MRS BIRD", speakerClass: "speaker-penny", english: "My husband likes steak, but he doesn't like chicken.", chinese: "我丈夫喜欢牛排，但他不喜欢鸡肉。",
                phrases: [],
                grammar: ""
            },
            {
                speaker: "BUTCHER", speakerClass: "speaker-sam", english: "To tell you the truth, Mrs. Bird, I don't like chicken, either!", chinese: "说实话，伯德太太，我也不喜欢鸡肉！",
                phrases: [{ en: "To tell you the truth", cn: "说实话" }],
                grammar: ""
            }
        ]
    },
    51: {
        title: "A pleasant climate",
        titleCn: "宜人的气候",
        sentences: [
            {
                speaker: "HANS", speakerClass: "speaker-sam", english: "Where do you come from?", chinese: "你从哪里来？",
                phrases: [{ en: "Where do you come from?", cn: "你来自哪里？" }],
                grammar: ""
            },
            {
                speaker: "DIMITRI", speakerClass: "speaker-penny", english: "I come from Greece.", chinese: "我来自希腊。",
                phrases: [{ en: "come from", cn: "来自..." }],
                grammar: ""
            },
            {
                speaker: "HANS", speakerClass: "speaker-sam", english: "What's the climate like in your country?", chinese: "你们国家的气候怎么样？",
                phrases: [{ en: "What's...like?", cn: "...怎么样？" }],
                grammar: ""
            },
            {
                speaker: "DIMITRI", speakerClass: "speaker-penny", english: "It's very pleasant.", chinese: "气候非常宜人。",
                phrases: [],
                grammar: ""
            },
            {
                speaker: "HANS", speakerClass: "speaker-sam", english: "What's the weather like in spring?", chinese: "春天天气怎么样？",
                phrases: [{ en: "the weather", cn: "天气" }, { en: "in spring", cn: "在春天" }],
                grammar: ""
            },
            {
                speaker: "DIMITRI", speakerClass: "speaker-penny", english: "It's often windy in March. It's always warm in April and May, but it rains sometimes.", chinese: "三月常常刮风。四月和五月总是很暖和，但有时下雨。",
                phrases: [{ en: "it rains", cn: "下雨" }],
                grammar: ""
            },
            {
                speaker: "HANS", speakerClass: "speaker-sam", english: "What's it like in summer?", chinese: "夏天怎么样？",
                phrases: [{ en: "in summer", cn: "在夏天" }],
                grammar: ""
            },
            {
                speaker: "DIMITRI", speakerClass: "speaker-penny", english: "It's always hot in June, July and August. The sun shines every day.", chinese: "六、七、八月总是很热。每天都阳光灿烂。",
                phrases: [{ en: "the sun shines", cn: "阳光照耀" }, { en: "every day", cn: "每天" }],
                grammar: ""
            },
            {
                speaker: "HANS", speakerClass: "speaker-sam", english: "Is it cold or warm in autumn?", chinese: "秋天是冷还是暖？",
                phrases: [{ en: "in autumn", cn: "在秋天" }],
                grammar: ""
            },
            {
                speaker: "DIMITRI", speakerClass: "speaker-penny", english: "It's always warm in September and October. It's often cold in November and it rains sometimes.", chinese: "九月和十月总是很暖和。十一月常常很冷，有时下雨。",
                phrases: [],
                grammar: ""
            },
            {
                speaker: "HANS", speakerClass: "speaker-sam", english: "Is it very cold in winter?", chinese: "冬天很冷吗？",
                phrases: [{ en: "in winter", cn: "在冬天" }],
                grammar: ""
            },
            {
                speaker: "DIMITRI", speakerClass: "speaker-penny", english: "It's often cold in December, January and February. It snows sometimes.", chinese: "十二月、一月和二月常常很冷。有时下雪。",
                phrases: [{ en: "it snows", cn: "下雪" }],
                grammar: ""
            }
        ]
    },
    53: {
        title: "An interesting climate",
        titleCn: "有趣的气候",
        sentences: [
            {
                speaker: "HANS", speakerClass: "speaker-sam", english: "Where do you come from?", chinese: "你从哪里来？",
                phrases: [],
                grammar: ""
            },
            {
                speaker: "JIM", speakerClass: "speaker-penny", english: "I come from England.", chinese: "我来自英国。",
                phrases: [],
                grammar: ""
            },
            {
                speaker: "HANS", speakerClass: "speaker-sam", english: "What's the climate like in your country?", chinese: "你们国家的气候怎么样？",
                phrases: [],
                grammar: ""
            },
            {
                speaker: "JIM", speakerClass: "speaker-penny", english: "It's mild, but it's not always pleasant.", chinese: "气候温和，但并不总是宜人。",
                phrases: [],
                grammar: ""
            },
            {
                speaker: "JIM", speakerClass: "speaker-penny", english: "The weather's often cold in the North and windy in the East.", chinese: "北部天气常常寒冷，东部常常刮风。",
                phrases: [{ en: "the North", cn: "北部" }, { en: "the East", cn: "东部" }],
                grammar: ""
            },
            {
                speaker: "JIM", speakerClass: "speaker-penny", english: "It's often wet in the West and sometimes warm in the South.", chinese: "西部常常潮湿，南部有时温暖。",
                phrases: [{ en: "the West", cn: "西部" }, { en: "the South", cn: "南部" }],
                grammar: ""
            },
            {
                speaker: "HANS", speakerClass: "speaker-sam", english: "Which seasons do you like best?", chinese: "你最喜欢哪些季节？",
                phrases: [{ en: "like best", cn: "最喜欢" }],
                grammar: ""
            },
            {
                speaker: "JIM", speakerClass: "speaker-penny", english: "I like spring and summer. The days are long and the nights are short.", chinese: "我喜欢春天和夏天。白天长，夜晚短。",
                phrases: [],
                grammar: ""
            },
            {
                speaker: "JIM", speakerClass: "speaker-penny", english: "The sun rises early and sets late.", chinese: "太阳升得早，落得晚。",
                phrases: [],
                grammar: ""
            },
            {
                speaker: "JIM", speakerClass: "speaker-penny", english: "I don't like autumn and winter. The days are short and the nights are long.", chinese: "我不喜欢秋天和冬天。白天短，夜晚长。",
                phrases: [],
                grammar: ""
            },
            {
                speaker: "JIM", speakerClass: "speaker-penny", english: "The sun rises late and sets early.", chinese: "太阳升得晚，落得早。",
                phrases: [],
                grammar: ""
            },
            {
                speaker: "JIM", speakerClass: "speaker-penny", english: "Our climate is not very good, but it's certainly interesting. It's our favourite subject of conversation.", chinese: "我们的气候不太好，但确实很有趣。它是我们最喜欢谈论的话题。",
                phrases: [{ en: "subject of conversation", cn: "谈话话题" }],
                grammar: ""
            }
        ]
    },
    55: {
        title: "The Sawyer family",
        titleCn: "索耶一家",
        sentences: [
            {
                speaker: "TEXT", speakerClass: "speaker-sam", english: "The Sawyers live at 87 King Street.", chinese: "索耶一家住在国王街87号。",
                grammar: "",
                phrases: [{ en: "live at", cn: "住在（地址）" }]
            },
            {
                speaker: "TEXT", speakerClass: "speaker-sam", english: "In the morning, Mr. Sawyer goes to work and the children go to school.", chinese: "早晨，索耶先生去上班，孩子们去上学。",
                grammar: "",
                phrases: [{ en: "go to work", cn: "去上班" }, { en: "go to school", cn: "去上学" }]
            },
            {
                speaker: "TEXT", speakerClass: "speaker-sam", english: "Their father takes them to school every day.", chinese: "他们的父亲每天送他们上学。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "TEXT", speakerClass: "speaker-sam", english: "Mrs. Sawyer stays at home every day. She does the housework.", chinese: "索耶太太每天待在家里。她做家务。",
                grammar: "",
                phrases: [{ en: "stay at home", cn: "待在家" }, { en: "do the housework", cn: "做家务" }]
            },
            {
                speaker: "TEXT", speakerClass: "speaker-sam", english: "She always eats her lunch at noon.", chinese: "她总是在中午吃午饭。",
                grammar: "",
                phrases: [{ en: "at noon", cn: "在中午" }]
            },
            {
                speaker: "TEXT", speakerClass: "speaker-sam", english: "In the afternoon, she usually sees her friends. They often drink tea together.", chinese: "下午，她通常会见朋友。她们常常一起喝茶。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "TEXT", speakerClass: "speaker-sam", english: "In the evening, the children come home from school. They arrive home early.", chinese: "傍晚，孩子们放学回家。他们到家很早。",
                grammar: "",
                phrases: [{ en: "come home", cn: "回家" }]
            },
            {
                speaker: "TEXT", speakerClass: "speaker-sam", english: "Mr. Sawyer comes home from work. He arrives home late.", chinese: "索耶先生下班回家。他到家很晚。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "TEXT", speakerClass: "speaker-sam", english: "At night, the children always do their homework. Then they go to bed.", chinese: "夜里，孩子们总是做功课。然后他们上床睡觉。",
                grammar: "",
                phrases: [{ en: "at night", cn: "在夜里" }, { en: "go to bed", cn: "上床睡觉" }]
            },
            {
                speaker: "TEXT", speakerClass: "speaker-sam", english: "Mr. Sawyer usually reads his newspaper, but sometimes he and his wife watch television.", chinese: "索耶先生通常看报纸，但有时他和妻子一起看电视。",
                grammar: "",
                phrases: [{ en: "read the newspaper", cn: "看报纸" }, { en: "watch television", cn: "看电视" }]
            }
        ]
    },
    57: {
        title: "An unusual day",
        titleCn: "不寻常的一天",
        sentences: [
            {
                speaker: "TEXT", speakerClass: "speaker-sam", english: "It's eight o'clock. The children go to school by car every day, but today, they are going to school on foot.", chinese: "现在是8点钟。孩子们每天乘汽车上学，但今天他们步行上学。",
                grammar: "",
                phrases: [{ en: "by car", cn: "乘汽车" }, { en: "on foot", cn: "步行" }]
            },
            {
                speaker: "TEXT", speakerClass: "speaker-sam", english: "It is ten o'clock. Mrs. Sawyer usually stays at home in the morning, but this morning, she is going to the shops.", chinese: "现在是10点钟。索耶太太通常早上待在家里，但今天早上她要去商店。",
                grammar: "",
                phrases: [{ en: "go to the shops", cn: "去商店" }]
            },
            {
                speaker: "TEXT", speakerClass: "speaker-sam", english: "It is four o'clock. In the afternoon, Mrs. Sawyer usually drinks tea in the living room. But this afternoon, she is drinking tea in the garden.", chinese: "现在是4点钟。下午，索耶太太通常在客厅喝茶。但今天下午她在花园里喝茶。",
                grammar: "",
                phrases: [{ en: "living room", cn: "客厅" }]
            },
            {
                speaker: "TEXT", speakerClass: "speaker-sam", english: "It is six o'clock. In the evening, the children usually do their homework, but this evening, they are not doing their homework.", chinese: "现在是6点钟。晚上，孩子们通常做功课，但今天晚上他们没在做功课。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "TEXT", speakerClass: "speaker-sam", english: "At the moment, they are playing in the garden.", chinese: "此刻，他们正在花园里玩。",
                grammar: "",
                phrases: [{ en: "at the moment", cn: "此刻" }]
            },
            {
                speaker: "TEXT", speakerClass: "speaker-sam", english: "It is nine o'clock. Mr. Sawyer usually reads his newspaper at night. But he's not reading his newspaper tonight.", chinese: "现在是9点钟。索耶先生通常在夜里看报纸。但今晚他没在看报纸。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "TEXT", speakerClass: "speaker-sam", english: "At the moment, he's reading an interesting book.", chinese: "此刻，他在读一本有趣的书。",
                grammar: "",
                phrases: []
            }
        ]
    },
    59: {
        title: "Is that all?",
        titleCn: "就这些吗？",
        sentences: [
            {
                speaker: "LADY", speakerClass: "speaker-penny", english: "I want some envelopes, please.", chinese: "请给我拿几个信封。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "SHOP ASSISTANT", speakerClass: "speaker-sam", english: "Do you want the large size or the small size?", chinese: "您要大号的还是小号的？",
                grammar: "",
                phrases: []
            },
            {
                speaker: "LADY", speakerClass: "speaker-penny", english: "The large size, please.", chinese: "请拿大号的。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "LADY", speakerClass: "speaker-penny", english: "Do you have any writing paper?", chinese: "您有信纸吗？",
                grammar: "",
                phrases: [{ en: "writing paper", cn: "信纸" }]
            },
            {
                speaker: "SHOP ASSISTANT", speakerClass: "speaker-sam", english: "Yes, we do. I don't have any small pads. I only have large ones.", chinese: "有。我没有小本的，只有大本的。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "SHOP ASSISTANT", speakerClass: "speaker-sam", english: "Do you want a pad?", chinese: "您要一本吗？",
                grammar: "",
                phrases: []
            },
            {
                speaker: "LADY", speakerClass: "speaker-penny", english: "Yes, please. And I want some glue.", chinese: "好的，请拿一本。我还要些胶水。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "SHOP ASSISTANT", speakerClass: "speaker-sam", english: "A bottle of glue.", chinese: "一瓶胶水。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "LADY", speakerClass: "speaker-penny", english: "And I want a large box of chalk, too.", chinese: "我还要一大盒粉笔。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "SHOP ASSISTANT", speakerClass: "speaker-sam", english: "I only have small boxes. Do you want one?", chinese: "我只有小盒的。您要一盒吗？",
                grammar: "",
                phrases: []
            },
            {
                speaker: "LADY", speakerClass: "speaker-penny", english: "No, thank you.", chinese: "不，谢谢。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "SHOP ASSISTANT", speakerClass: "speaker-sam", english: "Is that all?", chinese: "就这些吗？",
                grammar: "",
                phrases: [{ en: "Is that all?", cn: "就这些吗？" }]
            },
            {
                speaker: "LADY", speakerClass: "speaker-penny", english: "That's all, thank you.", chinese: "就这些，谢谢。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "SHOP ASSISTANT", speakerClass: "speaker-sam", english: "What else do you want?", chinese: "您还要什么？",
                grammar: "",
                phrases: [{ en: "What else...?", cn: "还有什么...？" }]
            },
            {
                speaker: "LADY", speakerClass: "speaker-penny", english: "I want my change.", chinese: "我想要我的零钱。",
                grammar: "",
                phrases: []
            }
        ]
    },
    61: {
        title: "A bad cold",
        titleCn: "重感冒",
        sentences: [
            {
                speaker: "MR WILLIAMS", speakerClass: "speaker-sam", english: "Where's Jimmy?", chinese: "吉米在哪儿？",
                grammar: "",
                phrases: []
            },
            {
                speaker: "MRS WILLIAMS", speakerClass: "speaker-penny", english: "He's in bed.", chinese: "他躺在床上。",
                grammar: "",
                phrases: [{ en: "in bed", cn: "卧床" }]
            },
            {
                speaker: "MR WILLIAMS", speakerClass: "speaker-sam", english: "What's the matter with him?", chinese: "他怎么了？",
                grammar: "",
                phrases: [{ en: "What's the matter with...?", cn: "...怎么了？" }]
            },
            {
                speaker: "MRS WILLIAMS", speakerClass: "speaker-penny", english: "He feels ill.", chinese: "他感觉不舒服。",
                grammar: "",
                phrases: [{ en: "feel ill", cn: "感觉不舒服" }]
            },
            {
                speaker: "MR WILLIAMS", speakerClass: "speaker-sam", english: "He looks ill.", chinese: "他看起来病了。",
                grammar: "",
                phrases: [{ en: "look ill", cn: "看起来生病了" }]
            },
            {
                speaker: "MRS WILLIAMS", speakerClass: "speaker-penny", english: "We must call the doctor.", chinese: "我们必须叫医生。",
                grammar: "",
                phrases: [{ en: "call the doctor", cn: "叫医生" }]
            },
            {
                speaker: "MR WILLIAMS", speakerClass: "speaker-sam", english: "Yes, we must.", chinese: "是的，我们必须叫。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "MR WILLIAMS", speakerClass: "speaker-sam", english: "Can you remember the doctor's telephone number?", chinese: "你记得医生的电话号码吗？",
                grammar: "",
                phrases: []
            },
            {
                speaker: "MRS WILLIAMS", speakerClass: "speaker-penny", english: "Yes. It's 09754.", chinese: "记得。是09754。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "DOCTOR", speakerClass: "speaker-sam", english: "Open your mouth, Jimmy. Show me your tongue. Say, \"Ah\".", chinese: "张开嘴，吉米。让我看看你的舌头。说\"啊\"。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "MR WILLIAMS", speakerClass: "speaker-sam", english: "What's the matter with him, doctor?", chinese: "他怎么了，医生？",
                grammar: "",
                phrases: []
            },
            {
                speaker: "DOCTOR", speakerClass: "speaker-sam", english: "He has a bad cold, Mr. Williams, so he must stay in bed for a week.", chinese: "他得了重感冒，威廉斯先生，所以他必须卧床一周。",
                grammar: "",
                phrases: [{ en: "have a bad cold", cn: "得了重感冒" }, { en: "stay in bed", cn: "卧床休息" }]
            },
            {
                speaker: "MRS WILLIAMS", speakerClass: "speaker-penny", english: "That's good news for Jimmy.", chinese: "这对吉米来说是个好消息。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "DOCTOR", speakerClass: "speaker-sam", english: "Good news? Why?", chinese: "好消息？为什么？",
                grammar: "",
                phrases: []
            },
            {
                speaker: "MR WILLIAMS", speakerClass: "speaker-sam", english: "Because he doesn't like school!", chinese: "因为他不喜欢上学！",
                grammar: "",
                phrases: []
            }
        ]
    },
    63: {
        title: "Thank you, doctor.",
        titleCn: "谢谢你，医生。",
        sentences: [
            {
                speaker: "DOCTOR", speakerClass: "speaker-sam", english: "How's Jimmy today?", chinese: "吉米今天怎么样？",
                grammar: "",
                phrases: [{ en: "How's...?", cn: "...怎么样？" }]
            },
            {
                speaker: "MRS WILLIAMS", speakerClass: "speaker-penny", english: "Better. Thank you, Doctor.", chinese: "好多了。谢谢您，医生。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "DOCTOR", speakerClass: "speaker-sam", english: "Can I see him please, Mrs. Williams?", chinese: "我能看看他吗，威廉斯太太？",
                grammar: "",
                phrases: []
            },
            {
                speaker: "MRS WILLIAMS", speakerClass: "speaker-penny", english: "Certainly, doctor. Come upstairs.", chinese: "当然可以，医生。请上楼。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "DOCTOR", speakerClass: "speaker-sam", english: "You look very well, Jimmy. You are better now, but you mustn't get up yet.", chinese: "你看起来很好，吉米。你现在好多了，但还不能起床。",
                grammar: "",
                phrases: [{ en: "mustn't", cn: "不准、禁止" }, { en: "get up", cn: "起床" }]
            },
            {
                speaker: "DOCTOR", speakerClass: "speaker-sam", english: "You must stay in bed for another two days.", chinese: "你必须再卧床两天。",
                grammar: "",
                phrases: [{ en: "another + 数字", cn: "再/又...（表示额外）" }]
            },
            {
                speaker: "DOCTOR", speakerClass: "speaker-sam", english: "The boy mustn't go to school yet, Mrs. Williams. And he mustn't eat rich food.", chinese: "这孩子还不能去上学，威廉斯太太。他也不能吃油腻的食物。",
                grammar: "",
                phrases: [{ en: "rich food", cn: "油腻的食物" }]
            },
            {
                speaker: "MRS WILLIAMS", speakerClass: "speaker-penny", english: "Does he have a temperature, doctor?", chinese: "他发烧吗，医生？",
                grammar: "",
                phrases: [{ en: "have a temperature", cn: "发烧" }]
            },
            {
                speaker: "DOCTOR", speakerClass: "speaker-sam", english: "No, he doesn't.", chinese: "不，他没有发烧。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "MRS WILLIAMS", speakerClass: "speaker-penny", english: "Must he stay in bed?", chinese: "他必须卧床吗？",
                grammar: "",
                phrases: []
            },
            {
                speaker: "DOCTOR", speakerClass: "speaker-sam", english: "Yes. He must remain in bed for another two days.", chinese: "是的。他必须再卧床两天。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "DOCTOR", speakerClass: "speaker-sam", english: "He can get up for about two hours each day, but you must keep the room warm.", chinese: "他每天可以起床大约两小时，但你必须保持房间温暖。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "DOCTOR", speakerClass: "speaker-sam", english: "Where's Mr. Williams this evening?", chinese: "威廉斯先生今晚在哪儿？",
                grammar: "",
                phrases: []
            },
            {
                speaker: "MRS WILLIAMS", speakerClass: "speaker-penny", english: "He's in bed, doctor. Can you see him please? He has a bad cold, too!", chinese: "他在床上，医生。您能去看看他吗？他也得了重感冒！",
                grammar: "",
                phrases: []
            }
        ]
    },
    65: {
        title: "Not a baby",
        titleCn: "不是小孩子",
        sentences: [
            {
                speaker: "FATHER", speakerClass: "speaker-sam", english: "What are you going to do this evening, Jill?", chinese: "今晚你打算干什么，吉尔？",
                grammar: "",
                phrases: [{ en: "be going to", cn: "打算做某事" }]
            },
            {
                speaker: "JILL", speakerClass: "speaker-penny", english: "I'm going to meet some friends, Dad.", chinese: "我打算去见几个朋友，爸爸。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "FATHER", speakerClass: "speaker-sam", english: "You mustn't come home late. You must be home at half past ten.", chinese: "你不准回家太晚。你必须在10点半到家。",
                grammar: "",
                phrases: [{ en: "half past + 数字", cn: "...点半" }]
            },
            {
                speaker: "JILL", speakerClass: "speaker-penny", english: "I can't get home so early, Dad!", chinese: "我这么早到不了家，爸爸！",
                grammar: "",
                phrases: []
            },
            {
                speaker: "JILL", speakerClass: "speaker-penny", english: "Can I have the key to the front door please?", chinese: "我能带上前门的钥匙吗？",
                grammar: "",
                phrases: [{ en: "front door", cn: "前门" }]
            },
            {
                speaker: "FATHER", speakerClass: "speaker-sam", english: "No, you can't.", chinese: "不行，你不能带。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "MOTHER", speakerClass: "speaker-penny", english: "Jill's eighteen years old, Tom. She's not a baby. Give her the key. She always comes home early.", chinese: "吉尔都18岁了，汤姆。她不是小孩子了。把钥匙给她吧。她总是早早回家的。",
                grammar: "",
                phrases: [{ en: "years old", cn: "...岁" }]
            },
            {
                speaker: "FATHER", speakerClass: "speaker-sam", english: "Oh, all right!", chinese: "哦，好吧！",
                grammar: "",
                phrases: []
            },
            {
                speaker: "FATHER", speakerClass: "speaker-sam", english: "Here you are. But you mustn't come home after a quarter past eleven. Do you hear?", chinese: "拿去。但你不许超过11点15分回家。听见了吗？",
                grammar: "",
                phrases: [{ en: "a quarter past + 数字", cn: "...点15分" }]
            },
            {
                speaker: "JILL", speakerClass: "speaker-penny", english: "Yes, Dad.", chinese: "听见了，爸爸。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "JILL", speakerClass: "speaker-penny", english: "Thanks, Mum.", chinese: "谢谢，妈妈。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "MOTHER", speakerClass: "speaker-penny", english: "That's all right. Goodbye. Enjoy yourself!", chinese: "不用谢。再见。玩得开心！",
                grammar: "",
                phrases: [{ en: "Enjoy yourself!", cn: "玩得开心！" }]
            },
            {
                speaker: "JILL", speakerClass: "speaker-penny", english: "We always enjoy ourselves, Mum. Bye-bye.", chinese: "我们总是玩得很开心的，妈妈。再见。",
                grammar: "",
                phrases: [{ en: "enjoy oneself", cn: "玩得开心" }]
            }
        ]
    },
    67: {
        title: "The weekend",
        titleCn: "周末",
        sentences: [
            {
                speaker: "MRS JOHNSON", speakerClass: "speaker-penny", english: "Hello, Mrs. Williams. Were you at the butcher's?", chinese: "你好，威廉斯太太。你刚才在肉店吗？",
                grammar: "",
                phrases: []
            },
            {
                speaker: "MRS WILLIAMS", speakerClass: "speaker-sam", english: "Yes, I was. Were you at the butcher's, too?", chinese: "是的，我在。你也在肉店吗？",
                grammar: "",
                phrases: []
            },
            {
                speaker: "MRS JOHNSON", speakerClass: "speaker-penny", english: "No, I wasn't. I was at the greengrocer's. How's Jimmy today?", chinese: "不，我不在。我在蔬菜水果店。吉米今天怎么样？",
                grammar: "",
                phrases: [{ en: "greengrocer's", cn: "蔬菜水果店" }]
            },
            {
                speaker: "MRS WILLIAMS", speakerClass: "speaker-sam", english: "He's very well, thank you.", chinese: "他很好，谢谢。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "MRS JOHNSON", speakerClass: "speaker-penny", english: "Was he absent from school last week?", chinese: "他上周没上学吗？",
                grammar: "",
                phrases: [{ en: "be absent from", cn: "缺席" }, { en: "last week", cn: "上周" }]
            },
            {
                speaker: "MRS WILLIAMS", speakerClass: "speaker-sam", english: "Yes, he was. He was absent on Monday, Tuesday, Wednesday and Thursday.", chinese: "是的。他周一、周二、周三和周四都没上学。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "MRS WILLIAMS", speakerClass: "speaker-sam", english: "How are you all keeping?", chinese: "你们全家都好吗？",
                grammar: "",
                phrases: [{ en: "How are you keeping?", cn: "你身体怎么样？" }]
            },
            {
                speaker: "MRS JOHNSON", speakerClass: "speaker-penny", english: "Very well, thank you. We're going to spend three days in the country.", chinese: "很好，谢谢。我们打算在乡下待三天。",
                grammar: "",
                phrases: [{ en: "spend time in", cn: "在...度过时间" }, { en: "the country", cn: "乡下" }]
            },
            {
                speaker: "MRS JOHNSON", speakerClass: "speaker-penny", english: "We're going to stay at my mother's for the weekend.", chinese: "我们打算周末住在我母亲那里。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "MRS WILLIAMS", speakerClass: "speaker-sam", english: "Friday, Saturday and Sunday in the country! Aren't you lucky!", chinese: "周五、周六和周日都在乡下！你们真幸运！",
                grammar: "",
                phrases: []
            }
        ]
    },
    69: {
        title: "The car race",
        titleCn: "汽车比赛",
        sentences: [
            {
                speaker: "TEXT", speakerClass: "speaker-sam", english: "There is a car race near our town every year.", chinese: "我们镇附近每年都有一场汽车比赛。",
                grammar: "",
                phrases: [{ en: "car race", cn: "汽车比赛" }]
            },
            {
                speaker: "TEXT", speakerClass: "speaker-sam", english: "In 1995, there was a very big race.", chinese: "1995年有一场非常盛大的比赛。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "TEXT", speakerClass: "speaker-sam", english: "There were hundreds of people there. My wife and I were at the race.", chinese: "那里有几百人。我和妻子观看了这场比赛。",
                grammar: "",
                phrases: [{ en: "hundreds of", cn: "几百个" }]
            },
            {
                speaker: "TEXT", speakerClass: "speaker-sam", english: "Our friends Julie and Jack were there, too. You can see us in the crowd. We are standing on the left.", chinese: "我们的朋友朱莉和杰克也在那儿。你能在人群中看到我们。我们站在左边。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "TEXT", speakerClass: "speaker-sam", english: "There were twenty cars in the race.", chinese: "有20辆汽车参赛。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "TEXT", speakerClass: "speaker-sam", english: "There were English cars, French cars, German cars, Italian cars, American cars and Japanese cars.", chinese: "有英国车、法国车、德国车、意大利车、美国车和日本车。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "TEXT", speakerClass: "speaker-sam", english: "It was an exciting finish.", chinese: "这是一个激动人心的终点冲刺。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "TEXT", speakerClass: "speaker-sam", english: "The winner was Billy Stewart. He was in car number fifteen.", chinese: "获胜者是比利·斯图尔特。他驾驶的是15号车。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "TEXT", speakerClass: "speaker-sam", english: "Five other cars were just behind him.", chinese: "另外五辆车就在他后面。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "TEXT", speakerClass: "speaker-sam", english: "On the way home, my wife said to me, \"Don't drive so quickly! You're not Billy Stewart!\"", chinese: "在回家的路上，我妻子对我说：\"别开得这么快！你不是比利·斯图尔特！\"",
                grammar: "",
                phrases: [{ en: "on the way home", cn: "在回家的路上" }]
            }
        ]
    },
    71: {
        title: "He's awful!",
        titleCn: "他讨厌透了！",
        sentences: [
            {
                speaker: "JANE", speakerClass: "speaker-penny", english: "What's Ron Marston like, Pauline?", chinese: "罗恩·马斯顿是个什么样的人，波琳？",
                grammar: "",
                phrases: [{ en: "What's...like?", cn: "...是什么样的？" }]
            },
            {
                speaker: "PAULINE", speakerClass: "speaker-sam", english: "He's awful! He telephoned me four times yesterday, and three times the day before yesterday.", chinese: "他讨厌透了！昨天给我打了四次电话，前天打了三次。",
                grammar: "",
                phrases: [{ en: "the day before yesterday", cn: "前天" }]
            },
            {
                speaker: "PAULINE", speakerClass: "speaker-sam", english: "He telephoned the office yesterday morning and yesterday afternoon. My boss answered the telephone.", chinese: "他昨天上午和下午都给办公室打电话了。我老板接的电话。",
                grammar: "",
                phrases: [{ en: "answer the telephone", cn: "接电话" }]
            },
            {
                speaker: "JANE", speakerClass: "speaker-penny", english: "What did your boss say to him?", chinese: "你老板跟他说了什么？",
                grammar: "",
                phrases: []
            },
            {
                speaker: "PAULINE", speakerClass: "speaker-sam", english: "He said, \"Pauline is typing letters. She can't speak to you now!\"", chinese: "他说：\"波琳正在打信。她现在不能和你说话！\"",
                grammar: "",
                phrases: [{ en: "type letters", cn: "打信" }]
            },
            {
                speaker: "PAULINE", speakerClass: "speaker-sam", english: "Then I arrived home at six o'clock yesterday evening. He telephoned again. But I didn't answer the phone!", chinese: "后来我昨天晚上6点到家。他又打电话了。但我没接！",
                grammar: "",
                phrases: []
            },
            {
                speaker: "JANE", speakerClass: "speaker-penny", english: "Did he telephone again last night?", chinese: "他昨晚又打电话了吗？",
                grammar: "",
                phrases: [{ en: "last night", cn: "昨晚" }]
            },
            {
                speaker: "PAULINE", speakerClass: "speaker-sam", english: "Yes, he did. He telephoned at nine o'clock.", chinese: "是的，打了。他9点钟打的。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "JANE", speakerClass: "speaker-penny", english: "What did you say to him?", chinese: "你跟他说了什么？",
                grammar: "",
                phrases: []
            },
            {
                speaker: "PAULINE", speakerClass: "speaker-sam", english: "I said, 'This is Pauline's mother. Please don't telephone my daughter again!'", chinese: "我说：\"我是波琳的母亲。请别再给我女儿打电话了！\"",
                grammar: "",
                phrases: []
            },
            {
                speaker: "JANE", speakerClass: "speaker-penny", english: "Did he telephone again?", chinese: "他又打电话了吗？",
                grammar: "",
                phrases: []
            },
            {
                speaker: "PAULINE", speakerClass: "speaker-sam", english: "No, he didn't!", chinese: "没有！",
                grammar: "",
                phrases: []
            }
        ]
    },
    73: {
        title: "The way to King Street",
        titleCn: "去国王街的路",
        sentences: [
            {
                speaker: "TEXT", speakerClass: "speaker-sam", english: "Last week Mrs. Mills went to London.", chinese: "上周米尔斯太太去了伦敦。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "TEXT", speakerClass: "speaker-sam", english: "She does not know London very well, and she lost her way.", chinese: "她对伦敦不太熟悉，因此迷了路。",
                grammar: "",
                phrases: [{ en: "lose one's way", cn: "迷路" }]
            },
            {
                speaker: "TEXT", speakerClass: "speaker-sam", english: "Suddenly, she saw a man near a bus stop.", chinese: "突然，她在公共汽车站附近看到一个男人。",
                grammar: "",
                phrases: [{ en: "bus stop", cn: "公共汽车站" }]
            },
            {
                speaker: "TEXT", speakerClass: "speaker-sam", english: "\"I can ask him the way,\" she said to herself.", chinese: "\"我可以向他问路，\"她心想。",
                grammar: "",
                phrases: [{ en: "ask...the way", cn: "向...问路" }, { en: "say to oneself", cn: "心想" }]
            },
            {
                speaker: "MRS MILLS", speakerClass: "speaker-penny", english: "Excuse me. Can you tell me the way to King Street, please?", chinese: "对不起，请问您能告诉我去国王街怎么走吗？",
                grammar: "",
                phrases: [{ en: "tell me the way to", cn: "告诉我去...的路" }]
            },
            {
                speaker: "TEXT", speakerClass: "speaker-sam", english: "The man smiled pleasantly. He did not understand English!", chinese: "那个男人愉快地笑了笑。他不懂英语！",
                grammar: "",
                phrases: []
            },
            {
                speaker: "TEXT", speakerClass: "speaker-sam", english: "He spoke German. He was a tourist.", chinese: "他说德语。他是个游客。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "TEXT", speakerClass: "speaker-sam", english: "Then he put his hand into his pocket, and took out a phrasebook.", chinese: "然后他把手伸进口袋，掏出了一本常用语手册。",
                grammar: "",
                phrases: [{ en: "take out", cn: "拿出" }]
            },
            {
                speaker: "TEXT", speakerClass: "speaker-sam", english: "He opened the book and found a phrase. He read the phrase slowly.", chinese: "他打开书找到了一条短语。他缓慢地读着这条短语。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "THE MAN", speakerClass: "speaker-sam", english: "I am sorry. I do not speak English.", chinese: "对不起，我不会讲英语。",
                grammar: "",
                phrases: []
            }
        ]
    },
    75: {
        title: "Uncomfortable shoes",
        titleCn: "不舒适的鞋子",
        sentences: [
            {
                speaker: "LADY", speakerClass: "speaker-penny", english: "Have you any shoes like these?", chinese: "你们有像这样的鞋吗？",
                grammar: "",
                phrases: []
            },
            {
                speaker: "SALESMAN", speakerClass: "speaker-sam", english: "What size?", chinese: "什么尺码？",
                grammar: "",
                phrases: []
            },
            {
                speaker: "LADY", speakerClass: "speaker-penny", english: "Size five.", chinese: "5号的。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "SALESMAN", speakerClass: "speaker-sam", english: "What colour?", chinese: "什么颜色？",
                grammar: "",
                phrases: []
            },
            {
                speaker: "LADY", speakerClass: "speaker-penny", english: "Black.", chinese: "黑色的。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "SALESMAN", speakerClass: "speaker-sam", english: "I'm sorry. We don't have any.", chinese: "对不起，我们没有。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "LADY", speakerClass: "speaker-penny", english: "But my sister bought this pair last month.", chinese: "但是我姐姐上个月买了这双。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "SALESMAN", speakerClass: "speaker-sam", english: "Did she buy them here?", chinese: "她是在这儿买的吗？",
                grammar: "",
                phrases: []
            },
            {
                speaker: "LADY", speakerClass: "speaker-penny", english: "No, she bought them in the U.S.", chinese: "不，她在美国买的。",
                grammar: "",
                phrases: [{ en: "the U.S.", cn: "美国" }]
            },
            {
                speaker: "SALESMAN", speakerClass: "speaker-sam", english: "We had some shoes like those a month ago, but we don't have any now.", chinese: "一个月前我们有一些那样的鞋，但现在没有了。",
                grammar: "",
                phrases: [{ en: "a month ago", cn: "一个月前" }]
            },
            {
                speaker: "LADY", speakerClass: "speaker-penny", english: "Can you get a pair for me, please?", chinese: "您能为我弄一双吗？",
                grammar: "",
                phrases: []
            },
            {
                speaker: "SALESMAN", speakerClass: "speaker-sam", english: "I'm afraid that I can't.", chinese: "恐怕不行。",
                grammar: "",
                phrases: [{ en: "I'm afraid", cn: "恐怕" }]
            },
            {
                speaker: "SALESMAN", speakerClass: "speaker-sam", english: "They were in fashion last year and the year before last. But they're not in fashion this year.", chinese: "这种鞋去年和前年流行，但今年不流行了。",
                grammar: "",
                phrases: [{ en: "in fashion", cn: "流行、时髦" }, { en: "the year before last", cn: "前年" }]
            },
            {
                speaker: "SALESMAN", speakerClass: "speaker-sam", english: "These shoes are in fashion now.", chinese: "这些鞋现在流行。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "LADY", speakerClass: "speaker-penny", english: "They look very uncomfortable.", chinese: "它们看起来不太舒服。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "SALESMAN", speakerClass: "speaker-sam", english: "They are very uncomfortable. But women always wear uncomfortable shoes!", chinese: "它们是很不舒服。但女人总是穿不舒服的鞋！",
                grammar: "",
                phrases: []
            }
        ]
    },
    77: {
        title: "Terrible toothache",
        titleCn: "要命的牙痛",
        sentences: [
            {
                speaker: "NURSE", speakerClass: "speaker-penny", english: "Good morning, Mr. Croft.", chinese: "早上好，克罗夫特先生。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "MR CROFT", speakerClass: "speaker-sam", english: "Good morning, nurse. I want to see the dentist, please.", chinese: "早上好，护士。我想看牙医。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "NURSE", speakerClass: "speaker-penny", english: "Do you have an appointment?", chinese: "您有预约吗？",
                grammar: "",
                phrases: []
            },
            {
                speaker: "MR CROFT", speakerClass: "speaker-sam", english: "No, I don't.", chinese: "没有。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "NURSE", speakerClass: "speaker-penny", english: "Is it urgent?", chinese: "紧急吗？",
                grammar: "",
                phrases: []
            },
            {
                speaker: "MR CROFT", speakerClass: "speaker-sam", english: "Yes, it is. It's very urgent. I feel awful. I have a terrible toothache.", chinese: "是的，很紧急。我感觉糟透了。我牙疼得厉害。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "NURSE", speakerClass: "speaker-penny", english: "Can you come at 10 a.m. on Monday, April 24th?", chinese: "您能在4月24日星期一上午10点来吗？",
                grammar: "",
                phrases: []
            },
            {
                speaker: "MR CROFT", speakerClass: "speaker-sam", english: "I must see the dentist now, nurse.", chinese: "我必须现在就看牙医，护士。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "NURSE", speakerClass: "speaker-penny", english: "The dentist is very busy at the moment. Can you come at 2 p.m.?", chinese: "牙医现在很忙。您能下午2点来吗？",
                grammar: "",
                phrases: []
            },
            {
                speaker: "MR CROFT", speakerClass: "speaker-sam", english: "That's very late. Can the dentist see me now?", chinese: "那太晚了。牙医现在能给我看吗？",
                grammar: "",
                phrases: []
            },
            {
                speaker: "NURSE", speakerClass: "speaker-penny", english: "I'm afraid that he can't, Mr. Croft. Can't you wait till this afternoon?", chinese: "恐怕不行，克罗夫特先生。您不能等到今天下午吗？",
                grammar: "",
                phrases: [{ en: "wait till", cn: "等到" }]
            },
            {
                speaker: "MR CROFT", speakerClass: "speaker-sam", english: "I can wait, but my toothache can't!", chinese: "我能等，但我的牙痛等不了！",
                grammar: "",
                phrases: []
            }
        ]
    },
    79: {
        title: "Carol's shopping list",
        titleCn: "卡罗尔的购物单",
        sentences: [
            {
                speaker: "TOM", speakerClass: "speaker-sam", english: "What are you doing, Carol?", chinese: "你在干什么，卡罗尔？",
                grammar: "",
                phrases: []
            },
            {
                speaker: "CAROL", speakerClass: "speaker-penny", english: "I'm making a shopping list, Tom.", chinese: "我正在写购物单，汤姆。",
                grammar: "",
                phrases: [{ en: "shopping list", cn: "购物单" }]
            },
            {
                speaker: "TOM", speakerClass: "speaker-sam", english: "What do we need?", chinese: "我们需要什么？",
                grammar: "",
                phrases: []
            },
            {
                speaker: "CAROL", speakerClass: "speaker-penny", english: "We need a lot of things this week.", chinese: "这周我们需要很多东西。",
                grammar: "",
                phrases: [{ en: "a lot of", cn: "很多" }]
            },
            {
                speaker: "CAROL", speakerClass: "speaker-penny", english: "I must go to the grocer's. We haven't got much tea or coffee, and we haven't got any sugar or jam.", chinese: "我必须去食品杂货店。我们的茶和咖啡不多了，糖和果酱也没有了。",
                grammar: "",
                phrases: [{ en: "grocer's", cn: "食品杂货店" }]
            },
            {
                speaker: "TOM", speakerClass: "speaker-sam", english: "What about vegetables?", chinese: "蔬菜怎么样？",
                grammar: "",
                phrases: []
            },
            {
                speaker: "CAROL", speakerClass: "speaker-penny", english: "I must go to the greengrocer's. We haven't got many tomatoes, but we've got a lot of potatoes.", chinese: "我必须去蔬菜水果店。我们的西红柿不多了，但土豆很多。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "CAROL", speakerClass: "speaker-penny", english: "I must go to the butcher's, too. We need some meat. We haven't got any meat at all.", chinese: "我还必须去肉店。我们需要一些肉。我们一点肉都没有了。",
                grammar: "",
                phrases: [{ en: "at all", cn: "一点也（用于否定句）" }]
            },
            {
                speaker: "TOM", speakerClass: "speaker-sam", english: "Have we got any beer and wine?", chinese: "我们有啤酒和葡萄酒吗？",
                grammar: "",
                phrases: []
            },
            {
                speaker: "CAROL", speakerClass: "speaker-penny", english: "No, we haven't. And I'm not going to get any!", chinese: "没有。而且我也不打算买！",
                grammar: "",
                phrases: []
            },
            {
                speaker: "TOM", speakerClass: "speaker-sam", english: "I hope that you've got some money.", chinese: "我希望你有些钱。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "CAROL", speakerClass: "speaker-penny", english: "I haven't got much.", chinese: "我没多少钱。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "TOM", speakerClass: "speaker-sam", english: "Well, I haven't got much either!", chinese: "嗯，我也没多少钱！",
                grammar: "",
                phrases: []
            }
        ]
    },
    81: {
        title: "Roast beef and potatoes",
        titleCn: "烤牛肉和土豆",
        sentences: [
            {
                speaker: "SAM", speakerClass: "speaker-sam", english: "Hi, Carol! Where's Tom?", chinese: "嗨，卡罗尔！汤姆在哪儿？",
                phrases: [],
                grammar: ""
            },
            {
                speaker: "CAROL", speakerClass: "speaker-penny", english: "He's upstairs. He's having a bath.", chinese: "他在楼上。他正在洗澡。",
                phrases: [{ en: "have a bath", cn: "洗澡（英式说法，美式常说 take a bath）" }],
                grammar: ""
            },
            {
                speaker: "CAROL", speakerClass: "speaker-penny", english: "Tom!", chinese: "汤姆！",
                phrases: [],
                grammar: ""
            },
            {
                speaker: "TOM", speakerClass: "speaker-sam", english: "Yes?", chinese: "什么事？",
                phrases: [],
                grammar: ""
            },
            {
                speaker: "CAROL", speakerClass: "speaker-penny", english: "Sam's here.", chinese: "萨姆来了。",
                phrases: [{ en: "某人's here", cn: "某人来了/某人在这儿" }],
                grammar: ""
            },
            {
                speaker: "TOM", speakerClass: "speaker-sam", english: "I'm nearly ready.", chinese: "我马上就好。",
                phrases: [],
                grammar: ""
            },
            {
                speaker: "TOM", speakerClass: "speaker-sam", english: "Hello, Sam. Have a cigarette.", chinese: "你好，萨姆。抽支烟吧。",
                phrases: [{ en: "Have a + 名词", cn: "请用...吧（表示请客或邀请）" }],
                grammar: ""
            },
            {
                speaker: "SAM", speakerClass: "speaker-sam", english: "No, thanks, Tom.", chinese: "谢谢，汤姆，我不抽。",
                phrases: [{ en: "No, thanks.", cn: "不了，谢谢。（礼貌拒绝）" }],
                grammar: ""
            },
            {
                speaker: "TOM", speakerClass: "speaker-sam", english: "Have a glass of whisky then.", chinese: "那喝杯威士忌吧。",
                phrases: [{ en: "a glass of", cn: "一杯（玻璃杯装的）" }],
                grammar: ""
            },
            {
                speaker: "SAM", speakerClass: "speaker-sam", english: "OK. Thanks.", chinese: "好的，谢谢。",
                phrases: [],
                grammar: ""
            },
            {
                speaker: "TOM", speakerClass: "speaker-sam", english: "Is dinner ready, Carol?", chinese: "卡罗尔，晚餐准备好了吗？",
                phrases: [],
                grammar: ""
            },
            {
                speaker: "CAROL", speakerClass: "speaker-penny", english: "It's nearly ready. We can have dinner at seven o'clock.", chinese: "快好了。我们7点可以吃晚餐。",
                phrases: [{ en: "have dinner", cn: "吃晚餐" }],
                grammar: ""
            },
            {
                speaker: "TOM", speakerClass: "speaker-sam", english: "Sam and I had lunch together today. We went to a restaurant.", chinese: "萨姆和我今天一起吃的午餐。我们去了一家餐馆。",
                phrases: [{ en: "have lunch", cn: "吃午餐" }],
                grammar: ""
            },
            {
                speaker: "CAROL", speakerClass: "speaker-penny", english: "What did you have?", chinese: "你们吃了什么？",
                phrases: [],
                grammar: ""
            },
            {
                speaker: "TOM", speakerClass: "speaker-sam", english: "We had roast beef and potatoes.", chinese: "我们吃了烤牛肉和土豆。",
                phrases: [{ en: "roast beef", cn: "烤牛肉" }],
                grammar: ""
            },
            {
                speaker: "CAROL", speakerClass: "speaker-penny", english: "Oh!", chinese: "哦！",
                phrases: [],
                grammar: ""
            },
            {
                speaker: "TOM", speakerClass: "speaker-sam", english: "What's the matter, Carol?", chinese: "怎么了，卡罗尔？",
                phrases: [{ en: "What's the matter?", cn: "怎么了？出什么事了？" }],
                grammar: ""
            },
            {
                speaker: "CAROL", speakerClass: "speaker-penny", english: "Well, you're going to have roast beef and potatoes again tonight!", chinese: "嗯，你们今晚又要吃烤牛肉和土豆了！",
                phrases: [{ en: "be going to", cn: "将要...；打算...（表示将来）" }],
                grammar: ""
            }
        ]
    },
    83: {
        title: "Going on holiday",
        titleCn: "度假",
        sentences: [
            {
                speaker: "CAROL", speakerClass: "speaker-penny", english: "Hello, Sam. Come in.", chinese: "你好，萨姆。请进。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "TOM", speakerClass: "speaker-sam", english: "Hi, Sam. We're having lunch. Do you want to have lunch with us?", chinese: "嗨，萨姆。我们正在吃午餐。你想和我们一起吃吗？",
                grammar: "",
                phrases: []
            },
            {
                speaker: "SAM", speakerClass: "speaker-sam", english: "No, thank you, Tom. I've already had lunch. I had lunch at half past twelve.", chinese: "不，谢谢你，汤姆。我已经吃过了。我12点半吃的午餐。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "CAROL", speakerClass: "speaker-penny", english: "Have a cup of coffee then.", chinese: "那喝杯咖啡吧。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "SAM", speakerClass: "speaker-sam", english: "I've just had a cup, thank you. I had one after my lunch.", chinese: "我刚喝过了，谢谢。我午饭后喝了一杯。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "TOM", speakerClass: "speaker-sam", english: "Let's go into the living room, Carol. We can have our coffee there.", chinese: "我们去客厅吧，卡罗尔。我们可以在那儿喝咖啡。",
                grammar: "",
                phrases: [{ en: "living room", cn: "客厅" }]
            },
            {
                speaker: "CAROL", speakerClass: "speaker-penny", english: "Excuse the mess, Sam. This room's very untidy. We're packing our suitcases. We're going to leave tomorrow. Tom and I are going to have a holiday.", chinese: "请原谅这里乱七八糟的，萨姆。这房间很不整洁。我们正在收拾行李箱。我们明天要走。汤姆和我要去度假。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "SAM", speakerClass: "speaker-sam", english: "Aren't you lucky!", chinese: "你们真幸运！",
                grammar: "",
                phrases: []
            },
            {
                speaker: "TOM", speakerClass: "speaker-sam", english: "When are you going to have a holiday, Sam?", chinese: "萨姆，你什么时候去度假？",
                grammar: "",
                phrases: []
            },
            {
                speaker: "SAM", speakerClass: "speaker-sam", english: "I don't know. I've already had my holiday this year.", chinese: "我不知道。我今年已经度过假了。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "CAROL", speakerClass: "speaker-penny", english: "Where did you go?", chinese: "你去了哪里？",
                grammar: "",
                phrases: []
            },
            {
                speaker: "SAM", speakerClass: "speaker-sam", english: "I stayed at home!", chinese: "我待在家里！",
                grammar: "",
                phrases: []
            }
        ]
    },
    85: {
        title: "Paris in the spring",
        titleCn: "巴黎之春",
        sentences: [
            {
                speaker: "GEORGE", speakerClass: "speaker-sam", english: "Hello, Ken.", chinese: "你好，肯。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "KEN", speakerClass: "speaker-sam", english: "Hello, George.", chinese: "你好，乔治。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "GEORGE", speakerClass: "speaker-sam", english: "Have you just been to the cinema?", chinese: "你刚去过电影院吗？",
                grammar: "",
                phrases: []
            },
            {
                speaker: "KEN", speakerClass: "speaker-sam", english: "Yes, I have.", chinese: "是的，我去了。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "GEORGE", speakerClass: "speaker-sam", english: "What's on?", chinese: "上映什么电影？",
                grammar: "",
                phrases: [{ en: "What's on?", cn: "上映什么？" }]
            },
            {
                speaker: "KEN", speakerClass: "speaker-sam", english: "\"Paris in the Spring\".", chinese: "《巴黎之春》。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "GEORGE", speakerClass: "speaker-sam", english: "Oh, I've already seen it. I saw it on television last year. It's an old film, but it's very good.", chinese: "哦，我已经看过了。去年我在电视上看的。这是部老电影，但很好看。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "KEN", speakerClass: "speaker-sam", english: "Paris is a beautiful city.", chinese: "巴黎是座美丽的城市。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "GEORGE", speakerClass: "speaker-sam", english: "I've never been there. Have you ever been there, Ken?", chinese: "我从没去过那儿。肯，你去过吗？",
                grammar: "",
                phrases: []
            },
            {
                speaker: "KEN", speakerClass: "speaker-sam", english: "Yes, I have. I was there in April.", chinese: "是的，我去过。我四月份在那儿。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "GEORGE", speakerClass: "speaker-sam", english: "Paris in the spring, eh?", chinese: "巴黎的春天，是吗？",
                grammar: "",
                phrases: []
            },
            {
                speaker: "KEN", speakerClass: "speaker-sam", english: "It was spring, but the weather was awful. It rained all the time.", chinese: "是春天，但天气糟透了。一直在下雨。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "GEORGE", speakerClass: "speaker-sam", english: "Just like London!", chinese: "就像伦敦一样！",
                grammar: "",
                phrases: []
            }
        ]
    },
    87: {
        title: "A car crash",
        titleCn: "车祸",
        sentences: [
            {
                speaker: "MR WOOD", speakerClass: "speaker-sam", english: "Is my car ready yet?", chinese: "我的车修好了吗？",
                grammar: "",
                phrases: []
            },
            {
                speaker: "ATTENDANT", speakerClass: "speaker-penny", english: "I don't know, sir. What's the licence number of your car?", chinese: "我不知道，先生。您的车牌号是多少？",
                grammar: "",
                phrases: [{ en: "licence number", cn: "牌照号码" }]
            },
            {
                speaker: "MR WOOD", speakerClass: "speaker-sam", english: "It's LFZ 312 G.", chinese: "是LFZ 312 G。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "ATTENDANT", speakerClass: "speaker-penny", english: "When did you bring it to us?", chinese: "您什么时候把它送来的？",
                grammar: "",
                phrases: []
            },
            {
                speaker: "MR WOOD", speakerClass: "speaker-sam", english: "I brought it here three days ago.", chinese: "我三天前把它送来的。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "ATTENDANT", speakerClass: "speaker-penny", english: "Ah yes, I remember now.", chinese: "啊，是的，我现在想起来了。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "MR WOOD", speakerClass: "speaker-sam", english: "Have your mechanics finished yet?", chinese: "你们的技工修完了吗？",
                grammar: "",
                phrases: []
            },
            {
                speaker: "ATTENDANT", speakerClass: "speaker-penny", english: "No, they're still working on it. Let's go into the garage and have a look at it.", chinese: "没有，他们还在修。我们去车库看看吧。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "ATTENDANT", speakerClass: "speaker-penny", english: "Isn't that your car?", chinese: "那不是您的车吗？",
                grammar: "",
                phrases: []
            },
            {
                speaker: "MR WOOD", speakerClass: "speaker-sam", english: "Well, it was my car.", chinese: "嗯，那曾经是我的车。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "ATTENDANT", speakerClass: "speaker-penny", english: "Didn't you have a crash?", chinese: "您不是出了车祸吗？",
                grammar: "",
                phrases: []
            },
            {
                speaker: "MR WOOD", speakerClass: "speaker-sam", english: "That's right. I drove it into a lamp post. Can your mechanics repair it?", chinese: "没错。我把它撞到灯柱上了。你们的技工能修好它吗？",
                grammar: "",
                phrases: [{ en: "lamp post", cn: "灯柱" }]
            },
            {
                speaker: "ATTENDANT", speakerClass: "speaker-penny", english: "Well, they're trying to repair it, sir. But to tell you the truth, you need a new car.", chinese: "嗯，他们正在设法修它，先生。但说实话，您需要一辆新车。",
                grammar: "",
                phrases: [{ en: "to tell you the truth", cn: "老实说" }]
            }
        ]
    },
    89: {
        title: "For sale",
        titleCn: "待售",
        sentences: [
            {
                speaker: "MR HILL", speakerClass: "speaker-sam", english: "Good afternoon. I believe that this house is for sale.", chinese: "下午好。我想这座房子是待售的吧。",
                grammar: "",
                phrases: [{ en: "for sale", cn: "待售" }]
            },
            {
                speaker: "MR WEST", speakerClass: "speaker-sam", english: "That's right.", chinese: "没错。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "MR HILL", speakerClass: "speaker-sam", english: "May I have a look at it, please?", chinese: "我可以看看吗？",
                grammar: "",
                phrases: []
            },
            {
                speaker: "MR WEST", speakerClass: "speaker-sam", english: "Yes, of course. Come in.", chinese: "当然可以。请进。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "MR HILL", speakerClass: "speaker-sam", english: "How long have you lived here?", chinese: "您在这儿住了多长时间？",
                grammar: "",
                phrases: []
            },
            {
                speaker: "MR WEST", speakerClass: "speaker-sam", english: "I have lived here for twenty years.", chinese: "我在这儿住了20年了。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "MR HILL", speakerClass: "speaker-sam", english: "Twenty years! That's a long time.", chinese: "20年！那是很长时间了。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "MR WEST", speakerClass: "speaker-sam", english: "Yes, I have been here since 1976.", chinese: "是的，我从1976年就在这儿了。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "MR HILL", speakerClass: "speaker-sam", english: "Then why do you want to sell it?", chinese: "那您为什么要卖掉它？",
                grammar: "",
                phrases: []
            },
            {
                speaker: "MR WEST", speakerClass: "speaker-sam", english: "Because I have just retired. I want to buy a small house in the country.", chinese: "因为我刚退休。我想在乡下买座小房子。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "MR HILL", speakerClass: "speaker-sam", english: "How much does this house cost?", chinese: "这座房子多少钱？",
                grammar: "",
                phrases: []
            },
            {
                speaker: "MR WEST", speakerClass: "speaker-sam", english: "£68,500.", chinese: "68,500英镑。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "MR HILL", speakerClass: "speaker-sam", english: "That's a lot of money!", chinese: "那是一大笔钱！",
                grammar: "",
                phrases: []
            },
            {
                speaker: "MR WEST", speakerClass: "speaker-sam", english: "It's worth every penny of it.", chinese: "它值这个价。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "MR HILL", speakerClass: "speaker-sam", english: "Well, I like the house, but I can't decide yet. My wife must see it first.", chinese: "嗯，我喜欢这房子，但我还不能决定。我妻子必须先来看看。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "MR WEST", speakerClass: "speaker-sam", english: "Women always have the last word.", chinese: "女人总是有最后的决定权。",
                grammar: "",
                phrases: [{ en: "have the last word", cn: "有最后的决定权" }]
            }
        ]
    },
    91: {
        title: "Poor Ian!",
        titleCn: "可怜的伊恩！",
        sentences: [
            {
                speaker: "CATHERINE", speakerClass: "speaker-penny", english: "Has Ian sold his house yet?", chinese: "伊恩把他的房子卖掉了吗？",
                grammar: "",
                phrases: []
            },
            {
                speaker: "JENNY", speakerClass: "speaker-penny", english: "Yes, he has. He sold it last week.", chinese: "是的，卖了。他上周卖的。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "CATHERINE", speakerClass: "speaker-penny", english: "Has he moved to his new house yet?", chinese: "他搬到新房子了吗？",
                grammar: "",
                phrases: []
            },
            {
                speaker: "JENNY", speakerClass: "speaker-penny", english: "No, not yet. He's still here. He's going to move tomorrow.", chinese: "还没。他还在这儿。他打算明天搬。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "CATHERINE", speakerClass: "speaker-penny", english: "When? Tomorrow morning?", chinese: "什么时候？明天上午？",
                grammar: "",
                phrases: []
            },
            {
                speaker: "JENNY", speakerClass: "speaker-penny", english: "No. Tomorrow afternoon. I'll miss him. He has always been a good neighbour.", chinese: "不，明天下午。我会想念他的。他一直是个好邻居。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "LINDA", speakerClass: "speaker-penny", english: "He's a very nice person. We'll all miss him.", chinese: "他是个很好的人。我们都会想念他的。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "CATHERINE", speakerClass: "speaker-penny", english: "When will the new people move into this house?", chinese: "新住户什么时候搬进这所房子？",
                grammar: "",
                phrases: [{ en: "move into", cn: "搬入" }]
            },
            {
                speaker: "JENNY", speakerClass: "speaker-penny", english: "I think that they'll move in the day after tomorrow.", chinese: "我想他们后天会搬进来。",
                grammar: "",
                phrases: [{ en: "the day after tomorrow", cn: "后天" }]
            },
            {
                speaker: "LINDA", speakerClass: "speaker-penny", english: "Will you see Ian today, Jenny?", chinese: "珍妮，你今天会见到伊恩吗？",
                grammar: "",
                phrases: []
            },
            {
                speaker: "JENNY", speakerClass: "speaker-penny", english: "Yes, I will.", chinese: "是的，我会见到他。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "LINDA", speakerClass: "speaker-penny", english: "Please give him my regards.", chinese: "请代我向他问好。",
                grammar: "",
                phrases: [{ en: "give one's regards", cn: "代某人问好" }]
            },
            {
                speaker: "CATHERINE", speakerClass: "speaker-penny", english: "Poor Ian! He didn't want to leave this house.", chinese: "可怜的伊恩！他不想离开这所房子。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "JENNY", speakerClass: "speaker-penny", english: "No, he didn't want to leave, but his wife did!", chinese: "是的，他不想离开，但他妻子想！",
                grammar: "",
                phrases: []
            }
        ]
    },
    93: {
        title: "Our new neighbour",
        titleCn: "我们的新邻居",
        sentences: [
            {
                speaker: "Narrator", speakerClass: "speaker-sam", english: "Nigel is our new next-door neighbour. He's a pilot.", chinese: "奈杰尔是我们新搬来的隔壁邻居。他是个飞行员。",
                grammar: "",
                phrases: [{ en: "next-door neighbour", cn: "隔壁邻居" }]
            },
            {
                speaker: "Narrator", speakerClass: "speaker-sam", english: "He was in the R.A.F.", chinese: "他曾在皇家空军任职。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "Narrator", speakerClass: "speaker-sam", english: "He will fly to New York next month.", chinese: "下个月他将飞往纽约。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "Narrator", speakerClass: "speaker-sam", english: "The month after next he'll fly to Tokyo.", chinese: "再下个月他将飞往东京。",
                grammar: "",
                phrases: [{ en: "the month after next", cn: "再下个月" }]
            },
            {
                speaker: "Narrator", speakerClass: "speaker-sam", english: "At the moment, he's in Madrid.", chinese: "现在他在马德里。",
                grammar: "",
                phrases: [{ en: "at the moment", cn: "此刻、现在" }]
            },
            {
                speaker: "Narrator", speakerClass: "speaker-sam", english: "He flew to Spain a week ago.", chinese: "他是一星期以前飞到西班牙的。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "Narrator", speakerClass: "speaker-sam", english: "He'll return to London the week after next.", chinese: "再下个星期他将返回伦敦。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "Narrator", speakerClass: "speaker-sam", english: "He's only forty-one years old, and he has already been to nearly every country in the world.", chinese: "他只有41岁，但他却去过世界上几乎每一个国家。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "Narrator", speakerClass: "speaker-sam", english: "Nigel is a very lucky man. But his wife isn't very lucky.", chinese: "奈杰尔是个很幸运的人。但他的妻子运气不太好。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "Narrator", speakerClass: "speaker-sam", english: "She usually stays at home!", chinese: "她总是待在家里！",
                grammar: "",
                phrases: []
            }
        ]
    },
    95: {
        title: "Tickets, please.",
        titleCn: "请出示车票。",
        sentences: [
            {
                speaker: "GEORGE", speakerClass: "speaker-sam", english: "Two return tickets to London, please. What time will the next train leave?", chinese: "请买两张去伦敦的往返票。下一班火车什么时候开？",
                grammar: "",
                phrases: [{ en: "return ticket", cn: "往返票" }]
            },
            {
                speaker: "ATTENDANT", speakerClass: "speaker-penny", english: "At nineteen minutes past eight.", chinese: "8点19分。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "GEORGE", speakerClass: "speaker-sam", english: "Which platform?", chinese: "在哪个站台？",
                grammar: "",
                phrases: []
            },
            {
                speaker: "ATTENDANT", speakerClass: "speaker-penny", english: "Platform Two. Over the bridge.", chinese: "2号站台。过桥就到。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "KEN", speakerClass: "speaker-sam", english: "What time will the next train leave?", chinese: "下一班火车什么时候开？",
                grammar: "",
                phrases: []
            },
            {
                speaker: "GEORGE", speakerClass: "speaker-sam", english: "At eight nineteen.", chinese: "8点19分。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "KEN", speakerClass: "speaker-sam", english: "We've got plenty of time.", chinese: "我们时间很充裕。",
                grammar: "",
                phrases: [{ en: "plenty of", cn: "充足的、大量的" }]
            },
            {
                speaker: "GEORGE", speakerClass: "speaker-sam", english: "It's only three minutes to eight.", chinese: "现在才7点57分。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "KEN", speakerClass: "speaker-sam", english: "Let's go and have a drink. There's a bar next door to the station.", chinese: "我们去喝一杯吧。车站隔壁有个酒吧。",
                grammar: "",
                phrases: [{ en: "next door to", cn: "隔壁" }]
            },
            {
                speaker: "GEORGE", speakerClass: "speaker-sam", english: "We had better go back to the station now, Ken.", chinese: "肯，我们现在最好回车站吧。",
                grammar: "",
                phrases: [{ en: "had better", cn: "最好" }]
            },
            {
                speaker: "PORTER", speakerClass: "speaker-penny", english: "Tickets, please.", chinese: "请出示车票。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "GEORGE", speakerClass: "speaker-sam", english: "We want to catch the eight nineteen to London.", chinese: "我们要赶8点19分去伦敦的车。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "PORTER", speakerClass: "speaker-penny", english: "You've just missed it!", chinese: "你们刚好错过了！",
                grammar: "",
                phrases: []
            },
            {
                speaker: "GEORGE", speakerClass: "speaker-sam", english: "What! It's only eight fifteen.", chinese: "什么！现在才8点15分。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "PORTER", speakerClass: "speaker-penny", english: "I'm sorry, sir. That clock's ten minutes slow.", chinese: "对不起，先生。那个钟慢了10分钟。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "GEORGE", speakerClass: "speaker-sam", english: "When's the next train?", chinese: "下一班火车是什么时候？",
                grammar: "",
                phrases: []
            },
            {
                speaker: "PORTER", speakerClass: "speaker-penny", english: "In five hours' time!", chinese: "5小时以后！",
                grammar: "",
                phrases: []
            }
        ]
    },
    97: {
        title: "A small blue case",
        titleCn: "一只蓝色的小箱子",
        sentences: [
            {
                speaker: "MR HALL", speakerClass: "speaker-sam", english: "I left a suitcase on the train to London the other day.", chinese: "几天前我把一只手提箱忘在去伦敦的火车上了。",
                grammar: "",
                phrases: [{ en: "the other day", cn: "几天前" }]
            },
            {
                speaker: "ATTENDANT", speakerClass: "speaker-penny", english: "Can you describe it, sir?", chinese: "先生，您能描述一下吗？",
                grammar: "",
                phrases: []
            },
            {
                speaker: "MR HALL", speakerClass: "speaker-sam", english: "It's a small blue case and it's got a zip. There's a label on the handle with my name and address on it.", chinese: "那是一只蓝色的小箱子，上面有一个拉链。把手上有一个标签，上面写着我的姓名和地址。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "ATTENDANT", speakerClass: "speaker-penny", english: "Is this case yours?", chinese: "这个箱子是您的吗？",
                grammar: "",
                phrases: []
            },
            {
                speaker: "MR HALL", speakerClass: "speaker-sam", english: "No, that's not mine.", chinese: "不，那不是我的。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "ATTENDANT", speakerClass: "speaker-penny", english: "What about this one? This one's got a label.", chinese: "这个怎么样？这个上面有标签。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "MR HALL", speakerClass: "speaker-sam", english: "Let me see it.", chinese: "让我看看。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "ATTENDANT", speakerClass: "speaker-penny", english: "What's your name and address?", chinese: "您叫什么名字？住址是什么？",
                grammar: "",
                phrases: []
            },
            {
                speaker: "MR HALL", speakerClass: "speaker-sam", english: "David Hall, 83 Bridge Street.", chinese: "大卫·霍尔，桥街83号。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "ATTENDANT", speakerClass: "speaker-penny", english: "That's right. D.N. Hall, 83 Bridge Street.", chinese: "没错。D.N.霍尔，桥街83号。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "ATTENDANT", speakerClass: "speaker-penny", english: "Three pounds fifty pence, please.", chinese: "请付3英镑50便士。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "MR HALL", speakerClass: "speaker-sam", english: "Here you are.", chinese: "给您。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "ATTENDANT", speakerClass: "speaker-penny", english: "Thank you.", chinese: "谢谢。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "MR HALL", speakerClass: "speaker-sam", english: "Hey!", chinese: "嘿！",
                grammar: "",
                phrases: []
            },
            {
                speaker: "ATTENDANT", speakerClass: "speaker-penny", english: "What's the matter?", chinese: "怎么了？",
                grammar: "",
                phrases: []
            },
            {
                speaker: "MR HALL", speakerClass: "speaker-sam", english: "This case doesn't belong to me! You've given me the wrong case!", chinese: "这箱子不是我的！你给错箱子了！",
                grammar: "",
                phrases: [{ en: "belong to", cn: "属于" }]
            }
        ]
    },
    99: {
        title: "Ow!",
        titleCn: "哎哟！",
        sentences: [
            {
                speaker: "ANDY", speakerClass: "speaker-sam", english: "Ow!", chinese: "哎哟！",
                grammar: "",
                phrases: []
            },
            {
                speaker: "PAT", speakerClass: "speaker-penny", english: "What's the matter, Andy?", chinese: "怎么了，安迪？",
                grammar: "",
                phrases: []
            },
            {
                speaker: "ANDY", speakerClass: "speaker-sam", english: "I slipped and fell downstairs.", chinese: "我滑了一跤，从楼上摔下来了。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "PAT", speakerClass: "speaker-penny", english: "Have you hurt yourself?", chinese: "你摔伤了吗？",
                grammar: "",
                phrases: [{ en: "hurt oneself", cn: "伤到自己" }]
            },
            {
                speaker: "ANDY", speakerClass: "speaker-sam", english: "Yes, I have. I think that I've hurt my back.", chinese: "是的，我觉得伤到了背。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "PAT", speakerClass: "speaker-penny", english: "Try and stand up. Can you stand up? Here. Let me help you.", chinese: "试着站起来。你能站起来吗？来，让我帮你。",
                grammar: "",
                phrases: [{ en: "stand up", cn: "站起来" }]
            },
            {
                speaker: "ANDY", speakerClass: "speaker-sam", english: "I'm sorry, Pat. I'm afraid that I can't get up.", chinese: "对不起，帕特。恐怕我站不起来了。",
                grammar: "",
                phrases: [{ en: "get up", cn: "起来" }]
            },
            {
                speaker: "PAT", speakerClass: "speaker-penny", english: "I think that the doctor had better see you. I'll telephone Dr Carter.", chinese: "我觉得最好让医生来看看你。我去打电话给卡特医生。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "PAT", speakerClass: "speaker-penny", english: "The doctor says that he will come at once. I'm sure that you need an X-ray, Andy.", chinese: "医生说他马上就来。我确信你需要照X光，安迪。",
                grammar: "",
                phrases: [{ en: "at once", cn: "立刻" }]
            }
        ]
    },
    101: {
        title: "A card from Jimmy",
        titleCn: "吉米的明信片",
        sentences: [
            {
                speaker: "GRANDMOTHER", speakerClass: "speaker-penny", english: "Read Jimmy's card to me please, Penny.", chinese: "请把吉米的明信片读给我听，彭妮。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "PENNY", speakerClass: "speaker-penny", english: "\"I have just arrived in Scotland and I'm staying at a Youth Hostel.\"", chinese: "\"我刚到苏格兰，住在一家青年招待所。\"",
                grammar: "",
                phrases: [{ en: "Youth Hostel", cn: "青年招待所" }]
            },
            {
                speaker: "GRANDMOTHER", speakerClass: "speaker-penny", english: "Eh?", chinese: "什么？",
                grammar: "",
                phrases: []
            },
            {
                speaker: "PENNY", speakerClass: "speaker-penny", english: "He says he's just arrived in Scotland. He says he's staying at a Youth Hostel. You know he's a member of the Y.H.A.", chinese: "他说他刚到苏格兰。他说他住在一家青年招待所。你知道他是青年招待所协会的成员。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "GRANDMOTHER", speakerClass: "speaker-penny", english: "The what?", chinese: "什么协会？",
                grammar: "",
                phrases: []
            },
            {
                speaker: "PENNY", speakerClass: "speaker-penny", english: "The Y.H.A., Grandmother. The Youth Hostel's Association.", chinese: "青年招待所协会，奶奶。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "GRANDMOTHER", speakerClass: "speaker-penny", english: "What else does he say?", chinese: "他还说了什么？",
                grammar: "",
                phrases: []
            },
            {
                speaker: "PENNY", speakerClass: "speaker-penny", english: "\"I'll write a letter soon. I hope you are all well.\"", chinese: "\"我很快给你们写信。希望你们都好。\"",
                grammar: "",
                phrases: []
            },
            {
                speaker: "GRANDMOTHER", speakerClass: "speaker-penny", english: "What? Speak up, Penny. I'm afraid I can't hear you.", chinese: "什么？大声点，彭妮。恐怕我听不见你说话。",
                grammar: "",
                phrases: [{ en: "speak up", cn: "大声说" }]
            },
            {
                speaker: "PENNY", speakerClass: "speaker-penny", english: "He says he'll write a letter soon. He hopes we are all well. \"Love, Jimmy.\"", chinese: "他说他很快会写信。他希望我们都好。\"爱你的，吉米。\"",
                grammar: "",
                phrases: []
            },
            {
                speaker: "GRANDMOTHER", speakerClass: "speaker-penny", english: "Is that all? He doesn't say very much, does he?", chinese: "就这些？他说的不多，是吗？",
                grammar: "",
                phrases: []
            },
            {
                speaker: "PENNY", speakerClass: "speaker-penny", english: "He can't write very much on a card, Grandmother.", chinese: "在明信片上写不了太多，奶奶。",
                grammar: "",
                phrases: []
            }
        ]
    },
    103: {
        title: "The French test",
        titleCn: "法语考试",
        sentences: [
            {
                speaker: "GARY", speakerClass: "speaker-sam", english: "How was the exam, Richard?", chinese: "考试怎么样，理查德？",
                grammar: "",
                phrases: []
            },
            {
                speaker: "RICHARD", speakerClass: "speaker-sam", english: "Not too bad. I think I passed in English and Mathematics. The questions were very easy. How about you, Gary?", chinese: "还不错。我想我英语和数学及格了。题目很简单。你呢，加里？",
                grammar: "",
                phrases: []
            },
            {
                speaker: "GARY", speakerClass: "speaker-sam", english: "The English and Maths papers weren't easy enough for me. I hope I haven't failed.", chinese: "英语和数学试卷对我来说不够简单。我希望我没有不及格。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "RICHARD", speakerClass: "speaker-sam", english: "I think I failed the French paper. I could answer sixteen of the questions. They were very easy. But I couldn't answer the rest. They were too difficult for me.", chinese: "我觉得我法语考砸了。我能回答16道题。它们很简单。但剩下的题我答不上来。它们对我来说太难了。",
                grammar: "",
                phrases: [{ en: "the rest", cn: "剩下的" }]
            },
            {
                speaker: "GARY", speakerClass: "speaker-sam", english: "French tests are awful, aren't they?", chinese: "法语考试很可怕，不是吗？",
                grammar: "",
                phrases: []
            },
            {
                speaker: "RICHARD", speakerClass: "speaker-sam", english: "I hate them. I'm sure I've got a low mark.", chinese: "我讨厌它们。我肯定得了低分。",
                grammar: "",
                phrases: []
            }
        ]
    },
    105: {
        title: "Full of mistakes",
        titleCn: "错误百出",
        sentences: [
            {
                speaker: "BOSS", speakerClass: "speaker-sam", english: "Where's Sandra, Bob? I want her.", chinese: "鲍勃，桑德拉在哪儿？我找她。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "BOB", speakerClass: "speaker-sam", english: "Do you want to speak to her?", chinese: "您要和她谈话吗？",
                grammar: "",
                phrases: []
            },
            {
                speaker: "BOSS", speakerClass: "speaker-sam", english: "Yes, I do. I want her to come to my office. Tell her to come at once.", chinese: "是的。我要她到我办公室来。让她马上来。",
                grammar: "",
                phrases: [{ en: "at once", cn: "立刻" }]
            },
            {
                speaker: "SANDRA", speakerClass: "speaker-penny", english: "Did you want to see me?", chinese: "您找我吗？",
                grammar: "",
                phrases: []
            },
            {
                speaker: "BOSS", speakerClass: "speaker-sam", english: "Ah, yes, Sandra. How do you spell 'intelligent'? Can you tell me?", chinese: "啊，是的，桑德拉。'intelligent'怎么拼？你能告诉我吗？",
                grammar: "",
                phrases: []
            },
            {
                speaker: "SANDRA", speakerClass: "speaker-penny", english: "I-N-T-E-L-L-I-G-E-N-T.", chinese: "I-N-T-E-L-L-I-G-E-N-T。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "BOSS", speakerClass: "speaker-sam", english: "That's right. You've typed it with only one 'L'. This letter is full of mistakes.", chinese: "没错。你打字时只打了一个'L'。这封信错误百出。",
                grammar: "",
                phrases: [{ en: "full of", cn: "充满" }]
            },
            {
                speaker: "BOSS", speakerClass: "speaker-sam", english: "I want you to type it again.", chinese: "我要你再打一遍。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "SANDRA", speakerClass: "speaker-penny", english: "Yes, I'll do that.", chinese: "好的，我会的。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "BOSS", speakerClass: "speaker-sam", english: "And here's another letter. Do you want me to check it for you?", chinese: "这还有一封信。要我帮你检查一下吗？",
                grammar: "",
                phrases: []
            },
            {
                speaker: "SANDRA", speakerClass: "speaker-penny", english: "Yes, please.", chinese: "好的，谢谢。",
                grammar: "",
                phrases: []
            }
        ]
    },
    107: {
        title: "It's too small.",
        titleCn: "太小了。",
        sentences: [
            {
                speaker: "ASSISTANT", speakerClass: "speaker-penny", english: "Do you like this dress, madam?", chinese: "女士，您喜欢这件连衣裙吗？",
                grammar: "",
                phrases: []
            },
            {
                speaker: "LADY", speakerClass: "speaker-penny", english: "I like the colour very much. It's a lovely dress, but it's too small for me.", chinese: "我很喜欢这个颜色。这是件漂亮的连衣裙，但对我来说太小了。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "ASSISTANT", speakerClass: "speaker-penny", english: "What about this one? It's a lovely dress. It's very smart. Short skirts are in fashion now. Would you like to try it?", chinese: "这件怎么样？这是件漂亮的连衣裙。很时髦。短裙现在很流行。您想试试吗？",
                grammar: "",
                phrases: [{ en: "in fashion", cn: "流行的" }]
            },
            {
                speaker: "LADY", speakerClass: "speaker-penny", english: "All right.", chinese: "好的。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "LADY", speakerClass: "speaker-penny", english: "I'm afraid this green dress is too small for me as well. It's smaller than the blue one.", chinese: "恐怕这件绿色的连衣裙对我来说也太小了。它比那件蓝色的还要小。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "LADY", speakerClass: "speaker-penny", english: "I don't like the colour either. It doesn't suit me at all. I think the blue dress is prettier.", chinese: "我也不喜欢这个颜色。它一点都不适合我。我觉得蓝色的连衣裙更漂亮。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "LADY", speakerClass: "speaker-penny", english: "Could you show me another blue dress? I want a dress like that one, but it must be my size.", chinese: "您能给我看看另一件蓝色连衣裙吗？我想要一件像那件一样的，但必须是我的尺码。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "ASSISTANT", speakerClass: "speaker-penny", english: "I'm afraid I haven't got a larger dress. This is the largest dress in the shop.", chinese: "恐怕我没有更大的了。这是店里最大的连衣裙了。",
                grammar: "",
                phrases: []
            }
        ]
    },
    109: {
        title: "A good idea",
        titleCn: "好主意",
        sentences: [
            {
                speaker: "BETTY", speakerClass: "speaker-penny", english: "Shall I make some coffee, Jane?", chinese: "简，我来煮点咖啡好吗？",
                grammar: "",
                phrases: []
            },
            {
                speaker: "JANE", speakerClass: "speaker-penny", english: "That's a good idea, Betty.", chinese: "好主意，贝蒂。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "BETTY", speakerClass: "speaker-penny", english: "It's ready. Do you want any milk?", chinese: "煮好了。你要加牛奶吗？",
                grammar: "",
                phrases: []
            },
            {
                speaker: "JANE", speakerClass: "speaker-penny", english: "Just a little, please.", chinese: "请加一点点就好。",
                grammar: "",
                phrases: [{ en: "a little", cn: "一点点" }]
            },
            {
                speaker: "BETTY", speakerClass: "speaker-penny", english: "What about some sugar? Two teaspoonfuls?", chinese: "加点糖吗？两茶匙？",
                grammar: "",
                phrases: []
            },
            {
                speaker: "JANE", speakerClass: "speaker-penny", english: "No, less than that. One and a half teaspoonfuls, please. That's enough for me.", chinese: "不，少一点。请加一茶匙半。对我来说够了。",
                grammar: "",
                phrases: [{ en: "less than", cn: "少于" }]
            },
            {
                speaker: "JANE", speakerClass: "speaker-penny", english: "That was very nice.", chinese: "味道很好。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "BETTY", speakerClass: "speaker-penny", english: "Would you like some more?", chinese: "你还想再来点吗？",
                grammar: "",
                phrases: []
            },
            {
                speaker: "JANE", speakerClass: "speaker-penny", english: "Yes, please.", chinese: "好的，谢谢。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "JANE", speakerClass: "speaker-penny", english: "I'd like a cigarette, too. May I have one?", chinese: "我还想来支烟。可以吗？",
                grammar: "",
                phrases: []
            },
            {
                speaker: "BETTY", speakerClass: "speaker-penny", english: "Of course. I think there are a few in that box.", chinese: "当然可以。我想那个盒子里有几支。",
                grammar: "",
                phrases: [{ en: "a few", cn: "几个" }]
            },
            {
                speaker: "JANE", speakerClass: "speaker-penny", english: "I'm afraid it's empty.", chinese: "恐怕是空的。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "BETTY", speakerClass: "speaker-penny", english: "What a pity!", chinese: "真遗憾！",
                grammar: "",
                phrases: [{ en: "What a pity!", cn: "真遗憾！" }]
            },
            {
                speaker: "JANE", speakerClass: "speaker-penny", english: "It doesn't matter.", chinese: "没关系。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "BETTY", speakerClass: "speaker-penny", english: "Have a biscuit instead. Eat more and smoke less!", chinese: "来块饼干吧。多吃点少抽烟！",
                grammar: "",
                phrases: []
            },
            {
                speaker: "JANE", speakerClass: "speaker-penny", english: "That's very good advice!", chinese: "这是非常好的建议！",
                grammar: "",
                phrases: []
            }
        ]
    },
    111: {
        title: "The most expensive model",
        titleCn: "最昂贵的型号",
        sentences: [
            {
                speaker: "MR FRITH", speakerClass: "speaker-sam", english: "I like this television very much. How much does it cost?", chinese: "我非常喜欢这台电视机。它多少钱？",
                grammar: "",
                phrases: []
            },
            {
                speaker: "ASSISTANT", speakerClass: "speaker-penny", english: "It's the most expensive model in the shop. It costs five hundred pounds.", chinese: "这是店里最贵的型号。500英镑。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "MR FRITH", speakerClass: "speaker-sam", english: "That's too expensive for us. We can't afford all that money.", chinese: "对我们来说太贵了。我们买不起。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "ASSISTANT", speakerClass: "speaker-penny", english: "This model's less expensive than that one. It's only three hundred pounds. But, of course, it's not as good as the expensive one.", chinese: "这个型号比那个便宜。只要300英镑。但是，当然，它不如那个贵的好。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "MR FRITH", speakerClass: "speaker-sam", english: "I don't like this model. The other model's more expensive, but it's worth the money.", chinese: "我不喜欢这个型号。那个型号更贵，但物有所值。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "ASSISTANT", speakerClass: "speaker-penny", english: "Can you pay on instalments?", chinese: "您可以分期付款吗？",
                grammar: "",
                phrases: [{ en: "on instalments", cn: "分期付款" }]
            },
            {
                speaker: "MR FRITH", speakerClass: "speaker-sam", english: "Of course. We can pay a deposit of thirty pounds, and then fourteen pounds a month for three years.", chinese: "当然可以。我们可以先付30英镑定金，然后每月付14英镑，共3年。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "MR FRITH", speakerClass: "speaker-sam", english: "Do you like it, dear?", chinese: "你喜欢吗，亲爱的？",
                grammar: "",
                phrases: []
            },
            {
                speaker: "MRS FRITH", speakerClass: "speaker-penny", english: "I certainly do, but I don't like the price. You always want the best, but we can't afford it. Sometimes you think you're a millionaire!", chinese: "我当然喜欢，但我不喜欢这个价格。你总是想要最好的，但我们买不起。有时候你以为自己是百万富翁！",
                grammar: "",
                phrases: []
            },
            {
                speaker: "MR FRITH", speakerClass: "speaker-sam", english: "Millionaires don't buy things on instalments!", chinese: "百万富翁可不用分期付款买东西！",
                grammar: "",
                phrases: []
            }
        ]
    },
    113: {
        title: "Small change",
        titleCn: "零钱",
        sentences: [
            {
                speaker: "CONDUCTOR", speakerClass: "speaker-sam", english: "Fares, please!", chinese: "请买票！",
                grammar: "",
                phrases: []
            },
            {
                speaker: "MAN", speakerClass: "speaker-sam", english: "Trafalgar Square, please.", chinese: "请买到特拉法加广场的票。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "CONDUCTOR", speakerClass: "speaker-sam", english: "I'm sorry, sir. I can't change a ten-pound note. Haven't you got any small change?", chinese: "对不起，先生。我找不开10英镑的钞票。您没有零钱吗？",
                grammar: "",
                phrases: [{ en: "small change", cn: "零钱" }]
            },
            {
                speaker: "MAN", speakerClass: "speaker-sam", english: "I've got no small change, I'm afraid.", chinese: "恐怕我没有零钱。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "CONDUCTOR", speakerClass: "speaker-sam", english: "I'll ask some of the passengers.", chinese: "我去问问其他乘客。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "CONDUCTOR", speakerClass: "speaker-sam", english: "Have you any small change, sir?", chinese: "先生，您有零钱吗？",
                grammar: "",
                phrases: []
            },
            {
                speaker: "1ST PASSENGER", speakerClass: "speaker-sam", english: "I'm sorry. I've got none.", chinese: "对不起，我没有。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "2ND PASSENGER", speakerClass: "speaker-penny", english: "I haven't got any either.", chinese: "我也没有。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "CONDUCTOR", speakerClass: "speaker-sam", english: "Can you change this ten-pound note, madam?", chinese: "女士，您能找开这张10英镑的钞票吗？",
                grammar: "",
                phrases: []
            },
            {
                speaker: "3RD PASSENGER", speakerClass: "speaker-penny", english: "I'm afraid I can't.", chinese: "恐怕不行。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "4TH PASSENGER", speakerClass: "speaker-penny", english: "Neither can I.", chinese: "我也不行。",
                grammar: "",
                phrases: [{ en: "Neither can I.", cn: "我也不行。" }]
            },
            {
                speaker: "CONDUCTOR", speakerClass: "speaker-sam", english: "I'm very sorry, sir. You must get off the bus. None of the passengers can change this note. They're all millionaires!", chinese: "非常抱歉，先生。您得下车了。没有一位乘客能找开这张钞票。他们都是百万富翁！",
                grammar: "",
                phrases: []
            },
            {
                speaker: "2ND PASSENGER", speakerClass: "speaker-penny", english: "Except us.", chinese: "除了我们俩。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "1ST PASSENGER", speakerClass: "speaker-sam", english: "I've got some small change.", chinese: "我有些零钱。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "2ND PASSENGER", speakerClass: "speaker-penny", english: "So have I.", chinese: "我也有。",
                grammar: "",
                phrases: [{ en: "So have I.", cn: "我也有。" }]
            }
        ]
    },
    115: {
        title: "Knock, knock!",
        titleCn: "敲敲门！",
        sentences: [
            {
                speaker: "JIM", speakerClass: "speaker-sam", english: "Isn't there anyone at home?", chinese: "家里没人吗？",
                grammar: "",
                phrases: []
            },
            {
                speaker: "HELEN", speakerClass: "speaker-penny", english: "I'll knock again, Jim. Everything's very quiet. I'm sure there's no one at home.", chinese: "吉姆，我再敲一次。四周静悄悄的。我肯定没人在家。",
                grammar: "",
                phrases: [{ en: "no one", cn: "没有人" }]
            },
            {
                speaker: "JIM", speakerClass: "speaker-sam", english: "But that's impossible. Carol and Tom invited us to lunch. Look through the window.", chinese: "但这不可能。卡罗尔和汤姆邀请我们吃午餐的。从窗户往里看看。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "HELEN", speakerClass: "speaker-penny", english: "Can you see anything?", chinese: "你能看见什么吗？",
                grammar: "",
                phrases: []
            },
            {
                speaker: "JIM", speakerClass: "speaker-sam", english: "Nothing at all.", chinese: "什么也看不见。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "HELEN", speakerClass: "speaker-penny", english: "Let's try the back door.", chinese: "我们试试后门吧。",
                grammar: "",
                phrases: [{ en: "back door", cn: "后门" }]
            },
            {
                speaker: "JIM", speakerClass: "speaker-sam", english: "Look! The door's open.", chinese: "看！门开着呢。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "HELEN", speakerClass: "speaker-penny", english: "Look at this, Jim! There's a big crowd!", chinese: "吉姆，快看！有一大群人！",
                grammar: "",
                phrases: []
            },
            {
                speaker: "FRIENDS", speakerClass: "speaker-sam", english: "Surprise! Happy birthday!", chinese: "惊喜！生日快乐！",
                grammar: "",
                phrases: []
            }
        ]
    },
    117: {
        title: "Tommy's breakfast",
        titleCn: "汤米的早餐",
        sentences: [
            {
                speaker: "Narrator", speakerClass: "speaker-penny", english: "When my husband was going into the dining room this morning, he dropped some coins on the floor.", chinese: "今天早上，当我丈夫走进餐厅时，他把一些硬币掉在了地上。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "Narrator", speakerClass: "speaker-penny", english: "There were coins everywhere. We looked for them, but we could not find them all.", chinese: "到处都是硬币。我们找了找，但没能全部找到。",
                grammar: "",
                phrases: [{ en: "look for", cn: "寻找" }]
            },
            {
                speaker: "Narrator", speakerClass: "speaker-penny", english: "While we were having breakfast, our little boy, Tommy, found two small coins on the floor.", chinese: "我们吃早餐时，我们的小儿子汤米在地上发现了两枚小硬币。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "Narrator", speakerClass: "speaker-penny", english: "He put them both into his mouth. We both tried to get the coins, but it was too late. Tommy had already swallowed them!", chinese: "他把两枚硬币都放进了嘴里。我们俩都想把硬币拿出来，但为时已晚。汤米已经把它们咽下去了！",
                grammar: "",
                phrases: []
            },
            {
                speaker: "Narrator", speakerClass: "speaker-penny", english: "Later that morning, when I was doing the housework, my husband telephoned me from the office.", chinese: "那天上午晚些时候，当我在做家务时，我丈夫从办公室打电话给我。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "HUSBAND", speakerClass: "speaker-sam", english: "How's Tommy?", chinese: "汤米怎么样了？",
                grammar: "",
                phrases: []
            },
            {
                speaker: "WIFE", speakerClass: "speaker-penny", english: "I don't know. Tommy's been to the lavatory three times this morning, but I haven't had any change yet!", chinese: "我不知道。汤米今天上午已经上了三次厕所了，但我还没得到任何零钱！",
                grammar: "",
                phrases: []
            }
        ]
    },
    119: {
        title: "A true story",
        titleCn: "一个真实的故事",
        sentences: [
            {
                speaker: "Narrator", speakerClass: "speaker-sam", english: "Do you like stories? I want to tell you a true story. It happened to a friend of mine a year ago.", chinese: "你喜欢听故事吗？我想给你讲一个真实的故事。这件事发生在一年前我的一个朋友身上。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "Narrator", speakerClass: "speaker-sam", english: "While my friend, George, was reading in bed, two thieves climbed into his kitchen.", chinese: "当我的朋友乔治在床上看书时，两个小偷爬进了他的厨房。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "Narrator", speakerClass: "speaker-sam", english: "After they had entered the house, they went into the dining room. It was very dark, so they turned on a torch.", chinese: "他们进屋后，走进了餐厅。天很黑，所以他们打开了手电筒。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "Narrator", speakerClass: "speaker-sam", english: "Suddenly, they heard a voice behind them. \"What's up? What's up?\" someone called.", chinese: "突然，他们听到身后有个声音。\"怎么回事？怎么回事？\"有人喊道。",
                grammar: "",
                phrases: [{ en: "What's up?", cn: "怎么回事？" }]
            },
            {
                speaker: "Narrator", speakerClass: "speaker-sam", english: "The thieves dropped the torch and ran away as quickly as they could.", chinese: "小偷们扔下手电筒，拼命逃跑了。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "Narrator", speakerClass: "speaker-sam", english: "George heard the noise and came downstairs quickly. He turned on the light, but he couldn't see anyone. The thieves had already gone.", chinese: "乔治听到响声，迅速下楼。他打开灯，但看不见任何人。小偷们已经逃走了。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "Narrator", speakerClass: "speaker-sam", english: "But George's parrot, Henry, was still there.", chinese: "但乔治的鹦鹉亨利还在那儿。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "HENRY", speakerClass: "speaker-sam", english: "\"What's up, George?\" he called.", chinese: "\"怎么了，乔治？\"它叫道。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "GEORGE", speakerClass: "speaker-sam", english: "\"Nothing, Henry,\" George said and smiled. \"Go back to sleep.\"", chinese: "\"没什么，亨利，\"乔治笑着说。\"回去睡觉吧。\"",
                grammar: "",
                phrases: []
            }
        ]
    },
    121: {
        title: "The man in a hat",
        titleCn: "戴帽子的男士",
        sentences: [
            {
                speaker: "CUSTOMER", speakerClass: "speaker-penny", english: "I bought two expensive dictionaries here half an hour ago, but I forgot to take them with me.", chinese: "半小时前我在这儿买了两本昂贵的词典，但我忘了把它们带走。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "ASSISTANT", speakerClass: "speaker-penny", english: "Who served you, madam?", chinese: "女士，谁为您服务的？",
                grammar: "",
                phrases: []
            },
            {
                speaker: "CUSTOMER", speakerClass: "speaker-penny", english: "The man who is standing behind the counter.", chinese: "站在柜台后面的那位男士。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "ASSISTANT", speakerClass: "speaker-penny", english: "Which man? The one who's wearing a hat?", chinese: "哪位男士？戴帽子的那位吗？",
                grammar: "",
                phrases: []
            },
            {
                speaker: "CUSTOMER", speakerClass: "speaker-penny", english: "Yes. That's the man.", chinese: "是的。就是他。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "ASSISTANT", speakerClass: "speaker-penny", english: "Excuse me. Did you serve this lady half an hour ago? She says she's the lady who bought two expensive dictionaries.", chinese: "打扰一下。您半小时前为这位女士服务过吗？她说她是买了两本昂贵词典的那位女士。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "MAN", speakerClass: "speaker-sam", english: "I can't remember. The woman who bought the dictionaries was tall, wasn't she?", chinese: "我记不清了。买词典的那位女士个子很高，不是吗？",
                grammar: "",
                phrases: []
            },
            {
                speaker: "CUSTOMER", speakerClass: "speaker-penny", english: "I'm not very tall!", chinese: "我个子不高！",
                grammar: "",
                phrases: []
            },
            {
                speaker: "MAN", speakerClass: "speaker-sam", english: "The girl who came with her paid for the dictionaries.", chinese: "和她一起来的那个女孩付了词典的钱。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "CUSTOMER", speakerClass: "speaker-penny", english: "I was alone. I paid for the dictionaries myself. No one was with me!", chinese: "我是一个人来的。词典是我自己付的钱。没有人和我在一起！",
                grammar: "",
                phrases: []
            },
            {
                speaker: "MAN", speakerClass: "speaker-sam", english: "Are these your dictionaries? Here they are.", chinese: "这些是您的词典吗？给您。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "CUSTOMER", speakerClass: "speaker-penny", english: "Thank you. What a rude man!", chinese: "谢谢。这人真粗鲁！",
                grammar: "",
                phrases: []
            }
        ]
    },
    123: {
        title: "A trip to Australia",
        titleCn: "澳大利亚之行",
        sentences: [
            {
                speaker: "MIKE", speakerClass: "speaker-sam", english: "Look, Scott. This is a photograph I took during my trip to Australia.", chinese: "看，斯科特。这是我去澳大利亚旅行时拍的一张照片。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "SCOTT", speakerClass: "speaker-sam", english: "Let me see it, Mike. This is a good photograph. Who are these people?", chinese: "让我看看，迈克。这是张好照片。这些人是谁？",
                grammar: "",
                phrases: []
            },
            {
                speaker: "MIKE", speakerClass: "speaker-sam", english: "They're people I met during the trip.", chinese: "他们是我旅行中认识的人。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "MIKE", speakerClass: "speaker-sam", english: "That's the ship we travelled on.", chinese: "那是我们乘坐的船。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "SCOTT", speakerClass: "speaker-sam", english: "What a beautiful ship!", chinese: "多漂亮的船啊！",
                grammar: "",
                phrases: []
            },
            {
                speaker: "SCOTT", speakerClass: "speaker-sam", english: "Who's this?", chinese: "这是谁？",
                grammar: "",
                phrases: []
            },
            {
                speaker: "MIKE", speakerClass: "speaker-sam", english: "That's the man I told you about. Remember?", chinese: "他就是我跟你说过的那个人。记得吗？",
                grammar: "",
                phrases: []
            },
            {
                speaker: "SCOTT", speakerClass: "speaker-sam", english: "Ah yes. The one who offered you a job in Australia.", chinese: "啊，对了。是那个在澳大利亚给你提供工作的人。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "MIKE", speakerClass: "speaker-sam", english: "That's right.", chinese: "没错。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "SCOTT", speakerClass: "speaker-sam", english: "Who's this?", chinese: "这是谁？",
                grammar: "",
                phrases: []
            },
            {
                speaker: "MIKE", speakerClass: "speaker-sam", english: "Guess!", chinese: "你猜！",
                grammar: "",
                phrases: []
            },
            {
                speaker: "SCOTT", speakerClass: "speaker-sam", english: "It's not you, is it?", chinese: "不是你吧？",
                grammar: "",
                phrases: []
            },
            {
                speaker: "MIKE", speakerClass: "speaker-sam", english: "That's right. I grew a beard during the trip, but I shaved it off when I came home.", chinese: "没错，就是我。旅行中我留了胡子，但回家后就刮掉了。",
                grammar: "",
                phrases: [{ en: "shave off", cn: "剃掉" }]
            },
            {
                speaker: "SCOTT", speakerClass: "speaker-sam", english: "Why did you shave it off?", chinese: "你为什么把它剃掉了？",
                grammar: "",
                phrases: []
            },
            {
                speaker: "MIKE", speakerClass: "speaker-sam", english: "My wife didn't like it!", chinese: "我妻子不喜欢！",
                grammar: "",
                phrases: []
            }
        ]
    },
    125: {
        title: "Tea for two",
        titleCn: "两人一杯茶",
        sentences: [
            {
                speaker: "SUSAN", speakerClass: "speaker-penny", english: "Can't you come in and have tea now, Peter?", chinese: "彼得，你现在不能进来喝茶吗？",
                grammar: "",
                phrases: []
            },
            {
                speaker: "PETER", speakerClass: "speaker-sam", english: "Not yet. I must water the garden first.", chinese: "还不行。我必须先给花园浇水。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "SUSAN", speakerClass: "speaker-penny", english: "Do you have to water it now?", chinese: "你非得现在浇吗？",
                grammar: "",
                phrases: [{ en: "have to", cn: "必须" }]
            },
            {
                speaker: "PETER", speakerClass: "speaker-sam", english: "I'm afraid I must. Look at it! It's terribly dry.", chinese: "恐怕必须得浇。你看！它太干了。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "SUSAN", speakerClass: "speaker-penny", english: "What a nuisance!", chinese: "真讨厌！",
                grammar: "",
                phrases: []
            },
            {
                speaker: "PETER", speakerClass: "speaker-sam", english: "Last summer it was very dry, too. Don't you remember? I had to water it every day.", chinese: "去年夏天也很干。你不记得了吗？我每天都得浇水。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "SUSAN", speakerClass: "speaker-penny", english: "Well, I'll have tea by myself.", chinese: "好吧，我自己喝茶了。",
                grammar: "",
                phrases: [{ en: "by myself", cn: "独自" }]
            },
            {
                speaker: "PETER", speakerClass: "speaker-sam", english: "That was quick! Have you already had your tea?", chinese: "真快！你已经喝完茶了吗？",
                grammar: "",
                phrases: []
            },
            {
                speaker: "SUSAN", speakerClass: "speaker-penny", english: "Yes, I have. Can I have tea in the garden?", chinese: "是的，喝完了。我可以在花园里喝茶吗？",
                grammar: "",
                phrases: []
            },
            {
                speaker: "PETER", speakerClass: "speaker-sam", english: "Of course you can. Bring a tray out here, will you?", chinese: "当然可以。把托盘端出来，好吗？",
                grammar: "",
                phrases: []
            },
            {
                speaker: "SUSAN", speakerClass: "speaker-penny", english: "There you are.", chinese: "给你。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "PETER", speakerClass: "speaker-sam", english: "Thanks. Do you want to have a cup of tea with me?", chinese: "谢谢。你想和我一起喝杯茶吗？",
                grammar: "",
                phrases: []
            },
            {
                speaker: "SUSAN", speakerClass: "speaker-penny", english: "I'd love to, but I can't. I must go now. My sister will be expecting me.", chinese: "我很想，但我不能。我现在必须走了。我姐姐在等我。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "PETER", speakerClass: "speaker-sam", english: "Goodbye. Drop in again sometime.", chinese: "再见。有空再来坐坐。",
                grammar: "",
                phrases: [{ en: "drop in", cn: "顺便拜访" }]
            },
            {
                speaker: "SUSAN", speakerClass: "speaker-penny", english: "I will.", chinese: "我会的。",
                grammar: "",
                phrases: []
            }
        ]
    },
    127: {
        title: "A famous actress",
        titleCn: "一位著名的女演员",
        sentences: [
            {
                speaker: "KATE", speakerClass: "speaker-penny", english: "Can you recognize that woman, Liz?", chinese: "莉兹，你能认出那个女人吗？",
                grammar: "",
                phrases: []
            },
            {
                speaker: "LIZ", speakerClass: "speaker-penny", english: "I think I can. It must be Karen Marsh, the actress.", chinese: "我想我能。那一定是女演员凯伦·马什。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "KATE", speakerClass: "speaker-penny", english: "I thought so. Who's that beside her?", chinese: "我也这么想。她旁边那个人是谁？",
                grammar: "",
                phrases: []
            },
            {
                speaker: "LIZ", speakerClass: "speaker-penny", english: "That must be Conrad Reeves.", chinese: "那一定是康拉德·里夫斯。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "KATE", speakerClass: "speaker-penny", english: "Conrad Reeves, the actor? It can't be. Let me have another look. I think you're right! Isn't he gorgeous!", chinese: "演员康拉德·里夫斯？不可能。让我再看看。我想你是对的！他真帅啊！",
                grammar: "",
                phrases: []
            },
            {
                speaker: "KATE", speakerClass: "speaker-penny", english: "Look, they're coming this way.", chinese: "看，他们朝这边走来了。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "LIZ", speakerClass: "speaker-penny", english: "They're going into that shop.", chinese: "他们走进那家商店了。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "KATE", speakerClass: "speaker-penny", english: "Let's follow them.", chinese: "我们跟着他们吧。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "LIZ", speakerClass: "speaker-penny", english: "Look! She left her handbag on the counter.", chinese: "看！她把手提包忘在柜台上了。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "KATE", speakerClass: "speaker-penny", english: "You're right. I'll give it to her.", chinese: "你说得对。我去给她。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "KAREN", speakerClass: "speaker-penny", english: "Oh, thank you so much!", chinese: "哦，太感谢你了！",
                grammar: "",
                phrases: []
            },
            {
                speaker: "LIZ", speakerClass: "speaker-penny", english: "Wasn't she nice? She gave me her autograph!", chinese: "她真好，是不是？她给了我她的签名！",
                grammar: "",
                phrases: []
            }
        ]
    },
    129: {
        title: "Seventy miles an hour",
        titleCn: "时速70英里",
        sentences: [
            {
                speaker: "POLICEMAN", speakerClass: "speaker-sam", english: "Excuse me, sir. Where do you think you were going?", chinese: "对不起，先生。您认为您刚才要往哪儿开？",
                grammar: "",
                phrases: [{ en: "Excuse me", cn: "劳驾，打扰一下" }, { en: "Where do you think...?", cn: "你认为...在哪里？" }]
            },
            {
                speaker: "DRIVER", speakerClass: "speaker-sam", english: "I was going to London.", chinese: "我刚才要去伦敦。",
                grammar: "",
                phrases: [{ en: "be going to", cn: "打算，要去" }]
            },
            {
                speaker: "POLICEMAN", speakerClass: "speaker-sam", english: "I see. You were in a great hurry, weren't you, sir?", chinese: "我明白了。先生，您很着急，是吗？",
                grammar: "",
                phrases: [{ en: "in a hurry", cn: "匆忙" }]
            },
            {
                speaker: "DRIVER", speakerClass: "speaker-sam", english: "No, I was not. I always drive carefully.", chinese: "不，我没有。我开车一向小心。",
                grammar: "",
                phrases: [{ en: "drive carefully", cn: "小心驾驶" }]
            },
            {
                speaker: "POLICEMAN", speakerClass: "speaker-sam", english: "You were doing seventy miles an hour.", chinese: "您刚才的车速是每小时70英里。",
                grammar: "",
                phrases: [{ en: "miles an hour", cn: "英里每小时" }, { en: "do + 速度", cn: "（车速）达到..." }]
            },
            {
                speaker: "DRIVER", speakerClass: "speaker-sam", english: "Seventy? I wasn't doing seventy.", chinese: "70英里？我没有开到70英里。",
                grammar: "",
                phrases: [{ en: "I wasn't doing...", cn: "我没有开到..." }]
            },
            {
                speaker: "POLICEMAN", speakerClass: "speaker-sam", english: "Look at this book. A policeman always tells the truth.", chinese: "看这本记录本。警察总是说实话的。",
                grammar: "",
                phrases: [{ en: "Look at", cn: "看" }, { en: "tell the truth", cn: "说实话" }]
            },
            {
                speaker: "DRIVER", speakerClass: "speaker-sam", english: "I was only doing eighty!", chinese: "我只开了80英里！",
                grammar: "",
                phrases: []
            }
        ]
    },
    131: {
        title: "Don't be so sure!",
        titleCn: "别那么肯定！",
        sentences: [
            {
                speaker: "MARTIN", speakerClass: "speaker-sam", english: "Where's Sally, Jack?", chinese: "杰克，萨莉在哪儿？",
                grammar: "",
                phrases: []
            },
            {
                speaker: "JACK", speakerClass: "speaker-sam", english: "She's in the garden, Martin.", chinese: "她在花园里，马丁。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "MARTIN", speakerClass: "speaker-sam", english: "What's she doing?", chinese: "她在干什么？",
                grammar: "",
                phrases: []
            },
            {
                speaker: "JACK", speakerClass: "speaker-sam", english: "I think she's working in the garden. She may be picking flowers.", chinese: "我想她在花园里干活。她可能在摘花。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "MARTIN", speakerClass: "speaker-sam", english: "Hello, Sally. What are you doing?", chinese: "你好，萨莉。你在干什么？",
                grammar: "",
                phrases: []
            },
            {
                speaker: "SALLY", speakerClass: "speaker-penny", english: "I'm picking some flowers. I'm going to put them in the vase.", chinese: "我在摘花。我打算把它们放进花瓶里。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "MARTIN", speakerClass: "speaker-sam", english: "Which ones are you going to pick? The ones on the tree?", chinese: "你打算摘哪些？树上的那些吗？",
                grammar: "",
                phrases: []
            },
            {
                speaker: "SALLY", speakerClass: "speaker-penny", english: "These. The prettiest ones. I'm going to pick five or six.", chinese: "这些。最漂亮的。我打算摘五六朵。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "MARTIN", speakerClass: "speaker-sam", english: "I can see some vases in the living room. They're full of flowers.", chinese: "我看见客厅里有几个花瓶。花瓶里都是花。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "SALLY", speakerClass: "speaker-penny", english: "Yes, some of them are quite old.", chinese: "是的，有些花已经很旧了。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "MARTIN", speakerClass: "speaker-sam", english: "I love the colour. They must be very old.", chinese: "我喜欢这个颜色。它们一定很旧了。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "SALLY", speakerClass: "speaker-penny", english: "They were bought by my grandmother. They were made in 1900.", chinese: "它们是我奶奶买的。是1900年制作的。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "MARTIN", speakerClass: "speaker-sam", english: "They must be worth a lot of money.", chinese: "它们一定很值钱。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "SALLY", speakerClass: "speaker-penny", english: "They may be worth a lot of money, but I don't want to sell them.", chinese: "它们可能很值钱，但我不想卖。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "JACK", speakerClass: "speaker-sam", english: "Listen, Martin! That must be the postman. Go and see if there's any mail.", chinese: "听，马丁！那一定是邮递员。去看看有没有邮件。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "MARTIN", speakerClass: "speaker-sam", english: "It can't be the postman. It's only seven o'clock. It must be the milkman.", chinese: "不可能是邮递员。才7点钟。一定是送牛奶的。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "JACK", speakerClass: "speaker-sam", english: "Don't be so sure! Go and look out of the window.", chinese: "别那么肯定！去窗户那儿看看。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "MARTIN", speakerClass: "speaker-sam", english: "I can see a woman. It's our neighbour, Mrs. Williams!", chinese: "我看见一个女人。是我们的邻居威廉姆斯太太！",
                grammar: "",
                phrases: []
            }
        ]
    },
    133: {
        title: "Sensational news!",
        titleCn: "爆炸性新闻！",
        sentences: [
            {
                speaker: "REPORTER", speakerClass: "speaker-sam", english: "Have you just made a new film, Miss Marsh?", chinese: "马什小姐，你刚拍了一部新电影吗？",
                grammar: "",
                phrases: []
            },
            {
                speaker: "MISS MARSH", speakerClass: "speaker-penny", english: "Yes, I have.", chinese: "是的，我刚拍完。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "REPORTER", speakerClass: "speaker-sam", english: "Are you going to make another?", chinese: "你打算再拍一部吗？",
                grammar: "",
                phrases: []
            },
            {
                speaker: "MISS MARSH", speakerClass: "speaker-penny", english: "No, I'm not. I'm going to retire. I feel very tired. I don't want to make another film for a long time.", chinese: "不，我不打算了。我打算退休。我觉得很累。我很长时间内不想再拍电影了。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "KATE", speakerClass: "speaker-penny", english: "Let's buy a newspaper, Liz. Listen to this!", chinese: "莉兹，我们买份报纸吧。听听这个！",
                grammar: "",
                phrases: []
            },
            {
                speaker: "LIZ", speakerClass: "speaker-penny", english: "\"Karen Marsh: Sensational News! By our reporter, Alan Jones.\"", chinese: "\"凯伦·马什：爆炸性新闻！本报记者艾伦·琼斯报道。\"",
                grammar: "",
                phrases: []
            },
            {
                speaker: "LIZ", speakerClass: "speaker-penny", english: "\"Karen Marsh arrived at London Airport today. She was wearing a blue dress and a mink coat.\"", chinese: "\"凯伦·马什今天抵达伦敦机场。她穿着一件蓝色连衣裙和一件貂皮大衣。\"",
                grammar: "",
                phrases: [{ en: "mink coat", cn: "貂皮大衣" }]
            },
            {
                speaker: "LIZ", speakerClass: "speaker-penny", english: "\"She told me she had just made a new film. She said she was not going to make another.\"", chinese: "\"她告诉我她刚拍完一部新电影。她说她不打算再拍另一部了。\"",
                grammar: "",
                phrases: []
            },
            {
                speaker: "LIZ", speakerClass: "speaker-penny", english: "\"She said she was going to retire. She told reporters she felt very tired and didn't want to make another film for a long time.\"", chinese: "\"她说她打算退休。她告诉记者们她感到非常疲倦，很长时间内不想再拍电影了。\"",
                grammar: "",
                phrases: []
            },
            {
                speaker: "KATE", speakerClass: "speaker-penny", english: "I wonder why!", chinese: "我想知道为什么！",
                grammar: "",
                phrases: [{ en: "I wonder", cn: "我想知道" }]
            }
        ]
    },
    135: {
        title: "The latest report",
        titleCn: "最新消息",
        sentences: [
            {
                speaker: "REPORTER", speakerClass: "speaker-sam", english: "Are you really going to retire, Miss Marsh?", chinese: "马什小姐，你真的要退休吗？",
                grammar: "",
                phrases: []
            },
            {
                speaker: "MISS MARSH", speakerClass: "speaker-penny", english: "I may. I can't make up my mind. I will have to ask my future husband. He won't let me make another film.", chinese: "可能吧。我拿不定主意。我得问问我的未婚夫。他不会让我再拍电影了。",
                grammar: "",
                phrases: [{ en: "make up one's mind", cn: "下定决心" }, { en: "future husband", cn: "未婚夫" }]
            },
            {
                speaker: "REPORTER", speakerClass: "speaker-sam", english: "Your future husband, Miss Marsh?", chinese: "您的未婚夫，马什小姐？",
                grammar: "",
                phrases: []
            },
            {
                speaker: "MISS MARSH", speakerClass: "speaker-penny", english: "Yes. Let me introduce him to you. His name is Carlos. We're going to get married next week.", chinese: "是的。让我把他介绍给你。他的名字叫卡洛斯。我们打算下周结婚。",
                grammar: "",
                phrases: [{ en: "get married", cn: "结婚" }]
            },
            {
                speaker: "KATE", speakerClass: "speaker-penny", english: "Look, Liz! Here's another report about Karen Marsh. Listen:", chinese: "看，莉兹！这是另一篇关于凯伦·马什的报道。听：",
                grammar: "",
                phrases: []
            },
            {
                speaker: "LIZ", speakerClass: "speaker-penny", english: "\"Karen Marsh: The latest. At her London Hotel today Miss Marsh told reporters she might retire.\"", chinese: "\"凯伦·马什：最新消息。马什小姐今天在她伦敦的酒店告诉记者们她可能要退休。\"",
                grammar: "",
                phrases: []
            },
            {
                speaker: "LIZ", speakerClass: "speaker-penny", english: "\"She said she couldn't make up her mind. She said she would have to ask her future husband.\"", chinese: "\"她说她拿不定主意。她说她得问问她的未婚夫。\"",
                grammar: "",
                phrases: []
            },
            {
                speaker: "LIZ", speakerClass: "speaker-penny", english: "\"She said her future husband would not let her make another film. Then she introduced us to Carlos.\"", chinese: "\"她说她的未婚夫不会让她再拍电影了。然后她把卡洛斯介绍给我们。\"",
                grammar: "",
                phrases: []
            },
            {
                speaker: "KATE", speakerClass: "speaker-penny", english: "So now you know! That was sensational news!", chinese: "所以现在你知道了！那真是爆炸性新闻！",
                grammar: "",
                phrases: []
            }
        ]
    },
    137: {
        title: "A pleasant dream",
        titleCn: "美好的梦",
        sentences: [
            {
                speaker: "NARRATOR", speakerClass: "speaker-sam", english: "Are you doing the football pools, Brian?", chinese: "布赖恩，你在填足球彩票吗？",
                grammar: "",
                phrases: [{ en: "football pools", cn: "足球彩票" }]
            },
            {
                speaker: "BRIAN", speakerClass: "speaker-sam", english: "Yes. I've already done them.", chinese: "是的。我已经填好了。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "NARRATOR", speakerClass: "speaker-sam", english: "I always do them, but I've never won a prize.", chinese: "我总是填，但从没中过奖。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "BRIAN", speakerClass: "speaker-sam", english: "What would you do if you won a lot of money?", chinese: "如果你赢了很多钱，你会怎么做？",
                grammar: "",
                phrases: []
            },
            {
                speaker: "NARRATOR", speakerClass: "speaker-sam", english: "If I won a lot of money, I'd buy a big house.", chinese: "如果我赢了很多钱，我会买一栋大房子。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "BRIAN", speakerClass: "speaker-sam", english: "If I won a lot of money, I'd never work again.", chinese: "如果我赢了很多钱，我再也不工作了。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "NARRATOR", speakerClass: "speaker-sam", english: "What else would you do?", chinese: "你还会做什么？",
                grammar: "",
                phrases: []
            },
            {
                speaker: "BRIAN", speakerClass: "speaker-sam", english: "If I won a lot of money, I'd make a trip round the world.", chinese: "如果我赢了很多钱，我会环球旅行。",
                grammar: "",
                phrases: [{ en: "make a trip", cn: "旅行" }]
            },
            {
                speaker: "NARRATOR", speakerClass: "speaker-sam", english: "If you won a lot of money, you could do what you like.", chinese: "如果你赢了很多钱，你可以做任何你喜欢的事。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "BRIAN", speakerClass: "speaker-sam", english: "Yes. But I never win. So it's no use dreaming.", chinese: "是的。但我从没赢过。所以做梦也没用。",
                grammar: "",
                phrases: [{ en: "it's no use", cn: "没有用" }]
            }
        ]
    },
    139: {
        title: "Is that you, John?",
        titleCn: "是你吗，约翰？",
        sentences: [
            {
                speaker: "JOHN", speakerClass: "speaker-sam", english: "Is that you, John?", chinese: "是你吗，约翰？",
                grammar: "",
                phrases: []
            },
            {
                speaker: "JEAN", speakerClass: "speaker-penny", english: "Yes, speaking.", chinese: "是的，我就是。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "JOHN", speakerClass: "speaker-sam", english: "Tell me, Jean, did you phone me last night? The phone rang but there was no answer.", chinese: "琼，告诉我，你昨晚给我打电话了吗？电话响了，但没人接。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "JEAN", speakerClass: "speaker-penny", english: "No, I didn't. I was just about to phone you when you rang.", chinese: "不，我没有。我正要给你打电话，你就打来了。",
                grammar: "",
                phrases: [{ en: "be about to", cn: "正要" }]
            },
            {
                speaker: "JOHN", speakerClass: "speaker-sam", english: "But if you didn't phone me, who did?", chinese: "但如果不是你打的，那是谁打的？",
                grammar: "",
                phrases: []
            },
            {
                speaker: "JEAN", speakerClass: "speaker-penny", english: "Maybe it was my sister. She said she might phone you.", chinese: "可能是我姐姐。她说她可能会给你打电话。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "JOHN", speakerClass: "speaker-sam", english: "But I said hello, and nobody answered.", chinese: "但我说了\"喂\"，没人回答。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "JEAN", speakerClass: "speaker-penny", english: "Maybe somebody dialled the wrong number.", chinese: "也许有人拨错号码了。",
                grammar: "",
                phrases: [{ en: "wrong number", cn: "错号" }]
            },
            {
                speaker: "JOHN", speakerClass: "speaker-sam", english: "I'm sure it was for me. Something told me the phone would ring that night.", chinese: "我肯定那个电话是找我的。冥冥之中我觉得那晚电话会响。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "JEAN", speakerClass: "speaker-penny", english: "If you're really interested, why don't you check with your sister?", chinese: "如果你真的有兴趣，为什么不问问你姐姐？",
                grammar: "",
                phrases: [{ en: "check with", cn: "核实" }]
            },
            {
                speaker: "JOHN", speakerClass: "speaker-sam", english: "I suppose I'll have to.", chinese: "我想我得问问了。",
                grammar: "",
                phrases: []
            }
        ]
    },
    141: {
        title: "Sally's first train ride",
        titleCn: "萨莉的第一次火车之旅",
        sentences: [
            {
                speaker: "Narrator", speakerClass: "speaker-sam", english: "Last week, my four-year-old daughter, Sally, was invited to a children's party.", chinese: "上周，我四岁的女儿萨莉被邀请参加一个儿童聚会。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "Narrator", speakerClass: "speaker-sam", english: "I decided to take her by train.", chinese: "我决定带她坐火车去。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "Narrator", speakerClass: "speaker-sam", english: "Sally was very excited because she had never travelled on a train before.", chinese: "萨莉非常兴奋，因为她以前从未坐过火车。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "Narrator", speakerClass: "speaker-sam", english: "She sat near the window and asked questions about everything she saw.", chinese: "她坐在窗户边，问了她看到的一切问题。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "Narrator", speakerClass: "speaker-sam", english: "Suddenly, a middle-aged lady got on the train and sat opposite Sally.", chinese: "突然，一位中年女士上了火车，坐在萨莉对面。",
                grammar: "",
                phrases: [{ en: "middle-aged", cn: "中年的" }]
            },
            {
                speaker: "LADY", speakerClass: "speaker-penny", english: "Hello, little girl.", chinese: "你好，小女孩。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "Narrator", speakerClass: "speaker-sam", english: "Sally did not answer, but looked at her curiously. The lady was dressed in a blue coat and a large, funny hat.", chinese: "萨莉没有回答，而是好奇地看着她。那位女士穿着一件蓝色大衣，戴着一顶又大又滑稽的帽子。",
                grammar: "",
                phrases: [{ en: "be dressed in", cn: "穿着" }]
            },
            {
                speaker: "Narrator", speakerClass: "speaker-sam", english: "After the train had left the station, the lady opened her handbag and took out her powder compact. She then began to make up her face.", chinese: "火车开出车站后，那位女士打开手提包，拿出了粉盒。然后她开始化妆。",
                grammar: "",
                phrases: [{ en: "powder compact", cn: "粉盒" }, { en: "make up", cn: "化妆" }]
            },
            {
                speaker: "SALLY", speakerClass: "speaker-penny", english: "Why are you doing that?", chinese: "你为什么要那样做？",
                grammar: "",
                phrases: []
            },
            {
                speaker: "LADY", speakerClass: "speaker-penny", english: "To make myself beautiful.", chinese: "为了让自己变漂亮。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "Narrator", speakerClass: "speaker-sam", english: "She put away her compact and smiled kindly.", chinese: "她收起粉盒，和蔼地微笑着。",
                grammar: "",
                phrases: [{ en: "put away", cn: "收起" }]
            },
            {
                speaker: "SALLY", speakerClass: "speaker-penny", english: "But you are still ugly.", chinese: "但是你还是很丑。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "Narrator", speakerClass: "speaker-sam", english: "Sally was amused, but I was very embarrassed!", chinese: "萨莉觉得很好玩，但我非常尴尬！",
                grammar: "",
                phrases: []
            }
        ]
    },
    143: {
        title: "A walk through the woods",
        titleCn: "穿过树林",
        sentences: [
            {
                speaker: "Narrator", speakerClass: "speaker-sam", english: "I live in a very old town which is surrounded by beautiful woods.", chinese: "我住在一个非常古老的小镇，小镇四面环绕着美丽的树林。",
                grammar: "",
                phrases: [{ en: "be surrounded by", cn: "被...环绕" }]
            },
            {
                speaker: "Narrator", speakerClass: "speaker-sam", english: "It is a famous beauty spot.", chinese: "这是一个著名的风景胜地。",
                grammar: "",
                phrases: [{ en: "beauty spot", cn: "风景胜地" }]
            },
            {
                speaker: "Narrator", speakerClass: "speaker-sam", english: "On Sundays, hundreds of people come from the city to see our town and to walk through the woods.", chinese: "每逢星期天，成百上千的人从城里来看我们的小镇，并在树林中漫步。",
                grammar: "",
                phrases: [{ en: "walk through", cn: "穿过" }]
            },
            {
                speaker: "Narrator", speakerClass: "speaker-sam", english: "Visitors have been asked to keep the woods clean and tidy.", chinese: "游客们被要求保持树林的干净整洁。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "Narrator", speakerClass: "speaker-sam", english: "Litter baskets have been placed under the trees, but people still throw litter everywhere.", chinese: "树下放置了垃圾箱，但人们仍然到处乱扔垃圾。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "Narrator", speakerClass: "speaker-sam", english: "Last Wednesday, I went for a walk in the woods.", chinese: "上周三，我去树林里散步。",
                grammar: "",
                phrases: [{ en: "go for a walk", cn: "去散步" }]
            },
            {
                speaker: "Narrator", speakerClass: "speaker-sam", english: "What I saw made me very sad.", chinese: "我看到的景象使我非常难过。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "Narrator", speakerClass: "speaker-sam", english: "I counted seven old cars and three old refrigerators.", chinese: "我数了一下，有七辆旧汽车和三个旧冰箱。",
                grammar: "",
                phrases: []
            },
            {
                speaker: "Narrator", speakerClass: "speaker-sam", english: "The litter baskets were empty and the ground was covered with pieces of paper, cigarette ends, old tyres, empty bottles, and rusty tins.", chinese: "垃圾箱是空的，地上到处是纸片、烟头、旧轮胎、空瓶子和生锈的罐头盒。",
                grammar: "",
                phrases: [{ en: "be covered with", cn: "覆盖着" }]
            },
            {
                speaker: "Narrator", speakerClass: "speaker-sam", english: "Among the rubbish, I found a sign which said, \"Anyone who leaves litter in these woods will be prosecuted!\"", chinese: "在垃圾中间，我发现了一块牌子，上面写着：\"凡在此树林丢弃垃圾者，将被起诉！\"",
                grammar: "",
                phrases: []
            }
        ]
    }
};

// 获取所有可用的课程编号
const availableLessons = Object.keys(lessonsData).map(Number).sort((a, b) => a - b);

