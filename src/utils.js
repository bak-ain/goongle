import { TileImg, TileEventImg } from './img/img';


/* Tile */
export const startTile = {
  id: 100,
  title: 'START',
  type: 'start',
  width: '69.57%',
  height: '108.11%',
  image: TileImg.start,
  gridArea: 't1',
  top: '-10%',
  left: '10%',
  topMobile: '0%',
  leftMobile: '2%',
  positionClass: 'tile-100'
};

export const quizTile = {
  id: 107,
  title: '궁 퀴즈',
  type: 'quiz',
  width: '69.57%',
  height: '102.7%',
  image: TileImg.quiz,
  gridArea: 't16',
  top: '-10%',
  left: '12%',
  topMobile: '0%',
  leftMobile: '3%',
  positionClass: 'tile-107'
};

export const eventTiles = [
  {
    id: 101, title: '이벤트1', type: 'event', width: '69.57%', height: '108.11%', gridArea: 't3',
    front: { image: TileEventImg.event6, text: '이벤트1' },
    back: { image: TileEventImg.event9, text: '닢1' },
    top: '-14%', left: '26%',
    topMobile: '10%',
    leftMobile: '3%',
    topMobile: '15%',
    leftMobile: '8%',
    positionClass: 'tile-101'
  },
  {
    id: 102, title: '이벤트2', type: 'event', width: '69.57%', height: '102.7%', gridArea: 't5',
    front: { image: TileEventImg.event4, text: '이벤트2' },
    back: { image: TileEventImg.event7, text: '닢2' },
    top: '-14%', left: '42%',
    topMobile: '15%',
    leftMobile: '30%',
    positionClass: 'tile-102'
  },
  {
    id: 103, title: '이벤트3', type: 'event', width: '78.26%', height: '94.59%', gridArea: 't7',
    front: { image: TileEventImg.event5, text: '이벤트3' },
    back: { image: TileEventImg.event8, text: '닢3' },
    top: '-15%', left: '38%',
    topMobile: '-10%',
    leftMobile: '26%',
    positionClass: 'tile-103'
  },
  {
    id: 104, title: '이벤트4', type: 'event', width: '69.57%', height: '94.59%', gridArea: 't9',
    front: { image: TileEventImg.event6, text: '이벤트4' },
    back: { image: TileEventImg.event9, text: '닢1' },
    top: '-13%', left: '42%',
    topMobile: '-10%',
    leftMobile: '30%',
    positionClass: 'tile-104'
  },
  {
    id: 105, title: '이벤트5', type: 'event', width: '69.57%', height: '94.59%', gridArea: 't13',
    front: { image: TileEventImg.event4, text: '이벤트5' },
    back: { image: TileEventImg.event7, text: '닢2' },
    top: '-13%', left: '8%',
    topMobile: '-10%',
    leftMobile: '-3%',
    positionClass: 'tile-105'
  },
  {
    id: 106, title: '이벤트6', type: 'event', width: '78.26%', height: '94.59%', gridArea: 't15',
    front: { image: TileEventImg.event5, text: '이벤트6' },
    back: { image: TileEventImg.event8, text: '닢3' },
    top: '-15%', left: '14%',
    topMobile: '-10%',
    leftMobile: '-5%',
    positionClass: 'tile-106'
  },
]


