export const questions = [
  {
    id: 1,
    title: "주말 오후, 당신이 쉬고 싶은 완벽한 장소는?",
    answers: [
      { text: "통창으로 햇살이 들어오는 화이트톤 카페", types: { fresh: 2, floral: 1 } },
      { text: "비 냄새와 오래된 책 냄새가 나는 서재", types: { woody: 2, musk: 1 } },
      { text: "포근한 이불 속에서 귤을 까먹는 침대", types: { musk: 2, floral: 1 } },
      { text: "이국적인 꽃들이 가득한 비밀 정원", types: { floral: 2, woody: 1 } },
    ],
  },
  {
    id: 2,
    title: "친구들이 말하는 나의 첫인상은?",
    answers: [
      { text: "다가가기 편하고 밝은 에너지가 느껴져", types: { fresh: 2, floral: 1 } },
      { text: "자기 주관이 뚜렷하고 힙해 보여", types: { woody: 2, musk: 1 } },
      { text: "부드럽고 따뜻한 느낌이야", types: { musk: 2, floral: 1 } },
      { text: "신비롭고 우아해서 궁금증을 유발해", types: { floral: 2, woody: 1 } },
    ],
  },
  {
    id: 3,
    title: "당신이 가장 선호하는 옷의 소재나 질감은?",
    answers: [
      { text: "깨끗하게 세탁된 가볍고 서늘한 린넨", types: { fresh: 2 } },
      { text: "길들여질수록 멋이 나는 묵직한 가죽이나 생지 데님", types: { woody: 2 } },
      { text: "몸을 포근하게 감싸주는 부드러운 캐시미어 니트", types: { musk: 2 } },
      { text: "매끄럽고 은은한 광택이 흐르는 실크나 벨벳", types: { floral: 2 } },
    ],
  },
  {
    id: 4,
    title: "낯선 여행지에서 당신의 마음을 사로잡는 순간은?",
    answers: [
      { text: "이른 아침, 창문을 열었을 때 들어오는 차가운 숲 공기", types: { fresh: 1, woody: 1 } },
      { text: "비 오는 오후, 오래된 LP 바에서 풍기는 나무 냄새", types: { woody: 2 } },
      { text: "늦은 밤, 호텔 침구에서 느껴지는 깨끗한 비누 향기", types: { musk: 2 } },
      { text: "해질녘, 이름 모를 꽃들이 만발한 정원의 진한 향기", types: { floral: 2 } },
    ],
  },
  {
    id: 5,
    title: "당신이 추구하는 삶의 태도와 가장 가까운 것은?",
    answers: [
      { text: "얽매이지 않고 흐르는 대로 살아가는 자유로움", types: { fresh: 2 } },
      { text: "남들의 시선보다 나의 취향이 중요한 확고함", types: { woody: 2 } },
      { text: "주변 사람들에게 온기를 나누는 다정함", types: { musk: 2 } },
      { text: "언제 어디서나 품격을 잃지 않는 우아함", types: { floral: 2 } },
    ],
  },
  {
    id: 6,
    title: "친구와 전시회를 간다면, 어떤 전시 공간이 가장 끌리나요?",
    answers: [
      { text: "탁 트인 공간에 통유리로 자연광이 쏟아지는 전시장", types: { fresh: 2 } },
      { text: "어둡고 고요하며, 흙과 나무 오브제가 가득한 설치 미술관", types: { woody: 2 } },
      { text: "조명이 은은하고 따뜻한 색감의 그림들이 걸린 갤러리", types: { musk: 2 } },
      { text: "화려한 색감과 강렬한 꽃 패턴이 눈을 사로잡는 팝업 전시", types: { floral: 2 } },
    ],
  },
  {
    id: 7,
    title: "갑자기 주어진 한 시간의 자유시간, 당신은 무엇을 할까요?",
    answers: [
      { text: "가벼운 러닝을 하거나 공원을 산책하며 에너지를 얻는다", types: { fresh: 2 } },
      { text: "혼자 조용한 카페에 앉아 좋아하는 책을 읽는다", types: { woody: 1, musk: 1 } },
      { text: "좋은 음악을 크게 틀어놓고 멍하니 휴식을 취한다", types: { musk: 2 } },
      { text: "나를 돋보이게 할 옷이나 액세서리를 구경하러 간다", types: { floral: 2 } },
    ],
  },
  // 질문을 추가해 나갈 수 있습니다.
];

