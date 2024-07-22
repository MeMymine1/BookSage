document.addEventListener('DOMContentLoaded', function () {
    const beginSearchButton = document.getElementById('begin-search-button');
    beginSearchButton.addEventListener('click', function () {
        document.getElementById('begin-search').scrollIntoView({
            behavior: 'smooth'
        });
    });

    function displayRandomBook() {
        const randomIndex = Math.floor(Math.random() * allBooks.length);
        const randomBook = allBooks[randomIndex];

        document.getElementById('random-book-image').src = randomBook.image;
        document.getElementById('random-book-image').alt = randomBook.title;
        document.querySelector('.random-book-title').textContent = randomBook.title;
    }

    window.displayRandomBook = displayRandomBook;

    document.getElementById('random-book-image').src = 'assets/random-book.jpeg';

    const navLinks = document.querySelectorAll('.nav-links a, .menu-links a');

    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const targetId = this.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    const backToTopButton = document.getElementById('back-to-top');

    window.onscroll = function () {
        scrollFunction();
    };

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    }

    backToTopButton.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    const booksGrid = document.querySelector('.books-grid');
    const fixedBooks = [
        { id: 'book1', title: 'Tender Is the Flesh', author: 'Agustina Bazterrica', genre: 'horror', length: 'novel', vibes: 'dark', readingLevel: 'more challenging, dense texts', image: 'assets/book3.jpeg', description: 'In a dystopian future where humans are bred for meat, this chilling novel explores the morality and humanity of our actions.' },
        { id: 'book2', title: 'To Kill a Mockingbird', author: 'Harper Lee', genre: 'fiction', length: 'novel', vibes: 'heartwarming', readingLevel: 'easy reads', image: 'assets/book1.jpeg', description: 'A classic novel of racism and injustice in the deep South, seen through the eyes of a young girl.' },
        { id: 'book3', title: '1984', author: 'George Orwell', genre: 'sci-fi', length: 'novel', vibes: 'dark', readingLevel: 'more challenging, dense texts', image: 'assets/book2.jpeg', description: 'A dystopian novel about a totalitarian regime that uses surveillance, censorship, and torture to control its citizens.' },
        { id: 'book4', title: 'The Vanishing Half', author: 'Brit Bennett', genre: 'fiction', length: 'novel', vibes: 'heartwarming', readingLevel: 'easy reads', image: 'assets/book7.jpeg', description: 'A story of twin sisters who choose to live in two very different worlds, exploring themes of race, identity, and family.' },
        { id: 'book5', title: 'Where the Crawdads Sing', author: 'Delia Owens', genre: 'mystery', length: 'novel', vibes: 'suspenseful', readingLevel: 'easy reads', image: 'assets/book4.jpeg', description: 'A murder mystery intertwined with a coming-of-age story set in the marshlands of North Carolina.' },
        { id: 'book6', title: 'The Silent Patient', author: 'Alex Michaelides', genre: 'mystery', length: 'novel', vibes: 'suspenseful', readingLevel: 'easy reads', image: 'assets/book6.jpeg', description: 'A psychological thriller about a woman who stops speaking after being accused of murdering her husband.' },
        { id: 'book7', title: 'The Midnight Library', author: 'Matt Haig', genre: 'fantasy', length: 'novel', vibes: 'heartwarming', readingLevel: 'easy reads', image: 'assets/book5.jpeg', description: 'A magical realism novel about a library that allows visitors to explore all the different lives they could have lived.' },
        { id: 'book8', title: 'Follow Me To Ground', author: 'Sue Rainsford', genre: 'horror', length: 'novel', vibes: 'dark', readingLevel: 'more challenging, dense texts', image: 'assets/book8.jpeg', description: 'A dark and surreal novel about a healer and her father who cure the sick by burying them in the ground.' },
        { id: 'book9', title: 'The Stolen Child', author: 'Lisa Carey', genre: 'fantasy', length: 'novel', vibes: 'suspenseful', readingLevel: 'easy reads', image: 'assets/book9.jpeg', description: 'A mystical novel about a remote island community and the strange happenings that occur there.' },
        { id: 'book10', title: 'She Is Haunted', author: 'Paige Clark', genre: 'fiction', length: 'short story', vibes: 'dark', readingLevel: 'easy reads', image: 'assets/book10.jpeg', description: 'A collection of short stories that explore the complexities of life, death, and everything in between.' },
        { id: 'book11', title: 'The Majesties', author: 'Tiffany Tsao', genre: 'fiction', length: 'novel', vibes: 'dark', readingLevel: 'more challenging, dense texts', image: 'assets/book11.jpeg', description: 'A dark family saga about two sisters and the deadly secret that binds them.' },
        { id: 'book12', title: 'The Master and Margarita', author: 'Mikhail Bulgakov', genre: 'fantasy', length: 'novel', vibes: 'funny', readingLevel: 'more challenging, dense texts', image: 'assets/book12.jpeg', description: 'A satirical novel that intertwines the story of the Devil visiting Soviet Russia with a retelling of the trial of Jesus.' },
        { id: 'book13', title: 'Normal People', author: 'Sally Rooney', genre: 'romance', length: 'novel', vibes: 'heartwarming', readingLevel: 'easy reads', image: 'assets/book13.jpeg', description: 'A contemporary love story about two people who can’t seem to stay away from each other despite their differences.' },
        { id: 'book14', title: 'The Crucible', author: 'Arthur Miller', genre: 'fiction', length: 'novel', vibes: 'dark', readingLevel: 'more challenging, dense texts', image: 'assets/book14.jpeg', description: 'A historical drama about the Salem witch trials and the hysteria that led to the execution of innocent people.' }
    ];

    booksGrid.innerHTML = '';
    fixedBooks.forEach((book, index) => {
        const bookElement = createBookElement(book, index + 1);
        booksGrid.appendChild(bookElement);
    });
});

