const quotes = [
    {
        quote:"무엇을 선택하느냐 보다는 선택 이후의 행동이 더 중요하다",
        author:"- 유재석",
    },
    {
        quote:"혀를 다스리는 것은 나지만 내뱉어진 말이 거꾸로 나를 다스린다.", 
        author:"- 유재석",
    },
    {
        quote:"삶에서 가장 중요한 것은 자기 자신이 마음에 들어야 하는 것이다",
        author:"- 박진영",
    },
    {
        quote:"나만 힘든 건 아니지만 네가 더 힘든 걸 안다고 내가 안 힘든 건 아니다",
        author:"- 유병재",
    },
    {
        quote:"하려면 제대로 하고 안 할 거면 다른 사람에게 피해 주지 말고 일찌감치 때려치워라 나도 후배들에게 이런 말을 하면서 스스로를 재무장한다",
        author:"- 최민식",
    },
    {
        quote:"돈이 행복이 아니지만돈 없이 행복하긴 어렵다",
        author:"- 옥택연",
    },
    {
        quote:"마음 먹은 일이 잘 안될때 만만한 꿈부터 꾸세요. 소박한 꿈을 이뤄가면서 성공하는 습관을 기르는거죠.",
        author:"- 이영자",
    },
    {
        quote:"'일을 즐기라'라는 말은 기분 좋게 하는 말에 불과하다.",
        author:"- 서장훈",
    },
    {
        quote:"모든 게 다 좋은 그런 인생은 없어 상황이 안될 땐 그럴 땐 그냥 웃어야지",
        author:"- 유재석",
    },
    {
        quote:"겉 모습이 촌스러운 것은 용서가 되는데 마인드가 촌스러운 것은 용서가 안 돼요.",
        author:"- 김혜수",
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;