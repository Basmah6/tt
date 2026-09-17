import { VerbConjugation } from "../types";

/**
 * Comprehensive dictionary of irregular verbs with exact V1, V2, V3, -ing, and pedagogical tips.
 */
export const IRREGULAR_VERBS_MAP: Record<
  string,
  { third?: string; past: string; pp: string; ing?: string; tip?: string; isIrregular?: boolean }
> = {
  be: { third: "is (مع المفرد) / are (مع الجمع)", past: "was / were", pp: "been", ing: "being", tip: "فعل الكينونة الأكثر تغيراً: am/is/are في المضارع، was/were في الماضي، وbeen في التصريف الثالث." },
  am: { third: "is", past: "was", pp: "been", ing: "being", tip: "صيغة المضارع للمتكلم (I am) من فعل الكينونة be." },
  is: { third: "is", past: "was", pp: "been", ing: "being", tip: "صيغة المضارع للمفرد الغائب من فعل الكينونة be." },
  are: { third: "is", past: "were", pp: "been", ing: "being", tip: "صيغة المضارع للجمع والمخاطب من فعل الكينونة be." },
  have: { third: "has", past: "had", pp: "had", ing: "having", tip: "الماضي والتصريف الثالث had، ومع He/She/It يصبح has." },
  has: { third: "has", past: "had", pp: "had", ing: "having", tip: "صيغة المفرد الغائب من الفعل have." },
  do: { third: "does", past: "did", pp: "done", ing: "doing", tip: "الماضي did والتصريف الثالث done، ومع He/She/It يُنطق /dʌz/." },
  does: { third: "does", past: "did", pp: "done", ing: "doing", tip: "صيغة المفرد الغائب من الفعل do." },
  go: { third: "goes", past: "went", pp: "gone", ing: "going", tip: "فعل شاذ تماماً؛ الماضي منه went والتصريف الثالث gone." },
  see: { third: "sees", past: "saw", pp: "seen", ing: "seeing", tip: "الماضي saw والتصريف الثالث seen." },
  say: { third: "says", past: "said", pp: "said", ing: "saying", tip: "الماضي said ويُنطق /sed/ (سِدْ) وليس (سَيِد)." },
  get: { third: "gets", past: "got", pp: "got / gotten", ing: "getting", tip: "الماضي got ومن أكثر أفعال الإنجليزية استخداماً وتعدداً في المعاني." },
  make: { third: "makes", past: "made", pp: "made", ing: "making", tip: "الماضي والتصريف الثالث made." },
  know: { third: "knows", past: "knew", pp: "known", ing: "knowing", tip: "حرف k صامت، الماضي knew (/njuː/) والتصريف الثالث known." },
  think: { third: "thinks", past: "thought", pp: "thought", ing: "thinking", tip: "الماضي thought وحروف gh صامتة (يُنطق: ثَوْت /θɔːt/)." },
  take: { third: "takes", past: "took", pp: "taken", ing: "taking", tip: "الماضي took والتصريف الثالث taken." },
  come: { third: "comes", past: "came", pp: "come", ing: "coming", tip: "الماضي came مع تحويل o إلى a والتصريف الثالث يعود come." },
  tell: { third: "tells", past: "told", pp: "told", ing: "telling", tip: "الماضي told، ويأتي بعده المفعول به المباشر (tell me)." },
  give: { third: "gives", past: "gave", pp: "given", ing: "giving", tip: "الماضي gave والتصريف الثالث given." },
  find: { third: "finds", past: "found", pp: "found", ing: "finding", tip: "الماضي والتصريف الثالث found." },
  feel: { third: "feels", past: "felt", pp: "felt", ing: "feeling", tip: "الماضي والتصريف الثالث felt." },
  leave: { third: "leaves", past: "left", pp: "left", ing: "leaving", tip: "الماضي والتصريف الثالث left." },
  put: { third: "puts", past: "put", pp: "put", ing: "putting", tip: "يبقى كما هو دون أي تغيير في جميع الأزمنة (put - put - put)." },
  mean: { third: "means", past: "meant", pp: "meant", ing: "meaning", tip: "الماضي والتصريف الثالث meant ويُنطق /ment/ (مِنْت)." },
  keep: { third: "keeps", past: "kept", pp: "kept", ing: "keeping", tip: "الماضي والتصريف الثالث kept." },
  let: { third: "lets", past: "let", pp: "let", ing: "letting", tip: "يبقى كما هو دون تغيير في المضارع والماضي والتصريف الثالث (let)." },
  begin: { third: "begins", past: "began", pp: "begun", ing: "beginning", tip: "المضارع begin، الماضي began، والتصريف الثالث begun." },
  seem: { third: "seems", past: "seemed", pp: "seemed", ing: "seeming", isIrregular: false, tip: "فعل منتظم يضاف له ed في الماضي والتصريف الثالث." },
  help: { third: "helps", past: "helped", pp: "helped", ing: "helping", isIrregular: false, tip: "فعل منتظم يضاف له ed ويُنطق الصوت النهائي /t/." },
  talk: { third: "talks", past: "talked", pp: "talked", ing: "talking", isIrregular: false, tip: "فعل منتظم: حرف l صامت، والماضي يُنطق /tɔːkt/." },
  turn: { third: "turns", past: "turned", pp: "turned", ing: "turning", isIrregular: false, tip: "فعل منتظم يضاف له ed." },
  start: { third: "starts", past: "started", pp: "started", ing: "starting", isIrregular: false, tip: "فعل منتظم ينتهي بـ t لذا يُنطق المقطع ed كـ /ɪd/ (ستارتِد)." },
  show: { third: "shows", past: "showed", pp: "shown / showed", ing: "showing", tip: "الماضي showed والتصريف الثالث shown غالباً أو showed." },
  hear: { third: "hears", past: "heard", pp: "heard", ing: "hearing", tip: "الماضي heard ويُنطق /hɜːrd/ (هيرْد)." },
  play: { third: "plays", past: "played", pp: "played", ing: "playing", isIrregular: false, tip: "فعل منتظم مسبوق بحرف علة a فلا تتغير y ويضاف ed مباشرة." },
  run: { third: "runs", past: "ran", pp: "run", ing: "running", tip: "المضارع run، الماضي ran، والتصريف الثالث run، ويتضاعف حرف n في running." },
  move: { third: "moves", past: "moved", pp: "moved", ing: "moving", isIrregular: false, tip: "فعل منتظم ينتهي بـ e فتحذف عند إضافة ing ويضاف d في الماضي." },
  like: { third: "likes", past: "liked", pp: "liked", ing: "liking", isIrregular: false, tip: "فعل منتظم ينتهي بـ e فيضاف له d في الماضي." },
  live: { third: "lives", past: "lived", pp: "lived", ing: "living", isIrregular: false, tip: "فعل منتظم ينتهي بـ e فتحذف عند إضافة ing ويضاف d في الماضي." },
  believe: { third: "believes", past: "believed", pp: "believed", ing: "believing", isIrregular: false, tip: "فعل منتظم ينتهي بـ e فيضاف d في الماضي وتُحذف e مع ing." },
  hold: { third: "holds", past: "held", pp: "held", ing: "holding", tip: "الماضي والتصريف الثالث held بتحويل o إلى e." },
  bring: { third: "brings", past: "brought", pp: "brought", ing: "bringing", tip: "الماضي brought وحروف gh صامتة (يُنطق: بْرَوْت /brɔːt/)." },
  happen: { third: "happens", past: "happened", pp: "happened", ing: "happening", isIrregular: false, tip: "فعل منتظم يضاف له ed دون مضاعفة الحرف الأخير." },
  must: { third: "must", past: "had to", pp: "had to", ing: "—", tip: "فعل ناقص يعبر عن الإلزام، وصيغة ماضيه وتصريفه الثالث had to." },
  write: { third: "writes", past: "wrote", pp: "written", ing: "writing", tip: "حرف w صامت، الماضي wrote والتصريف الثالث written ويتضاعف حرف t." },
  provide: { third: "provides", past: "provided", pp: "provided", ing: "providing", isIrregular: false, tip: "فعل منتظم ينتهي بـ e فيضاف d في الماضي." },
  sit: { third: "sits", past: "sat", pp: "sat", ing: "sitting", tip: "الماضي والتصريف الثالث sat، ويتضاعف حرف t في sitting." },
  stand: { third: "stands", past: "stood", pp: "stood", ing: "standing", tip: "الماضي والتصريف الثالث stood." },
  lose: { third: "loses", past: "lost", pp: "lost", ing: "losing", tip: "الماضي والتصريف الثالث lost." },
  pay: { third: "pays", past: "paid", pp: "paid", ing: "paying", tip: "الماضي paid والتصريف الثالث paid بتحويل y إلى id." },
  meet: { third: "meets", past: "met", pp: "met", ing: "meeting", tip: "الماضي والتصريف الثالث met بحذف إحدى حرفي e." },
  include: { third: "includes", past: "included", pp: "included", ing: "including", isIrregular: false, tip: "فعل منتظم ينتهي بـ e فيضاف له d في الماضي." },
  continue: { third: "continues", past: "continued", pp: "continued", ing: "continuing", isIrregular: false, tip: "فعل منتظم ينتهي بـ e فيضاف d في الماضي." },
  set: { third: "sets", past: "set", pp: "set", ing: "setting", tip: "يبقى كما هو في جميع الأزمنة (set - set - set) ويتضاعف t في setting." },
  learn: { third: "learns", past: "learned / learnt", pp: "learned / learnt", ing: "learning", tip: "يأتي منتظماً (learned) أو غير منتظم (learnt) في الإنجليزية البريطانية." },
  change: { third: "changes", past: "changed", pp: "changed", ing: "changing", isIrregular: false, tip: "فعل منتظم ينتهي بـ e فيضاف d في الماضي وتُحذف مع ing." },
  lead: { third: "leads", past: "led", pp: "led", ing: "leading", tip: "الماضي والتصريف الثالث led." },
  understand: { third: "understands", past: "understood", pp: "understood", ing: "understanding", tip: "الماضي والتصريف الثالث understood مثل stand." },
  watch: { third: "watches", past: "watched", pp: "watched", ing: "watching", isIrregular: false, tip: "فعل منتظم ينتهي بـ ch فيأخذ es مع المفرد الغائب (watches)." },
  follow: { third: "follows", past: "followed", pp: "followed", ing: "following", isIrregular: false, tip: "فعل منتظم يضاف له ed." },
  stop: { third: "stops", past: "stopped", pp: "stopped", ing: "stopping", isIrregular: false, tip: "فعل منتظم يتضاعف حرف p عند إضافة ed وing (stopped / stopping)." },
  create: { third: "creates", past: "created", pp: "created", ing: "creating", isIrregular: false, tip: "فعل منتظم ينتهي بـ e فيضاف d في الماضي." },
  speak: { third: "speaks", past: "spoke", pp: "spoken", ing: "speaking", tip: "الماضي spoke والتصريف الثالث spoken." },
  read: { third: "reads", past: "read (/red/)", pp: "read (/red/)", ing: "reading", tip: "يُكتب في الماضي تماماً مثل المضارع read ولكنه يُنطق مثل اللون الأحمر (رِد /red/)!" },
  spend: { third: "spends", past: "spent", pp: "spent", ing: "spending", tip: "الماضي والتصريف الثالث spent بتحويل d إلى t." },
  grow: { third: "grows", past: "grew", pp: "grown", ing: "growing", tip: "الماضي grew والتصريف الثالث grown." },
  open: { third: "opens", past: "opened", pp: "opened", ing: "opening", isIrregular: false, tip: "فعل منتظم يضاف له ed دون مضاعفة حرف n." },
  walk: { third: "walks", past: "walked", pp: "walked", ing: "walking", isIrregular: false, tip: "فعل منتظم: حرف l صامت تماماً، والماضي يُنطق /wɔːkt/." },
  win: { third: "wins", past: "won", pp: "won", ing: "winning", tip: "الماضي والتصريف الثالث won ويُنطق تماماً مثل رقم 1 /wʌn/ (وَنْ)!" },
  teach: { third: "teaches", past: "taught", pp: "taught", ing: "teaching", tip: "الماضي taught وحروف gh صامتة (تَوْت /tɔːt/)." },
  offer: { third: "offers", past: "offered", pp: "offered", ing: "offering", isIrregular: false, tip: "فعل منتظم يضاف له ed." },
  remember: { third: "remembers", past: "remembered", pp: "remembered", ing: "remembering", isIrregular: false, tip: "فعل منتظم يضاف له ed." },
  buy: { third: "buys", past: "bought", pp: "bought", ing: "buying", tip: "الماضي bought وحروف gh صامتة (يُنطق: بَوْت /bɔːt/)." },
  wait: { third: "waits", past: "waited", pp: "waited", ing: "waiting", isIrregular: false, tip: "فعل منتظم ينتهي بـ t لذا يُنطق مقطع ed كـ /ɪd/ (وَيْتِد)." },
  die: { third: "dies", past: "died", pp: "died", ing: "dying", isIrregular: false, tip: "ينتهي بـ ie فتتحول إلى y عند إضافة ing (dying)." },
  send: { third: "sends", past: "sent", pp: "sent", ing: "sending", tip: "الماضي والتصريف الثالث sent بتحويل d إلى t." },
  expect: { third: "expects", past: "expected", pp: "expected", ing: "expecting", isIrregular: false, tip: "فعل منتظم يضاف له ed." },
  build: { third: "builds", past: "built", pp: "built", ing: "building", tip: "الماضي والتصريف الثالث built بتحويل d إلى t." },
  stay: { third: "stays", past: "stayed", pp: "stayed", ing: "staying", isIrregular: false, tip: "فعل منتظم مسبوق بحرف علة a فلا تتغير y ويضاف ed مباشرة." },
  fall: { third: "falls", past: "fell", pp: "fallen", ing: "falling", tip: "الماضي fell والتصريف الثالث fallen." },
  cut: { third: "cuts", past: "cut", pp: "cut", ing: "cutting", tip: "يبقى كما هو في جميع الأزمنة (cut - cut - cut) ويتضاعف t في cutting." },
  reach: { third: "reaches", past: "reached", pp: "reached", ing: "reaching", isIrregular: false, tip: "فعل منتظم ينتهي بـ ch فيأخذ es مع المفرد الغائب." },
  kill: { third: "kills", past: "killed", pp: "killed", ing: "killing", isIrregular: false, tip: "فعل منتظم يضاف له ed." },
  remain: { third: "remains", past: "remained", pp: "remained", ing: "remaining", isIrregular: false, tip: "فعل منتظم يضاف له ed." },
  suggest: { third: "suggests", past: "suggested", pp: "suggested", ing: "suggesting", isIrregular: false, tip: "فعل منتظم يضاف له ed." },
  raise: { third: "raises", past: "raised", pp: "raised", ing: "raising", isIrregular: false, tip: "فعل منتظم ينتهي بـ e فيضاف له d في الماضي." },
  pass: { third: "passes", past: "passed", pp: "passed", ing: "passing", isIrregular: false, tip: "فعل منتظم ينتهي بـ ss فيأخذ es مع المفرد الغائب (passes)." },
  sell: { third: "sells", past: "sold", pp: "sold", ing: "selling", tip: "الماضي والتصريف الثالث sold." },
  require: { third: "requires", past: "required", pp: "required", ing: "requiring", isIrregular: false, tip: "فعل منتظم ينتهي بـ e فيضاف له d في الماضي." },
  report: { third: "reports", past: "reported", pp: "reported", ing: "reporting", isIrregular: false, tip: "فعل منتظم يضاف له ed." },
  decide: { third: "decides", past: "decided", pp: "decided", ing: "deciding", isIrregular: false, tip: "فعل منتظم ينتهي بـ e فيضاف له d في الماضي." },
  pull: { third: "pulls", past: "pulled", pp: "pulled", ing: "pulling", isIrregular: false, tip: "فعل منتظم يضاف له ed." },
  break: { third: "breaks", past: "broke", pp: "broken", ing: "breaking", tip: "الماضي broke والتصريف الثالث broken." },
  choose: { third: "chooses", past: "chose", pp: "chosen", ing: "choosing", tip: "الماضي chose والتصريف الثالث chosen." },
  drive: { third: "drives", past: "drove", pp: "driven", ing: "driving", tip: "الماضي drove والتصريف الثالث driven." },
  eat: { third: "eats", past: "ate", pp: "eaten", ing: "eating", tip: "الماضي ate والتصريف الثالث eaten." },
  drink: { third: "drinks", past: "drank", pp: "drunk", ing: "drinking", tip: "المضارع drink، الماضي drank، والتصريف الثالث drunk." },
  fly: { third: "flies", past: "flew", pp: "flown", ing: "flying", tip: "الماضي flew والتصريف الثالث flown." },
  forget: { third: "forgets", past: "forgot", pp: "forgotten", ing: "forgetting", tip: "الماضي forgot والتصريف الثالث forgotten ويتضاعف t في forgetting." },
  sing: { third: "sings", past: "sang", pp: "sung", ing: "singing", tip: "المضارع sing، الماضي sang، والتصريف الثالث sung." },
  sleep: { third: "sleeps", past: "slept", pp: "slept", ing: "sleeping", tip: "الماضي والتصريف الثالث slept." },
  swim: { third: "swims", past: "swam", pp: "swum", ing: "swimming", tip: "المضارع swim، الماضي swam، والتصريف الثالث swum ويتضاعف m في swimming." },
  wear: { third: "wears", past: "wore", pp: "worn", ing: "wearing", tip: "الماضي wore والتصريف الثالث worn." },
  ride: { third: "rides", past: "rode", pp: "ridden", ing: "riding", tip: "الماضي rode والتصريف الثالث ridden." },
  catch: { third: "catches", past: "caught", pp: "caught", ing: "catching", tip: "الماضي caught وحروف gh صامتة (كَوْت /kɔːt/)." },
  draw: { third: "draws", past: "drew", pp: "drawn", ing: "drawing", tip: "الماضي drew والتصريف الثالث drawn." },
  fight: { third: "fights", past: "fought", pp: "fought", ing: "fighting", tip: "الماضي fought وحروف gh صامتة (فَوْت /fɔːt/)." },
  hide: { third: "hides", past: "hid", pp: "hidden", ing: "hiding", tip: "الماضي hid والتصريف الثالث hidden." },
  hit: { third: "hits", past: "hit", pp: "hit", ing: "hitting", tip: "يبقى كما هو في جميع الأزمنة (hit - hit - hit) ويتضاعف t في hitting." },
  hurt: { third: "hurts", past: "hurt", pp: "hurt", ing: "hurting", tip: "يبقى كما هو في جميع الأزمنة (hurt - hurt - hurt)." },
  shut: { third: "shuts", past: "shut", pp: "shut", ing: "shutting", tip: "يبقى كما هو في جميع الأزمنة (shut - shut - shut) ويتضاعف t في shutting." },
  throw: { third: "throws", past: "threw", pp: "thrown", ing: "throwing", tip: "الماضي threw والتصريف الثالث thrown." },
  wake: { third: "wakes", past: "woke", pp: "woken", ing: "waking", tip: "الماضي woke والتصريف الثالث woken." },
  lend: { third: "lends", past: "lent", pp: "lent", ing: "lending", tip: "الماضي والتصريف الثالث lent بتحويل d إلى t." },
  cost: { third: "costs", past: "cost", pp: "cost", ing: "costing", tip: "يبقى كما هو في جميع الأزمنة (cost - cost - cost)." },
  burn: { third: "burns", past: "burned / burnt", pp: "burned / burnt", ing: "burning", tip: "يأتي منتظماً (burned) أو غير منتظم (burnt)." },
  smell: { third: "smells", past: "smelled / smelt", pp: "smelled / smelt", ing: "smelling", tip: "يأتي منتظماً (smelled) أو غير منتظم (smelt)." },
  dream: { third: "dreams", past: "dreamed / dreamt", pp: "dreamed / dreamt", ing: "dreaming", tip: "يأتي منتظماً (dreamed) أو غير منتظم (dreamt)." },
  shake: { third: "shakes", past: "shook", pp: "shaken", ing: "shaking", tip: "الماضي shook والتصريف الثالث shaken." },
  ring: { third: "rings", past: "rang", pp: "rung", ing: "ringing", tip: "المضارع ring، الماضي rang، والتصريف الثالث rung." },
  feed: { third: "feeds", past: "fed", pp: "fed", ing: "feeding", tip: "الماضي والتصريف الثالث fed بحذف إحدى حرفي e." },
  bite: { third: "bites", past: "bit", pp: "bitten", ing: "biting", tip: "الماضي bit والتصريف الثالث bitten." },
  blow: { third: "blows", past: "blew", pp: "blown", ing: "blowing", tip: "الماضي blew والتصريف الثالث blown." },
  freeze: { third: "freezes", past: "froze", pp: "frozen", ing: "freezing", tip: "الماضي froze والتصريف الثالث frozen." },
  steal: { third: "steals", past: "stole", pp: "stolen", ing: "stealing", tip: "الماضي stole والتصريف الثالث stolen." },
  shine: { third: "shines", past: "shone", pp: "shone", ing: "shining", tip: "الماضي والتصريف الثالث shone." },
  shoot: { third: "shoots", past: "shot", pp: "shot", ing: "shooting", tip: "الماضي والتصريف الثالث shot." },
  hang: { third: "hangs", past: "hung", pp: "hung", ing: "hanging", tip: "الماضي hung (للأشياء)، بينما hanged عند الإشارة للشنق." },
  dig: { third: "digs", past: "dug", pp: "dug", ing: "digging", tip: "الماضي والتصريف الثالث dug ويتضاعف g في digging." },
  stick: { third: "sticks", past: "stuck", pp: "stuck", ing: "sticking", tip: "الماضي والتصريف الثالث stuck." },
  strike: { third: "strikes", past: "struck", pp: "struck", ing: "striking", tip: "الماضي والتصريف الثالث struck." },
  sweep: { third: "sweeps", past: "swept", pp: "swept", ing: "sweeping", tip: "الماضي والتصريف الثالث swept." },
  tear: { third: "tears", past: "tore", pp: "torn", ing: "tearing", tip: "الماضي tore والتصريف الثالث torn." },
  wear_out: { third: "wears out", past: "wore out", pp: "worn out", ing: "wearing out" },
  can: { third: "can", past: "could", pp: "been able to", ing: "being able to", tip: "فعل ناقص يعبر عن الاستطاعة، الماضي منه could." }
};

