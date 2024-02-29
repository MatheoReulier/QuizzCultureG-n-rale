// script.js
const questions = [
    { 
        question: "Quel est le nom de la plus grande planète du système solaire ?", 
        options: ["Jupiter", "Saturne", "Mars", "Vénus"], 
        answer: "Jupiter" 
    },
    { 
        question: "Quel est le plus grand océan sur Terre ?", 
        options: ["Océan Atlantique", "Océan Arctique", "Océan Indien", "Océan Pacifique"], 
        answer: "Océan Pacifique" 
    },
    { 
        question: "Quel est le symbole chimique de l'eau ?", 
        options: ["H2O", "CO2", "O2", "HCl"], 
        answer: "H2O" 
    },
    { 
        question: "Quelle est la capitale du Japon ?", 
        options: ["Shanghai", "Pékin", "Tokyo", "Séoul"], 
        answer: "Tokyo" 
    },
    { 
        question: "Combien de continents y a-t-il sur Terre ?", 
        options: ["5", "6", "7", "8"], 
        answer: "7" 
    },
    { 
        question: "Qui a écrit 'Roméo et Juliette' ?", 
        options: ["Victor Hugo", "William Shakespeare", "Jane Austen", "Charles Dickens"], 
        answer: "William Shakespeare" 
    },
    { 
        question: "Quel est le symbole chimique de l'oxygène ?", 
        options: ["O2", "H2O", "CO2", "N2"], 
        answer: "O2" 
    },
    { 
        question: "Quel est le plus grand désert du monde ?", 
        options: ["Désert du Sahara", "Désert de Gobi", "Désert de l'Atacama", "Désert d'Arabie"], 
        answer: "Désert de l'Antarctique" 
    },
    { 
        question: "Qui a peint 'La Joconde' ?", 
        options: ["Leonardo da Vinci", "Vincent van Gogh", "Pablo Picasso", "Claude Monet"], 
        answer: "Leonardo da Vinci" 
    },
    { 
        question: "Quel est le nom du premier homme à avoir marché sur la Lune ?", 
        options: ["Buzz Aldrin", "Neil Armstrong", "Yuri Gagarin", "Michael Collins"], 
        answer: "Neil Armstrong" 
    },
    { 
        question: "Combien de lettres compte l'alphabet anglais ?", 
        options: ["24", "25", "26", "27"], 
        answer: "26" 
    },
    { 
        question: "Qui a écrit 'Les Misérables' ?", 
        options: ["Gustave Flaubert", "Victor Hugo", "Albert Camus", "Émile Zola"], 
        answer: "Victor Hugo" 
    },
    { 
        question: "Quelle est la capitale de l'Espagne ?", 
        options: ["Rome", "Paris", "Madrid", "Londres"], 
        answer: "Madrid" 
    },
    { 
        question: "Quel est l'élément le plus abondant dans l'Univers ?", 
        options: ["Hydrogène", "Hélium", "Oxygène", "Carbone"], 
        answer: "Hydrogène" 
    },
    { 
        question: "Quel est le plus long fleuve du monde ?", 
        options: ["Nil", "Mississippi", "Amazone", "Yangtsé"], 
        answer: "Nil" 
    },
    { 
        question: "Qui a écrit 'Le Petit Prince' ?", 
        options: ["Jules Verne", "Antoine de Saint-Exupéry", "H.G. Wells", "F. Scott Fitzgerald"], 
        answer: "Antoine de Saint-Exupéry" 
    },
    { 
        question: "Quel est le composant principal de l'air ?", 
        options: ["Azote", "Oxygène", "Argon", "Dioxyde de carbone"], 
        answer: "Azote" 
    },
    { 
        question: "Quel est le plus haut sommet du monde ?", 
        options: ["K2", "Mont Everest", "Kangchenjunga", "Lhotse"], 
        answer: "Mont Everest" 
    },
    { 
        question: "Qui a peint 'La Nuit étoilée' ?", 
        options: ["Pablo Picasso", "Vincent van Gogh", "Claude Monet", "Salvador Dalí"], 
        answer: "Vincent van Gogh" 
    },
    { 
        question: "Quel est le symbole chimique du fer ?", 
        options: ["Fe", "F", "Ir", "Fr"], 
        answer: "Fe" 
    },
    { 
        question: "Quel est le nom de la plus haute montagne d'Afrique ?", 
        options: ["Mont Kilimandjaro", "Mont Blanc", "Mont Everest", "Mont Fuji"], 
        answer: "Mont Kilimandjaro" 
    },
    { 
        question: "Quel est le plus grand mammifère terrestre ?", 
        options: ["Éléphant", "Baleine bleue", "Girafe", "Rhinocéros"], 
        answer: "Éléphant" 
    },
    { 
        question: "Quelle est la plus grande île du monde ?", 
        options: ["Groenland", "Australie", "Madagascar", "Île de Bornéo"], 
        answer: "Groenland" 
    },
    { 
        question: "Quel est le pays le plus peuplé du monde ?", 
        options: ["Chine", "Inde", "États-Unis", "Brésil"], 
        answer: "Chine" 
    },
    { 
        question: "Quelle est la monnaie officielle du Japon ?", 
        options: ["Yen", "Won", "Dollar", "Euro"], 
        answer: "Yen" 
    },
    { 
        question: "Qui a découvert la pénicilline en 1928 ?", 
        options: ["Alexander Fleming", "Louis Pasteur", "Robert Koch", "Joseph Lister"], 
        answer: "Alexander Fleming" 
    },
    { 
        question: "Quelle est la plus haute montagne d'Afrique ?", 
        options: ["Mont Kilimandjaro", "Mont Kenya", "Mont Meru", "Mont Elgon"], 
        answer: "Mont Kilimandjaro" 
    },
    { 
        question: "Quelle est la langue la plus parlée au monde ?", 
        options: ["Anglais", "Espagnol", "Mandarin", "Hindi"], 
        answer: "Mandarin" 
    },
    { 
        question: "Qui a écrit '1984' ?", 
        options: ["Aldous Huxley", "George Orwell", "Ray Bradbury", "H.G. Wells"], 
        answer: "George Orwell" 
    },
    { 
        question: "Quelle est la devise de la France ?", 
        options: ["Liberté, Égalité, Fraternité", "E Pluribus Unum", "In God We Trust", "Ich dien"], 
        answer: "Liberté, Égalité, Fraternité" 
    },
    { 
        question: "Quel est le plus grand lac d'Afrique ?", 
        options: ["Lac Victoria", "Lac Tanganyika", "Lac Malawi", "Lac Tchad"], 
        answer: "Lac Victoria" 
    },
    { 
        question: "Qui a écrit 'Hamlet' ?", 
        options: ["Christopher Marlowe", "Ben Jonson", "Thomas Middleton", "William Shakespeare"], 
        answer: "William Shakespeare" 
    },
    { 
        question: "Quelle est la plus grande île du monde par sa superficie ?", 
        options: ["Australie", "Groenland", "Borneo", "Madagascar"], 
        answer: "Groenland" 
    },
    { 
        question: "Quel est le plus grand animal terrestre ?", 
        options: ["Éléphant", "Girafe", "Rhinocéros", "Hippopotame"], 
        answer: "Éléphant" 
    },
    { 
        question: "Quelle est la monnaie officielle du Japon ?", 
        options: ["Yen", "Won", "Dollar", "Euro"], 
        answer: "Yen" 
    },
    { 
        question: "Qui a découvert la pénicilline en 1928 ?", 
        options: ["Alexander Fleming", "Louis Pasteur", "Robert Koch", "Joseph Lister"], 
        answer: "Alexander Fleming" 
    },
    { 
        question: "Quelle est la plus haute montagne d'Afrique ?", 
        options: ["Mont Kilimandjaro", "Mont Kenya", "Mont Meru", "Mont Elgon"], 
        answer: "Mont Kilimandjaro" 
    },
    { 
        question: "Quelle est la langue la plus parlée au monde ?", 
        options: ["Anglais", "Espagnol", "Mandarin", "Hindi"], 
        answer: "Mandarin" 
    },
    { 
        question: "Qui a écrit '1984' ?", 
        options: ["Aldous Huxley", "George Orwell", "Ray Bradbury", "H.G. Wells"], 
        answer: "George Orwell" 
    },
    { 
        question: "Quelle est la devise de la France ?", 
        options: ["Liberté, Égalité, Fraternité", "E Pluribus Unum", "In God We Trust", "Ich dien"], 
        answer: "Liberté, Égalité, Fraternité" 
    }
];