function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

function createBookElement(bookData, position) {
    const bookElement = document.createElement('div');
    bookElement.classList.add('book');
    bookElement.id = `book${position}`;
    bookElement.dataset.title = bookData.title;
    bookElement.dataset.author = bookData.author;
    bookElement.dataset.description = bookData.description;

    const imgElement = document.createElement('img');
    imgElement.src = bookData.image;
    imgElement.alt = bookData.title;

    const infoElement = document.createElement('div');
    infoElement.classList.add('book-info');

    const titleElement = document.createElement('span');
    titleElement.textContent = bookData.title;

    const authorElement = document.createElement('p');
    authorElement.textContent = bookData.author;

    titleElement.style.color = 'white';
    authorElement.style.color = 'white';

    infoElement.appendChild(titleElement);
    infoElement.appendChild(authorElement);

    bookElement.appendChild(imgElement);
    bookElement.appendChild(infoElement);

    bookElement.addEventListener('click', () => {
        openModal(bookData);
    });

    return bookElement;
}

function showForm() {
    document.querySelector('.begin-search-container').style.display = 'none';
    document.getElementById('formContainer').style.display = 'block';
}

function nextStep(step) {
    const currentStep = document.querySelector('.step.active');
    const inputs = currentStep.querySelectorAll('input, select');
    let allValid = true;

    inputs.forEach(input => {
        if (!input.value) {
            allValid = false;
        }
    });

    if (allValid) {
        currentStep.classList.remove('active');
        document.getElementById('step' + step).classList.add('active');
    } else {
        alert('Please fill out all fields before proceeding.');
    }
}

function prevStep(step) {
    const currentStep = document.querySelector('.step.active');
    currentStep.classList.remove('active');
    document.getElementById('step' + step).classList.add('active');
}

function validateForm() {
    const currentStep = document.querySelector('.step.active');
    const inputs = currentStep.querySelectorAll('input, select');
    let allValid = true;

    inputs.forEach(input => {
        if (!input.value) {
            allValid = false;
        }
    });

    if (!allValid) {
        alert('Please fill out all fields before submitting.');
    }

    return allValid;
}

document.getElementById('bookForm').addEventListener('submit', function (event) {
    event.preventDefault();
    if (validateForm()) {
        const author = document.getElementById('author').value;
        const genre = document.getElementById('genre').value;
        const length = document.getElementById('length').value;
        const vibes = document.getElementById('vibes').value;
        const readingLevel = document.getElementById('readingLevel').value;

        const recommendations = getRecommendations({ author, genre, length, vibes, readingLevel });

        document.getElementById('formContainer').style.display = 'none';
        displayRecommendations(recommendations);
    }
});

function getRecommendations(criteria) {
    const matchedBooks = allBooks.filter(book => {
        let matches = 0;
        if (book.genre === criteria.genre) matches++;
        if (book.length === criteria.length) matches++;
        if (book.vibes === criteria.vibes) matches++;
        if (book.readingLevel === criteria.readingLevel) matches++;
        return matches >= 2;
    });

    const uniqueRecommendations = matchedBooks.slice(0, 3);

    return uniqueRecommendations;
}

function displayRecommendations(recommendations) {
    const resultsContainer = document.getElementById('results');
    const booksGrid = resultsContainer.querySelector('.books-grid');
    booksGrid.innerHTML = '';

    recommendations.forEach((book, index) => {
        const bookElement = createBookElement(book, index + 1);
        booksGrid.appendChild(bookElement);
    });

    resultsContainer.style.display = 'block';
}

function openModal(bookData) {
    const modal = document.getElementById('bookModal');
    document.getElementById('modalBookImage').src = bookData.image;
    document.getElementById('modalBookTitle').textContent = bookData.title;
    document.getElementById('modalBookAuthor').textContent = bookData.author;
    document.getElementById('modalBookDescription').textContent = bookData.description;
    modal.style.display = 'block';
}

function closeModal() {
    const modal = document.getElementById('bookModal');
    modal.style.display = 'none';
}

window.onclick = function (event) {
    const modal = document.getElementById('bookModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}
