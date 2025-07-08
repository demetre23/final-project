//back to top
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("backToTopBtn");
  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

//scroll color changed
window.addEventListener("scroll", () => {
  const nav = document.querySelector(".header_nav");
  if (window.scrollY > 50) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});

//api
const driversDiv = document.getElementById("drivers");

fetch("https://f1-live-pulse.p.rapidapi.com/championshipPrediction", {
  method: "GET",
  headers: {
    "x-rapidapi-key": "84284845a5msh02da48afeaa27fbp1699c4jsnd3b15a689d00",
    "x-rapidapi-host": "f1-live-pulse.p.rapidapi.com",
  },
})
  .then((response) => {
    if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
    return response.json();
  })
  .then((data) => {
    const drivers = data?.drivers || [];

    if (drivers.length === 0) {
      driversDiv.innerHTML = "<p>No drivers found.</p>";
      return;
    }

    drivers.sort((a, b) => a.currentPosition - b.currentPosition);

    drivers.forEach((driver) => {
      const row = document.createElement("div");
      row.className = "driver-row";

      row.innerHTML = `
          <p>${driver.currentPosition}</p>
          <p>${driver.fullName}</p>
          <p>${driver.racingNumber}</p>
          <p>${driver.currentPoints}</p>
        `;

      driversDiv.appendChild(row);
    });
  })
  .catch((error) => {
    console.error("Fetch error:", error);
    driversDiv.innerHTML = "<p>Error loading data.</p>";
  });

//burger bar
document.addEventListener("DOMContentLoaded", () => {
  const burger = document.getElementById("burger");
  const navMenu = document.querySelector(".nav_ul");

  burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    navMenu.classList.toggle("active");
  });
});