export const mapTilesByGung = {
  gyeongbokgung: [
    {
      id: 1,
      title: '광화문',
      type: 'default',
      width: '148.7%',
      height: '121.62%',
      gungId: 'gwanghwamun',
      image: TileImg.gung,
      gridArea: 't2',
      top: '-10%',
      left: '20%',
      topMobile: '20%',
      leftMobile: '10%',
      positionClass: 'tile-1'
    },
    {
      id: 2,
      title: '근정전',
      type: 'default',
      width: '148.7%',
      height: '121.62%',
      gungId: 'geunjeongjeon',
      image: TileImg.gung2,
      gridArea: 't4',
      top: '-10%',
      left: '40%',
      topMobile: '20%',
      leftMobile: '30%',
      positionClass: 'tile-2'
    },
    {
      id: 3,
      title: '수정전',
      type: 'default',
      width: '69.57%',
      height: '108.11%',
      gungId: 'sujeongjeon',
      image: TileImg.gung3,
      gridArea: 't6',
      top: '-10%',
      left: '45%',
      topMobile: '-10%',
      leftMobile: '35%',
      positionClass: 'tile-3'
    },
    {
      id: 4,
      title: '경회루',
      type: 'default',
      width: '69.57%',
      height: '108.11%',
      gungId: 'gyeonghoeru',
      image: TileImg.gung4,
      gridArea: 't8',
      top: '-10%',
      left: '45%',
      topMobile: '-10%',
      leftMobile: '35%',
      positionClass: 'tile-4'
    },
    {
      id: 5,
      title: '강녕전',
      type: 'default',
      width: '148.7%',
      height: '108.11%',
      gungId: 'gangnyeongjeon',
      image: TileImg.gung5,
      gridArea: 't10',
      top: '0',
      left: '36%',
      topMobile: '-30%',
      leftMobile: '30%',
      positionClass: 'tile-5'
    },
    {
      id: 6,
      title: '향원정',
      type: 'default',
      width: '69.57%',
      height: '121.62%',
      gungId: 'hyangwonjeong',
      image: TileImg.gung6,
      gridArea: 't11',
      top: '0',
      left: '30%',
      topMobile: '-30%',
      leftMobile: '16%',
      positionClass: 'tile-6'
    },
    {
      id: 7,
      title: '건청궁',
      type: 'default',
      width: '148.7%',
      height: '108.11%',
      gungId: 'geoncheonggung',
      image: TileImg.gung7,
      gridArea: 't12',
      top: '0',
      left: '24%',
      topMobile: '-30%',
      leftMobile: '13%',
      positionClass: 'tile-7'
    },
    {
      id: 8,
      title: '고궁박물관',
      type: 'default',
      width: '69.57%',
      height: '108.11%',
      gungId: 'gogungmuseum',
      image: TileImg.gung8,
      gridArea: 't14',
      top: '0',
      left: '12%',
      topMobile: '0%',
      leftMobile: '4%',
      positionClass: 'tile-8'
    }
  ],
  changdeokgung: [
    {
      id: 9,
      title: '돈화문',
      type: 'default',
      width: '148.7%',
      height: '121.62%',
      gungId: 'donhwamun',
      image: TileImg.gung17,
      gridArea: 't2',
      top: '-10%',
      left: '20%',
      positionClass: 'tile-1'
    },
    {
      id: 10,
      title: '인정전',
      type: 'default',
      width: '148.7%',
      height: '121.62%',
      gungId: 'injeongjeon',
      image: TileImg.gung18,
      gridArea: 't4',
      top: '-10%',
      left: '40%',
      positionClass: 'tile-2'
    },
    {
      id: 11,
      title: '희정당',
      type: 'default',
      width: '69.57%',
      height: '108.11%',
      gungId: 'huijeongdang',
      image: TileImg.gung19,
      gridArea: 't6',
      top: '-10%',
      left: '45%',
      positionClass: 'tile-3'
    },
    {
      id: 12,
      title: '낙선재',
      type: 'default',
      width: '69.57%',
      height: '108.11%',
      gungId: 'nakseonjae',
      image: TileImg.gung20,
      gridArea: 't8',
      top: '-10%',
      left: '45%',
      positionClass: 'tile-4'
    },
    {
      id: 13,
      title: '부용지',
      type: 'default',
      width: '148.7%',
      height: '108.11%',
      gungId: 'buyongji',
      image: TileImg.gung21,
      gridArea: 't10',
      top: '0',
      left: '36%',
      positionClass: 'tile-5'
    },
    {
      id: 14,
      title: '애련지',
      type: 'default',
      width: '69.57%',
      height: '121.62%',
      gungId: 'aeryeonji',
      image: TileImg.gung22,
      gridArea: 't11',
      top: '0',
      left: '30%',
      positionClass: 'tile-6'
    },
    {
      id: 15,
      title: '연경당',
      type: 'default',
      width: '148.7%',
      height: '108.11%',
      gungId: 'yeongyeongdang',
      image: TileImg.gung23,
      gridArea: 't12',
      top: '0',
      left: '24%',
      positionClass: 'tile-7'
    },
    {
      id: 16,
      title: '옥류천',
      type: 'default',
      width: '69.57%',
      height: '108.11%',
      gungId: 'ongnyucheon',
      image: TileImg.gung24,
      gridArea: 't14',
      top: '0',
      left: '12%',
      positionClass: 'tile-8'
    }
  ],
  changgyeonggung: [
    {
      id: 17,
      title: '홍화문',
      type: 'default',
      width: '148.7%',
      height: '121.62%',
      gungId: 'honghwamun',
      image: TileImg.gung25,
      gridArea: 't2',
      top: '-10%',
      left: '20%',
      positionClass: 'tile-1'
    },
    {
      id: 18,
      title: '옥천교',
      type: 'default',
      width: '148.7%',
      height: '121.62%',
      gungId: 'okcheongyo',
      image: TileImg.gung26,
      gridArea: 't4',
      top: '-10%',
      left: '40%',
      positionClass: 'tile-2'
    },
    {
      id: 19,
      title: '명정전',
      type: 'default',
      width: '69.57%',
      height: '108.11%',
      gungId: 'myeongjeongjeon',
      image: TileImg.gung27,
      gridArea: 't6',
      top: '-10%',
      left: '45%',
      positionClass: 'tile-3'
    },
    {
      id: 20,
      title: '문정전',
      type: 'default',
      width: '69.57%',
      height: '108.11%',
      gungId: 'munjeongjeon',
      image: TileImg.gung28,
      gridArea: 't8',
      top: '-10%',
      left: '45%',
      positionClass: 'tile-4'
    },
    {
      id: 21,
      title: '경춘전',
      type: 'default',
      width: '148.7%',
      height: '108.11%',
      gungId: 'gyeongchunjeon',
      image: TileImg.gung29,
      gridArea: 't10',
      top: '0',
      left: '36%',
      positionClass: 'tile-5'
    },
    {
      id: 22,
      title: '영춘헌',
      type: 'default',
      width: '69.57%',
      height: '121.62%',
      gungId: 'yeongchunheon',
      image: TileImg.gung30,
      gridArea: 't11',
      top: '0',
      left: '30%',
      positionClass: 'tile-6'
    },
    {
      id: 23,
      title: '대온실',
      type: 'default',
      width: '148.7%',
      height: '108.11%',
      gungId: 'daeonshil',
      image: TileImg.gung31,
      gridArea: 't12',
      top: '0',
      left: '24%',
      positionClass: 'tile-7'
    },
    {
      id: 24,
      title: '춘당지',
      type: 'default',
      width: '69.57%',
      height: '108.11%',
      gungId: 'chundangji',
      image: TileImg.gung32,
      gridArea: 't14',
      top: '0',
      left: '12%',
      positionClass: 'tile-8'
    }
  ],
  deoksugung: [
    {
      id: 25,
      title: '대한문',
      type: 'default',
      width: '148.7%',
      height: '121.62%',
      gungId: 'daehanmun',
      image: TileImg.gung33,
      gridArea: 't2',
      top: '-10%',
      left: '20%',
      positionClass: 'tile-1'
    },
    {
      id: 26,
      title: '함녕전',
      type: 'default',
      width: '148.7%',
      height: '121.62%',
      gungId: 'hamnyeongjeon',
      image: TileImg.gung34,
      gridArea: 't4',
      top: '-10%',
      left: '40%',
      positionClass: 'tile-2'
    },
    {
      id: 27,
      title: '정관헌',
      type: 'default',
      width: '69.57%',
      height: '108.11%',
      gungId: 'jeonggwanheon',
      image: TileImg.gung35,
      gridArea: 't6',
      top: '-10%',
      left: '45%',
      positionClass: 'tile-3'
    },
    {
      id: 28,
      title: '석어당',
      type: 'default',
      width: '69.57%',
      height: '108.11%',
      gungId: 'seogeodang',
      image: TileImg.gung36,
      gridArea: 't8',
      top: '-10%',
      left: '45%',
      positionClass: 'tile-4'
    },
    {
      id: 29,
      title: '중화전',
      type: 'default',
      width: '148.7%',
      height: '108.11%',
      gungId: 'junghwajeon',
      image: TileImg.gung37,
      gridArea: 't10',
      top: '0',
      left: '36%',
      positionClass: 'tile-5'
    },
    {
      id: 30,
      title: '국립현대미술관',
      type: 'default',
      width: '69.57%',
      height: '121.62%',
      gungId: 'nationalmuseum',
      image: TileImg.gung38,
      gridArea: 't11',
      top: '0',
      left: '30%',
      positionClass: 'tile-6'
    },
    {
      id: 31,
      title: '석조전',
      type: 'default',
      width: '148.7%',
      height: '108.11%',
      gungId: 'seokjojeon',
      image: TileImg.gung39,
      gridArea: 't12',
      top: '0',
      left: '24%',
      positionClass: 'tile-7'
    },
    {
      id: 32,
      title: '돈덕전',
      type: 'default',
      width: '69.57%',
      height: '108.11%',
      gungId: 'dondeokjeon',
      image: TileImg.gung40,
      gridArea: 't14',
      top: '0',
      left: '12%',
      positionClass: 'tile-8'
    }
  ],
  gyeonghuigung: [
    {
      id: 33,
      title: '흥화문',
      type: 'default',
      width: '148.7%',
      height: '121.62%',
      gungId: 'heunghwamun',
      image: TileImg.gung9,
      gridArea: 't2',
      top: '-10%',
      left: '20%',
      positionClass: 'tile-1'
    },
    {
      id: 34,
      title: '숭정전',
      type: 'default',
      width: '148.7%',
      height: '121.62%',
      gungId: 'sungjeongjeon',
      image: TileImg.gung10,
      gridArea: 't4',
      top: '-10%',
      left: '40%',
      positionClass: 'tile-2'
    },
    {
      id: 35,
      title: '자정전',
      type: 'default',
      width: '69.57%',
      height: '108.11%',
      gungId: 'jajeongjeon',
      image: TileImg.gung11,
      gridArea: 't6',
      top: '-10%',
      left: '45%',
      positionClass: 'tile-3'
    },
    {
      id: 36,
      title: '춘관당',
      type: 'default',
      width: '69.57%',
      height: '108.11%',
      gungId: 'chungwandang',
      image: TileImg.gung12,
      gridArea: 't8',
      top: '-10%',
      left: '45%',
      positionClass: 'tile-4'
    },
    {
      id: 37,
      title: '양화당',
      type: 'default',
      width: '148.7%',
      height: '108.11%',
      gungId: 'yanghwadang',
      image: TileImg.gung13,
      gridArea: 't10',
      top: '0',
      left: '36%',
      positionClass: 'tile-5'
    },
    {
      id: 38,
      title: '연못정원',
      type: 'default',
      width: '69.57%',
      height: '121.62%',
      gungId: 'yeonmotjeongwon',
      image: TileImg.gung14,
      gridArea: 't11',
      top: '0',
      left: '30%',
      positionClass: 'tile-6'
    },
    {
      id: 39,
      title: '태령전',
      type: 'default',
      width: '148.7%',
      height: '108.11%',
      gungId: 'taeryeongjeon',
      image: TileImg.gung15,
      gridArea: 't12',
      top: '0',
      left: '24%',
      positionClass: 'tile-7'
    },
    {
      id: 40,
      title: '서울역사박물관',
      type: 'default',
      width: '69.57%',
      height: '108.11%',
      gungId: 'seoulmuseum',
      image: TileImg.gung16,
      gridArea: 't14',
      top: '0',
      left: '12%',
      positionClass: 'tile-8'
    }
  ]
};

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
  },
  changdeokgung: {
    name: "창덕궁",
    address: "서울 종로구 율곡로 99",
    tel: "02-762-8261",
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
        { line: "3", station: "안국역" },
        { line: "5", station: "종로3가역" }
      ],
      bus: {
        간선: ["109", "151", "162", "171"],
        지선: ["7025"],
        기타: "경복궁 또는 덕성여중고 하차"
      }
    }
  },
  changgyeonggung: {
    name: "창경궁",
    address: "서울 종로구 창경궁로 185",
    tel: "02-762-4868",
    time: {
      hours: "9:00~18:00 (입장 마감 17:00)",
      close: "화요일 휴무",
      note: "(하절기, 동절기 입장 마감시간 확인)"
    },
    price: {
      base: "1,000원",
      group: "800원"
    },
    transport: {
      subway: [
        { line: "4", station: "혜화역" },
        { line: null, station: null }
      ],
      bus: {
        간선: ["100", "102", "104", "106"],
        지선: [],
        기타: "성균관대 방면 300m 직진"
      }
    }
  },
  deoksugung: {
    name: "덕수궁",
    address: "서울 중구 세종대로 99",
    tel: "02-771-9951",
    time: {
      hours: "9:00~21:00 (입장 마감 20:00)",
      close: "월요일 휴무",
      note: "(하절기, 동절기 입장 마감시간 확인)"
    },
    price: {
      base: "1,000원",
      group: "800원"
    },
    transport: {
      subway: [
        { line: "2", station: "시청역" },
        { line: "5", station: "광화문역" }
      ],
      bus: {
        간선: ["103", "150", "401", "402"],
        지선: ["1711", "7016"],
        기타: "경복궁 또는 덕성여중고 하차"
      }
    }
  },
  gyeonghuigung: {
    name: "경희궁",
    address: "서울 종로구 새문안로 45",
    tel: "02-724-0274~6",
    time: {
      hours: "9:00~18:00 (입장 마감 17:30)",
      close: "월요일 휴무",
      note: "(하절기, 동절기 입장 마감시간 확인)"
    },
    price: {
      base: "무료",
      group: "무료"
    },
    transport: {
      subway: [
        { line: "3", station: "경복궁역" },
        { line: "5", station: "서대문역" }
      ],
      bus: {
        간선: ["160", "260", "270", "271"],
        지선: [""],
        기타: "경희궁길 방면으로 330m"
      }
    }
  },
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