export const results = {
  woody: [
    {
      name: "르라보 - 상탈 33",
      desc: "독립적이고 묵직한 존재감을 가진 당신, 스모키한 우디향이 당신의 확고한 취향을 대변해줍니다.",
      image: "/res/lelabo_santal33.jpg",
      notes: { top: "바이올렛, 카다멈", middle: "아이리스, 암브록스", base: "샌달우드, 시더우드" }
    },
    {
      name: "이솝 - 휠 (Hwyl)",
      desc: "고요한 숲속의 사찰이 떠오르는 향기. 깊은 사색을 즐기고 내면의 평온을 중요시하는 당신에게 어울려요.",
      image: "/res/aesop_hwyl.jpg",
      notes: { top: "타임, 엘레미", middle: "사이프러스", base: "베티버, 프랑킨센스" }
    },
    {
      name: "논픽션 - 상탈크림",
      desc: "나른한 오후의 햇살처럼 부드러운 우디향입니다. 차분하면서도 세련된 무드를 추구하는 당신을 닮았네요.",
      image: "/res/nonfiction_santal_cream.jpeg",
      notes: { top: "카다멈", middle: "진저, 미모사", base: "샌달우드, 시더우드" }
    }
  ],
  floral: [
    {
      name: "딥디크 - 도 손",
      desc: "클래식하고 우아하며 화려한 매력을 지녔군요. 튜베로즈의 진한 꽃향기가 당신의 품격을 높여줍니다.",
      image: "/res/diptyque_doson.jpg",
      notes: { top: "아프리칸 오렌지 플라워, 로즈", middle: "튜베로즈, 핑크 페퍼", base: "벤조인, 머스크" }
    },
    {
      name: "바이레도 - 라 튤립",
      desc: "이슬 맺힌 튤립처럼 싱그럽고 긍정적인 에너지를 가진 당신! 봄의 시작처럼 설레는 향기가 어울립니다.",
      image: "/res/byredo_la_tulipe.jpg",
      notes: { top: "루바브, 시클라멘, 프리지아", middle: "튤립", base: "블론드 우드, 베티버" }
    }
  ],
  fresh: [
    {
      name: "조말론 - 우드 세이지 & 씨 솔트",
      desc: "자유로운 영혼을 가진 당신, 바다의 청량함과 소금기 섞인 바람의 향기가 당신의 활동적인 성향과 잘 맞아요.",
      image: "/res/jomalone_woodsage.jpg",
      notes: { top: "암브레트 씨드", middle: "씨 솔트", base: "세이지" }
    },
    {
      name: "이솝 - 테싯 (Tacit)",
      desc: "마음까지 맑아지는 유자 향과 허브의 조화. 깔끔하고 지적인 분위기를 선호하는 당신에게 추천합니다.",
      image: "/res/aesop_tacit.jpg",
      notes: { top: "유자, 바질", middle: "로즈마리, 민트", base: "시더우드, 베티버" }
    }
  ],
  musk: [
    {
      name: "탬버린즈 - 카모 (CHAMO)",
      desc: "주변 사람들에게 따뜻한 위로를 주는 포근한 사람입니다. 달콤한 꿀과 머스크의 조화가 당신의 다정함을 닮았어요.",
      image: "/res/tamburins_chamo.jpg",
      notes: { top: "클래리 세이지, 카모마일", middle: "워터리 노드, 사이프러스", base: "엠버, 머스크, 블론드 우드" }
    },
    {
      name: "바이레도 - 블랑쉬",
      desc: "갓 세탁한 하얀 셔츠처럼 깨끗하고 순수한 매력! 미니멀하고 깔끔한 라이프스타일을 즐기는 당신에게 딱입니다.",
      image: "/res/byredo_blanche.jpg",
      notes: { top: "화이트 로즈, 핑크 페퍼", middle: "바이올렛, 네롤리, 작약", base: "블론드 우드, 샌달우드, 머스크" }
    },
    {
      name: "논픽션 - 포겟미낫",
      desc: "중성적이면서도 신비로운 매력을 가진 당신. 톡 쏘는 페퍼와 머스크의 만남이 당신의 개성을 돋보이게 합니다.",
      image: "/res/nonfiction_forgetmenot.jpg",
      notes: { top: "바질, 페퍼", middle: "그린 노트", base: "가디니아, 엠버" }
    }
  ],
};