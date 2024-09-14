const quotes = [
    {
        quote: "R = VD (Realization = Vivid Dream)",
        autoer: "이지성",
    },
    {
        quote: "땀에 젖은 유니폼, 그것이 내가 보여줄 수 있는 전부다.",
        autoer: "폴 스콜스",
    },
    {
        quote: " 세상을 바꿀 수 있다고 생각하는 제대로 정신 나간 사람들이 세상을 변화시킨다.",
        autoer: "스티브 잡스",
    },
    {
        quote: "자기 IQ 뽐내는 사람은 ‘루저’다.",
        autoer: "스티븐 호킹",
    },
    {
        quote: "Boys, be ambitious! (소년이여, 야망을 가져라!)",
        autoer: "윌리엄 스미스 클라크",
    },
    {
        quote: "Just do it!",
        autoer: "나이키",
    },
    {
        quote: "피할수 없으면 즐겨라",
        autoer: "로버트 엘리엇",
    },
    {
        quote: "행복은 습관이다,그것을 몸에 지니라",
        autoer: "허버드",
    },
    {
        quote: "수십 번 넘어져도 젊음을 무기 삼아 도전하라",
        autoer: "마크 저커 버그",
    },
    {
        quote: "Hakuna matata (괜찮아, 다 잘 될거야)",
        autoer: "라이온킹",
    }
];

const quote = document.querySelector("#quote span:first-child");
const auther = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = `"${todaysQuote.quote}"`;
auther.innerText = `-${todaysQuote.autoer}-`;