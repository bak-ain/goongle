import { TileImg, TileEventImg } from './img/img';



export const startTile = {
    id: 100,
    title: 'START',
    type: 'start',
    width: '8vw',
    height: '8vw',
    image: null,
    gridArea: 't1'
};

export const quizTile = {
    id: 107,
    title: '궁 퀴즈',
    type: 'quiz',
    width: '8vw',
    height: '7.5vw',
    image: TileImg.quiz,
    gridArea: 't16'
};
export const eventTiles = [
    {
        id: 101, title: '이벤트1', type: 'event', width: '8vw', height: '7.5vw', gridArea: 't3',
        front: { image: TileEventImg.event1, text: '이벤트1' },
        back: { image: TileEventImg.event1, text: '랜덤선물!' }
    },
    {
        id: 102, title: '이벤트2', type: 'event',width: '8vw', height: '7.5vw', gridArea: 't5',
        front: { image: TileEventImg.event2, text: '이벤트2' },
        back: { image: TileEventImg.event2, text: '게임기회!' }
    },
    {
        id: 103, title: '이벤트3', type: 'event', width: '8.5vw', height: '7.6vw', gridArea: 't7',
        front: { image: TileEventImg.event3, text: '이벤트3' },
        back: { image: TileEventImg.event3, text: '추첨참여!' }
    },
    {
        id: 104, title: '이벤트4', type: 'event', width: '8vw', height: '7.5vw', gridArea: 't9',
        front: { image: TileEventImg.event4, text: '이벤트4' },
        back: { image: TileEventImg.event4, text: '왕의선물!' }
    },
    {
        id: 105, title: '이벤트5', type: 'event', width: '8vw', height: '7.5vw', gridArea: 't13',
        front: { image: TileEventImg.event5, text: '이벤트5' },
        back: { image: TileEventImg.event5, text: '명소사진!' }
    },
    {
        id: 106, title: '이벤트6', type: 'event', width: '8.5vw', height: '8vw', gridArea: 't15',
        front: { image: TileEventImg.event6, text: '이벤트6' },
        back: { image: TileEventImg.event6, text: '기념뱃지!' }
    },
]
export const map1Tiles = [
    { id: 1, title: '경복궁', type: 'default', width: '17.5vw', height: '8.5vw', gungId: 'gyeongbokgung', image: TileImg.gung, gridArea: 't2' },
    { id: 2, title: '근정전', type: 'default', width: '17.5vw', height: '8.5vw', gungId: 'geunjeongjeon', image: TileImg.gung, gridArea: 't4' },
    { id: 3, title: '수정전', type: 'default', width: '8vw', height: '7.5vw', gungId: 'sujeongjeon', image: TileImg.gung, gridArea: 't6' },
    { id: 4, title: '경회루', type: 'default', width: '8vw', height: '7.5vw', gungId: 'gyeonghoeru', image: TileImg.gung, gridArea: 't8' },
    { id: 5, title: '강녕전', type: 'default', width: '17.5vw', height: '7.5vw', gungId: 'gangnyeongjeon', image: TileImg.gung, gridArea: 't10' },
    { id: 6, title: '향원정', type: 'default', width: '8vw', height: '8.5vw', gungId: 'hyangwonjeong', image: TileImg.gung, gridArea: 't11' },
    { id: 7, title: '건청궁', type: 'default', width: '17.5vw', height: '7.5vw', gungId: 'geoncheonggung', image: TileImg.gung, gridArea: 't12' },
    { id: 8, title: '고궁박물관', type: 'default', width: '8vw', height: '7.5vw', gungId: 'gogungmuseum', image: TileImg.gung, gridArea: 't14' },
]

