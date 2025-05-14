import { TileImg, TileEventImg } from './img/img';


/* Tile */
export const startTile = {
  id: 100,
  title: 'START',
  type: 'start',
  width: '8vw',
  height: '8vw',
  image: null,
  gridArea: 't1',
  top: '-10%',
  left: '10%'
};

export const quizTile = {
  id: 107,
  title: '궁 퀴즈',
  type: 'quiz',
  width: '8vw',
  height: '8vw',
  image: TileImg.quiz,
  gridArea: 't16',
  top: '-10%',
  left: '12%'
};

export const eventTiles = [
  {
    id: 101, title: '이벤트1', type: 'event', width: '8vw', height: '8vw', gridArea: 't3',
    front: { image: TileEventImg.event1, text: '이벤트1' },
    back: { image: TileEventImg.event1, text: '닢1' },
    top: '-14%', left: '26%'
  },
  {
    id: 102, title: '이벤트2', type: 'event', width: '8vw', height: '8vw', gridArea: 't5',
    front: { image: TileEventImg.event2, text: '이벤트2' },
    back: { image: TileEventImg.event2, text: '닢2' },
    top: '-14%', left: '42%'
  },
  {
    id: 103, title: '이벤트3', type: 'event', width: '9vw', height: '7.6vw', gridArea: 't7',
    front: { image: TileEventImg.event3, text: '이벤트3' },
    back: { image: TileEventImg.event3, text: '닢3' },
    top: '-15%', left: '38%'
  },
  {
    id: 104, title: '이벤트4', type: 'event', width: '8vw', height: '8vw', gridArea: 't9',
    front: { image: TileEventImg.event4, text: '이벤트4' },
    back: { image: TileEventImg.event4, text: '닢1' },
    top: '-13%', left: '42%'
  },
  {
    id: 105, title: '이벤트5', type: 'event', width: '8vw', height: '8vw', gridArea: 't13',
    front: { image: TileEventImg.event5, text: '이벤트5' },
    back: { image: TileEventImg.event5, text: '닢2' },
    top: '-13%', left: '8%'
  },
  {
    id: 106, title: '이벤트6', type: 'event', width: '9vw', height: '7vw', gridArea: 't15',
    front: { image: TileEventImg.event6, text: '이벤트6' },
    back: { image: TileEventImg.event6, text: '닢3' },
    top: '-15%', left: '14%'
  },
]

export const map1Tiles = [
  {
    id: 1,
    title: '광화문',
    type: 'default',
    width: '17.2vw',
    height: '9vw',
    gungId: 'gwanghwamun',
    image: TileImg.gung,
    gridArea: 't2',
    top: '-10%',
    left: '20%'
  },
  {
    id: 2,
    title: '근정전',
    type: 'default',
    width: '17.2vw',
    height: '9vw',
    gungId: 'geunjeongjeon',
    image: TileImg.gung,
    gridArea: 't4',
    top: '-10%',
    left: '40%'
  },
  {
    id: 3,
    title: '수정전',
    type: 'default',
    width: '8vw',
    height: '8vw',
    gungId: 'sujeongjeon',
    image: TileImg.gung,
    gridArea: 't6',
    top: '-10%',
    left: '45%'
  },
  {
    id: 4,
    title: '경회루',
    type: 'default',
    width: '8vw',
    height: '8vw',
    gungId: 'gyeonghoeru',
    image: TileImg.gung,
    gridArea: 't8',
    top: '-10%',
    left: '45%'
  },
  {
    id: 5,
    title: '강녕전',
    type: 'default',
    width: '17.2vw',
    height: '8vw',
    gungId: 'gangnyeongjeon',
    image: TileImg.gung,
    gridArea: 't10',
    top: '0',
    left: '36%'
  },
  {
    id: 6,
    title: '향원정',
    type: 'default',
    width: '8vw',
    height: '9vw',
    gungId: 'hyangwonjeong',
    image: TileImg.gung,
    gridArea: 't11',
    top: '0',
    left: '30%'
  },
  {
    id: 7,
    title: '건청궁',
    type: 'default',
    width: '17.2vw',
    height: '8vw',
    gungId: 'geoncheonggung',
    image: TileImg.gung,
    gridArea: 't12',
    top: '0',
    left: '24%'
  },
  {
    id: 8,
    title: '고궁박물관',
    type: 'default',
    width: '8vw',
    height: '8vw',
    gungId: 'gogungmuseum',
    image: TileImg.gung,
    gridArea: 't14',
    top: '0',
    left: '12%'
  }
];

/* InfoCard */
export const gungInfoData = {
  gyeongbokgung: {
    name: "경복궁",
    address: "서울 종로구 사직로 161",
    tel: "02-3700-3900",
    time: {
      hours: "9:00~18:00 (입장 마감 17:00)",
      close: "화요일 휴무",
      note: "(하절기, 동절기 입장 마감시간 확인)"
    },
    price: {
      base: "3,000원",
      group: "2,400원"
    },
    transport: {
      subway: [
        { line: "3", station: "경복궁역, 안국역" },
        { line: "5", station: "광화문역" }
      ],
      bus: {
        간선: ["109", "171", "272", "601"],
        지선: ["1020", "7025"],
        기타: "경복궁 또는 덕성여중고 하차"
      }
    }
  }
  // ...다른 궁들도 동일하게 추가 가능
};

export const yutnoriRule = {
  title: "윷놀이 규칙",
  rules: {
    moveRule: {
      icon: "fa-solid fa-dice-six",
      heading: "이동 규칙",
      lines: [
        ["도 : +1칸", "윷 : +4칸"],
        ["개 : +2칸", "모 : +5칸"],
        ["걸 : +3칸", "빽도 : -1칸"]
      ]
    },
    playRule: {
      icon: "fa-solid fa-book",
      heading: "플레이 방식",
      lines: [
        "윷놀이 버튼 클릭!",
        "랜덤으로 나온 윷 갯수만큼\n 활성화된 윷놀이 칸으로 이동",
        "당첨 닢 확인 후 재도전 하기!"
      ]
    },
    ticketRule: {
      heading: "윷놀이 이용권 획득 방법",
      icon: "fa-solid fa-ticket-simple",
      line1: "회원가입 시 이용권 3회 제공",
      line2: "매월 이용권 3회 추가 지급",
      line3: {
        text: "(무료 이용권 유효기간 30일)",
        small: true
      },
      line4: "윷놀이 이용권 별도 구매 가능"
    }

  }
};



