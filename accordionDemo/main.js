class Accordion {
    constructor (obj) {
        this.questions = obj;
    }
    render (container) {
        const mainContainer = document.createElement("div");
        mainContainer.className = "main-container";
        for (let question in this.questions) {
            const wrapper = document.createElement("div");
            wrapper.className = "section-wrapper";
            // Questions
            const questionWrapper = document.createElement("div");
            questionWrapper.className = "question";
            questionWrapper.innerHTML = `<p>${question}</p> <span><i class="bi bi-chevron-down"></i></span>`;
            // Answers
            const answer = document.createElement("div");
            answer.className = "answer"
            answer.innerHTML = `<p>${this.questions[question]}</p>`;
            // attach events
            questionWrapper.addEventListener("click", () => {
                questionWrapper.nextElementSibling.classList.toggle("show");
                questionWrapper.classList.toggle("active");
            });
            // append
            wrapper.append(questionWrapper);
            wrapper.append(answer);
            mainContainer.append(wrapper);
        }
        container.append(mainContainer);
    }
}



const accordion = new Accordion({
    "What is your favourite programming language?" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. A dignissimos quae cum, nulla sed dolor assumenda iure? Omnis aspernatur necessitatibus odit, dignissimos minima, maiores repellat repellendus obcaecati illum commodi fugit.",
    "How many years of experience do you have?" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. A dignissimos quae cum, nulla sed dolor assumenda iure? Omnis aspernatur necessitatibus odit, dignissimos minima, maiores repellat repellendus obcaecati illum commodi fugit.",
    "Which company would you like to work for?" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. A dignissimos quae cum, nulla sed dolor assumenda iure? Omnis aspernatur necessitatibus odit, dignissimos minima, maiores repellat repellendus obcaecati illum commodi fugit.",
    "What are your salary expectations?" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. A dignissimos quae cum, nulla sed dolor assumenda iure? Omnis aspernatur necessitatibus odit, dignissimos minima, maiores repellat repellendus obcaecati illum commodi fugit."
})
accordion.render(document.body);