let gameInProgress = false;
let currentQuestionIndex = 0;
let score = 0;
let jokerUsed = false;
let timer;

function startQuiz() {
    resetQuiz();
    gameInProgress = true;
    document.getElementById('start-btn').style.display = 'none';
    shuffleQuestions(); // Mélanger les questions au début de chaque partie
    showQuestion();
}

function shuffleQuestions() {
    for (let i = questions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [questions[i], questions[j]] = [questions[j], questions[i]];
    }
}

function showQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById('question-number').innerText = `Question ${currentQuestionIndex + 1}/${questions.length}`;
    document.getElementById('question-text').innerText = question.question;
    const options = document.getElementsByClassName('option');
    for (let i = 0; i < options.length; i++) {
        options[i].innerText = question.options[i];
        options[i].classList.remove('correct', 'incorrect');
        options[i].disabled = false;
    }
    startTimer();
}

function startTimer() {
    let timeLeft = 30;
    document.getElementById('timer').innerText = `${timeLeft} s`;
    timer = setInterval(() => {
        timeLeft--;
        if (timeLeft <= 0) {
            clearInterval(timer);
            goToNextQuestion();
        }
        document.getElementById('timer').innerText = `${timeLeft} s`;
    }, 1000);
}

function checkAnswer(option) {
    if (!gameInProgress) return; // Ignorer les clics si le jeu est arrêté
    clearInterval(timer);
    const selectedAnswer = option.innerText;
    const correctAnswer = questions[currentQuestionIndex].answer;
    if (selectedAnswer === correctAnswer) {
        option.classList.add('correct');
        score++;
    } else {
        option.classList.add('incorrect');
        document.querySelector('.option').innerText = correctAnswer;
    }
    disableOptions();
}