/**
 * List of known verbs that double their final consonant when adding -ed or -ing.
 */
const DOUBLING_VERBS = new Set([
  "stop", "plan", "drop", "rob", "beg", "fit", "hug", "nod", "slip", "step", "drag",
  "grab", "jog", "tap", "chat", "clap", "wrap", "prefer", "admit", "commit", "occur",
  "refer", "control", "travel", "cancel", "regret", "permit", "equip", "whip", "skip",
  "bat", "pin", "ban", "bar", "chop", "dip", "fan", "grip", "hop", "knit", "log",
  "mop", "pat", "plot", "pop", "rip", "rub", "scan", "slam", "snap", "spot", "strip",
  "submit", "trap", "trim", "trip"
]);

/**
 * Derives accurate standard conjugations for any regular English verb.
 */
export function conjugateRegularVerb(rawVerb: string): VerbConjugation {
  const base = rawVerb.toLowerCase().trim();

  // 1. Third Person Singular (He / She / It)
  let thirdPerson = base + "s";
  if (/(?:[sxz]|ch|sh|o)$/i.test(base)) {
    thirdPerson = base + "es";
  } else if (/[^aeiou]y$/i.test(base)) {
    thirdPerson = base.slice(0, -1) + "ies";
  }

  // 2. Past Simple (V2) & Past Participle (V3)
  let past = base + "ed";
  let pastParticiple = base + "ed";

  const isDoubled = DOUBLING_VERBS.has(base);

  if (base.endsWith("e")) {
    past = base + "d";
    pastParticiple = base + "d";
  } else if (/[^aeiou]y$/i.test(base)) {
    past = base.slice(0, -1) + "ied";
    pastParticiple = base.slice(0, -1) + "ied";
  } else if (isDoubled) {
    const lastChar = base[base.length - 1];
    past = base + lastChar + "ed";
    pastParticiple = base + lastChar + "ed";
  }

  // 3. Present Participle (-ing)
  let presentParticiple = base + "ing";
  if (base.endsWith("ie")) {
    presentParticiple = base.slice(0, -2) + "ying";
  } else if (base.endsWith("ee")) {
    presentParticiple = base + "ing";
  } else if (base.endsWith("e")) {
    presentParticiple = base.slice(0, -1) + "ing";
  } else if (isDoubled) {
    const lastChar = base[base.length - 1];
    presentParticiple = base + lastChar + "ing";
  }

  return {
    base,
    thirdPerson,
    past,
    pastParticiple,
    presentParticiple,
    isIrregular: false,
    tip: "فعل منتظم (Regular Verb): يتم صياغة الماضي والتصريف الثالث بإضافة (ed) وفق القواعد الصرفية القياسية."
  };
}

