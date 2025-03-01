document.addEventListener("DOMContentLoaded", function () {
  let music = document.getElementById("bg-music");

  let currentQuestion = 0;
  const questions = [
    {
      question: "Kita keluar pertama kali pergi makan apa?",
      answer: "roti bakar",
    },
    {
      question: "Ketika PDKT kegiatan apa yang sering kita lakuin?",
      answer: "jogging",
    },
    {
      question: "Siapa yang sering ngajak jalan? yoga atau tania",
      answer: "yoga",
    },
    { question: "Siapa paling cemburuan? yoga atau tania", answer: "pizza" },
    { question: "Apa yang paling suka kita lakuin?", answer: "makan" },
  ];

  // Fungsi untuk memulai kuis
  function startQuiz() {
    document.getElementById("start-screen").classList.add("hidden");
    document.getElementById("quiz-screen").classList.remove("hidden");
    showQuestion();
  }

  // Fungsi untuk menampilkan pertanyaan
  function showQuestion() {
    if (currentQuestion < questions.length) {
      document.getElementById("question").innerText =
        questions[currentQuestion].question;
      document.getElementById("answer-input").value = "";
      document.getElementById("feedback").innerText = "";
    } else {
      document.getElementById("quiz-screen").classList.add("hidden");
      document.getElementById("result-screen").classList.remove("hidden");
    }
  }

  // Fungsi untuk mengecek jawaban
  function checkAnswer() {
    const userAnswer = document
      .getElementById("answer-input")
      .value.toLowerCase()
      .trim();
    const correctAnswer = questions[currentQuestion].answer.toLowerCase();

    if (userAnswer === correctAnswer) {
      currentQuestion++;
      showQuestion();
    } else {
      document.getElementById("feedback").innerText =
        "Ahh, masa? Yang bener dong! 😜";
    }
  }

  // Fungsi untuk memindahkan tombol "Tidak"
  function moveNoButton() {
    let noBtn = document.getElementById("no-button");

    // Pastikan elemen bisa berpindah dengan absolute positioning
    noBtn.style.position = "absolute";

    // Hitung posisi baru dalam batas viewport agar tidak keluar layar
    let maxX = window.innerWidth - noBtn.offsetWidth;
    let maxY = window.innerHeight - noBtn.offsetHeight;

    let x = Math.random() * maxX;
    let y = Math.random() * maxY;

    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
  }

  // Fungsi untuk menunjukkan animasi "Yay! Kita resmi jadian!"
  function showLove() {
    music.play(); // Putar musik saat tombol "Ya" ditekan

    // Kosongkan layar dan tambahkan animasi hati tanpa menghapus audio
    let body = document.body;
    body.innerHTML = "<h1>Yay! Kita resmi jadian! ❤</h1>";

    // Tambahkan animasi hati
    for (let i = 0; i < 20; i++) {
      let heart = document.createElement("div");
      heart.innerHTML = "❤";
      heart.classList.add("hearts");
      heart.style.position = "absolute";
      heart.style.left = Math.random() * window.innerWidth + "px";
      heart.style.top = Math.random() * window.innerHeight + "px";
      body.appendChild(heart);
    }
  }

  // Menambahkan event listener untuk tombol-tombol
  document.getElementById("start-button").addEventListener("click", startQuiz);
  document
    .getElementById("submit-button")
    .addEventListener("click", checkAnswer);
  document.getElementById("yes-button").addEventListener("click", showLove);
  document
    .getElementById("no-button")
    .addEventListener("mouseover", moveNoButton);
  document.getElementById("no-button").addEventListener("click", moveNoButton); // Tambahkan event untuk klik
});