function disableOptions() {
    const options = document.getElementsByClassName('option');
    for (let i = 0; i < options.length; i++) {
        options[i].disabled = true;
    }
    setTimeout(goToNextQuestion, 2000);
}

function goToNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        endQuiz();
    }
}

function endQuiz() {
    document.getElementById('score').innerText = score;
    document.getElementById('total-questions').innerText = questions.length;
    document.getElementById('score-container').style.display = 'block';
    resetQuiz();
}

function resetQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    clearInterval(timer);
    document.getElementById('start-btn').style.display = 'block';
    jokerAvailable = true;
    const jokerBtn = document.getElementById('joker');
    jokerBtn.disabled = false;
    jokerBtn.style.display = 'block'; // Assurez-vous que le joker est visible au début de chaque partie
    clearInterval(timer);
    document.getElementById('score-container').style.display = 'none'; // Cacher le score au début de chaque partie
}

// Déclaration des variables globales...

let jokerAvailable = true;

// Fonctions pour gérer le jeu...

function useJoker() {
    if (jokerAvailable) {
        const options = document.getElementsByClassName('option');
        const correctAnswer = questions[currentQuestionIndex].answer;
        let optionsToDisable = 2;
        while (optionsToDisable > 0) {
            const randomIndex = Math.floor(Math.random() * 4);
            if (options[randomIndex].innerText !== correctAnswer && !options[randomIndex].disabled) {
                options[randomIndex].disabled = true;
                optionsToDisable--;
            }
        }
        jokerAvailable = false;
        document.getElementById('joker').disabled = true;
    }
}

function goToNextQuestion() {
    currentQuestionIndex++;
    jokerAvailable = true; // Réinitialiser le joker pour la prochaine question
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        endQuiz();
    }
}
function goHome() {
    resetQuiz();
    document.getElementById('start-btn').style.display = 'block';
    gameInProgress = false; // Arrêter le jeu lorsqu'on retourne à l'accueil
}
