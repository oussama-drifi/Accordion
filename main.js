class Accordion {
    constructor(items) {
        this.items = items;
    }

    render(container) {
        const mainContainer = document.createElement("div");
        mainContainer.className = "main-container";

        for (const [question, answer] of Object.entries(this.items)) {
            const wrapper = document.createElement("div");
            wrapper.className = "section-wrapper";

            const questionEl = document.createElement("div");
            questionEl.className = "question";
            questionEl.setAttribute("role", "button");
            questionEl.setAttribute("tabindex", "0");
            questionEl.innerHTML = `<p>${question}</p><span aria-hidden="true"><i class="bi bi-chevron-down"></i></span>`;

            const answerEl = document.createElement("div");
            answerEl.className = "answer";
            answerEl.innerHTML = `<p>${answer}</p>`;

            const toggle = () => {
                const isOpen = answerEl.classList.toggle("show");
                questionEl.classList.toggle("active", isOpen);
                questionEl.setAttribute("aria-expanded", isOpen);
            };

            questionEl.addEventListener("click", toggle);
            questionEl.addEventListener("keydown", (e) => {
                if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    toggle();
                }
            });

            wrapper.append(questionEl, answerEl);
            mainContainer.append(wrapper);
        }

        container.append(mainContainer);
    }
}

const accordion = new Accordion({
    "What is your favourite programming language?": "Lorem ipsum dolor sit amet consectetur adipisicing elit. A dignissimos quae cum, nulla sed dolor assumenda iure? Omnis aspernatur necessitatibus odit, dignissimos minima, maiores repellat repellendus obcaecati illum commodi fugit.",
    "How many years of experience do you have?": "Lorem ipsum dolor sit amet consectetur adipisicing elit. A dignissimos quae cum, nulla sed dolor assumenda iure? Omnis aspernatur necessitatibus odit, dignissimos minima, maiores repellat repellendus obcaecati illum commodi fugit.",
    "Which company would you like to work for?": "Lorem ipsum dolor sit amet consectetur adipisicing elit. A dignissimos quae cum, nulla sed dolor assumenda iure? Omnis aspernatur necessitatibus odit, dignissimos minima, maiores repellat repellendus obcaecati illum commodi fugit.",
    "What are your salary expectations?": "Lorem ipsum dolor sit amet consectetur adipisicing elit. A dignissimos quae cum, nulla sed dolor assumenda iure? Omnis aspernatur necessitatibus odit, dignissimos minima, maiores repellat repellendus obcaecati illum commodi fugit."
});

accordion.render(document.body);