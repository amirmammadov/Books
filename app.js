//selecting part
const links = document.querySelector(".links");
const navToggle = document.querySelector(".nav-toggle");

const books = [
  {
    id: 1,
    title: "Crime And Punishment",
    author: "F.M.DOSTEYEVSKY",
    img: "media/book-1.jpeg",
    price: "10$",
    category: "Fiction",
  },
  {
    id: 2,
    title: "New Brave World",
    author: "ALDOUS HUXLEY",
    img: "media/book-2.jpg",
    price: "12$",
    category: "Novel",
  },
  {
    id: 3,
    title: "The Picture of Dorian Gray",
    author: "OSCAR WILDE",
    img: "media/book-3.jpg",
    price: "8$",
    category: "Fiction",
  },
  {
    id: 4,
    title: "The Transformation",
    author: "FRANZ KAFTA",
    img: "media/book-4.jpg",
    price: "10$",
    category: "Fantasy",
  },

  {
    id: 5,
    title: "The Gambler",
    author: "F.M.DOSTEYEVSKY",
    img: "media/book-5.jpg",
    price: "10$",
    category: "Novel",
  },
  {
    id: 6,
    title: "1984",
    author: "GEORGE ORWELL",
    img: "media/book-6.jpg",
    price: "9$",
    category: "Fantasy",
  },
  {
    id: 7,
    title: "Think And Grow Rich",
    author: "NAPOLEON HILL",
    img: "media/book-7.jpg",
    price: "11$",
    category: "Self-help",
  },
];

//toggling for navigation menu
navToggle.addEventListener("click", function () {
  if (!navToggle.classList.contains("active")) {
    navToggle.classList.add("active");
    links.classList.add("active");
  } else {
    navToggle.classList.remove("active");
    links.classList.remove("active");
  }
});

//toggling for location section
const locationBtns = document.querySelectorAll(".location-btn");
const locationInfo = document.querySelectorAll(".location-info");

locationBtns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    const ID = btn.getAttribute("id");
    locationInfo.forEach(function (info) {
      const element = info.getAttribute("data-id");
      if (element === ID) {
        info.classList.add("active");
      } else {
        info.classList.remove("active");
      }
    });
    locationBtns.forEach(function (location) {
      location.classList.remove("active");
    });
    let item = document.getElementById(ID);
    item.classList.add("active");
  });
});

//modal

const modalButtons = document.querySelectorAll(".plans-btn");
const modalItems = document.querySelectorAll(".plans-item-modal");
const closeButtons = document.querySelectorAll(".closeModal");

modalButtons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    const buttonID = button.getAttribute("id");
    modalItems.forEach(function (item) {
      const modalID = item.getAttribute("data-id");
      if (modalID === buttonID) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
      // if (item.classList.contains("active")) {
      //   const body = document.getElementsByTagName("body");
      //   body.style.overflow = "hidden";
      // }
    });
  });
});

closeButtons.forEach(function (closeBtn) {
  closeBtn.addEventListener("click", function () {
    const parent = closeBtn.parentNode;
    parent.classList.remove("active");
  });
});

// book filter section settings

const bookCenter = document.querySelector(".book-list-center");
const bookButtons = document.querySelector(".book-list-buttons");

window.addEventListener("DOMContentLoaded", function () {
  displayBookItems(books);
  displayBookBtns();
});

function displayBookItems(bookItems) {
  let displayBook = bookItems.map(function (book) {
    return `<article class="book-item">
    <img
      src=${book.img}
      alt=${book.title}
      class="book-item-img"
    />
    <h2><span>name: </span>${book.title}</h2>
    <h3><span>author: </span>${book.author}</h3>
    <h4><span>price: </span>${book.price}</h4>
    <button class="book-item-btn">get the book</button>
  </article>`;
  });
  displayBook = displayBook.join("");
  bookCenter.innerHTML = displayBook;
}

function displayBookBtns() {
  const categories = books.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );

  const categoryBtns = categories
    .map(function (category) {
      return `<button type="button" class="book-list-btn" data-id=${category}>${category}</button>`;
    })
    .join("");
  bookButtons.innerHTML = categoryBtns;

  const bookListButtons = document.querySelectorAll(".book-list-btn");

  bookListButtons.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      const category = e.currentTarget.dataset.id;
      const bookCategory = books.filter(function (bookItem) {
        if (bookItem.category === category) {
          return bookItem;
        }
      });
      if (category === "all") {
        displayBookItems(books);
      } else {
        displayBookItems(bookCategory);
      }
    });
  });
}

const swiper = new Swiper(".discount-content", {
  spaceBetween: 5,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  breakpoints: {
    400: {
      slidesPerView: 1,
    },
    600: {
      slidesPerView: 2,
    },
    870: {
      slidesPerView: 3,
    },
    2500: {
      slidesPerView: 3,
    },
  },
});
