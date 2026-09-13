import { CuratedWordData } from './linguisticDatabase';

/**
 * Hand-curated, linguistically rich educational entries for core English vocabulary.
 * Each entry has:
 * - ipa: Accurate phonetic transcription
 * - pronunciationTip: Tailored phonetic guidance highlighting tricky phonemes
 * - mnemonic: A vivid mental image, association, or relatable context
 * - funFact: Real linguistic insight, distinction, grammar rule, or collocation
 * - example1Tip: Granular grammatical explanation for Example 1
 * - example2: Secondary natural native example + exact Arabic translation + granular grammatical explanation
 */
export const CURATED_WORDS_LIBRARY: Record<string, CuratedWordData> = {
  // === Greetings & Social ===
  hello: {
    ipa: "/həˈloʊ/",
    pronunciationTip: "تُنطق /həˈloʊ/ - ركز على فتح الهاء وتسكين الواو في النهاية.",
    mnemonic: "تخيل أنك تلوح بيدك وتبتسم ابتسامة دافئة عند لقاء شخص جديد وتقول: 'Hello!'.",
    funFact: "أصبحت كلمة 'Hello' شائعة عالمياً بعد اختراع الهاتف كتحية قياسية عند الرد على المكالمات.",
    example1Tip: "تستخدم كتحية أساسية لبدء أي محادثة في أي وقت من اليوم.",
    example2: {
      english: "Say hello to your parents for me.",
      arabic: "سلّم على والديك نيابة عني.",
      tips: "تأتي hello هنا كاسم بمعنى 'تحية' بعد فعل القول say."
    }
  },
  hi: {
    ipa: "/haɪ/",
    pronunciationTip: "تُنطق /haɪ/ - مد صوت الياء المفتوحة بخفة وسرعة.",
    mnemonic: "تخيل رفع يدك عاليًا (High) ملوحًا لصديق مقرب في الشارع وتقول له: 'Hi!'.",
    funFact: "كلمة 'Hi' هي النسخة غير الرسمية والأكثر عفوية بين الأصدقاء مقارنة بـ 'Hello'.",
    example1Tip: "تحية ودية وعفوية تقال للأصدقاء والمعارف المقربين.",
    example2: {
      english: "Hi Sarah, are you ready to go?",
      arabic: "أهلاً سارة، هل أنتِ مستعدة للذهاب؟",
      tips: "نضع فاصلة بعد التحية قبل اسم المنادى مباشرة."
    }
  },
  goodbye: {
    ipa: "/ɡʊdˈbaɪ/",
    pronunciationTip: "تُنطق /ɡʊdˈbaɪ/ - ركز على المقطع الأخير (باي).",
    mnemonic: "تخيل شخصًا يغادر بعد لقاء جميل ويقول: 'Goodbye'.",
    funFact: "كلمة 'Goodbye' أكثر رسمية من 'Bye'، وأصلها التاريخي اختصار لعبارة 'God be with you'.",
    example1Tip: "تستخدم عند المغادرة أو إنهاء المحادثة بشكل لائق.",
    example2: {
      english: "He waved goodbye before boarding the train.",
      arabic: "لوّح مودّعاً قبل صعوده إلى القطار.",
      tips: "يمكن أن تأتي بعد فعل مثل wave للدلالة على التلويح بالوداع."
    }
  },
  evening: {
    ipa: "/ˈiːvnɪŋ/",
    pronunciationTip: "تُنطق /ˈiːvnɪŋ/ - ركز على مد صوت (إي) في البداية.",
    mnemonic: "تخيل غروب الشمس وهدوء بداية المساء وأضواء المنازل وهي تضاء.",
    funFact: "تستخدم في التحية: Good evening، لكنها لا تستخدم عند الوداع (نستخدم Good night للوداع قبل النوم).",
    example1Tip: "تستخدم عند مقابلة شخص في فترة المساء.",
    example2: {
      english: "We walk every evening.",
      arabic: "نتمشى كل مساء.",
      tips: "تشير إلى فترة المساء وتأتي مع every للدلالة على عادة متكررة."
    }
  },
  morning: {
    ipa: "/ˈmɔːrnɪŋ/",
    pronunciationTip: "تُنطق /ˈmɔːrnɪŋ/ - ركز على تفخيم صوت الـ o مع صوت الراء الخفيف.",
    mnemonic: "تخيل شروق الشمس الذهبية ونسيم الصباح المنعش ورائحة القهوة.",
    funFact: "تحية 'Good morning' تستخدم من شروق الشمس حتى الساعة 12:00 ظهراً فقط.",
    example1Tip: "تستخدم كتحية صباحية نشطة لبدء اليوم.",
    example2: {
      english: "I like to exercise in the morning.",
      arabic: "أحب ممارسة التمارين في الصباح.",
      tips: "نستخدم حرف الجر in مع أوقات اليوم (in the morning, in the evening)."
    }
  },
  night: {
    ipa: "/naɪt/",
    pronunciationTip: "تُنطق /naɪt/ - حرفا (gh) صامتان تماماً لا يُنطقان.",
    mnemonic: "تخيل سماء مظلمة هادئة مرصعة بالنجوم وضوء القمر الفضي.",
    funFact: "عبارة 'Good night' تقال فقط عند الوداع في نهاية السهرة أو قبل الخلود إلى النوم.",
    example1Tip: "تأتي مع حرف الجر at لنقول 'at night' خلافاً لـ in the morning.",
    example2: {
      english: "Good night, have sweet dreams.",
      arabic: "تصبح على خير، أحلاماً سعيدة.",
      tips: "تستخدم للتوديع والتمني بنوم هانئ قبل النوم مباشرة."
    }
  },
  please: {
    ipa: "/pliːz/",
    pronunciationTip: "تُنطق /pliːz/ - صوت (ea) يمد كالياء الطويلة، وحرف s ينطق بصوت /z/.",
    mnemonic: "تخيل ابتسامة مهذبة تفتح لك الأبواب وتكسب بها احترام الآخرين عندما تطلب بلطف.",
    funFact: "يمكن وضع 'please' في بداية الطلب أو في نهايته مع وضع فاصلة قبلها: 'Help me, please'.",
    example1Tip: "تستخدم لطلب الأشياء بأدب ولباقة عالية في المطاعم والأماكن العامة.",
    example2: {
      english: "Please sit down and wait a moment.",
      arabic: "تفضل بالجلوس وانتظر لحظة من فضلك.",
      tips: "تأتي في بداية الجملة الأمرية لتجعلها طلباً مهذباً ولطيفاً."
    }
  },
  thanks: {
    ipa: "/θæŋks/",
    pronunciationTip: "تُنطق /θæŋks/ - حرفا (th) ينطقان بصوت الثاء بإخراج طرف اللسان.",
    mnemonic: "تخيل مصافحة صادقة وكلمة امتنان تترك أثراً جميلاً في قلب من ساعدك.",
    funFact: "كلمة 'Thanks' غير رسمية، والنسخة الأكثر أدباً ورسمية هي 'Thank you very much'.",
    example1Tip: "تأتي مع حرف الجر for لتحديد الشيء المشكور عليه (Thanks for your help).",
    example2: {
      english: "Many thanks for the wonderful gift.",
      arabic: "شكراً جزيلاً على الهدية الرائعة.",
      tips: "يمكن أن تسبقها كلمة Many للتعبير عن عميق الشكر والامتنان."
    }
  },
  sorry: {
    ipa: "/ˈsɑːri/",
    pronunciationTip: "تُنطق /ˈsɑːri/ - فتح السين وتسكين الراء المكسورة (سُورِي).",
    mnemonic: "تخيل نظرة اعتذار صادقة تذيب أي سوء تفاهم وتعيد الود بين الطرفين.",
    funFact: "تستخدم Sorry للاعتذار عن خطأ، بينما Excuse me تستخدم لجذب الانتباه قبل مقاطعة شخص.",
    example1Tip: "تأتي متبوعة بـ for واسم أو فعل منتهٍ بـ ing لتوضيح سبب الاعتذار.",
    example2: {
      english: "I am sorry to hear that sad news.",
      arabic: "يحزنني سماع تلك الأخبار المحزنة.",
      tips: "تستخدم sorry هنا للتعبير عن التعاطف والمواساة وليس ارتكاب خطأ."
    }
  },
  welcome: {
    ipa: "/ˈwelkəm/",
    pronunciationTip: "تُنطق /ˈwelkəm/ - مد صوت الـ w مع تخفيف المقطع الأخير.",
    mnemonic: "تخيل فتح باب منزلك واستقبال ضيوفك بترحاب وابتسامة واسعة.",
    funFact: "تستخدم كفعل (Welcome them)، وكاسم (a warm welcome)، وكرد على الشكر (You are welcome).",
    example1Tip: "تأتي مع حرف الجر to للترحيب بالقادمين إلى مكان ما.",
    example2: {
      english: "You are always welcome in our house.",
      arabic: "أنت مرحب بك دائماً في منزلنا.",
      tips: "تأتي بعد أفعال الكينونة (are welcome) كصفة تدل على الترحاب."
    }
  },

  // === Family & People ===
  people: {
    ipa: "/ˈpiːpl/",
    pronunciationTip: "تُنطق /ˈpiːpl/ - ركز على مد صوت (بي) ونطق اللام الخفيفة دون واو زائدة.",
    mnemonic: "تخيل ساحة مدينة نابضة بالحياة مليئة بالناس من كل مكان يتبادلون الأحاديث.",
    funFact: "كلمة People هي جمع لكلمة Person؛ وتأخذ دائمًا فعل الجمع (are / were / have).",
    example1Tip: "استخدام فعل الجمع are لأن كلمة people تدل على الجمع دائماً.",
    example2: {
      english: "Many young people love learning languages.",
      arabic: "الكثير من الشباب والناس يحبون تعلم اللغات.",
      tips: "تأتي صفات مثل young أو friendly قبل people لوصفهم بدقة."
    }
  },
  children: {
    ipa: "/ˈtʃɪldrən/",
    pronunciationTip: "تُنطق /ˈtʃɪldrən/ - الحرفان (ch) ينطقان بصوت (تش)، والكسرة قصيرة في المقطع الأول.",
    mnemonic: "تخيل أطفالاً يمرحون ويلعبون بالكرة في حديقة خضراء وأصوات ضحكاتهم تملأ المكان.",
    funFact: "كلمة Children هي جمع غير منتظم لكلمة Child، فلا نضيف لها s الجمع أبداً.",
    example1Tip: "تأخذ فعل الجمع are لأنها صيغة جمع شاذة لكلمة child.",
    example2: {
      english: "The children are playing happily in the garden.",
      arabic: "الأطفال يلعبون بسعادة في الحديقة.",
      tips: "استخدام زمن المضارع المستمر are playing لوصف نشاط يحدث الآن."
    }
  },
  child: {
    ipa: "/tʃaɪld/",
    pronunciationTip: "تُنطق /tʃaɪld/ - صوت (ch) ينطق (تش) مع مد الياء المفتوحة (آي).",
    mnemonic: "تخيل طفلاً صغيراً يمسك بيد والدته بفضول وفرح وهو يكتشف العالم من حوله.",
    funFact: "صيغة الجمع من child هي children، وتستخدم كلمة kid كمرادف غير رسمي شائع.",
    example1Tip: "اسم مفرد معدود يأخذ أداة a أو the.",
    example2: {
      english: "Every child deserves a good education.",
      arabic: "كل طفل يستحق تعليماً جيداً.",
      tips: "تأتي كلمة every قبل الاسم المفرد child ويتبعها فعل مفرد deserves."
    }
  },
  friend: {
    ipa: "/frend/",
    pronunciationTip: "تُنطق /frend/ - صوت (ie) ينطق بكسرة خفيفة قصيرة، وحرف d ينطق بوضوح.",
    mnemonic: "الصديق المخلص يقف معك حتى النهاية (End)، وكلمة Friend تنتهي بـ (end)!",
    funFact: "تجمع بإضافة s (friends)، والمشتق منها Friendship يعني الصداقة.",
    example1Tip: "تأتي صفة الملكية my قبل الاسم friend لتحديد هوية الصديق.",
    example2: {
      english: "A true friend helps you in difficult times.",
      arabic: "الصديق الحقيقي يساعدك في الأوقات الصعبة.",
      tips: "استخدام أداة النكرة a والصفة true قبل الاسم المفرد."
    }
  },
  family: {
    ipa: "/ˈfæməli/",
    pronunciationTip: "تُنطق /ˈfæməli/ - فتحة على الفاء وتخفيف المقطع الأوسط (فامِلي).",
    mnemonic: "تخيل اجتماع العائلة حول مائدة عشاء دافئة مليئة بالضحك والأحاديث الودية.",
    funFact: "تُعامل كلمة Family كمفرد عندما نقصد العائلة كوحدة واحدة: 'My family is big'.",
    example1Tip: "تأتي مع ضمائر الملكية مثل my / our للدلالة على أفراد الأسرة.",
    example2: {
      english: "Family comes first in my life.",
      arabic: "العائلة تأتي في المقام الأول في حياتي.",
      tips: "استخدام الفعل مع s المفرد (comes) لأن family تعامل كوحدة واحدة."
    }
  },
  father: {
    ipa: "/ˈfɑːðər/",
    pronunciationTip: "تُنطق /ˈfɑːðər/ - حرفا (th) ينطقان بصوت الذال (ذ) بإخراج طرف اللسان.",
    mnemonic: "تخيل أباً حنوناً يوجه أبناءه بحكمة ويدعمهم في خطواتهم الأولى.",
    funFact: "تستخدم الكلمات Dad و Daddy كصيغ محببة وعفوية في الحديث اليومي لكلمة Father.",
    example1Tip: "تأتي مع ضمير الملكية للدلالة على صلة القرابة الأبوية.",
    example2: {
      english: "My father taught me how to drive.",
      arabic: "علّمني والدي كيفية قيادة السيارة.",
      tips: "استخدام صيغة الماضي taught للفعل غير المنتظم teach."
    }
  },
  mother: {
    ipa: "/ˈmʌðər/",
    pronunciationTip: "تُنطق /ˈmʌðər/ - الميم مفتوحة بحركة قصيرة وحرفا (th) ينطقان كالذال (ذ).",
    mnemonic: "تخيل أماً حنونة تحتضن طفلها وتعتني به بحب لا ينتهي.",
    funFact: "تستخدم Mom و Mummy كبدائل يومية محببة لكلمة Mother.",
    example1Tip: "استخدام أداة التعريف أو صفة الملكية قبل الاسم.",
    example2: {
      english: "She takes care of her mother with great love.",
      arabic: "إنها تعتني بوالدتها بحب كبير.",
      tips: "تأتي مع التعبير الاصطلاحي take care of بمعنى يعتني بـ."
    }
  },
  brother: {
    ipa: "/ˈbrʌðər/",
    pronunciationTip: "تُنطق /ˈbrʌðər/ - حرفا (th) ينطقان بصوت الذال (ذ).",
    mnemonic: "تخيل أخاك يساندك في تحقيق هدفك كأفضل شريك ومساند لك في الحياة.",
    funFact: "يُقال 'older brother' للأخ الأكبر و'younger brother' للأخ الأصغر.",
    example1Tip: "اسم مفرد معدود يُجمع بإضافة s ليصبح brothers.",
    example2: {
      english: "My older brother works as an engineer.",
      arabic: "أخي الأكبر يعمل كمهندس.",
      tips: "استخدام الصفة older قبل الاسم brother للدلالة على السن."
    }
  },
  sister: {
    ipa: "/ˈsɪstər/",
    pronunciationTip: "تُنطق /ˈsɪstər/ - كسر السين الأولى ونطق التاء واضحة (سِسْتَر).",
    mnemonic: "تخيل أختك الكبرى تقدم لك النصيحة وتبتسم لك بمودة ودفء.",
    funFact: "اختصارها الشائع بين الشباب هو Sis، وتجمع إلى sisters.",
    example1Tip: "اسم مفرد يسبقه ضمير ملكية لتوضيح صلة القرابة.",
    example2: {
      english: "His younger sister is a talented artist.",
      arabic: "أخته الصغرى فنانة موهوبة.",
      tips: "استخدام أداة a قبل الصفة والاسم المفرد (a talented artist)."
    }
  },
  man: {
    ipa: "/mæn/",
    pronunciationTip: "تُنطق /mæn/ - فتح الألف بوضوح (مان).",
    mnemonic: "تخيل رجلاً يتمتع بالقوة والأخلاق يسعى لخدمة مجتمعه بنزاهة.",
    funFact: "صيغة الجمع شاذة بتحويل a إلى e لتصبح men (رجال).",
    example1Tip: "اسم مفرد مذكر يأخذ الضمير he.",
    example2: {
      english: "The men finished their work on time.",
      arabic: "أنهى الرجال عملهم في الوقت المحدد.",
      tips: "استخدام صيغة الجمع الشاذة men مع صفة الملكية their."
    }
  },
  woman: {
    ipa: "/ˈwʊmən/",
    pronunciationTip: "تُنطق /ˈwʊmən/ (وُومَن) في المفرد، بينما الجمع women يُنطق /ˈwɪmɪn/ (وِمِن).",
    mnemonic: "تخيل امرأة طموحة وناجحة تقود فريقاً وتلهم من حولها بالعزيمة.",
    funFact: "من الكلمات القليلة التي يتغير فيها نطق حرف الوصل (o) في الجمع ليصبح مثل صوت الكسرة (وِمِن).",
    example1Tip: "اسم مفرد مؤنث يأخذ الضمير she.",
    example2: {
      english: "Women play a vital role in society.",
      arabic: "تلعب النساء دوراً حيوياً في المجتمع.",
      tips: "تأتي كلمة women بصيغة الجمع كفاعل عام للجملة."
    }
  },

  // === Food & Drinks & Kitchen ===
  water: {
    ipa: "/ˈwɔːtər/",
    pronunciationTip: "تُنطق /ˈwɔːtər/ - في اللهجة الأمريكية يُنطق حرف t بصوت سريع خفيف (وادَر).",
    mnemonic: "تخيل قطرات الندى الصافية وكوب ماء بارد يروي عطشك في يوم صيفي حار.",
    funFact: "الماء اسم غير معدود فلا يُجمع بـ s، بل نقول: 'some water' أو 'a bottle of water'.",
    example1Tip: "اسم غير معدود يأخذ some لتحديد كمية غير محددة.",
    example2: {
      english: "Always drink a glass of fresh water in the morning.",
      arabic: "اشرب دائماً كوباً من الماء النقي في الصباح.",
      tips: "نستخدم عبارة 'a glass of' كوحدة لتحديد كمية الماء المعدودة."
    }
  },
  food: {
    ipa: "/fuːd/",
    pronunciationTip: "تُنطق /fuːd/ - مد حرفي (oo) بالواو الطويلة (فُود).",
    mnemonic: "تخيل مائدة طعام شهية ومتنوعة تفوح منها أطيب الروائح بعد يوم طويل.",
    funFact: "كلمة food غير معدودة بشكل عام، ولكن يمكن جمعها foods للإشارة إلى 'أصناف وأنواع مختلفة من الأطعمة'.",
    example1Tip: "تأتي بعد أفعال الكينونة متبوعة بصفة مثل delicious أو healthy.",
    example2: {
      english: "Healthy food gives you energy and focus.",
      arabic: "الطعام الصحي يمنحك الطاقة والتركيز.",
      tips: "تأتي الصفة healthy قبل الاسم food لبيان نوعه وقيمته الغذائية."
    }
  },
  bread: {
    ipa: "/bred/",
    pronunciationTip: "تُنطق /bred/ - صوت (ea) ينطق بكسرة قصيرة مثل صوت حرف e في pen.",
    mnemonic: "تخيل رغيف خبز طازج وساخن يخرج لتوه من الفرن برائحة زكية.",
    funFact: "الخبز اسم غير معدود في الإنجليزية، وللإشارة إلى رغيف كامل نقول: 'a loaf of bread'.",
    example1Tip: "اسم غير معدود لا يأخذ أداة a بمفرده.",
    example2: {
      english: "Could you pass me a slice of bread, please?",
      arabic: "هل يمكنك أن تناولني شريحة من الخبز من فضلك؟",
      tips: "استخدام وحدة القياس a slice of لتحديد شريحة خبز واحدة."
    }
  },
  milk: {
    ipa: "/mɪlk/",
    pronunciationTip: "تُنطق /mɪlk/ - كسر الميم مع نطق اللام والكاف واضحتين (مِلْك).",
    mnemonic: "تخيل كوب حليب أبيض دافئ وغني بالكالسيوم يمنحك النشاط والقوة.",
    funFact: "اسم غير معدود، ونستخدم معه 'a glass of milk' أو 'a carton of milk'.",
    example1Tip: "تأتي بعد أفعال مثل drink أو buy بدون أداة نكرة.",
    example2: {
      english: "She adds a little milk to her morning coffee.",
      arabic: "تضيف القليل من الحليب إلى قهوتها الصباحية.",
      tips: "استخدام a little مع الأسماء غير المعدودة للتعبير عن كمية قليلة."
    }
  },
  tea: {
    ipa: "/tiː/",
    pronunciationTip: "تُنطق /tiː/ - مد صوت الياء الطويلة (تِي).",
    mnemonic: "تخيل كوب شاي ساخن تتصاعد منه أبخرة النعناع في جلسة استرخاء ممتعة.",
    funFact: "الشاي هو المشروب الأكثر استهلاكاً في العالم بعد الماء، ويقال: 'a cup of tea'.",
    example1Tip: "اسم غير معدود يسبقه الفعل like أو drink.",
    example2: {
      english: "Would you like a cup of green tea?",
      arabic: "هل ترغب في فنجان من الشاي الأخضر؟",
      tips: "صيغة العرض المهذب 'Would you like' متبوعة بـ a cup of tea."
    }
  },
  coffee: {
    ipa: "/ˈkɔːfi/",
    pronunciationTip: "تُنطق /ˈkɔːfi/ - فتح الكاف وتشديد الفاء المكسورة (كُوفِي).",
    mnemonic: "تخيل رائحة حبوب القهوة المحمصة وصوت ماكينة الإسبريسو في المقهى الصباحي.",
    funFact: "في المقاهي يمكنك أن تقول بالعامية 'two coffees' ويُقصد بها 'two cups of coffee'.",
    example1Tip: "تأتي كوحدة مشروب أو اسم عام للقهوة.",
    example2: {
      english: "I smell fresh coffee brewing in the kitchen.",
      arabic: "أشم رائحة قهوة طازجة تُحضّر في المطبخ.",
      tips: "استخدام الصفة fresh قبل coffee لوصف جودتها."
    }
  },
  apple: {
    ipa: "/ˈæpl/",
    pronunciationTip: "تُنطق /ˈæpl/ - فتح الألف بوضوح (آبْل).",
    mnemonic: "تخيل قضم تفاحة حمراء مقرمشة تصدر صوتاً لذيذاً وتنعش حواسك.",
    funFact: "تأخذ أداة النكرة 'an' وليس 'a' لأنها تبدأ بصوت متحرك (an apple).",
    example1Tip: "استخدام أداة النكرة an لأن الكلمة تبدأ بصوت علة متحرك.",
    example2: {
      english: "An apple a day keeps the doctor away.",
      arabic: "تفاحة كل يوم تغنيك عن زيارة الطبيب.",
      tips: "مثل إنجليزي شهير يوضح أهمية الغذاء الصحي في الوقاية."
    }
  },
  knife: {
    ipa: "/naɪf/",
    pronunciationTip: "تُنطق /naɪf/ - حرف (k) صامت تماماً لا يُنطق في بداية الكلمة قبل (n).",
    mnemonic: "تخيل نصل سكين لامع وحاد يُستخدم بدقة في تقطيع الخضروات في المطبخ.",
    funFact: "تُجمع بتحويل fe إلى ves لتصبح knives (سكاكين)، وحرف k صامت في المفرد والجمع.",
    example1Tip: "تأتي الصفة sharp بعد فعل الكينونة is لوصف حدة السكين.",
    example2: {
      english: "Use a sharp knife to cut the vegetables carefully.",
      arabic: "استخدم سكيناً حاداً لتقطيع الخضروات بحذر.",
      tips: "استخدام صيغة الأمر Use متبوعة بالصفة sharp والاسم knife."
    }
  },

  // === Home & Places ===
  book: {
    ipa: "/bʊk/",
    pronunciationTip: "تُنطق /bʊk/ - حرفا (oo) ينطقان بصوت واو قصير وخفيف (بُك).",
    mnemonic: "تخيل أنك تفتح دفتي كتاب قيّم وتستمتع برائحة الورق في زاوية القراءة الهادئة.",
    funFact: "كلمة Book تستخدم كفعل أيضاً بمعنى 'يحجز'؛ مثل: 'Book a hotel room' (حجز غرفة فندق).",
    example1Tip: "استخدام أداة النكرة a والصفة good قبل الاسم المفرد book.",
    example2: {
      english: "I will book our flight tickets tonight.",
      arabic: "سوف أحجز تذاكر رحلتنا الجوية الليلة.",
      tips: "استخدام كلمة book هنا كفعل أساسي بمعنى 'يحجز'."
    }
  },
  house: {
    ipa: "/haʊs/",
    pronunciationTip: "تُنطق /haʊs/ - فتح الهاء مع مد الواو الخفيفة وتسكين السين (هاوْس).",
    mnemonic: "تخيل واجهة بيت قرميدي جميل محاط بحديقة خضراء وسور أبيض أنيق.",
    funFact: "الفرق: House يشير للمبنى الخرساني الفعلي، بينما Home يشير للمنزل الدافئ والمأوى العاطفي.",
    example1Tip: "اسم مفرد معدود يُجمع بإضافة s ليصبح houses.",
    example2: {
      english: "They bought a beautiful house near the coast.",
      arabic: "اشتروا منزلاً جميلاً بالقرب من الساحل.",
      tips: "استخدام الفعل الماضي bought والصفة beautiful قبل house."
    }
  },
  home: {
    ipa: "/hoʊm/",
    pronunciationTip: "تُنطق /hoʊm/ - مد صوت الواو المضمومة مع تسكين الميم (هَوْم).",
    mnemonic: "تخيل لحظة خلع حذائك بعد يوم طويل والشعور بالراحة والأمان في مأواك وبيتك.",
    funFact: "مع فعل الذهاب نقول 'go home' مباشرة بدون حرف الجر to!",
    example1Tip: "تأتي للتعبير عن الاستقرار والراحة والشعور بالانتماء.",
    example2: {
      english: "I am tired, so I want to go home now.",
      arabic: "أنا متعب، ولذلك أريد الذهاب إلى المنزل الآن.",
      tips: "لاحظ عدم استخدام حرف الجر to بعد الفعل go مع كلمة home."
    }
  },
  school: {
    ipa: "/skuːl/",
    pronunciationTip: "تُنطق /skuːl/ - حرفا (ch) ينطقان بصوت الكاف /k/ وليس (تش).",
    mnemonic: "تخيل ساحة المدرسة وجرس الحصة والطلاب يدخلون الفصول بشغف للتعلم.",
    funFact: "نقول 'at school' بدون the عند الإشارة لحضور الدروس أو الوجود كطالب في المدرسة.",
    example1Tip: "تأتي مع وسيلة النقل بحرف الجر by (by bus).",
    example2: {
      english: "The children are at school right now.",
      arabic: "الأطفال موجودون في المدرسة في هذه اللحظة.",
      tips: "استخدام حرف الجر at مع كلمة school للإشارة للوجود بالدراسة."
    }
  },
  city: {
    ipa: "/ˈsɪti/",
    pronunciationTip: "تُنطق /ˈsɪti/ - حرف (c) ينطق كصوت السين /s/ لأنه متبوع بحرف i.",
    mnemonic: "تخيل ناطحات سحاب مضيئة وشوارع واسعة وحركة سيارات سريعة في قلب مدينة كبرى.",
    funFact: "تُجمع بتحويل y إلى ies لتصبح cities لأن حرف y مسبوق بحرف ساكن (t).",
    example1Tip: "اسم مفرد معدود يأخذ أداة a أو the.",
    example2: {
      english: "Cairo is the largest city in the region.",
      arabic: "القاهرة هي أكبر مدينة في المنطقة.",
      tips: "استخدام صيغة التفضيل the largest قبل الاسم city."
    }
  },
  car: {
    ipa: "/kɑːr/",
    pronunciationTip: "تُنطق /kɑːr/ - مد صوت الألف المفخمة (كار).",
    mnemonic: "تخيل سيارة حديثة ومريحة تنطلق بك في رحلة عائلية رائعة على الطريق السريع.",
    funFact: "نقول 'by car' بدون أداة للحديث عن وسيلة السفر، و'in the car' للحديث عن التواجد بداخلها.",
    example1Tip: "اسم مفرد معدود يسبقه اسم إشارة مثل this أو that.",
    example2: {
      english: "He drives his car to work every morning.",
      arabic: "يقود سيارته إلى العمل كل صباح.",
      tips: "الفعل drives مضاف له s المفرد مع الفاعل He."
    }
  },

  // === Verbs ===
  go: {
    ipa: "/ɡoʊ/",
    pronunciationTip: "تُنطق /ɡoʊ/ - حرف g ينطق جيم غير معطشة (غ/گ) مع ضم الواو.",
    mnemonic: "تخيل إشارة مرور خضراء تنطلق معها السيارات والمشاة نحو وجهاتهم.",
    funFact: "فعل شاذ في الماضي؛ الماضي منه went والتصريف الثالث gone.",
    example1Tip: "يأتي بعده حرف الجر to لتحديد الوجهة (go to school).",
    example2: {
      english: "Yesterday, we went to the museum.",
      arabic: "بالأمس، ذهبنا إلى المتحف.",
      tips: "استخدام صيغة الماضي الشاذة went بدلاً من go مع كلمة Yesterday."
    }
  },
  come: {
    ipa: "/kʌm/",
    pronunciationTip: "تُنطق /kʌm/ - حرف o ينطق بفتحة قصيرة وسريعة (كَمْ).",
    mnemonic: "تخيل الترحيب بصديق مقبل نحوك وأنت تلوح له وتدعوه للدخول: 'Come in!'.",
    funFact: "الماضي منه came والتصريف الثالث يعود مجدداً إلى come.",
    example1Tip: "تستخدم لدعوة أو الإشارة لقدوم شخص نحو مكان المتكلم.",
    example2: {
      english: "Please come and join us for dinner.",
      arabic: "تفضل بالقدوم ومشاركتنا طعام العشاء.",
      tips: "استخدام فعل الأمر come بعد please للدعوة بلطف."
    }
  },
  see: {
    ipa: "/siː/",
    pronunciationTip: "تُنطق /siː/ - مد صوت الياء الطويلة (سِي).",
    mnemonic: "تخيل عينين صافيتين تبصران منظراً طبيعياً خلاباً من قمة جبل.",
    funFact: "الماضي saw والتصريف الثالث seen، والفرق بين see و watch أن see للرؤية العامة.",
    example1Tip: "فعل حواس لا يُستخدم غالباً في الأزمنة المستمرة (ing).",
    example2: {
      english: "I saw an interesting documentary yesterday.",
      arabic: "شاهدتُ فيلماً وثائقياً مثيراً للاهتمام بالأمس.",
      tips: "استخدام صيغة الماضي البسيط saw للحديث عن حدث منتهٍ."
    }
  },
  look: {
    ipa: "/lʊk/",
    pronunciationTip: "تُنطق /lʊk/ - صوت (oo) قصير وخفيف كالواو في كلمة 'بُك'.",
    mnemonic: "تخيل توجيه نظارتك أو عدسة مكبرة للتركيز على تفاصيل دقيقة في خريطة.",
    funFact: "عندما يأتي بعدها at تعني ينظر إلى (look at)، وعندما يأتي بعدها for تعني يبحث عن (look for).",
    example1Tip: "يأتي مع حرف الجر at لتوجيه البصر نحو هدف محدد.",
    example2: {
      english: "I am looking for my lost keys.",
      arabic: "أنا أبحث عن مفاتيحي المفقودة.",
      tips: "استخدام التعبير look for بمعنى 'يبحث عن' في صيغة المضارع المستمر."
    }
  },
  listen: {
    ipa: "/ˈlɪsn/",
    pronunciationTip: "تُنطق /ˈlɪsn/ - حرف (t) صامت تماماً لا يُنطق أبدًا.",
    mnemonic: "تخيل وضع سماعات الرأس والإنصات بتركيز وشغف لمحادثة إنجليزية واضحة.",
    funFact: "فعل listen يأتي دائماً متبوعاً بحرف الجر to عند ذكر الشيء المسموع (Listen to music).",
    example1Tip: "استخدام حرف الجر to بعد الفعل listen كقاعدة أساسية ثابتة.",
    example2: {
      english: "I love listening to podcasts while walking.",
      arabic: "أحب الاستماع إلى البرامج الصوتية أثناء المشي.",
      tips: "إضافة ing للفعل listening بعد فعل التفضيل love."
    }
  },
  hear: {
    ipa: "/hɪr/",
    pronunciationTip: "تُنطق /hɪr/ - كسر الهاء مع الراء الخفيفة (هِير).",
    mnemonic: "تخيل التقاط أذنيك لصوت زقزقة عصفور خارج النافذة دون تخطيط مسبق.",
    funFact: "الماضي منه heard ويُنطق /hɜːrd/ (هيرْد). وhear تعني إدراك الصوت بالأذن دون قصد مسبق.",
    example1Tip: "يستخدم مع الأفعال المساعدة مثل can (I can hear you).",
    example2: {
      english: "Did you hear that loud noise outside?",
      arabic: "هل سمعتَ ذلك الصوت العالي في الخارج؟",
      tips: "استخدام فعل المصدر hear بعد أداة السؤال في الماضي Did."
    }
  },
  speak: {
    ipa: "/spiːk/",
    pronunciationTip: "تُنطق /spiːk/ - مد صوت الياء الطويلة مع حرف k الواضح في النهاية.",
    mnemonic: "تخيل وقوفك على منصة وتحدثك باللغة الإنجليزية بكل طلاقة وثقة أمام الجميع.",
    funFact: "الماضي spoke والتصريف الثالث spoken، وتستخدم مع اللغات: 'speak Arabic and English'.",
    example1Tip: "تستخدم مباشرة مع اللغات دون حروف جر فاصلة (speak English).",
    example2: {
      english: "He spoke confidently during the presentation.",
      arabic: "تحدث بثقة أثناء العرض التقديمي.",
      tips: "استخدام صيغة الماضي spoke متبوعة بالظرف confidently لتوضيح الكيفية."
    }
  },
  write: {
    ipa: "/raɪt/",
    pronunciationTip: "تُنطق /raɪt/ - حرف (w) في البداية صامت تماماً لا يُنطق.",
    mnemonic: "تخيل حركة سن قلم حبر أنيق وهو يسطر أفكاراً ملهمة على دفتر ناصع.",
    funFact: "الماضي wrote والتصريف الثالث written، وحرف w صامت في جميع التصاريف.",
    example1Tip: "فعل متعدٍ يأتي بعده مفعول به مباشر مثل a letter أو an email.",
    example2: {
      english: "She wrote an inspiring article for the magazine.",
      arabic: "كتبت مقالاً ملهماً للمجلة.",
      tips: "استخدام صيغة الماضي wrote وأداة an قبل الصفة inspiring."
    }
  },
  read: {
    ipa: "/riːd/ (past: /red/)",
    pronunciationTip: "في المضارع تُنطق /riːd/ (رِيد)، أما في الماضي فتكتب read وتُنطق /red/ (رِد)!",
    mnemonic: "تخيل الاسترخاء في كرسي مريح وتقليب صفحات رواية مشوقة تأخذك في رحلة خيالية.",
    funFact: "الماضي والتصريف الثالث يكتبان بنفس الحروف read ولكن ينطقان مثل اللون الأحمر red تماماً.",
    example1Tip: "فعل مضارع يدل على القراءة ومطالعة الكتب.",
    example2: {
      english: "I read three wonderful chapters last night.",
      arabic: "قرأتُ ثلاثة فصول رائعة الليلة الماضية.",
      tips: "الفعل read هنا في زمن الماضي (يُنطق رِد /red/) لوجود last night."
    }
  },
  think: {
    ipa: "/θɪŋk/",
    pronunciationTip: "تُنطق /θɪŋk/ - صوت (th) ينطق كحرف الثاء بإخراج طرف اللسان بين الأسنان.",
    mnemonic: "تخيل أنك تسند ذقنك بيدك وتفكر بعمق وإيجابية للوصول إلى حل مبتكر لمشكلة ما.",
    funFact: "الماضي منه thought والتصريف الثالث thought وحروف gh صامتة تماماً.",
    example1Tip: "تستخدم للتعبير عن الرأي والاعتقاد الشخصي متبوعة بجملة خبرية.",
    example2: {
      english: "I thought about your advice and decided to agree.",
      arabic: "فكرتُ في نصيحتك وقررتُ الموافقة.",
      tips: "استخدام صيغة الماضي thought مع حرف الجر about للتفكير في موضوع."
    }
  },
  learn: {
    ipa: "/lɜːrn/",
    pronunciationTip: "تُنطق /lɜːrn/ - صوت مرقق بين الفتحة والكسرة (لِيرْن).",
    mnemonic: "تخيل مصباحاً يضيء فوق رأسك دلالة على فهم مهارة جديدة والارتقاء بمعرفتك.",
    funFact: "الشخص المتعلم يسمى Learner، والتعلم يسمى Learning، والماضي learned أو learnt.",
    example1Tip: "يأتي بعده مفعول به مباشر مثل لغة أو مهارة (learn English).",
    example2: {
      english: "Practice every day to learn new words quickly.",
      arabic: "تدرّب كل يوم لتتعلم كلمات جديدة بسرعة.",
      tips: "استخدام to المصدرية للدلالة على الغرض والهدف من التمرين."
    }
  },

  // === Adjectives ===
  good: {
    ipa: "/ɡʊd/",
    pronunciationTip: "تُنطق /ɡʊd/ - واو قصيرة خفيفة دون مد زائد (غُود).",
    mnemonic: "تخيل إشارة إبهام مرفوعة للأعلى كرمز للجودة والعمل المتقن والنجاح.",
    funFact: "درجة المقارنة منها شاذة؛ الأفضل هو better، والأفضل على الإطلاق the best.",
    example1Tip: "صفة تسبق الاسم الموصوف مثل good idea أو good friend.",
    example2: {
      english: "This book is better than the previous one.",
      arabic: "هذا الكتاب أفضل من الكتاب السابق.",
      tips: "استخدام صيغة المقارنة الشاذة better من good مع كلمة than."
    }
  },
  happy: {
    ipa: "/ˈhæpi/",
    pronunciationTip: "تُنطق /ˈhæpi/ - فتحة على الهاء وتشديد خفيف للباء (هابّي).",
    mnemonic: "تخيل ابتسامة عريضة وفرحة غامرة في يوم احتفال وتخرج.",
    funFact: "عكسها unhappy أو sad، والاسم منها Happiness (السعادة).",
    example1Tip: "تأتي بعد أفعال الكينونة (am/is/are) لوصف الحالة النفسية.",
    example2: {
      english: "They were happy to hear the great news.",
      arabic: "كانوا سعداء بسماع الأخبار الرائعة.",
      tips: "تأتي الصفة happy متبوعة بـ to والمصدر لبيان سبب السعادة."
    }
  },
  beautiful: {
    ipa: "/ˈbjuːtɪfl/",
    pronunciationTip: "تُنطق /ˈbjuːtɪfl/ - المقطع الأول ينطق (بْيُو) مع تخفيف المقطع الأخير (فُل).",
    mnemonic: "تخيل حديقة أزهار متفتحة بألوان زاهية وقطرات الندى تلمع تحت شمس الصباح.",
    funFact: "لأنها صفة طويلة مكونة من 3 مقاطع، في المقارنة نقول: 'more beautiful' و'the most beautiful'.",
    example1Tip: "تأتي الصفة قبل الاسم المفرد المعدود المسبوق بأداة a (a beautiful flower).",
    example2: {
      english: "She has the most beautiful smile in the room.",
      arabic: "لديها أجمل ابتسامة في المكان.",
      tips: "استخدام صيغة التفضيل العليا the most beautiful للصفات الطويلة."
    }
  },

  // === Prepositions & Adverbs ===
  in: {
    ipa: "/ɪn/",
    pronunciationTip: "تُنطق /ɪn/ - كسرة خفيفة واضحة مع نطق النون.",
    mnemonic: "تخيل وضع مفتاح ثمين داخل صندوق مجوهرات محكم الإغلاق.",
    funFact: "تستخدم للأماكن المغلقة (in the room)، والمدن والدول (in Paris)، والسنوات والفصول (in 2026, in summer).",
    example1Tip: "تستخدم لتوضيح وجود الشيء داخل حيز مغلق (in the box).",
    example2: {
      english: "We will travel to London in July.",
      arabic: "سنسافر إلى لندن في شهر يوليو.",
      tips: "استخدام حرف الجر in مع أسماء الأشهر والفصول والسنوات."
    }
  },
  on: {
    ipa: "/ɑːn/ or /ɒn/",
    pronunciationTip: "تُنطق /ɒn/ - فتح الألف مع تفخيم خفيف (أون).",
    mnemonic: "تخيل فنجان قهوة يستقر بأمان على سطح طاولة خشبية أنيقة.",
    funFact: "تستخدم للأسطح (on the table, on the wall) ولأيام الأسبوع والتواريخ (on Monday, on May 5th).",
    example1Tip: "تستخدم لتوضيح استقرار الشيء على سطح ملامس له.",
    example2: {
      english: "We have an important meeting on Tuesday.",
      arabic: "لدينا اجتماع مهم يوم الثلاثاء.",
      tips: "استخدام حرف الجر on حصراً مع أيام الأسبوع."
    }
  },
  at: {
    ipa: "/æt/",
    pronunciationTip: "تُنطق /æt/ - فتح الألف وتسكين التاء (آت).",
    mnemonic: "تخيل نقطة محددة بدقة على الخريطة أو ساعة تشير تماماً إلى وقت موعدك.",
    funFact: "تستخدم للساعات المحددة (at 5 PM)، وأوقات معينة (at night, at noon)، ونقاط محددة (at home, at the door).",
    example1Tip: "تستخدم مع الأوقات الدقيقة أو الأماكن المحددة كنقاط التقاء.",
    example2: {
      english: "The train departs at seven o'clock sharp.",
      arabic: "يغادر القطار في تمام الساعة السابعة تماماً.",
      tips: "استخدام حرف الجر at مع الساعات والمواعيد المحددة."
    }
  },
  always: {
    ipa: "/ˈɔːlweɪz/",
    pronunciationTip: "تُنطق /ˈɔːlweɪz/ - تفخيم الألف الأولى ونطق حرف s الأخير بصوت /z/ خفيف.",
    mnemonic: "تخيل شروق الشمس كل صباح دون انقطاع كرمز للاستمرار والالتزام الدائم.",
    funFact: "ظرف تكرار يعني 100%؛ ويوضع قبل الفعل الأساسي (always study) وبعد أفعال الكينونة (is always).",
    example1Tip: "يأتي ظرف التكرار always قبل الفعل الأساسي study لبيان تكرار العادة.",
    example2: {
      english: "She is always optimistic and full of hope.",
      arabic: "هي متفائلة دائماً ومليئة بالأمل.",
      tips: "يأتي ظرف التكرار always بعد أفعال الكينونة (is always)."
    }
  },
  never: {
    ipa: "/ˈnevər/",
    pronunciationTip: "تُنطق /ˈnevər/ - كسر النون مع نطق حرف v بوضوح.",
    mnemonic: "تخيل خطاً أحمر قاطعاً وقراراً حازماً بعدم تكرار خطأ معين إطلاقاً.",
    funFact: "تعطي الجملة معنى النفي التام (0%)، فلا نستخدم معها don't أو not لأنها تنفي بذاتها.",
    example1Tip: "توضع قبل الفعل الأساسي وتفيد النفي القاطع دون الحاجة لأداة نفي أخرى.",
    example2: {
      english: "Never give up on your noble dreams.",
      arabic: "لا تستسلم أبداً عن أحلامك النبيلة.",
      tips: "تأتي في بداية الجملة للنهي والتأكيد القاطع."
    }
  }
};