/**
 * Looks up or generates the full conjugation of an English verb.
 * If the word is irregular, returns exact forms and mnemonic notes.
 * If regular, returns rule-based accurate conjugations.
 */
export function getVerbConjugation(word: string, partOfSpeech?: string): VerbConjugation | null {
  if (!word) return null;
  const base = word.toLowerCase().trim();

  // 1. Check irregular map
  if (IRREGULAR_VERBS_MAP[base]) {
    const irr = IRREGULAR_VERBS_MAP[base];
    const isIrr = irr.isIrregular !== undefined ? irr.isIrregular : true;
    return {
      base,
      thirdPerson: irr.third || `${base}s`,
      past: irr.past,
      pastParticiple: irr.pp,
      presentParticiple: irr.ing || `${base}ing`,
      isIrregular: isIrr,
      tip: irr.tip || (isIrr 
        ? "فعل غير منتظم (شاذ): تتغير صياغته في الماضي والتصريف الثالث ويجب حفظها."
        : "فعل منتظم (يُصاغ الماضي والتصريف الثالث بإضافة ed).")
    };
  }

  // 2. If part of speech is verb or word ends with common verb pattern
  const isVerbPos = partOfSpeech === "verb";
  if (isVerbPos) {
    return conjugateRegularVerb(base);
  }

  return null;
}

/**
 * Formats verb conjugation as clean, accessible Arabic text (without asterisks or markdown clutter).
 */
export function formatVerbConjugationText(c: VerbConjugation): string {
  const lines: string[] = [
    "تصريف الأفعال:",
    `- المضارع / المصدر (V1): ${c.base} (مع He/She/It: ${c.thirdPerson})`,
    `- الماضي البسيط (V2): ${c.past}`,
    `- التصريف الثالث (V3): ${c.pastParticiple}`,
    `- صيغة الاستمرار (ing): ${c.presentParticiple}`,
    c.isIrregular 
      ? `• نوع الفعل: غير منتظم (شاذ). ${c.tip || ""}`.trim()
      : `• نوع الفعل: منتظم (يُصاغ الماضي والتصريف الثالث بإضافة ed).`
  ];
  return lines.join("\n");
}