export const quizData = {
  gyeongbokgung: [
    {
      question: '근정전에서 주로 행해진 의식은 무엇일까요?',
      options: ['왕의 일상 식사', '외국 사신 접대', '국가의 주요 행사와 정무 처리', '왕비의 휴식 공간'],
      answerIndex: 2,
      hint: '근정전은 공적인 공간이었다고 하네~',
      explanation: '근정전은 조선의 법궁인 경복궁의 정전으로, 국가의 주요 행사와 정무를 처리하는 중심 건물이었습니다.'
    },
    {
      question: '경회루에서 주로 열렸던 행사는 무엇일까요?',
      options: ['왕의 즉위식', '외국 사신을 위한 연회', '군사 훈련'],
      answerIndex: 1,
      hint: '경회루는 손님 접대 장소로 자주 쓰였대~',
      explanation: '경회루는 외국 사신을 접대하고 국가의 경사 시 연회를 열었던 장소입니다.'
    },
    {
      question: '향원정은 어떤 목적으로 지어진 정자일까요?',
      options: ['군사 회의 장소', '왕의 공부방', '왕과 왕비의 휴식처', '외국 사신 접대소'],
      answerIndex: 2,
      hint: '왕과 왕비가 함께 쉴 수 있는 공간이었대~',
      explanation: '향원정은 조선 후기 왕과 왕비의 휴식처로 지어진 정자입니다.'
    },
    {
      question: '건청궁은 어떤 사건과 관련이 깊은 장소일까요?',
      options: ['세종대왕의 즉위식', '명성황후 시해 사건', '경복궁 중건', '한글 창제'],
      answerIndex: 1,
      hint: '비극적인 사건이 일어났던 곳이야...',
      explanation: '건청궁은 명성황후 시해 사건인 을미사변이 발생한 장소로 알려져 있습니다.'
    },
    {
      question: '국립고궁박물관은 어떤 유물을 주로 전시하고 있을까요?',
      options: ['현대 미술 작품', '조선 왕실의 유물', '외국 고대 유물'],
      answerIndex: 1,
      hint: '왕실의 역사를 담고 있대!',
      explanation: '국립고궁박물관은 조선 왕실의 유물과 역사를 전시하는 박물관입니다.'
    },
    {
      question: '근정전은 어떤 건축 양식을 가지고 있을까요?',
      options: ['단층 기와집', '중층 팔작지붕', '서양식 석조 건물', '초가집'],
      answerIndex: 1,
      hint: '높고 멋진 지붕 구조를 생각해봐~',
      explanation: '근정전은 중층 팔작지붕의 건축 양식을 가진 건물입니다.'
    },
    {
      question: '경회루는 어떤 구조물 위에 세워졌을까요?',
      options: ['평지', '연못 위', '산 정상'],
      answerIndex: 1,
      hint: '물을 배경으로 한 아름다운 누각이야~',
      explanation: '경회루는 연못 위에 세워진 누각으로, 세 개의 돌다리로 육지와 연결되어 있습니다.'
    },
    {
      question: '향원정의 이름은 어떤 의미를 가지고 있을까요?',
      options: ['향기가 멀리 퍼지는 정자', '왕의 권위를 상징하는 정자', '전쟁 승리를 기념하는 정자', '학문을 장려하는 정자'],
      answerIndex: 0,
      hint: '이름에 향(香)자가 들어가~',
      explanation: "향원정은 '향기가 멀리 퍼진다'는 의미로, 북송대 학자 주돈이의 '애련설'에서 따온 이름입니다."
    }
  ]
};

