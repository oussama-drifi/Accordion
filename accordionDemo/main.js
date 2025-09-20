class Accordion {
    constructor (obj) {
        this.questions = obj;
    }
    render (container) {
        const mainContainer = document.createElement("div");
        mainContainer.className = "main-container";
        for (let key in this.questions) {
            const wrapper = document.createElement("div");
            wrapper.className = "section-wrapper";
            // Questions
            const question = document.createElement("div");
            question.className = "question";
            question.innerHTML = `<p>${key}</p> <span><i class="bi bi-chevron-down"></i></span>`;
            // Answers
            const answer = document.createElement("div");
            answer.className = "answer"
            answer.innerHTML = `<p>${this.questions[key]}</p>`;
            // attach events
            question.addEventListener("click", () => {
                question.nextElementSibling.classList.toggle("show");
                question.classList.toggle("active");
            })
            // append
            wrapper.append(question);
            wrapper.append(answer);
            mainContainer.append(wrapper)
        }
        container.append(mainContainer);
    }
}



const accordion = new Accordion({
    "What is your name?" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. A dignissimos quae cum, nulla sed dolor assumenda iure? Omnis aspernatur necessitatibus odit, dignissimos minima, maiores repellat repellendus obcaecati illum commodi fugit.",
    "How much do you make a year?" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. A dignissimos quae cum, nulla sed dolor assumenda iure? Omnis aspernatur necessitatibus odit, dignissimos minima, maiores repellat repellendus obcaecati illum commodi fugit.",
    "Which country you would like to visit?" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. A dignissimos quae cum, nulla sed dolor assumenda iure? Omnis aspernatur necessitatibus odit, dignissimos minima, maiores repellat repellendus obcaecati illum commodi fugit.",
    "How much money do you wanna get paid?" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. A dignissimos quae cum, nulla sed dolor assumenda iure? Omnis aspernatur necessitatibus odit, dignissimos minima, maiores repellat repellendus obcaecati illum commodi fugit."
})
accordion.render(document.body);