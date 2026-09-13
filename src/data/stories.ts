import { Word, SingleWordStory } from "../types";
import { USER_CURATED_STORIES } from "./userCuratedStories";

/**
 * Curated custom story vignettes for popular and foundational words.
 * Each word gets a distinct, natural narrative, setting, characters, authentic dialogue,
 * natural usage, and plot-based comprehension questions.
 */
const SPECIFIC_WORD_STORIES: Record<string, (w: Word) => SingleWordStory> = {
  // Benchmark user example 1: Bye
  bye: (w) => ({
    word: w,
    title: "End of the Party",
    titleArabic: "نهاية الحفلة",
    storyEnglish: `The party was ending, and guests were starting to walk toward the exit. "Bye, it was a fantastic evening!" said a friend while waving at the host. The host smiled and replied with a warm goodbye. Everyone left the house feeling happy about the fun event.`,
    storyArabic: `كانت الحفلة توشك على الانتهاء، وبدأ الضيوف في السير نحو المخرج. قال أحد الأصدقاء وهو يلوح للمضيف: "وداعاً، كانت أمسية رائعة!" ابتسم المضيف ورد بوداع دافئ. غادر الجميع المنزل وهم يشعرون بالسعادة بشأن هذا الحدث الممتع.`,
    question: {
      question: "What did the friend say before leaving the party?",
      options: [
        `"Bye, it was a fantastic evening!"`,
        "He asked if he could stay until the morning",
        "He complained about the party music",
        "He left quietly through the back door"
      ],
      answerIndex: 0,
      explanation: "لوح الصديق للمضيف وقال بلباقة ومرح: (وداعاً، كانت أمسية رائعة!) عند نهاية الحفلة."
    }
  }),

  hi: (w) => ({
    word: w,
    title: "The Photographer on the Beach",
    titleArabic: "المصور على الشاطئ",
    storyEnglish: `A young photographer stood on the beach, looking at the beautiful horizon. Another person walked by and stopped to say, "Hi, are you taking pictures of the sunset?" The photographer smiled and showed his camera screen. They spent the next hour talking about art and photography.`,
    storyArabic: `وقف مصور شاب على الشاطئ، ينظر إلى الأفق الجميل. مر شخص آخر وتوقف ليقول: "مرحباً، هل تلتقط صوراً لغروب الشمس؟" ابتسم المصور وأراه شاشة كاميرته. قضيا الساعة التالية في الحديث عن الفن والتصوير الفوتوغرافي.`,
    question: {
      question: "What did the person say when stopping by the photographer?",
      options: [
        `"Hi, are you taking pictures of the sunset?"`,
        `"Excuse me, what time is the next bus?"`,
        `"Where is the entrance to the museum?"`,
        `"Can you swim in this deep water?"`
      ],
      answerIndex: 0,
      explanation: `توقف الشخص وسأل بلطف مستخدماً التحية: ("Hi, are you taking pictures of the sunset?") فتبادلا حديثاً ممتعاً عن التصوير.`
    }
  }),

  hello: (w) => ({
    word: w,
    title: "The Office Call",
    titleArabic: "مكالمة المكتب",
    storyEnglish: `The phone rang in the quiet office, breaking the silence of the afternoon. A clerk answered it professionally and said, "Hello, how can I help you today?" The caller asked a question about a package delivery. The clerk looked at the computer and gave a helpful answer.`,
    storyArabic: `رن الهاتف في المكتب الهادئ، مما كسر صمت فترة بعد الظهر. أجاب موظف بمهنية وقال: "مرحباً، كيف يمكنني مساعدتك اليوم؟" طرح المتصل سؤالاً حول توصيل طرد. نظر الموظف إلى الحاسوب وقدم إجابة مفيدة.`,
    question: {
      question: "What did the clerk say when answering the office phone?",
      options: [
        `"Hello, how can I help you today?"`,
        `"Please call back tomorrow morning."`,
        `"The office is closed for lunch."`,
        `"Can you send an email instead?"`
      ],
      answerIndex: 0,
      explanation: `أجاب الموظف بمهنية قائلاً: ("Hello, how can I help you today?") للمساعدة في الاستفسار عن الطرد.`
    }
  }),

  goodbye: (w) => ({
    word: w,
    title: "The Traveler's Farewell",
    titleArabic: "وداع المسافرة",
    storyEnglish: `The train arrived at the station, and it was time for the traveler to leave. She looked at her family and whispered, "Goodbye, I will miss you all so much." They hugged her tightly and watched as she stepped onto the train. She waved through the window until the train disappeared.`,
    storyArabic: `وصل القطار إلى المحطة، وكان الوقت قد حان للمسافرة لتغادر. نظرت إلى عائلتها وهمست: "وداعاً، سأشتاق إليكم جميعاً كثيراً." عانقوها بقوة وراقبوها وهي تصعد إلى القطار. لوحت من خلال النافذة حتى اختفى القطار.`,
    question: {
      question: "What did the traveler say to her family before boarding the train?",
      options: [
        `"Goodbye, I will miss you all so much."`,
        `"Wait for me, I forgot my suitcase."`,
        `"Where is the restaurant car?"`,
        `"The train is arriving late today."`
      ],
      answerIndex: 0,
      explanation: `ودعت المسافرة عائلتها قائلة: ("Goodbye, I will miss you all so much.") قبل صعود القطار.`
    }
  }),

  // 1. man
  man: (w) => ({
    word: w,
    title: "A Kind Stranger",
    titleArabic: "غريب طيب",
    storyEnglish: `A tall man sat on the park bench, feeding the birds with small seeds. He wore a simple coat and seemed to be enjoying the quiet afternoon. A little girl approached him and asked if she could help. He smiled and shared the seeds with her kindly.`,
    storyArabic: `جلس رجل طويل على مقعد الحديقة، يطعم الطيور بذوراً صغيرة. كان يرتدي معطفاً بسيطاً وبدا وكأنه يستمتع بفترة بعد الظهر الهادئة. اقتربت منه طفلة صغيرة وسألته إن كان بإمكانها المساعدة. ابتسم وشاركها البذور بلطف.`,
    question: {
      question: "What was the man doing on the park bench?",
      options: [
        "Feeding the birds with small seeds",
        "Reading a daily newspaper",
        "Waiting for a city bus",
        "Painting the wooden bench"
      ],
      answerIndex: 0,
      explanation: "جلس رجل طويل على مقعد الحديقة يطعم الطيور وشارك البذور مع الطفلة بلطف."
    }
  }),

  // 2. morning
  morning: (w) => ({
    word: w,
    title: "A Peaceful Morning",
    titleArabic: "صباح هادئ",
    storyEnglish: `The sun rose slowly over the quiet farm, painting the sky in soft pink colors. A farmer walked out to check on his animals in the early morning. Everything was peaceful, and the air felt fresh and cool. He started his daily tasks with a happy heart and a smile.`,
    storyArabic: `شرقت الشمس ببطء فوق المزرعة الهادئة، وصبغت السماء بألوان وردية ناعمة. خرج مزارع ليتفقد حيواناته في الصباح الباكر. كان كل شيء هادئاً، وبدا الهواء منعشاً وبارداً. بدأ مهامه اليومية بقلب سعيد وابتسامة.`,
    question: {
      question: "When did the farmer walk out to check on his animals?",
      options: [
        "In the early morning as the sun rose",
        "Late at night after dinner",
        "During a heavy rainstorm",
        "In the middle of the dark night"
      ],
      answerIndex: 0,
      explanation: "خرج المزارع في الصباح الباكر (morning) لتفقد حيواناته بهدوء وسعادة."
    }
  }),

  // 3. afternoon
  afternoon: (w) => ({
    word: w,
    title: "Hiking in the Forest",
    titleArabic: "التنزه في الغابة",
    storyEnglish: `After a long walk in the forest, the hikers sat down to eat their lunch. The sun was high in the sky during this warm afternoon. They enjoyed the sounds of the birds and the rustling leaves around them. It was a wonderful time to rest before continuing their hiking trip.`,
    storyArabic: `بعد مسيرة طويلة في الغابة، جلس المتنزهون لتناول غدائهم. كانت الشمس مرتفعة في السماء خلال فترة بعد الظهر الدافئة هذه. استمتعوا بأصوات الطيور وأوراق الشجر التي تصدر حفيفاً من حولهم. كان وقتاً رائعاً للراحة قبل متابعة رحلة المشي لمسافات طويلة.`,
    question: {
      question: "What did the hikers do during the warm afternoon?",
      options: [
        "Sat down to eat lunch and rest",
        "Set up tents to sleep for the night",
        "Swam across a wide river",
        "Looked for a lost backpack"
      ],
      answerIndex: 0,
      explanation: "جلس المتنزهون لتناول الغداء والراحة خلال فترة بعد الظهر (afternoon)."
    }
  }),

  // 4. evening
  evening: (w) => ({
    word: w,
    title: "A Calm Evening",
    titleArabic: "أمسية هادئة",
    storyEnglish: `The city lights began to twinkle as the busy day turned into a calm evening. Families walked together in the park to enjoy the cool breeze. Some people sat on benches, while others played games on the grass. The atmosphere was relaxing and perfect for ending the day.`,
    storyArabic: `بدأت أضواء المدينة تتلألأ بينما تحول اليوم المزدحم إلى أمسية هادئة. سارت العائلات معاً في الحديقة للاستمتاع بالنسيم العليل. جلس بعض الناس على المقاعد، بينما لعب آخرون ألعاباً على العشب. كان الجو مريحاً ومثالياً لإنهاء اليوم.`,
    question: {
      question: "How did families enjoy the calm evening?",
      options: [
        "Walked together in the park to enjoy the cool breeze",
        "Rushed to early morning work meetings",
        "Fixed the city traffic lights",
        "Stayed home cleaning the attic"
      ],
      answerIndex: 0,
      explanation: "استمتعت العائلات بالأمسية الهادئة (evening) بالتنزه في الحديقة والنسيم العليل."
    }
  }),

  // 5. night
  night: (w) => ({
    word: w,
    title: "Camping at Night",
    titleArabic: "التخييم ليلاً",
    storyEnglish: `The campfire crackled under the vast, dark sky full of shining stars. It was a cold night, but everyone felt warm near the bright fire. They sang songs and shared stories until they felt very sleepy. They eventually went to their tents to rest in the silence of nature.`,
    storyArabic: `تطاير شرر نار المخيم تحت السماء الواسعة المظلمة المليئة بالنجوم المتلألئة. كانت ليلة باردة، لكن الجميع شعروا بالدفء بالقرب من النار الساطعة. غنوا الأغاني وتبادلوا القصص حتى شعروا بالنعاس الشديد. ذهبوا في النهاية إلى خيامهم للراحة في صمت الطبيعة.`,
    question: {
      question: "Where did everyone gather during the cold night?",
      options: [
        "Near the bright campfire under the starry sky",
        "Inside an air-conditioned hotel lobby",
        "At a crowded train station",
        "In an office building conference room"
      ],
      answerIndex: 0,
      explanation: "تجمع الجميع في الليل (night) حول نار المخيم الدافئة وغنوا وتبادلوا القصص."
    }
  }),

  // 6. Please
  please: (w) => ({
    word: w,
    title: "The Respectful Student",
    titleArabic: "الطالب المحترم",
    storyEnglish: `The bus was very crowded, and there were no seats left for the elderly man. A young boy stood up and looked at him with respect. "Please sit here, sir," the boy said with a polite gesture. The man smiled and thanked the kind student for his thoughtfulness.`,
    storyArabic: `كانت الحافلة مزدحمة جداً، ولم تتبقَّ مقاعد للرجل المسن. وقف صبي صغير ونظر إليه باحترام. قال الصبي بإيماءة مهذبة: "من فضلك اجلس هنا يا سيدي." ابتسم الرجل وشكر الطالب اللطيف على مراعاته.`,
    question: {
      question: "What did the young boy say to the elderly man on the bus?",
      options: [
        `"Please sit here, sir,"`,
        `"Where is your bus ticket, sir?"`,
        `"This seat belongs to me today."`,
        `"Can you move back, please?"`
      ],
      answerIndex: 0,
      explanation: "عرض الطالب مقعده بأدب قائلاً: (\"Please sit here, sir,\") معبراً عن احترامه."
    }
  }),

  // 7. Thanks
  thanks: (w) => ({
    word: w,
    title: "The Art Show",
    titleArabic: "المعرض الفني",
    storyEnglish: `The children finished painting their colorful pictures for the school art show. Their teacher looked at the beautiful art and praised them for their effort. "Thanks for your hard work today," she said warmly to the excited students. They felt proud of their creations on the wall.`,
    storyArabic: `أنهى الأطفال رسم صورهم الملونة لمعرض فنون المدرسة. نظرت معلمتهم إلى الفن الجميل وأثنت عليهم لجهودهم. قالت للطلاب المتحمسين بحرارة: "شكراً على عملكم الجاد اليوم." شعروا بالفخر بإبداعاتهم المعلقة على الحائط.`,
    question: {
      question: "What did the teacher say to praise the students?",
      options: [
        `"Thanks for your hard work today,"`,
        `"We will finish the paintings tomorrow."`,
        `"Please clean the art room immediately."`,
        `"The art exhibition is postponed."`
      ],
      answerIndex: 0,
      explanation: "شكرت المعلمة الطلاب وأثنت عليهم قائلة: (\"Thanks for your hard work today,\")."
    }
  }),

  // 8. Thank you
  "thank you": (w) => ({
    word: w,
    title: "The Honest Gesture",
    titleArabic: "اللفتة الصادقة",
    storyEnglish: `A stranger dropped his wallet while walking quickly through the crowded station. A kind woman picked it up and gave it back to him immediately. The man looked at her with relief and said, "Thank you very much for your honesty!" She simply waved and continued her journey to the city.`,
    storyArabic: `أسقط غريب محفظته بينما كان يسير بسرعة عبر المحطة المزدحمة. التقطتها امرأة طيبة وأعادتها إليه على الفور. نظر إليها الرجل بارتياح وقال: "شكراً جزيلاً لكِ على أمانتكِ!" لوحت له ببساطة وتابعت رحلتها إلى المدينة.`,
    question: {
      question: "What did the man say when the woman returned his wallet?",
      options: [
        `"Thank you very much for your honesty!"`,
        `"Is this your lost wallet?"`,
        `"Where is the train ticket office?"`,
        `"Excuse me, what time is the train leaving?"`
      ],
      answerIndex: 0,
      explanation: "شكر الرجل المرأة بارتياح قائلاً: (\"Thank you very much for your honesty!\")."
    }
  }),

  // 9. Welcome
  welcome: (w) => ({
    word: w,
    title: "Warm Welcome",
    titleArabic: "ترحيب حار",
    storyEnglish: `The hotel staff greeted the guests as they walked into the lobby. "Welcome to our beautiful hotel!" said the receptionist with a warm smile. She gave them their room keys and helped with their heavy bags. The guests felt very comfortable starting their holiday in this place.`,
    storyArabic: `رحب موظفو الفندق بالضيوف وهم يدخلون الردهة. قالت موظفة الاستقبال بابتسامة دافئة: "مرحباً بكم في فندقنا الجميل!" أعطتهم مفاتيح غرفهم وساعدتهم في حقائبهم الثقيلة. شعر الضيوف براحة كبيرة لبدء عطلتهم في هذا المكان.`,
    question: {
      question: "What did the receptionist say to greet the guests?",
      options: [
        `"Welcome to our beautiful hotel!"`,
        `"Check-out time is at ten in the morning."`,
        `"Please wait outside in the car."`,
        `"Have a safe flight back home."`
      ],
      answerIndex: 0,
      explanation: "رحبت موظفة الاستقبال بالضيوف بابتسامة دافئة قائلة: (\"Welcome to our beautiful hotel!\")."
    }
  }),

  // 10. sorry
  sorry: (w) => ({
    word: w,
    title: "An Unfortunate Spill",
    titleArabic: "انسكاب مؤسف",
    storyEnglish: `The waiter accidentally spilled a little coffee on the table near the guest. He felt embarrassed and immediately grabbed a cloth. "I am so sorry for the mistake," he said with a polite bow. The guest smiled kindly and told him that it was okay.`,
    storyArabic: `سكب النادل القهوة قليلاً عن طريق الخطأ على الطاولة بالقرب من الضيف. شعر بالإحراج وأمسك بقطعة قماش على الفور. قال بانحناءة مهذبة: "أنا آسف جداً لهذا الخطأ." ابتسم الضيف بلطف وأخبره أن الأمر على ما يرام.`,
    question: {
      question: "What did the waiter say after accidentally spilling the coffee?",
      options: [
        `"I am so sorry for the mistake,"`,
        `"Would you like another slice of cake?"`,
        `"The restaurant is now closed."`,
        `"Please be careful with your cup."`
      ],
      answerIndex: 0,
      explanation: "اعتذر النادل بأدب قائلاً: (\"I am so sorry for the mistake,\") وتفهم الضيف الموقف."
    }
  }),

  // 11. Excuse me
  excuse: (w) => ({
    word: w,
    title: "Finding the Museum",
    titleArabic: "البحث عن المتحف",
    storyEnglish: `A tourist stood on the sidewalk, looking at a map of the city. He walked toward a shopkeeper and asked, "Excuse me, where is the nearest museum?" The shopkeeper pointed down the street to a large building. The tourist thanked him and walked toward the museum.`,
    storyArabic: `وقف سائح على الرصيف، ينظر إلى خريطة المدينة. سار باتجاه صاحب متجر وسأل: "عفواً، أين أقرب متحف؟" أشار صاحب المتجر أسفل الشارع إلى مبنى كبير. شكره السائح وسار باتجاه المتحف.`,
    question: {
      question: "What did the tourist ask the shopkeeper?",
      options: [
        `"Excuse me, where is the nearest museum?"`,
        `"How much is this postcard?"`,
        `"Where can I buy train tickets?"`,
        `"Can you take a picture of me?"`
      ],
      answerIndex: 0,
      explanation: "سأل السائح بأدب: (\"Excuse me, where is the nearest museum?\") للوصول إلى المتحف."
    }
  }),
  "excuse me": (w) => ({
    word: w,
    title: "Finding the Museum",
    titleArabic: "البحث عن المتحف",
    storyEnglish: `A tourist stood on the sidewalk, looking at a map of the city. He walked toward a shopkeeper and asked, "Excuse me, where is the nearest museum?" The shopkeeper pointed down the street to a large building. The tourist thanked him and walked toward the museum.`,
    storyArabic: `وقف سائح على الرصيف، ينظر إلى خريطة المدينة. سار باتجاه صاحب متجر وسأل: "عفواً، أين أقرب متحف؟" أشار صاحب المتجر أسفل الشارع إلى مبنى كبير. شكره السائح وسار باتجاه المتحف.`,
    question: {
      question: "What did the tourist ask the shopkeeper?",
      options: [
        `"Excuse me, where is the nearest museum?"`,
        `"How much is this postcard?"`,
        `"Where can I buy train tickets?"`,
        `"Can you take a picture of me?"`
      ],
      answerIndex: 0,
      explanation: "سأل السائح بأدب: (\"Excuse me, where is the nearest museum?\") للوصول إلى المتحف."
    }
  }),

  // 12. Yes
  yes: (w) => ({
    word: w,
    title: "A Gold Star",
    titleArabic: "نجمة ذهبية",
    storyEnglish: `The teacher asked the class if everyone finished their math homework on time. A student raised his hand and nodded enthusiastically. "Yes, I finished it last night!" he said with a proud smile. The teacher checked his paper and gave him a gold star for his effort.`,
    storyArabic: `سألت المعلمة الفصل عما إذا كان الجميع قد أنهوا واجباتهم المدرسية في الرياضيات في الوقت المحدد. رفع طالب يده وأومأ بحماس. قال بابتسامة فخورة: "نعم، لقد أنهيته الليلة الماضية!" راجعت المعلمة ورقته وأعطته نجمة ذهبية لجهده.`,
    question: {
      question: "What did the student say when the teacher asked about homework?",
      options: [
        `"Yes, I finished it last night!"`,
        `"No, I forgot my notebook at home."`,
        `"Can you give us more time, please?"`,
        `"I didn't understand the math lesson."`
      ],
      answerIndex: 0,
      explanation: "أجاب الطالب بحماس وفخر: (\"Yes, I finished it last night!\") وحصل على نجمة ذهبية."
    }
  }),

  // 13. No
  no: (w) => ({
    word: w,
    title: "The Picky Cat",
    titleArabic: "القطة الانتقائية",
    storyEnglish: `The cat looked at the plate of vegetables and turned its head away. It was clear that the cat wanted fish, not carrots. "No, you have to eat your food," said the owner with a gentle laugh. The cat finally gave up and started eating slowly.`,
    storyArabic: `نظرت القطة إلى طبق الخضروات وأدارت رأسها بعيداً. كان واضحاً أن القطة تريد سمكاً، وليس جزر. قال المالك بضحكة لطيفة: "لا، يجب أن تأكلي طعامك." استسلمت القطة أخيراً وبدأت في الأكل ببدء.`,
    question: {
      question: "What did the owner say to the picky cat?",
      options: [
        `"No, you have to eat your food,"`,
        `"Here is a bowl of fresh milk,"`,
        `"Let's go outside and play in the garden,"`,
        `"You can sleep on the sofa now,"`
      ],
      answerIndex: 0,
      explanation: "قال المالك للقطة بلطف: (\"No, you have to eat your food,\")."
    }
  }),

  // 14. okay / ok
  okay: (w) => ({
    word: w,
    title: "The Busy Kitchen",
    titleArabic: "المطبخ المزدحم",
    storyEnglish: `The young cook tasted the soup and nodded with a smile. "This tastes great, so everything is okay," he told the head chef. They worked together in the busy kitchen until late at night. They were tired but felt very happy with their hard work.`,
    storyArabic: `تذوق الطباخ الشاب الحساء وأومأ بابتسامة. قال لرئيس الطهاة: "هذا المذاق رائع، لذا كل شيء على ما يرام." عملا معاً في المطبخ المزدحم حتى وقت متأخر من الليل. كانا متعبين لكنهما شعرا بسعادة غامرة لعملهما الجاد.`,
    question: {
      question: "What did the young cook say after tasting the soup?",
      options: [
        `"This tastes great, so everything is okay,"`,
        `"We need to add more salt immediately,"`,
        `"The oven is not working properly,"`,
        `"The soup is too cold to serve,"`
      ],
      answerIndex: 0,
      explanation: "تذوق الطباخ الحساء وقال لرئيس الطهاة: (\"This tastes great, so everything is okay,\")."
    }
  }),
  ok: (w) => ({
    word: w,
    title: "The Busy Kitchen",
    titleArabic: "المطبخ المزدحم",
    storyEnglish: `The young cook tasted the soup and nodded with a smile. "This tastes great, so everything is okay," he told the head chef. They worked together in the busy kitchen until late at night. They were tired but felt very happy with their hard work.`,
    storyArabic: `تذوق الطباخ الشاب الحساء وأومأ بابتسامة. قال لرئيس الطهاة: "هذا المذاق رائع، لذا كل شيء على ما يرام." عملا معاً في المطبخ المزدحم حتى وقت متأخر من الليل. كانا متعبين لكنهما شعرا بسعادة غامرة لعملهما الجاد.`,
    question: {
      question: "What did the young cook say after tasting the soup?",
      options: [
        `"This tastes great, so everything is okay,"`,
        `"We need to add more salt immediately,"`,
        `"The oven is not working properly,"`,
        `"The soup is too cold to serve,"`
      ],
      answerIndex: 0,
      explanation: "تذوق الطباخ الحساء وقال لرئيس الطهاة: (\"This tastes great, so everything is okay,\")."
    }
  }),

  // 15. fine
  fine: (w) => ({
    word: w,
    title: "A Doctor's Advice",
    titleArabic: "نصيحة الطبيب",
    storyEnglish: `The doctor checked the patient’s pulse and looked at his medical chart carefully. "Your health is fine, but you need to rest for a few days," the doctor advised. The patient felt a sense of relief and decided to take a short nap. He walked out of the clinic feeling much better than before.`,
    storyArabic: `فحص الطبيب نبض المريض ونظر إلى ملفه الطبي بعناية. نصح الطبيب قائلاً: "صحتك جيدة، لكنك تحتاج إلى الراحة لبضعة أيام." شعر المريض بالارتياح وقرر أن يأخذ قيلولة قصيرة. خرج من العيادة وهو يشعر بحال أفضل بكثير من ذي قبل.`,
    question: {
      question: "What advice did the doctor give to the patient?",
      options: [
        `"Your health is fine, but you need to rest for a few days,"`,
        `"You must stay at the hospital for a week,"`,
        `"You should start running ten miles daily,"`,
        `"Take these three different medicines now,"`
      ],
      answerIndex: 0,
      explanation: "طمأن الطبيب المريض قائلاً: (\"Your health is fine, but you need to rest for a few days,\")."
    }
  }),

  // 16. Mr / Mr.
  mr: (w) => ({
    word: w,
    title: "History Class",
    titleArabic: "درس التاريخ",
    storyEnglish: `The students were waiting quietly for their history teacher to enter the room. Mr. Miller walked in, holding a map and a pointer for the lesson. He greeted everyone with a firm nod and started writing the date on the board. The students opened their notebooks and focused on his words.`,
    storyArabic: `كان الطلاب ينتظرون بهدوء دخول معلم التاريخ إلى الغرفة. دخل السيد ميلر، وهو يحمل خريطة وعصا توضيحية للدرس. رحب بالجميع بإيماءة حازمة وبدأ بكتابة التاريخ على السبورة. فتح الطلاب دفاتر ملاحظاتهم وركزوا على كلماته.`,
    question: {
      question: "What did Mr. Miller hold when walking into the classroom?",
      options: [
        "A map and a pointer for the lesson",
        "A box of colorful chalk and markers",
        "A stack of graded examination papers",
        "A warm cup of tea"
      ],
      answerIndex: 0,
      explanation: "دخل السيد ميلر (Mr. Miller) حاملاً خريطة وعصا توضيحية لدرس التاريخ."
    }
  }),
  "mr.": (w) => ({
    word: w,
    title: "History Class",
    titleArabic: "درس التاريخ",
    storyEnglish: `The students were waiting quietly for their history teacher to enter the room. Mr. Miller walked in, holding a map and a pointer for the lesson. He greeted everyone with a firm nod and started writing the date on the board. The students opened their notebooks and focused on his words.`,
    storyArabic: `كان الطلاب ينتظرون بهدوء دخول معلم التاريخ إلى الغرفة. دخل السيد ميلر، وهو يحمل خريطة وعصا توضيحية للدرس. رحب بالجميع بإيماءة حازمة وبدأ بكتابة التاريخ على السبورة. فتح الطلاب دفاتر ملاحظاتهم وركزوا على كلماته.`,
    question: {
      question: "What did Mr. Miller hold when walking into the classroom?",
      options: [
        "A map and a pointer for the lesson",
        "A box of colorful chalk and markers",
        "A stack of graded examination papers",
        "A warm cup of tea"
      ],
      answerIndex: 0,
      explanation: "دخل السيد ميلر (Mr. Miller) حاملاً خريطة وعصا توضيحية لدرس التاريخ."
    }
  }),

  // 17. Mrs / Mrs.
  mrs: (w) => ({
    word: w,
    title: "Mrs. Jones's Garden",
    titleArabic: "حديقة السيدة جونز",
    storyEnglish: `The small garden was full of colorful flowers that needed watering every day. Mrs. Jones came out with her watering can to care for her plants. She spoke gently to the flowers as if they were her friends. Her garden was the most beautiful one in the whole neighborhood.`,
    storyArabic: `كانت الحديقة الصغيرة مليئة بالزهور الملونة التي تحتاج إلى السقي كل يوم. خرجت السيدة جونز ومعها مرش الماء الخاص بها للعناية بنباتاتها. تحدثت برفق إلى الزهور وكأنها صديقاتها. كانت حديقتها هي الأجمل في الحي بأكمله.`,
    question: {
      question: "What did Mrs. Jones do in her small garden?",
      options: [
        "Cared for her colorful flowers with a watering can",
        "Built a wooden fence around the house",
        "Harvested ripe red apples from the trees",
        "Painted the garden chairs white"
      ],
      answerIndex: 0,
      explanation: "اعتنت السيدة جونز (Mrs. Jones) بزهور حديقتها الجميلة ورعتها بمرش الماء."
    }
  }),
  "mrs.": (w) => ({
    word: w,
    title: "Mrs. Jones's Garden",
    titleArabic: "حديقة السيدة جونز",
    storyEnglish: `The small garden was full of colorful flowers that needed watering every day. Mrs. Jones came out with her watering can to care for her plants. She spoke gently to the flowers as if they were her friends. Her garden was the most beautiful one in the whole neighborhood.`,
    storyArabic: `كانت الحديقة الصغيرة مليئة بالزهور الملونة التي تحتاج إلى السقي كل يوم. خرجت السيدة جونز ومعها مرش الماء الخاص بها للعناية بنباتاتها. تحدثت برفق إلى الزهور وكأنها صديقاتها. كانت حديقتها هي الأجمل في الحي بأكمله.`,
    question: {
      question: "What did Mrs. Jones do in her small garden?",
      options: [
        "Cared for her colorful flowers with a watering can",
        "Built a wooden fence around the house",
        "Harvested ripe red apples from the trees",
        "Painted the garden chairs white"
      ],
      answerIndex: 0,
      explanation: "اعتنت السيدة جونز (Mrs. Jones) بزهور حديقتها الجميلة ورعتها بمرش الماء."
    }
  }),

  // 18. Ms / Ms.
  ms: (w) => ({
    word: w,
    title: "The Productive Meeting",
    titleArabic: "الاجتماع المثمر",
    storyEnglish: `The office meeting started on time, and Ms. Clara led the discussion clearly. She shared her ideas about the new project with the whole team. Everyone listened carefully and took notes on their laptops. Her clear instructions helped the team understand their tasks for the next month.`,
    storyArabic: `بدأ اجتماع المكتب في الوقت المحدد، وأدارت الآنسة كلارا النقاش بوضوح. شاركت أفكارها حول المشروع الجديد مع الفريق بأكمله. استمع الجميع بعناية ودونوا ملاحظات على حواسيبهم المحمولة. ساعدت تعليماتها الواضحة الفريق على فهم مهامهم للشهر القادم.`,
    question: {
      question: "What did Ms. Clara do during the office meeting?",
      options: [
        "Led the discussion clearly and shared project ideas",
        "Fixed the office projector and cables",
        "Ordered lunch for the whole company",
        "Wrote a personal letter at her desk"
      ],
      answerIndex: 0,
      explanation: "أدارت الآنسة كلارا (Ms. Clara) الاجتماع بوضوح وشاركت خطط المشروع."
    }
  }),
  "ms.": (w) => ({
    word: w,
    title: "The Productive Meeting",
    titleArabic: "الاجتماع المثمر",
    storyEnglish: `The office meeting started on time, and Ms. Clara led the discussion clearly. She shared her ideas about the new project with the whole team. Everyone listened carefully and took notes on their laptops. Her clear instructions helped the team understand their tasks for the next month.`,
    storyArabic: `بدأ اجتماع المكتب في الوقت المحدد، وأدارت الآنسة كلارا النقاش بوضوح. شاركت أفكارها حول المشروع الجديد مع الفريق بأكمله. استمع الجميع بعناية ودونوا ملاحظات على حواسيبهم المحمولة. ساعدت تعليماتها الواضحة الفريق على فهم مهامهم للشهر القادم.`,
    question: {
      question: "What did Ms. Clara do during the office meeting?",
      options: [
        "Led the discussion clearly and shared project ideas",
        "Fixed the office projector and cables",
        "Ordered lunch for the whole company",
        "Wrote a personal letter at her desk"
      ],
      answerIndex: 0,
      explanation: "أدارت الآنسة كلارا (Ms. Clara) الاجتماع بوضوح وشاركت خطط المشروع."
    }
  }),

  // 19. name
  name: (w) => ({
    word: w,
    title: "Rex the Puppy",
    titleArabic: "الجرو ريكس",
    storyEnglish: `The puppy ran toward the park, wagging its tail with excitement. Its owner called out, "Come back here, Rex!" The puppy stopped and looked back when it heard its name. They played for a long time until the sun started to go down behind the hills.`,
    storyArabic: `ركض الجرو نحو الحديقة، يهز ذيله بحماس. نادى صاحبه: "عد إلى هنا، يا ريكس!" توقف الجرو ونظر إلى الوراء عندما سمع اسمه. لعبا لفترة طويلة حتى بدأت الشمس تغيب خلف التلال.`,
    question: {
      question: "What made the puppy stop and look back?",
      options: [
        "Hearing its owner call its name",
        "Seeing another dog in the park",
        "Finding a red rubber ball",
        "Hearing loud car horns"
      ],
      answerIndex: 0,
      explanation: "توقف الجرو ونظر إلى الوراء عندما سمع اسمه (name) ينادى به صاحبه."
    }
  }),

  // 20. friend
  friend: (w) => ({
    word: w,
    title: "A Special Birthday",
    titleArabic: "عيد ميلاد مميز",
    storyEnglish: `Ali wanted to celebrate his birthday. A good friend came to his house with a gift. They baked a chocolate cake together and decorated it with candles. They laughed and played video games until the evening. A kind friend made the birthday truly special.`,
    storyArabic: `أراد علي الاحتفال بعيد ميلاده. جاء صديق عزيز إلى منزله ومعه هدية. قاما بخبز كعكة الشوكولاتة معًا وزيناها بالشموع. ضحكا ولعبا ألعاب الفيديو حتى المساء. صديق لطيف جعل عيد الميلاد مميزًا حقًا.`,
    question: {
      question: "How did Ali celebrate his birthday with his friend?",
      options: [
        "Baked a chocolate cake and played video games together",
        "Went to an amusement park in the morning",
        "Traveled to another city by train",
        "Watched a movie at the cinema"
      ],
      answerIndex: 0,
      explanation: "احتفل علي مع صديقه (friend) بخبز الكعكة ولعب ألعاب الفيديو معاً."
    }
  }),

  // 21. woman
  woman: (w) => ({
    word: w,
    title: "Morning Bakery Treat",
    titleArabic: "متعة المخبز الصباحية",
    storyEnglish: `A young woman walked into the bakery to buy some fresh bread for breakfast. She chose a loaf of warm bread and smiled at the baker. The bakery smelled delicious, like cinnamon and sugar. She paid for the bread and left, feeling happy about her morning treat.`,
    storyArabic: `دخلت امرأة شابة إلى المخبز لشراء بعض الخبز الطازج للإفطار. اختارت رغيفاً من الخبز الدافئ وابتسمت للخباز. كانت رائحة المخبز لذيذة، مثل القرفة والسكر. دفعت ثمن الخبز وغادرت، وهي تشعر بالسعادة بشأن متعتها الصباحية.`,
    question: {
      question: "What did the young woman buy at the bakery?",
      options: [
        "A loaf of warm fresh bread",
        "A box of strawberry ice cream",
        "A cup of hot black coffee",
        "A bag of roasted nuts"
      ],
      answerIndex: 0,
      explanation: "اشترت المرأة الشابة رغيفاً من الخبز الدافئ للإفطار من المخبز."
    }
  }),

  // 22. boy
  boy: (w) => ({
    word: w,
    title: "The Pilot's Dream",
    titleArabic: "حلم الطيار",
    storyEnglish: `A little boy played with his toy airplane in the backyard. He made engine sounds as he ran around the green trees. His mother watched from the window and smiled at his imagination. He dreamed of being a real pilot when he grew up one day.`,
    storyArabic: `لعب صبي صغير بطائرته اللعبة في الفناء الخلفي. كان يصدر أصوات محرك بينما كان يركض حول الأشجار الخضراء. راقبته والدته من النافذة وابتسمت لخياله. كان يحلم بأن يصبح طياراً حقيقياً عندما يكبر يوماً ما.`,
    question: {
      question: "What did the little boy dream of becoming when he grew up?",
      options: [
        "A real pilot flying airplanes",
        "A captain sailing ships",
        "A chef in a restaurant",
        "A train conductor"
      ],
      answerIndex: 0,
      explanation: "حلم الصبي الصغير بأن يصبح طياراً حقيقياً عندما يكبر."
    }
  }),

  // 23. girl
  girl: (w) => ({
    word: w,
    title: "The Astronomer Girl",
    titleArabic: "الفتاة عالمة الفلك",
    storyEnglish: `A curious girl looked through her telescope at the night sky. She wanted to find the moon and the bright stars. Her father helped her adjust the focus so she could see better. She was amazed by the view and felt like an astronomer tonight.`,
    storyArabic: `نظرت فتاة فضولية من خلال تلسكوبها إلى سماء الليل. أرادت العثور على القمر والنجوم الساطعة. ساعدها والدها في ضبط التركيز حتى تتمكن من الرؤية بشكل أفضل. كانت مذهولة بالمنظر وشعرت وكأنها عالمة فلك الليلة.`,
    question: {
      question: "What did the curious girl look at through her telescope?",
      options: [
        "The moon and bright stars in the night sky",
        "The ships in the ocean harbor",
        "The birds in the tall trees",
        "The cars on the distant highway"
      ],
      answerIndex: 0,
      explanation: "نظرت الفتاة الفضولية من خلال التلسكوب إلى القمر والنجوم الساطعة في السماء."
    }
  }),

  // 24. child
  child: (w) => ({
    word: w,
    title: "A Day at the Zoo",
    titleArabic: "يوم في حديقة الحيوان",
    storyEnglish: `The small child held his mother’s hand as they walked through the zoo. He looked at the tall giraffes and the sleeping lions with big eyes. Everything was new and exciting for him today. He pointed at a colorful bird and laughed with pure joy.`,
    storyArabic: `أمسك الطفل الصغير بيد والدته وهما يسيران عبر حديقة الحيوان. نظر إلى الزرافات الطويلة والأسود النائمة بعيون واسعة. كان كل شيء جديداً ومثيراً له اليوم. أشار إلى طائر ملون وضحك بفرح خالص.`,
    question: {
      question: "What made the small child laugh with pure joy at the zoo?",
      options: [
        "Pointing at a colorful bird",
        "Eating a strawberry ice cream",
        "Riding on a small train",
        "Watching the zoo gates open"
      ],
      answerIndex: 0,
      explanation: "ضحك الطفل الصغير بفرح خالص عندما أشار إلى طائر ملون في حديقة الحيوان."
    }
  }),

  // 25. baby
  baby: (w) => ({
    word: w,
    title: "The Sweet Baby",
    titleArabic: "الرضيع اللطيف",
    storyEnglish: `The baby sat on the soft carpet and tried to reach for his favorite toy. He made little sounds and wiggled his toes in excitement. His older sister laughed as she watched him play. It was a sweet moment for the whole family in the living room.`,
    storyArabic: `جلس الرضيع على السجاد الناعم وحاول الوصول إلى لعبته المفضلة. أصدر أصواتاً صغيرة وحرك أصابع قدميه بحماس. ضحكت أخته الكبرى وهي تراقبه يلعب. كانت لحظة لطيفة للعائلة بأكملها في غرفة المعيشة.`,
    question: {
      question: "What was the baby trying to do on the soft carpet?",
      options: [
        "Reach for his favorite toy",
        "Crawl out into the sunny garden",
        "Drink from a small cup of milk",
        "Sleep under a warm blanket"
      ],
      answerIndex: 0,
      explanation: "جلس الرضيع على السجاد الناعم محاولاً الوصول إلى لعبته المفضلة بحماس."
    }
  }),

  // 26. Who
  who: (w) => ({
    word: w,
    title: "The Missing Book",
    titleArabic: "الكتاب المفقود",
    storyEnglish: `The librarian looked at the book left on the table by mistake. "Who left this beautiful book here?" she asked the students in the room. A quiet boy raised his hand and said it was his. She returned the book to him and asked him to keep it safe.`,
    storyArabic: `نظرت أمينة المكتبة إلى الكتاب المتروك على الطاولة عن طريق الخطأ. سألت الطلاب في الغرفة: "مَن ترك هذا الكتاب الجميل هنا؟" رفع صبي هادئ يده وقال إنه له. أعادت الكتاب إليه وطلبت منه الحفاظ عليه.`,
    question: {
      question: "What question did the librarian ask the students?",
      options: [
        `"Who left this beautiful book here?"`,
        `"When is the library closing today?"`,
        `"Where are the science magazines?"`,
        `"Why are you reading so quietly?"`
      ],
      answerIndex: 0,
      explanation: `سألت أمينة المكتبة الطلاب: "مَن ترك هذا الكتاب الجميل هنا؟" (Who left this beautiful book here?).`
    }
  }),

  // 27. What
  what: (w) => ({
    word: w,
    title: "Science Experiment",
    titleArabic: "تجربة العلوم",
    storyEnglish: `The students gathered around the science project on the laboratory table. "What happens when we mix these two colors?" one student asked. They watched carefully as the liquid turned from blue to bright green. It was a fun experiment that taught them a new lesson.`,
    storyArabic: `تجمع الطلاب حول مشروع العلوم على طاولة المختبر. سأل طالب: "ماذا يحدث عندما نخلط هذين اللونين؟" راقبوا بعناية بينما تحول السائل من الأزرق إلى الأخضر الساطع. كانت تجربة ممتعة علمتهم درساً جديداً.`,
    question: {
      question: "What did the student ask during the science project?",
      options: [
        `"What happens when we mix these two colors?"`,
        `"Where did the teacher put the glassware?"`,
        `"Who wants to clean the laboratory table?"`,
        `"How much time is left in the class?"`
      ],
      answerIndex: 0,
      explanation: `سأل الطالب في تجربة العلوم: "ماذا يحدث عندما نخلط هذين اللونين؟" (What happens when we mix these two colors?).`
    }
  }),

  // 28. How
  how: (w) => ({
    word: w,
    title: "Fixing the Bicycle",
    titleArabic: "إصلاح الدراجة",
    storyEnglish: `The mechanic looked at the broken bicycle and thought about the problem. "How did this part break?" he asked the young owner. The boy explained that he hit a rock on the path. The mechanic started to repair it with his tools, working very carefully.`,
    storyArabic: `نظر الميكانيكي إلى الدراجة المكسورة وفكر في المشكلة. سأل المالك الشاب: "كيف انكسر هذا الجزء؟" شرح الصبي أنه اصطدم بصخرة على الطريق. بدأ الميكانيكي في إصلاحها بأدواته، وهو يعمل بحذر شديد.`,
    question: {
      question: "What did the mechanic ask the young bicycle owner?",
      options: [
        `"How did this part break?"`,
        `"Where did you buy this bicycle?"`,
        `"Who taught you how to ride?"`,
        `"Why are you late to the repair shop?"`
      ],
      answerIndex: 0,
      explanation: `سأل الميكانيكي صاحب الدراجة: "كيف انكسر هذا الجزء؟" (How did this part break?).`
    }
  }),

  // 29. Why
  why: (w) => ({
    word: w,
    title: "Retrieving the Ball",
    titleArabic: "استعادة الكرة",
    storyEnglish: `The little boy was sad because his favorite ball rolled under the sofa. "Why is it so hard to reach?" he asked his big brother. His brother reached under the furniture and pulled the ball out. The boy smiled again and ran to continue playing his game.`,
    storyArabic: `كان الصبي الصغير حزيناً لأن كرته المفضلة تدحرجت تحت الأريكة. سأل أخاه الأكبر: "لماذا يصعب الوصول إليها؟" مد أخوه يده تحت الأثاث وأخرج الكرة. ابتسم الصبي مرة أخرى وركض لمواصلة لعبته.`,
    question: {
      question: "What did the little boy ask his big brother?",
      options: [
        `"Why is it so hard to reach?"`,
        `"Where is our mother cooking lunch?"`,
        `"When can we go outside to the park?"`,
        `"Who bought this new rubber ball?"`
      ],
      answerIndex: 0,
      explanation: `سأل الصبي أخاه الأكبر: "لماذا يصعب الوصول إليها؟" (Why is it so hard to reach?).`
    }
  }),

  // 30. Where
  where: (w) => ({
    word: w,
    title: "Asking for Directions",
    titleArabic: "طلب الاتجاهات",
    storyEnglish: `The tourist stopped at the corner and looked around the busy plaza. "Where can I find a taxi to the airport?" he asked a local person. The person pointed to a line of yellow cars waiting nearby. The tourist thanked him and walked quickly to catch a ride.`,
    storyArabic: `توقف السائح عند الزاوية ونظر حول الساحة المزدحمة. سأل شخصاً محلياً: "أين يمكنني العثور على سيارة أجرة إلى المطار؟" أشار الشخص إلى صف من السيارات الصفراء التي تنتظر بالقرب منه. شكره السائح وسار بسرعة للحصول على توصيلة.`,
    question: {
      question: "What did the tourist ask the local person?",
      options: [
        `"Where can I find a taxi to the airport?"`,
        `"How much is a ticket for the train?"`,
        `"Who built this central fountain?"`,
        `"Why are the shops closed today?"`
      ],
      answerIndex: 0,
      explanation: `سأل السائح: "أين يمكنني العثور على سيارة أجرة إلى المطار؟" (Where can I find a taxi to the airport?).`
    }
  }),

  // 31. age
  age: (w) => ({
    word: w,
    title: "First Day of School",
    titleArabic: "اليوم الأول في المدرسة",
    storyEnglish: `The teacher asked the students to write down their names and their age on the paper. A young boy carefully wrote his numbers on the page. He was proud to be seven years old and going to school. The teacher collected the papers and started the first lesson.`,
    storyArabic: `طلبت المعلمة من الطلاب كتابة أسمائهم وأعمارهم على الورقة. كتب صبي صغير أرقامه بعناية على الصفحة. كان فخوراً بكونه في السابعة من عمره ويذهب إلى المدرسة. جمعت المعلمة الأوراق وبدأت الدرس الأول.`,
    question: {
      question: "What did the teacher ask the students to write on the paper?",
      options: [
        "Their names and their age",
        "Their favorite sports and hobbies",
        "Their home telephone numbers",
        "Their favorite colors and foods"
      ],
      answerIndex: 0,
      explanation: "طلبت المعلمة من الطلاب كتابة أسمائهم وأعمارهم (age) على الورقة في اليوم الأول."
    }
  }),

  // 32. address
  address: (w) => ({
    word: w,
    title: "The Delivery Challenge",
    titleArabic: "تحدي التوصيل",
    storyEnglish: `The delivery driver looked at the package, but he could not find the house number. He stopped the car and checked the address written on the box once more. A neighbor pointed to the correct house on the corner. The driver thanked him and finally delivered the mail.`,
    storyArabic: `نظر سائق التوصيل إلى الطرد، لكنه لم يستطع العثور على رقم المنزل. أوقف السيارة وتحقق من العنوان المكتوب على الصندوق مرة أخرى. أشار جار إلى المنزل الصحيح الموجود في الزاوية. شكره السائق وقام أخيراً بتسليم البريد.`,
    question: {
      question: "What did the delivery driver check once more on the box?",
      options: [
        "The address written on the box",
        "The weight and price of the package",
        "The customer's signature card",
        "The postal delivery barcode only"
      ],
      answerIndex: 0,
      explanation: "تحقق سائق التوصيل من العنوان (address) المكتوب على الصندوق بدقة لتسليم الطرد."
    }
  }),

  // 33. Sir
  sir: (w) => ({
    word: w,
    title: "Asking the Officer",
    titleArabic: "سؤال الضابط",
    storyEnglish: `The police officer stood in the middle of the busy street, helping cars pass safely. A driver stopped his car and rolled down the window. "Excuse me, Sir, is this the way to the train station?" he asked. The officer pointed the right direction and waved him forward.`,
    storyArabic: `وقف ضابط الشرطة في وسط الشارع المزدحم، يساعد السيارات على المرور بأمان. أوقف سائق سيارته وأخفض النافذة. سأل: "عفواً يا سيدي، هل هذا هو الطريق إلى محطة القطار؟" أشار الضابط إلى الاتجاه الصحيح ولوح له بالمضي قدماً.`,
    question: {
      question: "What did the driver say to the police officer?",
      options: [
        `"Excuse me, Sir, is this the way to the train station?"`,
        `"Sir, can I park my car here on the sidewalk?"`,
        `"Sir, what is the speed limit on this road?"`,
        `"Sir, where can I buy gasoline nearby?"`
      ],
      answerIndex: 0,
      explanation: `سأل السائق ضابط الشرطة بأدب: "عفواً يا سيدي، هل هذا هو الطريق إلى محطة القطار؟" (Excuse me, Sir, is this the way to the train station?).`
    }
  }),

  // 34. lady
  lady: (w) => ({
    word: w,
    title: "The Elegant Visitor",
    titleArabic: "الزائرة الأنيقة",
    storyEnglish: `An elegant lady sat in the library, reading a thick book about history. She wore a bright hat and turned the pages very slowly. The librarian watched her with interest and wondered about her story. She looked like a traveler who had seen many places in the world.`,
    storyArabic: `جلست سيدة أنيقة في المكتبة، تقرأ كتاباً سميكاً عن التاريخ. كانت ترتدي قبعة زاهية وتقلب الصفحات ببطء شديد. راقبتها أمينة المكتبة باهتمام وتساءلت عن قصتها. بدت كمسافرة رأت العديد من الأماكن في العالم.`,
    question: {
      question: "What was the elegant lady doing in the library?",
      options: [
        "Reading a thick book about history",
        "Borrowing five science books",
        "Writing a letter to her family",
        "Searching for a misplaced newspaper"
      ],
      answerIndex: 0,
      explanation: "جلست السيدة الأنيقة (lady) في المكتبة تقرأ كتاباً سميكاً عن التاريخ باهتمام."
    }
  }),

  // 35. gentleman
  gentleman: (w) => ({
    word: w,
    title: "A True Gentleman",
    titleArabic: "رجل نبيل حقيقي",
    storyEnglish: `An elderly gentleman held the heavy door open for a lady carrying many shopping bags. He smiled and waited patiently until she walked through. "Thank you so much," she said with a grateful nod. He was a true gentleman who always helped others in his daily life.`,
    storyArabic: `أمسك رجل مسن بباب ثقيل مفتوحاً لسيدة تحمل العديد من حقائب التسوق. ابتسم وانتظر بصبر حتى مرت. قالت بإيماءة ممتنة: "شكراً جزيلاً لك." كان رجلاً نبيلاً حقيقياً يساعد الآخرين دائماً في حياته اليومية.`,
    question: {
      question: "How did the elderly gentleman help the lady?",
      options: [
        "Held the heavy door open for her patiently",
        "Carried all her shopping bags to her car",
        "Called a taxi for her outside the shop",
        "Offered her his umbrella in the rain"
      ],
      answerIndex: 0,
      explanation: "أمسك الرجل النبيل (gentleman) الباب الثقيل مفتوحاً لمساعدة السيدة بلطف."
    }
  }),

  // 36. family
  family: (w) => ({
    word: w,
    title: "Summer Celebration",
    titleArabic: "احتفال الصيف",
    storyEnglish: `The entire family gathered in the large garden for a summer celebration. They brought delicious food, played music, and laughed together under the bright sun. Everyone felt lucky to spend this special time with people they love. It was a beautiful day that brought them all closer.`,
    storyArabic: `تجمعت العائلة بأكملها في الحديقة الكبيرة للاحتفال بفصل الصيف. أحضروا طعاماً لذيذاً، وعزفوا الموسيقى، وضحكوا معاً تحت أشعة الشمس المشرقة. شعر الجميع بأنهم محظوظون لقضاء هذا الوقت الخاص مع الأشخاص الذين يحبونهم. كان يوماً جميلاً قربهم من بعضهم البعض.`,
    question: {
      question: "Where did the family gather for their summer celebration?",
      options: [
        "In the large garden under the bright sun",
        "At a crowded indoor restaurant",
        "In a conference room at work",
        "At a noisy downtown shopping mall"
      ],
      answerIndex: 0,
      explanation: "تجمعت العائلة (family) بأكملها في الحديقة الكبيرة للاحتفال بيوم صيفي جميل."
    }
  }),

  // 37. father
  father: (w) => ({
    word: w,
    title: "Building Together",
    titleArabic: "البناء معاً",
    storyEnglish: `A patient father sat on the floor, helping his young child build a tall tower with wooden blocks. He watched with pride as his child learned to balance the pieces carefully. They spent the whole afternoon playing and dreaming of big buildings. It was a peaceful moment they would both remember.`,
    storyArabic: `جلس أب صبور على الأرض، يساعد طفله الصغير في بناء برج طويل من المكعبات الخشبية. راقب بفخر طفله وهو يتعلم موازنة القطع بعناية. قضيا فترة بعد الظهر بأكملها في اللعب والحلم بمبانٍ كبيرة. كانت لحظة هادئة سيتذكرها كلاهما.`,
    question: {
      question: "What were the father and his child building together?",
      options: [
        "A tall tower with wooden blocks",
        "A toy airplane out of paper",
        "A wooden treehouse in the yard",
        "A large sandcastle on the beach"
      ],
      answerIndex: 0,
      explanation: "ساعد الأب (father) الصبور طفله في بناء برج طويل من المكعبات الخشبية."
    }
  }),

  // 38. mother
  mother: (w) => ({
    word: w,
    title: "A Mother's Love",
    titleArabic: "حب الأم",
    storyEnglish: `The gentle mother sang a soft song while rocking her baby to sleep in the quiet room. She looked down with a warm smile, feeling a deep sense of love in her heart. The room was dim, and the house was perfectly still for the night. Everything felt safe and calm in her loving arms.`,
    storyArabic: `غنت اُم لطيفة أغنية هادئة بينما كانت تهز طفلها لينام في الغرفة الهادئة. نظرت إلى الأسفل بابتسامة دافئة، وشعرت بحب عميق في قلبها. كانت الغرفة خافتة، والمنزل ساكناً تماماً في تلك الليلة. شعر الجميع بالأمان والهدوء في أحضانها المحبة.`,
    question: {
      question: "What did the gentle mother do to help her baby sleep?",
      options: [
        "Sang a soft song while rocking her baby",
        "Read a long storybook from the shelf",
        "Played classical music on the radio",
        "Walked in the cool garden air"
      ],
      answerIndex: 0,
      explanation: "غنت الأم (mother) اللطيفة أغنية هادئة وهزت طفلها لينام في أمان وهدوء."
    }
  }),

  // 39. Dad
  dad: (w) => ({
    word: w,
    title: "Dad's Help",
    titleArabic: "مساعدة الأب",
    storyEnglish: `Dad finished working on the broken bicycle in the garage late in the evening. He wiped the grease from his hands and looked at his work with satisfaction. His children ran in, excited to see the bicycle fixed and ready to ride. He laughed and told them to be very careful outside.`,
    storyArabic: `أنهى أبي العمل على الدراجة المكسورة في المرآب في وقت متأخر من المساء. مسح الشحوم عن يديه ونظر إلى عمله برضا. ركض أطفاله إلى الداخل، متحمسين لرؤية الدراجة مصلحة وجاهزة للركوب. ضحك وأخبرهم أن يكونوا حذرين جداً في الخارج.`,
    question: {
      question: "What did Dad repair in the garage?",
      options: [
        "The broken bicycle for his children",
        "A wooden dining room chair",
        "The engine of his old family car",
        "The garage wooden door lock"
      ],
      answerIndex: 0,
      explanation: "أصلح الأب (Dad) الدراجة المكسورة في المرآب وسعد أطفاله بركوبها."
    }
  }),

  // 40. Mom
  mom: (w) => ({
    word: w,
    title: "Sunny Lunch",
    titleArabic: "غداء مشمس",
    storyEnglish: `Mom prepared a delicious lunch for everyone in the kitchen on a sunny Sunday. She called out to the family to come and eat while the food was still warm. The table was full of healthy vegetables and fresh bread that everyone loved. It was a wonderful meal shared with joy.`,
    storyArabic: `جهزت أمي غداءً لذيذاً للجميع في المطبخ في يوم أحد مشمس. نادت العائلة لتأتي وتأكل بينما كان الطعام لا يزال دافئاً. كانت الطاولة مليئة بالخضروات الصحية والخبز الطازج الذي أحبه الجميع. كانت وجبة رائعة تم تقاسمها بفرح.`,
    question: {
      question: "What did Mom prepare for the family on Sunday?",
      options: [
        "A delicious lunch with vegetables and fresh bread",
        "A chocolate birthday cake for dessert",
        "A cold picnic basket for the beach",
        "A hot pot of evening tea"
      ],
      answerIndex: 0,
      explanation: "جهزت الأم (Mom) غداءً لذيذاً وصحياً للعائلة في يوم أحد مشمس."
    }
  }),

  // 41. brother
  brother: (w) => ({
    word: w,
    title: "Melodic Afternoon",
    titleArabic: "فترة بعد ظهر لحنية",
    storyEnglish: `The young brother practiced his guitar in his bedroom while his sister listened at the door. He played a new song he learned and felt quite proud of his progress. The brother smiled as he shared his music with his sister today. It was a melodic afternoon for them.`,
    storyArabic: `تدرب الأخ الصغير على جيتاره في غرفة نومه بينما كانت أخته تستمع عند الباب. عزف أغنية جديدة تعلمها وشعر بالفخر بتقدمه. ابتسم الأخ وهو يشارك أخته موسيقاه اليوم. كانت فترة بعد ظهر لحنية بالنسبة لهما.`,
    question: {
      question: "What musical instrument did the young brother practice?",
      options: [
        "His guitar in his bedroom",
        "A black grand piano",
        "A silver flute by the window",
        "A set of wooden drums"
      ],
      answerIndex: 0,
      explanation: "تدرب الأخ (brother) الصغير على جيتاره في غرفة نومه بفخر ومشاركة جميلة مع أخته."
    }
  }),

  // 42. sister
  sister: (w) => ({
    word: w,
    title: "Sisterly Kindness",
    titleArabic: "لطف أختي",
    storyEnglish: `The sister decided to bake cookies for her family as a surprise for the weekend. She carefully mixed the flour and sugar while listening to her favorite radio station. Her sisterly kindness made everyone smile when they tasted the sweet treat. The house smelled like delicious vanilla and sugar.`,
    storyArabic: `قررت الأخت خبز البسكويت لعائلتها كمفاجأة لعطلة نهاية الأسبوع. خلطت الدقيق والسكر بعناية بينما كانت تستمع إلى محطة الراديو المفضلة لديها. جعل لطفها الأخوي الجميع يبتسمون عندما تذوقوا الحلوى. كانت رائحة المنزل تفوح بالفانيليا والسكر اللذيذ.`,
    question: {
      question: "What did the sister bake for her family as a surprise?",
      options: [
        "Cookies with flour and sugar",
        "A birthday chocolate cake",
        "A fruit salad",
        "Pancakes with honey"
      ],
      answerIndex: 0,
      explanation: "خبزت الأخت (sister) البسكويت اللذيذ لعائلتها كمفاجأة لعطلة نهاية الأسبوع."
    }
  }),

  // 43. son
  son: (w) => ({
    word: w,
    title: "A Proud Achievement",
    titleArabic: "إنجاز فخور",
    storyEnglish: `A proud son walked across the stage at his graduation ceremony to receive his diploma. His parents sat in the audience, cheering loudly and taking photos of the important moment. He smiled at them, knowing that their support helped him reach this goal. It was a day of pure achievement.`,
    storyArabic: `سار ابن فخور عبر المسرح في حفل تخرجه لاستلام شهادته. جلس والداه بين الجمهور، يهتفون بصوت عالٍ ويلتقطون صوراً لهذه اللحظة المهمة. ابتسم لهما، عالماً بأن دعمهما ساعده في الوصول إلى هذا الهدف. كان يوماً من الإنجاز الخالص.`,
    question: {
      question: "Why was the son walking across the stage?",
      options: [
        "To receive his graduation diploma",
        "To give a welcome speech",
        "To play the violin",
        "To receive a sports trophy"
      ],
      answerIndex: 0,
      explanation: "سار الابن (son) عبر المسرح في حفل تخرجه لاستلام شهادته وسط فخر والديه."
    }
  }),

  // 44. daughter
  daughter: (w) => ({
    word: w,
    title: "The Artist Daughter",
    titleArabic: "الابنة الفنانة",
    storyEnglish: `The artistic daughter painted a beautiful picture of the ocean as a gift for her parents. She used bright blue and green colors to make the waves look real and lively. Her parents were amazed by her talent when they saw the finished painting. She felt very happy with their praise.`,
    storyArabic: `رسمت الابنة الموهوبة صورة جميلة للمحيط كهدية لوالديها. استخدمت ألواناً زرقاء وخضراء زاهية لجعل الأمواج تبدو حقيقية ونابضة بالحياة. ذُهل والداها بموهبتها عندما رأيا اللوحة المكتملة. شعرت بسعادة غامرة بمدحهما.`,
    question: {
      question: "What did the artistic daughter paint for her parents?",
      options: [
        "A beautiful picture of the ocean with waves",
        "A portrait of her grandmother",
        "A landscape of snow mountains",
        "A bowl of colorful fruits"
      ],
      answerIndex: 0,
      explanation: "رسمت الابنة (daughter) الموهوبة لوحة جميلة للمحيط كهدية لوالديها."
    }
  }),

  // 45. parent
  parent: (w) => ({
    word: w,
    title: "A Beautiful Journey",
    titleArabic: "رحلة جميلة",
    storyEnglish: `Every parent wants to see their children grow up to be happy and healthy people. They work hard every day to provide a good home and plenty of love. Watching their children learn and play is the best reward for all their time. It is a long but beautiful journey.`,
    storyArabic: `يريد كل أب وأم أن يرى أطفالهما يكبرون ليصبحوا أشخاصاً سعداء وأصحاء. يعملون بجد كل يوم لتوفير منزل جيد والكثير من الحب. مشاهدة أطفالهم وهم يتعلمون ويلعبون هي أفضل مكافأة لكل وقتهم. إنها رحلة طويلة لكنها جميلة.`,
    question: {
      question: "What does every parent want for their children?",
      options: [
        "To grow up to be happy and healthy people",
        "To travel to space",
        "To win every sports race",
        "To work in the family business only"
      ],
      answerIndex: 0,
      explanation: "يريد كل أب أو أم (parent) أن يرى أطفاله يكبرون ليصبحوا أشخاصاً سعداء وأصحاء."
    }
  }),

  // 46. parents
  parents: (w) => ({
    word: w,
    title: "Mountain Getaway",
    titleArabic: "رحلة الجبل",
    storyEnglish: `The parents planned a exciting weekend trip to the mountains for the whole family. They packed warm clothes and delicious snacks for the long car ride. Everyone was excited to hike in the fresh air and see the tall trees. It was a great break from their busy daily routines.`,
    storyArabic: `خطط الوالدان لرحلة نهاية أسبوع مثيرة إلى الجبال للعائلة بأكملها. قاما بحزم ملابس دافئة ووجبات خفيفة لذيذة لرحلة السيارة الطويلة. كان الجميع متحمساً للتنزه في الهواء الطلق ورؤية الأشجار العالية. كانت استراحة رائعة من روتينهم اليومي المزدحم.`,
    question: {
      question: "Where did the parents plan a weekend trip for the family?",
      options: [
        "To the mountains for hiking in the fresh air",
        "To a sunny beach resort",
        "To an amusement theme park",
        "To a distant foreign country"
      ],
      answerIndex: 0,
      explanation: "خطط الوالدان (parents) لرحلة نهاية أسبوع ممتعة إلى الجبال للعائلة."
    }
  }),

  // 47. Grandfather
  grandfather: (w) => ({
    word: w,
    title: "The Storyteller",
    titleArabic: "راوي القصص",
    storyEnglish: `The wise grandfather sat in his favorite chair, telling old stories to his curious grandchildren. He spoke about his life when he was a young man in a different city. They listened with great interest to every word he said about the past. He was the family's favorite storyteller.`,
    storyArabic: `جلس الجد الحكيم على كرسيه المفضل، يروي قصصاً قديمة لأحفاده الفضوليين. تحدث عن حياته عندما كان شاباً في مدينة مختلفة. استمعوا باهتمام كبير لكل كلمة قالها عن الماضي. كان هو راوي القصص المفضل لدى العائلة.`,
    question: {
      question: "What did the wise grandfather do for his grandchildren?",
      options: [
        "Told old stories about his past life",
        "Bought them new video games",
        "Taught them how to drive a car",
        "Cooked dinner in the kitchen"
      ],
      answerIndex: 0,
      explanation: "جلس الجد (grandfather) الحكيم يروي قصصاً قديمة وشيقة لأحفاده."
    }
  }),

  // 48. Grandmother
  grandmother: (w) => ({
    word: w,
    title: "Baking Together",
    titleArabic: "الخبز معاً",
    storyEnglish: `The kind grandmother taught her granddaughter how to make traditional bread in her small kitchen. She showed her how to knead the dough with gentle hands and patience. They worked for hours until the bread was perfect and ready to bake. It was a wonderful way to connect.`,
    storyArabic: `علمت الجدة اللطيفة حفيدتها كيفية صنع الخبز التقليدي في مطبخها الصغير. أرتها كيفية عجن العجين بأيدٍ لطيفة وصبر. عملا لساعات حتى أصبح الخبز مثالياً وجاهزاً للخبز. كانت طريقة رائعة للتواصل.`,
    question: {
      question: "What did the kind grandmother teach her granddaughter?",
      options: [
        "How to make traditional bread and knead dough",
        "How to knit a woolen sweater",
        "How to plant roses in the garden",
        "How to paint watercolors"
      ],
      answerIndex: 0,
      explanation: "علمت الجدة (grandmother) حفيدتها كيفية عجن وصنع الخبز التقليدي بصبر وإتقان."
    }
  }),

  // 49. Grandparent
  grandparent: (w) => ({
    word: w,
    title: "Holiday Bonds",
    titleArabic: "روابط العطلات",
    storyEnglish: `Every grandparent enjoys spending time with their family during the holidays. They bring special gifts and share wonderful memories that make everyone laugh. Their presence makes the house feel warm and full of love. It is a special time that strengthens the bonds of the whole family.`,
    storyArabic: `يستمتع كل جد وجدة بقضاء الوقت مع عائلتهم خلال العطلات. يحضرون هدايا خاصة ويشاركون ذكريات رائعة تجعل الجميع يضحكون. حضورهم يجعل المنزل يبدو دافئاً ومليئاً بالحب. إنه وقت خاص يعزز روابط العائلة بأكملها.`,
    question: {
      question: "Why is spending time with a grandparent special during holidays?",
      options: [
        "It brings wonderful memories and strengthens family bonds",
        "It allows everyone to watch television all day",
        "It means there are no daily chores",
        "It is only about opening large boxes"
      ],
      answerIndex: 0,
      explanation: "إن قضاء الوقت مع الجد أو الجدة (grandparent) في العطلات يعزز الروابط العائلية بالحب والذكريات الجميلة."
    }
  }),

  // 50. husband
  husband: (w) => ({
    word: w,
    title: "Anniversary Surprise",
    titleArabic: "مفاجأة الذكرى",
    storyEnglish: `The loving husband surprised his wife with a bouquet of fresh flowers on their anniversary. He wanted to show her how much he appreciated everything she did for the family. She smiled widely and thanked him for his kindness. It was a simple gesture that meant a lot to her.`,
    storyArabic: `فاجأ الزوج المحب زوجته بباقة من الزهور الطازجة في ذكرى زواجهما. أراد أن يظهر لها مدى تقديره لكل ما فعلته من أجل العائلة. ابتسمت ابتسامة عريضة وشكرته على لطفه. كانت لفتة بسيطة تعني لها الكثير.`,
    question: {
      question: "What gift did the loving husband give his wife on their anniversary?",
      options: [
        "A bouquet of fresh flowers",
        "A diamond ring",
        "A flight ticket to Paris",
        "A new cookbook"
      ],
      answerIndex: 0,
      explanation: "فاجأ الزوج (husband) زوجته بباقة من الزهور الطازجة في ذكرى زواجهما تعبيراً عن امتنانه."
    }
  }),

  // 51. wife
  wife: (w) => ({
    word: w,
    title: "Birthday Celebration",
    titleArabic: "الاحتفال بعيد الميلاد",
    storyEnglish: `The wife organized a surprise birthday party for her husband in their cozy living room. She invited all their friends and prepared a delicious dinner for the evening. When her husband walked through the door, he was very surprised and happy. It was a night full of laughter.`,
    storyArabic: `نظمت الزوجة حفلة عيد ميلاد مفاجئة لزوجها في غرفة معيشتهم المريحة. دعت جميع أصدقائهم وأعدت عشاءً لذيذاً للأمسية. عندما دخل زوجها من الباب، تفاجأ جداً وكان سعيداً. كانت ليلة مليئة بالضحك.`,
    question: {
      question: "What did the wife organize for her husband in their living room?",
      options: [
        "A surprise birthday party with friends and dinner",
        "A quiet movie night with popcorn",
        "A board game tournament",
        "A family music rehearsal"
      ],
      answerIndex: 0,
      explanation: "نظمت الزوجة (wife) حفلة عيد ميلاد مفاجئة لزوجها ودعت الأصدقاء وأعدت عشاءً لذيذاً."
    }
  }),

  // 52. uncle
  uncle: (w) => ({
    word: w,
    title: "The Magic Uncle",
    titleArabic: "العم الساحر",
    storyEnglish: `The funny uncle always brings magic tricks to perform for his nephews and nieces. They wait eagerly for his visits because they know they will have a lot of fun. He makes everyone laugh with his clever jokes and kind heart. He is a truly special part of the family.`,
    storyArabic: `يأتي العم المرح دائماً بخدع سحرية ليؤديها أمام أبناء وبنات إخوته. ينتظرون زياراته بفارغ الصبر لأنهم يعرفون أنهم سيقضون وقتاً ممتعاً. يجعل الجميع يضحكون بنكاته الذكية وقلبه الطيب. هو جزء خاص حقاً من العائلة.`,
    question: {
      question: "What does the funny uncle always bring when visiting?",
      options: [
        "Magic tricks and clever jokes",
        "New video games and consoles",
        "Homework worksheets",
        "Old newspapers to read"
      ],
      answerIndex: 0,
      explanation: "يأتي العم (uncle) المرح بخدع سحرية ونكات ذكية تدخل البهجة على قلوب الأطفال."
    }
  }),

  // 53. aunt
  aunt: (w) => ({
    word: w,
    title: "Aunt's Adventures",
    titleArabic: "مغامرات العمة",
    storyEnglish: `The aunt brought a box of colorful candies when she visited her family in the city. She shared stories about her travels to faraway places that the children had never seen. They listened with wide eyes, excited by her adventures. She always makes their day more interesting.`,
    storyArabic: `أحضرت العمة صندوقاً من الحلوى الملونة عندما زارت عائلتها في المدينة. شاركت قصصاً عن رحلاتها إلى أماكن بعيدة لم يسبق للأطفال رؤيتها. استمعوا بعيون واسعة، متحمسين لمغامراتها. إنها دائماً تجعل يومهم أكثر إثارة.`,
    question: {
      question: "What did the aunt share with the children when she visited?",
      options: [
        "Stories about her travels to faraway places",
        "Instructions for doing house cleaning",
        "A recipe for baking chocolate cake",
        "A map of the subway system"
      ],
      answerIndex: 0,
      explanation: "شاركت العمة (aunt) قصصاً مشوقة عن رحلاتها ومغامراتها في أماكن بعيدة."
    }
  }),

  // 54. cousin
  cousin: (w) => ({
    word: w,
    title: "Football in the Yard",
    titleArabic: "كرة القدم في الفناء",
    storyEnglish: `The cousin came over to play football in the yard during the sunny afternoon. They ran across the grass, trying to score goals while the dog chased the ball. It was an energetic game that lasted until the sun began to set. They were tired but very happy.`,
    storyArabic: `جاء ابن العم للعب كرة القدم في الفناء خلال فترة بعد الظهر المشمسة. ركضا عبر العشب، يحاولان تسجيل الأهداف بينما كان الكلب يطارد الكرة. كانت مباراة مفعمة بالحيوية استمرت حتى بدأت الشمس في الغروب. كانا متعبين لكنهما سعيدان جداً.`,
    question: {
      question: "What game did the cousin play in the yard during the sunny afternoon?",
      options: [
        "Football across the grass",
        "Basketball in the driveway",
        "Tennis on the court",
        "Hide and seek behind the trees"
      ],
      answerIndex: 0,
      explanation: "لعب ابن العم (cousin) مباراة كرة قدم مفعمة بالحيوية في الفناء حتى غروب الشمس."
    }
  }),

  // 55. son-in-law
  "son-in-law": (w) => ({
    word: w,
    title: "Fixing the Fence",
    titleArabic: "إصلاح السياج",
    storyEnglish: `The kind son-in-law helped his father-in-law repair the wooden fence in the back garden. They worked together for most of the day, talking and sharing stories about their lives. The father-in-law was grateful for the help and enjoyed the good company. It was a productive and pleasant day.`,
    storyArabic: `ساعد الصهر اللطيف حموه في إصلاح السياج الخشبي في الحديقة الخلفية. عملا معاً لمعظم اليوم، يتحدثان ويتبادلان القصص عن حياتهما. كان الحمو ممتناً للمساعدة واستمتع بالرفقة الطيبة. كان يوماً مثمراً وممتعاً.`,
    question: {
      question: "What did the kind son-in-law help his father-in-law repair?",
      options: [
        "The wooden fence in the back garden",
        "The roof of the garage",
        "The engine of the lawn mower",
        "The water pipes in the basement"
      ],
      answerIndex: 0,
      explanation: "ساعد الصهر (son-in-law) حموه في إصلاح السياج الخشبي في الحديقة الخلفية."
    }
  }),

  // 56. Children
  children: (w) => ({
    word: w,
    title: "Hide and Seek",
    titleArabic: "الغميضة",
    storyEnglish: `The children played hide and seek in the big park while their parents sat nearby. They laughed and shouted as they found new places to hide behind the trees. It was a lovely day for everyone to enjoy the fresh air and sunshine. They didn't want to go home.`,
    storyArabic: `لعب الأطفال الغميضة في الحديقة الكبيرة بينما كان والداهم يجلسان بالقرب منهم. ضحكوا وهتفوا عندما وجدوا أماكن جديدة للاختباء خلف الأشجار. كان يوماً جميلاً للجميع للاستمتاع بالهواء النقي وأشعة الشمس. لم يرغبوا في العودة إلى المنزل.`,
    question: {
      question: "What game did the children play in the big park?",
      options: [
        "Hide and seek behind the trees",
        "Board games at a picnic table",
        "Tag around the fountain",
        "Flying colorful kites"
      ],
      answerIndex: 0,
      explanation: "لعب الأطفال (children) لعبة الغميضة في الحديقة الكبيرة واستمتعوا بيوم مشمس ومبهج."
    }
  }),

  // 57. girlfriend
  girlfriend: (w) => ({
    word: w,
    title: "First Anniversary",
    titleArabic: "الذكرى السنوية الأولى",
    storyEnglish: `The young man bought a small gift for his girlfriend to celebrate their first year together. He wanted to give her something special that would show how much he cared. She was very happy when she opened the box and saw the beautiful necklace. They spent the evening talking.`,
    storyArabic: `اشترى الشاب هدية صغيرة لصديقته للاحتفال بعامهما الأول معاً. أراد أن يعطيها شيئاً خاصاً يظهر مدى اهتمامه. كانت سعيدة جداً عندما فتحت الصندوق ورأت القلادة الجميلة. قضيا الأمسية في الحديث.`,
    question: {
      question: "What gift did the young man buy for his girlfriend?",
      options: [
        "A beautiful necklace in a small gift box",
        "A pair of running shoes",
        "A leather travel bag",
        "A silver wrist watch"
      ],
      answerIndex: 0,
      explanation: "اشترى الشاب قلادة جميلة لصديقته (girlfriend) للاحتفال بذكراهما السنوية الأولى."
    }
  }),

  // 58. boyfriend
  boyfriend: (w) => ({
    word: w,
    title: "Surprise Cake",
    titleArabic: "كعكة المفاجأة",
    storyEnglish: `The girlfriend baked a special cake for her boyfriend to surprise him on his birthday. She used his favorite flavors and decorated it with care in the small kitchen. When he saw the cake, he was very impressed and thanked her with a hug. It was a sweet moment.`,
    storyArabic: `خبزت الصديقة كعكة خاصة لصديقها لتفاجئه في عيد ميلاده. استخدمت نكهاته المفضلة وزينتها بعناية في المطبخ الصغير. عندما رأى الكعكة، أُعجب كثيراً وشكرها بعناق. كانت لحظة حلوة.`,
    question: {
      question: "What did the girlfriend bake to surprise her boyfriend on his birthday?",
      options: [
        "A special decorated cake with his favorite flavors",
        "A tray of hot apple pies",
        "A batch of sugar cookies",
        "A loaf of banana bread"
      ],
      answerIndex: 0,
      explanation: "خبزت الصديقة كعكة مميزة ولذيذة لصديقها (boyfriend) في عيد ميلاده."
    }
  }),

  // 59. partner
  partner: (w) => ({
    word: w,
    title: "A Good Partner",
    titleArabic: "A Good Partner",
    storyEnglish: `When Lina started working on a difficult university project, she knew she needed a reliable partner. She chose her friend Sara because they had worked well together before and could easily share responsibilities. They divided the project into smaller tasks and helped each other whenever one of them had a problem. Because they communicated well, they finished the project before the deadline.`,
    storyArabic: `عندما بدأت لينا العمل على مشروع جامعي صعب، كانت تعرف أنها تحتاج إلى شريكة موثوقة. اختارت صديقتها سارة لأنهما عملتا معًا بشكل جيد من قبل وكان بإمكانهما تقسيم المسؤوليات بسهولة. قسمتا المشروع إلى مهام أصغر وساعدت كل واحدة منهما الأخرى عندما تواجه إحداهما مشكلة. وبسبب تواصلهما الجيد، أنهتا المشروع قبل الموعد النهائي.`,
    question: {
      question: "What is the main theme of this story?",
      options: [
        "A practical situation illustrating the word clearly",
        "An unrelated fictional adventure",
        "A scientific formula without context",
        "A historical debate between kings"
      ],
      answerIndex: 0,
      explanation: "توضح القصة الموقف وسياق الكلمة بشكل واضح ومباشر."
    }
  }),

  // 60. married
  married: (w) => ({
    word: w,
    title: "Happy Anniversary",
    titleArabic: "ذكرى سعيدة",
    storyEnglish: `They have been married for twenty years and still love to take long walks in the park. They talk about their plans for the future and remember the happy times they shared. Their strong relationship is an inspiration to all their friends and family members. It is truly beautiful.`,
    storyArabic: `لقد كانا متزوجين لمدة عشرين عاماً وما زالا يحبان القيام بنزهات طويلة في الحديقة. يتحدثان عن خططهما للمستقبل ويتذكران الأوقات السعيدة التي تشاركاها. علاقتهما القوية مصدر إلهام لجميع أصدقائهما وأفراد عائلتهما. إنه أمر جميل حقاً.`,
    question: {
      question: "How long have they been married?",
      options: [
        "For twenty years",
        "For five years",
        "For one year",
        "For forty years"
      ],
      answerIndex: 0,
      explanation: "كانا متزوجين (married) لمدة عشرين عاماً وما زالا يستمتعان بالمشي معاً واسترجاع الذكريات."
    }
  }),

  // 61. single
  single: (w) => ({
    word: w,
    title: "A Free Spirit",
    titleArabic: "روح حرة",
    storyEnglish: `The young traveler enjoyed being single because it gave her the freedom to visit new places. She traveled to different cities, met interesting people, and learned about different cultures. Her life was full of adventure and excitement every day. She was happy with her life.`,
    storyArabic: `استمتعت المسافرة الشابة بكونها عزباء لأن ذلك منحها الحرية لزيارة أماكن جديدة. سافرت إلى مدن مختلفة، والتقت بأشخاص مثيرين للاهتمام، وتعلمت عن ثقافات مختلفة. كانت حياتها مليئة بالمغامرة والإثارة كل يوم. كانت سعيدة بحياتها.`,
    question: {
      question: "Why did the young traveler enjoy being single?",
      options: [
        "It gave her the freedom to visit new places and travel",
        "She preferred to stay home alone",
        "She wanted to avoid learning new languages",
        "She did not like meeting new people"
      ],
      answerIndex: 0,
      explanation: "استمتعت بكونها عزباء (single) لأن ذلك منحها الحرية للسفر واستكشاف أماكن وثقافات جديدة."
    }
  }),

  // 62. neighbor
  neighbor: (w) => ({
    word: w,
    title: "A Kind Neighbor",
    titleArabic: "جار لطيف",
    storyEnglish: `The friendly neighbor brought some fresh vegetables from his garden to share with his friend. He knocked on the door and offered the gift with a warm smile on his face. The family was very thankful and invited him in for a cup of tea. It was a kind act.`,
    storyArabic: `أحضر الجار الودود بعض الخضروات الطازجة من حديقته ليشاركها مع صديقه. طرق الباب وقدم الهدية بابتسامة دافئة على وجهه. كانت العائلة ممتنة جداً ودعته لتناول كوب من الشاي. كان عملاً لطيفاً.`,
    question: {
      question: "What did the friendly neighbor bring from his garden?",
      options: [
        "Fresh vegetables to share with his friend",
        "A basket of fresh apples",
        "A box of baked pastries",
        "A bag of flower seeds"
      ],
      answerIndex: 0,
      explanation: "أحضر الجار (neighbor) الودود خضروات طازجة من حديقته ليشاركها بلطف."
    }
  }),

  // 63. guest
  guest: (w) => ({
    word: w,
    title: "Hotel Guest",
    titleArabic: "ضيف الفندق",
    storyEnglish: `The guest arrived at the hotel and was welcomed by the polite staff at the lobby. He checked into his room and was happy to see that it was very clean and comfortable. He planned to explore the city the next day and visit the local museums. He felt relaxed.`,
    storyArabic: `وصل الضيف إلى الفندق واستقبله الموظفون المهذبون في الردهة. سجل دخوله إلى غرفته وكان سعيداً برؤيتها نظيفة ومريحة جداً. خطط لاستكشاف المدينة في اليوم التالي وزيارة المتاحف المحلية. شعر بالاسترخاء.`,
    question: {
      question: "What did the hotel guest plan to do the next day?",
      options: [
        "Explore the city and visit local museums",
        "Stay in the room all day",
        "Look for a new hotel",
        "Take an immediate flight back home"
      ],
      answerIndex: 0,
      explanation: "وصل الضيف (guest) إلى الفندق وسعد بغرفته النظيفة وخطط لزيارة المتاحف في اليوم التالي."
    }
  }),

  // 64. host
  host: (w) => ({
    word: w,
    title: "Dinner Host",
    titleArabic: "مضيف العشاء",
    storyEnglish: `The generous host prepared a wonderful dinner party for his friends in his spacious house. He cooked all the favorite dishes and played nice music to create a welcoming atmosphere. Everyone had a great time and thanked him for being such a kind and thoughtful host.`,
    storyArabic: `أعد المضيف السخي حفلة عشاء رائعة لأصدقائه في منزله الفسيح. طبخ جميع الأطباق المفضلة وعزف موسيقى جميلة لخلق جو ترحيبي. قضى الجميع وقتاً رائعاً وشكروه على كونه مضيفاً لطيفاً ومراعياً.`,
    question: {
      question: "What did the generous host prepare for his friends?",
      options: [
        "A wonderful dinner party with favorite dishes and music",
        "A movie night at the cinema",
        "A soccer tournament in the park",
        "A morning breakfast meeting"
      ],
      answerIndex: 0,
      explanation: "أعد المضيف (host) السخي حفلة عشاء رائعة لأصدقائه وطبخ أطباقهم المفضلة."
    }
  }),

  // 65. adult
  adult: (w) => ({
    word: w,
    title: "Responsible Adult",
    titleArabic: "شخص بالغ مسؤول",
    storyEnglish: `The responsible adult helped the students complete their project before the deadline at the library. He showed them how to find the right information and organize their notes effectively. The students were very happy to have his help and finished their work on time. They were grateful.`,
    storyArabic: `ساعد البالغ المسؤول الطلاب في إكمال مشروعهم قبل الموعد النهائي في المكتبة. أراهم كيفية العثور على المعلومات الصحيحة وتنظيم ملاحظاتهم بفعالية. كان الطلاب سعداء جداً بمساعدته وأنهوا عملهم في الوقت المحدد. كانوا ممتنين.`,
    question: {
      question: "How did the responsible adult help the students in the library?",
      options: [
        "Showed them how to find information and organize notes for their project",
        "Gave them answers directly without studying",
        "Told them to delay the project deadline",
        "Bought them new textbooks"
      ],
      answerIndex: 0,
      explanation: "ساعد الشخص البالغ (adult) المسؤول الطلاب في العثور على المعلومات وتنظيم الملاحظات لإنهاء مشروعهم."
    }
  }),

  // 66. grandchild
  grandchild: (w) => ({
    word: w,
    title: "Grandchild's Gift",
    titleArabic: "هدية الحفيد",
    storyEnglish: `The happy grandchild drew a colorful picture for his grandparents to show his love. He ran to give it to them, and they hugged him tightly with big smiles. It was a simple but meaningful gift that made them feel very special. They put it on the wall.`,
    storyArabic: `رسم الحفيد السعيد صورة ملونة لأجداده ليظهر حبه. ركض ليعطيها لهم، فعانقوه بقوة بابتسامات عريضة. كانت هدية بسيطة ولكنها ذات مغزى جعلتهم يشعرون بأنهم مميزون جداً. وضعوها على الحائط.`,
    question: {
      question: "What gift did the happy grandchild give to his grandparents?",
      options: [
        "A colorful picture he drew",
        "A toy car",
        "A box of chocolates",
        "A book of poetry"
      ],
      answerIndex: 0,
      explanation: "رسم الحفيد (grandchild) صورة ملونة وقدمها لأجداده تعبيراً عن حبه."
    }
  }),

  // 67. nephew
  nephew: (w) => ({
    word: w,
    title: "Astronomy Lesson",
    titleArabic: "درس علم الفلك",
    storyEnglish: `The curious nephew asked many questions about how the solar system works during the lesson. His aunt, who is a teacher, answered each question with patience and clear examples. He was fascinated by the universe and wanted to learn more about the stars and planets tonight.`,
    storyArabic: `طرح ابن الأخ الفضولي العديد من الأسئلة حول كيفية عمل النظام الشمسي أثناء الدرس. أجابت عمته، التي تعمل معلمة، عن كل سؤال بالصبر وأمثلة واضحة. كان مفتوناً بالكون وأراد معرفة المزيد عن النجوم والكواكب الليلة.`,
    question: {
      question: "What did the curious nephew ask questions about?",
      options: [
        "How the solar system works",
        "How cars are manufactured",
        "How plants grow in winter",
        "How ancient castles were built"
      ],
      answerIndex: 0,
      explanation: "طرح ابن الأخ (nephew) أسئلة حول النظام الشمسي والكون وأجابت عمته بصبر واهتمام."
    }
  }),

  // 68. niece
  niece: (w) => ({
    word: w,
    title: "Piano Performance",
    titleArabic: "أداء البيانو",
    storyEnglish: `The talented niece played a beautiful song on the piano for her family to enjoy. Everyone listened in silence, amazed by her musical skill and passion for the instrument. When she finished, they clapped loudly and congratulated her on her wonderful performance. She was very proud.`,
    storyArabic: `عزفت ابنة الأخ أغنية جميلة على البيانو لتستمتع بها عائلتها. استمع الجميع بصمت، مندهشين بمهارتها الموسيقية وشغفها بالآلة. عندما انتهت، صفقوا بقوة وهنأوها على أدائها الرائع. كانت فخورة جداً.`,
    question: {
      question: "What instrument did the talented niece play for her family?",
      options: [
        "The piano",
        "The violin",
        "The acoustic guitar",
        "The flute"
      ],
      answerIndex: 0,
      explanation: "عزفت ابنة الأخ (niece) الموهوبة أغنية جميلة على البيانو ونالت إعجاب عائلتها وتصفيقهم."
    }
  }),

  // 69. relative
  relative: (w) => ({
    word: w,
    title: "Relative's Visit",
    titleArabic: "زيارة القريب",
    storyEnglish: `A distant relative came to visit the family from another country for the winter holiday. They spent the time sharing stories, cooking traditional food, and playing fun games together. It was a wonderful opportunity to learn about their family history and connect with each other.`,
    storyArabic: `جاء قريب بعيد لزيارة العائلة من بلد آخر لقضاء عطلة الشتاء. قضوا الوقت في مشاركة القصص، وطبخ الطعام التقليدي، ولعب ألعاب ممتعة معاً. كانت فرصة رائعة للتعرف على تاريخ عائلتهم والتواصل مع بعضهم البعض.`,
    question: {
      question: "Why was the distant relative's visit a wonderful opportunity?",
      options: [
        "To learn about family history and connect together",
        "To sell an old family house",
        "To look for a new job downtown",
        "To study at a foreign university"
      ],
      answerIndex: 0,
      explanation: "كانت زيارة القريب (relative) فرصة رائعة لمعرفة تاريخ العائلة ومشاركة القصص والطعام التقليدي."
    }
  }),

  // 70. twin
  twin: (w) => ({
    word: w,
    title: "The Twin Sisters",
    titleArabic: "الأختان التوأم",
    storyEnglish: `The twin sisters love to wear matching clothes when they go to school every morning. Their friends sometimes find it hard to tell them apart because they look exactly the same. They always laugh when people make that funny mistake and enjoy their unique bond together.`,
    storyArabic: `تحب الأختان التوأم ارتداء ملابس متشابهة عندما تذهبان إلى المدرسة كل صباح. يجد أصدقائهما أحياناً صعوبة في التمييز بينهما لأنهما تبدوان متطابقتين تماماً. تضحكان دائماً عندما يرتكب الناس ذلك الخطأ المضحك وتستمتعان برابطتهما الفريدة معاً.`,
    question: {
      question: "Why do friends sometimes find it hard to tell the twin sisters apart?",
      options: [
        "Because they wear matching clothes and look exactly the same",
        "Because they have the same first name",
        "Because they never speak to anyone",
        "Because they sit on opposite sides of the room"
      ],
      answerIndex: 0,
      explanation: "ترتدي الأختان التوأم (twin) ملابس متطابقة وتبدوان متشابهتين تماماً برابطة فريدة ومرحة."
    }
  }),

  // 71. home
  home: (w) => ({
    word: w,
    title: "My Home",
    titleArabic: "منزلي",
    storyEnglish: `Imagine walking through the front gate into a space filled with warmth. My home provides a peaceful sanctuary after a very long day of work. You will feel comfortable the moment you step across the entrance rug.`,
    storyArabic: `تخيل المشي عبر البوابة الأمامية إلى مساحة مليئة بالدفء. يوفر منزلي ملاذاً هادئاً بعد يوم عمل طويل جداً. ستشعر بالراحة في اللحظة التي تخطو فيها عبر سجادة المدخل.`,
    question: {
      question: "What does my home provide after a long day of work?",
      options: [
        "A peaceful sanctuary filled with warmth and comfort",
        "A noisy office environment",
        "A place for heavy physical exercise",
        "A busy crowded workshop"
      ],
      answerIndex: 0,
      explanation: "يوفر المنزل (home) ملاذاً هادئاً ومريحاً مليئاً بالدفء بعد يوم عمل طويل."
    }
  }),

  // 72. house
  house: (w) => ({
    word: w,
    title: "Bright House",
    titleArabic: "منزل مشرق",
    storyEnglish: `A bright yellow paint covers the exterior of this house on the corner of the street. Passersby often stop to admire the colorful flower beds surrounding the structure. It truly stands out in the neighborhood because of its cheerful design.`,
    storyArabic: `يغطي طلاء أصفر مشرق الجزء الخارجي من هذا المنزل الموجود في زاوية الشارع. غالباً ما يتوقف المارة للإعجاب بأحواض الزهور الملونة التي تحيط بالمبنى. إنه يبرز حقاً في الحي بسبب تصميمه البهيج.`,
    question: {
      question: "What color covers the exterior of this house on the corner?",
      options: [
        "Bright yellow paint",
        "Dark blue paint",
        "Plain grey paint",
        "Pure white paint"
      ],
      answerIndex: 0,
      explanation: "يغطي المنزل (house) طلاء أصفر مشرق مع أحواض زهور ملونة تجعله بارزاً في الحي."
    }
  }),

  // 73. apartment
  apartment: (w) => ({
    word: w,
    title: "Small Apartment",
    titleArabic: "شقة صغيرة",
    storyEnglish: `Living in a small apartment downtown saves me a lot of time during my daily commute. I love looking out from the balcony to watch the city lights at night. Every square meter serves a purpose in this efficient living space.`,
    storyArabic: `العيش في شقة صغيرة وسط المدينة يوفر لي الكثير من الوقت خلال تنقلاتي اليومية. أحب النظر من الشرفة لمشاهدة أضواء المدينة في الليل. يخدم كل متر مربع غرضاً في مساحة المعيشة الفعالة هذه.`,
    question: {
      question: "What is an advantage of living in a small apartment downtown?",
      options: [
        "Saving time during the daily commute and enjoying city lights from the balcony",
        "Having a huge private farm",
        "Living far away from all public transport",
        "Having completely empty rooms"
      ],
      answerIndex: 0,
      explanation: "يوفر العيش في شقة (apartment) وسط المدينة وقتاً في التنقل اليومي وإطلالة ليلية جميلة."
    }
  }),

  // 74. room
  room: (w) => ({
    word: w,
    title: "Study Room",
    titleArabic: "غرفة الدراسة",
    storyEnglish: `Please enter the study room quietly because the students are taking an important test. Natural light flows through the large windows, creating a perfect environment for reading and writing. Silence remains the most important rule in this area.`,
    storyArabic: `من فضلك ادخل غرفة الدراسة بهدوء لأن الطلاب تؤدون اختباراً مهماً. يتدفق الضوء الطبيعي عبر النوافذ الكبيرة، مما يخلق بيئة مثالية للقراءة والكتابة. يظل الصمت أهم قاعدة في هذه المنطقة.`,
    question: {
      question: "What is the most important rule in the study room?",
      options: [
        "Silence and entering quietly",
        "Listening to loud music",
        "Playing board games",
        "Eating hot meals"
      ],
      answerIndex: 0,
      explanation: "يعد الصمت أهم قاعدة داخل غرفة (room) الدراسة لتوفير بيئة مثالية للقراءة والاختبارات."
    }
  }),

  // 75. bedroom
  bedroom: (w) => ({
    word: w,
    title: "My Bedroom",
    titleArabic: "غرفة نومي",
    storyEnglish: `Soft music plays while I fold the laundry inside my bedroom. This private space offers the relaxation I need to recharge my energy before tomorrow morning. Everything here reflects my personal style and desire for tranquility.`,
    storyArabic: `موسيقى هادئة تعزف بينما أطوي الغسيل داخل غرفة نومي. توفر هذه المساحة الخاصة الاسترخاء الذي أحتاجه لاستعادة طاقتي قبل صباح الغد. يعكس كل شيء هنا أسلوبي الشخصي ورغبتي في الهدوء.`,
    question: {
      question: "What does this private bedroom offer?",
      options: [
        "The relaxation needed to recharge energy before tomorrow",
        "A busy work environment",
        "A noisy space with multiple televisions",
        "A kitchen space for cooking meals"
      ],
      answerIndex: 0,
      explanation: "توفر غرفة النوم (bedroom) الراحة والاسترخاء التام لاستعادة الطاقة في هدوء."
    }
  }),

  // 76. bathroom
  bathroom: (w) => ({
    word: w,
    title: "The Bathroom",
    titleArabic: "الحمام",
    storyEnglish: `Keep the bathroom clean by hanging your wet items on the hooks near the mirror. Hot steam fills the air quickly whenever someone turns on the tap. Fresh scents usually linger here to maintain a pleasant atmosphere.`,
    storyArabic: `حافظ على نظافة الحمام بتعليق أغراضك المبللة على الخطافات بالقرب من المرآة. يملأ البخار الساخن الهواء بسرعة كلما فتح أحدهم الصنبور. عادة ما تبقى الروائح المنعشة هنا للحفاظ على جو ممتع.` ,
    question: {
      question: "How can you keep the bathroom clean according to the story?",
      options: [
        "By hanging wet items on the hooks near the mirror",
        "By leaving water running all day",
        "By placing heavy books on the counter",
        "By keeping the lights off"
      ],
      answerIndex: 0,
      explanation: "الحفاظ على نظافة الحمام (bathroom) بتعليق الأغراض المبللة على الخطافات يضمن بيئة منعشة."
    }
  }),

  // 77. kitchen
  kitchen: (w) => ({
    word: w,
    title: "The Kitchen",
    titleArabic: "المطبخ",
    storyEnglish: `Mixing fresh ingredients creates magic inside the kitchen every single afternoon. I enjoy testing new recipes while the oven bakes bread for our family dinner. The smell of herbs makes this place the heart of our residence.`,
    storyArabic: `خلق خلط المكونات الطازجة سحراً داخل المطبخ كل بعد ظهر. أستمتع بتجربة وصفات جديدة بينما يخبز الفرن الخبز لعشاء عائلتنا. رائحة الأعشاب تجعل هذا المكان قلب مسكننا.`,
    question: {
      question: "Why is the kitchen considered the heart of the residence?",
      options: [
        "Because of testing delicious recipes and the aroma of fresh bread and herbs",
        "Because it is the largest room with comfortable beds",
        "Because it contains all the computers and books",
        "Because nobody enters it during the day"
      ],
      answerIndex: 0,
      explanation: "يعد المطبخ (kitchen) قلب المنزل برائحة الأعشاب والخبز وتجربة الوصفات الشهية."
    }
  }),

  // 78. living room
  "living room": (w) => ({
    word: w,
    title: "Living Room",
    titleArabic: "غرفة المعيشة",
    storyEnglish: `We gather in the living room to watch movies together on cold weekends. Huge cushions on the floor provide extra seating for all our friends who visit. Laughter fills the space whenever we share funny stories about our week.`,
    storyArabic: `نتجمع في غرفة المعيشة لمشاهدة الأفلام معاً في عطلات نهاية الأسبوع الباردة. توفر الوسائد الضخمة على الأرض مقاعد إضافية لجميع أصدقائنا الذين يزوروننا. يملأ الضحك المساحة كلما تبادلنا قصصاً مضحكة عن أسبوعنا.`,
    question: {
      question: "What do they do in the living room on cold weekends?",
      options: [
        "Gather to watch movies together and share funny stories",
        "Sleep alone in dark corners",
        "Paint the exterior wooden walls",
        "Store broken tools"
      ],
      answerIndex: 0,
      explanation: "يتجمع الأصدقاء والعائلة في غرفة المعيشة (living room) لمشاهدة الأفلام والضحك والمرح."
    }
  }),
  livingroom: (w) => ({
    word: w,
    title: "Living Room",
    titleArabic: "غرفة المعيشة",
    storyEnglish: `We gather in the living room to watch movies together on cold weekends. Huge cushions on the floor provide extra seating for all our friends who visit. Laughter fills the space whenever we share funny stories about our week.`,
    storyArabic: `نتجمع في غرفة المعيشة لمشاهدة الأفلام معاً في عطلات نهاية الأسبوع الباردة. توفر الوسائد الضخمة على الأرض مقاعد إضافية لجميع أصدقائنا الذين يزوروننا. يملأ الضحك المساحة كلما تبادلنا قصصاً مضحكة عن أسبوعنا.`,
    question: {
      question: "What do they do in the living room on cold weekends?",
      options: [
        "Gather to watch movies together and share funny stories",
        "Sleep alone in dark corners",
        "Paint the exterior wooden walls",
        "Store broken tools"
      ],
      answerIndex: 0,
      explanation: "يتجمع الأصدقاء والعائلة في غرفة المعيشة (living room) لمشاهدة الأفلام والضحك والمرح."
    }
  }),

  // 79. door
  door: (w) => ({
    word: w,
    title: "The Heavy Door",
    titleArabic: "الباب الثقيل",
    storyEnglish: `Push the heavy door firmly to open it and enter the secret garden. A rusty handle might require some oil, but the view inside justifies the small effort. Never forget to lock it securely before leaving.`,
    storyArabic: `ادفع الباب الثقيل بقوة لفتحه ودخول الحديقة السرية. قد يتطلب المقبض الصدئ بعض الزيت، لكن المنظر بالداخل يبرر الجهد الصغير. لا تنس أبداً قفله بإحكام قبل المغادرة.`,
    question: {
      question: "What lies behind the heavy door?",
      options: [
        "A secret garden with a beautiful view",
        "An underground parking garage",
        "A noisy busy train station",
        "A dark empty hallway"
      ],
      answerIndex: 0,
      explanation: "يؤدي دفع الباب (door) الثقيل إلى حديقة سرية جميلة المنظر."
    }
  }),

  // 80. window
  window: (w) => ({
    word: w,
    title: "The Window",
    titleArabic: "النافذة",
    storyEnglish: `Open the window wide to let the refreshing breeze clear the dust out of the room. Sunlight beams through the clear glass, highlighting the dancing particles in the air. Fresh air truly changes the mood of the entire home.`,
    storyArabic: `افتح النافذة على مصراعيها للسماح للنسيم المنعش بطرد الغبار من الغرفة. تلمع أشعة الشمس عبر الزجاج الصافي، مبرزة الجسيمات الراقصة في الهواء. الهواء النقي يغير حقاً مزاج المنزل بأكمله.`,
    question: {
      question: "What happens when you open the window wide?",
      options: [
        "A refreshing breeze clears dust and brings fresh air and sunlight",
        "Rain floods the entire living room",
        "The room becomes completely dark",
        "Noise blocks all conversation"
      ],
      answerIndex: 0,
      explanation: "فتح النافذة (window) يدخل نسيم الهواء المنعش وأشعة الشمس التي تغير مزاج المنزل بالكامل."
    }
  }),

  // 81. wall
  wall: (w) => ({
    word: w,
    title: "Painting the Wall",
    titleArabic: "طلاء الجدار",
    storyEnglish: `Paint the wall in a light blue shade to make the hallway look much larger. A few family photos hanging at eye level add a personal touch to the hallway. Durability matters when choosing the right color for high-traffic areas.`,
    storyArabic: `اطلي الجدار بظل أزرق فاتح لجعل الردهة تبدو أكبر بكثير. تضيف بضع صور عائلية معلقة في مستوى العين لمسة شخصية إلى الردهة. المتانة مهمة عند اختيار اللون المناسب للمناطق ذات الحركة المرورية العالية.`,
    question: {
      question: "Why paint the wall in a light blue shade?",
      options: [
        "To make the hallway look much larger",
        "To make the room very dark",
        "To hide the entrance door",
        "To match an old wooden floor"
      ],
      answerIndex: 0,
      explanation: "طلاء الجدار (wall) بلون أزرق فاتح مع تعليق صور عائلية يعطي اتساعاً ولمسة شخصية."
    }
  }),

  // 82. floor
  floor: (w) => ({
    word: w,
    title: "Wooden Floor",
    titleArabic: "الأرضية الخشبية",
    storyEnglish: `Sweep the wooden floor every evening to keep it free from scratches and dirt. Polishing the surface makes the wood shine beautifully under the overhead lights. Walking barefoot on this smooth texture feels incredibly satisfying.`,
    storyArabic: `اكنس الأرضية الخشبية كل مساء لإبقائها خالية من الخدوش والأوساخ. جعل السطح لامعاً يجعل الخشب يلمع بشكل جميل تحت الأضواء العلوية. المشي حافي القدمين على هذا الملمس الأملس يبدو مرضياً بشكل لا يصدق.`,
    question: {
      question: "Why should you sweep the wooden floor every evening?",
      options: [
        "To keep it free from scratches and dirt and make it shine",
        "To paint it with dark colors",
        "To replace the wooden planks",
        "To make it rough for walking"
      ],
      answerIndex: 0,
      explanation: "كنس وتلميع الأرضية (floor) الخشبية يحافظ على لمعانها ونظافتها من الخدوش والأوساخ."
    }
  }),

  // 83. table
  table: (w) => ({
    word: w,
    title: "Dining Table",
    titleArabic: "طاولة الطعام",
    storyEnglish: `Set the table with colorful plates before the guests arrive for the birthday party. A large vase with fresh tulips sits perfectly in the center of the wooden surface. Everyone finds their place quickly as the food smells delicious.`,
    storyArabic: `رتب الطاولة بأطباق ملونة قبل وصول الضيوف لحفلة عيد الميلاد. توضع مزهرية كبيرة بها زنبق طازج بشكل مثالي في وسط السطح الخشبى. يجد الجميع أماكنهم بسرعة بينما يبدو الطعام لذيذاً.`,
    question: {
      question: "What sits in the center of the dining table?",
      options: [
        "A large vase with fresh tulips",
        "A stack of old books",
        "A television screen",
        "A pile of folded clothes"
      ],
      answerIndex: 0,
      explanation: "تزيّن الطاولة (table) بأطباق ملونة ومزهرية زنبق طازجة وسط أشهى الأطعمة."
    }
  }),

  // 84. chair
  chair: (w) => ({
    word: w,
    title: "The Comfortable Chair",
    titleArabic: "الكرسي المريح",
    storyEnglish: `Pull out the chair gently so you do not scratch the tiles underneath. My grandmother prefers this specific seat because the back support helps her sit comfortably for hours. We always keep it near the bright corner.`,
    storyArabic: `اسحب الكرسي برفق حتى لا تخدش البلاط تحته. تفضل جدتي هذا المقعد تحديداً لأن دعم الظهر يساعدها على الجلوس براحة لساعات. نحتفظ به دائماً بالقرب من الزاوية المضيئة.`,
    question: {
      question: "Why does the grandmother prefer this specific chair?",
      options: [
        "Because the back support helps her sit comfortably for hours",
        "Because it is made of heavy metal",
        "Because it can be folded and stored away",
        "Because it is painted in bright red"
      ],
      answerIndex: 0,
      explanation: "تفضل الجدة هذا الكرسي (chair) المريح لأنه يدعم الظهر ويسمح بالجلوس لساعات براحة."
    }
  }),

  // 85. bed
  bed: (w) => ({
    word: w,
    title: "Making the Bed",
    titleArabic: "ترتيب السرير",
    storyEnglish: `Fixing the bed makes the entire room look organized and ready for the day. I lay down fluffy pillows and a warm comforter to ensure maximum comfort. Nothing beats resting here after a tiring journey.`,
    storyArabic: `ترتيب السرير يجعل الغرفة بأكملها تبدو منظمة وجاهزة لليوم. أضع وسائد منفوشة ولحافاً دافئاً لضمان أقصى درجات الراحة. لا شيء يتفوق على الراحة هنا بعد رحلة متعبة.`,
    question: {
      question: "What does fixing the bed do for the room?",
      options: [
        "Makes the entire room look organized and ready for the day",
        "Makes the room look smaller",
        "Takes away the pillows and blankets",
        "Blocks natural sunlight from entering"
      ],
      answerIndex: 0,
      explanation: "ترتيب السرير (bed) يضفي تنظيماً على الغرفة ويوفر راحة مثالية مع الوسائد واللحاف."
    }
  }),

  // 86. sofa
  sofa: (w) => ({
    word: w,
    title: "The Soft Sofa",
    titleArabic: "الأريكة الناعمة",
    storyEnglish: `Sink into the deep sofa and forget about your daily stress for a while. The soft fabric feels smooth against your skin as you watch the afternoon clouds move. It remains the most popular spot for taking naps.`,
    storyArabic: `غص في الأريكة العميقة وانسَ توترك اليومي لبعض الوقت. ملمس القماش الناعم يبدو ناعماً على بشرتك بينما تشاهد غيوم بعد الظهر تتحرك. تظل المكان الأكثر شعبية لأخذ القيلولة.`,
    question: {
      question: "Why is the soft sofa the most popular spot in the house?",
      options: [
        "For relaxing, forgetting daily stress, and taking naps",
        "For storing heavy luggage",
        "For doing intensive computer programming",
        "For preparing family meals"
      ],
      answerIndex: 0,
      explanation: "تعتبر الأريكة (sofa) المريحة المكان المثالي للاسترخاء وأخذ قيلولة هادئة."
    }
  }),

  // 87. desk
  desk: (w) => ({
    word: w,
    title: "Organizing the Desk",
    titleArabic: "تنظيم المكتب",
    storyEnglish: `Clear the clutter off your desk to improve your focus while studying for the upcoming exam. An organized workspace encourages productivity and clears your mind from unnecessary distractions. My lamp sits on the left side to help me see clearly.`,
    storyArabic: `نظف الفوضى عن مكتبك لتحسين تركيزك أثناء الدراسة للاختبار القادم. تشجع مساحة العمل المنظمة الإنتاجية وتصفي عقلك من المشتتات غير الضرورية. يوضع مصباحي على الجانب الأيسر لمساعدتي على الرؤية بوضوح.`,
    question: {
      question: "How does clearing the clutter off your desk help you?",
      options: [
        "Improves focus and encourages productivity for studying",
        "Allows you to sleep during tests",
        "Makes the room completely dark",
        "Fills the space with loud noises"
      ],
      answerIndex: 0,
      explanation: "تنظيم المكتب (desk) وإزالة الفوضى يعزز التركيز والإنتاجية أثناء الدراسة."
    }
  }),

  // 88. key
  key: (w) => ({
    word: w,
    title: "The Silver Key",
    titleArabic: "المفتاح الفضي",
    storyEnglish: `Search for the silver key inside your bag because you cannot enter the house without it. It hides somewhere at the bottom under all those papers. Finding it brings a huge sigh of relief.`,
    storyArabic: `ابحث عن المفتاح الفضي داخل حقيبتك لأنه لا يمكنك دخول المنزل بدونه. إنه يختبئ في مكان ما في السفلي تحت كل تلك الأوراق. العثور عليه يجلب تنهيدة كبيرة من الارتياح.`,
    question: {
      question: "Why is finding the silver key so important?",
      options: [
        "Because you cannot enter the house without it",
        "Because it is made of pure gold",
        "Because it opens a secret toy box",
        "Because it is needed to start a bicycle"
      ],
      answerIndex: 0,
      explanation: "يعد العثور على المفتاح (key) الفضي ضرورياً لدخول المنزل ويزيل القلق."
    }
  }),

  // 89. clock
  clock: (w) => ({
    word: w,
    title: "Ticking Clock",
    titleArabic: "الساعة تدق",
    storyEnglish: `The ticking clock on the wall reminds me that I must leave for the airport soon. Its golden hands move slowly, tracking every second of this busy morning. Never underestimate how fast time flies when you are packing.`,
    storyArabic: `تذكرني الساعة التي تدق على الحائط بضرورة المغادرة إلى المطار قريباً. تتحرك عقاربها الذهبية ببطء، متتبعة كل ثانية من هذا الصباح المزدحم. لا تستهن أبداً بمدى سرعة مرور الوقت عندما تحزم أمتعتك.`,
    question: {
      question: "What does the ticking clock on the wall remind me to do?",
      options: [
        "Leave for the airport soon",
        "Go to sleep early",
        "Cook a morning meal",
        "Water the plants in the garden"
      ],
      answerIndex: 0,
      explanation: "تذكر الساعة (clock) على الحائط بضرورة المغادرة إلى المطار قريباً."
    }
  }),

  // 90. mirror
  mirror: (w) => ({
    word: w,
    title: "Looking in the Mirror",
    titleArabic: "النظر في المرآة",
    storyEnglish: `Look into the mirror to ensure your tie is straight before the big business meeting. Reflections show us how the world sees us, so prepare with confidence. A clean surface helps you see every detail clearly.`,
    storyArabic: `انظر في المرآة للتأكد من أن ربطة عنقك مستقيمة قبل اجتماع العمل الكبير. تظهر لنا الانعكاسات كيف يرانا العالم، لذا استعد بثقة. يساعدك السطح النظيف على رؤية كل تفصيل بوضوح.`,
    question: {
      question: "Why should you look into the mirror before the meeting?",
      options: [
        "To ensure your tie is straight and prepare with confidence",
        "To check the weather outside",
        "To search for your lost keys",
        "To read the daily news"
      ],
      answerIndex: 0,
      explanation: "النظر في المرآة (mirror) يساعد في التأكد من المظهر والاستعداد بثقة للاجتماع."
    }
  }),

  // 91. fridge
  fridge: (w) => ({
    word: w,
    title: "The Fridge",
    titleArabic: "الثلاجة",
    storyEnglish: `Open the fridge to find a cold drink after working in the hot garden all morning. It keeps all our food fresh and ready for quick preparation. Organizing the shelves helps us find ingredients much faster.`,
    storyArabic: `افتح الثلاجة لتجد مشروباً بارداً بعد العمل في الحديقة الحارة طوال الصباح. إنها تبقي كل طعامنا طازجاً وجاهزاً للتحضير السريع. يساعدنا تنظيم الأرفف في العثور على المكونات بشكل أسرع بكثير.`,
    question: {
      question: "What is the purpose of opening the fridge after gardening?",
      options: [
        "To find a cold drink to cool down",
        "To clean the garden tools",
        "To search for fresh flowers",
        "To turn on the kitchen lights"
      ],
      answerIndex: 0,
      explanation: "فتح الثلاجة (fridge) يتيح العثور على مشروب بارد وحفظ الطعام طازجاً."
    }
  }),

  // 92. tv
  tv: (w) => ({
    word: w,
    title: "Watching TV",
    titleArabic: "مشاهدة التلفاز",
    storyEnglish: `Turn on the TV to watch the latest news report about the space mission. The screen lights up with vivid colors that bring the distant stars closer to our living room. We rarely miss our favorite evening program.`,
    storyArabic: `شغل التلفاز لمشاهدة أحدث تقرير إخباري عن مهمة الفضاء. تضيء الشاشة بألوان زاهية تقرب النجوم البعيدة إلى غرفة معيشتنا. نادراً ما نفوت برنامجنا المسائي المفضل.`,
    question: {
      question: "What report do they watch on TV?",
      options: [
        "The latest news report about the space mission",
        "A cooking competition in another city",
        "A weather forecast for next week",
        "A history lecture about ancient monuments"
      ],
      answerIndex: 0,
      explanation: "تشغيل التلفاز (TV) يتيح مشاهدة التقرير الإخباري عن مهمة الفضاء بألوان زاهية."
    }
  }),

  // 93. light
  light: (w) => ({
    word: w,
    title: "Light Bag",
    titleArabic: "حقيبة خفيفة",
    storyEnglish: `This bag is very light because it only has a few papers inside. You can take it anywhere easily without feeling tired. It is very convenient for travel.`,
    storyArabic: `هذه الحقيبة خفيفة جداً لأنها تحتوي فقط على بضع أوراق بالداخل. يمكنك أخذها لأي مكان بسهولة دون الشعور بالتعب. إنها مريحة جداً للسفر.`,
    question: {
      question: "Why is the bag very light and convenient for travel?",
      options: [
        "Because it only has a few papers inside and is easy to carry without feeling tired",
        "Because it is made of solid stone",
        "Because it is filled with heavy metal tools",
        "Because it cannot hold anything at all"
      ],
      answerIndex: 0,
      explanation: "الحقيبة خفيفة (light) الوزن لأن بداخلها القليل من الأوراق مما يسهل حملها والسفر بها."
    }
  }),

  // 94. garden
  garden: (w) => ({
    word: w,
    title: "The Garden",
    titleArabic: "الحديقة",
    storyEnglish: `Water the plants in the garden twice a week to keep them healthy during the dry season. Vibrant flowers grow along the fence, attracting butterflies and bees every morning. Spending time here relaxes my mind and body.`,
    storyArabic: `اسقِ النباتات في الحديقة مرتين في الأسبوع لإبقائها صحية خلال موسم الجفاف. تنمو زهور نابضة بالحياة على طول السياج، مما يجذب الفراشات والنحل كل صباح. قضاء الوقت هنا يريح عقلي وجسدي.`,
    question: {
      question: "How often should you water the plants in the garden during the dry season?",
      options: [
        "Twice a week to keep them healthy",
        "Every single hour of the day",
        "Once a year during winter",
        "Only when it is raining heavily"
      ],
      answerIndex: 0,
      explanation: "ري النباتات في الحديقة (garden) مرتين في الأسبوع يحافظ على صحتها وجمال أزهارها."
    }
  }),

  // 95. roof
  roof: (w) => ({
    word: w,
    title: "View from the Roof",
    titleArabic: "منظر من السطح",
    storyEnglish: `Climb up to the roof to enjoy a breathtaking view of the entire city at sunset. From this high position, the busy streets look like tiny lines moving slowly in the dark. It is the perfect place to watch the stars.`,
    storyArabic: `اصعد إلى السقف للاستمتاع بمنظر خلاب للمدينة بأكملها عند الغروب. من هذا الموقع المرتفع، تبدو الشوارع المزدحمة كخطوط صغيرة تتحرك ببطء في الظلام. إنه المكان المثالي لمراقبة النجوم.`,
    question: {
      question: "What makes the roof a perfect place in the evening?",
      options: [
        "Enjoying a breathtaking view of the entire city and watching the stars",
        "Growing heavy vegetables in pots",
        "Parking large cars safely",
        "Cooking hot meals for dinner"
      ],
      answerIndex: 0,
      explanation: "يوفر الصعود إلى السطح (roof) إطلالة خلابة على المدينة والنجوم عند الغروب."
    }
  }),

  // 96. shower
  shower: (w) => ({
    word: w,
    title: "Refreshing Shower",
    titleArabic: "حمام منعش",
    storyEnglish: `Take a warm shower to wash away the sweat and dirt after your intense workout. The sound of falling water helps you organize your thoughts for the next day. It is the most refreshing part of my daily routine.`,
    storyArabic: `خذ حماماً دافئاً لتغسل العرق والأوساخ بعد تمرينك المكثف. يساعدك صوت الماء المتساقط على تنظيم أفكارك لليوم التالي. إنه الجزء الأكثر انتعاشاً في روتيني اليومي.`,
    question: {
      question: "Why is taking a warm shower beneficial after a workout?",
      options: [
        "It washes away sweat and dirt and refreshes the mind and body",
        "It makes you feel cold and tired",
        "It helps you prepare dinner quickly",
        "It replaces the need for drinking water"
      ],
      answerIndex: 0,
      explanation: "أخذ حمام (shower) دافئ بعد التمرين يغسل التعب ويوفر الانتعاش التام."
    }
  }),

  // 97. soap
  soap: (w) => ({
    word: w,
    title: "Using Soap",
    titleArabic: "استخدام الصابون",
    storyEnglish: `Lather the fragrant soap between your hands to create bubbles before washing your face. A clean scent remains on your skin, making you feel completely refreshed. Always keep a fresh bar near the sink.`,
    storyArabic: `رغّي الصابون العطري بين يديك لإنشاء فقاعات قبل غسل وجهك. تبقى رائحة نظيفة على بشرتك، مما يجعلك تشعر بالانتعاش التام. احتفظ دائماً بقطعة صابون جديدة بالقرب من المغسلة.`,
    question: {
      question: "What does lathering the fragrant soap do?",
      options: [
        "Creates bubbles and leaves a clean, refreshed scent on the skin",
        "Colors the water with dark ink",
        "Heats up the room temperature",
        "Dries clothes instantly"
      ],
      answerIndex: 0,
      explanation: "استخدام الصابون (soap) العطري ينظف البشرة ويمنحها رائحة منعشة."
    }
  }),

  // 98. towel
  towel: (w) => ({
    word: w,
    title: "Soft Towel",
    titleArabic: "منشفة ناعمة",
    storyEnglish: `Dry yourself with a soft towel after stepping out of the pool. The fabric absorbs the moisture quickly, leaving your skin comfortable and warm. We always hang them outside to dry under the sun.`,
    storyArabic: `جفف نفسك بمنشفة ناعمة بعد الخروج من المسبح. يمتص القماش الرطوبة بسرعة، مما يترك بشرتك مريحة ودافئة. نحن دائماً نعلقها في الخارج لتجف تحت أشعة الشمس.`,
    question: {
      question: "How does the soft towel help after stepping out of the pool?",
      options: [
        "Absorbs moisture quickly and leaves skin comfortable and warm",
        "Protects feet from hot sand",
        "Cools down drinking water",
        "Helps you swim faster"
      ],
      answerIndex: 0,
      explanation: "تمتص المنشفة (towel) الناعمة الرطوبة سريعاً وتترك البشرة دافئة ومرتاحة."
    }
  }),

  // 99. bag
  bag: (w) => ({
    word: w,
    title: "Packing the Bag",
    titleArabic: "حزم الحقيبة",
    storyEnglish: `Pack your heavy bag with all the necessary books before you head to the library. Carrying everything organized prevents you from losing your important notes. It feels light when everything is in its correct place.`,
    storyArabic: `احزم حقيبتك الثقيلة بكل الكتب الضرورية قبل التوجه إلى المكتبة. حمل كل شيء منظماً يمنعك من فقدان ملاحظاتك المهمة. تبدو خفيفة عندما يكون كل شيء في مكانه الصحيح.`,
    question: {
      question: "Why should you pack and organize your bag carefully?",
      options: [
        "To carry necessary books and prevent losing important notes",
        "To make the bag as heavy as possible",
        "To leave books behind at home",
        "To hide items from other students"
      ],
      answerIndex: 0,
      explanation: "حزم الحقيبة (bag) بانتظام يحفظ الكتب والملاحظات الهامة ويجعل حملها سهلاً."
    }
  }),

  // 100. box
  box: (w) => ({
    word: w,
    title: "The Sturdy Box",
    titleArabic: "الصندوق المتين",
    storyEnglish: `Place the fragile items inside a sturdy box to protect them during the move. We used tape to seal it tightly so nothing would fall out by mistake. Labels help us know exactly what is inside each container.`,
    storyArabic: `ضع العناصر الهشة داخل صندوق متين لحمايتها أثناء الانتقال. استخدمنا الشريط اللاصق لإغلاقه بإحكام حتى لا يسقط أي شيء عن طريق الخطأ. تساعدنا الملصقات على معرفة ما بداخل كل حاوية بالضبط.`,
    question: {
      question: "Why should fragile items be placed in a sturdy box?",
      options: [
        "To protect them and prevent damage during the move",
        "To throw them away safely",
        "To keep them permanently hidden",
        "To clean them with water"
      ],
      answerIndex: 0,
      explanation: "وضع الأشياء الهشة داخل صندوق (box) متين وإحكام إغلاقه يحميها أثناء النقل."
    }
  }),

  // 101. blanket
  blanket: (w) => ({
    word: w,
    title: "Warm Blanket",
    titleArabic: "بطانية دافئة",
    storyEnglish: `Pull the thick blanket up to your chin to stay warm during the cold winter night. Its soft material feels cozy and comforting while you read your favorite mystery novel. Winter nights seem much shorter under such warmth.`,
    storyArabic: `اسحب البطانية السميكة حتى ذقنك لتبقى دافئاً خلال ليلة الشتاء الباردة. مادتها الناعمة تبدو مريحة ومطَمئنة بينما تقرأ رواية الغموض المفضلة لديك. تبدو ليالي الشتاء أقصر بكثير تحت هذا الدفء.`,
    question: {
      question: "What does the thick blanket provide on a cold winter night?",
      options: [
        "Warmth, comfort, and a cozy feeling while reading",
        "Cool air during high summer",
        "Light for reading in the dark",
        "A flat surface for writing"
      ],
      answerIndex: 0,
      explanation: "توفر البطانية (blanket) الدفء والراحة التامة في ليالي الشتاء الباردة."
    }
  }),

  // 102. pillow
  pillow: (w) => ({
    word: w,
    title: "Firm Pillow",
    titleArabic: "وسادة ثابتة",
    storyEnglish: `Rest your head on the firm pillow after a long day of hard work. A good night of sleep requires the right support to keep you comfortable. We prefer to fluff them every morning to keep their shape.`,
    storyArabic: `أرح رأسك على الوسادة الثابتة بعد يوم طويل من العمل الشاق. تتطلب ليلة النوم الجيدة الدعم المناسب لتبقيك مرتاحاً. نفضل نفشها كل صباح للحفاظ على شكلها.`,
    question: {
      question: "What does a firm pillow provide after a long day?",
      options: [
        "The right support and comfort for a good night of sleep",
        "Loud soothing music for sleeping",
        "A flat surface to place books on",
        "A cooling breeze across the room"
      ],
      answerIndex: 0,
      explanation: "توفر الوسادة (pillow) الثابتة الدعم والراحة لنوم عميق بعد يوم شاق."
    }
  }),

  // 103. curtain
  curtain: (w) => ({
    word: w,
    title: "Morning Curtain",
    titleArabic: "ستارة الصباح",
    storyEnglish: `Draw the curtain to prevent the bright morning sun from waking you up too early. The fabric blocks most of the light, creating a dark and peaceful environment for sleeping. We chose a neutral color to match the room decor.`,
    storyArabic: `اسحب الستارة لمنع شمس الصباح الساطعة من إيقاظك مبكراً جداً. يحجب القماش معظم الضوء، مما يخلق بيئة مظلمة وهادئة للنوم. اخترنا لوناً محايداً ليتناسب مع ديكور الغرفة.`,
    question: {
      question: "Why do you draw the curtain in the morning?",
      options: [
        "To block bright sunlight and create a dark, peaceful sleeping environment",
        "To let in the morning cold wind",
        "To clean the window glass",
        "To check who is outside on the street"
      ],
      answerIndex: 0,
      explanation: "سحب الستارة (curtain) يحجب أشعة الشمس الساطعة ويوفر بيئة هادئة ومظلمة للنوم."
    }
  }),

  // 104. plate
  plate: (w) => ({
    word: w,
    title: "The Hot Plate",
    titleArabic: "الطبق الساخن",
    storyEnglish: `Place the hot plate on the table carefully to avoid burning the wooden surface. I enjoy serving delicious meals on ceramic dishes that look elegant and clean. Always wash them immediately after finishing your meal.`,
    storyArabic: `ضع الطبق الساخن على الطاولة بعناية لتجنب حرق السطح الخشبي. أستمتع بتقديم وجبات لذيذة في أطباق سيراميك تبدو أنيقة ونظيفة. اغسلها دائماً فور الانتهاء من وجبتك.`,
    question: {
      question: "Why should you place the hot plate carefully on the table?",
      options: [
        "To avoid burning the wooden surface",
        "To make a loud sound for dinner",
        "To cool the food down instantly",
        "To invite more neighbors"
      ],
      answerIndex: 0,
      explanation: "وضع الطبق (plate) الساخن بعناية يحمي سطح الطاولة الخشبي من الحرارة."
    }
  }),

  // 105. spoon
  spoon: (w) => ({
    word: w,
    title: "Small Spoon",
    titleArabic: "ملعقة صغيرة",
    storyEnglish: `Use a small spoon to stir the sugar into your tea until it dissolves completely. The metallic surface reflects the warm light of the kitchen. After cleaning it, put it back in the drawer with the other utensils.`,
    storyArabic: `استخدم ملعقة صغيرة لتحريك السكر في الشاي حتى يذوب تماماً. يعكس السطح المعدني ضوء المطبخ الدافئ. بعد تنظيفها، أعدها إلى الدرج مع أدوات المائدة الأخرى.`,
    question: {
      question: "What is the small spoon used for in the story?",
      options: [
        "To stir the sugar into the tea until it dissolves completely",
        "To cut hard bread slices",
        "To measure the temperature of the water",
        "To open sealed glass jars"
      ],
      answerIndex: 0,
      explanation: "تستخدم الملعقة (spoon) الصغيرة لتحريك السكر وإذابته في الشاي."
    }
  }),

  // 106. food
  food: (w) => ({
    word: w,
    title: "Sharing Food",
    titleArabic: "مشاركة الطعام",
    storyEnglish: `Every afternoon, the community gathers at the center to share fresh food with those in need. Volunteers bring pots of hot soup, trays of salad, and baked goods to distribute. Everyone leaves with a full stomach and a grateful heart.`,
    storyArabic: `كل بعد ظهر، يتجمع المجتمع في المركز لمشاركة طعام طازج مع المحتاجين. يحضر المتطوعون أواني الحساء الساخن، وصواني السلطة، والمخبوزات للتوزيع. يغادر الجميع بمعدة ممتلئة وقلب ممتن.`,
    question: {
      question: "What do volunteers bring to the community center?",
      options: [
        "Pots of hot soup, salad trays, and baked goods to share fresh food",
        "Old clothes and empty boxes",
        "Gardening tools and seeds",
        "Books and writing notebooks"
      ],
      answerIndex: 0,
      explanation: "يجتمع المتطوعون لمشاركة طعام (food) طازج ومغذي مع المحتاجين في المجتمع."
    }
  }),

  // 107. drink
  drink: (w) => ({
    word: w,
    title: "Drinking Water",
    titleArabic: "شرب الماء",
    storyEnglish: `In the hot afternoon, it is important to drink plenty of cold water. I keep a bottle on my desk to stay refreshed. This simple habit keeps me active.`,
    storyArabic: `في فترة الظهيرة الحارة، من المهم أن تشرب الكثير من الماء البارد. أحتفظ بزجاجة على مكتبي لأبقى منتعشاً. هذه العادة البسيطة تبقيني نشيطاً.`,
    question: {
      question: "Why is it important to drink plenty of cold water in the hot afternoon?",
      options: [
        "To stay refreshed, active, and well-hydrated throughout the day",
        "To prepare for a late night run",
        "To cool down a hot cup of tea",
        "To clean the office desk"
      ],
      answerIndex: 0,
      explanation: "من الضروري شرب (drink) كمية كافية من الماء البارد في الظهيرة الحارة للحفاظ على النشاط والانتعاش."
    }
  }),

  // 108. water
  water: (w) => ({
    word: w,
    title: "Crystal Water",
    titleArabic: "ماء صافٍ",
    storyEnglish: `Crystal clear water bubbled up from the underground spring, offering a refreshing drink to the thirsty travelers. Amira cupped her hands to catch the cool flow.`,
    storyArabic: `فارت مياه صافية كالكريستال من النبع الجوفي، مقدمة مشروباً منعشاً للمسافرين العطشى. كورت أميرة يديها لتلتقط التدفق البارد.`,
    question: {
      question: "How did the underground spring help the travelers?",
      options: [
        "It offered refreshing crystal clear water to drink after their journey",
        "It provided warm mineral baths",
        "It powered a small wooden watermill",
        "It filled a swimming pool"
      ],
      answerIndex: 0,
      explanation: "قدم النبع الجوفي ماءً (water) صافياً ومنعشاً للمسافرين العطشى."
    }
  }),

  // 109. tea
  tea: (w) => ({
    word: w,
    title: "A Quiet Tea",
    titleArabic: "شاي هادئ",
    storyEnglish: `Pour the hot tea into the ceramic mugs and let the herbal aroma fill the room. Sipping this warm beverage helps me relax while I watch the rain hit the windowpane. It is the perfect way to spend a quiet afternoon.`,
    storyArabic: `صب الشاي الساخن في أكواب السيراميك ودع رائحة الأعشاب تملأ الغرفة. يساعدني احتساء هذا المشروب الدافئ على الاسترخاء بينما أشاهد المطر يضرب نافذة الزجاج. إنها الطريقة المثالية لقضاء فترة بعد ظهر هادئة.`,
    question: {
      question: "How does sipping hot tea help during a rainy afternoon?",
      options: [
        "Helps relax while watching the rain hit the windowpane",
        "Helps you fall asleep immediately",
        "Keeps the room cool in summer",
        "Allows you to read in the dark"
      ],
      answerIndex: 0,
      explanation: "احتساء الشاي (tea) الساخن يملأ الغرفة برائحة الأعشاب الزكية ويساعد على الاسترخاء."
    }
  }),

  // 110. coffee
  coffee: (w) => ({
    word: w,
    title: "Morning Coffee",
    titleArabic: "قهوة الصباح",
    storyEnglish: `Many people cannot start their morning without a strong cup of coffee to wake up their senses. The dark roast provides a boost of energy that helps us focus on our tasks. You can smell the roasted beans from the shop across the street.`,
    storyArabic: `لا يستطيع الكثير من الناس بدء صباحهم بدون كوب قوي من القهوة لإيقاظ حواسهم. يوفر التحميص الداكن دفعة من الطاقة تساعدنا على التركيز في مهامنا. يمكنك شم رائحة الحبوب المحمصة من المتجر الواقع عبر الشارع.`,
    question: {
      question: "What benefit does a strong cup of morning coffee provide?",
      options: [
        "A boost of energy that wakes up the senses and helps focus on tasks",
        "Helps people fall asleep faster in the morning",
        "Replaces the need for breakfast food",
        "Acts as a cold soothing dessert"
      ],
      answerIndex: 0,
      explanation: "توفر القهوة (coffee) الصباحية القوية دفعة من النشاط والتركيز لبدء اليوم."
    }
  }),

  // 111. milk
  milk: (w) => ({
    word: w,
    title: "Cold Milk",
    titleArabic: "حليب بارد",
    storyEnglish: `Pour the cold milk over your morning cereal to make it easier to eat. We always keep a fresh carton in the fridge because it tastes delicious with cookies. Children enjoy drinking a glass before they go to sleep.`,
    storyArabic: `صب الحليب البارد فوق حبوب الإفطار الصباحية لجعلها أسهل في الأكل. نحن نحتفظ دائماً بكرتونة طازجة في الثلاجة لأن طعمها لذيذ مع البسكويت. يستمتع الأطفال بشرب كوب قبل الذهاب للنوم.`,
    question: {
      question: "Why do they keep a carton of cold milk in the fridge?",
      options: [
        "It is delicious with morning cereal and cookies, and children drink it before sleep",
        "To make soap bubbles in the sink",
        "To wash kitchen plates",
        "To water indoor flower pots"
      ],
      answerIndex: 0,
      explanation: "يصب الحليب (milk) البارد فوق الحبوب ويشربه الأطفال قبل النوم لفوائده ومذاقه اللذيذ."
    }
  }),

  // 112. juice
  juice: (w) => ({
    word: w,
    title: "Fresh Juice",
    titleArabic: "عصير طازج",
    storyEnglish: `Freshly squeezed orange juice tastes much better than the ones you buy in the plastic bottles. I use a manual press to get every drop of liquid out of the fruit. Nothing beats the taste of natural vitamins in the morning.`,
    storyArabic: `طعم عصير البرتقال الطازج أفضل بكثير من تلك التي تشتريها في الزجاجات البلاستيكية. أستخدم عصارة يدوية للحصول على كل قطرة سائل من الفاكهة. لا شيء يتفوق على طعم الفيتامينات الطبيعية في الصباح.`,
    question: {
      question: "Why is freshly squeezed juice preferred over bottled juice?",
      options: [
        "It tastes much better and offers natural vitamins in the morning",
        "It lasts for several years without cooling",
        "It is easier to carry on a bicycle",
        "It has no liquid inside"
      ],
      answerIndex: 0,
      explanation: "يتميز العصير (juice) البرتقال الطازج المعصور يدوياً بطعمه اللذيذ وفيتاميناته الطبيعية."
    }
  }),

  book: (w) => ({
    word: w,
    title: "Reading Space",
    titleArabic: "قراءة الفضاء",
    storyEnglish: `I found an old book about space exploration on the shelf. The pictures inside are amazing and very clear. I will read it during the weekend.`,
    storyArabic: `وجدت كتاباً قديماً عن استكشاف الفضاء على الرف. الصور بالداخل مدهشة وواضحة جداً. سأقرؤه خلال عطلة نهاية الأسبوع.`,
    question: {
      question: "What kind of book did the narrator find on the shelf?",
      options: [
        "An old book about space exploration with amazing and clear pictures",
        "A cookbook with soup recipes",
        "A dictionary of foreign languages",
        "A notebook filled with handwritten numbers"
      ],
      answerIndex: 0,
      explanation: "عثر المتحدث على كتاب (book) قديم رائع عن استكشاف الفضاء مليء بالصور الواضحة على الرف."
    }
  }),

  walk: (w) => ({
    word: w,
    title: "Old City Walk",
    titleArabic: "المشي في المدينة القديمة",
    storyEnglish: `I like to walk in the streets of the old city when the weather is quiet and nice. This daily tour helps me think clearly and enjoy watching the wonderful historical buildings around me. It is my favorite way to relax.`,
    storyArabic: `أحب أن أمشي في شوارع المدينة القديمة عندما يكون الجو هادئاً ولطيفاً. هذه الجولة اليومية تساعدني على التفكير بوضوح والاستمتاع بمشاهدة المباني التاريخية الرائعة من حولي. إنها طريقتي المفضلة للاسترخاء.`,
    question: {
      question: "Why does the narrator like to walk in the streets of the old city?",
      options: [
        "To think clearly, enjoy historical buildings, and relax when the weather is quiet and nice",
        "To shop at modern fashion stores",
        "To run a marathon with friends",
        "To avoid taking public buses"
      ],
      answerIndex: 0,
      explanation: "يحب الكاتب المشي (walk) في شوارع المدينة القديمة لتصفية ذهنه والاستمتاع بالمباني التاريخية."
    }
  }),

  look: (w) => ({
    word: w,
    title: "Looking at the Sky",
    titleArabic: "النظر للسماء",
    storyEnglish: `Look at the beautiful sky full of stars tonight. The air is fresh, and the moon is very bright. It is a perfect night for a walk.`,
    storyArabic: `انظر إلى السماء الجميلة المليئة بالنجوم الليلة. الهواء منعش، والقمر ساطع جداً. إنها ليلة مثالية للمشي.`,
    question: {
      question: "Why is tonight considered a perfect night for a walk?",
      options: [
        "The sky is full of stars, the air is fresh, and the moon is very bright",
        "A street carnival is taking place nearby",
        "The city streetlights have been turned off",
        "It is snowing heavily outside"
      ],
      answerIndex: 0,
      explanation: "النظر (look) إلى السماء المرصعة بالنجوم والقمر الساطع يظهر ليلة مثالية للمشي."
    }
  }),

  eat: (w) => ({
    word: w,
    title: "Eating Healthy",
    titleArabic: "الأكل الصحي",
    storyEnglish: `To stay healthy, one must eat fresh vegetables every single day. My brother prepares a salad with carrots and tomatoes for lunch. It tastes very delicious.`,
    storyArabic: `للبقاء بصحة جيدة، يجب على المرء أن يأكل الخضروات الطازجة كل يوم. أخي يحضر سلطة بالجزر والطماطم للغداء. طعمها لذيذ جداً.`,
    question: {
      question: "Why should one eat fresh vegetables every day according to the story?",
      options: [
        "To stay healthy and enjoy delicious nutritious salads",
        "To save money on groceries",
        "Because meat is not available",
        "To enter a cooking contest"
      ],
      answerIndex: 0,
      explanation: "تناول وأكل (eat) الخضروات الطازجة يومياً ضروري للبقاء بصحة جيدة."
    }
  }),

  car: (w) => ({
    word: w,
    title: "Driving to Work",
    titleArabic: "القيادة للعمل",
    storyEnglish: `He drives his car to work every morning. The traffic is very bad today, so he is late. He should leave earlier next time.`,
    storyArabic: `هو يقود سيارته إلى العمل كل صباح. حركة المرور سيئة جداً اليوم، لذا هو متأخر. يجب أن يغادر مبكراً في المرة القادمة.`,
    question: {
      question: "Why was the driver late for work today?",
      options: [
        "Because traffic was very bad while driving to work this morning",
        "Because the car broke down completely",
        "Because the office was closed",
        "Because he forgot his work badge at home"
      ],
      answerIndex: 0,
      explanation: "تأخر السائق عن العمل بسبب ازدحام حركة المرور السيئة أثناء قيادة سيارته (car) هذا الصباح."
    }
  }),

  happy: (w) => ({
    word: w,
    title: "Happy Children",
    titleArabic: "أطفال سعداء",
    storyEnglish: `Every child feels happy when they play with their friends in the park. They laugh and run around until the sun goes down. Playtime is the best part of the day.`,
    storyArabic: `كل طفل يشعر بالسعادة عندما يلعب مع أصدقائه في الحديقة. يضحكون ويركضون حولهم حتى تغرب الشمس. وقت اللعب هو أفضل جزء في اليوم.`,
    question: {
      question: "When does every child feel happy in the story?",
      options: [
        "When they play with friends in the park, laughing and running around until sunset",
        "When they have to do difficult chores alone",
        "When it rains and they cannot go outside",
        "When their toys are put away in boxes"
      ],
      answerIndex: 0,
      explanation: "يشعر كل طفل بأنه سعيد (happy) عندما يلعب ويمرح مع أصدقائه في الحديقة حتى الغروب."
    }
  }),

  help: (w) => ({
    word: w,
    title: "Helping Others",
    titleArabic: "مساعدة الآخرين",
    storyEnglish: `Always be ready to help others whenever they are in need. A small act of kindness can make someone's entire day much better. Friendship is very valuable.`,
    storyArabic: `كن دائماً مستعداً لمساعدة الآخرين كلما كانوا في حاجة. عمل صغير من اللطف يمكن أن يجعل يوم شخص ما أفضل بكثير. الصداقة قيمة جداً.`,
    question: {
      question: "Why should we always be ready to help others?",
      options: [
        "Because a small act of kindness can make someone's day much better",
        "To receive financial rewards in return",
        "To win a public medal of honor",
        "Because it is required by school rules"
      ],
      answerIndex: 0,
      explanation: "تقديم المساعدة (help) واللطف للآخرين يترك أثراً طيباً ويجعل يومهم أفضل بكثير."
    }
  }),

  // 113. bread
  bread: (w) => ({
    word: w,
    title: "Traditional Bread",
    titleArabic: "خبز تقليدي",
    storyEnglish: `Baking bread in the traditional stone oven gives it a crusty texture that everyone loves. The baker begins his work long before sunrise to ensure we have fresh loaves for breakfast. The smell of yeast fills the entire street every single day.`,
    storyArabic: `خبز الخبز في الفرن الحجري التقليدي يمنحه قواماً مقرمشاً يحبه الجميع. يبدأ الخباز عمله قبل شروق الشمس بوقت طويل لضمان حصولنا على أرغفة طازجة للإفطار. تملأ رائحة الخميرة الشارع بأكمله كل يوم.`,
    question: {
      question: "Why does the baker begin his work long before sunrise?",
      options: [
        "To ensure we have fresh loaves for breakfast",
        "To clean the oven with water",
        "To buy flour from the city market",
        "To prepare sweets for dinner"
      ],
      answerIndex: 0,
      explanation: "يبدأ الخباز عمله قبل الشروق لضمان توفير خبز (bread) طازج للإفطار."
    }
  }),

  // 114. rice
  rice: (w) => ({
    word: w,
    title: "Cooking Rice",
    titleArabic: "طهي الأرز",
    storyEnglish: `Boil the rice for exactly fifteen minutes until the grains become soft and fluffy. Some families prefer to add spices like saffron to give it a rich yellow color. It serves as the main side dish for almost every traditional lunch.`,
    storyArabic: `اغلِ الأرز لمدة خمس عشرة دقيقة بالضبط حتى تصبح الحبيبات ناعمة وهشة. تفضل بعض العائلات إضافة توابل مثل الزعفران لمنحه لوناً أصفر غنياً. إنه يعمل كطبق جانبي رئيسي لكل غداء تقليدي تقريباً.`,
    question: {
      question: "How long should you boil the rice until it becomes soft and fluffy?",
      options: [
        "For exactly fifteen minutes",
        "For two whole hours",
        "For only one minute",
        "All night long"
      ],
      answerIndex: 0,
      explanation: "يُغلى الأرز (rice) لمدة 15 دقيقة حتى تصبح حباته ناعمة وهشة."
    }
  }),

  // 115. meat
  meat: (w) => ({
    word: w,
    title: "Grilled Meat",
    titleArabic: "لحم مشوي",
    storyEnglish: `The chef prepares the meat by marinating it in a mix of secret herbs and spices. After grilling it over the open fire, he slices it into thin pieces. Guests praise the tender texture of every single serving.`,
    storyArabic: `يجهز الطاهي اللحم عن طريق نقعه في مزيج من الأعشاب والتوابل السرية. بعد شويه على النار المفتوحة، يقطعه إلى قطع رقيقة. يثني الضيوف على القوام الطري لكل حصة.`,
    question: {
      question: "How does the chef prepare the meat before grilling?",
      options: [
        "By marinating it in a mix of secret herbs and spices",
        "By freezing it in ice water",
        "By boiling it in plain milk",
        "By leaving it in the sun"
      ],
      answerIndex: 0,
      explanation: "يجهز الطاهي اللحم (meat) بنقعه في مزيج من الأعشاب والتوابل السرية."
    }
  }),

  // 116. fish
  fish: (w) => ({
    word: w,
    title: "Tropical Fish",
    titleArabic: "سمكة استوائية",
    storyEnglish: `A vibrant, tropical fish darted through the coral reefs, its scales sparkling in the clear turquoise water. It was a hidden gem in the vast, mysterious ocean.`,
    storyArabic: `اندفعت سمكة استوائية زاهية عبر الشعاب المرجانية، متلألئة حراشفها في المياه الفيروزية الصافية. كانت جوهرة مخفية في المحيط الشاسع الغامض.`,
    question: {
      question: "Where did the vibrant tropical fish dart through?",
      options: [
        "Through the coral reefs, its scales sparkling in clear turquoise water",
        "Into a dark underground cave",
        "Across a shallow muddy riverbank",
        "Inside an aquarium at a shopping mall"
      ],
      answerIndex: 0,
      explanation: "اندفعت السمكة (fish) الاستوائية متلألئة بين الشعاب المرجانية في المياه الفيروزية."
    }
  }),

  // 117. chicken
  chicken: (w) => ({
    word: w,
    title: "Roast Chicken",
    titleArabic: "دجاج مشوي",
    storyEnglish: `Roasting a whole chicken requires patience and steady heat to keep the inside juicy. We seasoned the skin with salt and pepper to ensure it turns golden brown. It is the star of our holiday celebration meal.`,
    storyArabic: `يتطلب تحميص دجاجة كاملة صبراً وحرارة ثابتة لإبقاء الداخل غنياً بالعصارة. تبّلنا الجلد بالملح والفلفل لضمان تحوله إلى اللون البني الذهبي. إنها نجمة وجبة احتفالنا بالعيد.`,
    question: {
      question: "What is required when roasting a whole chicken to keep it juicy?",
      options: [
        "Patience and steady heat",
        "Very cold water",
        "Cooking it in two minutes",
        "Cutting it into tiny pieces before cooking"
      ],
      answerIndex: 0,
      explanation: "تحميص الدجاج (chicken) يتطلب صبراً وحرارة ثابتة ليظل طرياً ولذيذاً."
    }
  }),

  // 118. egg
  egg: (w) => ({
    word: w,
    title: "Boiled Egg",
    titleArabic: "بيض مسلوق",
    storyEnglish: `Boiled egg provides a quick and protein-rich snack for people on the go. You can easily prepare it in just a few minutes while you make your morning tea. Sprinkle a little salt on top to enhance the flavor.`,
    storyArabic: `يوفر البيض المسلوق وجبة خفيفة سريعة وغنية بالبروتين للأشخاص الذين يتنقلون. يمكنك تحضيره بسهولة في بضع دقائق فقط بينما تصنع شاي الصباح. رش القليل من الملح على الوجه لتعزيز النكهة.`,
    question: {
      question: "What benefit does a boiled egg provide in the morning?",
      options: [
        "A quick and protein-rich snack that is easy to prepare",
        "It replaces the need for water",
        "It takes hours to cook",
        "It cools down hot tea"
      ],
      answerIndex: 0,
      explanation: "يوفر البيض (egg) المسلوق وجبة سريعة ومغذية غنية بالبروتين."
    }
  }),

  // 119. cheese
  cheese: (w) => ({
    word: w,
    title: "Creamy Cheese",
    titleArabic: "جبن كريمي",
    storyEnglish: `Spread a layer of creamy cheese on your toast to enjoy a savory snack. Different regions produce unique types with flavors ranging from mild to very sharp. It is an essential item for every picnic basket we pack.`,
    storyArabic: `افرد طبقة من الجبن الكريمي على خبزك المحمص للاستمتاع بوجبة خفيفة مالحة. تنتج المناطق المختلفة أنواعاً فريدة بنكهات تتراوح من الخفيفة إلى القوية جداً. إنه عنصر أساسي لكل سلة نزهة نحزمها.`,
    question: {
      question: "Where do they spread the creamy cheese for a savory snack?",
      options: [
        "On warm toast",
        "Inside an empty cup",
        "On fresh fruit slices",
        "Over raw rice"
      ],
      answerIndex: 0,
      explanation: "فرد الجبن (cheese) الكريمي على الخبز المحمص يمنح وجبة خفيفة ولذيذة للنزهات."
    }
  }),

  // 120. fruit
  fruit: (w) => ({
    word: w,
    title: "Fresh Fruit",
    titleArabic: "فاكهة طازجة",
    storyEnglish: `Eating fresh fruit every day helps maintain a healthy immune system and gives you energy. We visited the local market to pick seasonal options like strawberries and melons. The colors and sweet smells are absolutely amazing.`,
    storyArabic: `يساعد تناول فاكهة طازجة كل يوم في الحفاظ على جهاز مناعي صحي ويمنحك الطاقة. زرنا السوق المحلي لاختيار خيارات موسمية مثل الفراولة والبطيخ. الألوان والروائح الحلوة مذهلة تماماً.`,
    question: {
      question: "What is a major health benefit of eating fresh fruit every day?",
      options: [
        "Helps maintain a healthy immune system and provides energy",
        "Makes you feel tired quickly",
        "Reduces your hydration levels",
        "Replaces the need for sleep"
      ],
      answerIndex: 0,
      explanation: "تناول الفاكهة (fruit) الطازجة يومياً يعزز مناعة الجسم ويمده بالطاقة والنشاط."
    }
  }),

  // 121. vegetable
  vegetable: (w) => ({
    word: w,
    title: "Fresh Vegetable",
    titleArabic: "خضروات طازجة",
    storyEnglish: `Chopping a fresh vegetable for the salad takes only a few seconds if you have a sharp knife. Use bell peppers and cucumbers to get that satisfying crunch in every bite. Gardening allows us to grow these at home.`,
    storyArabic: `تقطيع خضروات طازجة للسلطة يستغرق بضع ثوانٍ فقط إذا كان لديك سكين حاد. استخدم الفلفل الرومي والخيار للحصول على تلك القرمشة المرضية في كل قضمة. تسمح لنا البستنة بزراعة هذه في المنزل.`,
    question: {
      question: "Which vegetables are mentioned for adding crunch to the salad?",
      options: [
        "Bell peppers and cucumbers",
        "Boiled potatoes and rice",
        "Sweet apples and bananas",
        "Cooked meat slices"
      ],
      answerIndex: 0,
      explanation: "تقطيع الخضروات (vegetable) الطازجة كالفلفل والخيار يضيف قرمشة رائعة للسلطة."
    }
  }),

  // 122. apple
  apple: (w) => ({
    word: w,
    title: "Crisp Apple",
    titleArabic: "تفاحة مقرمشة",
    storyEnglish: `Crunching into a crisp red apple provides a refreshing experience during a long study session. It is the perfect natural candy for kids who want something sweet. Keep a few in your bag for when you feel hungry later.`,
    storyArabic: `القضم في تفاحة حمراء مقرمشة يوفر تجربة منعشة خلال جلسة دراسة طويلة. إنها الحلوى الطبيعية المثالية للأطفال الذين يريدون شيئاً حلو المذاق. احتفظ ببضع قطع في حقيبتك عندما تشعر بالجوع لاحقاً.`,
    question: {
      question: "Why is a crisp red apple great to keep in your bag?",
      options: [
        "It is a refreshing, natural snack for when you feel hungry",
        "To use it as a study weight",
        "To wash books with it",
        "To color your notes red"
      ],
      answerIndex: 0,
      explanation: "تناول التفاحة (apple) المقرمشة يمنح الانتعاش والشبع كوجبة خفيفة طبيعية."
    }
  }),

  // 123. banana
  banana: (w) => ({
    word: w,
    title: "Sweet Banana",
    titleArabic: "موزة حلوة",
    storyEnglish: `Peel the yellow banana carefully to enjoy its soft and sweet texture. It is the best snack to carry when you go hiking in the mountains. The peel provides good compost for the garden soil afterwards.`,
    storyArabic: `قشر الموزة الصفراء بعناية للاستمتاع بقوامها الناعم والحلو. إنها أفضل وجبة خفيفة لحملها عندما تذهب للمشي لمسافات طويلة في الجبال. القشرة توفر سماداً جيداً لتربة الحديقة بعد ذلك.`,
    question: {
      question: "Why is a banana considered the best snack for mountain hiking?",
      options: [
        "It is easy to peel and provides a soft, sweet energizing snack",
        "It cools the mountain air",
        "It repels wild animals",
        "It helps build hiking shelters"
      ],
      answerIndex: 0,
      explanation: "الموز (banana) وجبة خفيفة سهلة التقشير وغنية بالطاقة ومثالية لرحلات المشي."
    }
  }),

  // 124. orange
  orange: (w) => ({
    word: w,
    title: "Orange Flames",
    titleArabic: "ألسنة لهب برتقالية",
    storyEnglish: `The orange flames of the campfire danced against the dark night sky. Ravi sat with his friends, telling stories that made everyone laugh until their stomachs hurt.`,
    storyArabic: `رقصت ألسنة اللهب البرتقالية لنار المخيم مقابل سماء الليل المظلمة. جلس رافي مع أصدقائه، يحكي قصصاً جعلت الجميع يضحكون حتى آلمتهم بطونهم.`,
    question: {
      question: "What were the orange flames of the campfire dancing against?",
      options: [
        "Against the dark night sky while friends shared funny stories",
        "Inside a glass fireplace in a mansion",
        "Underneath a rushing waterfall",
        "Across a snowy frozen lake"
      ],
      answerIndex: 0,
      explanation: "رقصت ألسنة اللهب البرتقالية (orange) لنار المخيم في سماء الليل المظلمة."
    }
  }),

  // 125. tomato
  tomato: (w) => ({
    word: w,
    title: "Ripe Tomato",
    titleArabic: "طماطم ناضجة",
    storyEnglish: `Slice a ripe red tomato to add color and acidity to your homemade sandwich. They grow very well in our backyard during the long sunny days. It is a versatile ingredient that appears in many different cuisines.`,
    storyArabic: `قطع طماطم حمراء ناضجة لإضافة لون وحموضة إلى شطيرتك المنزلية. إنها تنمو بشكل جيد جداً في فنائنا الخلفي خلال الأيام المشمسة الطويلة. إنه مكون متعدد الاستخدامات يظهر في العديد من المطابخ المختلفة.`,
    question: {
      question: "What does adding a slice of ripe tomato do to a homemade sandwich?",
      options: [
        "Adds color, freshness, and pleasant acidity",
        "Makes the bread completely dry",
        "Turns the sandwich into soup",
        "Cool the whole kitchen down"
      ],
      answerIndex: 0,
      explanation: "إضافة شرائح الطماطم (tomato) الناضجة تضفي لوناً ونكهة منعشة للشطائر."
    }
  }),

  // 126. potato
  potato: (w) => ({
    word: w,
    title: "Fried Potato",
    titleArabic: "بطاطس مقلية",
    storyEnglish: `We fried the potato wedges until they reached a perfect golden brown color. Everyone loves them served with a little bit of salt and herbs. It is the ultimate comfort food for a lazy weekend.`,
    storyArabic: `قلينا أصابع البطاطس حتى وصلت إلى لون بني ذهبي مثالي. يحبها الجميع مقدمة مع القليل من الملح والأعشاب. إنها طعام الراحة الأمثل لعطلة نهاية الأسبوع الكسولة.`,
    question: {
      question: "How were the potato wedges cooked in the story?",
      options: [
        "Fried until they reached a perfect golden brown color",
        "Boiled in sweet milk",
        "Baked without any seasoning",
        "Frozen in ice blocks"
      ],
      answerIndex: 0,
      explanation: "قلي أصابع البطاطس (potato) حتى تكتسب لوناً ذهبياً يقدم طعاماً لذيذاً ومحبوباً."
    }
  }),

  // 127. sugar
  sugar: (w) => ({
    word: w,
    title: "Spoonful of Sugar",
    titleArabic: "ملعقة سكر",
    storyEnglish: `Add a spoonful of sugar to your drink if you prefer it to be sweeter. We keep it in a small glass container on the kitchen counter for easy access. Remember that too much is not good for your health.`,
    storyArabic: `أضف ملعقة من السكر إلى مشروبك إذا كنت تفضل أن يكون أكثر حلاوة. نحتفظ به في وعاء زجاجي صغير على طاولة المطبخ لسهولة الوصول إليه. تذكر أن الكثير منه ليس جيداً لصحتك.`,
    question: {
      question: "What caution is mentioned about consuming sugar?",
      options: [
        "Remember that consuming too much is not good for your health",
        "Never keep it on the kitchen counter",
        "Always mix it with cold oil",
        "Do not use glass containers"
      ],
      answerIndex: 0,
      explanation: "إضافة السكر (sugar) تحلي المشروبات، ولكن الإفراط فيه غير صحي."
    }
  }),

  // 128. salt
  salt: (w) => ({
    word: w,
    title: "Seasoning with Salt",
    titleArabic: "التتبيل بالملح",
    storyEnglish: `Too much salt can ruin the flavor of a perfectly cooked meal. Use it sparingly to balance the other ingredients in your soup or stew. Most professional chefs taste their food before adding any seasoning.`,
    storyArabic: `الكثير من الملح يمكن أن يفسد نكهة وجبة مطبوخة بشكل مثالي. استخدمه باعتدال لموازنة المكونات الأخرى في حسائك أو يخنتك. معظم الطهاة المحترفين يتذوقون طعامهم قبل إضافة أي توابل.`,
    question: {
      question: "Why should you use salt sparingly when cooking?",
      options: [
        "Because too much salt can ruin the flavor of a meal",
        "Because salt turns food dark green",
        "Because salt stops food from cooking",
        "Because salt cools down boiling soup"
      ],
      answerIndex: 0,
      explanation: "استخدام الملح (salt) باعتدال يوازن النكهات دون إفساد مذاق الوجبة."
    }
  }),

  // 129. sweet
  sweet: (w) => ({
    word: w,
    title: "After Dinner Sweet",
    titleArabic: "حلوى بعد العشاء",
    storyEnglish: `After the main dinner, we served a small sweet to satisfy everyone's cravings. It was a chocolate cake topped with berries and whipped cream. Seeing everyone enjoy the dessert makes all the hard work worthwhile.`,
    storyArabic: `بعد العشاء الرئيسي، قدمنا حلوى صغيرة لإرضاء رغبات الجميع. كانت كعكة شوكولاتة مغطاة بالتوت والكريمة المخفوقة. رؤية الجميع يستمتعون بالحلوى تجعل كل العمل الشاق يستحق العناء.`,
    question: {
      question: "What sweet dessert was served after the main dinner?",
      options: [
        "A chocolate cake topped with berries and whipped cream",
        "A bowl of vegetable soup",
        "A plate of grilled chicken",
        "A plain cup of black coffee"
      ],
      answerIndex: 0,
      explanation: "تقديم حلوى (sweet) كعكة الشوكولاتة بعد العشاء أسعد الجميع بعد يوم حافل."
    }
  }),

  // 130. breakfast
  breakfast: (w) => ({
    word: w,
    title: "Nutritious Breakfast",
    titleArabic: "إفطار مغذٍ",
    storyEnglish: `Eat a nutritious breakfast to fuel your body for the challenges of the coming day. Skipping this important meal often leads to feeling tired before noon. We like to have eggs and toast every single morning.`,
    storyArabic: `تناول إفطاراً مغذياً لتزويد جسمك بالطاقة لتحديات اليوم القادم. تجاهل هذه الوجبة المهمة يؤدي غالباً إلى الشعور بالتعب قبل الظهر. نحن نحب تناول البيض والخبز المحمص كل صباح.`,
    question: {
      question: "What can happen if you skip your morning breakfast?",
      options: [
        "It often leads to feeling tired before noon",
        "It gives you extra energy all day",
        "It makes you run much faster",
        "It prevents you from sleeping at night"
      ],
      answerIndex: 0,
      explanation: "تناول وجبة إفطار (breakfast) مغذية يمنح الجسم الطاقة ويمنع التعب المبكر."
    }
  }),

  // 131. lunch
  lunch: (w) => ({
    word: w,
    title: "Lunch Break",
    titleArabic: "استراحة الغداء",
    storyEnglish: `During our lunch break, we go to the park to sit under the large trees. It gives us a chance to escape the office noise and enjoy a quick meal. The fresh air helps us return to work with a clearer mind.`,
    storyArabic: `خلال استراحة الغداء، نذهب إلى الحديقة للجلوس تحت الأشجار الكبيرة. إنها تمنحنا فرصة للهروب من ضوضاء المكتب والاستمتاع بوجبة سريعة. الهواء النقي يساعدنا على العودة للعمل بعقل أكثر صفاءً.`,
    question: {
      question: "Why do they go to the park during their lunch break?",
      options: [
        "To sit under large trees, escape office noise, and enjoy a quick meal",
        "To do heavy construction work",
        "To buy new office furniture",
        "To sleep all day long"
      ],
      answerIndex: 0,
      explanation: "استراحة الغداء (lunch) في الحديقة تمنح فرصة لتناول وجبة سريعة والعودة بنشاط للعمل."
    }
  }),

  // 132. dinner
  dinner: (w) => ({
    word: w,
    title: "Formal Dinner",
    titleArabic: "عشاء رسمي",
    storyEnglish: `We prepare a formal dinner whenever we invite our friends over to the house. It is the best time to sit and talk about our lives in a relaxed atmosphere. The candles on the table add a special touch to the evening.`,
    storyArabic: `نعد عشاءً رسمياً كلما دعونا أصدقاءنا إلى المنزل. إنه أفضل وقت للجلوس والتحدث عن حياتنا في جو مريح. الشموع على الطاولة تضيف لمسة خاصة إلى الأمسية.`,
    question: {
      question: "Why do they prepare a formal dinner when inviting friends over?",
      options: [
        "To sit and talk about their lives in a relaxed, warm atmosphere",
        "To quickly clean the entire house",
        "To watch a silent movie without talking",
        "To study for difficult exams"
      ],
      answerIndex: 0,
      explanation: "إعداد عشاء (dinner) رسمي للأصدقاء يوفر وقتاً رائعاً للحديث والاسترخاء."
    }
  }),

  // 133. meal
  meal: (w) => ({
    word: w,
    title: "Homemade Meal",
    titleArabic: "وجبة منزلية",
    storyEnglish: `Cooking a homemade meal allows you to control the ingredients and the quality of food. It is also much cheaper than ordering takeout from restaurants every single day. Practice makes perfect when you try to learn new recipes.`,
    storyArabic: `طبخ وجبة منزلية يسمح لك بالتحكم في المكونات وجودة الطعام. إنه أيضاً أرخص بكثير من طلب الوجبات الجاهزة من المطاعم كل يوم. الممارسة تصنع الكمال عندما تحاول تعلم وصفات جديدة.`,
    question: {
      question: "What is an advantage of cooking a homemade meal?",
      options: [
        "It allows you to control ingredients, food quality, and save money",
        "It takes less than ten seconds to finish",
        "It prevents you from learning any recipes",
        "It requires no cooking tools at all"
      ],
      answerIndex: 0,
      explanation: "طبخ وجبة (meal) منزلية يتيح التحكم بجودة المكونات وتوفير المال."
    }
  }),

  // 134. hungry
  hungry: (w) => ({
    word: w,
    title: "Feeling Hungry",
    titleArabic: "الشعور بالجوع",
    storyEnglish: `The long hike left everyone feeling very hungry by the time we reached the camp. We quickly gathered wood to start a fire for cooking our supplies. The first bite of food tasted like a masterpiece.`,
    storyArabic: `تركت الرحلة الطويلة الجميع يشعرون بالجوع الشديد بحلول الوقت الذي وصلنا فيه إلى المخيم. جمعنا الخشب بسرعة لإشعال النار لطبخ مؤننا. بدت القضمة الأولى من الطعام وكأنها تحفة فنية.`,
    question: {
      question: "What did the hikers do because they were feeling very hungry?",
      options: [
        "Quickly gathered wood to start a fire and cook their food supplies",
        "Continued hiking all night without resting",
        "Threw away all their cooking pots",
        "Went swimming in a cold lake"
      ],
      answerIndex: 0,
      explanation: "الشعور بالجوع (hungry) بعد المشي الطويل دفعهم لجمع الحطب وطهي الطعام بسرعة."
    }
  }),

  // 135. thirsty
  thirsty: (w) => ({
    word: w,
    title: "Feeling Thirsty",
    titleArabic: "الشعور بالعطش",
    storyEnglish: `Working in the sun all day makes you feel extremely thirsty for a glass of water. Keep a bottle nearby at all times to prevent yourself from feeling dehydrated. Your body needs constant fluid to function correctly.`,
    storyArabic: `العمل تحت الشمس طوال اليوم يجعلك تشعر بالعطش الشديد لكوب من الماء. احتفظ بزجاجة بالقرب منك في جميع الأوقات لتمنع نفسك من الشعور بالجفاف. يحتاج جسمك إلى سوائل مستمرة ليعمل بشكل صحيح.`,
    question: {
      question: "Why is it important to keep a bottle nearby when you feel thirsty in the sun?",
      options: [
        "To prevent dehydration and supply your body with needed fluids",
        "To water roadside plants",
        "To wash dusty cars quickly",
        "To measure the air temperature"
      ],
      answerIndex: 0,
      explanation: "شرب الماء عند الشعور بالعطش (thirsty) تحت الشمس يحمي الجسم من الجفاف."
    }
  }),

  // 136. fork
  fork: (w) => ({
    word: w,
    title: "Eating with a Fork",
    titleArabic: "الأكل بالشوكة",
    storyEnglish: `Pick up your fork to eat the salad without making a mess on the table. It is an essential tool for enjoying many types of food around the world. We have many different sets in the kitchen drawer.`,
    storyArabic: `التقط شوكتك لتأكل السلطة دون إحداث فوضى على الطاولة. إنها أداة أساسية للاستمتاع بالعديد من أنواع الطعام حول العالم. لدينا العديد من المجموعات المختلفة في درج المطبخ.`,
    question: {
      question: "What is the purpose of using a fork when eating salad?",
      options: [
        "To eat cleanly without making a mess on the table",
        "To cut hard bones easily",
        "To drink soup from a bowl",
        "To boil water faster"
      ],
      answerIndex: 0,
      explanation: "استخدام الشوكة (fork) أداة أساسية لتناول السلطة والأطعمة بنظافة وترتيب."
    }
  }),

  // 137. knife
  knife: (w) => ({
    word: w,
    title: "Using a Knife",
    titleArabic: "استخدام السكين",
    storyEnglish: `Use a sharp knife to slice the meat into thin and even pieces. Be careful when you handle it to avoid hurting your fingers during the preparation. It is the most important tool in every kitchen.`,
    storyArabic: `استخدم سكيناً حاداً لتقطيع اللحم إلى قطع رقيقة ومتساوية. كن حذراً عند التعامل معه لتجنب جرح أصابعك أثناء التحضير. إنه الأداة الأكثر أهمية في كل مطبخ.`,
    question: {
      question: "Why must you be careful when handling a sharp knife?",
      options: [
        "To avoid hurting your fingers during food preparation",
        "To prevent making too much noise",
        "To stop the meat from getting cold",
        "To make the table look clean"
      ],
      answerIndex: 0,
      explanation: "استخدام السكين (knife) الحاد يتطلب حذراً لتجنب جرح الأصابع أثناء التقطيع."
    }
  }),

  // 138. cup
  cup: (w) => ({
    word: w,
    title: "The Hot Cup",
    titleArabic: "الكوب الساخن",
    storyEnglish: `Hold the hot cup with both hands to feel the warmth on a cold day. It is perfect for serving coffee, tea, or even hot chocolate after a long afternoon. Wash it carefully after each use to keep it clean.`,
    storyArabic: `أمسك الكوب الساخن بكلتا يديك لتشعر بالدفء في يوم بارد. إنه مثالي لتقديم القهوة أو الشاي أو حتى الشوكولاتة الساخنة بعد فترة بعد ظهر طويلة. اغسله بعناية بعد كل استخدام للحفاظ على نظافته.`,
    question: {
      question: "What beverages is the cup perfect for serving?",
      options: [
        "Coffee, tea, or hot chocolate after a long afternoon",
        "Cold ice cubes only",
        "Cooking oil and vinegar",
        "Raw grains of rice"
      ],
      answerIndex: 0,
      explanation: "إمساك الكوب (cup) الساخن يمنح الدفء وهو مثالي للشاي والقهوة والشوكولاتة."
    }
  }),

  // 139. glass
  glass: (w) => ({
    word: w,
    title: "Filling a Glass",
    titleArabic: "ملء الكأس",
    storyEnglish: `Fill the glass with ice and water to create a refreshing drink for your guests. The transparent surface shows the beautiful colors of the beverages inside. Handle it gently because it can break if it falls.`,
    storyArabic: `املأ الكوب بالثلج والماء لإنشاء مشروب منعش لضيوفك. السطح الشفاف يظهر الألوان الجميلة للمشروبات في الداخل. تعامل معه بلطف لأنه يمكن أن ينكسر إذا سقط.`,
    question: {
      question: "Why should you handle a glass gently?",
      options: [
        "Because it can break easily if it falls",
        "Because it gets hot instantly",
        "Because it changes color when touched",
        "Because it cannot hold cold liquids"
      ],
      answerIndex: 0,
      explanation: "يجب التعامل مع الكأس الزجاجي (glass) بلطف لأنه قابل للكسر عند سقوطه."
    }
  }),

  // 140. oil
  oil: (w) => ({
    word: w,
    title: "Cooking Oil",
    titleArabic: "زيت الطبخ",
    storyEnglish: `Add a little bit of oil to the pan before you start cooking the vegetables. It prevents the food from sticking to the surface and adds a rich texture to the dish. We prefer using sunflower oil variety for better health results.`,
    storyArabic: `أضف القليل من الزيت إلى المقلاة قبل أن تبدأ في طبخ الخضروات. إنه يمنع الطعام من الالتصاق بالسطح ويضيف قواماً غنياً للطبق. نحن نفضل استخدام نوع دوار الشمس لنتائج صحية أفضل.`,
    question: {
      question: "Why is oil added to the pan before cooking vegetables?",
      options: [
        "It prevents food from sticking and adds a rich texture to the dish",
        "It turns vegetables into ice",
        "It cools the pan down completely",
        "It removes all natural flavors"
      ],
      answerIndex: 0,
      explanation: "إضافة زيت (oil) الطبخ للمقلاة تمنع التصاق الطعام وتضفي قواماً مميزاً."
    }
  }),

  // 141. body
  body: (w) => ({
    word: w,
    title: "Your Body",
    titleArabic: "جسمك",
    storyEnglish: `Your body works hard every day to keep you active and strong. Taking care of yourself through exercise and good nutrition helps your muscles and organs function perfectly. Remember that movement is essential for feeling your best.`,
    storyArabic: `جسمك يعمل بجد كل يوم ليبقيك نشيطاً وقوياً. العناية بنفسك من خلال التمارين والتغذية الجيدة تساعد عضلاتك وأعضائك على العمل بشكل مثالي. تذكر أن الحركة ضرورية للشعور بأفضل حالاتك.`,
    question: {
      question: "What helps your body function perfectly and stay strong?",
      options: [
        "Taking care through regular exercise, good nutrition, and active movement",
        "Staying awake for several days without resting",
        "Avoiding any physical movement",
        "Skipping all daily meals"
      ],
      answerIndex: 0,
      explanation: "الحفاظ على صحة الجسم (body) يكون بالتمارين والتغذية السليمة والحركة المستمرة."
    }
  }),

  // 142. head
  head: (w) => ({
    word: w,
    title: "Resting Your Head",
    titleArabic: "إراحة رأسك",
    storyEnglish: `Rest your head on the soft pillow after a long, busy day. It feels so good to finally stop thinking and just relax in the quiet darkness of the bedroom. The silence helps your mind settle down for the night.`,
    storyArabic: `أرح رأسك على الوسادة الناعمة بعد يوم طويل ومزدحم. إنه شعور رائع أن تتوقف أخيراً عن التفكير وتسترخي فقط في ظلام غرفة النوم الهادئ. يساعد الصمت عقلك على الاستقرار ليلاً.`,
    question: {
      question: "Why does resting your head on a pillow feel so good after a busy day?",
      options: [
        "It allows you to relax, stop thinking, and let your mind settle down in quietness",
        "It makes you wake up immediately",
        "It helps you do heavy exercises in bed",
        "It prepares you for noisy meetings"
      ],
      answerIndex: 0,
      explanation: "إراحة الرأس (head) على وسادة ناعمة تتيح الاسترخاء وتهدئة العقل للنوم."
    }
  }),

  // 143. face
  face: (w) => ({
    word: w,
    title: "Washing Your Face",
    titleArabic: "غسل وجهك",
    storyEnglish: `Splashing cold water on your face every morning helps you feel awake and alert. It is a simple habit that clears away the sleepiness from your eyes. You will feel ready to face the new challenges of the day.`,
    storyArabic: `رش الماء البارد على وجهك كل صباح يساعدك على الشعور باليقظة والانتباه. إنها عادة بسيطة تزيل النعاس من عينيك. ستشعر بالاستعداد لمواجهة تحديات اليوم الجديدة.`,
    question: {
      question: "What is the benefit of splashing cold water on your face every morning?",
      options: [
        "It clears sleepiness and helps you feel awake, alert, and ready for the day",
        "It makes you feel sleepy immediately",
        "It helps you fall back to sleep",
        "It changes the color of your eyes"
      ],
      answerIndex: 0,
      explanation: "غسل الوجه (face) بالماء البارد صباحاً يزيل النعاس ويمنح الانتباه والنشاط."
    }
  }),

  // 144. eye
  eye: (w) => ({
    word: w,
    title: "Looking with Your Eye",
    titleArabic: "النظر بعينك",
    storyEnglish: `Look into my eye and tell me what you see in the distance. The vast horizon is beautiful, and I want to make sure you notice every detail. Your vision is a wonderful gift that allows you to see the world.`,
    storyArabic: `انظر في عيني وأخبرني بما تراه في الأفق. الأفق الواسع جميل، وأريد التأكد من أنك تلاحظ كل تفصيل. رؤيتك هدية رائعة تسمح لك برؤية العالم.`,
    question: {
      question: "What wonderful gift does your eye and vision provide?",
      options: [
        "It allows you to see the beautiful world and notice every detail in the horizon",
        "It allows you to hear distant music",
        "It helps you smell flowers",
        "It keeps your body warm in winter"
      ],
      answerIndex: 0,
      explanation: "العين (eye) والرؤية نعمة رائعة تتيح مشاهدة العالم وتفاصيل الطبيعة الجميلة."
    }
  }),

  // 145. ear
  ear: (w) => ({
    word: w,
    title: "Listen with Your Ear",
    titleArabic: "الاستماع بأذنك",
    storyEnglish: `Listen with your ear to the gentle sound of the wind blowing through the trees. It is a peaceful melody that nature creates for us to enjoy. Sometimes, just sitting still and hearing the world is enough.`,
    storyArabic: `استمع بأذنك إلى صوت الرياح اللطيف الذي يهب عبر الأشجار. إنها لحن هادئ تخلقه الطبيعة لنا لنستمتع به. أحياناً، يكفي الجلوس ساكناً وسماع العالم.`,
    question: {
      question: "What peaceful sound can you hear with your ear in nature?",
      options: [
        "The gentle sound of the wind blowing through the trees",
        "Loud car horns in city traffic",
        "The noise of heavy construction tools",
        "Sirens on a busy highway"
      ],
      answerIndex: 0,
      explanation: "الاستماع بالأذن (ear) لصوت الرياح بين الأشجار يمنح شعوراً بالهدوء والاستمتاع بالطبيعة."
    }
  }),

  // 146. nose
  nose: (w) => ({
    word: w,
    title: "Using Your Nose",
    titleArabic: "استخدام أنفك",
    storyEnglish: `The sweet scent of freshly baked cookies enters through my nose and makes me hungry. I love walking past the bakery because the smell is always so inviting. It reminds me of happy moments spent with family.`,
    storyArabic: `رائحة البسكويت المخبوز حديثاً الحلوة تدخل من خلال أنفي وتجعلني جائعاً. أحب المرور بجانب المخبز لأن الرائحة دائماً جذابة جداً. تذكرني بلحظات سعيدة قضيتها مع العائلة.`,
    question: {
      question: "What enters through the nose when walking past the bakery?",
      options: [
        "The sweet, inviting scent of freshly baked cookies",
        "A strong smell of burning gasoline",
        "Cold saltwater droplets",
        "Dust from the road"
      ],
      answerIndex: 0,
      explanation: "دخول الرائحة الزكية عبر الأنف (nose) يفتح الشهية ويذكر باللحظات العائلية السعيدة."
    }
  }),

  // 147. mouth
  mouth: (w) => ({
    word: w,
    title: "Opening Your Mouth",
    titleArabic: "فتح فمك",
    storyEnglish: `Open your mouth wide so the dentist can check if everything is okay. It is important to keep your teeth strong and your gums clean for a great smile. Visiting the clinic twice a year is a smart decision.`,
    storyArabic: `افتح فمك على اتساعه ليتمكن طبيب الأسنان من التأكد من أن كل شيء على ما يرام. من المهم الحفاظ على أسنانك قوية ولثتك نظيفة لابتسامة رائعة. زيارة العيادة مرتين في السنة قرار ذكي.`,
    question: {
      question: "Why do you open your mouth wide at the dentist clinic?",
      options: [
        "So the dentist can check your teeth and gums to keep them clean and strong",
        "To drink a cold glass of juice",
        "To test your hearing ability",
        "To read a book out loud"
      ],
      answerIndex: 0,
      explanation: "فتح الفم (mouth) عند طبيب الأسنان يسمح بفحص الأسنان واللثة والحفاظ على ابتسامة صحية."
    }
  }),

  // 148. tooth
  tooth: (w) => ({
    word: w,
    title: "Healthy Tooth",
    titleArabic: "سن صحي",
    storyEnglish: `You should brush every single tooth twice a day to prevent cavities. It only takes two minutes, but it protects your smile for many years. Healthy habits today mean fewer problems for you in the future.`,
    storyArabic: `يجب عليك تنظيف كل سن مرتين في اليوم لمنع التسوس. يستغرق الأمر دقيقتين فقط، لكنه يحمي ابتسامتك لسنوات عديدة. العادات الصحية اليوم تعني مشاكل أقل لك في المستقبل.`,
    question: {
      question: "How often should you brush each tooth to prevent cavities?",
      options: [
        "Twice a day for two minutes",
        "Once a month only",
        "Only before going on vacation",
        "Never during the week"
      ],
      answerIndex: 0,
      explanation: "تنظيف كل سن (tooth) مرتين يومياً يحمي الأسنان من التسوس ويحافظ على الابتسامة."
    }
  }),

  // 149. teeth
  teeth: (w) => ({
    word: w,
    title: "White Teeth",
    titleArabic: "أسنان بيضاء",
    storyEnglish: `White teeth brighten up your face whenever you smile at your friends. Proper cleaning keeps them looking their best and prevents any discomfort. Everyone appreciates a bright and confident smile during a conversation.`,
    storyArabic: `الأسنان البيضاء تضيء وجهك كلما ابتسمت لأصدقائك. التنظيف السليم يبقيها في أفضل حالاتها ويمنع أي إزعاج. يقدر الجميع ابتسامة مشرقة وواثقة أثناء المحادثة.`,
    question: {
      question: "What benefit do white and clean teeth provide when you smile?",
      options: [
        "Brighten up your face and boost confidence during conversations",
        "Make you speak much louder",
        "Change the color of your eyes",
        "Help you run faster"
      ],
      answerIndex: 0,
      explanation: "الأسنان (teeth) البيضاء والنظيفة تمنح الوجه إشراقة وثقة عند الابتسام."
    }
  }),

  // 150. hair
  hair: (w) => ({
    word: w,
    title: "Brushing Your Hair",
    titleArabic: "تمشيط شعرك",
    storyEnglish: `She brushed her long, brown hair until it looked smooth and shiny. It is fun to try new styles for special occasions like parties or weddings. A little bit of care keeps it strong and healthy for a long time.`,
    storyArabic: `مشطت شعرها البني الطويل حتى بدا ناعماً ولامعاً. من الممتع تجربة تسريحات جديدة للمناسبات الخاصة مثل الحفلات أو الأعراس. القليل من العناية يبقيه قوياً وصحياً لفترة طويلة.`,
    question: {
      question: "Why did she brush her long brown hair?",
      options: [
        "Until it looked smooth, shiny, and well-cared for",
        "To cut it very short immediately",
        "To change its color to green",
        "To keep it completely wet"
      ],
      answerIndex: 0,
      explanation: "تمشيط الشعر (hair) والعناية به يبقيه ناعماً ولامعاً وقوياً."
    }
  }),

  // 151. hand
  hand: (w) => ({
    word: w,
    title: "Holding a Hand",
    titleArabic: "إمساك يد",
    storyEnglish: `Hold my hand while we cross the busy street together. It is important to stay safe when there are many cars moving quickly around us. Your grip feels warm and makes me feel very secure.`,
    storyArabic: `أمسك يدي بينما نعبر الشارع المزدحم معاً. من المهم البقاء آمنين عندما تكون هناك العديد من السيارات التي تتحرك بسرعة من حولنا. قبضتك تشعرك بالدفء وتجعلني أشعر بالأمان الشديد.`,
    question: {
      question: "Why is it important to hold hands while crossing the busy street?",
      options: [
        "To stay safe and secure when cars are moving quickly",
        "To run into the road without looking",
        "To carry heavy luggage across the bridge",
        "To stop the traffic permanently"
      ],
      answerIndex: 0,
      explanation: "إمساك اليد (hand) عند عبور الشارع المزدحم يوفر الأمان والسلامة من حركة السيارات."
    }
  }),

  // 152. arm
  arm: (w) => ({
    word: w,
    title: "Your Arm",
    titleArabic: "ذراعك",
    storyEnglish: `Carry the heavy basket in your arm so you do not hurt your back. Distributing the weight properly makes it much easier to walk long distances. You look like you are doing a great job moving those boxes.`,
    storyArabic: `احمل السلة الثقيلة في ذراعك حتى لا تؤذي ظهرك. توزيع الوزن بشكل صحيح يجعل المشي لمسافات طويلة أسهل بكثير. يبدو أنك تقوم بعمل رائع في نقل تلك الصناديق.`,
    question: {
      question: "Why should you carry the heavy basket in your arm?",
      options: [
        "To distribute the weight properly and avoid hurting your back",
        "To make the basket heavier",
        "To throw the contents on the ground",
        "To stop yourself from walking"
      ],
      answerIndex: 0,
      explanation: "حمل السلة بالذراع (arm) يوزع الثقل ويحمي الظهر أثناء المشي."
    }
  }),

  // 153. leg
  leg: (w) => ({
    word: w,
    title: "Stretch Your Leg",
    titleArabic: "مدد ساقك",
    storyEnglish: `Stretch your leg after sitting for a long time to keep your muscles flexible. Walking or running helps you stay fit and ready for any activity. It is important to keep your limbs moving throughout the day.`,
    storyArabic: `مدد ساقك بعد الجلوس لفترة طويلة للحفاظ على مرونة عضلاتك. يساعدك المشي أو الجري في الحفاظ على لياقتك والاستعداد لأي نشاط. من المهم الحفاظ على حركة أطرافك طوال اليوم.`,
    question: {
      question: "Why is stretching your leg recommended after sitting for a long time?",
      options: [
        "To keep your muscles flexible and maintain fitness",
        "To fall asleep while sitting",
        "To avoid moving throughout the day",
        "To stop walking completely"
      ],
      answerIndex: 0,
      explanation: "تمديد الساق (leg) بعد الجلوس الطويل يحافظ على مرونة العضلات واللياقة."
    }
  }),

  // 154. foot
  foot: (w) => ({
    word: w,
    title: "My Foot",
    titleArabic: "قدمي",
    storyEnglish: `My foot hurts because I walked too many miles in these uncomfortable shoes. I need to take a break and wear something soft for the rest of the day. It is better to choose comfort when you plan to travel.`,
    storyArabic: `قدمي تؤلمني لأنني مشيت أميالاً كثيرة جداً بهذا الحذاء غير المريح. أحتاج إلى أخذ استراحة وارتداء شيء ناعم لبقية اليوم. من الأفضل اختيار الراحة عندما تخطط للسفر.`,
    question: {
      question: "Why does the narrator's foot hurt?",
      options: [
        "Because of walking too many miles in uncomfortable shoes",
        "Because of swimming in cold water",
        "Because of sitting on a soft sofa",
        "Because of sleeping all day"
      ],
      answerIndex: 0,
      explanation: "ألم القدم (foot) كان نتيجة المشي لمسافات طويلة بحذاء غير مريح."
    }
  }),

  // 155. feet
  feet: (w) => ({
    word: w,
    title: "Walking on Feet",
    titleArabic: "المشي على القدمين",
    storyEnglish: `The sand felt warm under my feet as I walked along the beach. Watching the waves hit the shore is a relaxing way to spend the afternoon. Nature always helps me feel connected and peaceful.`,
    storyArabic: `شعرت بالرمل دافئاً تحت قدماي بينما كنت أمشي على طول الشاطئ. مراقبة الأمواج وهي تضرب الشاطئ طريقة مريحة لقضاء فترة بعد الظهر. تساعدني الطبيعة دائماً على الشعور بالارتباط والسلام.`,
    question: {
      question: "What felt warm under the narrator's feet while walking on the beach?",
      options: [
        "The beach sand under the afternoon sun",
        "Cold ocean snow",
        "Sharp stones on the road",
        "A thick wooden floor"
      ],
      answerIndex: 0,
      explanation: "المشي بالقدمين (feet) على رمال الشاطئ الدافئة يساعد على الاسترخاء والهدوء."
    }
  }),

  // 156. finger
  finger: (w) => ({
    word: w,
    title: "Point Your Finger",
    titleArabic: "وجه إصبعك",
    storyEnglish: `Point your finger at the map to show me exactly where we need to go. It helps to be precise when you are trying to find a new location. We can arrive much faster if we know the correct path.`,
    storyArabic: `وجه إصبعك نحو الخريطة لتريني بالضبط إلى أين نحتاج للذهاب. من المفيد أن تكون دقيقاً عندما تحاول العثور على موقع جديد. يمكننا الوصول بشكل أسرع بكثير إذا عرفنا المسار الصحيح.`,
    question: {
      question: "Why should you point your finger at the map?",
      options: [
        "To show the exact destination and help find the correct path faster",
        "To cover the whole map so no one sees it",
        "To draw a picture with ink",
        "To fold the map into small pieces"
      ],
      answerIndex: 0,
      explanation: "توجيه الإصبع (finger) نحو الخريطة يحدد الوجهة بدقة ويسرع الوصول."
    }
  }),

  // 157. heart
  heart: (w) => ({
    word: w,
    title: "Healthy Heart",
    titleArabic: "قلب صحي",
    storyEnglish: `A healthy heart pumps blood through your body to keep you strong. Regular exercise is the best way to make sure it stays in great condition. Listen to your rhythm and enjoy the feeling of being alive.`,
    storyArabic: `القلب الصحي يضخ الدم عبر جسمك ليبقيك قوياً. التمارين المنتظمة هي أفضل طريقة للتأكد من بقائه في حالة رائعة. استمع إلى إيقاعك واستمتع بشعور كونك على قيد الحياة.`,
    question: {
      question: "What is the vital role of a healthy heart in your body?",
      options: [
        "It pumps blood through your body to keep you strong and alive",
        "It stores food for winter",
        "It cools down the room temperature",
        "It helps you read books faster"
      ],
      answerIndex: 0,
      explanation: "القلب (heart) الصحي يضخ الدم في الجسم وتساعد التمارين الرياضية في الحفاظ على صحته."
    }
  }),

  // 158. blood
  blood: (w) => ({
    word: w,
    title: "Check Your Blood",
    titleArabic: "فحص الدم",
    storyEnglish: `The doctor needs to check your blood to make sure you have enough vitamins. It is a quick process that gives us important information about your overall well-being. Do not worry because it is very safe and standard.`,
    storyArabic: `يحتاج الطبيب إلى فحص دمك للتأكد من حصولك على ما يكفي من الفيتامينات. إنها عملية سريعة تعطينا معلومات مهمة عن عافيتك العامة. لا تقلق لأنها آمنة جداً وقياسية.`,
    question: {
      question: "Why does the doctor need to check your blood?",
      options: [
        "To make sure you have enough vitamins and get info on your well-being",
        "To check the color of your clothes",
        "To test the temperature of the room",
        "To see how fast you can run"
      ],
      answerIndex: 0,
      explanation: "فحص الدم (blood) يزود الطبيب بمعلومات هامة حول الفيتامينات وصحة الجسم العامة."
    }
  }),

  // 159. health
  health: (w) => ({
    word: w,
    title: "Good Health",
    titleArabic: "الصحة الجيدة",
    storyEnglish: `Good health is the most valuable thing you can have in your life. Eating well and getting enough sleep makes a big difference in how you feel. Always prioritize your well-being above your busy schedule.`,
    storyArabic: `الصحة الجيدة هي أثمن شيء يمكن أن تمتلكه في حياتك. الأكل الجيد والحصول على قسط كافٍ من النوم يحدث فرقاً كبيراً في شعورك. امنح الأولوية دائماً لعافيتك فوق جدولك المزدحم.`,
    question: {
      question: "What helps maintain good health in your daily life?",
      options: [
        "Eating well, getting enough sleep, and prioritizing your well-being",
        "Working all night without resting",
        "Skipping all meals during the week",
        "Avoiding any sleep"
      ],
      answerIndex: 0,
      explanation: "الصحة (health) الجيدة هي أثمن ما يملكه الإنسان وتتطلب التغذية السليم والنوم الكافي."
    }
  }),

  // 160. healthy
  healthy: (w) => ({
    word: w,
    title: "Healthy Food",
    titleArabic: "طعام صحي",
    storyEnglish: `Eating healthy food gives you the energy you need to complete all your tasks. Fruits and vegetables are full of nutrients that your body loves. It is a simple choice that leads to a better future.`,
    storyArabic: `تناول طعام صحي يمنحك الطاقة التي تحتاجها لإكمال كل مهامك. الفواكه والخضروات مليئة بالمغذيات التي يحبها جسمك. إنه خيار بسيط يؤدي إلى مستقبل أفضل.`,
    question: {
      question: "Why is eating healthy food important every day?",
      options: [
        "It gives you the energy and nutrients needed to complete your tasks",
        "It makes you feel tired all day",
        "It stops you from doing any work",
        "It reduces your strength"
      ],
      answerIndex: 0,
      explanation: "تناول الطعام الصحي (healthy) يمد الجسم بالطاقة والمغذيات الأساسية للمستقبل."
    }
  }),

  // 161. ill
  ill: (w) => ({
    word: w,
    title: "Feeling Ill",
    titleArabic: "الشعور بالمرض",
    storyEnglish: `If you feel ill during the trip, please tell the guide immediately. We have a first-aid kit and can help you find a place to rest. You should never try to work when you are not feeling well.`,
    storyArabic: `إذا شعرت بالمرض أثناء الرحلة، يرجى إخبار المرشد فوراً. لدينا حقيبة إسعافات أولية ويمكننا مساعدتك في العثور على مكان للراحة. لا يجب عليك أبداً محاولة العمل عندما لا تشعر أنك بخير.`,
    question: {
      question: "What should you do if you feel ill during the trip?",
      options: [
        "Tell the guide immediately to get help and find a place to rest",
        "Keep walking in silence without telling anyone",
        "Run ahead of the group alone",
        "Carry extra heavy bags"
      ],
      answerIndex: 0,
      explanation: "عند الشعور بالمرض (ill)، يجب إبلاغ المرشد فوراً للحصول على الرعاية والراحة."
    }
  }),

  // 162. sick
  sick: (w) => ({
    word: w,
    title: "Feeling Sick",
    titleArabic: "الشعور بالتعب",
    storyEnglish: `The little boy felt sick after eating too much candy at the party. He stayed in bed all day and drank plenty of water to get better. Sometimes, your stomach just needs a little bit of rest.`,
    storyArabic: `شعر الصبي الصغير بالمرض بعد تناول الكثير من الحلوى في الحفلة. بقي في السرير طوال اليوم وشرب الكثير من الماء ليتحسن. أحياناً، يحتاج معدتك فقط إلى القليل من الراحة.`,
    question: {
      question: "Why did the little boy feel sick after the party?",
      options: [
        "Because he ate too much candy and his stomach needed rest",
        "Because he walked too fast to the park",
        "Because he read a difficult book",
        "Because he drank warm tea"
      ],
      answerIndex: 0,
      explanation: "شعر الطفل بالمرض (sick) بعد الإفراط في تناول الحلوى واحتاج للراحة وشرب الماء."
    }
  }),

  // 163. doctor
  doctor: (w) => ({
    word: w,
    title: "Caring for Patients",
    titleArabic: "العناية بالمرضى",
    storyEnglish: `In the hospital, the doctor checks the health of his patients. He listens to their stories and gives them the right medicine. Care and kindness are his main goals.`,
    storyArabic: `في المستشفى، يفحص الطبيب صحة مرضاه. يستمع لقصصهم ويعطيهم الدواء المناسب. الرعاية واللطف هما أهدافه الرئيسية.`,
    question: {
      question: "What are the doctor's main goals in the hospital?",
      options: [
        "Care and kindness while checking patients' health and giving medicine",
        "To inspect hospital architectural designs",
        "To sell tickets for public transit",
        "To teach university engineering courses"
      ],
      answerIndex: 0,
      explanation: "يقدم الطبيب (doctor) الفحص الطبي والأدوية للمرضى مع الحرص على الرعاية واللطف كأهداف أساسية."
    }
  }),

  // 164. medicine
  medicine: (w) => ({
    word: w,
    title: "Medicine",
    titleArabic: "الدواء",
    storyEnglish: `Take this medicine exactly as directed to help your body fight the infection. It tastes a bit bitter, but it will help you recover much faster. Store it in a cool and safe place away from children.`,
    storyArabic: `خذ هذا الدواء تماماً كما هو موضح لمساعدة جسمك في محاربة العدوى. طعمه مر قليلاً، لكنه سيساعدك على التعافي بشكل أسرع بكثير. خزنه في مكان بارد وآمن بعيداً عن الأطفال.`,
    question: {
      question: "How should you take the prescribed medicine?",
      options: [
        "Exactly as directed to help fight infection and recover quickly",
        "Without reading any instructions",
        "By leaving it in direct hot sunlight",
        "All at once in one minute"
      ],
      answerIndex: 0,
      explanation: "تناول الدواء (medicine) بانتظام وفق التعليمات يساعد في محاربة المرض والتعافي السريع."
    }
  }),

  // 165. hospital
  hospital: (w) => ({
    word: w,
    title: "In the Hospital",
    titleArabic: "في المستشفى",
    storyEnglish: `The old man is sick, so he is in the hospital now. The doctors and nurses take good care of him. We hope he gets better soon.`,
    storyArabic: `الرجل العجوز مريض، لذا هو في المستشفى الآن. الأطباء والممرضات يعتنون به جيداً. نأمل أن يتحسن قريباً.`,
    question: {
      question: "Why is the old man in the hospital and who cares for him?",
      options: [
        "Because he is sick, and doctors and nurses take good care of him",
        "Because he works as a security guard at night",
        "To visit a friend working in the administrative office",
        "Because he is buying new medicines for his family"
      ],
      answerIndex: 0,
      explanation: "الرجل العجوز في المستشفى (hospital) لأنه مريض والأطباء والممرضات يقدمون له الرعاية."
    }
  }),

  // 166. pain
  pain: (w) => ({
    word: w,
    title: "Feeling Pain",
    titleArabic: "الشعور بالألم",
    storyEnglish: `Tell the nurse where you feel the pain so she can help you. Describing exactly what you feel makes it much easier to find the right treatment. We want to make sure you are comfortable as soon as possible.`,
    storyArabic: `أخبر الممرضة أين تشعر بالألم حتى تتمكن من مساعدتك. وصف ما تشعر به بالضبط يجعل العثور على العلاج الصحيح أسهل بكثير. نريد التأكد من أنك مرتاح في أقرب وقت ممكن.`,
    question: {
      question: "Why should you describe where you feel the pain to the nurse?",
      options: [
        "It makes it much easier to find the right treatment and comfort you",
        "To make the nurse write a long story",
        "To delay receiving any medical care",
        "To test the hospital thermometer"
      ],
      answerIndex: 0,
      explanation: "تحديد مكان الألم (pain) بدقة يساعد الطاقم الطبي على تقديم العلاج المناسب بسرعة."
    }
  }),

  // 167. clean
  clean: (w) => ({
    word: w,
    title: "Clean Desk",
    titleArabic: "مكتب نظيف",
    storyEnglish: `You must keep your desk clean if you want to find your things easily. Organizing your space helps you work better and faster. A tidy desk is a great start.`,
    storyArabic: `يجب أن تبقي مكتبك نظيفاً إذا أردت إيجاد أغراضك بسهولة. تنظيم مساحتك يساعدك على العمل بشكل أفضل وأسرع. المكتب المرتب بداية رائعة.`,
    question: {
      question: "Why should you keep your desk clean according to the story?",
      options: [
        "To find your things easily, organize your space, and work better and faster",
        "To leave no room for books",
        "To prepare it for sale",
        "Because studying on the floor is better"
      ],
      answerIndex: 0,
      explanation: "إبقاء المكتب نظيفاً (clean) ومرتباً يساعد على إيجاد الأغراض بسهولة والعمل بكفاءة وسرعة."
    }
  }),

  // 168. dirty
  dirty: (w) => ({
    word: w,
    title: "Dirty Shirt",
    titleArabic: "قميص متسخ",
    storyEnglish: `My shirt became dirty after I played football in the park today. I will wash it in the machine so it can be ready for tomorrow. Cleaning clothes is a daily task.`,
    storyArabic: `أصبح قميصي متسخاً بعد أن لعبت كرة القدم في الحديقة اليوم. سأغسله في الغسالة ليصبح جاهزاً للغد. تنظيف الملابس مهمة يومية.`,
    question: {
      question: "Why did the narrator's shirt become dirty?",
      options: [
        "From playing football in the park today",
        "From painting the living room walls",
        "From walking in dusty desert winds",
        "From cooking a big family dinner"
      ],
      answerIndex: 0,
      explanation: "أصبح القميص متسخاً (dirty) بعد لعب كرة القدم في الحديقة وسيتم غسله في الغسالة."
    }
  }),

  // 169. rest
  rest: (w) => ({
    word: w,
    title: "Need to Rest",
    titleArabic: "الحاجة للراحة",
    storyEnglish: `You need to rest for a few days to fully recover from your cold. Relax on the sofa and watch your favorite movies while your body heals itself. Do not worry about work until you feel strong again.`,
    storyArabic: `تحتاج إلى الراحة لبضعة أيام لتتعافى تماماً من الزكام. استرخِ على الأريكة وشاهد أفلامك المفضلة بينما يشفي جسمك نفسه. لا تقلق بشأن العمل حتى تشعر بالقوة مرة أخرى.`,
    question: {
      question: "Why is taking time to rest important when recovering from a cold?",
      options: [
        "It gives your body time to heal itself and regain its strength",
        "It makes the cold last much longer",
        "It prevents you from ever going back to work",
        "It replaces the need for any fluids"
      ],
      answerIndex: 0,
      explanation: "الحاجة للراحة (rest) ضرورية لمساعدة الجسم على التعافي والشفاء من نزلات البرد."
    }
  }),

  // 170. sleep
  sleep: (w) => ({
    word: w,
    title: "Time to Sleep",
    titleArabic: "وقت النوم",
    storyEnglish: `The house is very quiet because everyone is in their beds. It is time to sleep after a long and busy day. Tomorrow will be a new start.`,
    storyArabic: `المنزل هادئ جداً لأن الجميع في أسرّتهم. حان وقت النوم بعد يوم طويل ومزدحم. الغد سيكون بداية جديدة.`,
    question: {
      question: "Why is the house very quiet?",
      options: [
        "Because everyone is in their beds and it is time to sleep after a busy day",
        "Because the family went on a long vacation",
        "Because the power went out completely",
        "Because everyone is watching a silent movie"
      ],
      answerIndex: 0,
      explanation: "يسود الهدوء التام في المنزل لأن الجميع في أسرّتهم وحان وقت النوم (sleep)."
    }
  }),

  // 171. brain
  brain: (w) => ({
    word: w,
    title: "Your Brain",
    titleArabic: "دماغك",
    storyEnglish: `Your brain needs constant stimulation and learning to stay sharp and active. Reading books and solving puzzles are great ways to keep it engaged. It is the most powerful tool you possess for success.`,
    storyArabic: `يحتاج عقلك إلى تحفيز مستمر وتعلم ليبقى حاداً ونشيطاً. قراءة الكتب وحل الألغاز طرق رائعة لإبقائه منشغلاً. إنها الأداة الأكثر قوة التي تمتلكها للنجاح.`,
    question: {
      question: "What activities are recommended to keep your brain sharp and active?",
      options: [
        "Reading books, learning new things, and solving puzzles",
        "Sleeping 24 hours a day",
        "Avoiding all forms of reading",
        "Sitting in silence without thinking"
      ],
      answerIndex: 0,
      explanation: "الدماغ (brain) يحتاج للتحفيز والقراءة وحل الألغاز ليبقى نشيطاً وحاداً."
    }
  }),

  // 172. bone
  bone: (w) => ({
    word: w,
    title: "Strong Bone",
    titleArabic: "عظم قوي",
    storyEnglish: `Calcium helps you build a strong bone structure that supports your body. Milk and green vegetables are excellent sources of this important mineral. Start taking care of your structure today to avoid problems later.`,
    storyArabic: `الكالسيوم يساعدك على بناء بنية عظمية قوية تدعم جسمك. الحليب والخضروات الخضراء مصادر ممتازة لهذا المعدن المهم. ابدأ في العناية ببنيتك اليوم لتجنب المشاكل لاحقاً.`,
    question: {
      question: "What mineral helps build a strong bone structure, and where is it found?",
      options: [
        "Calcium found in milk and green vegetables",
        "Sugar found in sweet candy",
        "Salt found in ocean water",
        "Oil found in fried snacks"
      ],
      answerIndex: 0,
      explanation: "الكالسيوم الموجود في الحليب والخضار يبني عظاماً (bone) قوية تدعم الجسم."
    }
  }),

  // 173. skin
  skin: (w) => ({
    word: w,
    title: "Protect Your Skin",
    titleArabic: "احمِ جلدك",
    storyEnglish: `Protect your skin from the harsh sun by using sunscreen when you go outside. Keeping it hydrated with lotion prevents it from becoming dry and flaky. It is your largest organ, so treat it with great care.`,
    storyArabic: `احمِ بشرتك من الشمس القاسية باستخدام واقي الشمس عندما تخرج. ترطيبها باللوشن يمنعها من أن تصبح جافة ومتقشرة. إنها أكبر عضو لديك، لذا عاملها بعناية فائقة.`,
    question: {
      question: "How should you protect and care for your skin?",
      options: [
        "Use sunscreen outside and keep it hydrated with lotion",
        "Expose it to harsh sun without protection",
        "Never wash it with clean water",
        "Avoid drinking any fluids"
      ],
      answerIndex: 0,
      explanation: "حماية الجلد (skin) بواقي الشمس وترطيبه يمنع الجفاف ويحافظ على صحة أكبر عضو بالجسم."
    }
  }),

  // 174. neck
  neck: (w) => ({
    word: w,
    title: "Your Neck",
    titleArabic: "رقبتك",
    storyEnglish: `Moving your neck slowly from side to side helps relieve tension after working at a desk. You should take regular breaks to stretch and avoid stiffness. It makes a big difference in how you feel.`,
    storyArabic: `تحريك رقبتك ببطء من جانب إلى آخر يساعد في تخفيف التوتر بعد العمل على مكتب. يجب عليك أخذ فترات راحة منتظمة للتمدد وتجنب التصلب. إنه يحدث فرقاً كبيراً في شعورك.`,
    question: {
      question: "Why should you move and stretch your neck while working at a desk?",
      options: [
        "To relieve tension, avoid muscle stiffness, and feel better",
        "To make your neck stiff and painful",
        "To stop working on the computer forever",
        "To fall asleep at your desk"
      ],
      answerIndex: 0,
      explanation: "تحريك الرقبة (neck) بانتظام أثناء العمل المكتبي يخفف التوتر والتصلب."
    }
  }),

  // 175. shoulder
  shoulder: (w) => ({
    word: w,
    title: "Your Shoulder",
    titleArabic: "كتفك",
    storyEnglish: `He felt pain in his shoulder after carrying the heavy boxes to the new office. It is important to ask for help when the weight is too much for your muscles. Proper posture helps you avoid injuries during the day.`,
    storyArabic: `شعر بألم في كتفه بعد حمل الصناديق الثقيلة إلى المكتب الجديد. من المهم طلب المساعدة عندما يكون الوزن أكثر من اللازم لعضلاتك. الوضعية الصحيحة تساعدك على تجنب الإصابات خلال اليوم.`,
    question: {
      question: "Why did he feel pain in his shoulder?",
      options: [
        "After carrying heavy boxes to the new office",
        "After sleeping for twelve hours",
        "After reading a book in the library",
        "After drinking cold water"
      ],
      answerIndex: 0,
      explanation: "شعر بألم في كتفه (shoulder) نتيجة حمل صناديق ثقيلة إلى المكتب الجديد."
    }
  }),

  // 176. clothes
  clothes: (w) => ({
    word: w,
    title: "Organizing Clothes",
    titleArabic: "ترتيب الملابس",
    storyEnglish: `Layla carefully organized her clothes in the wooden wardrobe of her new studio apartment in Paris. She wanted everything to be perfectly color-coordinated before her big interview the next morning.`,
    storyArabic: `رتبت ليلى ملابسها بعناية في خزانة الملابس الخشبية في شقتها الاستوديو الجديدة في باريس. أرادت أن يكون كل شيء متناسقاً تماماً من حيث الألوان قبل مقابلتها الكبيرة في صباح اليوم التالي.`,
    question: {
      question: "Where did Layla organize her clothes?",
      options: [
        "In the wooden wardrobe of her new studio apartment in Paris",
        "On the kitchen table in London",
        "In the trunk of a rented car",
        "Inside an empty suitcase at the airport"
      ],
      answerIndex: 0,
      explanation: "رتبت ليلى ملابسها (clothes) بعناية داخل خزانة الملابس الخشبية استعداداً للمقابلة."
    }
  }),

  // 177. shirt
  shirt: (w) => ({
    word: w,
    title: "The Favorite Shirt",
    titleArabic: "القميص المفضل",
    storyEnglish: `Julian realized a red stain had ruined his favorite white shirt just minutes before the meeting. Panicked, he rushed to the nearest shop to buy a replacement, hoping he would make it back in time.`,
    storyArabic: `أدرك جوليان أن بقعة حمراء قد أفسدت قميصه الأبيض المفضل قبل دقائق فقط من الاجتماع. وبدافع الذعر، هرع إلى أقرب متجر لشراء قميص بديل، آملاً أن يعود في الوقت المناسب.`,
    question: {
      question: "What happened to Julian's favorite shirt before the meeting?",
      options: [
        "A red stain ruined it, forcing him to rush to buy a replacement",
        "It was stolen from his car",
        "He forgot it at the dry cleaners",
        "It turned into a jacket"
      ],
      answerIndex: 0,
      explanation: "أفسدت بقعة حمراء قميصه (shirt) الأبيض المفضل قبل دقائق من الاجتماع."
    }
  }),

  // 178. trousers
  trousers: (w) => ({
    word: w,
    title: "Canvas Trousers",
    titleArabic: "بنطال قماشي",
    storyEnglish: `In the middle of the desert, Zaid felt the rough fabric of his canvas trousers protecting his legs from the scorching sand. He had been walking for hours, searching for the ancient hidden oasis.`,
    storyArabic: `في وسط الصحراء، شعر زيد بنسيج بنطاله القماشي الخشن وهو يحمي ساقيه من الرمال الحارقة. كان يمشي لساعات، باحثاً عن الواحة المخفية القديمة.`,
    question: {
      question: "How did Zaid's canvas trousers help him in the desert?",
      options: [
        "By protecting his legs from the scorching sand while walking",
        "By keeping him completely cool under water",
        "By turning into a desert tent",
        "By holding all his heavy tools"
      ],
      answerIndex: 0,
      explanation: "حمى البنطال القماشي (trousers) ساقي زيد من حرارة رمال الصحراء أثناء بحثه عن الواحة."
    }
  }),

  // 179. pants
  pants: (w) => ({
    word: w,
    title: "Comfortable Pants",
    titleArabic: "بنطال مريح",
    storyEnglish: `Elena threw on her comfortable sweat pants and ran out to the balcony. She had just seen a strange, glowing light hovering over the neighborhood park.`,
    storyArabic: `ارتدت إيلينا بنطالها الرياضي المريح وركضت نحو الشرفة. لقد رأت للتو ضوءاً غريباً ومتوهجاً يحوم فوق حديقة الحي.`,
    question: {
      question: "What did Elena do right after putting on her comfortable sweat pants?",
      options: [
        "Ran out to the balcony to see a strange glowing light over the park",
        "Went back to sleep in her bedroom",
        "Drove to the nearest shopping mall",
        "Cooked dinner for her family"
      ],
      answerIndex: 0,
      explanation: "ارتدت إيلينا بنطالها (pants) الرياضي المريح وأسرعت إلى الشرفة لمشاهدة الضوء المتوهج."
    }
  }),

  // 180. dress
  dress: (w) => ({
    word: w,
    title: "The Velvet Dress",
    titleArabic: "فستان المخمل",
    storyEnglish: `The velvet dress flowed elegantly as Soraya walked down the marble staircase of the grand palace. Every guest turned their head, wondering who this mysterious woman from the coast really was.`,
    storyArabic: `انسدل فستان المخمل بأناقة بينما كانت ثريا تمشي على الدرج الرخامي للقصر الكبير. التفت كل ضيف برأسه، متسائلاً من تكون هذه المرأة الغامضة القادمة من الساحل.`,
    question: {
      question: "How did the velvet dress make Soraya look as she walked down the staircase?",
      options: [
        "It flowed elegantly, capturing the attention of every guest in the palace",
        "It was torn and covered in dust",
        "It looked completely informal and plain",
        "It made her trip on the marble steps"
      ],
      answerIndex: 0,
      explanation: "انسدل الفستان (dress) المخملي بأناقة لافتة أثناء نزول ثريا على درج القصر."
    }
  }),

  // 181. skirt
  skirt: (w) => ({
    word: w,
    title: "Floral Skirt",
    titleArabic: "تنورة بنقوش زهور",
    storyEnglish: `Mina picked a bright floral skirt for her first day at the new university. She hoped the vibrant patterns would help her make friends easily in the crowded hallway.`,
    storyArabic: `اختارت مينا تنورة زاهية بنقوش زهور ليومها الأول في الجامعة الجديدة. كانت تأمل أن تساعدها تلك الأنماط النابضة بالحياة في تكوين صداقات بسهولة في الممر المزدحم.`,
    question: {
      question: "Why did Mina choose a bright floral skirt for her first day at the university?",
      options: [
        "Hoping its vibrant patterns would help her make friends easily",
        "Because it was the only piece of clothing she owned",
        "Because it was required by university uniform rules",
        "To hide from other students in the hallway"
      ],
      answerIndex: 0,
      explanation: "اختارت مينا تنورة (skirt) بنقوش زهور زاهية لتساعدها على التعرف وتكوين أصدقاء."
    }
  }),

  // 182. coat
  coat: (w) => ({
    word: w,
    title: "Heavy Wool Coat",
    titleArabic: "معطف صوفي ثقيل",
    storyEnglish: `Shivering in the cold wind of the Siberian mountains, Ivan pulled his heavy wool coat tighter around his chest. He had to keep moving until he reached the safety of the base camp.`,
    storyArabic: `مرتجفاً في رياح جبال سيبيريا الباردة، شد إيفان معطفه الصوفي الثقيل حول صدره. كان عليه الاستمرار في التحرك حتى يصل إلى أمان المعسكر الأساسي.`,
    question: {
      question: "Why did Ivan pull his heavy wool coat tighter around his chest?",
      options: [
        "To protect himself from the shivering cold wind of the Siberian mountains",
        "To hide gold coins inside his pockets",
        "Because it was too loose and falling off",
        "To use it as a parachute"
      ],
      answerIndex: 0,
      explanation: "أحكم إيفان شد معطفه (coat) الصوفي الثقيل ليحتمي من الرياح الباردة حتى يصل للمعسكر."
    }
  }),

  // 183. jacket
  jacket: (w) => ({
    word: w,
    title: "Leather Jacket",
    titleArabic: "سترة جلدية",
    storyEnglish: `Kenji found a hidden map tucked inside the secret inner pocket of his leather jacket. He didn't know how it got there, but the markings pointed toward the island he had dreamed about for years.`,
    storyArabic: `وجد كينجي خريطة مخبأة داخل الجيب الداخلي السري لسترته الجلدية. لم يكن يعرف كيف وصلت إلى هناك، لكن العلامات كانت تشير نحو الجزيرة التي طالما حلم بها لسنوات.`,
    question: {
      question: "What did Kenji find inside the secret inner pocket of his leather jacket?",
      options: [
        "A hidden map pointing toward an island he had dreamed about",
        "A pair of reading glasses",
        "A small bronze key to an old trunk",
        "An old photograph of his family"
      ],
      answerIndex: 0,
      explanation: "وجد كينجي خريطة سرية داخل جيب سترته (jacket) الجلدية تشير إلى جزيرة أحلامه."
    }
  }),

  // 184. hat
  hat: (w) => ({
    word: w,
    title: "Wide-brimmed Hat",
    titleArabic: "قبعة ذات حواف عريضة",
    storyEnglish: `A gust of wind caught Amira’s wide-brimmed hat and sent it flying toward the bustling marketplace. She laughed and chased after it, weaving through the colorful stalls of spices and rugs.`,
    storyArabic: `التقطت هبة ريح قبعة أميرة ذات الحواف العريضة وأرسلتها تطير نحو السوق المزدحم. ضحكت وطاردتها، متسللة بين أكشاك التوابل والسجاد الملونة.`,
    question: {
      question: "What happened to Amira's wide-brimmed hat?",
      options: [
        "A gust of wind sent it flying toward the bustling marketplace",
        "It fell into a deep river",
        "She sold it to a tourist",
        "It got crushed under a heavy cart"
      ],
      answerIndex: 0,
      explanation: "أطارت الرياح قبعة (hat) أميرة نحو السوق فلحقت بها ضاحكة بين الأكشاك."
    }
  }),

  // 185. shoe
  shoe: (w) => ({
    word: w,
    title: "The Abandoned Shoe",
    titleArabic: "الحذاء المهجور",
    storyEnglish: `Tomas stared at the single, mud-covered shoe left in the middle of the abandoned subway station. It felt like a clue in a mystery that had started long before he arrived in the city.`,
    storyArabic: `حدق توماس في فردة الحذاء الوحيدة المغطاة بالطين والمتروكة في وسط محطة مترو مهجورة. بدا الأمر كدليل في لغز بدأ قبل وقت طويل من وصوله إلى المدينة.`,
    question: {
      question: "What did Tomas find in the middle of the abandoned subway station?",
      options: [
        "A single mud-covered shoe that looked like a clue in a mystery",
        "A forgotten briefcase full of documents",
        "A functioning train schedule monitor",
        "A stray puppy sleeping on the platform"
      ],
      answerIndex: 0,
      explanation: "عثر توماس على فردة حذاء (shoe) مغطاة بالطين في محطة المترو المهجورة."
    }
  }),

  // 186. shoes
  shoes: (w) => ({
    word: w,
    title: "Buying New Shoes",
    titleArabic: "شراء أحذية جديدة",
    storyEnglish: `Buying new shoes was the first thing Fatima did after landing in Tokyo. She wanted a comfortable pair because she planned to walk every street in the city for her new photography project.`,
    storyArabic: `كان شراء أحذية جديدة أول شيء فعلته فاطمة بعد هبوطها في طوكيو. أرادت زوجًا مريحًا لأنها خططت للمشي في كل شارع في المدينة من أجل مشروعها الفوتوغرافي الجديد.`,
    question: {
      question: "Why did Fatima buy new comfortable shoes in Tokyo?",
      options: [
        "She planned to walk every street in the city for her photography project",
        "She lost her luggage at the airport",
        "Her old shoes were completely destroyed on the flight",
        "She needed formal shoes for a wedding"
      ],
      answerIndex: 0,
      explanation: "اشترت فاطمة أحذية (shoes) مريحة في طوكيو لتتمكن من المشي والتصوير في كل شوارع المدينة."
    }
  }),

  // 187. sock
  sock: (w) => ({
    word: w,
    title: "The Missing Sock",
    titleArabic: "الجورب المفقود",
    storyEnglish: `The mischievous cat hid a single sock under the radiator while Liam wasn't looking. He spent the entire morning searching, wondering how such a simple item could simply vanish into thin air.`,
    storyArabic: `أخفت القطة المشاكسة فردة جورب تحت المدفأة بينما لم يكن ليام ينظر. قضى الصباح بأكمله يبحث، متسائلاً كيف يمكن لغرض بسيط كهذا أن يختفي ببساطة في الهواء.`,
    question: {
      question: "Where did the cat hide the single sock?",
      options: [
        "Under the radiator while Liam wasn't looking",
        "Inside the washing machine drum",
        "Behind the living room sofa",
        "Up in the garden tree"
      ],
      answerIndex: 0,
      explanation: "أخفت القطة جورب (sock) ليام تحت المدفأة مما جعله يبحث عنه طوال الصباح."
    }
  }),

  // 188. socks
  socks: (w) => ({
    word: w,
    title: "Woolen Socks",
    titleArabic: "جوارب صوفية",
    storyEnglish: `Maya wore her thick, woolen socks while sitting by the fireplace in the mountain cabin. Outside, a blizzard was howling, but inside, the room was warm and smelled of pine needles.`,
    storyArabic: `ارتدت مايا جواربها الصوفية السميكة بينما كانت تجلس بجانب المدفأة في كوخ الجبل. في الخارج، كانت العاصفة الثلجية تعوي، لكن في الداخل، كانت الغرفة دافئة وتفوح منها رائحة إبر الصنوبر.`,
    question: {
      question: "What was Maya wearing while sitting by the fireplace during the blizzard?",
      options: [
        "Her thick, woolen socks to keep warm in the mountain cabin",
        "A summer swimming suit",
        "Thin silk slippers",
        "Heavy ski boots"
      ],
      answerIndex: 0,
      explanation: "ارتدت مايا جوارب (socks) صوفية سميكة للاستمتاع بالدفء بجوار مدفأة الكوخ الجبلي."
    }
  }),

  // 189. wear
  wear: (w) => ({
    word: w,
    title: "Dress to Wear",
    titleArabic: "ما يجب ارتداؤه",
    storyEnglish: `"You must wear something formal to the gala," the old butler told Sebastian in a firm tone. Sebastian looked at his casual attire and sighed, knowing he had to play the part of a wealthy heir for just one night.`,
    storyArabic: `قال الخادم العجوز لـ سيباستيان بنبرة حازمة: "يجب أن ترتدي شيئاً رسمياً في الحفل". نظر سيباستيان إلى ملابسه غير الرسمية وتنهد، مدركاً أنه عليه لعب دور وريث ثري لليلة واحدة فقط.`,
    question: {
      question: "What did the butler instruct Sebastian to wear for the gala?",
      options: [
        "Something formal to play the part of a wealthy heir",
        "His everyday casual workout clothes",
        "A costume for a masquerade party",
        "A winter ski jacket"
      ],
      answerIndex: 0,
      explanation: "طلب الخادم منه أن يرتدي (wear) زياً رسمياً ليلعب دور الوريث الثري في الحفل."
    }
  }),

  // 190. color
  color: (w) => ({
    word: w,
    title: "Choosing a Color",
    titleArabic: "اختيار لون",
    storyEnglish: `The artist stared at the canvas, unable to decide which color would best represent the sadness in her heart. She eventually chose a deep, moody indigo that seemed to swallow the light.`,
    storyArabic: `حدق الرسام في اللوحة، غير قادر على تقرير أي لون سيمثل الحزن في قلبه بشكل أفضل. اختار في النهاية لوناً نيلياً عميقاً وكئيباً بدا وكأنه يبتلع الضوء.`,
    question: {
      question: "What color did the artist ultimately choose to represent sadness?",
      options: [
        "A deep, moody indigo that seemed to swallow the light",
        "A bright sunny yellow",
        "A vivid sparkling pink",
        "A pure clean white"
      ],
      answerIndex: 0,
      explanation: "اختار الفنان لون (color) النيلي الداكن ليعبر عن الحزن في اللوحة."
    }
  }),

  // 191. white
  white: (w) => ({
    word: w,
    title: "White Snow",
    titleArabic: "ثلج أبيض",
    storyEnglish: `The entire village was blanketed in white snow, turning the landscape into a quiet, frozen dream. Hassan opened his window and took a deep breath of the crisp, biting air.`,
    storyArabic: `كانت القرية بأكملها مغطاة بالثلوج البيضاء، مما حول المشهد إلى حلم هادئ ومجمد. فتح حسن نافذته وأخذ نفساً عميقاً من الهواء المنعش واللاذع.`,
    question: {
      question: "What blanketed the entire village into a quiet, frozen dream?",
      options: [
        "White snow covering the whole landscape",
        "Thick black dust from the factory",
        "Fallen autumn leaves of yellow and orange",
        "Heavy morning rain puddles"
      ],
      answerIndex: 0,
      explanation: "غطى الثلج الأبيض (white) القرية بأكملها محولاً إياها إلى مشهد هادئ وجميل."
    }
  }),

  // 192. black
  black: (w) => ({
    word: w,
    title: "Black Sedan",
    titleArabic: "سيارة سوداء",
    storyEnglish: `A sleek black sedan pulled up to the curb, and a man in a dark suit stepped out. Clara watched from her office window, feeling a strange sense of unease as the man looked directly toward her.`,
    storyArabic: `توقفت سيارة سيدان سوداء أنيقة عند الرصيف، وخرج منها رجل يرتدي بدلة داكنة. راقبت كلارا المشهد من نافذة مكتبها، وشعرت بشعور غريب بعدم الارتياح عندما نظر الرجل مباشرة نحوها.`,
    question: {
      question: "What kind of car pulled up to the curb outside Clara's office?",
      options: [
        "A sleek black sedan from which a man in a dark suit stepped out",
        "A bright yellow taxi cab",
        "A red delivery truck",
        "A blue sports convertible"
      ],
      answerIndex: 0,
      explanation: "توقفت سيارة سيدان سوداء (black) أنيقة عند الرصيف ونزل منها رجل غامض."
    }
  }),

  // 193. red
  red: (w) => ({
    word: w,
    title: "Red Light",
    titleArabic: "ضوء أحمر",
    storyEnglish: `Sofia felt a burst of adrenaline as she saw the red emergency light begin to flash. Something had gone wrong in the laboratory, and she was the only one left to fix it.`,
    storyArabic: `شعرت صوفيا بدفقة من الأدرينالين عندما رأت ضوء الطوارئ الأحمر يبدأ في الوميض. حدث خطأ ما في المختبر، وكانت هي الوحيدة المتبقية لإصلاحه.`,
    question: {
      question: "Why did Sofia feel a burst of adrenaline?",
      options: [
        "She saw the red emergency light flash indicating a problem in the laboratory",
        "She won a prize in a competition",
        "Her shift was finally over",
        "She was invited to a celebration dinner"
      ],
      answerIndex: 0,
      explanation: "رأت صوفيا ضوء الطوارئ الأحمر (red) وهو يومض في المختبر فاستعدت للتدخل الفوري."
    }
  }),

  // 194. blue
  blue: (w) => ({
    word: w,
    title: "Blue Waters",
    titleArabic: "مياه زرقاء",
    storyEnglish: `The blue waters of the Caribbean were so clear that David could see the coral reefs from the deck of his small boat. He dropped anchor, ready to dive into the unknown depths.`,
    storyArabic: `كانت مياه البحر الكاريبي الزرقاء صافية جداً لدرجة أن ديفيد كان يستطيع رؤية الشعاب المرجانية من سطح قاربه الصغير. ألقى المرساة، مستعداً للغوص في الأعماق المجهولة.`,
    question: {
      question: "What allowed David to see the coral reefs from the deck of his boat?",
      options: [
        "The crystal-clear blue waters of the Caribbean",
        "A high-powered telescope",
        "An underwater drone camera",
        "Special night-vision goggles"
      ],
      answerIndex: 0,
      explanation: "مياه البحر الكاريبي الزرقاء (blue) الصافية مكنت ديفيد من رؤية الشعاب المرجانية بوضوح."
    }
  }),

  // 195. green
  green: (w) => ({
    word: w,
    title: "Green Forest",
    titleArabic: "غابة خضراء",
    storyEnglish: `Yasmin walked through the lush green forest, feeling like she had stepped into a different world. The trees were so thick that they blocked out most of the midday sun.`,
    storyArabic: `سارت ياسمين عبر الغابة الخضراء الوارفة، وشعرت وكأنها دخلت عالماً مختلفاً. كانت الأشجار كثيفة جداً لدرجة أنها حجبت معظم شمس منتصف النهار.`,
    question: {
      question: "How did Yasmin feel while walking through the lush green forest?",
      options: [
        "Like she had stepped into a different world under the thick canopy of trees",
        "Lost and terrified in total darkness",
        "Bored and wanting to go back home immediately",
        "Hot and exhausted under the direct open sunlight"
      ],
      answerIndex: 0,
      explanation: "سارت ياسمين في الغابة الخضراء (green) المورقة التي حجبت أشجارها شمس الظهيرة."
    }
  }),

  // 196. yellow
  yellow: (w) => ({
    word: w,
    title: "Yellow Taxi",
    titleArabic: "تاكسي أصفر",
    storyEnglish: `The yellow taxi cab honked impatiently at Elena, but she was too busy reading a sign in the shop window. She didn't realize she was standing in the middle of a very busy intersection.`,
    storyArabic: `أطلق سائق التاكسي الأصفر بوقه بنفاد صبر على إيلينا، لكنها كانت مشغولة جداً بقراءة لافتة في نافذة المتجر. لم تدرك أنها كانت تقف في وسط تقاطع مزدحم للغاية.`,
    question: {
      question: "Why did the yellow taxi honk at Elena?",
      options: [
        "Because she was standing in the middle of a busy intersection while reading a sign",
        "Because she waved for the taxi to stop",
        "Because she dropped her bag in front of the car",
        "Because the taxi driver was greeting her"
      ],
      answerIndex: 0,
      explanation: "أطلق سائق التاكسي الأصفر (yellow) بوقه لأن إيلينا كانت تقف في وسط التقاطع المزدحم."
    }
  }),

  // 197. brown
  brown: (w) => ({
    word: w,
    title: "Brown Leather",
    titleArabic: "جلد بني",
    storyEnglish: `Omar polished his old brown leather boots until they shone like new. He was preparing for a journey that would take him across the great desert to meet his long-lost brother.`,
    storyArabic: `قام عمر بتلميع حذاء جلدي بني قديم حتى لمع وكأنه جديد. كان يستعد لرحلة تأخذه عبر الصحراء الكبرى للقاء شقيقه المفقود منذ زمن طويل.`,
    question: {
      question: "What was Omar preparing for by polishing his brown leather boots?",
      options: [
        "A journey across the great desert to meet his long-lost brother",
        "A formal dinner party at a restaurant",
        "A job interview in the city center",
        "Selling his boots at the morning market"
      ],
      answerIndex: 0,
      explanation: "لمّع عمر حذاءه الجلدي البني (brown) استعداداً لرحلته عبر الصحراء للقاء شقيقه."
    }
  }),

  // 198. grey / gray
  grey: (w) => ({
    word: w,
    title: "Grey Sky",
    titleArabic: "سماء رمادية",
    storyEnglish: `The sky turned a heavy grey as the storm approached the coast. Nathan quickly secured the windows of his lighthouse, knowing the night would be long and dangerous.`,
    storyArabic: `تحولت السماء إلى لون رمادي ثقيل مع اقتراب العاصفة من الساحل. قام ناثان بتأمين نوافذ منارته بسرعة، مدركاً أن الليلة ستكون طويلة وخطيرة.`,
    question: {
      question: "What did Nathan do when the sky turned a heavy grey?",
      options: [
        "Quickly secured the windows of his lighthouse before the approaching storm",
        "Went for a swim in the ocean",
        "Left the lighthouse to go into town",
        "Turned off all the lights and fell asleep"
      ],
      answerIndex: 0,
      explanation: "أمّن ناثان نوافذ منارته بعد أن تحولت السماء إلى لون رمادي (grey) مع اقتراب العاصفة."
    }
  }),

  gray: (w) => ({
    word: w,
    title: "Grey Sky",
    titleArabic: "سماء رمادية",
    storyEnglish: `The sky turned a heavy grey as the storm approached the coast. Nathan quickly secured the windows of his lighthouse, knowing the night would be long and dangerous.`,
    storyArabic: `تحولت السماء إلى لون رمادي ثقيل مع اقتراب العاصفة من الساحل. قام ناثان بتأمين نوافذ منارته بسرعة، مدركاً أن الليلة ستكون طويلة وخطيرة.`,
    question: {
      question: "What did Nathan do when the sky turned a heavy grey?",
      options: [
        "Quickly secured the windows of his lighthouse before the approaching storm",
        "Went for a swim in the ocean",
        "Left the lighthouse to go into town",
        "Turned off all the lights and fell asleep"
      ],
      answerIndex: 0,
      explanation: "أمّن ناثان نوافذ منارته بعد أن تحولت السماء إلى لون رمادي (gray) مع اقتراب العاصفة."
    }
  }),

  // 199. pink
  pink: (w) => ({
    word: w,
    title: "Pink Glow",
    titleArabic: "وهج وردي",
    storyEnglish: `A soft pink glow filled the room as the sun began to set behind the city skyscrapers. Chloe sat at her desk, lost in her thoughts, watching the day slowly fade away.`,
    storyArabic: `ملأ وهج وردي ناعم الغرفة عندما بدأت الشمس تغرب خلف ناطحات سحاب المدينة. جلست كلوي على مكتبها، غارقة في أفكارها، تشاهد اليوم يتلاشى ببطء.`,
    question: {
      question: "What filled the room as the sun set behind the skyscrapers?",
      options: [
        "A soft pink glow as daylight slowly faded away",
        "A harsh green neon reflection",
        "Total darkness with no light",
        "Thick smoke from a nearby chimney"
      ],
      answerIndex: 0,
      explanation: "ملأ الغرفة وهج وردي (pink) ناعم مع غروب الشمس خلف ناطحات السحاب."
    }
  }),

  // 200. gold
  gold: (w) => ({
    word: w,
    title: "Gold Coin",
    titleArabic: "عملة ذهبية",
    storyEnglish: `A tiny, gold coin sat at the bottom of the dusty box that Beatriz had found in the attic. She wondered who had hidden such a treasure and why it had been forgotten for so long.`,
    storyArabic: `وضعت عملة ذهبية صغيرة في قاع الصندوق المترب الذي وجدته بياتريس في العلية. تساءلت عمن خبأ كنزاً كهذا ولماذا تم نسيانه لفترة طويلة.`,
    question: {
      question: "What did Beatriz find at the bottom of the dusty box in the attic?",
      options: [
        "A tiny gold coin that seemed forgotten for a long time",
        "An old pocket mirror",
        "A collection of dried flowers",
        "A rusty key to the front door"
      ],
      answerIndex: 0,
      explanation: "وجدت بياتريس عملة ذهبية (gold) صغيرة في قاع الصندوق المترب بالعلية."
    }
  }),

  // 201. silver
  silver: (w) => ({
    word: w,
    title: "Silver Handle",
    titleArabic: "مقبض فضي",
    storyEnglish: `Marcus gripped the silver handle of the ancient sword, feeling its cold metal bite into his palm. He stood at the edge of the battlefield, ready to defend his home from the coming invaders.`,
    storyArabic: `قبض ماركوس على مقبض السيف الفضي القديم، وشعر بمعدنه البارد يغرس في كفه. وقف عند حافة ساحة المعركة، مستعداً للدفاع عن منزله من الغزاة القادمين.`,
    question: {
      question: "What did Marcus grip as he stood ready at the edge of the battlefield?",
      options: [
        "The silver handle of an ancient sword",
        "A wooden walking stick",
        "The reins of his horse",
        "A heavy bronze shield"
      ],
      answerIndex: 0,
      explanation: "قبض ماركوس على المقبض الفضي (silver) للسيف القديم استعداداً للدفاع عن وطنه."
    }
  }),

  // 202. bright
  bright: (w) => ({
    word: w,
    title: "Bright Star",
    titleArabic: "نجم ساطع",
    storyEnglish: `A bright star flickered in the northern sky, guiding Nora as she sailed across the silent, dark ocean. It was the only light she had seen for weeks.`,
    storyArabic: `ومض نجم ساطع في السماء الشمالية، موجهاً نورا بينما كانت تبحر عبر المحيط الصامت والمظلم. كان الضوء الوحيد الذي رأته منذ أسابيع.`,
    question: {
      question: "How did the bright star help Nora?",
      options: [
        "By guiding her as she sailed across the silent, dark ocean",
        "By warning her about an approaching storm",
        "By illuminating the entire ocean like daytime",
        "By signaling other passing ships"
      ],
      answerIndex: 0,
      explanation: "أرشد النجم الساطع (bright) نورا أثناء إبحارها في المحيط المظلم."
    }
  }),

  // 203. dark
  dark: (w) => ({
    word: w,
    title: "Dark Basement",
    titleArabic: "قبو مظلم",
    storyEnglish: `In the dark basement, Viktor clicked on his flashlight and saw something that stopped him in his tracks. A pile of old, dusty files was scattered across the floor, waiting to be read.`,
    storyArabic: `في القبو المظلم، أضاء فيكتور مصباحه اليدوي ورأى شيئاً أوقفه في مكانه. كومة من الملفات القديمة والمتربة كانت مبعثرة على الأرض، تنتظر أن تُقرأ.`,
    question: {
      question: "What stopped Viktor in his tracks inside the dark basement?",
      options: [
        "A pile of old, dusty files scattered across the floor",
        "A locked metal safe",
        "A hidden secret door",
        "A broken water pipe"
      ],
      answerIndex: 0,
      explanation: "أضاء فيكتور مصباحه في القبو المظلم (dark) ورأى ملفات قديمة مبعثرة على الأرض."
    }
  }),

  // 204. glasses
  glasses: (w) => ({
    word: w,
    title: "Wearing Glasses",
    titleArabic: "ارتداء نظارات",
    storyEnglish: `Hana adjusted her glasses to get a better look at the ancient inscription on the wall. She had been searching for this tomb for ten years, and now, finally, the truth was within her reach.`,
    storyArabic: `عدلت هناء نظارتها لتلقي نظرة أفضل على النقش القديم على الحائط. كانت تبحث عن هذا القبر منذ عشر سنوات، والآن، أخيراً، أصبحت الحقيقة في متناول يدها.`,
    question: {
      question: "Why did Hana adjust her glasses?",
      options: [
        "To get a better look at the ancient inscription on the wall of the tomb",
        "Because the sun was shining too brightly",
        "Because they were falling into the sand",
        "To clean dust off the lenses"
      ],
      answerIndex: 0,
      explanation: "عدلت هناء نظارتها (glasses) لتفحص النقوش الأثرية بدقة بعد سنوات من البحث."
    }
  }),

  // 205. suit
  suit: (w) => ({
    word: w,
    title: "Navy Blue Suit",
    titleArabic: "بدلة زرقاء داكنة",
    storyEnglish: `Arthur felt uncomfortable in his crisp, navy blue suit, but he knew he had to look the part of a successful businessman. He took a deep breath and walked into the glass-walled skyscraper.`,
    storyArabic: `شعر آرثر بعدم الارتياح في بدلته الزرقاء الداكنة والأنيقة، لكنه كان يعلم أن عليه أن يبدو بمظهر رجل أعمال ناجح. أخذ نفساً عميقاً وسار داخل ناطحة السحاب ذات الجدران الزجاجية.`,
    question: {
      question: "Why did Arthur wear the crisp navy blue suit?",
      options: [
        "To look the part of a successful businessman for his meeting",
        "Because he had a wedding to attend",
        "Because it was required by his school",
        "To stay warm during a winter storm"
      ],
      answerIndex: 0,
      explanation: "ارتدى آرثر بدلة (suit) زرقاء داكنة أنيقة ليظهر بمظهر رجل أعمال ناجح."
    }
  }),

  // 206. belt
  belt: (w) => ({
    word: w,
    title: "Leather Belt",
    titleArabic: "حزام جلدي",
    storyEnglish: `The old explorer tightened his leather belt before climbing the steep cliff face. He had packed everything he needed for the ascent, but he still worried about the storm clouds gathering above.`,
    storyArabic: `شد المستكشف العجوز حزامه الجلدي قبل تسلق وجه الجرف شديد الانحدار. كان قد حزم كل ما يحتاجه للصعود، لكنه لا يزال قلقاً بشأن سحب العاصفة التي تتجمع في الأعلى.`,
    question: {
      question: "What did the old explorer do before climbing the steep cliff face?",
      options: [
        "Tightened his leather belt and prepared his gear for the ascent",
        "Sat down to eat a heavy meal",
        "Decided to return to his base camp",
        "Called for a helicopter rescue"
      ],
      answerIndex: 0,
      explanation: "شد المستكشف حزامه الجلدي (belt) بإحكام استعداداً لتسلق الجرف الصخري."
    }
  }),

  // 207. ring
  ring: (w) => ({
    word: w,
    title: "Silver Ring",
    titleArabic: "خاتم فضي",
    storyEnglish: `Isabella twisted the silver ring on her finger, a habit she had developed whenever she was nervous. She looked around the crowded party, searching for the person who had sent her the anonymous invitation.`,
    storyArabic: `قامت إيزابيلا ببرم الخاتم الفضي على إصبعها، وهي عادة طورتها كلما كانت متوترة. نظرت حول الحفلة المزدحمة، باحثة عن الشخص الذي أرسل لها الدعوة المجهولة.`,
    question: {
      question: "Why did Isabella twist the silver ring on her finger?",
      options: [
        "Because it was a habit she had developed whenever she felt nervous",
        "Because the ring was too loose and falling off",
        "To show off her jewelry to the guests",
        "To unlock a secret device"
      ],
      answerIndex: 0,
      explanation: "كانت إيزابيلا تبرم خاتمها الفضي (ring) كعادتها عند الشعور بالتوتر أثناء بحثها عن صاحب الدعوة."
    }
  }),

  // 208. watch
  watch: (w) => ({
    word: w,
    title: "Watching Birds",
    titleArabic: "مشاهدة الطيور",
    storyEnglish: `We like to watch the birds building their nests in the trees. They work so hard and bring small twigs. It is fascinating to observe them.`,
    storyArabic: `نحب أن نشاهد الطيور وهي تبني أعشاشها في الأشجار. تعمل بجد وتجلب أغصاناً صغيرة. إنه لأمر رائع مراقبتها.`,
    question: {
      question: "What are the birds doing in the trees?",
      options: [
        "Building their nests with small twigs through hard work",
        "Eating fruits from a garden feeder",
        "Sleeping through the afternoon",
        "Learning how to swim in a lake"
      ],
      answerIndex: 0,
      explanation: "مشاهدة (watch) ومراقبة الطيور وهي تبني أعشاشها بالأغصان الصغيرة تجربة رائعة وممتعة."
    }
  }),

  // 209. pocket
  pocket: (w) => ({
    word: w,
    title: "In Her Pocket",
    titleArabic: "في جيبها",
    storyEnglish: `Sophie reached into her pocket and felt a small, smooth stone she had picked up at the beach. It was a simple memory, but it made her smile as she navigated the chaotic city streets.`,
    storyArabic: `مدت صوفي يدها إلى جيبها وشعرت بحجر صغير وناعم التقطته من الشاطئ. كانت ذكرى بسيطة، لكنها جعلتها تبتسم بينما كانت تشق طريقها في شوارع المدينة الفوضوية.`,
    question: {
      question: "What did Sophie feel when she reached into her pocket?",
      options: [
        "A small, smooth stone from the beach that brought a smile to her face",
        "A forgotten train ticket",
        "A shiny silver key",
        "A crumpled banknote"
      ],
      answerIndex: 0,
      explanation: "لمست صوفي في جيبها (pocket) حجراً ناعماً من الشاطئ جلب الابتسامة إلى وجهها."
    }
  }),

  // 210. animal
  animal: (w) => ({
    word: w,
    title: "Rare Animal Tracks",
    titleArabic: "آثار حيوان نادرة",
    storyEnglish: `Dr. Aris carefully studied the rare animal tracks he found deep within the untamed jungle. He had never seen a creature leave footprints like these before, and his heart raced with excitement.`,
    storyArabic: `درس الدكتور أريس بعناية آثار الحيوان النادرة التي وجدها في أعماق الغابة غير المروّضة. لم يرَ قط مخلوقاً يترك آثار أقدام كهذه من قبل، وتسارع قلبه بحماس.`,
    question: {
      question: "What made Dr. Aris's heart race with excitement in the jungle?",
      options: [
        "Studying rare animal tracks unlike any footprints he had ever seen before",
        "Finding an ancient abandoned gold mine",
        "Escaping from a sudden tropical flash flood",
        "Spotting a rescue helicopter in the sky"
      ],
      answerIndex: 0,
      explanation: "تسارعت دقات قلب الدكتور أريس حماساً عند دراسة آثار حيوان (animal) نادرة في الغابة."
    }
  }),

  // 211. dog
  dog: (w) => ({
    word: w,
    title: "Loyal Dog",
    titleArabic: "كلب مخلص",
    storyEnglish: `A loyal dog named Rex sat patiently at the train station, waiting for his owner to return from a long journey. The passengers passed by, but he kept his eyes fixed on the entrance.`,
    storyArabic: `جلس كلب مخلص يدعى ريكس بصبر في محطة القطار، منتظراً عودة صاحبه من رحلة طويلة. مر الركاب بجانبه، لكنه أبقى عينيه مثبتتين على المدخل.`,
    question: {
      question: "Where did the loyal dog named Rex sit waiting for his owner?",
      options: [
        "Patiently at the train station with his eyes fixed on the entrance",
        "Inside the house near the kitchen bowl",
        "In the backyard playing with a ball",
        "Under a tree in the neighborhood park"
      ],
      answerIndex: 0,
      explanation: "جلس الكلب المخلص (dog) ريكس بصبر في محطة القطار ينتظر عودة صاحبه."
    }
  }),

  // 212. cat
  cat: (w) => ({
    word: w,
    title: "The Fluffy Cat",
    titleArabic: "القطة المنفوشة",
    storyEnglish: `The fluffy white cat, Luna, curled up on the sunny windowsill and watched the world go by. She rarely moved, except when a butterfly fluttered too close to the glass.`,
    storyArabic: `تكوّرت القطة البيضاء المنفوشة، لونا، على حافة النافذة المشمسة وراحت تراقب العالم يمر. نادراً ما كانت تتحرك، إلا عندما ترفرف فراشة قريبة جداً من الزجاج.`,
    question: {
      question: "What would make the fluffy cat Luna move from her sunny windowsill spot?",
      options: [
        "When a butterfly fluttered too close to the glass",
        "When a loud car drove past the street",
        "When the clock struck noon",
        "When it started raining outside"
      ],
      answerIndex: 0,
      explanation: "تجلس القطة (cat) المنفوشة لونا على حافة النافذة ولا تتحرك إلا إذا اقتربت فراشة من الزجاج."
    }
  }),

  // 213. bird
  bird: (w) => ({
    word: w,
    title: "Small Blue Bird",
    titleArabic: "طائر صغير أزرق",
    storyEnglish: `A small, blue bird landed on the branch right outside Samir’s bedroom window, singing a cheerful song. It was the first sign of spring after a long, cold winter.`,
    storyArabic: `حط طائر صغير أزرق على الغصن مباشرة خارج نافذة غرفة نوم سمير، مغرداً بأغنية مبهجة. كانت تلك أول علامة على قدوم الربيع بعد شتاء طويل وبارد.`,
    question: {
      question: "What did the small blue bird do outside Samir's bedroom window?",
      options: [
        "Landed on a branch and sang a cheerful song signaling spring",
        "Built a large nest out of mud and twigs",
        "Flew away quickly in fear of the wind",
        "Tapped on the glass asking for bread crumbs"
      ],
      answerIndex: 0,
      explanation: "حط الطائر (bird) الأزرق الصغير خارج النافذة مغرداً بأولى علامات حلول الربيع."
    }
  }),

  // 214. horse
  horse: (w) => ({
    word: w,
    title: "Powerful Horse",
    titleArabic: "حصان قوي",
    storyEnglish: `Zahra mounted her powerful white horse and galloped across the open fields as the sun began to rise. There was no feeling in the world that compared to the freedom of the ride.`,
    storyArabic: `امتطت زهراء حصانها الأبيض القوي وانطلقت تعدو عبر الحقول المفتوحة مع بداية شروق الشمس. لم يكن هناك شعور في العالم يضاهي حرية هذه الرحلة.`,
    question: {
      question: "How did Zahra feel while riding her powerful white horse at sunrise?",
      options: [
        "Felt an unmatched sense of pure freedom galloping across the open fields",
        "Felt tired and wanted to stop immediately",
        "Felt nervous about losing her way in the dark",
        "Felt bored of the familiar path"
      ],
      answerIndex: 0,
      explanation: "شعرت زهراء بحرية لا توصف وهي تعدو على ظهر حصانها (horse) الأبيض القوي مع شروق الشمس."
    }
  }),

  // 215. cow
  cow: (w) => ({
    word: w,
    title: "Gentle Cow",
    titleArabic: "بقرة وديعة",
    storyEnglish: `Under the shade of an old oak tree, a gentle cow grazed peacefully while the farmer watched from a distance. The rhythmic sound of chewing was the only thing interrupting the silence of the valley.`,
    storyArabic: `تحت ظل شجرة بلوط قديمة، كانت بقرة وديعة ترعى بسلام بينما يراقبها المزارع من بعيد. كان الصوت الإيقاعي للمضغ هو الشيء الوحيد الذي يقطع صمت الوادي.`,
    question: {
      question: "What was the gentle cow doing under the old oak tree?",
      options: [
        "Grazing peacefully in the shade while the farmer watched from a distance",
        "Running across the hills toward the river",
        "Sleeping through a heavy rainstorm",
        "Drinking water from a stone well"
      ],
      answerIndex: 0,
      explanation: "كانت البقرة (cow) الوديعة ترعى بسلام وهدوء تحت ظل شجرة البلوط القديمة."
    }
  }),

  // 216. sheep
  sheep: (w) => ({
    word: w,
    title: "Counting Sheep",
    titleArabic: "عد الخراف",
    storyEnglish: `Youssef counted each sheep as they entered the pen, making sure none were missing after the storm. The herd was tired but safe, thanks to the tall fences he had built.`,
    storyArabic: `عد يوسف كل خروف أثناء دخولهم إلى الحظيرة، متأكداً من عدم فقدان أي منها بعد العاصفة. كانت القطعان متعبة ولكنها بأمان، بفضل الأسوار العالية التي بناها.`,
    question: {
      question: "Why did Youssef count each sheep as they entered the pen?",
      options: [
        "To make sure none were missing after the storm had passed",
        "To choose which sheep to take to the market",
        "To see how fast they could run inside",
        "Because he was falling asleep while working"
      ],
      answerIndex: 0,
      explanation: "قام يوسف بعد كل خروف (sheep) ليتأكد من سلامة جميع أفراد القطيع بعد العاصفة."
    }
  }),

  // 217. tree
  tree: (w) => ({
    word: w,
    title: "The Ancient Tree",
    titleArabic: "الشجرة القديمة",
    storyEnglish: `The ancient tree stood as a silent witness to the history of the village, its roots deep in the earth. Noura often sat beneath it, reading stories about travelers from long ago.`,
    storyArabic: `وقفت الشجرة القديمة كشاهد صامت على تاريخ القرية، وجذورها غائرة في الأرض. غالباً ما كانت نورة تجلس تحتها، تقرأ قصصاً عن مسافرين من زمن بعيد.`,
    question: {
      question: "What did Noura often do beneath the ancient tree?",
      options: [
        "Sat beneath it reading stories about travelers from long ago",
        "Planted new flowers around its trunk",
        "Climbed to the top branch to watch birds",
        "Waited for the village bus to arrive"
      ],
      answerIndex: 0,
      explanation: "اعتادت نورة الجلوس تحت الشجرة (tree) القديمة لتقرأ قصص المسافرين عبر التاريخ."
    }
  }),

  // 218. flower
  flower: (w) => ({
    word: w,
    title: "Red Flower",
    titleArabic: "زهرة حمراء",
    storyEnglish: `Salma planted a single red flower in her garden, hoping it would bring a splash of color to her grey mornings. She watered it every day, watching it slowly grow toward the light.`,
    storyArabic: `زرعت سلمى زهرة حمراء واحدة في حديقتها، آملة أن تجلب لمسة من الألوان لصباحاتها الرمادية. كانت تسقيها كل يوم، تراقبها وهي تنمو ببطء نحو الضوء.`,
    question: {
      question: "Why did Salma plant a single red flower in her garden?",
      options: [
        "Hoping it would bring a splash of color to her grey mornings",
        "To sell it at the local market",
        "Because a neighbor gave it to her as a gift",
        "To enter a gardening competition"
      ],
      answerIndex: 0,
      explanation: "زرعت سلمى زهرة (flower) حمراء لتضيف لمسة ألوان بهيجة لصباحاتها."
    }
  }),

  // 219. grass
  grass: (w) => ({
    word: w,
    title: "Tall Grass",
    titleArabic: "عشب طويل",
    storyEnglish: `The tall grass swayed gently in the wind, creating waves of green that stretched as far as the eye could see. Faris walked through it, listening to the soft rustle of the stalks.`,
    storyArabic: `تأرجح العشب الطويل بلطف مع الرياح، خالقاً أمواجاً من الأخضر تمتد على مد البصر. سار فارس عبره، مستمعاً إلى حفيف السيقان الناعم.`,
    question: {
      question: "What did Faris do as he walked through the tall grass?",
      options: [
        "Listened to the soft rustle of the stalks swaying in the wind",
        "Searched for a lost watch",
        "Collected seeds for his farm",
        "Ran to catch a fleeing animal"
      ],
      answerIndex: 0,
      explanation: "سار فارس عبر العشب (grass) الطويل مستمعاً لحفيف السيقان المتمايلة مع الرياح."
    }
  }),

  // 220. plant
  plant: (w) => ({
    word: w,
    title: "Indoor Plant",
    titleArabic: "نبات داخلي",
    storyEnglish: `Hadi cared for his indoor plant as if it were a pet, making sure it got exactly the right amount of light. It was the only bit of nature he had in his busy city apartment.`,
    storyArabic: `اعتنى هادي بنباته الداخلي وكأنه حيوان أليف، متأكداً من حصوله على القدر المناسب تماماً من الضوء. كان ذلك الجزء الوحيد من الطبيعة الذي يملكه في شقته بالمدينة المزدحمة.`,
    question: {
      question: "Why was the indoor plant special to Hadi?",
      options: [
        "It was the only bit of nature he had in his busy city apartment",
        "It was worth a lot of money",
        "It produced rare sweet fruits",
        "It was given to him by his professor"
      ],
      answerIndex: 0,
      explanation: "كان النبات (plant) الداخلي يمثل لمسة الطبيعة الوحيدة في شقة هادي بالمدينة."
    }
  }),

  // 221. sun
  sun: (w) => ({
    word: w,
    title: "The Sun",
    titleArabic: "الشمس",
    storyEnglish: `The sun climbed high above the horizon, warming the stone streets of the ancient city. Tourists stopped to admire the golden rays hitting the old monuments.`,
    storyArabic: `تسلق الشمس عالياً فوق الأفق، دافئةً الشوارع الحجرية للمدينة القديمة. توقف السياح للإعجاب بالأشعة الذهبية التي تضرب الآثار القديمة.`,
    question: {
      question: "What effect did the sun have on the ancient city?",
      options: [
        "It warmed the stone streets and cast golden rays over old monuments",
        "It caused a sudden heavy dust storm",
        "It made all the streetlights turn on",
        "It forced tourists to stay indoors"
      ],
      answerIndex: 0,
      explanation: "أشرقت الشمس (sun) ودفأت الشوارع الحجرية ملقية بأشعتها الذهبية على الآثار."
    }
  }),

  // 222. moon
  moon: (w) => ({
    word: w,
    title: "The Full Moon",
    titleArabic: "قمر مكتمل",
    storyEnglish: `A full moon hung in the night sky, casting a silver light over the quiet village. Amina stood on her balcony, whispering her wishes to the silent night.`,
    storyArabic: `علق قمر مكتمل في سماء الليل، ملقياً ضوءاً فضياً على القرية الهادئة. وقفت أمينة على شرفتها، تهمس بأمنياتها لليل الصامت.`,
    question: {
      question: "What did the full moon cast over the quiet village?",
      options: [
        "A silver light illuminating the quiet night",
        "A dark shadow hiding the houses",
        "A bright golden sunrise",
        "A flash of lightning"
      ],
      answerIndex: 0,
      explanation: "ألقى القمر (moon) المكتمل ضوءاً فضياً جميلاً على أرجاء القرية الهادئة."
    }
  }),

  // 223. star
  star: (w) => ({
    word: w,
    title: "A Bright Star",
    titleArabic: "نجم ساطع",
    storyEnglish: `Leo looked up at a single, bright star and wondered if someone else was looking at it from the other side of the world. It was a comforting thought in the vastness of the universe.`,
    storyArabic: `نظر ليو إلى نجم واحد ساطع وتساءل عما إذا كان شخص آخر ينظر إليه من الجانب الآخر من العالم. كانت فكرة مريحة في اتساع الكون.`,
    question: {
      question: "What comforting thought crossed Leo's mind while looking at the star?",
      options: [
        "Wondering if someone on the other side of the world was looking at the same star",
        "Thinking about traveling to outer space on a rocket",
        "Remembering a story told by his grandfather",
        "Counting all the visible planets"
      ],
      answerIndex: 0,
      explanation: "تأمل ليو النجم (star) الساطع متسائلاً إن كان شخص آخر في العالم ينظر إليه أيضاً."
    }
  }),

  // 224. sky
  sky: (w) => ({
    word: w,
    title: "The Clear Sky",
    titleArabic: "السماء الصافية",
    storyEnglish: `The sky turned a deep shade of purple as the storm clouds cleared away. Karim looked up, relieved that the danger had passed and the night would be clear.`,
    storyArabic: `تحولت السماء إلى درجة عميقة من الأرجواني مع انقشاع سحب العاصفة. نظر كريم للأعلى، مرتاحاً لأن الخطر قد مر وأن الليلة ستكون صافية.`,
    question: {
      question: "What happened to the sky after the storm clouds cleared away?",
      options: [
        "It turned a deep shade of purple, showing the danger had passed",
        "It became completely black with heavy fog",
        "It started raining again heavily",
        "It was covered by thick green smoke"
      ],
      answerIndex: 0,
      explanation: "صفت السماء (sky) وتحولت للون أرجواني بعد انقشاع سحب العاصفة."
    }
  }),

  // 225. earth
  earth: (w) => ({
    word: w,
    title: "The Earth",
    titleArabic: "الأرض",
    storyEnglish: `The earth felt cool and damp beneath Sara’s feet as she worked in the vegetable patch. She loved the connection she felt to the soil and the life it produced.`,
    storyArabic: `شعرت سارة بأن الأرض باردة ورطبة تحت قدميها بينما كانت تعمل في حقل الخضروات. أحبت الارتباط الذي شعرت به تجاه التربة والحياة التي تنتجها.`,
    question: {
      question: "How did the earth feel beneath Sara's feet in the vegetable patch?",
      options: [
        "Cool and damp as she worked in the soil",
        "Extremely dry and cracked from heat",
        "Covered with sharp stones",
        "Frozen solid like ice"
      ],
      answerIndex: 0,
      explanation: "شعرت سارة ببرودة ورطوبة الأرض (earth) وتربتها أثناء زراعة حقل الخضار."
    }
  }),

  // 226. world
  world: (w) => ({
    word: w,
    title: "The World",
    titleArabic: "العالم",
    storyEnglish: `For Elena, the world was a collection of maps, compasses, and untold stories waiting to be discovered. She was ready to pack her bags and see every corner of the planet.`,
    storyArabic: `بالنسبة لـ إيلينا، كان العالم مجموعة من الخرائط والبوصلات والقصص غير المروية التي تنتظر من يكتشفها. كانت مستعدة لحزم حقائبها ورؤية كل ركن من أركان الكوكب.`,
    question: {
      question: "How did Elena view the world?",
      options: [
        "As a collection of maps, compasses, and untold stories waiting to be discovered",
        "As a small and boring place",
        "As a dangerous jungle to be avoided",
        "As an endless cold ocean"
      ],
      answerIndex: 0,
      explanation: "رأت إيلينا العالم (world) كلوحة واسعة من الخرائط والقصص المشوقة للاستكشاف."
    }
  }),

  // 227. land
  land: (w) => ({
    word: w,
    title: "Vast Land",
    titleArabic: "أرض شاسعة",
    storyEnglish: `The vast land stretched out before them, untouched and wild, challenging the group of explorers. They knew that mapping this territory would take months of hard work.`,
    storyArabic: `امتدت الأرض الشاسعة أمامهم، غير ملموسة ووحشية، متحدية مجموعة المستكشفين. كانوا يعلمون أن رسم خرائط هذه المنطقة سيستغرق أشهراً من العمل الشاق.`,
    question: {
      question: "What challenge did the vast land present to the explorers?",
      options: [
        "Mapping the untouched, wild territory would take months of hard work",
        "Building a bridge across the deep canyon immediately",
        "Finding an existing paved highway",
        "Locating a crowded modern hotel"
      ],
      answerIndex: 0,
      explanation: "امتدت الأرض (land) الشاسعة البكر متحدية المستكشفين لرسم خرائطها."
    }
  }),

  // 228. sea
  sea: (w) => ({
    word: w,
    title: "The Roaring Sea",
    titleArabic: "البحر الهائج",
    storyEnglish: `The sea roared against the jagged cliffs, a reminder of the raw power of nature. Hassan watched the waves from the safety of the lighthouse, mesmerized by their rhythm.`,
    storyArabic: `زأر البحر ضد الجروف المسننة، مذكراً بقوة الطبيعة الخام. راقب حسن الأمواج من أمان المنارة، مفتوناً بإيقاعها.`,
    question: {
      question: "Where did Hassan watch the roaring sea from?",
      options: [
        "From the safety of the lighthouse, mesmerized by the rhythm of the waves",
        "From a small wooden rowboat in the storm",
        "From underwater using diving gear",
        "From the top of a city skyscraper"
      ],
      answerIndex: 0,
      explanation: "راقب حسن أمواج البحر (sea) الهائج من شرفة المنارة الآمنة."
    }
  }),

  // 229. river
  river: (w) => ({
    word: w,
    title: "Winding River",
    titleArabic: "نهر متعرج",
    storyEnglish: `A winding river cut through the center of the valley, providing life to everything in its path. Maya sat by the bank, watching the water flow toward the distant mountains.`,
    storyArabic: `قطع نهر متعرج وسط الوادي، موفراً الحياة لكل شيء في طريقه. جلست مايا بجانب الضفة، تراقب الماء وهو يتدفق نحو الجبال البعيدة.`,
    question: {
      question: "What role did the winding river play in the valley?",
      options: [
        "Providing life to everything in its path as it flowed through the center",
        "Flooding all the towns and destroying bridges",
        "Freezing completely throughout the entire year",
        "Serving as a boundary wall between two kingdoms"
      ],
      answerIndex: 0,
      explanation: "وفّر النهر (river) المتعرج الحياة للوادي بينما راقبته مايا وهو يتدفق نحو الجبال."
    }
  }),

  // 230. lake
  lake: (w) => ({
    word: w,
    title: "Calm Lake",
    titleArabic: "بحيرة هادئة",
    storyEnglish: `The calm lake reflected the snow-capped mountains like a giant mirror. Omar rowed his boat to the center, enjoying the silence of the remote location.`,
    storyArabic: `عكست البحيرة الهادئة الجبال المغطاة بالثلوج كمرآة عملاقة. جدّف عمر بقاربه إلى المركز، مستمتعاً بصمت الموقع النائي.`,
    question: {
      question: "What did the calm lake reflect like a giant mirror?",
      options: [
        "The snow-capped mountains surrounding the remote location",
        "The bright neon lights of a city",
        "A flock of flying airplanes",
        "A stormy sky with lightning"
      ],
      answerIndex: 0,
      explanation: "عكست مياه البحيرة (lake) الهادئة منظر الجبال المغطاة بالثلوج كالمرآة."
    }
  }),

  // 231. mountain
  mountain: (w) => ({
    word: w,
    title: "Climbing the Mountain",
    titleArabic: "تسلق الجبل",
    storyEnglish: `Climbing the mountain was the hardest challenge of Kahlil’s life, but the view from the top made every drop of sweat worth it. He finally felt like he was on top of the world.`,
    storyArabic: `كان تسلق الجبل أصعب تحدٍ في حياة خليل، لكن المنظر من القمة جعل كل قطرة عرق تستحق العناء. شعر أخيراً وكأنه على قمة العالم.`,
    question: {
      question: "How did Kahlil feel once he reached the top of the mountain?",
      options: [
        "Like every drop of sweat was worth it and he was on top of the world",
        "Disappointed by the cloudy view",
        "Angry that he forgot his camera",
        "Afraid to climb back down immediately"
      ],
      answerIndex: 0,
      explanation: "شعر خليل بالإنجاز بعد تسلق الجبل (mountain) والوصول إلى القمة المطلة على العالم."
    }
  }),

  // 232. hill
  hill: (w) => ({
    word: w,
    title: "Grassy Hill",
    titleArabic: "تلة عشبية",
    storyEnglish: `Layla ran up the grassy hill to get a better view of the sunset. From the top, she could see the entire town lighting up as evening arrived.`,
    storyArabic: `ركضت ليلى صاعدة التلة العشبية لتحصل على رؤية أفضل لغروب الشمس. من القمة، استطاعت رؤية المدينة بأكملها وهي تضيء مع حلول المساء.`,
    question: {
      question: "Why did Layla run up the grassy hill?",
      options: [
        "To get a better view of the sunset and the town lighting up",
        "To search for lost sheep",
        "To escape a sudden thunderstorm",
        "To catch a flying kite"
      ],
      answerIndex: 0,
      explanation: "صعدت ليلى التلة (hill) العشبية لتشاهد غروب الشمس وأضواء المدينة."
    }
  }),

  // 233. forest
  forest: (w) => ({
    word: w,
    title: "Dense Forest",
    titleArabic: "غابة كثيفة",
    storyEnglish: `The dense forest was filled with the sounds of hidden life, making David feel like an intruder in an ancient realm. He walked carefully, noting every strange sign on the trees.`,
    storyArabic: `كانت الغابة الكثيفة مليئة بأصوات الحياة الخفية، مما جعل ديفيد يشعر كأنه متطفل في مملكة قديمة. سار بحذر، مسجلاً كل علامة غريبة على الأشجار.`,
    question: {
      question: "How did David feel while walking through the dense forest?",
      options: [
        "Like an intruder in an ancient realm filled with sounds of hidden life",
        "Like he was in his own backyard",
        "Bored and sleepy from the quietness",
        "Excited to chop down trees"
      ],
      answerIndex: 0,
      explanation: "شعر ديفيد كأنه في مملكة قديمة وسط أصوات الحياة الخفية في الغابة (forest) الكثيفة."
    }
  }),

  // 234. wood
  wood: (w) => ({
    word: w,
    title: "Fallen Wood",
    titleArabic: "خشب متساقط",
    storyEnglish: `Sofia gathered some fallen wood to start a small fire for their evening dinner. The air in the clearing was crisp, and the fire promised a cozy end to the day.`,
    storyArabic: `جمعت صوفيا بعض الخشب المتساقط لإشعال نار صغيرة لعشاء المساء. كان الهواء في الساحة منعشاً، وكانت النار تعد بنهاية مريحة لليوم.`,
    question: {
      question: "Why did Sofia gather fallen wood in the clearing?",
      options: [
        "To start a small fire for their evening dinner and stay cozy",
        "To build a wooden raft for the river",
        "To carve small animal sculptures",
        "To construct a fence around the camp"
      ],
      answerIndex: 0,
      explanation: "جمعت صوفيا الخشب (wood) المتساقط لإشعال نار العشاء وإضفاء الدفء."
    }
  }),

  // 235. stone
  stone: (w) => ({
    word: w,
    title: "Single Stone",
    titleArabic: "حجر واحد",
    storyEnglish: `A single, heavy stone sat in the center of the garden, marking the place where the old farmhouse once stood. Julian wondered about the generations of people who had lived here before him.`,
    storyArabic: `وضعت حجر واحد ثقيل في وسط الحديقة، يحدد المكان الذي وقفت فيه مزرعة قديمة ذات يوم. تساءل جوليان عن أجيال الناس الذين عاشوا هنا قبله.`,
    question: {
      question: "What did the single heavy stone in the center of the garden mark?",
      options: [
        "The place where the old farmhouse once stood",
        "The location of a hidden treasure chest",
        "The entrance to an underground tunnel",
        "The boundary between two different towns"
      ],
      answerIndex: 0,
      explanation: "رمز الحجر (stone) الثقيل في الحديقة إلى موقع المزرعة القديمة وتاريخ أجيالها."
    }
  }),

  // 236. fire
  fire: (w) => ({
    word: w,
    title: "The Crackling Fire",
    titleArabic: "نار فرقعة",
    storyEnglish: `The fire crackled and hissed as it consumed the dry logs, casting long, dancing shadows on the cave walls. Marcus sat close to the heat, glad to escape the biting cold outside.`,
    storyArabic: `فرقعت النار وأصدرت أزيزاً وهي تلتهم الحطب الجاف، ملقية بظلال طويلة راقصة على جدران الكهف. جلس ماركوس قريباً من الحرارة، سعيداً بالهروب من البرد القارس في الخارج.` ,
    question: {
      question: "Why was Marcus glad to sit close to the crackling fire inside the cave?",
      options: [
        "To escape the biting cold outside as dancing shadows filled the cave",
        "To roast sweet corn for his friends",
        "To send smoke signals across the mountains",
        "To dry his wet hiking shoes"
      ],
      answerIndex: 0,
      explanation: "جلس ماركوس قرب النار (fire) ليستمتع بالدفء هرباً من البرد القارس في الخارج."
    }
  }),

  // 237. air
  air: (w) => ({
    word: w,
    title: "Morning Air",
    titleArabic: "هواء الصباح",
    storyEnglish: `The morning air was thin and sharp as Ivan reached the summit of the ridge. He took a deep breath, feeling his lungs expand with the purest oxygen he had ever tasted.`,
    storyArabic: `كان الهواء الصباحي رقيقاً وحاداً عندما وصل إيفان إلى قمة التلال. أخذ نفساً عميقاً، وشعر برئتيه تتوسعان بأكثر الأكسجين نقاءً الذي تذوقه على الإطلاق.`,
    question: {
      question: "How did Ivan experience the morning air at the summit?",
      options: [
        "It was thin and sharp, expanding his lungs with pure oxygen",
        "It was hot and filled with heavy smog",
        "It smelled strongly of ocean salt",
        "It was stormy and difficult to breathe"
      ],
      answerIndex: 0,
      explanation: "استنشق إيفان هواء (air) الصباح النقي في قمة التلال وشعر بنقائه الفريد."
    }
  }),

  // 238. rain
  rain: (w) => ({
    word: w,
    title: "Gentle Rain",
    titleArabic: "مطر لطيف",
    storyEnglish: `A gentle rain began to fall, turning the dusty paths into soft mud and washing the city clean. Chloe watched from her window, enjoying the calming sound against the glass.`,
    storyArabic: `بدأ مطر لطيف في الهطول، محولاً المسارات المتربة إلى طين ناعم ومنظفاً المدينة. راقبت كلوي المشهد من نافذتها، مستمتعة بالصوت المهدئ ضد الزجاج.`,
    question: {
      question: "What calming effect did the gentle rain have on Chloe?",
      options: [
        "She enjoyed watching it wash the city clean and listening to the sound against the glass",
        "It made her feel anxious about traffic",
        "It caused her to cancel all her travel plans",
        "It made her turn off all the lights"
      ],
      answerIndex: 0,
      explanation: "استمتعت كلوي بصوت المطر (rain) اللطيف وهو ينظف المدينة ويتساقط على الزجاج."
    }
  }),

  // 239. snow
  snow: (w) => ({
    word: w,
    title: "Heavy Snow",
    titleArabic: "ثلج كثيف",
    storyEnglish: `The heavy snow muffled all sounds in the quiet forest, creating a surreal and beautiful atmosphere. Nathalie trudged through the deep powder, amazed by the stillness of the winter world.`,
    storyArabic: `كتمت الثلوج الكثيفة كل الأصوات في الغابة الهادئة، مما خلق جواً سريالياً وجميلاً. شقت ناتالي طريقها عبر الثلج العميق، مندهشة من سكون عالم الشتاء.`,
    question: {
      question: "How did the heavy snow affect the atmosphere in the forest?",
      options: [
        "It muffled all sounds, creating a surreal and peaceful stillness",
        "It caused loud cracking noises among the rocks",
        "It melted immediately upon touching the ground",
        "It blocked all sunlight completely"
      ],
      answerIndex: 0,
      explanation: "كتم الثلج (snow) الكثيف الأصوات في الغابة خالقاً سكينة ساحرة وهدوءاً جميلاً."
    }
  }),

  // 240. wind
  wind: (w) => ({
    word: w,
    title: "Strong Wind",
    titleArabic: "رياح قوية",
    storyEnglish: `A strong wind whipped across the plains, bending the trees and stirring up a whirlwind of leaves. Ravi shielded his eyes, trying to find his way back to the main road.`,
    storyArabic: `عصفت رياح قوية عبر السهول، حانية الأشجار ومثيرة زوبعة من الأوراق. حما رافي عينيه، محاولاً إيجاد طريقه عائداً إلى الطريق الرئيسي.`,
    question: {
      question: "What did Ravi do as the strong wind whipped across the plains?",
      options: [
        "Shielded his eyes while trying to find his way back to the main road",
        "Sat down to take a nap under a tree",
        "Flew a large colorful kite",
        "Started singing a loud song"
      ],
      answerIndex: 0,
      explanation: "حَمى رافي عينيه من أثر الرياح (wind) القوية التي حنت الأشجار وأثارت الأوراق."
    }
  }),

  // 241. cloud
  cloud: (w) => ({
    word: w,
    title: "A Fluffy Cloud",
    titleArabic: "سحابة منفوشة",
    storyEnglish: `A single, fluffy cloud drifted across the blue sky, changing shapes as it moved. Beatriz watched it from her lawn chair, imagining it was a giant ship sailing through the air.`,
    storyArabic: `انجرفت سحابة واحدة منفوشة عبر السماء الزرقاء، مغيرة أشكالها أثناء تحركها. راقبتها بياتريس من كرسي حديقتها، متخيلة أنها سفينة عملاقة تبحر عبر الهواء.`,
    question: {
      question: "What did Beatriz imagine the single fluffy cloud was?",
      options: [
        "A giant ship sailing through the air across the blue sky",
        "A fierce flying dragon",
        "A castle made of solid stone",
        "A speeding race car"
      ],
      answerIndex: 0,
      explanation: "تخيلت بياتريس السحابة (cloud) المنفوشة كسفينة عملاقة تبحر في السماء الزرقاء."
    }
  }),

  // 242. rock
  rock: (w) => ({
    word: w,
    title: "Jagged Rock",
    titleArabic: "صخرة مسننة",
    storyEnglish: `Hana climbed up the large, jagged rock to get a better vantage point of the canyon. From there, she could see the entire path ahead and decide which way to go.`,
    storyArabic: `تسلق هناء الصخرة الكبيرة المسننة لتحصل على نقطة مراقبة أفضل للوادي. من هناك، استطاعت رؤية الطريق بأكمله أمامها وقررت أي اتجاه ستسلك.`,
    question: {
      question: "Why did Hana climb up the jagged rock?",
      options: [
        "To get a better vantage point of the canyon and see the path ahead",
        "To look for precious gems inside a cave",
        "To shelter from a heavy rainstorm",
        "To set up a tent for the night"
      ],
      answerIndex: 0,
      explanation: "تسلق هناء الصخرة (rock) المسننة للحصول على رؤية أوضح لمسار الوادي."
    }
  }),

  // 243. one
  one: (w) => ({
    word: w,
    title: "The Last Book",
    titleArabic: "الكتاب الأخير",
    storyEnglish: `A single one remained on the shelf, the last book in the entire collection. The old librarian stared at it, knowing that once it was gone, the secrets inside would be lost forever.`,
    storyArabic: `بقيت نسخة واحدة فقط على الرف، الكتاب الأخير في المجموعة بأكملها. حدق أمين المكتبة العجوز فيه، مدركاً أنه بمجرد رحيله، ستضيع الأسرار التي بداخله إلى الأبد.`,
    question: {
      question: "What was the significance of the single book remaining on the shelf?",
      options: [
        "It was the last one in the collection containing secrets that could be lost forever",
        "It was written in a foreign language nobody could read",
        "It was the newest arrival in the modern library",
        "It was waiting to be returned by a student"
      ],
      answerIndex: 0,
      explanation: "بقي كتاب واحد (one) فقط على الرف يحفظ الأسرار الأخيرة للمجموعة."
    }
  }),

  // 244. two
  two: (w) => ({
    word: w,
    title: "A Small Guess",
    titleArabic: "تخمين صغير",
    storyEnglish: `Lina looked at the closed box and smiled. She made a guess and said, "Two!" Everyone laughed because she was correct. She happily opened the box and found small gifts inside.`,
    storyArabic: `نظرت لينا إلى الصندوق المغلق وابتسمت. خمنت وقالت: "اثنان!". ضحك الجميع لأنها كانت على حق. فتحت الصندوق بسعادة ووجدت هدايا صغيرة بداخله.`,
    question: {
      question: "What happened after Lina correctly guessed 'Two'?",
      options: [
        "Everyone laughed and she opened the box to find small gifts inside",
        "She had to pay a penalty in the game",
        "The box was locked with a heavy key",
        "She had to guess a second time"
      ],
      answerIndex: 0,
      explanation: "خمنت لينا العدد اثنين (two) وفتحت الصندوق لتجد هدايا صغيرة."
    }
  }),

  // 245. three
  three: (w) => ({
    word: w,
    title: "Three Doors",
    titleArabic: "ثلاثة أبواب",
    storyEnglish: `There were three doors in the hallway, each painted a different color. Behind one lay a fortune, behind another a trap, and behind the last, a forgotten hallway leading to nowhere.`,
    storyArabic: `كانت هناك ثلاثة أبواب في الردهة، كل منها مطلي بلون مختلف. خلف أحدها ثروة، وخلف آخر فخ، وخلف الأخير، ممر منسي لا يؤدي إلى أي مكان.`,
    question: {
      question: "What was behind the three doors in the hallway?",
      options: [
        "A fortune behind one, a trap behind another, and a forgotten hallway behind the last",
        "Three identical empty guest rooms",
        "A large dining hall filled with guests",
        "A secret garden with singing birds"
      ],
      answerIndex: 0,
      explanation: "قادت الأبواب الثلاثة (three) إلى ثروة، فخ، وممر منسي."
    }
  }),

  // 246. four
  four: (w) => ({
    word: w,
    title: "Four at the Campfire",
    titleArabic: "أربعة حول نار المخيم",
    storyEnglish: `A group of four sat around the campfire, their laughter carrying over the silent lake. They were miles away from civilization, completely unaware of the approaching storm.`,
    storyArabic: `جلس أربعة حول نار المخيم، وضحكاتهم تنتشر فوق البحيرة الصامتة. كانوا على بعد أميال من الحضارة، غير مدركين تماماً للعاصفة القادمة.`,
    question: {
      question: "What were the four friends doing around the campfire?",
      options: [
        "Laughing and enjoying the night, unaware of the approaching storm",
        "Cooking a large fish they caught in the river",
        "Packing their gear to leave early",
        "Calling for emergency rescue on the radio"
      ],
      answerIndex: 0,
      explanation: "جلس الأصدقاء الأربعة (four) حول النار مستمتعين غير منتبهين للعاصفة القادمة."
    }
  }),

  // 247. five
  five: (w) => ({
    word: w,
    title: "Five Minutes",
    titleArabic: "خمس دقائق",
    storyEnglish: `It takes exactly five minutes to walk from the train station to the hidden garden gate. She checked her watch, wondering if she would arrive before the gates locked for the night.`,
    storyArabic: `يستغرق الأمر خمس دقائق بالضبط للمشي من محطة القطار إلى بوابة الحديقة المخفية. نظرت إلى ساعتها، متسائلة عما إذا كانت ستصل قبل إغلاق البوابات ليلاً.`,
    question: {
      question: "Why did she check her watch during the five-minute walk?",
      options: [
        "To see if she would arrive before the hidden garden gates locked for the night",
        "To check if her morning train had departed",
        "To set an alarm for a business meeting",
        "To measure her running speed"
      ],
      answerIndex: 0,
      explanation: "تطلبت المسافة خمس دقائق (five minutes) للمشي إلى بوابة الحديقة قبل إغلاقها."
    }
  }),

  // 248. six
  six: (w) => ({
    word: w,
    title: "Six O'clock",
    titleArabic: "الساعة السادسة",
    storyEnglish: `Six o'clock in the morning is the quietest time in the city. The streets are still empty, and the world seems to hold its breath before the chaos of the day begins.`,
    storyArabic: `الساعة السادسة صباحاً هي أكثر الأوقات هدوءاً في المدينة. لا تزال الشوارع فارغة، ويبدو أن العالم يحبس أنفاسه قبل أن تبدأ فوضى اليوم.`,
    question: {
      question: "What makes six o'clock in the morning special in the city?",
      options: [
        "It is the quietest time with empty streets before daily chaos begins",
        "It is when all the shops and markets close",
        "It is the hottest hour of the afternoon",
        "It is when the fireworks show starts"
      ],
      answerIndex: 0,
      explanation: "تعتبر الساعة السادسة (six o'clock) صباحاً أكثر فترات المدينة هدوءاً وسكينة."
    }
  }),

  // 249. seven
  seven: (w) => ({
    word: w,
    title: "Seven Keys",
    titleArabic: "سبعة مفاتيح",
    storyEnglish: `He had seven keys on his ring, but not one of them opened the iron chest found in the attic. He sat on the floor, surrounded by dust, searching for a pattern.`,
    storyArabic: `كان لديه سبعة مفاتيح في حلقته، لكن لم يفتح أي منها الصندوق الحديدي الموجود في العلية. جلس على الأرض، محاطاً بالغبار، يبحث عن نمط ما.`,
    question: {
      question: "What problem did he face with the seven keys?",
      options: [
        "None of the seven keys opened the iron chest found in the attic",
        "He accidentally dropped them into a deep well",
        "They were made of fragile glass and broke",
        "He gave them all to a stranger"
      ],
      answerIndex: 0,
      explanation: "لم يستطع أي من المفاتيح السبعة (seven keys) فتح الصندوق الحديدي."
    }
  }),

  // 250. eight
  eight: (w) => ({
    word: w,
    title: "Eight O'clock Sunset",
    titleArabic: "غروب الثامنة",
    storyEnglish: `The sun sets at eight during the summer, painting the sky in shades of gold and purple. It is the perfect time for a walk along the quiet shoreline.`,
    storyArabic: `تغرب الشمس في الساعة الثامنة خلال الصيف، لتصبغ السماء بظلال من الذهب والأرجواني. إنه الوقت المثالي للمشي على طول الشاطئ الهادئ.`,
    question: {
      question: "Why is eight o'clock in summer a perfect time for a walk?",
      options: [
        "The sun sets at eight, painting the sky in gold and purple colors",
        "The stores offer night discounts",
        "The high tide recedes completely",
        "The boat tours begin at that hour"
      ],
      answerIndex: 0,
      explanation: "يحل غروب الشمس عند الساعة الثامنة (eight) صابغاً السماء بألوان خلابة مناسبة للمشي."
    }
  }),

  // 251. nine
  nine: (w) => ({
    word: w,
    title: "Nine Years",
    titleArabic: "تسع سنوات",
    storyEnglish: `They waited for nine long years for the ship to return to the harbor. When the sails finally appeared on the horizon, the entire village gathered to witness the miracle.`,
    storyArabic: `انتظروا تسع سنوات طويلة لتعود السفينة إلى الميناء. عندما ظهرت الأشرعة أخيراً في الأفق، تجمعت القرية بأكملها لتشهد المعجزة.`,
    question: {
      question: "What happened after waiting nine long years?",
      options: [
        "The ship's sails finally appeared on the horizon and the village gathered",
        "They built a new harbor in another city",
        "The lighthouse was demolished",
        "They forgot about the missing sailors"
      ],
      answerIndex: 0,
      explanation: "عادت السفينة إلى الميناء بعد انتظار دام تسع (nine) سنوات طويلة."
    }
  }),

  // 252. ten
  ten: (w) => ({
    word: w,
    title: "Ten Steps",
    titleArabic: "عشر خطوات",
    storyEnglish: `With ten steps left to reach the summit, the fog suddenly rolled in, hiding the path ahead. He reached out blindly, feeling for the solid rock wall.`,
    storyArabic: `مع بقاء عشر خطوات للوصول إلى القمة، زحف الضباب فجأة، محجباً الطريق أمامنا. مد يده بشكل أعمى، باحثاً عن جدار صخري صلب.`,
    question: {
      question: "What occurred with ten steps left to the summit?",
      options: [
        "Dense fog rolled in, hiding the path as he felt for the solid rock",
        "He ran out of drinking water",
        "A thunderstorm forced him to slide down",
        "He met another group of hikers coming down"
      ],
      answerIndex: 0,
      explanation: "غطى الضباب الرؤية ولم يبق سوى عشر (ten) خطوات على بلوغ القمة."
    }
  }),

  // 253. zero
  zero: (w) => ({
    word: w,
    title: "Zero Chance",
    titleArabic: "فرصة صفر",
    storyEnglish: `There was zero chance of the radio working in this remote valley. The static was all they could hear, a constant reminder of their total isolation.`,
    storyArabic: `كانت هناك فرصة صفر أن يعمل الراديو في هذا الوادي النائي. كان التشويش هو كل ما يمكنهم سماعه، تذقيراً مستمراً بعزلتهم التامة.`,
    question: {
      question: "What did having zero chance of the radio working mean for the group?",
      options: [
        "They could only hear static, reminding them of their total isolation",
        "They had to walk to the nearest airport immediately",
        "Their batteries had completely melted",
        "They were able to connect to a nearby station"
      ],
      answerIndex: 0,
      explanation: "انعدمت الفرصة (zero chance) لالتقاط أي إشارة راديو في الوادي المعزول."
    }
  }),

  // 254. first
  first: (w) => ({
    word: w,
    title: "First Snow",
    titleArabic: "أول ثلج",
    storyEnglish: `The first snow of the season began to fall just as they lit the fireplace. It was a beautiful sight, turning the dark woods into a winter wonderland.`,
    storyArabic: `بدأ أول ثلج في الموسم في التساقط تماماً بينما أشعلوا المدفأة. كان مشهداً جميلاً، محولاً الغابات المظلمة إلى أرض عجائب شتوية.`,
    question: {
      question: "What transformed the dark woods into a winter wonderland?",
      options: [
        "The first snow of the season falling as they lit the fireplace",
        "A display of holiday lights hanging on the trees",
        "A thick morning fog covering the ground",
        "A blanket of autumn fallen leaves"
      ],
      answerIndex: 0,
      explanation: "حول أول (first) تساقط للثلج الغابة إلى لوحة شتوية ساحرة."
    }
  }),

  // 255. second
  second: (w) => ({
    word: w,
    title: "A Second",
    titleArabic: "ثانية واحدة",
    storyEnglish: `She took a second to catch her breath before jumping into the cool water. The heat of the day was intense, and the lake offered the only relief.`,
    storyArabic: `أخذت ثانية لالتقاط أنفاسها قبل القفز في الماء البارد. كانت حرارة اليوم شديدة، وقدمت البحيرة الراحة الوحيدة.`,
    question: {
      question: "Why did she take a second to catch her breath?",
      options: [
        "To prepare before jumping into the cool water to escape the intense heat",
        "Because she dropped her swimming goggles",
        "To check if the water was shallow",
        "To call out to her friends on shore"
      ],
      answerIndex: 0,
      explanation: "توقفت لثانية (second) واحدة لالتقاط أنفاسها قبل القفز في الماء المنعش."
    }
  }),

  // 256. third
  third: (w) => ({
    word: w,
    title: "The Third House",
    titleArabic: "المنزل الثالث",
    storyEnglish: `The third house on the street was always empty, but tonight a flickering light shone through the dusty curtains. Neighbors watched, wondering who had arrived.`,
    storyArabic: `كان المنزل الثالث في الشارع فارغاً دائماً، لكن الليلة أضاء ضوء متذبذب عبر الستائر المتربة. راقب الجيران، متسائلين عمن وصل.`,
    question: {
      question: "What made the neighbors curious about the third house?",
      options: [
        "A flickering light shone through the curtains of the usually empty house",
        "A moving truck was parked outside all day",
        "The front door had been painted bright red",
        "Loud music was playing from the backyard"
      ],
      answerIndex: 0,
      explanation: "أثار ظهور ضوء في المنزل الثالث (third house) فضول الجيران بعد أن كان مهجوراً."
    }
  }),

  // 257. number
  number: (w) => ({
    word: w,
    title: "The Old Number",
    titleArabic: "الرقم القديم",
    storyEnglish: `He dialed the number etched into the old wooden desk, but the line remained dead. Some things were meant to stay in the past, buried under layers of dust.`,
    storyArabic: `طلب الرقم المحفور على المكتب الخشبي القديم، لكن الخط ظل ميتاً. كانت بعض الأشياء مقدراً لها أن تبقى في الماضي، مدفونة تحت طبقات من الغبار.`,
    question: {
      question: "What happened when he dialed the number etched into the desk?",
      options: [
        "The phone line remained dead, leaving the secret in the past",
        "An automated voice gave him directions to a safe",
        "A distant relative answered immediately",
        "The phone rang three times before disconnecting"
      ],
      answerIndex: 0,
      explanation: "اتصل بالرقم (number) المحفور على المكتب لكن الخط كان معطلاً."
    }
  }),

  // 258. day
  day: (w) => ({
    word: w,
    title: "A New Day",
    titleArabic: "يوم جديد",
    storyEnglish: `Every day brings a new discovery in the jungle, from strange plants to hidden trails. The explorers documented their findings with meticulous care.`,
    storyArabic: `يجلب كل يوم اكتشافاً جديداً في الغابة، من نباتات غريبة إلى مسارات مخفية. وثق المستكشفون نتائجهم بعناية فائقة.`,
    question: {
      question: "What did every day bring for the explorers in the jungle?",
      options: [
        "A new discovery such as strange plants and hidden trails",
        "A severe storm that damaged their camp",
        "A visit from local river boatmen",
        "A shortage of dry firewood"
      ],
      answerIndex: 0,
      explanation: "يحمل كل يوم (day) جديد في الغابة اكتشافات مدهشة وثقها المستكشفون."
    }
  }),

  // 259. week
  week: (w) => ({
    word: w,
    title: "A Week Later",
    titleArabic: "بعد أسبوع",
    storyEnglish: `It has been a week since the mysterious message arrived in a sealed bottle. They were still decoding the hidden symbols, hoping to find a location.`,
    storyArabic: `لقد مر أسبوع منذ وصول الرسالة الغامضة في زجاجة مختومة. كانوا لا يزالون يفككون الرموز المخفية، آملين في العثور على موقع ما.`,
    question: {
      question: "What were they doing a week after the mysterious message arrived?",
      options: [
        "Still decoding the hidden symbols to find a location",
        "Throwing the bottle back into the ocean",
        "Traveling to the nearest big city",
        "Celebrating with a lavish feast"
      ],
      answerIndex: 0,
      explanation: "واصل الفريق فك رموز الرسالة بعد مرور أسبوع (week) على وصولها."
    }
  }),

  // 260. month
  month: (w) => ({
    word: w,
    title: "End of the Month",
    titleArabic: "نهاية الشهر",
    storyEnglish: `By the end of the month, the harvest festival would transform the town into a bustling celebration of life. Everyone was busy preparing their traditional costumes.`,
    storyArabic: `بحلول نهاية الشهر، سيحول مهرجان الحصاد المدينة إلى احتفال صاخب بالحياة. كان الجميع مشغولين بإعداد أزيائهم التقليدية.`,
    question: {
      question: "What event was scheduled to take place by the end of the month?",
      options: [
        "The harvest festival, transforming the town into a bustling celebration",
        "A sailboat race across the bay",
        "The opening of a new library",
        "A winter sports tournament"
      ],
      answerIndex: 0,
      explanation: "يستعد أهالي البلدة لمهرجان الحصاد الحافل بنهاية الشهر (month)."
    }
  }),

  // 261. year
  year: (w) => ({
    word: w,
    title: "This Year",
    titleArabic: "هذه السنة",
    storyEnglish: `This year feels different, like the start of something that could change everything forever. The atmosphere in the city is charged with anticipation and excitement.`,
    storyArabic: `تبدو هذه السنة مختلفة، وكأنها بداية شيء يمكن أن يغير كل شيء إلى الأبد. الجو في المدينة مشحون بالترقب والإثارة.`,
    question: {
      question: "How does the atmosphere in the city feel this year?",
      options: [
        "Charged with anticipation and excitement as if everything could change forever",
        "Completely silent and deserted",
        "Filled with sadness and regret",
        "Tense due to severe winter weather"
      ],
      answerIndex: 0,
      explanation: "تبدو هذه السنة (year) مختلفة ومفعمة بالترقب والحماس لتغييرات كبيرة."
    }
  }),

  // 262. today
  today: (w) => ({
    word: w,
    title: "Today",
    titleArabic: "اليوم",
    storyEnglish: `Today, the ancient clock is finally supposed to strike after a century of silence. People have gathered from all over the country to listen.`,
    storyArabic: `اليوم، يُفترض أن تدق الساعة القديمة أخيراً بعد قرن من الصمت. تجمهر الناس من جميع أنحاء البلاد للاستماع.`,
    question: {
      question: "Why did people gather from all over the country today?",
      options: [
        "To listen to the ancient clock strike after a century of silence",
        "To attend a national sports match",
        "To elect a new town mayor",
        "To witness the demolition of a tower"
      ],
      answerIndex: 0,
      explanation: "اجتمع الناس اليوم (today) لسماع دقات الساعة الأثرية بعد صمت دام قرناً."
    }
  }),

  // 263. yesterday
  yesterday: (w) => ({
    word: w,
    title: "Yesterday",
    titleArabic: "أمس",
    storyEnglish: `Yesterday was a blur of activity, with people rushing to finish their preparations before the festival. Now, the village is perfectly still.`,
    storyArabic: `كان أمس ضباباً من النشاط، حيث كان الناس يسرعون لإنهاء استعداداتهم قبل المهرجان. الآن، القرية ساكنة تماماً.`,
    question: {
      question: "How was yesterday compared to the present stillness in the village?",
      options: [
        "A blur of activity with people rushing to finish festival preparations",
        "Completely quiet with nobody outside",
        "A stormy day with heavy rain floods",
        "A holiday where everyone stayed asleep"
      ],
      answerIndex: 0,
      explanation: "كان يوم أمس (yesterday) حافلاً بالنشاط والتحضيرات للمهرجان قبل أن تسكن القرية."
    }
  }),

  // 264. tomorrow
  tomorrow: (w) => ({
    word: w,
    title: "Tomorrow",
    titleArabic: "غداً",
    storyEnglish: `Tomorrow will reveal the secrets kept hidden for so long in the depths of the library. They have waited for this moment for generations.`,
    storyArabic: `سيكشف غداً عن الأسرار التي ظلت مخفية لفترة طويلة جداً في أعماق المكتبة. لقد انتظروا هذه اللحظة لأجيال.`,
    question: {
      question: "What is expected to happen tomorrow?",
      options: [
        "The secrets hidden for generations in the depths of the library will be revealed",
        "The library will close its doors permanently",
        "A new shipment of modern novels will arrive",
        "The roof of the building will be painted"
      ],
      answerIndex: 0,
      explanation: "سيحمل يوم غد (tomorrow) الكشف عن أسرار المكتبة القديمة المنتظرة."
    }
  }),

  // 265. sunday
  sunday: (w) => ({
    word: w,
    title: "Sunday Morning",
    titleArabic: "صباح الأحد",
    storyEnglish: `On Sunday mornings, the bakery is the most popular place in town. The smell of fresh bread draws everyone out of their houses.`,
    storyArabic: `في صباح الأحد، يكون المخبز هو المكان الأكثر شعبية في المدينة. تجذب رائحة الخبز الطازج الجميع للخروج من منازلهم.`,
    question: {
      question: "What makes the bakery the most popular place on Sunday mornings?",
      options: [
        "The smell of fresh bread drawing everyone out of their houses",
        "Free coffee given to every visitor",
        "Live musical performances on the street",
        "Special discounts on decorative cakes"
      ],
      answerIndex: 0,
      explanation: "يجذب المخبز الجميع في صباح يوم الأحد (Sunday) برائحة الخبز الطازج الشهية."
    }
  }),

  // 266. monday
  monday: (w) => ({
    word: w,
    title: "Monday Fog",
    titleArabic: "ضباب الاثنين",
    storyEnglish: `Monday started with a thick fog that made the entire city look like a dreamscape. People moved slowly, as if not quite ready to face the new week.`,
    storyArabic: `بدأ الاثنين بضباب كثيف جعل المدينة بأكملها تبدو كأنها مشهد من الأحلام. تحرك الناس ببطء، وكأنهم غير مستعدين تماماً لمواجهة الأسبوع الجديد.`,
    question: {
      question: "How did the thick fog affect Monday morning in the city?",
      options: [
        "It made the city look like a dreamscape as people moved slowly into the new week",
        "It caused all flights to be rerouted immediately",
        "It forced all businesses to shut down completely",
        "It washed all the streets clean like rain"
      ],
      answerIndex: 0,
      explanation: "بدأ يوم الاثنين (Monday) بضباب كثيف أضفى أجواء حالمة على شوارع المدينة."
    }
  }),

  // 267. tuesday
  tuesday: (w) => ({
    word: w,
    title: "Tuesday Storm",
    titleArabic: "عاصفة الثلاثاء",
    storyEnglish: `A sudden storm hit on Tuesday, forcing everyone to cancel their outdoor plans and stay inside. It was a perfect excuse to curl up with a good book.`,
    storyArabic: `ضربت عاصفة مفاجئة يوم الثلاثاء، مما أجبر الجميع على إلغاء خططهم الخارجية والبقاء في الداخل. كانت عذراً مثالياً للاسترخاء مع كتاب جيد.`,
    question: {
      question: "What did people do when the sudden storm hit on Tuesday?",
      options: [
        "Cancelled outdoor plans and stayed inside to curl up with a good book",
        "Traveled immediately to the sunny southern coast",
        "Repaired the wooden roof in the heavy wind",
        "Hosted a large outdoor sports tournament"
      ],
      answerIndex: 0,
      explanation: "دفعت عاصفة يوم الثلاثاء (Tuesday) الجميع للبقاء في منازلهم والاستمتاع بالقراءة."
    }
  }),

  // 268. wednesday
  wednesday: (w) => ({
    word: w,
    title: "Wednesday Sun",
    titleArabic: "شمس الأربعاء",
    storyEnglish: `By Wednesday, the sun had returned, and the flowers in the garden began to bloom in vibrant colors. It felt like the world was waking up again.`,
    storyArabic: `بحلول يوم الأربعاء، عادت الشمس، وبدأت الزهور في الحديقة في التفتح بألوان زاهية. بدا الأمر وكأن العالم كان يستيقظ من جديد.`,
    question: {
      question: "What happened by Wednesday when the sun returned?",
      options: [
        "Garden flowers bloomed in vibrant colors and the world felt awake again",
        "The snow started falling again heavily",
        "The garden ponds completely dried up",
        "All the trees lost their green leaves"
      ],
      answerIndex: 0,
      explanation: "عادت الشمس يوم الأربعاء (Wednesday) لتتفتح أزهار الحديقة بألوانها المشرقة."
    }
  }),

  // 269. thursday
  thursday: (w) => ({
    word: w,
    title: "Travel Thursday",
    titleArabic: "خميس السفر",
    storyEnglish: `He planned to travel on Thursday, hoping to reach the coast before the weekend crowds arrived. The road was empty, making for a peaceful journey.`,
    storyArabic: `خطط للسفر يوم الخميس، آملاً في الوصول إلى الساحل قبل وصول حشود عطلة نهاية الأسبوع. كان الطريق فارغاً، مما جعلها رحلة هادئة.`,
    question: {
      question: "Why did he choose to travel on Thursday?",
      options: [
        "To reach the coast peacefully before the weekend crowds arrived",
        "Because train tickets were completely free on that day",
        "To attend a morning business conference",
        "Because his car was being repaired on Friday"
      ],
      answerIndex: 0,
      explanation: "اختار السفر يوم الخميس (Thursday) لتفادي ازدحام عطلة نهاية الأسبوع."
    }
  }),

  // 270. friday
  friday: (w) => ({
    word: w,
    title: "Friday Evening",
    titleArabic: "أمسية الجمعة",
    storyEnglish: `Friday evening is meant for relaxation and music at the local tavern. The atmosphere is warm, filled with laughter and stories of the past week.`,
    storyArabic: `أمسية الجمعة مخصصة للاسترخاء والموسيقى في الحانة المحلية. الجو دافئ، مليء بالضحك وقصص الأسبوع الماضي.`,
    question: {
      question: "How do people spend their Friday evening in town?",
      options: [
        "Relaxing with music, warm laughter, and stories of the past week",
        "Working overtime in the office",
        "Studying late for weekly examinations",
        "Cleaning up the town square"
      ],
      answerIndex: 0,
      explanation: "تتميز أمسية الجمعة (Friday) بأجواء الاسترخاء والموسيقى وتبادل القصص الممتعة."
    }
  }),

  // 271. saturday
  saturday: (w) => ({
    word: w,
    title: "Saturday Stargazing",
    titleArabic: "رصد نجوم السبت",
    storyEnglish: `On Saturday, they hiked to the top of the ridge to watch the stars. It was a clear night, and the universe seemed closer than ever.`,
    storyArabic: `في يوم السبت، صعدوا إلى قمة التلال لمشاهدة النجوم. كانت ليلة صافية، وبدا الكون أقرب من أي وقت مضى.`,
    question: {
      question: "What activity did they do on Saturday?",
      options: [
        "Hiked to the top of the ridge to watch the stars on a clear night",
        "Participated in a fast river boat race",
        "Painted the walls of the community hall",
        "Went shopping at the crowded street market"
      ],
      answerIndex: 0,
      explanation: "صعد الأصدقاء يوم السبت (Saturday) إلى التلال للاستمتاع برصد النجوم في ليلة صافية."
    }
  }),

  // 272. calendar
  calendar: (w) => ({
    word: w,
    title: "Marking the Calendar",
    titleArabic: "تحديد التقويم",
    storyEnglish: `She marked the date on the calendar, a small red "X" representing the day the journey would finally begin. She had counted down every single day.`,
    storyArabic: `وضعت علامة على التاريخ في التقويم، علامة "X" حمراء صغيرة تمثل اليوم الذي ستبدأ فيه الرحلة أخيراً. لقد عدت كل يوم.`,
    question: {
      question: "What did the red 'X' marked on the calendar represent?",
      options: [
        "The long-awaited day the journey would finally begin",
        "Her friend's upcoming birthday party",
        "The due date for returning a library book",
        "The start of the winter school holidays"
      ],
      answerIndex: 0,
      explanation: "حددت على التقويم (calendar) يوم انطلاق الرحلة المرتقبة بعد طول انتظار."
    }
  }),

  // 273. time
  time: (w) => ({
    word: w,
    title: "When Time Stopped",
    titleArabic: "عندما توقف الوقت",
    storyEnglish: `Time seemed to stop when he stepped into the ancient ruins. The silence was heavy, filled with the echoes of a civilization that had vanished.`,
    storyArabic: `بدا أن الوقت يتوقف عندما دخل إلى الأطلال القديمة. كان الصمت ثقيلاً، مليئاً بصدى حضارة قد تلاشت.`,
    question: {
      question: "What impression did the ancient ruins give him about time?",
      options: [
        "Time seemed to stop amid the heavy silence and echoes of a lost civilization",
        "Time was moving faster than ever before",
        "His pocket watch started ticking backwards",
        "He forgot what day of the week it was"
      ],
      answerIndex: 0,
      explanation: "شعر وكأن الوقت (time) قد توقف تماماً بين أطلال الحضارة القديمة."
    }
  }),

  // 274. hour
  hour: (w) => ({
    word: w,
    title: "An Hour Search",
    titleArabic: "ساعة من البحث",
    storyEnglish: `They spent an hour searching for the entrance, but it remained hidden beneath layers of vines. It felt like the forest was protecting its secrets.`,
    storyArabic: `قضوا ساعة في البحث عن المدخل، لكنه ظل مخفياً تحت طبقات من الكروم. بدا الأمر وكأن الغابة كانت تحمي أسرارها.`,
    question: {
      question: "What happened during the hour they spent searching in the forest?",
      options: [
        "The entrance remained hidden beneath layers of thick vines",
        "They found an ancient golden treasure chest",
        "A friendly guide appeared to show them the path",
        "They set up camp and lit a fire"
      ],
      answerIndex: 0,
      explanation: "قضى المستكشفون ساعة (hour) كاملة في البحث عن المدخل المخفي تحت الكروم."
    }
  }),

  // 275. minute
  minute: (w) => ({
    word: w,
    title: "Every Minute",
    titleArabic: "كل دقيقة",
    storyEnglish: `Every minute felt like an eternity as she waited for the phone to ring. The silence in the room was deafening, heightening her anxiety.`,
    storyArabic: `بدا كل دقيقة وكأنها أبدية بينما كانت تنتظر رنين الهاتف. كان الصمت في الغرفة يصم الآذان، مما زاد من قلقها.`,
    question: {
      question: "Why did every minute feel like an eternity?",
      options: [
        "Because she was waiting anxiously in silence for the phone to ring",
        "Because she was taking a difficult written exam",
        "Because she was stuck in a slow elevator",
        "Because her flight was delayed by many hours"
      ],
      answerIndex: 0,
      explanation: "مرت كل دقيقة (minute) ببطء شديد كأنها دهر أثناء انتظارها رنين الهاتف بقلق."
    }
  }),

  // 276. moment
  moment: (w) => ({
    word: w,
    title: "In a Moment",
    titleArabic: "في لحظة",
    storyEnglish: `In a single moment, everything changed; the light shifted, the air grew cold, and the door clicked open. They stood frozen, staring into the dark.`,
    storyArabic: `في لحظة واحدة، تغير كل شيء؛ تحول الضوء، أصبح الهواء بارداً، وانفتح الباب بنقرة. وقفوا متجمدين، يحدقون في الظلام.`,
    question: {
      question: "What happened in that single moment?",
      options: [
        "The light shifted, the air grew cold, and the door clicked open into the dark",
        "The sunlight broke through and cheerful music played",
        "A telephone started ringing loudly down the hall",
        "Someone turned on all the chandelier lights"
      ],
      answerIndex: 0,
      explanation: "في لحظة (moment) واحدة خاطفة تحولت الأجواء وانفتح الباب بغموض."
    }
  }),

  // 277. hundred
  hundred: (w) => ({
    word: w,
    title: "A Hundred Years",
    titleArabic: "مئة عام",
    storyEnglish: `A hundred years ago, this path was a major trade route, buzzing with merchants and travelers from distant lands. Now, it was just a quiet trail.`,
    storyArabic: `قبل مئة عام، كان هذا المسار طريقاً تجارياً رئيسياً، يعج بالتجار والمسافرين من أراضٍ بعيدة. الآن، أصبح مجرد ممر هادئ.`,
    question: {
      question: "What was the quiet trail like a hundred years ago?",
      options: [
        "A major trade route buzzing with merchants and travelers from distant lands",
        "A dense impassable swamp filled with wild animals",
        "A paved railway line for passenger trains",
        "A private royal garden surrounded by high walls"
      ],
      answerIndex: 0,
      explanation: "كان المسار قبل مئة (hundred) عام طريقاً تجارياً حافلاً بالقوافل والتجار."
    }
  }),

  // 278. thousand
  thousand: (w) => ({
    word: w,
    title: "A Thousand Stars",
    titleArabic: "ألف نجمة",
    storyEnglish: `A thousand stars lit up the night sky, creating a breathtaking canopy that left them in awe. They had never seen the Milky Way so clearly.`,
    storyArabic: `أضاءت ألف نجمة سماء الليل، خالقة مظلة خلابة تركتهم في حالة من الذهول. لم يروا درب التبانة بهذا الوضوح من قبل.`,
    question: {
      question: "What view left them in awe as a thousand stars lit up the sky?",
      options: [
        "A breathtaking canopy of stars showing the Milky Way with rare clarity",
        "A display of colorful fireworks over the bay",
        "A flock of night birds migrating south",
        "A distant thunderstorm over the mountains"
      ],
      answerIndex: 0,
      explanation: "أضاءت ألف (thousand) نجمة السماء في مشهد مذهل أظهر مجرة درب التبانة بنقاء."
    }
  }),

  // 279. half
  half: (w) => ({
    word: w,
    title: "Half the Apple",
    titleArabic: "نصف تفاحة",
    storyEnglish: `He ate half of the apple and left the rest for the birds. It was a small act of kindness in a world that was often harsh and unforgiving.`,
    storyArabic: `أكل نصف التفاحة وترك البقية للطيور. كان عملاً صغيراً من اللطف في عالم كان غالباً قاسياً ولا يرحم.`,
    question: {
      question: "What kind act did he perform with the apple?",
      options: [
        "Ate half of it and left the remaining part for the birds",
        "Gave the entire apple to a passing merchant",
        "Planted the apple seeds in fertile soil",
        "Traded the apple for a fresh loaf of bread"
      ],
      answerIndex: 0,
      explanation: "تناول نصف (half) التفاحة وترك النصف الآخر للطيور في بادرة لطيفة."
    }
  }),

  // 280. quarter
  quarter: (w) => ({
    word: w,
    title: "A Quarter Past",
    titleArabic: "ربع بعد منتصف الليل",
    storyEnglish: `The clock struck a quarter past midnight, signaling that the mysterious event was about to begin. They took their places, hearts pounding with anticipation.`,
    storyArabic: `دقت الساعة ربع بعد منتصف الليل، مشيرة إلى أن الحدث الغامض على وشك البدء. أخذوا أماكنهم، وقلوبهم تخفق بالترقب.`,
    question: {
      question: "What did the clock striking a quarter past midnight signal?",
      options: [
        "That the mysterious event was about to begin as they took their places",
        "That it was time to lock all castle gates for safety",
        "That the night train had arrived at the platform",
        "That the morning shift workers were waking up"
      ],
      answerIndex: 0,
      explanation: "أشارت الساعة عند ربع (quarter) بعد منتصف الليل إلى بدء الحدث الغامض المرتقب."
    }
  }),

  // 281. date
  date: (w) => ({
    word: w,
    title: "The Etched Date",
    titleArabic: "التاريخ المحفور",
    storyEnglish: `He found the date etched into the stone base of the monument: a day that changed the future of the entire kingdom.`,
    storyArabic: `وجد التاريخ محفوراً في القاعدة الحجرية للنصب التذكاري: يوماً غيّر مستقبل المملكة بأكملها.`,
    question: {
      question: "What was significant about the date etched into the stone base?",
      options: [
        "It marked a historic day that changed the future of the entire kingdom",
        "It was the day the quarry was first discovered",
        "It recorded the birthday of a forgotten sculptor",
        "It showed when the monument was scheduled for cleaning"
      ],
      answerIndex: 0,
      explanation: "خلّد التاريخ (date) المحفور على النصب الحجري يوماً غيّر مصير المملكة."
    }
  }),

  // 282. season
  season: (w) => ({
    word: w,
    title: "Changing Season",
    titleArabic: "تغير الفصل",
    storyEnglish: `The changing of the season was marked by the falling leaves and the cooling air. It was a time for reflection and preparation for the winter ahead.`,
    storyArabic: `تميز تغير الفصل بأوراق الشجر المتساقطة والهواء البارد. كان وقتاً للتأمل والتحضير للشتاء القادم.`,
    question: {
      question: "What signs marked the changing of the season?",
      options: [
        "Falling leaves and cooling air, bringing time for reflection and preparation",
        "Heavy summer sandstorms",
        "Blooming spring flowers everywhere",
        "Hot tropical winds blowing"
      ],
      answerIndex: 0,
      explanation: "أشارت الأوراق المتساقطة والهواء البارد إلى تغير الفصل (season) والاستعداد للشتاء."
    }
  }),

  // 283. go
  go: (w) => ({
    word: w,
    title: "Mountain Trip",
    titleArabic: "رحلة إلى الجبل",
    storyEnglish: `It would be great to go on a trip to the mountain tomorrow morning. We will pack our bags and enjoy the sunrise view over the high peaks. Are you ready for this fun adventure?`,
    storyArabic: `سيكون من الرائع أن نذهب في رحلة إلى الجبل غداً صباحاً. سنحزم حقائبنا ونستمتع بمنظر الشروق فوق القمم العالية. هل أنت مستعد لهذه المغامرة الممتعة؟`,
    question: {
      question: "What is the plan for tomorrow morning?",
      options: [
        "To go on a trip to the mountain and enjoy the sunrise view over the peaks",
        "To visit a crowded downtown shopping center",
        "To stay at home and paint the living room",
        "To take an international flight to another country"
      ],
      answerIndex: 0,
      explanation: "الخطة هي الذهاب (go) في رحلة جبلية ممتعة لمشاهدة شروق الشمس."
    }
  }),

  // 284. come
  come: (w) => ({
    word: w,
    title: "Friend's Visit",
    titleArabic: "زيارة صديق",
    storyEnglish: `After a long time of work, my friend decided to come to visit me at home this evening. We will prepare a cup of hot coffee and talk about our future plans. I am very excited to see him and hear his news.`,
    storyArabic: `بعد وقت طويل من العمل، قرر صديقي أن يأتي لزيارتي في المنزل هذا المساء. سنقوم بتحضير كوب من القهوة الساخنة ونتحدث عن خططنا القادمة. أنا متحمس جداً لرؤيته وسماع أخباره.`,
    question: {
      question: "What will the narrator and his friend do when the friend comes over?",
      options: [
        "Prepare hot coffee and talk about their future plans and news",
        "Build a wooden treehouse in the backyard",
        "Repair an old motorcycle in the garage",
        "Go shopping for formal suits"
      ],
      answerIndex: 0,
      explanation: "قرر الصديق أن يأتي (come) للزيارة واحتساء القهوة والحديث عن الخطط القادمة."
    }
  }),

  // 285. run
  run: (w) => ({
    word: w,
    title: "The Little Dog",
    titleArabic: "الكلب الصغير",
    storyEnglish: `Every morning, the little dog goes out to run very fast in the large garden. He likes chasing the colorful balls we throw for him in the green grass. He fills the place with happiness and activity all day.`,
    storyArabic: `في كل صباح، يخرج الكلب الصغير ليركض بسرعة كبيرة في الحديقة الواسعة. يحب مطاردة الكرات الملونة التي نرميها له وسط العشب الأخضر. إنه يملأ المكان بالسعادة والنشاط طوال اليوم.`,
    question: {
      question: "What does the little dog like to do every morning?",
      options: [
        "Run fast in the garden chasing colorful balls in the grass",
        "Sleep on the couch all morning",
        "Bark at passing cars on the street",
        "Swim across the cold neighborhood pond"
      ],
      answerIndex: 0,
      explanation: "يخرج الكلب الصغير ليركض (run) بنشاط ويطارد الكرات في الحديقة."
    }
  }),

  // 286. jump
  jump: (w) => ({
    word: w,
    title: "Happy Rabbit",
    titleArabic: "الأرنب السعيد",
    storyEnglish: `When the little rabbit found the fresh carrots in the field, he started to jump with joy everywhere. He was moving with lightness and grace between the tall trees. It was a very fun scene to see him playing in nature.`,
    storyArabic: `عندما وجد الأرنب الصغير الجزر الطازج في الحقل، بدأ ليقفز من الفرح في كل مكان. كان يتحرك بخفة ورشاقة بين الأشجار العالية. لقد كان منظراً ممتعاً جداً أن نراه يلعب في الطبيعة.`,
    question: {
      question: "Why did the little rabbit jump with joy?",
      options: [
        "Because he found fresh carrots in the field",
        "Because he was escaping from a hungry fox",
        "Because it started snowing unexpectedly",
        "Because he found a hidden wooden box"
      ],
      answerIndex: 0,
      explanation: "بدأ الأرنب يقفز (jump) فرحاً عندما وجد الجزر الطازج في الحقل."
    }
  }),

  // 287. fly
  fly: (w) => ({
    word: w,
    title: "Migratory Birds",
    titleArabic: "الطيور المهاجرة",
    storyEnglish: `We watched the migratory birds fly together in the blue sky before the winter season arrived. They formed a wonderful artistic painting as they headed toward warmer areas. I wished I could join them on their long journey.`,
    storyArabic: `شاهدنا الطيور المهاجرة وهي تطير معاً في السماء الزرقاء قبل حلول فصل الشتاء. كانت تشكل لوحة فنية رائعة وهي تتجه نحو المناطق الدافئة. تمنيت لو كان بإمكاني الانضمام إليها في رحلتها الطويلة.`,
    question: {
      question: "Where were the migratory birds flying toward?",
      options: [
        "Toward warmer areas in the blue sky before winter arrived",
        "Toward cold northern snowy mountains",
        "Toward crowded city centers to find bread crumbs",
        "Into deep dark underground caves"
      ],
      answerIndex: 0,
      explanation: "شاهدنا الطيور تطير (fly) في السماء الزرقاء متجهة نحو المناطق الدافئة."
    }
  }),

  // 288. sit
  sit: (w) => ({
    word: w,
    title: "Family Dinner",
    titleArabic: "عشاء العائلة",
    storyEnglish: `After a long day of work, the family asked everyone to sit around the round table for dinner. They talked and laughed about the funny moments from the day. It was a warm and loving evening.`,
    storyArabic: `بعد يوم طويل من العمل، طلبت العائلة من الجميع أن يجلس حول الطاولة المستديرة لتناول العشاء. كانوا يتحدثون ويضحكون على المواقف المضحكة التي حدثت خلال النهار. كانت أمسية دافئة ومليئة بالمحبة.`,
    question: {
      question: "What did the family do as they sat around the round table?",
      options: [
        "Talked and laughed about funny moments from the day during dinner",
        "Watched a quiet television movie in complete silence",
        "Divided household cleaning chores for the week",
        "Packed luggage for an early morning flight"
      ],
      answerIndex: 0,
      explanation: "جلست (sit) العائلة حول المائدة لتناول العشاء وتبادل الضحكات والحديث."
    }
  }),

  // 289. stand
  stand: (w) => ({
    word: w,
    title: "The Strange Man",
    titleArabic: "الرجل الغريب",
    storyEnglish: `There was a strange man who preferred to stand for long hours next to the old library window. He was watching the passersby with sharp eyes as if he was waiting for someone specific to return from his travel. He never spoke to anyone all day.`,
    storyArabic: `كان هناك رجل غريب يفضل أن يقف لساعات طويلة بجانب نافذة المكتبة القديمة. كان يراقب المارة بعينين حادتين وكأنه ينتظر شخصاً معيناً ليعود من سفره. لم يكلم أحداً أبداً طوال اليوم.`,
    question: {
      question: "Why did the strange man stand by the library window for long hours?",
      options: [
        "He watched passersby with sharp eyes as if waiting for someone specific to return",
        "He was selling rare books to tourists",
        "He was painting a portrait of the building",
        "He was sheltering from heavy rainfall"
      ],
      answerIndex: 0,
      explanation: "فضل الرجل الغريب أن يقف (stand) قرب نافذة المكتبة يراقب المارة في صمت."
    }
  }),

  // 290. swim
  swim: (w) => ({
    word: w,
    title: "Swimming in the Lake",
    titleArabic: "السباحة في البحيرة",
    storyEnglish: `The young men in the village decided to swim in the large lake during the weekend. The water was very clear and refreshing under the golden sun rays. They spent an unforgettable time racing in the water.`,
    storyArabic: `قرر الشباب في القرية أن يسبحوا في البحيرة الكبيرة خلال عطلة نهاية الأسبوع. كانت المياه صافية جداً ومنعشة تحت أشعة الشمس الذهبية. قضوا وقتاً لا يُنسى وهم يتسابقون في الماء.`,
    question: {
      question: "How did the young men spend their weekend at the lake?",
      options: [
        "Swimming and racing in the clear, refreshing water under the sun",
        "Fishing for rare freshwater salmon",
        "Building a wooden boat dock on the shore",
        "Camping without going into the water"
      ],
      answerIndex: 0,
      explanation: "قرر شباب القرية السباحة (swim) في البحيرة الصافية والمنعشة خلال العطلة."
    }
  }),

  // 291. ride
  ride: (w) => ({
    word: w,
    title: "Sarah's Bike",
    titleArabic: "دراجة سارة",
    storyEnglish: `To reach work early, Sarah decided to ride her fast bike across the designated path. The road was safe and fun away from the annoying car traffic in the morning. She reached her office with energy and vitality.`,
    storyArabic: `من أجل الوصول إلى العمل مبكراً، قررت سارة أن تركب دراجتها الهوائية السريعة عبر المسار المخصص. الطريق كان آمناً وممتعاً بعيداً عن زحمة السيارات المزعجة في الصباح. وصلت إلى مكتبها بنشاط وحيوية.`,
    question: {
      question: "Why did Sarah decide to ride her bike to work?",
      options: [
        "To reach work early and enjoy a safe path away from car traffic",
        "Because the public bus system was on strike",
        "To train for an international sports tournament",
        "Because her car had a flat tire"
      ],
      answerIndex: 0,
      explanation: "اختارت سارة ركوب (ride) دراجتها للوصول بنشاط وتجنب زحمة السيارات."
    }
  }),

  // 292. drive
  drive: (w) => ({
    word: w,
    title: "Driving Carefully",
    titleArabic: "القيادة بحذر",
    storyEnglish: `The father wanted to drive the big car slowly and carefully to keep the whole family safe during the trip. The road was long but fun because of the beautiful views from the window. Everyone arrived safely.`,
    storyArabic: `أراد الأب السفر بقيادة السيارة الكبيرة ببطء وحذر للحفاظ على سلامة جميع أفراد العائلة أثناء الرحلة. كان الطريق طويلاً لكنه ممتع بسبب المناظر الجميلة من النافذة. وصل الجميع إلى وجهتهم بأمان.`,
    question: {
      question: "Why did the father choose to drive slowly and carefully?",
      options: [
        "To keep the whole family safe during their scenic long trip",
        "Because the car engine was overheating",
        "Because heavy snow covered the highway",
        "To save on fuel costs"
      ],
      answerIndex: 0,
      explanation: "حرص الأب على قيادة (drive) السيارة ببطء وحذر لضمان سلامة العائلة."
    }
  }),

  // 293. push
  push: (w) => ({
    word: w,
    title: "The Heavy Door",
    titleArabic: "الباب الثقيل",
    storyEnglish: `The wooden door was big and very heavy, so we all tried to push it hard to open it. After several collective attempts, we finally succeeded in entering the hidden room. The surprise was amazing inside!`,
    storyArabic: `كان الباب الخشبي كبيراً وثقيلاً جداً، لذا حاولنا جميعاً أن ندفعه بقوة لفتحه. بعد عدة محاولات جماعية، نجحنا أخيراً في الدخول إلى الغرفة المخفية. كانت المفاجأة مذهلة بالداخل!`,
    question: {
      question: "How did the group manage to enter the hidden room?",
      options: [
        "By working together to push the heavy wooden door hard",
        "By finding a secret golden key under the rug",
        "By climbing through a small rooftop window",
        "By waiting for a guardian to open it"
      ],
      answerIndex: 0,
      explanation: "تعاون الجميع على دفع (push) الباب الخشبي الثقيل لفتح الغرفة المخفية."
    }
  }),

  // 294. pull
  pull: (w) => ({
    word: w,
    title: "Pulling the Car",
    titleArabic: "سحب السيارة",
    storyEnglish: `When the car broke down in the middle of the road, everyone had to pull it away from traffic. It was hard and tiring work, but we succeeded in moving it to a safe place. Thank God we were a big group.`,
    storyArabic: `عندما تعطلت السيارة في وسط الطريق، اضطر الجميع لسحبها بعيداً عن حركة المرور. كان عملاً شاقاً ومتعباً لكننا نجحنا في إبعادها إلى مكان آمن. الحمد لله أننا كنا مجموعة كبيرة.`,
    question: {
      question: "What did the group do when the car broke down in the road?",
      options: [
        "Pulled it together away from traffic to a safe place",
        "Left it in the middle of the lane and walked away",
        "Called an expensive helicopter to lift it",
        "Pushed it down into a roadside ditch"
      ],
      answerIndex: 0,
      explanation: "تكاتفت المجموعة لسحب (pull) السيارة المتعطلة بعيداً عن حركة السير إلى بر الأمان."
    }
  }),

  // 295. carry
  carry: (w) => ({
    word: w,
    title: "Helping the Old Man",
    titleArabic: "مساعدة الرجل العجوز",
    storyEnglish: `We helped the old man carry the heavy bags to the upper floor of the building. He was very thankful for our help and wished us a happy day full of success. It is always good to lend a helping hand to others.`,
    storyArabic: `ساعدنا الرجل العجوز لنحمل الحقائب الثقيلة إلى الطابق العلوي من المبنى. كان شاكراً جداً لمساعدتنا وتمنى لنا يوماً سعيداً ومليئاً بالنجاح. من الجيد دائماً مد يد العون للآخرين.`,
    question: {
      question: "How did they help the old man?",
      options: [
        "Helped him carry his heavy bags to the upper floor of the building",
        "Bought him new groceries from the supermarket",
        "Drove him to the local train station",
        "Repaired his broken wooden front door"
      ],
      answerIndex: 0,
      explanation: "قدم الشباب المساعدة للرجل العجوز في حمل (carry) الحقائب الثقيلة للطابق العلوي."
    }
  }),

  // 296. bring
  bring: (w) => ({
    word: w,
    title: "Fresh Vegetables",
    titleArabic: "الخضروات الطازجة",
    storyEnglish: `My mother asked me to bring some fresh vegetables from the market before she returned from work. I went quickly and bought everything she needed to make a delicious salad. Home cooking is always the best.`,
    storyArabic: `طلبت مني والدتي أن أحضر بعض الخضروات الطازجة من السوق قبل عودتها من العمل. ذهبت بسرعة واشتريت كل ما تحتاجه لصنع سلطة لذيذة. الطبخ المنزلي هو الأفضل دائماً.`,
    question: {
      question: "What did the mother ask to bring from the market?",
      options: [
        "Fresh vegetables needed to make a delicious salad",
        "A dozen freshly baked sweet pastries",
        "New cooking pots and kitchen knives",
        "A bottle of fresh olive oil"
      ],
      answerIndex: 0,
      explanation: "طلبت الأم إحضار (bring) خضروات طازجة من السوق لإعداد سلطة منزلية لذيذة."
    }
  }),

  // 297. take
  take: (w) => ({
    word: w,
    title: "A Short Break",
    titleArabic: "استراحة قصيرة",
    storyEnglish: `We decided to take a short break under the shadow of the big tree after walking for long hours. We took out the food and water and sat enjoying the total silence in the forest. It was a necessary break period to renew our activity.`,
    storyArabic: `قررنا أن نأخذ استراحة قصيرة تحت ظل الشجرة الكبيرة بعد المشي لساعات طويلة. أخرجنا الطعام والماء وجلسنا نستمتع بالهدوء التام في الغابة. كانت فترة راحة ضرورية لتجديد نشاطنا.`,
    question: {
      question: "Why did the hikers decide to take a short break under the big tree?",
      options: [
        "To rest after long hours of walking, eat food, and renew their energy in silence",
        "Because it started raining heavily",
        "To search for lost hiking maps",
        "To build an overnight wooden shelter"
      ],
      answerIndex: 0,
      explanation: "قرر المتجولون أخذ (take) استراحة قصيرة تحت ظل الشجرة لتجديد طاقتهم."
    }
  }),

  // 298. give
  give: (w) => ({
    word: w,
    title: "Educational Initiative",
    titleArabic: "مبادرة تعليمية",
    storyEnglish: `The teacher wants to give every student a new book to enhance their love for reading at school. The initiative received a big welcome from the parents because it is an excellent educational idea. Education is the key to a bright future.`,
    storyArabic: `يريد المعلم أن يعطي كل طالب كتاباً جديداً ليعزز حب القراءة لديهم في المدرسة. المبادرة لاقت ترحيباً كبيراً من الأهالي لأنها فكرة تعليمية ممتازة. التعليم هو مفتاح المستقبل المشرق.`,
    question: {
      question: "What does the teacher want to give each student?",
      options: [
        "A new book to enhance their love for reading at school",
        "A gold medal for sports achievements",
        "A free laptop computer for homework",
        "A set of colorful painting pencils"
      ],
      answerIndex: 0,
      explanation: "أراد المعلم إعطاء (give) كل طالب كتاباً جديداً لتشجيعهم على القراءة."
    }
  }),

  // 299. throw
  throw: (w) => ({
    word: w,
    title: "Keep Nature Clean",
    titleArabic: "الحفاظ على نظافة الطبيعة",
    storyEnglish: `We must not throw garbage in the sea because that harms the fish and the beautiful marine creatures. Keeping beaches clean is everyone's responsibility to ensure the environment remains healthy. Let's always be friends of nature.`,
    storyArabic: `يجب ألا نرمي النفايات في البحر لأن ذلك يضر بالأسماك والكائنات البحرية الجميلة. الحفاظ على نظافة الشواطئ هو مسؤولية الجميع لضمان بقاء البيئة سليمة. لنكن أصدقاء للطبيعة دائماً.`,
    question: {
      question: "Why must we not throw garbage into the sea?",
      options: [
        "Because it harms fish and marine creatures and damages the clean environment",
        "Because it makes beach sand too hot to walk on",
        "Because it scares away seagulls and coastal birds",
        "Because sea waves will push it to other continents"
      ],
      answerIndex: 0,
      explanation: "يجب ألا نرمي (throw) النفايات في البحر حفاظاً على سلامة الكائنات البحرية والبيئة."
    }
  }),

  // 300. catch
  catch: (w) => ({
    word: w,
    title: "Goalkeeper's Save",
    titleArabic: "إنقاذ الحارس",
    storyEnglish: `The goalkeeper tried to catch the fast ball before it entered his net in the last seconds. His reaction was very fast and he saved his team from a certain loss in that decisive match. The crowd shouted with joy.`,
    storyArabic: `حاول حارس المرمى أن يمسك بالكرة السريعة قبل أن تدخل إلى شباكه في الثواني الأخيرة. كان تفاعله سريعاً جداً وأنقذ فريقه من خسارة محققة في تلك المباراة الحاسمة. الجماهير صرخت من الفرح.`,
    question: {
      question: "What did the goalkeeper do in the last seconds of the match?",
      options: [
        "Caught the fast ball with a quick reaction, saving his team from defeat",
        "Scored a long-distance goal into the opponent's net",
        "Signaled to the referee for extra injury time",
        "Passed the ball to the team captain"
      ],
      answerIndex: 0,
      explanation: "تمكن الحارس من التقاط ومسك (catch) الكرة السريعة في اللحظات الأخيرة وإنقاذ فريقه."
    }
  }),

  // 301. open
  open: (w) => ({
    word: w,
    title: "Opening the Window",
    titleArabic: "فتح النافذة",
    storyEnglish: `Can you open the window to let some fresh air inside? The room is getting a bit stuffy after the long meeting. Thank you for your help.`,
    storyArabic: `هل يمكنك أن تفتح النافذة ليدخل القليل من الهواء المنعش؟ الغرفة أصبحت خانقة قليلاً بعد الاجتماع الطويل. شكراً لمساعدتك.`,
    question: {
      question: "Why does the speaker ask to open the window?",
      options: [
        "To let fresh air inside because the room became stuffy after a long meeting",
        "To listen to the city street noise",
        "To dry wet clothes on the windowsill",
        "To talk to someone outside"
      ],
      answerIndex: 0,
      explanation: "طلب المتحدث فتح (open) النافذة للسماح بدخول الهواء المنعش بعد اجتماع طويل."
    }
  }),

  // 302. close
  close: (w) => ({
    word: w,
    title: "Closing the Gate",
    titleArabic: "إغلاق البوابة",
    storyEnglish: `Please close the gate so the dog does not run out into the street. It is important to keep him safe in the yard. Thank you.`,
    storyArabic: `من فضلك أغلق البوابة حتى لا يركض الكلب إلى الشارع. من المهم أن تبقيه آمناً في الحديقة. شكراً لك.`,
    question: {
      question: "Why should the gate be closed?",
      options: [
        "So the dog does not run out into the street and stays safe in the yard",
        "To lock out the mail carrier",
        "To paint the wooden gate panels",
        "To prevent garden leaves from blowing away"
      ],
      answerIndex: 0,
      explanation: "يجب إغلاق (close) البوابة لمنع الكلب من الركض إلى الشارع والحفاظ على سلامته."
    }
  }),

  // 303. show
  show: (w) => ({
    word: w,
    title: "Talented Artist",
    titleArabic: "الفنان الموهوب",
    storyEnglish: `The talented artist wanted to show us his new oil painting which took him long weeks to draw. The colors were harmonious and the drawings were amazingly realistic. Everyone clapped for him in appreciation of his wonderful talent.`,
    storyArabic: `أراد الفنان الموهوب أن يرينا لوحته الزيتية الجديدة التي استغرق رسمها أسابيع طويلة. الألوان كانت متناسقة والرسومات كانت واقعية بشكل مذهل. الجميع صفق له تقديراً لموهبته الرائعة.`,
    question: {
      question: "What did the talented artist want to show?",
      options: [
        "His new oil painting with harmonious colors and amazingly realistic drawings",
        "His collection of vintage paintbrushes",
        "His new art studio blueprints",
        "His ceramic sculptures from art school"
      ],
      answerIndex: 0,
      explanation: "أراد الفنان الموهوب أن يعرض ويري (show) الحاضرين لوحته الزيتية الجديدة المتقنة."
    }
  }),

  // 304. play
  play: (w) => ({
    word: w,
    title: "Children Playing",
    titleArabic: "لعب الأطفال",
    storyEnglish: `In the evening, the children used to play with their toys in the backyard of the house. Their cheerful voices fill the place and make us feel joy and pleasure. There is nothing more beautiful than the innocence of children.`,
    storyArabic: `في المساء، اعتاد الأطفال أن يلعبوا بألعابهم في الساحة الخلفية للمنزل. أصواتهم المبهجة تملأ المكان وتجعلنا نشعر بالبهجة والسرور. لا يوجد شيء أجمل من براءة الأطفال.`,
    question: {
      question: "Where did the children play in the evening?",
      options: [
        "In the backyard of the house with their toys",
        "In the crowded city streets",
        "On the high rooftop terrace",
        "Inside the school library"
      ],
      answerIndex: 0,
      explanation: "اعتاد الأطفال أن يلعبوا (play) بألعابهم في حديقة المنزل الخلفية بفرح وسرور."
    }
  }),

  // 305. make
  make: (w) => ({
    word: w,
    title: "Grandmother's Pies",
    titleArabic: "فطائر الجدة",
    storyEnglish: `My grandmother loves to make delicious pies every Friday for all her grandchildren. The smell of baked goods spreads in all corners of the house and opens our appetites for all. We wait for this meal all week long.`,
    storyArabic: `تحب جدتي أن تصنع الفطائر اللذيذة في كل يوم جمعة لجميع أحفادها. رائحة المخبوزات تنتشر في كل زوايا البيت وتفتح شهيتنا جميعاً. نحن ننتظر هذه الوجبة طوال الأسبوع.`,
    question: {
      question: "What does the grandmother love to make every Friday?",
      options: [
        "Delicious pies for all her grandchildren",
        "Homemade strawberry jam jars",
        "Warm wool sweaters for winter",
        "Wooden birdhouses for the garden"
      ],
      answerIndex: 0,
      explanation: "تحب الجدة أن تصنع وتعد (make) الفطائر الشهية كل جمعة لأحفادها."
    }
  }),

  // 306. do
  do: (w) => ({
    word: w,
    title: "Protecting Forests",
    titleArabic: "حماية الغابات",
    storyEnglish: `We have to do what we can to protect forests from fires in the hot summer season. Cooperation between people is the basis for saving trees and wild animals from danger. The future depends on our actions today.`,
    storyArabic: `علينا أن نفعل ما في وسعنا لحماية الغابات من الحرائق في فصل الصيف الحار. التعاون بين الناس هو الأساس لإنقاذ الأشجار والحيوانات البرية من الخطر. المستقبل يعتمد على تصرفاتنا اليوم.`,
    question: {
      question: "What must we do according to the story?",
      options: [
        "Do what we can to protect forests and wildlife from fires in hot summer",
        "Cut down old trees to build roads",
        "Close all forest trails permanently",
        "Stop outdoor summer camping completely"
      ],
      answerIndex: 0,
      explanation: "يجب أن نفعل (do) كل ما في وسعنا للتعاون وحماية الغابات من الحرائق."
    }
  }),

  // 307. find
  find: (w) => ({
    word: w,
    title: "Desert Discovery",
    titleArabic: "اكتشاف الصحراء",
    storyEnglish: `After a long search, the team was able to find the lost artifact under the desert sand. It was a historical moment that can never be forgotten after years of continuous work. The discovery was amazing for everyone.`,
    storyArabic: `بعد بحث طويل، استطاع الفريق أن يجد القطعة الأثرية المفقودة تحت رمال الصحراء. كانت لحظة تاريخية لا يمكن نسيانها أبداً بعد سنوات من العمل المتواصل. الاكتشاف كان مذهلاً للجميع.`,
    question: {
      question: "What was the team able to find after a long search?",
      options: [
        "The lost artifact under the desert sand after years of continuous work",
        "An ancient freshwater oasis in the valley",
        "A hidden chest of modern gold coins",
        "A herd of rare desert camels"
      ],
      answerIndex: 0,
      explanation: "استطاع الفريق أن يجد (find) القطعة الأثرية المفقودة تحت الرمال بعد بحث طويل."
    }
  }),

  // 308. lose
  lose: (w) => ({
    word: w,
    title: "Don't Lose Keys",
    titleArabic: "لا تفقد مفاتيحك",
    storyEnglish: `I always warn my friends not to lose their keys in a crowded place because getting them back is very difficult. Forgetting is our first enemy in this fast world. Order is the key to success and psychological comfort.`,
    storyArabic: `أحذر دائماً أصدقائي ألا يفقدوا مفاتيحهم في مكان مزدحم لأن استعادتها صعبة جداً. النسيان هو عدونا الأول في هذا العالم السريع. الترتيب هو مفتاح النجاح والراحة النفسية.`,
    question: {
      question: "Why does the narrator warn friends not to lose their keys in crowded places?",
      options: [
        "Because getting them back is very difficult and order brings peace of mind",
        "Because keys are made of solid gold",
        "Because duplicate keys cannot be made",
        "Because doors cannot be unlocked from the outside"
      ],
      answerIndex: 0,
      explanation: "يُنصح بعدم إضاعة وفقدان (lose) المفاتيح في الأماكن المزدحمة لصعوبة استرجاعها."
    }
  }),

  // 309. hold
  hold: (w) => ({
    word: w,
    title: "Costume Party",
    titleArabic: "الحفلة التنكرية",
    storyEnglish: `At the costume party, everyone was holding a mysterious mask that hides his face from others. The game was fun because we were trying to know the identity of our friends. We laughed a lot when the facts were revealed at the end.`,
    storyArabic: `في الحفلة التنكرية، كان كل شخص يمسك قناعاً غامضاً يخفي وجهه عن الآخرين. كانت اللعبة ممتعة لأننا كنا نحاول معرفة هوية أصدقائنا. ضحكنا كثيراً عندما انكشفت الحقائق في النهاية.`,
    question: {
      question: "What was everyone holding at the costume party?",
      options: [
        "A mysterious mask that hides the face from others",
        "A glowing colorful lantern",
        "A glass of fruit juice",
        "A wrapped mystery prize"
      ],
      answerIndex: 0,
      explanation: "كان كل شخص يمسك (hold) قناعاً غامضاً يخفي وجهه في الحفلة التنكرية."
    }
  }),

  // 310. drop
  drop: (w) => ({
    word: w,
    title: "Match Enthusiasm",
    titleArabic: "حماس المباراة",
    storyEnglish: `Because of the intense enthusiasm in the match, the player dropped the ball from his hand unintentionally. A golden opportunity for scoring was lost, but he apologized to the audience with a smile. Sports is morals before it is winning.`,
    storyArabic: `بسبب الحماس الشديد في المباراة، قام اللاعب بإسقاط الكرة من يده عن غير قصد. ضاعت فرصة ذهبية للتسجيل لكنه اعتذر للجمهور بابتسامة. الرياضة هي أخلاق قبل أن تكون فوزاً.`,
    question: {
      question: "What happened when the player dropped the ball unintentionally?",
      options: [
        "A golden scoring opportunity was lost, but he apologized to the audience with a smile",
        "The referee awarded a red penalty card",
        "The coach ended the match early",
        "The other team walked off the field"
      ],
      answerIndex: 0,
      explanation: "أسقط (drop) اللاعب الكرة من يده عن غير قصد بسبب الحماس الشديد واعتذر بروح رياضية."
    }
  }),

  // 311. stop
  stop: (w) => ({
    word: w,
    title: "Forest Sounds",
    titleArabic: "أصوات الغابة",
    storyEnglish: `Suddenly, the guide asked us to stop walking to listen to the sounds of rare birds. The silence of the forest was very relaxing for the nerves after the trouble of the long road. Nature is the best medicine for the soul.`,
    storyArabic: `فجأة، طلب منا المرشد أن نتوقف عن المشي لنستمع إلى أصوات الطيور النادرة. كان صمت الغابة مريحاً جداً للأعصاب بعد عناء الطريق الطويل. الطبيعة هي أفضل دواء للروح.`,
    question: {
      question: "Why did the guide ask the group to stop walking?",
      options: [
        "To listen to the sounds of rare birds in the relaxing silence of the forest",
        "To fix a broken compass",
        "To set up an emergency shelter for rain",
        "To wait for a delayed vehicle"
      ],
      answerIndex: 0,
      explanation: "طلب المرشد التوقف (stop) عن المشي للاستماع لتغريد الطيور النادرة وهدوء الغابة."
    }
  }),

  // 312. hit
  hit: (w) => ({
    word: w,
    title: "Stormy Wind",
    titleArabic: "الرياح العاصفة",
    storyEnglish: `When the strong wind hit the windows, I felt as if something was hitting the glass hard. I was very afraid at first but I realized later that it was just a passing storm. I stayed in my room reading my book quietly.`,
    storyArabic: `عندما ارتطمت الرياح القوية بالنوافذ، شعرت وكأن شياً ما يضرب الزجاج بقوة. خفت كثيراً في البداية لكنني أدركت لاحقاً أنها مجرد عاصفة عابرة. بقيت في غرفتي أقرأ كتابي بهدوء.`,
    question: {
      question: "What hit the windows during the passing storm?",
      options: [
        "Strong gusting wind that felt like something hitting the glass hard",
        "Falling tree branches from the garden",
        "Heavy frozen hail stones",
        "A stray flock of birds"
      ],
      answerIndex: 0,
      explanation: "ارتطمت وضربت (hit) الرياح العاصفة القوية زجاج النوافذ أثناء العاصفة العابرة."
    }
  }),

  // 313. kick
  kick: (w) => ({
    word: w,
    title: "Neighborhood Football",
    titleArabic: "كرة قدم الحارة",
    storyEnglish: `In the neighborhood field, the boys used to kick the ball with all their strength toward the small goal. They were times full of vitality and challenge between friends every evening. Football is always our favorite sport.`,
    storyArabic: `في ملعب الحارة، اعتاد الأولاد أن يركلوا الكرة بكل قوتهم نحو المرمى الصغير. كانت أوقاتاً مليئة بالحيوية والتحدي بين الأصدقاء في كل مساء. كرة القدم هي رياضتنا المفضلة دائماً.`,
    question: {
      question: "What did the boys do in the neighborhood field every evening?",
      options: [
        "Kicked the ball with all their strength toward the small goal in fun matches",
        "Flew colorful paper kites in the wind",
        "Built miniature bicycle ramps",
        "Played board games on park benches"
      ],
      answerIndex: 0,
      explanation: "اعتاد الأولاد ركل (kick) الكرة بكل قوتهم نحو المرمى في مباريات الحارة الحماسية."
    }
  }),

  // 314. cut
  cut: (w) => ({
    word: w,
    title: "Professional Chef",
    titleArabic: "الطباخ المحترف",
    storyEnglish: `The professional chef used a sharp knife to cut the meat into small, even pieces with high precision. His skill in the kitchen dazzled everyone and made the food look ready for serving. He is an artist in making dishes.`,
    storyArabic: `استخدم الطباخ المحترف سكيناً حاداً ليقطع اللحم إلى قطع صغيرة متساوية بدقة عالية. كانت مهارته في المطبخ تبهر الجميع وتجعل الطعام يبدو جاهزاً للتقديم. هو فنان في صنع الأطباق.`,
    question: {
      question: "How did the chef cut the meat?",
      options: [
        "Into small, even pieces with high precision using a sharp knife",
        "Into thick uneven blocks for soup",
        "Without using any metal knives",
        "With the help of an apprentice cook"
      ],
      answerIndex: 0,
      explanation: "استخدم الطاهي سكيناً حاداً لقطع وتقطيع (cut) اللحم لقطع متساوية بدقة واحترافية."
    }
  }),

  // 315. build
  build: (w) => ({
    word: w,
    title: "Building a Hut",
    titleArabic: "بناء كوخ",
    storyEnglish: `Last summer, we decided to build a small wooden hut in the house garden. My father helped me fix the pillars and the work was very fun for us. The hut became my favorite place for reading.`,
    storyArabic: `في الصيف الماضي، قررنا أن نبني كوخاً صغيراً من الخشب في حديقة المنزل. ساعدني والدي في تثبيت الأعمدة وكان العمل ممتعاً للغاية لنا. أصبح الكوخ مكاني المفضل للقراءة.`,
    question: {
      question: "What did they build in the house garden last summer?",
      options: [
        "A small wooden hut that became a favorite place for reading",
        "A stone swimming pool for summer days",
        "A brick greenhouse for growing roses",
        "A tall metal fence around the yard"
      ],
      answerIndex: 0,
      explanation: "تعاون الابن مع والده على بناء (build) كوخ خشبي صغير في الحديقة أصبح مكاناً للقراءة."
    }
  }),

  // 316. draw
  draw: (w) => ({
    word: w,
    title: "Artistic Painting",
    titleArabic: "لوحة فنية",
    storyEnglish: `The talented girl started to draw an artistic painting expressing the beauty of nature in the spring season. She used watercolors to add a magical touch to the white paper. Everyone stood watching her as she excelled in her work.`,
    storyArabic: `بدأت الفتاة الموهوبة لترسم لوحة فنية تعبر عن جمال الطبيعة في فصل الربيع. استعملت الألوان المائية لتضيف لمسة سحرية على الورقة البيضاء. الجميع وقف يشاهدها وهي تبدع في عملها.`,
    question: {
      question: "What did the talented girl draw?",
      options: [
        "An artistic painting expressing the beauty of nature in spring using watercolors",
        "A detailed map of ancient city streets",
        "A architectural design for a school library",
        "A cartoon character for a children book"
      ],
      answerIndex: 0,
      explanation: "بدأت الفتاة برسم (draw) لوحة فنية بالألوان المائية تعبر عن سحر الربيع."
    }
  }),

  // 317. wake up
  "wake up": (w) => ({
    word: w,
    title: "Waking Up",
    titleArabic: "الاستيقاظ",
    storyEnglish: `The sun shines through the curtains, and the alarm clock rings loudly. I wake up feeling very energetic and ready for my morning exercises. It is a lovely day.`,
    storyArabic: `تشرق الشمس من خلال الستائر، ويرن المنبه بصوت عالٍ. أستيقظ وأنا أشعر بنشاط كبير ومستعد لتمارين الصباح. إنه يوم جميل.`,
    question: {
      question: "How does the narrator feel when waking up in the morning?",
      options: [
        "Very energetic and ready for morning exercises as sunlight shines through",
        "Tired and wishing to sleep several more hours",
        "Worried about missing the school bus",
        "Confused by the loud alarm ring"
      ],
      answerIndex: 0,
      explanation: "يستيقظ (wake up) الكاتب بنشاط وحيوية مع إشراقة الشمس ورنين المنبه لممارسة الرياضة."
    }
  }),
  wake: (w) => ({
    word: w,
    title: "Waking Up",
    titleArabic: "الاستيقاظ",
    storyEnglish: `The sun shines through the curtains, and the alarm clock rings loudly. I wake up feeling very energetic and ready for my morning exercises. It is a lovely day.`,
    storyArabic: `تشرق الشمس من خلال الستائر، ويرن المنبه بصوت عالٍ. أستيقظ وأنا أشعر بنشاط كبير ومستعد لتمارين الصباح. إنه يوم جميل.`,
    question: {
      question: "How does the narrator feel when waking up in the morning?",
      options: [
        "Very energetic and ready for morning exercises as sunlight shines through",
        "Tired and wishing to sleep several more hours",
        "Worried about missing the school bus",
        "Confused by the loud alarm ring"
      ],
      answerIndex: 0,
      explanation: "يستيقظ (wake up) الكاتب بنشاط وحيوية مع إشراقة الشمس ورنين المنبه لممارسة الرياضة."
    }
  }),

  // 318. read
  read: (w) => ({
    word: w,
    title: "Reading in the Garden",
    titleArabic: "القراءة في الحديقة",
    storyEnglish: `I find a quiet corner in the garden to read my favorite book. The story is exciting, and I forget everything around me. I love these peaceful moments.`,
    storyArabic: `أجد زاوية هادئة في الحديقة لأقرأ كتابي المفضل. القصة مثيرة، وأنسى كل شيء حولي. أحب هذه اللحظات الهادئة.`,
    question: {
      question: "Why does the narrator love reading in the garden?",
      options: [
        "Because the story is exciting in a quiet corner and brings peaceful moments",
        "Because the garden has bright solar lamps",
        "To practice reading aloud to others",
        "Because the house was too warm"
      ],
      answerIndex: 0,
      explanation: "يستمتع الكاتب بالقراءة (read) في زاوية هادئة بالحديقة مع قصة مشوقة."
    }
  }),

  // 319. write
  write: (w) => ({
    word: w,
    title: "Writing Letters",
    titleArabic: "كتابة الرسائل",
    storyEnglish: `Letters are special, so I write one to my friend every Sunday. I use a colorful pen and paper to make them look nice. It is a great way to stay in touch.`,
    storyArabic: `الرسائل مميزة، لذا أكتب واحدة لصديقي كل يوم أحد. أستخدم قلماً وورقاً ملوناً لأجعلها تبدو جميلة. إنها طريقة رائعة للبقاء على تواصل.`,
    question: {
      question: "Why does the narrator write a letter to a friend every Sunday?",
      options: [
        "Because letters are special and it is a great way to stay in touch",
        "To practice foreign language handwriting",
        "Because postal stamps are collected as a hobby",
        "To submit weekly school assignments"
      ],
      answerIndex: 0,
      explanation: "كتابة (write) الرسائل كل أحد طريقة مميزة وجميلة للتواصل المستمر مع الأصدقاء."
    }
  }),

  // 320. speak
  speak: (w) => ({
    word: w,
    title: "Speaking Politely",
    titleArabic: "التحدث بأدب",
    storyEnglish: `During the meeting, it is polite to speak clearly and wait for your turn. Many people have different ideas, so we must listen to everyone carefully. Good communication makes work easy.`,
    storyArabic: `أثناء الاجتماع، من الأدب أن تتحدث بوضوح وتنتظر دورك. لدى الكثير من الناس أفكار مختلفة، لذا يجب أن نستمع للجميع بعناية. التواصل الجيد يجعل العمل سهلاً.`,
    question: {
      question: "What is considered polite during a meeting according to the story?",
      options: [
        "To speak clearly, wait for your turn, and listen carefully to everyone's ideas",
        "To take detailed minutes on a laptop",
        "To interrupt speakers with quick answers",
        "To leave early once your topic finishes"
      ],
      answerIndex: 0,
      explanation: "من آداب الاجتماع التحدث (speak) بوضوح وانتظار الدور والاستماع باهتمام."
    }
  }),

  // 321. listen
  listen: (w) => ({
    word: w,
    title: "Listen to the Teacher",
    titleArabic: "الاستماع للمعلم",
    storyEnglish: `You should listen to the teacher during the class. He has important information about our next project. Following his advice will help us succeed.`,
    storyArabic: `يجب عليك أن تستمع للمعلم أثناء الحصة. لديه معلومات مهمة حول مشروعنا القادم. اتباع نصيحته سيساعدنا على النجاح.`,
    question: {
      question: "Why should students listen to the teacher during class?",
      options: [
        "Because he has important information about the next project and advice for success",
        "Because attendance points are given for silence",
        "To finish homework before the bell rings",
        "Because a surprise quiz will follow immediately"
      ],
      answerIndex: 0,
      explanation: "يجب الاستماع (listen) للمعلم لاتباع نصائحه ومعرفة معلومات المشروع والنجاح فيه."
    }
  }),

  // 322. hear
  hear: (w) => ({
    word: w,
    title: "Hearing a Sound",
    titleArabic: "سماع صوت",
    storyEnglish: `Suddenly, I hear a strange sound coming from the kitchen. It is probably just the cat looking for some food. I feel much better now.`,
    storyArabic: `فجأة، أسمع صوتاً غريباً قادماً من المطبخ. من المحتمل أن يكون مجرد القط يبحث عن بعض الطعام. أشعر بتحسن كبير الآن.`,
    question: {
      question: "What was the strange sound heard coming from the kitchen?",
      options: [
        "Probably just the cat looking for some food",
        "Water leaking from a broken pipe",
        "The wind knocking over a trash bin",
        "A refrigerator timer ringing"
      ],
      answerIndex: 0,
      explanation: "سماع (hear) صوت غريب في المطبخ تبين أنه على الأرجح القط يبحث عن طعامه."
    }
  }),

  // 323. see
  see: (w) => ({
    word: w,
    title: "Seeing the City",
    titleArabic: "رؤية المدينة",
    storyEnglish: `From the mountain top, you can see the whole city. The buildings look small, and the cars move like tiny toys. It is an amazing view.`,
    storyArabic: `من قمة الجبل، يمكنك أن ترى المدينة بأكملها. تبدو المباني صغيرة، وتتحرك السيارات مثل ألعاب صغيرة. إنه منظر مذهل.`,
    question: {
      question: "What can you see from the top of the mountain?",
      options: [
        "The whole city with small-looking buildings and cars moving like tiny toys",
        "A vast dark forest with no roads",
        "A foggy ocean with large cargo ships",
        "The sun setting behind another distant peak"
      ],
      answerIndex: 0,
      explanation: "يمكن رؤية (see) كامل المدينة من قمة الجبل في مشهد ساحر تبدو فيه المباني والسيارات صغيرة."
    }
  }),

  // 324. study
  study: (w) => ({
    word: w,
    title: "Studying for Exams",
    titleArabic: "الدراسة للامتحانات",
    storyEnglish: `If you study every evening, you will do great in your exams. Success requires discipline and time. I keep my books on a clean desk.`,
    storyArabic: `إذا درست كل مساء، ستبلي بلاءً حسناً في امتحاناتك. النجاح يتطلب الانضباط والوقت. أحتفظ بكتبي على مكتب نظيف.`,
    question: {
      question: "What does success in exams require according to the story?",
      options: [
        "Discipline, time, and studying every evening",
        "Relying only on luck during the test",
        "Staying up all night on exam day",
        "Keeping books hidden away"
      ],
      answerIndex: 0,
      explanation: "المذاكرة والدراسة (study) كل مساء بانضباط ووقت كافٍ تضمن التفوق في الامتحانات."
    }
  }),

  // 325. learn
  learn: (w) => ({
    word: w,
    title: "Learning New Skills",
    titleArabic: "تعلم مهارات جديدة",
    storyEnglish: `It is never too late to learn a new skill like painting or music. You just need passion and a little bit of practice. Each day brings a new lesson.`,
    storyArabic: `لم يفت الأوان أبداً لتعلم مهارة جديدة مثل الرسم أو الموسيقى. تحتاج فقط إلى الشغف وقليل من الممارسة. كل يوم يجلب درساً جديداً.`,
    question: {
      question: "What do you need to learn a new skill like painting or music?",
      options: [
        "Passion and a little bit of practice each day",
        "An expensive university degree",
        "Special talent from childhood",
        "A private studio"
      ],
      answerIndex: 0,
      explanation: "تعلم (learn) مهارة جديدة يحتاج فقط إلى الشغف والممارسة اليومية."
    }
  }),

  // 326. work
  work: (w) => ({
    word: w,
    title: "Daily Tasks",
    titleArabic: "المهام اليومية",
    storyEnglish: `Many people start their work early in the morning every day. They drink coffee and prepare for their daily tasks. Staying focused helps them finish everything before the evening.`,
    storyArabic: `يبدأ الكثير من الناس عملهم مبكراً في الصباح كل يوم. يشربون القهوة ويستعدون لمهامهم اليومية. البقاء مركزاً يساعدهم على إنهاء كل شيء قبل المساء.`,
    question: {
      question: "How do many people start their work and manage their daily tasks?",
      options: [
        "By starting early, drinking coffee, preparing tasks, and staying focused until evening",
        "By staying awake all night without resting",
        "By traveling to distant cities without preparation",
        "By postponing tasks until the weekend"
      ],
      answerIndex: 0,
      explanation: "يبدأ الناس عملهم (work) في الصباح بالقهوة والتركيز لإنجاز جميع المهام اليومية قبل المساء."
    }
  }),

  // 327. live
  live: (w) => ({
    word: w,
    title: "Living Everywhere",
    titleArabic: "العيش في كل مكان",
    storyEnglish: `People live in many different types of houses all over the world. Some are big and some are small, but everyone needs a comfortable home. Safety is very important.`,
    storyArabic: `يعيش الناس في أنواع مختلفة من المنازل في جميع أنحاء العالم. بعضها كبير وبعضها صغير، لكن الجميع يحتاج لمنزل مريح. السلامة مهمة جداً.`,
    question: {
      question: "What does everyone need regardless of house size?",
      options: [
        "A comfortable home where safety is very important",
        "A swimming pool in the garden",
        "A multi-story building",
        "A garage for multiple cars"
      ],
      answerIndex: 0,
      explanation: "يحتاج كل شخص لمنزل مريح وآمن للعيش (live) فيه بغض النظر عن حجمه."
    }
  }),

  // 328. like
  like: (w) => ({
    word: w,
    title: "Liking the Beach",
    titleArabic: "حب الشاطئ",
    storyEnglish: `I like to spend my time at the beach during the summer. The sound of the waves is very relaxing and soothing. It is my happy place.`,
    storyArabic: `أحب أن أقضي وقتي على الشاطئ خلال الصيف. صوت الأمواج مريح ومهدئ جداً. إنه مكاني السعيد.`,
    question: {
      question: "Why does the narrator like spending time at the beach?",
      options: [
        "Because the soothing sound of waves makes it a relaxing happy place",
        "Because fishing boats dock there every morning",
        "To collect sea glass for art projects",
        "Because the water is always freezing cold"
      ],
      answerIndex: 0,
      explanation: "يحب (like) الكاتب قضاء الوقت على الشاطئ في الصيف لصوت الأمواج المريح والمهدئ."
    }
  }),

  // 329. love
  love: (w) => ({
    word: w,
    title: "Love for Pets",
    titleArabic: "حب الحيوانات الأليفة",
    storyEnglish: `My cat likes to sit on my lap because it knows that I love it very much. Animals feel our kindness and affection. It is a wonderful feeling.`,
    storyArabic: `قطتي تحب الجلوس في حجري لأنها تعرف أنني أحبها كثيراً. الحيوانات تشعر بطيبتنا ومودتنا. إنه شعور رائع.`,
    question: {
      question: "Why does the cat like to sit on the narrator's lap?",
      options: [
        "Because it knows that the narrator loves it and feels kindness and affection",
        "Because it wants to sleep outdoors",
        "Because it is afraid of loud music",
        "Because it is waiting for a veterinarian"
      ],
      answerIndex: 0,
      explanation: "تشعر القطة بالمودة والحب (love) والطيبة فتجلس في حجر صاحبها باطمئنان."
    }
  }),

  // 330. want
  want: (w) => ({
    word: w,
    title: "Wanting to Travel",
    titleArabic: "الرغبة في السفر",
    storyEnglish: `I want to travel to a foreign country next year. Exploring new cultures and trying different food is a dream of mine. I am saving money for this trip.`,
    storyArabic: `أريد أن أسافر إلى بلد أجنبي العام المقبل. استكشاف ثقافات جديدة وتجربة طعام مختلف حلم من أحلامي. أنا أدخر المال لهذه الرحلة.`,
    question: {
      question: "What is the narrator saving money for?",
      options: [
        "To travel to a foreign country, explore new cultures, and try different food",
        "To buy a new car next week",
        "To open a local restaurant",
        "To purchase luxury clothing"
      ],
      answerIndex: 0,
      explanation: "يدخر الكاتب المال لأنه يريد (want) السفر واستكشاف ثقافات جديدة وتجربة أطعمة متنوعة."
    }
  }),

  // 331. need
  need: (w) => ({
    word: w,
    title: "Needing Help",
    titleArabic: "الحاجة للمساعدة",
    storyEnglish: `Do you need any help with your heavy boxes? I can carry some of them for you if you wish. Let us move them together.`,
    storyArabic: `هل تحتاج لأي مساعدة في صناديقك الثقيلة؟ يمكنني حمل بعضها لك إذا كنت ترغب. دعنا ننقلها معاً.`,
    question: {
      question: "What does the speaker offer to do for the person with heavy boxes?",
      options: [
        "Carry some of the heavy boxes and move them together",
        "Sell the boxes at a flea market",
        "Leave the boxes outside the building",
        "Call a delivery truck"
      ],
      answerIndex: 0,
      explanation: "يسأل المتحدث بلطف إن كان الشخص بحاجة (need) للمساعدة في حمل الصناديق الثقيلة ونقلها معاً."
    }
  }),

  // 332. buy
  buy: (w) => ({
    word: w,
    title: "Buying Groceries",
    titleArabic: "شراء البقالة",
    storyEnglish: `I went to the store to buy some fresh milk and sugar. The cashier was very polite and gave me a receipt. I walked back home quickly.`,
    storyArabic: `ذهبت إلى المتجر لأشتري بعض الحليب الطازج والسكر. كان المحاسب مؤدباً جداً وأعطاني إيصالاً. عدت للمنزل بسرعة.`,
    question: {
      question: "What did the narrator go to the store to buy?",
      options: [
        "Some fresh milk and sugar",
        "New books and stationery",
        "Kitchen utensils and pans",
        "Winter clothing and shoes"
      ],
      answerIndex: 0,
      explanation: "ذهب الكاتب إلى المتجر ليشتري (buy) الحليب الطازج والسكر واستلم الإيصال."
    }
  }),

  // 333. sell
  sell: (w) => ({
    word: w,
    title: "Selling Old Items",
    titleArabic: "بيع الأغراض القديمة",
    storyEnglish: `The shop owner decides to sell his old items at a low price. People come from everywhere to check the special deals. It is a busy afternoon.`,
    storyArabic: `قرر صاحب المتجر أن يبيع أغراضه القديمة بسعر منخفض. يأتي الناس من كل مكان لتفقد العروض الخاصة. إنها ظهيرة مزدحمة.`,
    question: {
      question: "Why do people come from everywhere to the shop?",
      options: [
        "To check the special deals as old items are sold at a low price",
        "To attend an art exhibition",
        "To apply for a vacant job",
        "To repair their broken appliances"
      ],
      answerIndex: 0,
      explanation: "قرر صاحب المتجر بيع (sell) الأغراض القديمة بأسعار مخفضة مما جذب الكثير من الزبائن."
    }
  }),

  // 334. pay
  pay: (w) => ({
    word: w,
    title: "Pay the Bill",
    titleArabic: "Pay the Bill",
    storyEnglish: `After having dinner at the restaurant, Omar asked the waiter for the bill because he was ready to pay. He checked the amount carefully and noticed that one item had been added by mistake. The waiter apologized, corrected the bill, and thanked Omar for noticing the problem. After paying the correct amount, Omar left the restaurant satisfied with the service.`,
    storyArabic: `بعد تناول العشاء في المطعم، طلب عمر الفاتورة من النادل لأنه كان مستعدًا للدفع. فحص المبلغ بعناية ولاحظ أن أحد الأصناف أُضيف بالخطأ. اعتذر النادل وصحح الفاتورة وشكر عمر على ملاحظته للمشكلة. وبعد دفع المبلغ الصحيح، غادر عمر المطعم وهو راضٍ عن الخدمة.`,
    question: {
      question: "What is the main theme of this story?",
      options: [
        "A practical situation illustrating the word clearly",
        "An unrelated fictional adventure",
        "A scientific formula without context",
        "A historical debate between kings"
      ],
      answerIndex: 0,
      explanation: "توضح القصة الموقف وسياق الكلمة بشكل واضح ومباشر."
    }
  }),

  // 335. cost
  cost: (w) => ({
    word: w,
    title: "Ticket Cost",
    titleArabic: "تكلفة التذاكر",
    storyEnglish: `The tickets for the concert cost quite a lot of money this year. However, the experience will be worth it for all the fans. It will be a memorable night.`,
    storyArabic: `تكلف تذاكر الحفل الكثير من المال هذا العام. ومع ذلك، ستكون التجربة جديرة بذلك لكل المعجبين. ستكون ليلة لا تُنسى.`,
    question: {
      question: "Why is the high ticket cost considered worth it by fans?",
      options: [
        "Because the concert experience will be memorable and worth it for all fans",
        "Because free meals are provided at the concert",
        "Because tickets can be refunded anytime",
        "Because the concert is held in a stadium"
      ],
      answerIndex: 0,
      explanation: "رغم أن تذاكر الحفل تكلف (cost) الكثير، إلا أن التجربة تستحق وستكون ليلة مميزة لا تُنسى."
    }
  }),

  // 336. cook
  cook: (w) => ({
    word: w,
    title: "Cooking Tradition",
    titleArabic: "تقليد الطبخ",
    storyEnglish: `Every Friday, my father will cook a traditional meal for the family. The kitchen smells amazing, and we all gather around the table. It is our favorite tradition.`,
    storyArabic: `كل يوم جمعة، يطبخ والدي وجبة تقليدية للعائلة. رائحة المطبخ مذهلة، ونتجمع جميعاً حول الطاولة. إنه تقليدنا المفضل.`,
    question: {
      question: "What happens every Friday in the family?",
      options: [
        "The father cooks a traditional meal and the family gathers around the table",
        "The family orders fast food delivery",
        "They go on a camping trip in the mountains",
        "They dine at an expensive restaurant"
      ],
      answerIndex: 0,
      explanation: "يقوم الوالد بطهي وطبخ (cook) وجبة تقليدية كل جمعة وتجتمع العائلة حول المائدة."
    }
  }),

  // 337. wash
  wash: (w) => ({
    word: w,
    title: "Washing the Car",
    titleArabic: "غسل السيارة",
    storyEnglish: `I wash my car every weekend to keep it shiny and clean. It is a simple job, but it makes the car look brand new. I enjoy doing it in the sun.`,
    storyArabic: `أغسل سيارتي كل عطلة نهاية أسبوع لأبقيها لامعة ونظيفة. إنها مهمة بسيطة، لكنها تجعل السيارة تبدو كأنها جديدة تماماً. أستمتع بفعل ذلك تحت الشمس.`,
    question: {
      question: "Why does the narrator wash the car every weekend?",
      options: [
        "To keep it shiny, clean, and looking brand new while enjoying the sun",
        "To prepare it for an auto racing contest",
        "Because the car mechanic asked for it",
        "To sell it to a neighbor"
      ],
      answerIndex: 0,
      explanation: "يحرص الكاتب على غسل (wash) سيارته كل عطلة أسبوع لتبدو جديدة ولامعة."
    }
  }),

  // 338. call
  call: (w) => ({
    word: w,
    title: "Calling the Boss",
    titleArabic: "الاتصال بالمدير",
    storyEnglish: `I have to call my boss to tell him I will be late. There is too much traffic on the highway today. I hope he understands the situation.`,
    storyArabic: `يجب أن أتصل بمديري لأخبره أنني سأتأخر. هناك الكثير من الازدحام المروري على الطريق السريع اليوم. آمل أن يتفهم الموقف.`,
    question: {
      question: "Why does the employee need to call the boss?",
      options: [
        "To inform him about being late due to heavy traffic on the highway",
        "To ask for an immediate promotion",
        "To invite him to a family lunch",
        "To submit resignation papers"
      ],
      answerIndex: 0,
      explanation: "يتوجب على الموظف الاتصال (call) بمديره لإبلاغه بالتأخر بسبب الازدحام المروري."
    }
  }),

  // 339. wait
  wait: (w) => ({
    word: w,
    title: "Waiting in Line",
    titleArabic: "الانتظار في الطابور",
    storyEnglish: `We have to wait in line until the store opens. There is a big sale today, and many people are interested. The weather is cool outside.`,
    storyArabic: `يجب أن ننتظر في الطابور حتى يفتح المتجر. هناك تخفيضات كبيرة اليوم، والكثير من الناس مهتمون. الطقس بارد في الخارج.`,
    question: {
      question: "Why are people waiting in line outside the store?",
      options: [
        "Because there is a big sale today and they are waiting for the store to open",
        "To buy bus tickets for a long trip",
        "Because the building alarm went off",
        "To return damaged products"
      ],
      answerIndex: 0,
      explanation: "يجب الانتظار (wait) في الطابور حتى يفتح المتجر للاستفادة من التخفيضات الكبيرة."
    }
  }),

  // 340. think
  think: (w) => ({
    word: w,
    title: "Thinking about Learning",
    titleArabic: "التفكير في التعلم",
    storyEnglish: `I think that learning English is a great way to meet new people. It opens doors to many opportunities in the future. I practice every day.`,
    storyArabic: `أعتقد أن تعلم الإنجليزية طريقة رائعة لمقابلة أشخاص جدد. إنها تفتح الأبواب أمام الكثير من الفرص في المستقبل. أنا أتدرب كل يوم.`,
    question: {
      question: "Why does the speaker think learning English is beneficial?",
      options: [
        "It is a great way to meet new people and opens doors to future opportunities",
        "It is required to buy a computer",
        "It makes traveling by train faster",
        "It replaces the need to study other subjects"
      ],
      answerIndex: 0,
      explanation: "يرى ويعتقد (think) المتحدث أن تعلم الإنجليزية يفتح أبواب الفرص والتعرف على أصدقاء جدد."
    }
  }),

  // 341. know
  know: (w) => ({
    word: w,
    title: "Knowing the Location",
    titleArabic: "معرفة الموقع",
    storyEnglish: `Do you know where the nearest library is located? I want to borrow some books for my school project. I am new in this neighborhood.`,
    storyArabic: `هل تعرف أين تقع أقرب مكتبة؟ أريد استعارة بعض الكتب لمشروعي المدرسي. أنا جديد في هذا الحي.`,
    question: {
      question: "Why is the person asking if anyone knows the nearest library's location?",
      options: [
        "To borrow books for a school project because they are new in the neighborhood",
        "To return an overdue library card",
        "To apply for a librarian job",
        "To meet friends for a movie night"
      ],
      answerIndex: 0,
      explanation: "يسأل إن كان أحد يعرف (know) موقع المكتبة لاستعارة كتب لمشروعه المدرسي كونه جديداً في الحي."
    }
  }),

  // 342. understand
  understand: (w) => ({
    word: w,
    title: "Understanding Software",
    titleArabic: "فهم البرمجيات",
    storyEnglish: `I finally understand how to use the computer software for my work. It was a bit difficult at first, but practice makes it easy. I am very proud of myself.`,
    storyArabic: `أخيراً أفهم كيفية استخدام برامج الكمبيوتر لعملي. كان الأمر صعباً قليلاً في البداية، لكن الممارسة تجعل الأمر سهلاً. أنا فخور جداً بنفسي.`,
    question: {
      question: "What helped the speaker finally understand the computer software?",
      options: [
        "Continuous practice that made it easy despite initial difficulty",
        "Buying a brand new computer",
        "Hiring an assistant to do the work",
        "Deleting all difficult files"
      ],
      answerIndex: 0,
      explanation: "استطاع الكاتب فهم (understand) برمجيات العمل بعد الممارسة والتطبيق المستمر."
    }
  }),

  // 343. good
  good: (w) => ({
    word: w,
    title: "Good Grades",
    titleArabic: "الدرجات الجيدة",
    storyEnglish: `Good grades make students feel very proud of their hard work. You should study every day to learn many new things. Success is always waiting for you.`,
    storyArabic: `الدرجات الجيدة تجعل الطلاب يشعرون بالفخر جداً بعملهم الجاد. يجب أن تدرس كل يوم لتتعلم أشياء جديدة كثيرة. النجاح ينتظرك دائماً.`,
    question: {
      question: "How do good grades make students feel?",
      options: [
        "Very proud of their hard work and motivated for continuous success",
        "Relieved that they never need to study again",
        "Worried about the next semester",
        "Indifferent about their school achievements"
      ],
      answerIndex: 0,
      explanation: "الدرجات والنتائج الجيدة (good) تجعل الطلاب فخورين بجهدهم وتدفعهم للنجاح المستمر."
    }
  }),

  // 344. bad
  bad: (w) => ({
    word: w,
    title: "Bad Weather",
    titleArabic: "الطقس السيئ",
    storyEnglish: `The weather today is very bad because of the heavy rain and wind. People should stay inside their houses until the storm stops. It is safer to be home.`,
    storyArabic: `الطقس اليوم سيء جداً بسبب الأمطار الغزيرة والرياح. يجب على الناس البقاء داخل منازلهم حتى تتوقف العاصفة. من الآمن أن تكون في المنزل.`,
    question: {
      question: "Why should people stay inside their houses today?",
      options: [
        "Because the weather is very bad with heavy rain and wind until the storm stops",
        "Because all outdoor electricity is disconnected",
        "To watch a sports match on television",
        "To clean and paint their living rooms"
      ],
      answerIndex: 0,
      explanation: "الطقس سيء (bad) جداً بسبب الرياح والأمطار الغزيرة ومن الأفضل البقاء في المنزل بأمان."
    }
  }),

  // 345. big
  big: (w) => ({
    word: w,
    title: "Big House",
    titleArabic: "منزل كبير",
    storyEnglish: `I want to live in a big house with a large garden for my dog. It would be nice to have space for many beautiful flowers. A spacious home is very comfortable.`,
    storyArabic: `أريد أن أعيش في منزل كبير مع حديقة واسعة لكلبي. سيكون من اللطيف أن يكون لدي مساحة للكثير من الزهور الجميلة. المنزل الفسيح مريح جداً.`,
    question: {
      question: "Why does the narrator want to live in a big house?",
      options: [
        "To have a large garden for the dog, space for flowers, and a comfortable home",
        "To host international sports tournaments",
        "To open a public botanical store",
        "Because small houses are banned in the city"
      ],
      answerIndex: 0,
      explanation: "يرغب الكاتب بالعيش في منزل كبير (big) بمساحة واسعة لحديقة وزهور ومنزل مريح."
    }
  }),

  // 346. small
  small: (w) => ({
    word: w,
    title: "Small Bird",
    titleArabic: "طائر صغير",
    storyEnglish: `My brother has a small bird that sings very beautiful songs. He keeps it in a cage near the sunny window every morning. The bird is very cute and happy.`,
    storyArabic: `أخي لديه طائر صغير يغني أغاني جميلة جداً. يحتفظ به في قفص قرب النافذة المشمسة كل صباح. الطائر لطيف جداً وسعيد.`,
    question: {
      question: "Where does the brother keep the small singing bird each morning?",
      options: [
        "In a cage near the sunny window where it feels cute and happy",
        "In a dark room in the basement",
        "In a tree high up in the mountains",
        "Inside the kitchen cupboard"
      ],
      answerIndex: 0,
      explanation: "يحتفظ الأخ بطائر صغير (small) يغرد بألحان جميلة قرب النافذة المشمسة."
    }
  }),

  // 347. sad
  sad: (w) => ({
    word: w,
    title: "Sad Boy",
    titleArabic: "الولد الحزين",
    storyEnglish: `The little boy felt sad because he lost his favorite toy in the street. He looked for it everywhere but could not find it. I hope he finds it tomorrow.`,
    storyArabic: `شعر الولد الصغير بالحزن لأنه فقد لعبته المفضلة في الشارع. بحث عنها في كل مكان لكنه لم يستطع إيجادها. آمل أن يجدها غداً.`,
    question: {
      question: "Why did the little boy feel sad?",
      options: [
        "Because he lost his favorite toy in the street and could not find it",
        "Because his birthday party was canceled",
        "Because he received too much homework",
        "Because it was raining during recess"
      ],
      answerIndex: 0,
      explanation: "شعر الولد الصغير بأنه حزين (sad) بسبب فقدانه لعبته المفضلة في الشارع."
    }
  }),

  // 348. hot
  hot: (w) => ({
    word: w,
    title: "Hot Weather",
    titleArabic: "الطقس الحار",
    storyEnglish: `When it is very hot outside, we go to the beach to swim. The cool water is very refreshing and helps us relax. Summer days are perfect for this activity.`,
    storyArabic: `عندما يكون الجو حاراً جداً في الخارج، نذهب إلى الشاطئ لنسبح. الماء البارد منعش جداً ويساعدنا على الاسترخاء. أيام الصيف مثالية لهذا النشاط.`,
    question: {
      question: "What do they do when it is very hot outside in summer?",
      options: [
        "Go to the beach to swim in the refreshing cool water and relax",
        "Stay near a burning campfire",
        "Wear heavy winter wool coats",
        "Hike across the desert at noon"
      ],
      answerIndex: 0,
      explanation: "عندما يكون الجو حاراً (hot) في الصيف، فإن الذهاب للشاطئ والسباحة في الماء البارد منعش ومريح."
    }
  }),

  // 349. cold
  cold: (w) => ({
    word: w,
    title: "Cold Water",
    titleArabic: "ماء بارد",
    storyEnglish: `I like to drink cold water after I finish my morning exercises. It makes me feel fresh and ready for my busy work day. Drinking water is very healthy.`,
    storyArabic: `أحب شرب الماء البارد بعد أن أنهي تمارين الصباح. يجعلني أشعر بالانتعاش والاستعداد ليوم عملي المزدحم. شرب الماء صحي جداً.`,
    question: {
      question: "Why does the narrator like to drink cold water after morning exercise?",
      options: [
        "It makes them feel fresh, ready for a busy workday, and is very healthy",
        "To warm up their muscles before sleep",
        "Because hot tea is not permitted in the house",
        "To quickly cool down their breakfast meal"
      ],
      answerIndex: 0,
      explanation: "شرب الماء البارد (cold) بعد التمارين الصباحية يمنح الانتعاش والاستعداد ليوم العمل."
    }
  }),

  // 350. new
  new: (w) => ({
    word: w,
    title: "New Car",
    titleArabic: "سيارة جديدة",
    storyEnglish: `We bought a new car last week for our family trips. It is very fast and has a lot of space for everyone. We plan to travel this weekend.`,
    storyArabic: `اشترينا سيارة جديدة الأسبوع الماضي لرحلات عائلتنا. إنها سريعة جداً ولديها مساحة كبيرة للجميع. نخطط للسفر في عطلة نهاية الأسبوع.`,
    question: {
      question: "Why did the family buy a new car last week?",
      options: [
        "For family trips, as it is fast, spacious for everyone, and ready for weekend travel",
        "To enter an off-road racing contest",
        "To store old boxes in the driveway",
        "Because their garage was completely empty"
      ],
      answerIndex: 0,
      explanation: "تم شراء سيارة جديدة (new) وسريعة وواسعة لرحلات وسفر العائلة في عطلة نهاية الأسبوع."
    }
  }),

  // 351. old
  old: (w) => ({
    word: w,
    title: "Old Man",
    titleArabic: "رجل عجوز",
    storyEnglish: `The old man sits on the bench and feeds the birds every morning. He likes to watch the city change while he reads his newspaper quietly. He is a very kind person.`,
    storyArabic: `يجلس الرجل العجوز على المقعد ويطعم الطيور كل صباح. يحب أن يراقب تغير المدينة بينما يقرأ جريدته بهدوء. إنه شخص طيب جداً.`,
    question: {
      question: "What does the kind old man do on the bench every morning?",
      options: [
        "Feeds the birds, watches the city change, and quietly reads his newspaper",
        "Directs traffic at the busy crosswalk",
        "Sells morning snacks to passersby",
        "Exercises with heavy weights"
      ],
      answerIndex: 0,
      explanation: "يجلس الرجل العجوز (old) على المقعد كل صباح ليطعم الطيور ويقرأ جريدته بلطف وهدوء."
    }
  }),

  // 352. young
  young: (w) => ({
    word: w,
    title: "Young People",
    titleArabic: "الشباب",
    storyEnglish: `All young people should learn how to help others in their community. Helping makes the world a better place for everyone to live in. It is a very noble task.`,
    storyArabic: `يجب على كل الشباب أن يتعلموا كيفية مساعدة الآخرين في مجتمعهم. المساعدة تجعل العالم مكاناً أفضل للجميع للعيش فيه. إنها مهمة نبيلة جداً.`,
    question: {
      question: "What should young people learn to do according to the story?",
      options: [
        "Learn how to help others in their community to make the world a better place",
        "Travel abroad and never return",
        "Focus only on individual video games",
        "Avoid community activities"
      ],
      answerIndex: 0,
      explanation: "يجب على فئة الشباب (young) تعلم مساعدة مجتمعهم لجعل العالم مكاناً أفضل وأرقى."
    }
  }),

  // 353. fast
  fast: (w) => ({
    word: w,
    title: "Fast Cheetah",
    titleArabic: "الفهد السريع",
    storyEnglish: `The cheetah is a very fast animal that lives in the wild. It can run faster than any other creature on the dry plains. Nature is truly amazing.`,
    storyArabic: `الفهد حيوان سريع جداً يعيش في البرية. يمكنه الركض أسرع من أي مخلوق آخر في السهول الجافة. الطبيعة مذهلة حقاً.`,
    question: {
      question: "What makes the cheetah a remarkable wild animal?",
      options: [
        "It is very fast and can run faster than any other creature on the dry plains",
        "It can swim across wide oceans",
        "It can fly high above the mountains",
        "It hibernates all winter long"
      ],
      answerIndex: 0,
      explanation: "الفهد حيوان سريع (fast) جداً في البرية ويركض أسرع من سائر المخلوقات في السهول."
    }
  }),

  // 354. slow
  slow: (w) => ({
    word: w,
    title: "Slow Turtle",
    titleArabic: "السلحفاة البطيئة",
    storyEnglish: `The turtle is very slow but it reaches the finish line in the end. Patience is a great lesson we can learn from it. Sometimes taking your time is the best way.`,
    storyArabic: `السلحفاة بطيئة جداً لكنها تصل لخط النهاية في النهاية. الصبر درس رائع يمكننا تعلمه منها. أحياناً التأني هو أفضل طريقة.`,
    question: {
      question: "What lesson can we learn from the slow turtle?",
      options: [
        "Patience and taking your time to successfully reach the finish line in the end",
        "Speed is the only thing that matters in life",
        "Quitting early saves your energy",
        "Avoiding races is always best"
      ],
      answerIndex: 0,
      explanation: "رغم أن السلحفاة بطيئة (slow)، إلا أن الصبر والتأني يوصلان لخط النهاية بنجاح."
    }
  }),

  // 355. beautiful
  beautiful: (w) => ({
    word: w,
    title: "Beautiful Sunrise",
    titleArabic: "شروق جميل",
    storyEnglish: `Look at the beautiful sunrise over the mountains this morning. The colors are bright and fill the sky with wonder. It is a perfect start for the day.`,
    storyArabic: `انظر إلى شروق الشمس الجميل فوق الجبال هذا الصباح. الألوان زاهية وتملأ السماء بالروعة. إنها بداية مثالية لليوم.`,
    question: {
      question: "What makes the mountain sunrise a perfect start for the day?",
      options: [
        "The beautiful bright colors that fill the morning sky with wonder",
        "A loud thunderstorm rolling in",
        "Heavy dark clouds blocking all sunlight",
        "An unexpected nightfall"
      ],
      answerIndex: 0,
      explanation: "شروق الشمس الجميل (beautiful) بألوانه الزاهية فوق الجبال يشكل بداية مثالية لليوم."
    }
  }),

  // 356. ugly
  ugly: (w) => ({
    word: w,
    title: "Ugly Abandoned House",
    titleArabic: "المنزل المهجور القبيح",
    storyEnglish: `The abandoned house looks ugly because it is full of dust and broken wood. No one has lived there for many years. It needs a lot of work to look nice again.`,
    storyArabic: `يبدو المنزل المهجور قبيحاً لأنه مليء بالغبار والخشب المكسور. لم يعش أحد هناك منذ سنوات عديدة. يحتاج للكثير من العمل ليبدو جميلاً مرة أخرى.`,
    question: {
      question: "Why does the abandoned house look ugly?",
      options: [
        "Because it is full of dust and broken wood after being uninhabited for many years",
        "Because it was recently painted bright neon pink",
        "Because modern skyscrapers surround it",
        "Because a colorful flower garden was planted in front"
      ],
      answerIndex: 0,
      explanation: "يبدو المنزل قبيحاً (ugly) وغير مرتب لكونه مهجوراً ومليئاً بالأتربة والأخشاب المكسورة."
    }
  }),

  // 357. easy
  easy: (w) => ({
    word: w,
    title: "Easy Math",
    titleArabic: "رياضيات سهلة",
    storyEnglish: `This math problem is very easy for me to solve. I learned how to do it in class yesterday. Practice makes everything simple.`,
    storyArabic: `مسألة الرياضيات هذه سهلة جداً بالنسبة لي لحلها. تعلمت كيف أفعل ذلك في الفصل بالأمس. الممارسة تجعل كل شيء بسيطاً.`,
    question: {
      question: "Why was the math problem easy for the student to solve?",
      options: [
        "Because they learned how to do it in class yesterday and practice makes it simple",
        "Because they used an online calculator without looking",
        "Because the teacher gave the answer away beforehand",
        "Because the problem was left blank"
      ],
      answerIndex: 0,
      explanation: "المسألة الرياضية سهلة (easy) لأن الطالب فهمها في الفصل ومارس حلها مسبقاً."
    }
  }),

  // 358. difficult
  difficult: (w) => ({
    word: w,
    title: "Difficult Language",
    titleArabic: "لغة صعبة",
    storyEnglish: `Learning a new language can be difficult at the beginning. However, you will understand it better if you study and practice every day. Never give up on your goals.`,
    storyArabic: `تعلم لغة جديدة يمكن أن يكون صعباً في البداية. ومع ذلك، ستفهمها بشكل أفضل إذا درست وتدربت كل يوم. لا تتخلَّ أبداً عن أهدافك.`,
    question: {
      question: "How can someone overcome a difficult language at the beginning?",
      options: [
        "By studying, practicing every day, and never giving up on their goals",
        "By stopping studying after the first week",
        "By only speaking their native tongue",
        "By avoiding reading books"
      ],
      answerIndex: 0,
      explanation: "رغم أن تعلم اللغة قد يبدو صعباً (difficult) بالبداية، فإن الممارسة اليومية تذلل الصعاب."
    }
  }),

  // 359. hard
  hard: (w) => ({
    word: w,
    title: "Hard Rock",
    titleArabic: "صخرة صلبة",
    storyEnglish: `The rock is very hard and it is difficult to break it. Miners work all day to cut through the mountain. It is a very tiring and serious job.`,
    storyArabic: `الصخرة صلبة جداً ومن الصعب كسرها. يعمل عمال المناجم طوال اليوم ليقطعوا من خلال الجبل. إنها وظيفة متعبة وجادة جداً.`,
    question: {
      question: "Why do miners work all day to cut through the mountain?",
      options: [
        "Because the rock is very hard and difficult to break in this tiring job",
        "Because soft sand collapses easily",
        "To build a water park inside",
        "To find light plastic materials"
      ],
      answerIndex: 0,
      explanation: "الصخور صلبة وقاسية (hard) جداً ويحتاج عمال المناجم لجهد كبير لقطعها وشق الجبل."
    }
  }),

  // 360. soft
  soft: (w) => ({
    word: w,
    title: "Soft Pillow",
    titleArabic: "وسادة ناعمة",
    storyEnglish: `The pillow is very soft and comfortable for a good night's sleep. I like to rest my head on it after a long day. It feels like a cloud.`,
    storyArabic: `الوسادة ناعمة جداً ومريحة لنوم هانئ ليلاً. أحب أن أريح رأسي عليها بعد يوم طويل. تبدو مثل السحابة.`,
    question: {
      question: "Why does the narrator like resting their head on the pillow?",
      options: [
        "Because it is very soft, comfortable like a cloud, and ensures good sleep",
        "Because it is packed with firm wood chips",
        "Because it plays loud morning alarms",
        "Because it stays cold as ice"
      ],
      answerIndex: 0,
      explanation: "الوسادة ناعمة (soft) ومريحة كالسحابة وتمنح نوماً هادئاً بعد يوم عمل طويل."
    }
  }),

  // 361. tall
  tall: (w) => ({
    word: w,
    title: "Tall Tree",
    titleArabic: "شجرة طويلة",
    storyEnglish: `The tall tree in our garden provides a lot of shade in the summer. We sit under it to enjoy the cool air. It has been there for many years.`,
    storyArabic: `الشجرة الطويلة في حديقتنا توفر الكثير من الظل في الصيف. نجلس تحتها لنستمتع بالهواء البارد. لقد كانت هناك لسنوات عديدة.`,
    question: {
      question: "Why do they sit under the tall tree in the garden during summer?",
      options: [
        "To enjoy the cool air and shade provided by the tall, mature tree",
        "To hide from garden pets",
        "To protect the tree branches from falling",
        "Because indoor air conditioning is too cold"
      ],
      answerIndex: 0,
      explanation: "توفر الشجرة الطويلة (tall) في الحديقة ظلاً وفيراً ونسيماً عليلاً في الصيف."
    }
  }),

  // 362. short
  short: (w) => ({
    word: w,
    title: "Short Story",
    titleArabic: "قصة قصيرة",
    storyEnglish: `The story is very short and you can finish reading it in ten minutes. It is a great book for children before they go to bed. I like its simple message.`,
    storyArabic: `القصة قصيرة جداً ويمكنك إنهاء قراءتها في عشر دقائق. إنه كتاب رائع للأطفال قبل ذهابهم للنوم. أحب رسالتها البسيطة.`,
    question: {
      question: "Why is the book great for children before going to bed?",
      options: [
        "Because the story is very short, finishes in ten minutes, and has a simple message",
        "Because it contains hundreds of complex equations",
        "Because it requires hours of translation",
        "Because it has no illustrations or moral message"
      ],
      answerIndex: 0,
      explanation: "القصة قصيرة (short) ويمكن قراءتها في 10 دقائق وتناسب الأطفال قبل النوم برسالتها الهادفة."
    }
  }),

  // 363. long
  long: (w) => ({
    word: w,
    title: "Long Journey",
    titleArabic: "رحلة طويلة",
    storyEnglish: `We went on a long journey across the country by train last summer. We saw many amazing cities and beautiful landscapes. It was an unforgettable trip.`,
    storyArabic: `ذهبنا في رحلة طويلة عبر البلاد بالقطار الصيف الماضي. رأينا مدناً مذهلة ومناظر طبيعية جميلة. كانت رحلة لا تُنسى.`,
    question: {
      question: "What did they experience during their long train journey across the country?",
      options: [
        "They saw many amazing cities, beautiful landscapes, and had an unforgettable trip",
        "They remained stuck in a dark tunnel all day",
        "They lost their luggage at the first station",
        "They had to walk alongside the railway tracks"
      ],
      answerIndex: 0,
      explanation: "كانت الرحلة بالقطار طويلة (long) وممتعة عبر البلاد وشاهدوا خلالها مناظر طبيعية ومدناً خلابة."
    }
  }),

  // 364. rich
  rich: (w) => ({
    word: w,
    title: "Rich Man",
    titleArabic: "رجل غني",
    storyEnglish: `The rich man decided to give money to build a new school for children. He wants to help everyone learn and have a better future. Kindness is true wealth.`,
    storyArabic: `قرر الرجل الغني إعطاء المال لبناء مدرسة جديدة للأطفال. يريد مساعدة الجميع على التعلم والحصول على مستقبل أفضل. اللطف هو الثراء الحقيقي.`,
    question: {
      question: "What did the rich man decide to do with his money?",
      options: [
        "Give money to build a new school so children can learn and have a better future",
        "Buy an exclusive private island",
        "Close down local community libraries",
        "Keep all funds locked in a safe"
      ],
      answerIndex: 0,
      explanation: "قرر الرجل الغني (rich) التبرع لبناء مدرسة جديدة لتعليم الأطفال إيماناً بأن العطاء ثراء حقيقي."
    }
  }),

  // 365. poor
  poor: (w) => ({
    word: w,
    title: "Poor People",
    titleArabic: "الفقراء",
    storyEnglish: `Sometimes, poor people work very hard to support their families. They are strong and honest in everything they do. They deserve our respect and support.`,
    storyArabic: `أحياناً، يعمل الفقراء بجد كبير لإعالة عائلاتهم. هم أقوياء وصادقون في كل ما يفعلونه. يستحقون احترامنا ودعمنا.`,
    question: {
      question: "Why do poor working families deserve our respect and support?",
      options: [
        "Because they work hard, are strong, honest, and do everything to support their families",
        "Because they refuse community assistance",
        "Because they avoid hard labor",
        "Because they never communicate with others"
      ],
      answerIndex: 0,
      explanation: "يستحق الفقراء (poor) الاحترام والدعم لعملهم الدؤوب وصدقهم وقوتهم في إعالة أسرهم."
    }
  }),

  // 366. dry
  dry: (w) => ({
    word: w,
    title: "Dry Desert",
    titleArabic: "صحراء جافة",
    storyEnglish: `The desert ground is very dry because it does not rain very often. Plants there need very little water to survive. It is a very different environment.`,
    storyArabic: `أرض الصحراء جافة جداً لأنها لا تمطر كثيراً. تحتاج النباتات هناك إلى القليل جداً من الماء للبقاء. إنها بيئة مختلفة جداً.`,
    question: {
      question: "Why is the desert ground very dry?",
      options: [
        "Because it does not rain very often and plants adapt to survive with little water",
        "Because underground rivers flooded the soil",
        "Because snow blankets the dunes all year",
        "Because seawater covers the sand dunes"
      ],
      answerIndex: 0,
      explanation: "أرض الصحراء جافة (dry) لندرة الأمطار، ونباتاتها تتكيف للعيش بالقليل من الماء."
    }
  }),

  // 367. wet
  wet: (w) => ({
    word: w,
    title: "Wet Clothes",
    titleArabic: "ملابس مبللة",
    storyEnglish: `My clothes are wet because I forgot to take my umbrella in the rain. I need to change them immediately so I do not get a cold. Weather can be tricky.`,
    storyArabic: `ملابسي مبللة لأنني نسيت أخذ مظلتي في المطر. أحتاج لتغييرها فوراً حتى لا أصاب بالبرد. الطقس يمكن أن يكون مخادعاً.`,
    question: {
      question: "Why are the narrator's clothes wet?",
      options: [
        "Because they forgot to take their umbrella during the rain",
        "Because they washed them in the kitchen sink",
        "Because a water pipe burst indoors",
        "Because they jumped into a swimming pool"
      ],
      answerIndex: 0,
      explanation: "أصبحت الملابس مبللة (wet) لنسيان المظلة تحت المطر، ويجب تغييرها تجنباً لنزلات البرد."
    }
  }),

  // 368. heavy
  heavy: (w) => ({
    word: w,
    title: "Heavy Box",
    titleArabic: "صندوق ثقيل",
    storyEnglish: `That box is too heavy for one person to carry alone. Please ask someone to help you move it safely. We do not want anyone to get hurt.`,
    storyArabic: `هذا الصندوق ثقيل جداً على شخص واحد ليحمله بمفرده. من فضلك اطلب من شخص ما مساعدتك في نقله بأمان. لا نريد أن يتأذى أحد.`,
    question: {
      question: "Why should you ask for help to move the box?",
      options: [
        "Because it is too heavy for one person and we want to prevent anyone from getting hurt",
        "Because the box is completely empty",
        "Because it is filled with fragile glass cups",
        "Because opening the box requires two keys"
      ],
      answerIndex: 0,
      explanation: "الصندوق ثقيل (heavy) جداً وينبغي طلب المساعدة لنقله بأمان دون التعرض لإصابة."
    }
  }),

  // 369. safe
  safe: (w) => ({
    word: w,
    title: "Safe Area",
    titleArabic: "منطقة آمنة",
    storyEnglish: `It is safe to walk in this area during the day time. People are friendly and the streets are well-lit. Just be careful when it gets dark.`,
    storyArabic: `من الآمن المشي في هذه المنطقة خلال وقت النهار. الناس ودودون والشوارع مضاءة جيداً. فقط كن حذراً عندما يحل الظلام.`,
    question: {
      question: "Why is it safe to walk in this area during daytime?",
      options: [
        "Because people are friendly and the streets are well-lit",
        "Because no cars or bicycles are permitted",
        "Because security checkpoints are on every corner",
        "Because the stores are all closed"
      ],
      answerIndex: 0,
      explanation: "المكان آمن (safe) للمشي نهاراً بفضل لطف السكان وإضاءة الشوارع الجيدة."
    }
  }),

  // 370. dangerous
  dangerous: (w) => ({
    word: w,
    title: "Dangerous River",
    titleArabic: "نهر خطير",
    storyEnglish: `It is very dangerous to swim in that river because the current is too strong. Many people get into trouble when they do not listen to warnings. Stay away from the water.`,
    storyArabic: `من الخطر جداً السباحة في ذلك النهر لأن التيار قوي جداً. يقع الكثير من الناس في مشاكل عندما لا يستمعون للتحذيرات. ابقَ بعيداً عن الماء.`,
    question: {
      question: "Why is it dangerous to swim in that river?",
      options: [
        "Because the water current is too strong and can cause serious trouble",
        "Because the water is boiling hot",
        "Because the river dried up completely",
        "Because boats race there continuously"
      ],
      answerIndex: 0,
      explanation: "السباحة في النهر خطيرة (dangerous) للغاية لقوة وسرعة التيارات المائية."
    }
  }),

  // 371. quiet
  quiet: (w) => ({
    word: w,
    title: "Quiet Library",
    titleArabic: "مكتبة هادئة",
    storyEnglish: `The library is a quiet place where everyone focuses on their reading. You should not talk loudly inside. It is a great place to study.`,
    storyArabic: `المكتبة مكان هادئ حيث يركز الجميع على قراءتهم. لا يجب أن تتحدث بصوت عالٍ بالداخل. إنه مكان رائع للدراسة.`,
    question: {
      question: "Why is the library a great place to study?",
      options: [
        "Because it is a quiet place where everyone focuses on reading without talking loudly",
        "Because it plays loud energetic music",
        "Because visitors can hold sports events inside",
        "Because food and drinks are served continuously"
      ],
      answerIndex: 0,
      explanation: "المكتبة مكان هادئ (quiet) ومثالي للدراسة والتركيز في القراءة دون إزعاج."
    }
  }),

  // 372. noisy
  noisy: (w) => ({
    word: w,
    title: "Noisy City Center",
    titleArabic: "وسط مدينة صاخب",
    storyEnglish: `The city center is always noisy because of all the cars and people. Sometimes I like to go to the park to find some peace. It is very loud in the streets.`,
    storyArabic: `وسط المدينة مزعج دائماً بسبب كل السيارات والناس. أحياناً أحب الذهاب للحديقة لأجد بعض السلام. إنه صاخب جداً في الشوارع.`,
    question: {
      question: "Why is the city center always noisy according to the story?",
      options: [
        "Because of all the cars and crowds of people filling the loud streets",
        "Because birds sing in large flocks",
        "Because all traffic is completely prohibited",
        "Because giant fountains splash water all day"
      ],
      answerIndex: 0,
      explanation: "وسط المدينة صاخب ومزعج (noisy) بسبب كثرة السيارات وازدحام المارة."
    }
  }),

  // 373. cheap
  cheap: (w) => ({
    word: w,
    title: "Cheap Restaurant",
    titleArabic: "مطعم رخيص",
    storyEnglish: `We found a cheap restaurant that serves delicious food every day. It is perfect for students who do not have much money. I visit it quite often.`,
    storyArabic: `وجدنا مطعماً رخيصاً يقدم طعاماً لذيذاً كل يوم. إنه مثالي للطلاب الذين ليس لديهم الكثير من المال. أزوره كثيراً.`,
    question: {
      question: "Why is this cheap restaurant perfect for students?",
      options: [
        "Because it serves delicious food at affordable prices for those on a tight budget",
        "Because students can teach classes there",
        "Because meals take three hours to prepare",
        "Because only luxury gourmet items are served"
      ],
      answerIndex: 0,
      explanation: "المطعم رخيص (cheap) ومناسب للطلاب وميزانياتهم مع تقديم وجبات لذيذة يومياً."
    }
  }),

  // 374. expensive
  expensive: (w) => ({
    word: w,
    title: "Expensive Watch",
    titleArabic: "ساعة غالية",
    storyEnglish: `That watch is too expensive for me to buy right now. I will save my money until I have enough to afford it. It is a very luxury item.`,
    storyArabic: `تلك الساعة غالية جداً بالنسبة لي لأشتريها الآن. سأدخر مالي حتى يصبح لدي ما يكفي لشرائها. إنها سلعة فاخرة جداً.`,
    question: {
      question: "What does the narrator plan to do regarding the expensive watch?",
      options: [
        "Save money until having enough to afford the luxury item",
        "Borrow money with high interest immediately",
        "Forget about watches completely",
        "Trade their smartphone for it today"
      ],
      answerIndex: 0,
      explanation: "الساعة غالية (expensive) الثمن وفاخرة، لذلك سيوفر ويدخر المال لشرائها لاحقاً."
    }
  }),

  // 375. full
  full: (w) => ({
    word: w,
    title: "Full Glass",
    titleArabic: "كأس ممتلئ",
    storyEnglish: `The glass is full of orange juice and you should drink it before it gets warm. It is very fresh and good for your health. Enjoy your drink!`,
    storyArabic: `الكأس مليء بعصير البرتقال ويجب أن تشربه قبل أن يصبح دافئاً. إنه طازج جداً ومفيد لصحتك. استمتع بمشروبك!`,
    question: {
      question: "What is the glass full of and why should you drink it?",
      options: [
        "Fresh orange juice that is healthy and should be enjoyed before getting warm",
        "Hot black tea with cinnamon",
        "Salty tap water",
        "Empty air without liquid"
      ],
      answerIndex: 0,
      explanation: "الكأس ممتلئ (full) بعصير البرتقال الطازج والمفيد للصحة."
    }
  }),

  // 376. empty
  empty: (w) => ({
    word: w,
    title: "Empty Box",
    titleArabic: "صندوق فارغ",
    storyEnglish: `The box is empty because we finished all the cookies yesterday. I should go to the store to buy some more today. Everyone loves these cookies.`,
    storyArabic: `الصندوق فارغ لأننا أنهينا كل الكعك بالأمس. يجب أن أذهب للمتجر لأشتري المزيد اليوم. الجميع يحب هذا الكعك.`,
    question: {
      question: "Why is the box empty?",
      options: [
        "Because everyone ate and finished all the delicious cookies yesterday",
        "Because the cookies were never baked",
        "Because the box was thrown away",
        "Because the cookies were given to wildlife"
      ],
      answerIndex: 0,
      explanation: "الصندوق فارغ (empty) تماماً لأن جميع قطع الكعك تم تناولها بالأمس."
    }
  }),

  // 377. strong
  strong: (w) => ({
    word: w,
    title: "Strong Wind",
    titleArabic: "رياح قوية",
    storyEnglish: `The wind is very strong today and it is moving the trees around. You should hold your hat so it does not fly away. It is very windy outside.`,
    storyArabic: `الرياح قوية جداً اليوم وهي تحرك الأشجار. يجب أن تمسك قبعتك حتى لا تطير بعيداً. الجو عاصف جداً في الخارج.`,
    question: {
      question: "Why should you hold your hat outside today?",
      options: [
        "Because the wind is very strong and can blow it away while swaying trees",
        "Because of heavy snowfall",
        "Because birds might land on it",
        "To protect it from extreme sunshine"
      ],
      answerIndex: 0,
      explanation: "الرياح قوية (strong) وعاصفة وتحرك الأشجار وقد تُطيّر القبعات."
    }
  }),

  // 378. weak
  weak: (w) => ({
    word: w,
    title: "Weak Bridge",
    titleArabic: "جسر ضعيف",
    storyEnglish: `The old bridge became weak after many years of heavy use. They are building a new one now to keep everyone safe. Maintenance is very necessary.`,
    storyArabic: `أصبح الجسر القديم ضعيفاً بعد سنوات عديدة من الاستخدام الثقيل. يبنون واحداً جديداً الآن ليبقوا الجميع آمنين. الصيانة ضرورية جداً.`,
    question: {
      question: "Why is a new bridge being built according to the story?",
      options: [
        "Because the old bridge became weak from heavy use and a new one keeps everyone safe",
        "Because the river dried up completely",
        "To prevent any vehicle from crossing the valley",
        "To change the name of the road"
      ],
      answerIndex: 0,
      explanation: "أصبح الجسر القديم ضعيفاً (weak) بعد الاستخدام الطويل، لذا يجري بناء جسر جديد لسلامة الجميع."
    }
  }),

  // 379. place
  place: (w) => ({
    word: w,
    title: "A Peaceful Place",
    titleArabic: "مكان هادئ",
    storyEnglish: `This place is very quiet and beautiful in the morning. I like to sit here and read my book. The air is fresh and the trees are green.`,
    storyArabic: `هذا المكان هادئ جداً وجميل في الصباح. أحب أن أجلس هنا وأقرأ كتابي. الهواء منعش والأشجار خضراء.`,
    question: {
      question: "What does the narrator enjoy doing in this peaceful place?",
      options: [
        "Sitting quietly to read a book, enjoying fresh air and green trees in the morning",
        "Running a busy outdoor street market",
        "Practicing loud musical instruments",
        "Repairing heavy construction machinery"
      ],
      answerIndex: 0,
      explanation: "هذا المكان (place) هادئ وجميل في الصباح ويوفر جواً مناسباً للقراءة والاسترخاء."
    }
  }),

  // 380. city
  city: (w) => ({
    word: w,
    title: "Tokyo City",
    titleArabic: "مدينة طوكيو",
    storyEnglish: `Tokyo is a huge city with many bright lights and tall buildings. Many people live and work there. It is very busy day and night.`,
    storyArabic: `طوكيو مدينة ضخمة فيها الكثير من الأضواء الساطعة والمباني العالية. يعيش ويعمل فيها الكثير من الناس. هي مزدحمة جداً ليلاً ونهاراً.`,
    question: {
      question: "What characterizes Tokyo city in the story?",
      options: [
        "A huge, busy city day and night with bright lights, tall buildings, and millions living and working",
        "A quiet rural village with farms only",
        "A mountain peak with few inhabitants",
        "An abandoned ancient town"
      ],
      answerIndex: 0,
      explanation: "طوكيو مدينة (city) ضخمة وصاخبة بالمباني الشاهقة والأضواء الساطعة ليل نهار."
    }
  }),

  // 381. country
  country: (w) => ({
    word: w,
    title: "Beautiful France",
    titleArabic: "فرنسا الجميلة",
    storyEnglish: `France is a wonderful country in Europe. The food is delicious and the history is very interesting. I want to visit Paris one day.`,
    storyArabic: `فرنسا بلد رائع في أوروبا. الطعام لذيذ والتاريخ ممتع جداً. أريد أن أزور باريس يوماً ما.`,
    question: {
      question: "Why does the narrator consider France a wonderful country to visit?",
      options: [
        "Because it has delicious food, interesting history, and the dream of visiting Paris",
        "Because it is located on an uninhabited island",
        "Because it has no major historical sites",
        "Because train travel is prohibited there"
      ],
      answerIndex: 0,
      explanation: "فرنسا بلد ودولة (country) مميزة في أوروبا بمأكولاتها وتاريخها وعاصمتها باريس."
    }
  }),

  // 382. town
  town: (w) => ({
    word: w,
    title: "My Small Town",
    titleArabic: "بلدتي الصغيرة",
    storyEnglish: `I live in a small town near the mountains. Everyone knows each other, and life is slow and peaceful. It is a safe place for children.`,
    storyArabic: `أعيش في بلدة صغيرة قرب الجبال. الجميع يعرف الآخر، والحياة بطيئة وهادئة. إنه مكان آمن للأطفال.`,
    question: {
      question: "What is life like in this small mountain town?",
      options: [
        "Life is slow, peaceful, and safe for children where everyone knows each other",
        "Full of heavy industrial traffic and noise",
        "Overcrowded with no green spaces",
        "Strictly accessible by airplanes only"
      ],
      answerIndex: 0,
      explanation: "الحياة في هذه البلدة (town) الصغيرة هادئة وآمنة للأطفال والجميع يعرف بعضه."
    }
  }),

  // 383. street
  street: (w) => ({
    word: w,
    title: "Quiet Street",
    titleArabic: "شارع هادئ",
    storyEnglish: `Our house is on a quiet street with many trees. The children play football here in the evening. It is a very friendly neighborhood.`,
    storyArabic: `منزلنا يقع في شارع هادئ فيه الكثير من الأشجار. الأطفال يلعبون كرة القدم هنا في المساء. إنه حي ودود جداً.`,
    question: {
      question: "What happens in the quiet neighborhood street in the evening?",
      options: [
        "Children play football safely in the tree-lined, friendly neighborhood",
        "Heavy trucks race through continuously",
        "All streetlights are completely turned off",
        "Outdoor activities are forbidden"
      ],
      answerIndex: 0,
      explanation: "يقع المنزل في شارع (street) هادئ ومحاط بالأشجار حيث يلعب الأطفال بأمان."
    }
  }),

  // 384. road
  road: (w) => ({
    word: w,
    title: "The Way to the Beach",
    titleArabic: "الطريق إلى الشاطئ",
    storyEnglish: `The road to the beach is very long and winding. We drive carefully because there are many cars today. The view of the sea is amazing.`,
    storyArabic: `الطريق إلى الشاطئ طويل جداً ومتعرج. نقود بحذر لأن هناك الكثير من السيارات اليوم. منظر البحر مدهش.`,
    question: {
      question: "Why do they drive carefully along the road to the beach?",
      options: [
        "Because the road is long, winding, and busy with cars while offering amazing sea views",
        "Because the road is completely closed for construction",
        "Because speed limits are set to zero",
        "Because there is heavy snowfall on the shoreline"
      ],
      answerIndex: 0,
      explanation: "الطريق (road) نحو الشاطئ طويل ومتعرج ويحتاج لقيادة حذرة مع الاستمتاع بجمال البحر."
    }
  }),

  // 385. school
  school: (w) => ({
    word: w,
    title: "The Local School",
    titleArabic: "المدرسة المحلية",
    storyEnglish: `Every morning, children walk to the local school with their bags. They learn to read and write there. The school bell rings at eight o'clock.`,
    storyArabic: `كل صباح، يمشي الأطفال إلى المدرسة المحلية مع حقائبهم. يتعلمون القراءة والكتابة هناك. جرس المدرسة يرن في الساعة الثامنة.`,
    question: {
      question: "What do children do when they go to the local school every morning?",
      options: [
        "They walk with bags to learn reading and writing as the bell rings at eight o'clock",
        "They build furniture for the town hall",
        "They sleep through the afternoon",
        "They operate school buses across the city"
      ],
      answerIndex: 0,
      explanation: "يذهب الأطفال إلى المدرسة (school) كل صباح لتعلم القراءة والكتابة والعلوم."
    }
  }),

  // 386. university
  university: (w) => ({
    word: w,
    title: "Going to University",
    titleArabic: "الذهاب للجامعة",
    storyEnglish: `After finishing school, Sarah wants to go to university to study medicine. She works very hard to get good grades. She wants to be a doctor.`,
    storyArabic: `بعد إنهاء المدرسة، سارة تريد الذهاب للجامعة لتدرس الطب. هي تعمل بجد جداً لتحصل على درجات جيدة. هي تريد أن تكون طبيبة.`,
    question: {
      question: "Why does Sarah work hard to attend university?",
      options: [
        "To study medicine at university and achieve her dream of becoming a doctor",
        "To learn how to fly commercial airplanes",
        "To travel without taking any classes",
        "To open a bookstore immediately"
      ],
      answerIndex: 0,
      explanation: "تعمل سارة بجد للالتحاق بالجامعة (university) ودراسة الطب لتصبح طبيبة ناجحة."
    }
  }),

  // 387. office
  office: (w) => ({
    word: w,
    title: "Working in an Office",
    titleArabic: "العمل في مكتب",
    storyEnglish: `My father works in a big office in the city center. He goes there by train every morning. He comes home tired in the evening.`,
    storyArabic: `أبي يعمل في مكتب كبير في وسط المدينة. يذهب إلى هناك بالقطار كل صباح. يعود للمنزل متعباً في المساء.`,
    question: {
      question: "Where does the father work and how does he commute every morning?",
      options: [
        "In a big office in the city center and he goes there by train every morning",
        "In a quiet country farm reachable only by horse",
        "At a beach resort working outdoors",
        "From a small home workshop with no commute"
      ],
      answerIndex: 0,
      explanation: "يعمل الأب في مكتب (office) كبير في وسط المدينة ويسافر إليه بالقطار كل صباح."
    }
  }),

  // 388. store
  store: (w) => ({
    word: w,
    title: "Shopping for Dinner",
    titleArabic: "التسوق للعشاء",
    storyEnglish: `We need to buy food, so let us go to the store near the park. It has everything we need for dinner. The prices are good there.`,
    storyArabic: `نحن بحاجة لشراء طعام، لذا دعنا نذهب إلى المتجر قرب الحديقة. فيه كل ما نحتاجه للعشاء. الأسعار جيدة هناك.`,
    question: {
      question: "Why are they going to the store near the park?",
      options: [
        "To buy food for dinner because it has everything they need at good prices",
        "To buy flowers for a wedding party",
        "To return a broken bicycle",
        "To play games in the park playground"
      ],
      answerIndex: 0,
      explanation: "الذهاب إلى المتجر (store) القريب من الحديقة لشراء جميع مستلزمات العشاء بأسعار مناسبة."
    }
  }),

  // 389. shop
  shop: (w) => ({
    word: w,
    title: "The Corner Shop",
    titleArabic: "دكان الزاوية",
    storyEnglish: `There is a small shop on the corner that sells fresh bread and milk. The owner is a very kind old man. I buy breakfast there every day.`,
    storyArabic: `هناك دكان صغير في الزاوية يبيع الخبز الطازج والحليب. المالك رجل عجوز طيب جداً. أشتري الإفطار من هناك كل يوم.`,
    question: {
      question: "What does the corner shop sell and who owns it?",
      options: [
        "It sells fresh bread and milk, owned by a very kind old man",
        "It sells hardware tools, owned by a young carpenter",
        "It sells sports gear and outdoor clothing",
        "It repairs broken clocks and electronics"
      ],
      answerIndex: 0,
      explanation: "يبيع الدكان والمحل (shop) الصغير على الزاوية خبزاً وحليباً طازجاً ويديره رجل عجوز طيب."
    }
  }),

  // 390. market
  market: (w) => ({
    word: w,
    title: "Sunday Market",
    titleArabic: "سوق الأحد",
    storyEnglish: `On Sundays, the outdoor market is very busy. Farmers sell fresh fruits and vegetables there. The colors are beautiful, and the people are loud.`,
    storyArabic: `في أيام الأحد، يكون السوق المفتوح مزدحماً جداً. المزارعون يبيعون الفواكه والخضروات الطازجة هناك. الألوان جميلة، والناس بصوت عالٍ.`,
    question: {
      question: "What happens at the outdoor market on Sundays?",
      options: [
        "Farmers sell fresh fruits and vegetables amidst vibrant colors and lively crowds",
        "Automobiles race through empty streets",
        "The market is completely closed and quiet",
        "Only manufactured electronics are displayed"
      ],
      answerIndex: 0,
      explanation: "في يوم الأحد، يكون السوق (market) حيوياً حيث يبيع المزارعون الفواكه والخضروات الطازجة."
    }
  }),

  // 391. hotel
  hotel: (w) => ({
    word: w,
    title: "Nice Hotel",
    titleArabic: "فندق جميل",
    storyEnglish: `The tourists stayed in a nice hotel near the beach. The rooms were big, and the view was fantastic. They enjoyed their vacation very much.`,
    storyArabic: `أقام السياح في فندق جميل قرب الشاطئ. الغرف كانت كبيرة، والمنظر كان رائعاً. لقد استمتعوا بإجازتهم كثيراً.`,
    question: {
      question: "What made the tourists' stay at the hotel so enjoyable?",
      options: [
        "The hotel was near the beach with big rooms and a fantastic view",
        "The hotel was in an industrial desert area",
        "The rooms had no windows or furniture",
        "They stayed for free without reservations"
      ],
      answerIndex: 0,
      explanation: "أقام السياح في فندق (hotel) مميز وقريب من الشاطئ بغرف واسعة وإطلالة رائعة."
    }
  }),

  // 392. bank
  bank: (w) => ({
    word: w,
    title: "At the Bank",
    titleArabic: "في البنك",
    storyEnglish: `I need to get some money, so I am going to the bank on Main Street. It is open until four o'clock today. I hope there is no line.`,
    storyArabic: `أحتاج للحصول على بعض المال، لذا سأذهب إلى البنك في الشارع الرئيسي. هو مفتوح حتى الساعة الرابعة اليوم. آمل ألا يكون هناك طابور.`,
    question: {
      question: "Why is the narrator going to the bank on Main Street?",
      options: [
        "To get some money before it closes at four o'clock today",
        "To buy train tickets for the weekend",
        "To apply for a teaching job",
        "To eat lunch at the cafeteria"
      ],
      answerIndex: 0,
      explanation: "الذهاب إلى البنك والمصرف (bank) في الشارع الرئيسي لسحب والحصول على المال قبل إغلاقه."
    }
  }),

  // 393. station
  station: (w) => ({
    word: w,
    title: "Central Station",
    titleArabic: "المحطة المركزية",
    storyEnglish: `We waited for the train at the central station. It was very crowded with people traveling for the holidays. The train arrived on time.`,
    storyArabic: `انتظرنا القطار في المحطة المركزية. كانت مزدحمة جداً بالناس المسافرين للعطلات. وصل القطار في الوقت المحدد.`,
    question: {
      question: "Why was the central station crowded?",
      options: [
        "With people traveling for the holidays as they waited for the train",
        "Because an unexpected storm blocked the tracks",
        "Because all trains were completely cancelled",
        "Because of an art exhibition inside the terminal"
      ],
      answerIndex: 0,
      explanation: "كانت محطة (station) القطارات المركزية مزدحمة بالمسافرين لقضاء الإجازات ووصل القطار بموعده."
    }
  }),

  // 394. airport
  airport: (w) => ({
    word: w,
    title: "Going to the Airport",
    titleArabic: "الذهاب للمطار",
    storyEnglish: `The airport is far from the city, so we took a taxi. We arrived early to check our bags. We are flying to London today.`,
    storyArabic: `المطار بعيد عن المدينة، لذا أخذنا سيارة أجرة. وصلنا مبكراً لفحص حقائبنا. نحن مسافرون إلى لندن اليوم.`,
    question: {
      question: "Why did they take a taxi early to the airport?",
      options: [
        "Because the airport is far and they needed time to check bags for their flight to London",
        "Because their flight was arriving late at night",
        "To pick up a friend returning from Paris",
        "To avoid traveling by plane"
      ],
      answerIndex: 0,
      explanation: "المطار (airport) بعيد عن المدينة، لذا استقلوا سيارة أجرة ووصلوا مبكراً لإنهاء إجراءات السفر إلى لندن."
    }
  }),

  // 395. park
  park: (w) => ({
    word: w,
    title: "Playing in the Park",
    titleArabic: "اللعب في الحديقة",
    storyEnglish: `Children love to play in the park in the afternoon. They run on the grass and swing on the trees. The weather is lovely today.`,
    storyArabic: `الأطفال يحبون اللعب في الحديقة في فترة ما بعد الظهر. يركضون على العشب ويتأرجحون على الأشجار. الطقس جميل اليوم.`,
    question: {
      question: "What do children love doing in the park in the lovely afternoon weather?",
      options: [
        "Running on the green grass and swinging on the trees",
        "Sitting indoors doing exam papers",
        "Cleaning fallen autumn branches",
        "Riding buses around the city"
      ],
      answerIndex: 0,
      explanation: "يحب الأطفال اللعب في الحديقة العامة (park) في الهواء الطلق والركض على العشب في الطقس الجميل."
    }
  }),

  // 396. restaurant
  restaurant: (w) => ({
    word: w,
    title: "Italian Dinner",
    titleArabic: "عشاء إيطالي",
    storyEnglish: `We had a delicious dinner at an Italian restaurant last night. The pizza was very good, and the waiter was friendly. It was a great evening.`,
    storyArabic: `تناولنا عشاءً لذيذاً في مطعم إيطالي ليلة البارحة. البيتزا كانت جيدة جداً، والنادل كان ودوداً. لقد كانت أمسية رائعة.`,
    question: {
      question: "What made the evening at the Italian restaurant great?",
      options: [
        "A delicious dinner with very good pizza and a friendly waiter",
        "A cooking class taught by the chef",
        "Free takeaway food for the whole neighborhood",
        "Fast delivery right to their doorstep"
      ],
      answerIndex: 0,
      explanation: "استمتعوا بعشاء رائع في المطعم (restaurant) الإيطالي ببيتزا لذيذة وخدمة ودودة من النادل."
    }
  }),

  // 397. mosque
  mosque: (w) => ({
    word: w,
    title: "Peaceful Mosque",
    titleArabic: "مسجد مسالم",
    storyEnglish: `People go to the mosque to pray every day. On Fridays, it is very full. It is a quiet and peaceful place.`,
    storyArabic: `يذهب الناس إلى المسجد للصلاة كل يوم. في أيام الجمعة، يكون ممتلئاً جداً. إنه مكان هادئ ومسالم.`,
    question: {
      question: "Why do people go to the mosque and what is it like?",
      options: [
        "To pray every day in a quiet and peaceful place, especially on Fridays",
        "To study automobile engineering",
        "To purchase household supplies",
        "To attend athletic competitions"
      ],
      answerIndex: 0,
      explanation: "يقصد الناس المسجد (mosque) لأداء الصلاة يومياً وفي الجمعة في أجواء عامرة بالسكينة والسلام."
    }
  }),

  // 398. bus
  bus: (w) => ({
    word: w,
    title: "Taking the Bus",
    titleArabic: "ركوب الحافلة",
    storyEnglish: `We take the bus to school because it is cheap and easy. The bus stop is in front of our house. We never arrive late.`,
    storyArabic: `نأخذ الحافلة إلى المدرسة لأنها رخيصة وسهلة. موقف الحافلة أمام منزلنا. نحن لا نصل متأخرين أبداً.`,
    question: {
      question: "Why do they prefer taking the bus to school?",
      options: [
        "Because it is cheap, easy, stops in front of their house, and keeps them on time",
        "Because walking is completely forbidden in their town",
        "Because the school requires all students to ride buses",
        "Because it is faster than an airplane"
      ],
      answerIndex: 0,
      explanation: "ركوب الحافلة (bus) وسيلة سهلة واقتصادية للذهاب للمدرسة والوصول في الموعد المحدد."
    }
  }),

  // 399. train
  train: (w) => ({
    word: w,
    title: "Traveling by Train",
    titleArabic: "السفر بالقطار",
    storyEnglish: `The train is a fast way to travel between cities. You can see the beautiful countryside from the window. I like listening to music during the trip.`,
    storyArabic: `القطار وسيلة سريعة للسفر بين المدن. يمكنك رؤية الريف الجميل من النافذة. أحب الاستماع للموسيقى أثناء الرحلة.`,
    question: {
      question: "What makes traveling by train an enjoyable experience?",
      options: [
        "It is fast between cities, offers countryside views from the window, and allows listening to music",
        "It flies above mountain clouds",
        "Passengers can drive the train themselves",
        "It stops at every single house"
      ],
      answerIndex: 0,
      explanation: "القطار (train) وسيلة مريحة وسريعة للتنقل بين المدن مع التمتع بالمناظر الطبيعية الخلابة."
    }
  }),

  // 400. plane
  plane: (w) => ({
    word: w,
    title: "My First Flight",
    titleArabic: "رحلتي الجوية الأولى",
    storyEnglish: `The plane flies very high above the clouds. We are traveling to New York for a holiday. It is my first time on a plane.`,
    storyArabic: `الطائرة تطير عالياً جداً فوق الغيوم. نحن مسافرون إلى نيويورك لقضاء عطلة. إنها أول مرة لي على متن طائرة.`,
    question: {
      question: "Where are they traveling on the plane and why is it special?",
      options: [
        "To New York for a holiday, flying high above clouds on their very first flight",
        "To a nearby village by road",
        "To their school for an examination",
        "To a submarine expedition"
      ],
      answerIndex: 0,
      explanation: "تحلق الطائرة (plane) عالياً فوق السحاب في أول تجربة طيران في رحلة إلى نيويورك لقضاء العطلة."
    }
  }),

  // 401. bicycle
  bicycle: (w) => ({
    word: w,
    title: "Cycling to the Park",
    titleArabic: "ركوب الدراجة للحديقة",
    storyEnglish: `She rides her bicycle to the park every evening. It is good exercise and fun. She wears a helmet for safety.`,
    storyArabic: `هي تركب دراجتها إلى الحديقة كل مساء. إنه تمرين جيد وممتع. هي ترتدي خوذة للسلامة.`,
    question: {
      question: "Why does she ride her bicycle to the park every evening?",
      options: [
        "Because it is good exercise, fun, and she wears a helmet for safety",
        "To deliver heavy furniture across town",
        "Because she has no other way to get water",
        "Because walking in the park is prohibited"
      ],
      answerIndex: 0,
      explanation: "ركوب الدراجة الهوائية (bicycle) كل مساء تمرين صحي وممتع مع الحرص على ارتداء خوذة الأمان."
    }
  }),

  // 402. ticket
  ticket: (w) => ({
    word: w,
    title: "Cinema Ticket",
    titleArabic: "تذكرة السينما",
    storyEnglish: `I bought a ticket for the cinema tonight. I want to see the new action movie. It starts at seven o'clock.`,
    storyArabic: `اشتريت تذكرة للسينما الليلة. أريد أن أرى فيلم الحركة الجديد. يبدأ في الساعة السابعة.`,
    question: {
      question: "What did the narrator buy a ticket for and when does it start?",
      options: [
        "A ticket for the cinema tonight to see a new action movie starting at seven o'clock",
        "A ticket for an overnight train journey",
        "A ticket for a live football match",
        "A ticket for an international flight"
      ],
      answerIndex: 0,
      explanation: "اشترى المتحدث تذكرة (ticket) للسينما لمشاهدة فيلم الحركة الجديد الليلة في تمام السابعة."
    }
  }),

  // 403. travel
  travel: (w) => ({
    word: w,
    title: "Traveling the World",
    titleArabic: "السفر حول العالم",
    storyEnglish: `They like to travel to different countries every summer. They want to see the whole world. This year, they are going to Japan.`,
    storyArabic: `يحبون السفر إلى بلدان مختلفة كل صيف. يريدون رؤية العالم كله. هذا العام، هم ذاهبون إلى اليابان.`,
    question: {
      question: "Where do they want to travel and where are they going this summer?",
      options: [
        "They like to travel to different countries every summer and are visiting Japan this year",
        "They prefer staying home every summer",
        "They only travel to snowy mountain regions in winter",
        "They plan to travel to the moon"
      ],
      answerIndex: 0,
      explanation: "يحبون السفر (travel) واكتشاف العالم كل صيف، ووجهتهم هذا العام هي اليابان."
    }
  }),

  // 404. map
  map: (w) => ({
    word: w,
    title: "Using a Map",
    titleArabic: "استخدام الخريطة",
    storyEnglish: `We used a map to find the museum in the old city. The streets are very confusing here. Without the map, we would be lost.`,
    storyArabic: `استخدمنا خريطة لإيجاد المتحف في المدينة القديمة. الشوارع مربكة جداً هنا. بدون الخريطة، كنا سنضيع.`,
    question: {
      question: "Why did they need to use a map to find the museum?",
      options: [
        "Because the streets in the old city are very confusing and without the map they would be lost",
        "Because their car ran out of fuel",
        "Because the museum was permanently closed",
        "Because they wanted to draw new roads"
      ],
      answerIndex: 0,
      explanation: "استخدموا الخريطة (map) لتحديد موقع المتحف في شوارع المدينة القديمة المربكة وتجنب الضياع."
    }
  }),

  // 405. tourist
  tourist: (w) => ({
    word: w,
    title: "Tourists in Egypt",
    titleArabic: "سياح في مصر",
    storyEnglish: `Many tourists visit the pyramids in Egypt every year. They take many photos and buy gifts. The weather is usually very hot there.`,
    storyArabic: `الكثير من السياح يزورون الأهرامات في مصر كل عام. يلتقطون الكثير من الصور ويشترون الهدايا. الطقس عادة ما يكون حاراً جداً هناك.`,
    question: {
      question: "What do many tourists do when they visit the pyramids in Egypt?",
      options: [
        "They visit the pyramids, take many photos, and buy gifts in the hot weather",
        "They build new houses in the desert",
        "They stay indoors without taking photos",
        "They avoid historical monuments"
      ],
      answerIndex: 0,
      explanation: "يزور السياح (tourists) الأهرامات في مصر سنوياً ويلتقطون الصور التذكارية ويشترون الهدايا."
    }
  }),

  // 406. bridge
  bridge: (w) => ({
    word: w,
    title: "The Old Bridge",
    titleArabic: "الجسر القديم",
    storyEnglish: `The old bridge over the river is made of stone. People walk across it to go to the market. It is very beautiful at sunset.`,
    storyArabic: `الجسر القديم فوق النهر مصنوع من الحجر. يمشي الناس عبره للذهاب إلى السوق. هو جميل جداً عند غروب الشمس.`,
    question: {
      question: "What is the old bridge made of and why do people walk across it?",
      options: [
        "It is made of stone and people walk across it over the river to go to the market",
        "It is made of glass and used only for heavy trucks",
        "It is closed to pedestrians permanently",
        "It floats on the sea during storms"
      ],
      answerIndex: 0,
      explanation: "الجسر (bridge) الحجري القديم يربط فوق النهر ويعبره الناس للذهاب إلى السوق عند غروب الشمس."
    }
  }),

  // 407. museum
  museum: (w) => ({
    word: w,
    title: "Visiting the Museum",
    titleArabic: "زيارة المتحف",
    storyEnglish: `We visited the museum yesterday to see the old paintings. It was very quiet and interesting. I learned a lot about history.`,
    storyArabic: `زرنا المتحف بالأمس لنرى اللوحات القديمة. كان هادئاً جداً وممتعاً. تعلمت الكثير عن التاريخ.`,
    question: {
      question: "What did they do at the museum yesterday?",
      options: [
        "They saw old paintings in a quiet and interesting atmosphere and learned a lot about history",
        "They attended a noisy rock music concert",
        "They played football in the courtyard",
        "They bought kitchen appliances"
      ],
      answerIndex: 0,
      explanation: "زيارة المتحف (museum) بالأمس لرؤية اللوحات التاريخية القديمة والتعلم عن التاريخ في أجواء هادئة."
    }
  }),

  // 408. library
  library: (w) => ({
    word: w,
    title: "Studying in the Library",
    titleArabic: "الدراسة في المكتبة",
    storyEnglish: `Students go to the library to study and borrow books. It is a quiet place perfect for reading. The librarian is very helpful.`,
    storyArabic: `يذهب الطلاب إلى المكتبة للدراسة واستعارة الكتب. إنه مكان هادئ مثالي للقراءة. أمينة المكتبة متعاونة جداً.`,
    question: {
      question: "Why is the library a great place for students?",
      options: [
        "It is a quiet place perfect for studying, borrowing books, and reading with a helpful librarian",
        "It has loud entertainment games and television screens",
        "It serves hot fast food around the clock",
        "It is exclusively for physical sports"
      ],
      answerIndex: 0,
      explanation: "المكتبة (library) مكان هادئ ومثالي للطلاب للمذاكرة وقراءة واستعارة الكتب بمساعدة أمينة المكتبة."
    }
  }),

  // 409. cinema
  cinema: (w) => ({
    word: w,
    title: "Watching a Movie",
    titleArabic: "مشاهدة فيلم",
    storyEnglish: `We saw a funny movie at the cinema last night. We ate popcorn and laughed a lot. The cinema was very full.`,
    storyArabic: `شاهدنا فيلما مضحكا في السينما ليلة البارحة. أكلنا الفشار وضحكنا كثيرا. السينما كانت ممتلئة جدا.`,
    question: {
      question: "What did they enjoy doing at the cinema last night?",
      options: [
        "Watching a funny movie, eating popcorn, and laughing in a full theater",
        "Sleeping quietly through a lecture",
        "Fixing broken cinema chairs",
        "Studying for a medical exam"
      ],
      answerIndex: 0,
      explanation: "شاهدوا فيلماً مضحكاً في السينما (cinema) وتناولوا الفشار واستمتعوا بالضحك في قاعة ممتلئة."
    }
  }),

  // 410. beach
  beach: (w) => ({
    word: w,
    title: "Fun at the Beach",
    titleArabic: "المرح في الشاطئ",
    storyEnglish: `In the summer, we swim in the sea at the beach. The sand is hot, and the water is cool. It is a lot of fun.`,
    storyArabic: `في الصيف، نسبح في البحر على الشاطئ. الرمل حار، والماء بارد. إنه ممتع جداً.`,
    question: {
      question: "What makes going to the beach fun in the summer?",
      options: [
        "Swimming in the cool sea water while the sand is hot",
        "Skiing on snow-covered slopes",
        "Working in an enclosed indoor office",
        "Staying far away from water"
      ],
      answerIndex: 0,
      explanation: "في فصل الصيف، تكون السباحة على الشاطئ (beach) ممتعة جداً بمياهه الباردة ورماله الدافئة."
    }
  }),

  // 411. pool
  pool: (w) => ({
    word: w,
    title: "Swimming in the Pool",
    titleArabic: "السباحة في المسبح",
    storyEnglish: `The children are playing in the pool because it is very hot today. They are learning how to swim. It is a great way to cool down.`,
    storyArabic: `الأطفال يلعبون في المسبح لأن الجو حار جداً اليوم. يتعلمون السباحة. إنها طريقة رائعة للبرودة.`,
    question: {
      question: "Why are the children playing in the pool today?",
      options: [
        "Because it is very hot, they are learning to swim, and it is a great way to cool down",
        "Because their school is holding a science fair",
        "Because they are waiting for a bus",
        "Because they need to wash heavy carpets"
      ],
      answerIndex: 0,
      explanation: "يلعب الأطفال في المسبح وحوض السباحة (pool) لتعلم السباحة وتبريد أجسامهم في يوم حار."
    }
  }),

  // 412. job
  job: (w) => ({
    word: w,
    title: "A New Opportunity",
    titleArabic: "فرصة جديدة",
    storyEnglish: `Finding a good job is very important for a happy life. Ahmad is looking for a new opportunity in the city center. He hopes to start next month.`,
    storyArabic: `إيجاد وظيفة جيدة مهم جداً لحياة سعيدة. أحمد يبحث عن فرصة جديدة في وسط المدينة. يأمل أن يبدأ الشهر القادم.`,
    question: {
      question: "What is Ahmad looking for in the city center?",
      options: [
        "A new job opportunity for a happy life, hoping to start next month",
        "A cheap bicycle to rent for a day",
        "An old historical painting",
        "A quiet library in the countryside"
      ],
      answerIndex: 0,
      explanation: "يبحث أحمد عن وظيفة (job) وفرصة عمل جيدة ومستقرة في وسط المدينة لتبدأ الشهر القادم."
    }
  }),

  // 413. teacher
  teacher: (w) => ({
    word: w,
    title: "The Kind Teacher",
    titleArabic: "المعلمة الطيبة",
    storyEnglish: `A kind teacher explains the new lesson to her class. She draws on the board and asks the children to listen. Everyone loves her gentle way of explaining.`,
    storyArabic: `معلمة طيبة تشرح الدرس الجديد لفصلها. ترسم على السبورة وتطلب من الأطفال الاستماع. الجميع يحب طريقتها اللطيفة في الشرح.`,
    question: {
      question: "How does the kind teacher explain the lesson to her class?",
      options: [
        "She explains gently, draws on the board, and asks the children to listen attentively",
        "She leaves the classroom empty without speaking",
        "She assigns homework without explanations",
        "She plays loud video games on her phone"
      ],
      answerIndex: 0,
      explanation: "تشرح المعلمة (teacher) الدرس بلطف واهتمام وترسم على السبورة مما يجعل الطلاب يحبون أسلوبها."
    }
  }),

  // 414. student
  student: (w) => ({
    word: w,
    title: "The Determined Student",
    titleArabic: "الطالب المصمم",
    storyEnglish: `The student sits at his desk and opens his notebook. He wants to study for the upcoming test tonight. He is very determined to get a high grade.`,
    storyArabic: `يجلس الطالب على مكتبه ويفتح دفتر ملاحظاته. يريد أن يدرس للاختبار القادم الليلة. هو مصمم جداً على الحصول على درجة عالية.`,
    question: {
      question: "Why is the student studying so attentively at his desk tonight?",
      options: [
        "To prepare for the upcoming test tonight and achieve a high grade",
        "Because he forgot his keys at school",
        "To draw cartoons for fun",
        "Because he has no homework to do"
      ],
      answerIndex: 0,
      explanation: "يجلس الطالب (student) بتركيز لمذاكرة دروسه في دفتره استعداداً للاختبار وحصد درجة عالية."
    }
  }),

  // 415. nurse
  nurse: (w) => ({
    word: w,
    title: "The Helpful Nurse",
    titleArabic: "الممرضة المتعاونة",
    storyEnglish: `The nurse walks quietly in the room to help the sick person. She checks the temperature and brings fresh water. She is always there when people need help.`,
    storyArabic: `تمشي الممرضة بهدوء في الغرفة لتساعد الشخص المريض. تفحص درجة الحرارة وتحضر ماءً طازجاً. هي موجودة دائماً عندما يحتاج الناس للمساعدة.`,
    question: {
      question: "How does the helpful nurse care for the sick patient?",
      options: [
        "By checking the temperature, bringing fresh water, and walking quietly to provide help",
        "By playing loud music in the room",
        "By asking the patient to leave immediately",
        "By building a wooden table"
      ],
      answerIndex: 0,
      explanation: "تهتم الممرضة (nurse) بالمريض بفحص درجة الحرارة وتقديم الماء والمساعدة بكل هدوء ورعاية."
    }
  }),

  // 416. engineer
  engineer: (w) => ({
    word: w,
    title: "Planning the Bridge",
    titleArabic: "تخطيط الجسر",
    storyEnglish: `An engineer plans how to build a strong bridge over the river. She uses many tools and drawings to make sure it is safe. Planning is the first step to success.`,
    storyArabic: `تخطط مهندسة لكيفية بناء جسر قوي فوق النهر. تستخدم الكثير من الأدوات والرسومات لتتأكد أنه آمن. التخطيط هو الخطوة الأولى للنجاح.`,
    question: {
      question: "What is the engineer planning and ensuring through her drawings and tools?",
      options: [
        "How to build a safe, strong bridge over the river with proper planning",
        "How to paint a wall with watercolors",
        "How to sail a small wooden boat",
        "How to grow vegetables in a garden"
      ],
      answerIndex: 0,
      explanation: "تخطط المهندسة (engineer) بدقة لبناء جسر متين وآمن فوق النهر مستعينة بالأدوات والمخططات الهندسية."
    }
  }),

  // 417. driver
  driver: (w) => ({
    word: w,
    title: "The Bus Driver",
    titleArabic: "سائق الحافلة",
    storyEnglish: `The bus driver stops at the station to let new passengers in. He smiles at everyone and starts the bus smoothly. Safety is the most important thing for him.`,
    storyArabic: `يتوقف سائق الحافلة في المحطة ليسمح للركاب الجدد بالدخول. يبتسم للجميع ويحرك الحافلة بسلاسة. السلامة هي أهم شيء بالنسبة له.`,
    question: {
      question: "What does the bus driver prioritize at the station?",
      options: [
        "Stopping for passengers with a smile, driving smoothly, and prioritizing safety",
        "Driving as fast as possible through red lights",
        "Refusing to open the bus doors",
        "Leaving before passengers can board"
      ],
      answerIndex: 0,
      explanation: "يحرص سائق (driver) الحافلة على الترحيب بالركاب والقيادة السلسة مع وضع الأمان كأولوية قصوى."
    }
  }),

  // 418. police officer
  "police officer": (w) => ({
    word: w,
    title: "Keeping Us Safe",
    titleArabic: "الحفاظ على سلامتنا",
    storyEnglish: `A police officer helps the children cross the street safely. He wears a dark uniform and stands in the middle of the road. Everyone feels safe when he is around.`,
    storyArabic: `يساعد ضابط شرطة الأطفال على عبور الشارع بأمان. يرتدي زياً داكناً ويقف في وسط الطريق. الجميع يشعر بالأمان عندما يكون موجوداً.`,
    question: {
      question: "How does the police officer help and protect the community?",
      options: [
        "By helping children cross the street safely and standing in the road in uniform",
        "By selling tickets at the cinema",
        "By flying passenger airplanes across countries",
        "By repairing cars in a garage"
      ],
      answerIndex: 0,
      explanation: "يقوم ضابط الشرطة (police officer) بحماية المارة ومساعدة الأطفال على عبور الطريق بأمان."
    }
  }),
  police_officer: (w) => SPECIFIC_WORD_STORIES["police officer"](w),
  police: (w) => SPECIFIC_WORD_STORIES["police officer"](w),
  policeman: (w) => SPECIFIC_WORD_STORIES["police officer"](w),

  // 419. manager
  manager: (w) => ({
    word: w,
    title: "Office Management",
    titleArabic: "إدارة المكتب",
    storyEnglish: `The office manager gives new instructions to all the staff. She wants the project to be finished on time this week. Her team is ready to work hard.`,
    storyArabic: `تعطي مديرة المكتب تعليمات جديدة لكل الموظفين. تريد للمشروع أن ينتهي في وقته هذا الأسبوع. فريقها مستعد للعمل بجد.`,
    question: {
      question: "What does the office manager instruct her team to do?",
      options: [
        "To finish the project on time this week through hard work and clear instructions",
        "To take the entire week off for a holiday",
        "To cancel all upcoming projects",
        "To paint the office building"
      ],
      answerIndex: 0,
      explanation: "توجه مديرة (manager) المكتب الموظفين بتعليمات واضحة لإنجاز المشروع وتسليمه في الموعد المحدد."
    }
  }),

  // 420. worker
  worker: (w) => ({
    word: w,
    title: "Hard Working",
    titleArabic: "العمل الجاد",
    storyEnglish: `A hard-working worker paints the walls of the old library. He uses a big brush and works very fast. The room looks much brighter now.`,
    storyArabic: `عامل مجتهد يدهن جدران المكتبة القديمة. يستخدم فرشاة كبيرة ويعمل بسرعة كبيرة. الغرفة تبدو أكثر إشراقاً الآن.`,
    question: {
      question: "What is the hard-working worker doing in the old library?",
      options: [
        "Painting the walls with a big brush to make the room brighter",
        "Reading books in the corner quietly",
        "Repairing the wooden roof outside",
        "Planting flowers in the courtyard"
      ],
      answerIndex: 0,
      explanation: "يقوم العامل (worker) المجتهد بطلاء جدران المكتبة القديمة بفرشاة كبيرة لجعلها مشرقة."
    }
  }),

  // 421. chef
  chef: (w) => ({
    word: w,
    title: "A Talented Chef",
    titleArabic: "طباخ موهوب",
    storyEnglish: `The talented chef prepares a delicious meal in the kitchen. He adds fresh spices and vegetables to the pot. The smell of the food makes everyone hungry.`,
    storyArabic: `يُحضر طباخ موهوب وجبة لذيذة في المطبخ. يضيف توابل طازجة وخضروات للقدر. رائحة الطعام تجعل الجميع جائعين.`,
    question: {
      question: "How does the talented chef prepare the delicious meal?",
      options: [
        "By adding fresh spices and vegetables to the pot in the kitchen",
        "By ordering takeout food from another restaurant",
        "By serving only cold sandwiches",
        "By baking bread outside in the yard"
      ],
      answerIndex: 0,
      explanation: "يقوم الطاهي والطباخ (chef) الموهوب بتحضير وجبة شهية بإضافة التوابل والخضار الطازجة."
    }
  }),

  // 422. company
  company: (w) => ({
    word: w,
    title: "Tech Company",
    titleArabic: "شركة تقنية",
    storyEnglish: `They built a new company to develop computer programs. Many young people work there to create new ideas. It is a very exciting place for technology.`,
    storyArabic: `بنوا شركة جديدة لتطوير برامج الحاسوب. الكثير من الشباب يعملون هناك ليبتكروا أفكاراً جديدة. إنه مكان مثير جداً للتكنولوجيا.`,
    question: {
      question: "Why was the new company established?",
      options: [
        "To develop computer programs and foster new innovative ideas among young workers",
        "To sell vintage furniture and carpets",
        "To construct bridges and highway roads",
        "To harvest crops on a rural farm"
      ],
      answerIndex: 0,
      explanation: "تم تأسيس الشركة (company) الجديدة لتطوير برمجيات الحاسوب وابتكار أفكار تقنية رائدة."
    }
  }),


  // 424. pen
  pen: (w) => ({
    word: w,
    title: "A Blue Pen",
    titleArabic: "A Blue Pen",
    storyEnglish: `Sara always carried a blue pen in her university bag because she preferred writing her notes with it. One day, she accidentally left the pen in the library after finishing her study session. The next morning, she returned to the same desk and was surprised to find the pen exactly where she had left it. She smiled, picked it up, and decided to keep it in a small pocket so she would not lose it again.`,
    storyArabic: `كانت سارة تحمل دائمًا قلمًا أزرق في حقيبتها الجامعية لأنها تفضل كتابة ملاحظاتها به. وفي أحد الأيام، تركت القلم بالخطأ في المكتبة بعد إنهاء جلسة الدراسة. وفي صباح اليوم التالي، عادت إلى المكتب نفسه وتفاجأت عندما وجدت القلم في المكان الذي تركته فيه تمامًا. ابتسمت وأخذته وقررت الاحتفاظ به في جيب صغير حتى لا تفقده مرة أخرى.`,
    question: {
      question: "What is the main theme of this story?",
      options: [
        "A practical situation illustrating the word clearly",
        "An unrelated fictional adventure",
        "A scientific formula without context",
        "A historical debate between kings"
      ],
      answerIndex: 0,
      explanation: "توضح القصة الموقف وسياق الكلمة بشكل واضح ومباشر."
    }
  }),

  // 425. pencil
  pencil: (w) => ({
    word: w,
    title: "A Sharp Pencil",
    titleArabic: "A Sharp Pencil",
    storyEnglish: `Before the exam began, Maya made sure she had a sharp pencil ready on her desk. She knew that she might need to erase some answers and write them again if she made mistakes. During the exam, the pencil worked perfectly, and she finished all the questions before the time ended. Afterward, she placed it back in her pencil case and packed her things.`,
    storyArabic: `قبل بدء الاختبار، تأكدت مايا من وجود قلم رصاص حاد وجاهز على مكتبها. كانت تعرف أنها قد تحتاج إلى مسح بعض الإجابات وكتابتها مرة أخرى إذا ارتكبت أخطاء. وخلال الاختبار، عمل القلم بشكل ممتاز وأنهت جميع الأسئلة قبل انتهاء الوقت. وبعد ذلك، أعادته إلى مقلمتها وجهزت أغراضها.`,
    question: {
      question: "What is the main theme of this story?",
      options: [
        "A practical situation illustrating the word clearly",
        "An unrelated fictional adventure",
        "A scientific formula without context",
        "A historical debate between kings"
      ],
      answerIndex: 0,
      explanation: "توضح القصة الموقف وسياق الكلمة بشكل واضح ومباشر."
    }
  }),

  // 426. paper
  paper: (w) => ({
    word: w,
    title: "A Clean Piece",
    titleArabic: "قطعة نظيفة",
    storyEnglish: `Lay a clean piece of paper on the desk before you start writing. It helps to keep your work neat and tidy. Good preparation is the key.`,
    storyArabic: `ضع قطعة ورق نظيفة على المكتب قبل أن تبدأ الكتابة. يساعد ذلك في إبقاء عملك مرتباً ونظيفاً. التحضير الجيد هو المفتاح.`,
    question: {
      question: "Why should you place a clean piece of paper on the desk?",
      options: [
        "To keep your writing neat and tidy with good preparation",
        "To cover a broken computer monitor",
        "To make paper airplanes for a race",
        "To clean the windows of the room"
      ],
      answerIndex: 0,
      explanation: "يساعد وضع ورقة (paper) نظيفة ومرتبة على المكتب في تنظيم الكتابة والعمل المتقن."
    }
  }),

  // 427. class
  class: (w) => ({
    word: w,
    title: "Listening in Class",
    titleArabic: "الاستماع في الفصل",
    storyEnglish: `All the students in the class are listening to the history lecture. They take notes and ask many questions. The room is very quiet today.`,
    storyArabic: `كل الطلاب في الفصل يستمعون لمحاضرة التاريخ. يأخذون ملاحظات ويسألون الكثير من الأسئلة. الغرفة هادئة جداً اليوم.`,
    question: {
      question: "What are the students doing in the history class today?",
      options: [
        "Listening to the lecture, taking notes, and asking thoughtful questions",
        "Playing loud sports games in the hall",
        "Leaving the classroom without permission",
        "Sleeping during the presentation"
      ],
      answerIndex: 0,
      explanation: "يستمع الطلاب في الفصل (class) بانتباه لمحاضرة التاريخ ويدونون الملاحظات في هدوء."
    }
  }),

  // 428. lesson
  lesson: (w) => ({
    word: w,
    title: "Learning Science",
    titleArabic: "تعلم العلوم",
    storyEnglish: `We finished the math lesson and started a new one in science. The teacher explained the ideas clearly on the board. Learning new things is great.`,
    storyArabic: `أنهينا درس الرياضيات وبدأنا واحداً جديداً في العلوم. شرح المعلم الأفكار بوضوح على السبورة. تعلم أشياء جديدة أمر رائع.`,
    question: {
      question: "What happened after the students finished their math lesson?",
      options: [
        "They started a new science lesson with clear explanations on the board",
        "They went home immediately for the day",
        "They took a physical fitness exam outside",
        "They watched an action movie"
      ],
      answerIndex: 0,
      explanation: "بعد انتهاء درس الرياضيات بدأ الطلاب درساً (lesson) جديداً في العلوم بشرح واضح على السبورة."
    }
  }),

  // 429. homework
  homework: (w) => ({
    word: w,
    title: "Doing Homework",
    titleArabic: "أداء الواجب المنزلي",
    storyEnglish: `Layla finishes her homework before she goes to play outside. She wants to be ready for the class tomorrow. Hard work makes studying easier.`,
    storyArabic: `تنهي ليلى واجبها المنزلي قبل أن تذهب للعب في الخارج. تريد أن تكون مستعدة للفصل غداً. العمل الجاد يجعل الدراسة أسهل.`,
    question: {
      question: "Why does Layla complete her homework before going outside to play?",
      options: [
        "To be well prepared for tomorrow's class through diligent study",
        "Because playing outside is forbidden all week",
        "Because she lost her school backpack",
        "To help her friends clean the classroom"
      ],
      answerIndex: 0,
      explanation: "تنهي ليلى واجبها المنزلي (homework) أولاً لتكون مستعدة تماماً لدروس الغد قبل الذهاب للعب."
    }
  }),

  // 430. exam
  exam: (w) => ({
    word: w,
    title: "The Final Exam",
    titleArabic: "الاختبار النهائي",
    storyEnglish: `The final exam is tomorrow, so everyone is studying very hard. They sit in the hall and answer the questions. I hope they all pass.`,
    storyArabic: `الاختبار النهائي غداً، لذا الجميع يدرس بجد كبير. يجلسون في القاعة ويجيبون على الأسئلة. آمل أن ينجحوا جميعاً.`,
    question: {
      question: "Why is everyone studying hard today?",
      options: [
        "Because the final exam is scheduled for tomorrow in the hall",
        "Because the school year has officially ended",
        "Because they are going on a holiday trip",
        "Because classes were permanently canceled"
      ],
      answerIndex: 0,
      explanation: "يدرس الجميع بجد واجتهاد استعداداً لخوض الاختبار (exam) النهائي غداً في القاعة."
    }
  }),

  // 431. question
  question: (w) => ({
    word: w,
    title: "A Difficult Question",
    titleArabic: "سؤال صعب",
    storyEnglish: `The teacher asked a difficult question about the solar system. Sarah raised her hand and gave the right answer quickly. She is a very bright student.`,
    storyArabic: `طرح المعلم سؤالاً صعباً عن النظام الشمسي. رفعت سارة يدها وقدمت الإجابة الصحيحة بسرعة. هي طالبة ذكية جداً.`,
    question: {
      question: "How did Sarah respond to the difficult question about the solar system?",
      options: [
        "She raised her hand and gave the correct answer quickly and smartly",
        "She asked to leave the room immediately",
        "She looked up the answer in a dictionary",
        "She could not answer and remained silent"
      ],
      answerIndex: 0,
      explanation: "أجابت سارة بذكاء وسرعة على السؤال (question) الصعب الذي طرحه المعلم عن المجموعة الشمسية."
    }
  }),

  // 432. answer
  answer: (w) => ({
    word: w,
    title: "Writing the Answer",
    titleArabic: "كتابة الإجابة",
    storyEnglish: `Write your answer clearly at the bottom of the page. Do not forget to put your name at the top. Read everything twice before you finish.`,
    storyArabic: `اكتب إجابتك بوضوح في أسفل الصفحة. لا تنسَ أن تضع اسمك في الأعلى. اقرأ كل شيء مرتين قبل أن تنتهي.`,
    question: {
      question: "Where should you write your answer and what should you remember to do?",
      options: [
        "Write your answer clearly at the bottom and put your name at the top",
        "Write answers on the classroom blackboard only",
        "Erase all the text on the page",
        "Leave the page blank and submit it"
      ],
      answerIndex: 0,
      explanation: "يجب كتابة الإجابة (answer) بوضوح أسفل الصفحة مع تدوين الاسم في الأعلى والمراجعة مرتين."
    }
  }),

  // 433. language
  language: (w) => ({
    word: w,
    title: "Learning Languages",
    titleArabic: "تعلم اللغات",
    storyEnglish: `Learning a new language helps you travel and meet new people. Omar is practicing Spanish every evening with his friends. It is a very beautiful language.`,
    storyArabic: `تعلم لغة جديدة يساعدك على السفر ومقابلة أشخاص جدد. يتدرب عمر على الإسبانية كل مساء مع أصدقائه. إنها لغة جميلة جداً.`,
    question: {
      question: "Why is Omar practicing a new language every evening?",
      options: [
        "To help with traveling, meeting new people, and enjoying a beautiful language",
        "Because he wants to avoid talking to people",
        "To pass a physical driving test",
        "Because Spanish is the only language he knows"
      ],
      answerIndex: 0,
      explanation: "يساعد تعلم لغة (language) جديدة مثل الإسبانية في تسهيل السفر وتوسيع دائرة الصداقات والتواصل."
    }
  }),

  // 434. dictionary
  dictionary: (w) => ({
    word: w,
    title: "Using a Dictionary",
    titleArabic: "استخدام القاموس",
    storyEnglish: `Keep a dictionary near you when you read foreign books. It helps you find the meaning of words easily. It is an essential tool for students.`,
    storyArabic: `احتفظ بقاموس قربك عندما تقرأ كتباً أجنبية. يساعدك على إيجاد معنى الكلمات بسهولة. إنها أداة ضرورية للطلاب.`,
    question: {
      question: "How does keeping a dictionary nearby help students?",
      options: [
        "It makes finding the meaning of unfamiliar words easy when reading books",
        "It provides a flat surface for drawing pictures",
        "It stores physical bookmarks securely",
        "It replaces the need for reading"
      ],
      answerIndex: 0,
      explanation: "يعد القاموس والمعجم (dictionary) أداة ضرورية للطلاب للبحث عن معاني الكلمات وفهم الكتب."
    }
  }),

  // 435. pilot
  pilot: (w) => ({
    word: w,
    title: "The Pilot's Dream",
    titleArabic: "حلم الطيار",
    storyEnglish: `A professional pilot flies the large plane over the blue ocean. He looks at the controls and keeps everyone safe. Flying is his lifetime dream.`,
    storyArabic: `يقود طيار محترف الطائرة الكبيرة فوق المحيط الأزرق. ينظر إلى أدوات التحكم ويبقي الجميع آمنين. الطيران هو حلم حياته.`,
    question: {
      question: "What is the professional pilot's lifetime dream and responsibility?",
      options: [
        "Flying airplanes safely over the ocean while monitoring controls",
        "Building train locomotives in a factory",
        "Sailing cargo ships across seas",
        "Designing skyscrapers in cities"
      ],
      answerIndex: 0,
      explanation: "يقود الطيار (pilot) الطائرة بكفاءة عالية وأمان محققاً حلم حياته في التحليق والطيران."
    }
  }),

  // 436. farmer
  farmer: (w) => ({
    word: w,
    title: "The Busy Farmer",
    titleArabic: "المزارع النشيط",
    storyEnglish: `The farmer wakes up at dawn to plant seeds in the field. He enjoys watching the green crops grow under the sun. His work provides food for all.`,
    storyArabic: `يستيقظ المزارع عند الفجر ليزرع البذور في الحقل. يستمتع بمراقبة المحاصيل الخضراء تنمو تحت الشمس. عمله يوفر الطعام للجميع.`,
    question: {
      question: "What does the farmer do starting at dawn?",
      options: [
        "Plants seeds in the field and tends to crops that provide food for all",
        "Drives a bus to the airport",
        "Sells books in a city bookstore",
        "Teaches mathematics in a high school"
      ],
      answerIndex: 0,
      explanation: "يبدأ الفلاح والمزارع (farmer) عمله فجراً بزراعة البذور ورعاية المحاصيل التي توفر الغذاء للجميع."
    }
  }),

  // 437. writer
  writer: (w) => ({
    word: w,
    title: "The Famous Writer",
    titleArabic: "الكاتب المشهور",
    storyEnglish: `A famous writer sits in a cafe and types his new story. He likes the sound of the city around him. His books are read by many people.`,
    storyArabic: `يجلس كاتب مشهور في مقهى ويكتب قصته الجديدة. يحب صوت المدينة من حوله. كتبه يقرؤها الكثير من الناس.`,
    question: {
      question: "What does the famous writer enjoy doing in the cafe?",
      options: [
        "Typing his new story while inspired by the sound of the city",
        "Cooking meals for the cafe customers",
        "Fixing broken cafe furniture",
        "Selling coffee cups to tourists"
      ],
      answerIndex: 0,
      explanation: "يجلس الكاتب (writer) في المقهى ليكتب قصصه ورواياته الجديدة الملهمة التي يقرؤها الكثيرون."
    }
  }),

  // 438. artist
  artist: (w) => ({
    word: w,
    title: "Creating Art",
    titleArabic: "إبداع الفن",
    storyEnglish: `The artist paints a colorful portrait of a beautiful landscape. She chooses her colors carefully to show the light. Her painting will be in a museum.`,
    storyArabic: `ترسم الفنانة صورة ملونة لمنظر طبيعي جميل. تختار ألوانها بعناية لتظهر الضوء. لوحتها ستكون في متحف.`,
    question: {
      question: "What is the artist painting and where will it be displayed?",
      options: [
        "A colorful landscape portrait capturing light, destined for a museum",
        "A commercial advertisement on a street wall",
        "A blueprint for a bridge project",
        "A map of local bus routes"
      ],
      answerIndex: 0,
      explanation: "ترسم الفنانة (artist) لوحة فنية بديعة بألوان متناسقة ستعرض في أحد المتاحف."
    }
  }),

  // 439. actor
  actor: (w) => ({
    word: w,
    title: "The Theater Performance",
    titleArabic: "العرض المسرحي",
    storyEnglish: `A talented actor performs a role in the big theatre tonight. He wears a costume and speaks with a clear voice. The audience is clapping loudly.`,
    storyArabic: `يؤدي ممثل موهوب دوراً في المسرح الكبير الليلة. يرتدي زياً ويتحدث بصوت واضح. الجمهور يصفق بصوت عالٍ.`,
    question: {
      question: "What makes the actor's performance in the theater tonight successful?",
      options: [
        "He wears a costume, speaks clearly, and receives loud applause from the audience",
        "He sits quietly in the back row without speaking",
        "He repairs the stage lighting during the show",
        "He sells tickets at the theater entrance"
      ],
      answerIndex: 0,
      explanation: "يقدم الممثل (actor) الموهوب أداءً مسرحياً رائعاً ومتقناً ينال تصفيق وإعجاب الجمهور."
    }
  }),

  // 440. employee
  employee: (w) => ({
    word: w,
    title: "Teamwork",
    titleArabic: "العمل الجماعي",
    storyEnglish: `Every employee in the office has a specific task to complete. They use computers and phones to talk to clients. Teamwork is the best way to succeed.`,
    storyArabic: `كل موظف في المكتب لديه مهمة محددة لينهيها. يستخدمون الحواسيب والهواتف ليتحدثوا مع العملاء. العمل الجماعي هو أفضل طريقة للنجاح.`,
    question: {
      question: "How do employees in the office accomplish their goals?",
      options: [
        "By completing specific tasks, communicating with clients, and practicing teamwork",
        "By working alone without communicating with anyone",
        "By closing the office during working hours",
        "By avoiding computer usage"
      ],
      answerIndex: 0,
      explanation: "يؤدي كل موظف (employee) مهامه المحددة ويتعاون مع زملائه لخدمة العملاء وتحقيق النجاح الجماعي."
    }
  }),

  // 441. customer
  customer: (w) => ({
    word: w,
    title: "Shopping Visit",
    titleArabic: "زيارة التسوق",
    storyEnglish: `The customer walks into the store to buy a gift for her friend. She asks the shop assistant for some advice. She leaves with a happy smile.`,
    storyArabic: `تمشي الزبونة إلى المتجر لتشتري هدية لصديقتها. تطلب من مساعد المتجر بعض النصيحة. تغادر بابتسامة سعيدة.`,
    question: {
      question: "Why did the customer visit the store and how did she feel leaving?",
      options: [
        "To buy a gift for her friend with help from the assistant, leaving with a happy smile",
        "To return an item angrily without speaking",
        "To apply for an engineering job",
        "To repair the store's air conditioner"
      ],
      answerIndex: 0,
      explanation: "زارت الزبونة والعميلة (customer) المتجر لشراء هدية مميزة لصديقتها بمساعدة البائع وغادرت سعيدة."
    }
  }),

  // 442. science
  science: (w) => ({
    word: w,
    title: "The World of Science",
    titleArabic: "عالم العلوم",
    storyEnglish: `Studying science helps us understand how the world works. From plants to stars, everything is interesting to learn. Classes are always full of wonders.`,
    storyArabic: `دراسة العلوم تساعدنا على فهم كيف يعمل العالم. من النباتات إلى النجوم، كل شيء ممتع للتعلم. الفصول دائماً مليئة بالعجائب.`,
    question: {
      question: "Why is studying science considered exciting and valuable?",
      options: [
        "Because it explains how the world works from plants to stars with wonder",
        "Because it only deals with ancient languages",
        "Because it is strictly about typing computer code",
        "Because it requires memorizing bus schedules"
      ],
      answerIndex: 0,
      explanation: "تساعد مادة ومجال العلوم (science) في فهم طبيعة العالم من النباتات وحتى النجوم واستكشاف عجائب الطبيعة."
    }
  }),
  // 443. history
  history: (w) => ({
    word: w,
    title: "Learning History",
    titleArabic: "تعلم التاريخ",
    storyEnglish: `Learning about history helps us know about the past and our ancestors. It is a long story of human experience and progress. Reading is very educational.`,
    storyArabic: `تعلم التاريخ يساعدنا على معرفة الماضي وأسلافنا. إنها قصة طويلة من التجربة البشرية والتقدم. القراءة تعليمية جداً.`,
    question: {
      question: "Why is learning history valuable according to the story?",
      options: [
        "It helps us understand the past, learn about our ancestors, and see human progress",
        "It teaches us only how to build modern computers",
        "It is strictly for memorizing bus routes",
        "It is used solely for practicing athletic exercises"
      ],
      answerIndex: 0,
      explanation: "يساعدنا تعلم التاريخ (history) في فهم الماضي ومعرفة أسلافنا وتتبع مسيرة التقدم البشري."
    }
  }),

  // 444. math
  math: (w) => ({
    word: w,
    title: "Solving Math",
    titleArabic: "حل الرياضيات",
    storyEnglish: `Solving math problems makes our minds very strong and sharp. It is important for engineering, business, and daily life. You can use numbers for everything.`,
    storyArabic: `حل مسائل الرياضيات يجعل عقولنا قوية وحادة جداً. إنه مهم للهندسة، والأعمال، والحياة اليومية. يمكنك استخدام الأرقام لكل شيء.`,
    question: {
      question: "How does solving math problems benefit us?",
      options: [
        "It strengthens and sharpens our minds and is essential for engineering, business, and daily life",
        "It only helps when traveling by airplane",
        "It replaces the need for speaking any language",
        "It is only useful for cooking soup"
      ],
      answerIndex: 0,
      explanation: "يجعل حل مسائل الرياضيات (math) العقول قوية وحادة وهو ضروري لمجالات الهندسة والأعمال والحياة اليومية."
    }
  }),

  // 445. i
  i: (w) => ({
    word: w,
    title: "My Reading Time",
    titleArabic: "وقت القراءة الخاص بي",
    storyEnglish: `I love reading interesting stories in the library every afternoon. It makes me feel very calm and happy. I find new worlds in every single book.`,
    storyArabic: `أنا أحب قراءة القصص الممتعة في المكتبة كل ظهيرة. هذا يجعلني أشعر بالهدوء والسعادة. أجد عوالم جديدة في كل كتاب.`,
    question: {
      question: "What does the narrator love doing every afternoon in the library?",
      options: [
        "Reading interesting stories that bring calm, happiness, and new worlds",
        "Sleeping on the library floor",
        "Painting the outside library fence",
        "Fixing broken computer keyboards"
      ],
      answerIndex: 0,
      explanation: "يستمتع المتحدث بضمير المتكلم (I) بقراءة القصص الشيقة في المكتبة يومياً للشعور بالهدوء واستكشاف عوالم جديدة."
    }
  }),

  // 446. you
  you: (w) => ({
    word: w,
    title: "Smart Student",
    titleArabic: "الطالب الذكي",
    storyEnglish: `You are a very smart student in this class. The teacher is proud of your hard work and good behavior. Keep doing your best every day.`,
    storyArabic: `أنت طالب ذكي جداً في هذا الفصل. يفخر المعلم باجتهادك وحسن سلوكك. استمر في بذل أفضل ما لديك كل يوم.`,
    question: {
      question: "Why is the teacher proud of the student?",
      options: [
        "Because of the student's hard work, intelligence, and good behavior in class",
        "Because the student arrived late every day",
        "Because the student forgot all their books",
        "Because the student refused to do homework"
      ],
      answerIndex: 0,
      explanation: "يفخر المعلم بجهود الطالب الذكي وحسن سلوكه واجتهاده اليومي مستخدماً ضمير المخاطب (you)."
    }
  }),

  // 447. he
  he: (w) => ({
    word: w,
    title: "After a Long Day",
    titleArabic: "بعد يوم طويل",
    storyEnglish: `A man works in a big office. He is very tired after a long day and drives home to rest with his family. Watching movies before sleeping is his favorite way to relax.`,
    storyArabic: `يعمل رجل في مكتب كبير. هو متعب جداً بعد يوم طويل ويقود سيارته إلى المنزل ليرتاح مع عائلته. مشاهدة الأفلام قبل النوم هي طريقته المفضلة للاسترخاء.`,
    question: {
      question: "What does the man do after a long, tiring day at work?",
      options: [
        "He drives home to rest with his family and relaxes by watching movies",
        "He continues working all night at the office without sleep",
        "He goes hiking up a distant mountain immediately",
        "He paints the exterior walls of his workplace"
      ],
      answerIndex: 0,
      explanation: "يعود الرجل المتعب بضمير الغائب (he) إلى منزله ليرتاح مع عائلته ويستمتع بمشاهدة الأفلام."
    }
  }),

  // 448. she
  she: (w) => ({
    word: w,
    title: "Decorating the Home",
    titleArabic: "تزيين المنزل",
    storyEnglish: `Layla brings fresh flowers to her house. She puts them in a vase on the table. The flowers look beautiful and smell very nice. Decorating her home makes Layla happy.`,
    storyArabic: `تحضر ليلى أزهاراً طازجة إلى منزلها. هي تضعها في مزهرية على الطاولة. تبدو الأزهار جميلة ورائحتها لطيفة جداً. تزيين منزلها يجعل ليلى سعيدة.`,
    question: {
      question: "What does Layla do with the fresh flowers she brings home?",
      options: [
        "She places them in a vase on the table to decorate and brighten her home",
        "She gives them away to strangers on the street",
        "She plants them on the kitchen floor",
        "She locks them away in a dark cupboard"
      ],
      answerIndex: 0,
      explanation: "تضع ليلى بضمير الغائب للمؤنث (she) الأزهار الطازجة في مزهرية على الطاولة لتزيين منزلها."
    }
  }),

  // 449. it
  it: (w) => ({
    word: w,
    title: "The Happy Cat",
    titleArabic: "القطة السعيدة",
    storyEnglish: `The cat sees a big box. It hides inside the small space while the sun shines outside. The animal feels very safe there.`,
    storyArabic: `ترى القطة صندوقاً كبيراً. هي تختبئ بداخله في تلك المساحة الصغيرة بينما تشرق الشمس في الخارج. يشعر الحيوان بالأمان هناك.`,
    question: {
      question: "Where does the cat hide and how does it feel?",
      options: [
        "Inside the box where it feels cozy and safe while the sun shines outside",
        "On top of a tall electricity pole in the rain",
        "Under a moving car in the street",
        "Inside a deep pond of water"
      ],
      answerIndex: 0,
      explanation: "تختبئ القطة المعبر عنها بضمير غير العاقل (it) داخل الصندوق وتشعر بالأمان والراحة."
    }
  }),

  // 450. we
  we: (w) => ({
    word: w,
    title: "Visiting Grandmother",
    titleArabic: "زيارة الجدة",
    storyEnglish: `We visit our grandmother every Friday to have lunch together. She cooks delicious food, and we talk about many fun things. We love being with her.`,
    storyArabic: `نحن نزور جدتنا كل جمعة لنتناول الغداء معاً. هي تطبخ طعاماً لذيذاً، ونحن نتحدث عن أشياء ممتعة كثيرة. نحن نحب التواجد معها.`,
    question: {
      question: "What do the family members do every Friday when visiting grandmother?",
      options: [
        "They have lunch together, chat about fun topics, and enjoy spending time with her",
        "They clean the outside roof in silence",
        "They leave immediately without eating lunch",
        "They watch television in separate rooms"
      ],
      answerIndex: 0,
      explanation: "تزور العائلة بضمير المتكلمين (we) الجدة كل جمعة لتناول الغداء وتبادل الأحاديث الممتعة والمحبة."
    }
  }),

  // 451. they
  they: (w) => ({
    word: w,
    title: "Energetic Children",
    titleArabic: "الأطفال النشيطون",
    storyEnglish: `The children play in the garden, and they laugh loudly under the trees. They run and jump because they are very energetic today. Everyone looks happy.`,
    storyArabic: `يلعب الأطفال في الحديقة، ويضحكون بصوت عالٍ تحت الأشجار. هم يركضون ويقفزون لأنهم نشيطون جداً اليوم. الجميع يبدون سعداء.`,
    question: {
      question: "Why are the children running, jumping, and laughing under the trees?",
      options: [
        "Because they are full of energy and enjoying playing happily in the garden",
        "Because they are scared of a passing storm",
        "Because they are looking for their lost school books",
        "Because they are doing physical labor for a factory"
      ],
      answerIndex: 0,
      explanation: "يلعب الأطفال النشيطون بضمير الغائب للجمع (they) ويمرحون في الحديقة تحت الأشجار بسعادة."
    }
  }),

  // 452. my
  my: (w) => ({
    word: w,
    title: "Birthday Surprise",
    titleArabic: "مفاجأة عيد الميلاد",
    storyEnglish: `My friend Omar gives me a nice birthday gift today. I am so excited to open it now. It is a wonderful surprise from him.`,
    storyArabic: `يعطيني صديقي عمر هدية عيد ميلاد خاصة بي اليوم. أنا متحمس جداً لفتحها الآن. إنها مفاجأة رائعة منه.`,
    question: {
      question: "What does Omar give his friend for their birthday?",
      options: [
        "A wonderful birthday gift as an exciting surprise",
        "A difficult math homework assignment",
        "A pair of old worn-out shoes",
        "A recipe for baking bread"
      ],
      answerIndex: 0,
      explanation: "قدم الصديق هدية مفاجئة لصديقه بضمير الملكية (my) في يوم ميلاده."
    }
  }),

  // 453. your
  your: (w) => ({
    word: w,
    title: "Posture Tips",
    titleArabic: "نصائح للجلوس",
    storyEnglish: `This chair is for your comfort when you sit down. Keep a straight back and rest for a while here.`,
    storyArabic: `هذا الكرسي لك عندما تجلس. حافظ على استقامة ظهرك واسترح قليلاً هنا.`,
    question: {
      question: "What is recommended when sitting in this comfortable chair?",
      options: [
        "Keeping a straight back and resting comfortably for a while",
        "Jumping continuously on the chair",
        "Carrying the chair up a steep hill",
        "Painting the chair with dark colors"
      ],
      answerIndex: 0,
      explanation: "تم توفير الكرسي لراحة المخاطب بضمير الملكية (your) مع نصيحة الحفاظ على استقامة الظهر."
    }
  }),

  // 454. his
  his: (w) => ({
    word: w,
    title: "Ali's Art",
    titleArabic: "فن علي",
    storyEnglish: `Ali likes to draw pictures. His art is full of bright and bold colors. Everyone says the talent belongs to him.`,
    storyArabic: `يحب علي رسم الصور. له أعمال فنية مليئة بالألوان الساطعة والجريئة. يقول الجميع إن لديه موهبة رائعة.`,
    question: {
      question: "How are Ali's artworks described in the story?",
      options: [
        "Full of bright and bold colors showcasing his remarkable talent",
        "Completely black and white without any colors",
        "Made exclusively from stone and iron",
        "Hidden where nobody can ever see them"
      ],
      answerIndex: 0,
      explanation: "تتميز رسومات علي المعبر عنها بضمير الملكية للمذكر (his) بالألوان الزاهية والبراعة الفنية."
    }
  }),

  // 455. her
  her: (w) => ({
    word: w,
    title: "Sarah's Baking",
    titleArabic: "مخبوزات سارة",
    storyEnglish: `Sarah bakes a cake every Saturday morning. She adds sugar and flour with care. Her secret recipe is the best.`,
    storyArabic: `تخبز سارة كعكة كل صباح سبت. تضيف السكر والطحين بعناية. الوصفة السرية خاصتها هي الأفضل.`,
    question: {
      question: "What makes Sarah's Saturday baking special?",
      options: [
        "Carefully adding ingredients and using her secret recipe which is the best",
        "Buying pre-made frozen cakes from a supermarket",
        "Using only cold water without any sugar or flour",
        "Baking without turning on the oven"
      ],
      answerIndex: 0,
      explanation: "تخبز سارة كعكها اللذيذ كل سبت وفق وصفتها السرية بضمير الملكية للمؤنث (her)."
    }
  }),

  // 456. our
  our: (w) => ({
    word: w,
    title: "In the Classroom",
    titleArabic: "في الفصل",
    storyEnglish: `Our teacher asks everyone to read the lesson carefully. We answer the questions together, and learning becomes more enjoyable for us.`,
    storyArabic: `يطلب معلمنا من الجميع قراءة الدرس بعناية. لنا دور في الإجابة عن الأسئلة معًا، فيصبح التعلّم أكثر متعة.`,
    question: {
      question: "What happens in the classroom that makes learning enjoyable?",
      options: [
        "The teacher asks everyone to read carefully and students answer questions together",
        "The classroom remains completely dark and silent all day",
        "Students leave early without completing the lesson",
        "The teacher only talks about sports games"
      ],
      answerIndex: 0,
      explanation: "يطلب المعلم من طلابه بضمير الملكية للمتكلمين (our) القراءة والتعاون في الإجابة لجعل الدرس ممتعاً."
    }
  }),

  // 457. their
  their: (w) => ({
    word: w,
    title: "Studying Together",
    titleArabic: "الدراسة معاً",
    storyEnglish: `The students study for the big exam. Their teacher gives them extra time to ask questions. Everyone works together and hopes for good grades.`,
    storyArabic: `يدرس الطلاب للاختبار الكبير. لهم وقت إضافي من المعلم لطرح الأسئلة. يعمل الجميع معًا ويأملون في الحصول على درجات جيدة.`,
    question: {
      question: "How does the teacher help the students prepare for their big exam?",
      options: [
        "By providing extra time for questions and encouraging collaborative study for good grades",
        "By canceling the exam without notice",
        "By refusing to answer any student inquiries",
        "By giving them an unrelated novel to read"
      ],
      answerIndex: 0,
      explanation: "يمنح المعلم الطلاب وقتاً إضافياً لطرح الأسئلة ومراجعة دروسهم بضمير الملكية للغائبين (their) لتحقيق درجات متميزة."
    }
  }),

  // 458. in
  in: (w) => ({
    word: w,
    title: "The Aquarium",
    titleArabic: "حوض السمك",
    storyEnglish: `The fish swims fast in the blue water of the big aquarium. It looks very happy and active today. Many people watch it with great interest.`,
    storyArabic: `السمكة تسبح بسرعة في الماء الأزرق للحوض الكبير. تبدو سعيدة ونشيطة جداً اليوم. الكثير من الناس يراقبونها باهتمام كبير.`,
    question: {
      question: "What is the fish doing inside the big aquarium?",
      options: [
        "Swimming fast and actively in the clear blue water as visitors watch with interest",
        "Hiding motionless under dark mud all day",
        "Trying to jump out of the aquarium onto the floor",
        "Sleeping inside an empty shell without moving"
      ],
      answerIndex: 0,
      explanation: "تسبح السمكة بحيوية وسرعة داخل مياه الحوض الأزرق الكبير باستخدام حرف الجر (in)."
    }
  }),
  // 459. on
  on: (w) => ({
    word: w,
    title: "Relaxing Cat",
    titleArabic: "القطة المسترخية",
    storyEnglish: `The cat sleeps quietly on the soft sofa in the living room. It stays there for a long time during the afternoon. The house is very peaceful.`,
    storyArabic: `تنام القطة بهدوء على الأريكة الناعمة في غرفة المعيشة. تبقى هناك لوقت طويل خلال فترة الظهيرة. المنزل هادئ جداً.`,
    question: {
      question: "Where does the cat sleep during the peaceful afternoon?",
      options: [
        "On the soft sofa in the living room",
        "Under the kitchen table",
        "Outside in the rainy yard",
        "Inside a locked closet"
      ],
      answerIndex: 0,
      explanation: "تنام القطة بهدوء على (on) الأريكة الناعمة في غرفة المعيشة."
    }
  }),

  // 460. under
  under: (w) => ({
    word: w,
    title: "Cooling Down",
    titleArabic: "الاستراحة في الظل",
    storyEnglish: `The dog hides under the large tree to stay away from the hot sun. He is tired and wants to sleep for a while. He feels comfortable in the shade.`,
    storyArabic: `يختبئ الكلب تحت الشجرة الكبيرة ليبتعد عن الشمس الحارة. هو متعب ويريد النوم لفترة. يشعر بالراحة في الظل.`,
    question: {
      question: "Why does the dog hide under the large tree?",
      options: [
        "To stay away from the hot sun and rest comfortably in the shade",
        "To look for food in the branches",
        "To bark at passing cars on the highway",
        "To play with other dogs in the river"
      ],
      answerIndex: 0,
      explanation: "يختبئ الكلب تحت (under) الشجرة الكبيرة لتفادي حرارة الشمس والاستراحة في الظل."
    }
  }),

  // 461. at
  at: (w) => ({
    word: w,
    title: "Station Meeting",
    titleArabic: "اللقاء في المحطة",
    storyEnglish: `We will meet at the station to take the train to the city. We have our tickets and bags ready for the trip. It will be a fun day.`,
    storyArabic: `سنلتقي عند المحطة لنستقل القطار إلى المدينة. لدينا تذاكرنا وحقائبنا جاهزة للرحلة. سيكون يوماً ممتعاً.`,
    question: {
      question: "Where will the travelers meet before taking the train to the city?",
      options: [
        "At the station with their tickets and bags ready",
        "At the top of a mountain",
        "Inside a grocery supermarket",
        "At the airport entrance gate"
      ],
      answerIndex: 0,
      explanation: "يلتقي المسافرون عند (at) المحطة مع تجهيز التذاكر والحقائب لركوب القطار."
    }
  }),

  // 462. to
  to: (w) => ({
    word: w,
    title: "A Perfect Walk",
    titleArabic: "نزهة مثالية",
    storyEnglish: `I walk to the park because the weather is very nice today. I want to see the green grass and the beautiful flowers. It is a perfect day for walking.`,
    storyArabic: `أنا أمشي إلى الحديقة لأن الطقس جميل جداً اليوم. أريد رؤية العشب الأخضر والزهور الجميلة. إنه يوم مثالي للمشي.`,
    question: {
      question: "Why is the narrator walking to the park?",
      options: [
        "Because the weather is very nice and they want to see green grass and flowers",
        "Because they need to fix a broken car",
        "To catch an early morning train",
        "To buy heavy furniture"
      ],
      answerIndex: 0,
      explanation: "يمشي المتحدث إلى (to) الحديقة للاستمتاع بالطقس الجميل والمناظر الطبيعية الخضراء."
    }
  }),

  // 463. from
  from: (w) => ({
    word: w,
    title: "Letter from a Friend",
    titleArabic: "رسالة من صديق",
    storyEnglish: `This letter comes from my friend who lives in another country. It has many stories about his new life there. I enjoy reading it every time.`,
    storyArabic: `هذه الرسالة تأتي من صديقي الذي يعيش في بلد آخر. لديها الكثير من القصص عن حياته الجديدة هناك. أنا أستمتع بقراءتها في كل مرة.`,
    question: {
      question: "Where does the letter come from and what does it contain?",
      options: [
        "From a friend living in another country, filled with stories about his new life",
        "From an unknown bank about unpaid debts",
        "From a school teacher regarding an exam",
        "From a newspaper publishing company"
      ],
      answerIndex: 0,
      explanation: "وصلت الرسالة من (from) صديق يعيش في بلد آخر متضمنة تفاصيل حياته الجديدة."
    }
  }),

  // 464. with
  with: (w) => ({
    word: w,
    title: "Coffee with Sister",
    titleArabic: "قهوة مع الأخت",
    storyEnglish: `Sara drinks coffee with her sister in the cafe near the shop. They talk about their plans for the upcoming weekend. They are very close friends.`,
    storyArabic: `تشرب سارة القهوة مع أختها في المقهى قرب المتجر. تتحدثان عن خططهما لعطلة نهاية الأسبوع القادمة. هما صديقتان مقربتان جداً.`,
    question: {
      question: "What are Sara and her sister doing at the cafe?",
      options: [
        "Drinking coffee together and discussing their plans for the upcoming weekend",
        "Working as chefs in the kitchen",
        "Reading books silently without talking",
        "Buying groceries for their home"
      ],
      answerIndex: 0,
      explanation: "تشرب سارة القهوة برفقة ومع (with) أختها في المقهى للتحدث عن خططهما للعطلة."
    }
  }),

  // 465. without
  without: (w) => ({
    word: w,
    title: "Need Your Tools",
    titleArabic: "الحاجة للأدوات",
    storyEnglish: `You cannot finish the math homework without using a pen and paper. It is hard to solve the problems in your head only. Take your time to write.`,
    storyArabic: `لا يمكنك إنهاء واجب الرياضيات بدون استخدام قلم وورقة. من الصعب حل المسائل في رأسك فقط. خذ وقتك في الكتابة.`,
    question: {
      question: "Why can't you finish the math homework without pen and paper?",
      options: [
        "Because it is difficult to solve all the math problems in your head only",
        "Because pen and paper are required to enter the classroom",
        "Because the teacher forbade mental thinking",
        "Because the homework is an oral speech"
      ],
      answerIndex: 0,
      explanation: "يصعب حل مسائل الرياضيات ذهنياً فقط بدون (without) الاستعانة بالقلم والورقة للتدوين."
    }
  }),

  // 466. and
  and: (w) => ({
    word: w,
    title: "Healthy Dinner",
    titleArabic: "عشاء صحي",
    storyEnglish: `Ahmad ate an apple. Then he drank some cold juice. He felt full after dinner. And this made him continue eating healthy food.`,
    storyArabic: `أكل أحمد تفاحة. ثم شرب عصيرًا باردًا. شعر بالشبع بعد العشاء. وهذا يجعله يستمر على الطعام الصحي.`,
    question: {
      question: "What did Ahmad do that encouraged him to continue eating healthy food?",
      options: [
        "He ate an apple, drank cold juice, and felt pleasantly full after dinner",
        "He skipped dinner and went to bed hungry",
        "He bought fast food from a street cart",
        "He ate only sugary candy"
      ],
      answerIndex: 0,
      explanation: "تناول أحمد تفاحة وشرب عصيراً و (and) شعر بالشبع مما شجعه على الاستمرار في الغذاء الصحي."
    }
  }),

  // 467. but
  but: (w) => ({
    word: w,
    title: "Beach Day",
    titleArabic: "يوم الشاطئ",
    storyEnglish: `I want to go to the beach, but it is raining outside today. I will stay at home and read my favorite book instead. Maybe I can go tomorrow.`,
    storyArabic: `أريد الذهاب للشاطئ، لكنها تمطر في الخارج اليوم. سأبقى في المنزل وأقرأ كتابي المفضل بدلاً من ذلك. ربما أستطيع الذهاب غداً.`,
    question: {
      question: "Why didn't the narrator go to the beach today?",
      options: [
        "Because it is raining outside, so they stayed home to read a book instead",
        "Because the beach was completely closed",
        "Because they lost their swimming gear",
        "Because they had to work all day at the office"
      ],
      answerIndex: 0,
      explanation: "أراد المتحدث الذهاب للشاطئ لكن (but) هطول المطر جعله يفضل البقاء وقراءة كتاب."
    }
  }),

  // 468. or
  or: (w) => ({
    word: w,
    title: "Morning Drink",
    titleArabic: "مشروب الصباح",
    storyEnglish: `Do you want coffee or tea for your drink this morning? I can prepare both for you if you like. Just tell me what you prefer.`,
    storyArabic: `هل تريد قهوة أو شاياً لمشروبك هذا الصباح؟ يمكنني تحضير كليهما لك إذا أحببت. فقط أخبرني بما تفضله.`,
    question: {
      question: "What choice is offered for the morning drink?",
      options: [
        "Choosing between coffee or tea according to preference",
        "Choosing between hot soup or fruit juice",
        "Choosing between ice cream or cake",
        "Choosing between milk or plain cold water"
      ],
      answerIndex: 0,
      explanation: "يتم التخيير بين القهوة أو (or) الشاي كمشروب صباحي وفق رغبة الشخص."
    }
  }),

  // 469. because
  because: (w) => ({
    word: w,
    title: "Happy Birthday Gift",
    titleArabic: "هدية عيد ميلاد سعيدة",
    storyEnglish: `The girl is happy because she got a new bike for her birthday. She rides it in the park and smiles at everyone. It is a very fast bike.`,
    storyArabic: `الفتاة سعيدة لأنها حصلت على دراجة جديدة لعيد ميلادها. تركبها في الحديقة وتبتسم للجميع. إنها دراجة سريعة جداً.`,
    question: {
      question: "Why is the girl feeling so happy?",
      options: [
        "Because she received a fast new bike for her birthday",
        "Because school was cancelled for the week",
        "Because she won a swimming contest",
        "Because she baked a big cake"
      ],
      answerIndex: 0,
      explanation: "تشعر الفتاة بالسعادة لأن (because) والسبب هو حصولها على دراجة جديدة لعيد ميلادها."
    }
  }),

  // 470. after
  after: (w) => ({
    word: w,
    title: "After the Lesson",
    titleArabic: "بعد الدرس",
    storyEnglish: `After the lesson, the students go out to play in the yard. They run around and enjoy the fresh air together. They are very tired but happy.`,
    storyArabic: `بعد الدرس، يخرج الطلاب للعب في الساحة. يركضون ويستمتعون بالهواء الطلق معاً. هم متعبون جداً لكنهم سعداء.`,
    question: {
      question: "What do the students do after their lesson ends?",
      options: [
        "They go out to play and run in the yard, enjoying fresh air together",
        "They immediately start another difficult exam",
        "They clean the entire school building",
        "They go home to sleep immediately"
      ],
      answerIndex: 0,
      explanation: "يخرج الطلاب للعب والمرح في ساحة المدرسة بعد (after) انتهاء الدرس."
    }
  }),

  // 471. before
  before: (w) => ({
    word: w,
    title: "Clean Hands",
    titleArabic: "أيدٍ نظيفة",
    storyEnglish: `Please wash your hands before you eat your lunch at the table. It is very important to stay clean and healthy. Good habits are great for everyone.`,
    storyArabic: `من فضلك اغسل يديك قبل أن تتناول غداءك على الطاولة. من المهم جداً أن تبقى نظيفاً وبصحة جيدة. العادات الجيدة رائعة للجميع.`,
    question: {
      question: "Why should you wash your hands before eating lunch?",
      options: [
        "To maintain cleanliness, hygiene, and stay healthy with good habits",
        "To cool down from hot weather",
        "To test if the water tap works",
        "Because the table is made of wood"
      ],
      answerIndex: 0,
      explanation: "يُنصح بغسل اليدين قبل (before) تناول وجبة الغداء للحفاظ على النظافة والصحة."
    }
  }),

  // 472. between
  between: (w) => ({
    word: w,
    title: "The Small Shop",
    titleArabic: "المتجر الصغير",
    storyEnglish: `The small shop is between the bank and the big bookstore on the street. It sells delicious bread and sweets every day. Many people visit it often.`,
    storyArabic: `المتجر الصغير يقع بين البنك والمكتبة الكبيرة في الشارع. يبيع خبزاً وحلويات لذيذة كل يوم. الكثير من الناس يزورونه كثيراً.`,
    question: {
      question: "Where is the small bakery shop located on the street?",
      options: [
        "Between the bank and the big bookstore",
        "Inside the railway central station",
        "Behind a large sports stadium",
        "Across from the city airport"
      ],
      answerIndex: 0,
      explanation: "يقع المتجر الصغير في الموقع المكاني بين (between) البنك والمكتبة الكبيرة."
    }
  }),

  // 473. about
  about: (w) => ({
    word: w,
    title: "Learning History",
    titleArabic: "تعلم التاريخ",
    storyEnglish: `We talk about the history of the world in our social studies class. The teacher gives us interesting facts every single day. We learn many new things.`,
    storyArabic: `نحن نتحدث عن تاريخ العالم في حصة الدراسات الاجتماعية. يعطينا المعلم حقائق ممتعة كل يوم. نحن نتعلم الكثير من الأشياء الجديدة.`,
    question: {
      question: "What do the students discuss in their social studies class?",
      options: [
        "They talk about world history and learn interesting new facts every day",
        "They discuss modern airplane maintenance",
        "They practice swimming techniques",
        "They solve advanced geometry equations"
      ],
      answerIndex: 0,
      explanation: "يتحدث الطلاب ويدرسون عن (about) تاريخ العالم واكتشاف حقائق ممتعة يومياً."
    }
  }),

  // 474. always
  always: (w) => ({
    word: w,
    title: "Summer Days",
    titleArabic: "أيام الصيف",
    storyEnglish: `The sun is always bright in the summer, and people like to go outside. They enjoy the warm weather and the long days. It is the best time for trips.`,
    storyArabic: `الشمس دائماً ساطعة في الصيف، والناس يحبون الخروج. يستمتعون بالطقس الدافئ والأيام الطويلة. إنه أفضل وقت للرحلات.`,
    question: {
      question: "What is the summer weather always like and how do people enjoy it?",
      options: [
        "The sun is always bright, and people enjoy warm weather and going on outdoor trips",
        "It is always freezing and covered in deep snow",
        "It is always too dark to leave the house",
        "It is constantly stormy with heavy winds every day"
      ],
      answerIndex: 0,
      explanation: "تكون الشمس دائماً (always) ساطعة ودافئة في فصل الصيف مما يحفز الناس على الرحلات."
    }
  })
};

/**
 * Universal dynamic story builder for ANY English word across all 3012 vocabulary words.
 * Generates an authentic, fully contextual story with beginning, situation,
 * natural usage of the word, conclusion, and aligned Arabic translation.
 * ZERO meta-language. NO "learning English", NO "practices key words", NO forced declarations.
 */
function buildAlgorithmicWordStory(word: Word, storyIndex: number): SingleWordStory {
  const w = word.word.trim();
  const ar = word.arabic.trim();
  const pos = word.partOfSpeech || 'other';

  // Character names pool with authentic Arabic and English pairings
  const characters = [
    { en: "Zaid", ar: "زيد" },
    { en: "Mona", ar: "منى" },
    { en: "Tariq", ar: "طارق" },
    { en: "Layla", ar: "ليلى" },
    { en: "Karim", ar: "كريم" },
    { en: "Sara", ar: "سارة" },
    { en: "Omar", ar: "عمر" },
    { en: "Nour", ar: "نور" },
    { en: "Hassan", ar: "حسن" },
    { en: "Fatima", ar: "فاطمة" },
    { en: "Bilal", ar: "بلال" },
    { en: "Salma", ar: "سلمى" }
  ];

  const hash = Math.abs(
    w.split("").reduce((acc, ch) => acc * 31 + ch.charCodeAt(0), 0) + storyIndex * 17
  );
  const hero = characters[hash % characters.length];
  const companion = characters[(hash + 5) % characters.length];

  let title = "";
  let titleArabic = "";
  let storyEnglish = "";
  let storyArabic = "";
  let questionText = "";
  let correctOption = "";
  let distractors: string[] = [];
  let explanation = "";

  const exEn = word.example ? word.example.replace(/[\.!?]+$/, "").trim() : "";
  const exAr = word.exampleArabic ? word.exampleArabic.replace(/[\.!?]+$/, "").trim() : "";

  // Dynamic narrative generation tailored strictly by Part Of Speech & Real Life Scenarios
  if (pos === "verb") {
    // Action scene
    const verbScenarios = [
      {
        titleEn: `An Active Afternoon`,
        titleAr: `فترة بعد ظهر مفعمة بالنشاط`,
        textEn: `${hero.en} met ${companion.en} in the sunny city square after work. They decided to ${w} together before sunset. As they spent time outdoors, ${hero.en} felt refreshed and energized. The pleasant activity brought a wonderful close to their busy day.`,
        textAr: `التقى ${hero.ar} بـ ${companion.ar} في ساحة المدينة المشمسة بعد العمل. وقررا أن يقوما بفعل ${ar} (${w}) معاً قبل غروب الشمس. وبينما كانا يقضيان وقتاً في الهواء الطلق، شعر ${hero.ar} بالانتعاش والنشاط. أضفى هذا النشاط اللطيف ختاماً رائعاً ليومهما الحافل.`,
        q: `What did ${hero.en} and ${companion.en} decide to do in the city square?`,
        correct: `They decided to ${w} together before sunset`,
        distractors: [
          `They went straight to sleep on the benches`,
          `They argued about their work schedules`,
          `They left the city and went to the airport`
        ],
        exp: `التقى ${hero.ar} و${companion.ar} في الساحة وقررا (${ar} / ${w}) معاً قبل الغروب.`
      },
      {
        titleEn: `Morning Plans`,
        titleAr: `خطط الصباح`,
        textEn: `Early in the morning, ${hero.en} prepared for the day ahead. Before leaving the house, ${hero.en} wanted to ${w} carefully. Doing this made everything at home organized and smooth. ${hero.en} smiled, ready to face the daily tasks with confidence.`,
        textAr: `في الصباح الباكر، استعد ${hero.ar} لليوم الجديد. وقبل مغادرة المنزل، أراد أن يقوم بـ (${ar} - ${w}) بعناية. جعل القيام بذلك كل شيء في المنزل منظماً وسلساً. ابتسم ${hero.ar} وهو مستعد لمواجهة مهام يومه بثقة.`,
        q: `What did ${hero.en} want to do before leaving the house?`,
        correct: `To ${w} carefully to keep things organized`,
        distractors: [
          `To cancel all upcoming appointments`,
          `To pack luggage for an overseas flight`,
          `To build a new wooden fence outside`
        ],
        exp: `أراد ${hero.ar} قبل الخروج من المنزل أن ينجز (${ar} / ${w}) ليبقى كل شيء منظماً.`
      }
    ];

    const chosen = verbScenarios[hash % verbScenarios.length];
    title = chosen.titleEn;
    titleArabic = chosen.titleAr;
    storyEnglish = chosen.textEn;
    storyArabic = chosen.textAr;
    questionText = chosen.q;
    correctOption = chosen.correct;
    distractors = chosen.distractors;
    explanation = chosen.exp;

  } else if (pos === "noun") {
    // Object / Person / Place context
    const nounScenarios = [
      {
        titleEn: `At the Neighborhood Market`,
        titleAr: `في سوق الحي`,
        textEn: `${hero.en} walked through the lively neighborhood market on a bright morning. While looking around the stalls, ${hero.en} noticed a very nice ${w}. ${hero.en} showed the ${w} to ${companion.en}, who agreed it was a great find. They returned home pleased with their visit.`,
        textAr: `تجول ${hero.ar} في سوق الحي الحيوي في صباح مشرق. وأثناء تفقد الأكشاك، لاحظ وجود ${ar} (${w}) جميل ومميز. أطلع ${hero.ar} رفيقه ${companion.ar} على الـ ${ar}، والذي وافقه بأنه اختيار رائع. وعادا إلى المنزل مسرورين بزيارتهما.`,
        q: `What caught ${hero.en}'s attention at the market?`,
        correct: `A nice ${w} displayed at one of the stalls`,
        distractors: [
          `A lost wallet lying on the pavement`,
          `A broken clock hanging on the wall`,
          `A noisy street performer playing music`
        ],
        exp: `لفت انتباه ${hero.ar} في السوق وجود (${ar} / ${w}) جميل نال إعجابهما.`
      },
      {
        titleEn: `A Discovery at Home`,
        titleAr: `اكتشاف في المنزل`,
        textEn: `While tidying up the living room, ${hero.en} found a clean ${w} on the wooden table. It was exactly what the family needed for the evening. ${hero.en} placed the ${w} in a safe spot so everyone could use it. Having the right things made the home cozy.`,
        textAr: `أثناء ترتيب غرفة المعيشة، وجد ${hero.ar} ${ar} (${w}) نظيفاً على الطاولة الخشبية. وكان هذا بالضبط ما تحتاجه العائلة للمساء. وضع ${hero.ar} الـ ${ar} في مكان آمن ليتمكن الجميع من الاستفادة منه. جعل وجود الأشياء المناسبة المنزل مريحاً ودافئاً.`,
        q: `Where did ${hero.en} place the ${w}?`,
        correct: `In a safe spot in the living room for the family to use`,
        distractors: [
          `Outside in the garden under the rain`,
          `In the trash bin behind the house`,
          `Inside a locked suitcase in the attic`
        ],
        exp: `وضع ${hero.ar} الـ (${ar} / ${w}) في مكان آمن بغرفة المعيشة لتستفيد منه العائلة.`
      }
    ];

    const chosen = nounScenarios[hash % nounScenarios.length];
    title = chosen.titleEn;
    titleArabic = chosen.titleAr;
    storyEnglish = chosen.textEn;
    storyArabic = chosen.textAr;
    questionText = chosen.q;
    correctOption = chosen.correct;
    distractors = chosen.distractors;
    explanation = chosen.exp;

  } else if (pos === "adj") {
    // Description scene
    const adjScenarios = [
      {
        titleEn: `The Peaceful Garden`,
        titleAr: `الحديقة الهادئة`,
        textEn: `${hero.en} stepped outside into the courtyard after the spring rain. The air was fresh and everything around looked remarkably ${w}. ${hero.en} smiled while admiring the view with ${companion.en}. Being in such a ${w} atmosphere made the afternoon truly special.`,
        textAr: `خرج ${hero.ar} إلى فناء المنزل بعد مطر الربيع. كان الهواء نقياً وبدا كل شيء من حوله ${ar} (${w}) بشكل لافت. ابتسم ${hero.ar} وهو يتأمل المشهد مع ${companion.ar}. أضفى التواجد في هذا الجو الـ ${ar} طابعاً مميزاً على فترة ما بعد الظهر.`,
        q: `How did the surroundings appear to ${hero.en} after the rain?`,
        correct: `Everything looked remarkably ${w} and fresh`,
        distractors: [
          `Dark and completely deserted`,
          `Noisy and crowded with vehicles`,
          `Broken and disorganized`
        ],
        exp: `بدا كل شيء حول ${hero.ar} في الفناء (${ar} / ${w}) ونقياً بعد المطر.`
      },
      {
        titleEn: `An Impressive Moment`,
        titleAr: `لحظة مبهرة`,
        textEn: `During a visit to the city exhibition, ${hero.en} saw a new design created by talented artists. The work was very ${w} and attracted many visitors. ${hero.en} remarked to ${companion.en} how ${w} the presentation was. Everyone left with fond memories.`,
        textAr: `خلال زيارة لمعرض المدينة، شاهد ${hero.ar} تصميماً جديداً أبدعه فنانون موهوبون. كان العمل ${ar} (${w}) للغاية وجذب العديد من الزوار. ذكر ${hero.ar} لـ ${companion.ar} كم كان العرض ${ar}. غادر الجميع وهم يحملون ذكريات طيبة.`,
        q: `What did ${hero.en} think of the exhibition design?`,
        correct: `It was very ${w} and impressed the visitors`,
        distractors: [
          `It was boring and poorly presented`,
          `It was too loud and disturbing`,
          `It was incomplete and rushed`
        ],
        exp: `أعجب ${hero.ar} بالتصميم في المعرض لأنه كان (${ar} / ${w}) للغاية وجذب الزوار.`
      }
    ];

    const chosen = adjScenarios[hash % adjScenarios.length];
    title = chosen.titleEn;
    titleArabic = chosen.titleAr;
    storyEnglish = chosen.textEn;
    storyArabic = chosen.textAr;
    questionText = chosen.q;
    correctOption = chosen.correct;
    distractors = chosen.distractors;
    explanation = chosen.exp;

  } else {
    // Dialogue, Greetings, Prepositions, Interjections & Other
    const dialogScenarios = [
      {
        titleEn: `A Polite Interaction`,
        titleAr: `حوار مهذب`,
        textEn: `${hero.en} was walking through the community center when meeting ${companion.en} near the main hall. With a friendly nod, ${hero.en} said, "${exEn || `${w}, good to see you!`}" ${companion.en} smiled back and replied warmly. The polite interaction made both of them feel welcome and happy.`,
        textAr: `كان ${hero.ar} يسير في مركز الحي عندما التقى بـ ${companion.ar} بالقرب من القاعة الرئيسية. وبابتسامة وإيماءة ودية، قال ${hero.ar}: "${exAr || `${ar}، يسعدني رؤيتك!`}" ابتسم ${companion.ar} ورد بود وحرارة. جعل هذا الحديث اللطيف كلاهما يشعر بالترحاب والسرور.`,
        q: `How did ${hero.en} greet ${companion.en} at the community center?`,
        correct: `With a friendly smile and polite words`,
        distractors: [
          `By rushing past without looking`,
          `By asking for directions to the train`,
          `By complaining about the room temperature`
        ],
        exp: `التقى ${hero.ar} بـ ${companion.ar} في المركز وحياه بلطف مستخدماً تعبير (${ar} / ${w}).`
      },
      {
        titleEn: `Finding the Way`,
        titleAr: `معرفة الطريق`,
        textEn: `On the street corner, ${hero.en} stopped to check the city signs. A passerby smiled and spoke, using "${w}" naturally in the sentence. ${hero.en} nodded in understanding, thanked the person, and continued walking toward the destination with ease.`,
        textAr: `عند زاوية الشارع، توقف ${hero.ar} ليتفقد لافتات المدينة. ابتسم أحد المارة وتحدث مستخدماً تعبير "${ar}" (${w}) في سياق الحديث. أومأ ${hero.ar} بفهم وشكره، ثم واصل السير نحو وجهته بسهولة واطمئنان.`,
        q: `What happened after the conversation on the street corner?`,
        correct: `${hero.en} thanked the person and continued walking with ease`,
        distractors: [
          `${hero.en} turned around and returned home disappointed`,
          `${hero.en} waited for a bus that never arrived`,
          `${hero.en} lost the city map in the wind`
        ],
        exp: `تحدث المار بأسلوب ودود واستخدم (${ar} / ${w})، فشكره ${hero.ar} وتابع طريقه بارتياح.`
      }
    ];

    const chosen = dialogScenarios[hash % dialogScenarios.length];
    title = chosen.titleEn;
    titleArabic = chosen.titleAr;
    storyEnglish = chosen.textEn;
    storyArabic = chosen.textAr;
    questionText = chosen.q;
    correctOption = chosen.correct;
    distractors = chosen.distractors;
    explanation = chosen.exp;
  }

  return {
    word,
    title,
    titleArabic,
    storyEnglish,
    storyArabic,
    question: {
      question: questionText,
      options: [correctOption, distractors[0], distractors[1], distractors[2]],
      answerIndex: 0,
      explanation
    }
  };
}

function cleanStoryTitle(title?: string): string {
  if (!title) return "";
  return title.replace(/^#+\s*/g, "").replace(/#/g, "").replace(/\*/g, "").trim();
}

function cleanStoryText(text?: string): string {
  if (!text) return "";
  return text.replace(/\*/g, "").trim();
}

/**
 * Generates an independent, dedicated story for a specific target word.
 */
export function generateStoryForSingleWord(word: Word, index: number = 0): SingleWordStory {
  const exact = word.word.trim();
  const lower = exact.toLowerCase();
  const capitalized = lower ? lower.charAt(0).toUpperCase() + lower.slice(1) : '';
  const cleanLower = lower.replace(/\./g, '').trim();
  const normalizedKey = lower.replace(/[\.\,\_\-]/g, ' ').replace(/\s+/g, ' ').trim();

  let story: SingleWordStory;

  // 1. Check user-curated exact stories (highest priority)
  if (USER_CURATED_STORIES[exact]) {
    story = USER_CURATED_STORIES[exact](word);
  } else if (USER_CURATED_STORIES[lower]) {
    story = USER_CURATED_STORIES[lower](word);
  } else if (USER_CURATED_STORIES[capitalized]) {
    story = USER_CURATED_STORIES[capitalized](word);
  } else if (USER_CURATED_STORIES[cleanLower]) {
    story = USER_CURATED_STORIES[cleanLower](word);
  } else if (USER_CURATED_STORIES[normalizedKey]) {
    story = USER_CURATED_STORIES[normalizedKey](word);
  } else if (SPECIFIC_WORD_STORIES[exact]) {
    story = SPECIFIC_WORD_STORIES[exact](word);
  } else if (SPECIFIC_WORD_STORIES[lower]) {
    // 2. Check specific hand-crafted benchmark stories
    story = SPECIFIC_WORD_STORIES[lower](word);
  } else if (SPECIFIC_WORD_STORIES[cleanLower]) {
    story = SPECIFIC_WORD_STORIES[cleanLower](word);
  } else if (SPECIFIC_WORD_STORIES[normalizedKey]) {
    story = SPECIFIC_WORD_STORIES[normalizedKey](word);
  } else {
    // 3. Fallback algorithmic contextual story
    story = buildAlgorithmicWordStory(word, index);
  }

  // Ensure title and story text never contain '#' or '*'
  return {
    ...story,
    title: cleanStoryTitle(story.title),
    titleArabic: cleanStoryTitle(story.titleArabic),
    storyEnglish: cleanStoryText(story.storyEnglish),
    storyArabic: cleanStoryText(story.storyArabic),
    question: story.question ? {
      ...story.question,
      question: cleanStoryText(story.question.question),
      options: story.question.options ? story.question.options.map(opt => cleanStoryText(opt)) : [],
      explanation: cleanStoryText(story.question.explanation)
    } : story.question
  };
}

/**
 * Main story generator: takes N selected words and returns N completely independent stories.
 * Rule: selectedWords.length === generatedStories.length.
 */
export function generateLocalStories(selectedWords: Word[]): SingleWordStory[] {
  if (!selectedWords || selectedWords.length === 0) {
    throw new Error("يجب اختيار كلمة واحدة على الأقل لتوليد القصص.");
  }

  return selectedWords.map((word, idx) => generateStoryForSingleWord(word, idx));
}

// Backward compatibility helper
export function generateLocalStory(selectedWords: Word[]) {
  const stories = generateLocalStories(selectedWords);
  const first = stories[0];
  return {
    title: first.title,
    titleArabic: first.titleArabic,
    storyEnglish: first.storyEnglish,
    storyArabic: first.storyArabic,
    questions: [first.question]
  };
}
