function createLightParticles() {
  const container = document.getElementById("lightParticles")
  if (!container) return

  const count = 40
  for (let i = 0; i < count; i++) {
    const p = document.createElement("div")
    p.className = "particle"
    const size = Math.random() * 4 + 1
    p.style.width = size + "px"
    p.style.height = size + "px"
    p.style.left = Math.random() * 100 + "%"
    p.style.top = "100%"
    p.style.animationDuration = Math.random() * 10 + 15 + "s"
    p.style.animationDelay = Math.random() * 10 + "s"
    p.style.opacity = Math.random() * 0.4 + 0.1
    container.appendChild(p)
  }
}

function createStars() {
  const starsContainer = document.getElementById("starsContainer")
  if (!starsContainer) return

  const starCount = 80
  for (let i = 0; i < starCount; i++) {
    const star = document.createElement("div")
    star.className = "star"
    star.style.left = Math.random() * 100 + "%"
    star.style.top = Math.random() * 100 + "%"
    const size = Math.random() * 4 + 1
    star.style.width = size + "px"
    star.style.height = size + "px"
    star.style.animationDelay = Math.random() * 5 + "s"
    star.style.animationDuration = Math.random() * 3 + 2 + "s"
    starsContainer.appendChild(star)
  }
}

function createParticles() {
  const particlesContainer = document.getElementById("particlesContainer")
  if (!particlesContainer) return

  for (let i = 0; i < 15; i++) {
    const particle = document.createElement("div")
    particle.className = "particle"
    particle.style.left = Math.random() * 100 + "%"
    particle.style.top = Math.random() * 100 + "%"
    particle.style.animationDelay = Math.random() * 4 + "s"
    particle.style.animationDuration = Math.random() * 4 + 8 + "s"
    particlesContainer.appendChild(particle)
  }
}

function createChristmasDecorations() {
  // Logic removed for New Year redesign
}

function createNewYearDecorations() {
  const decorativeElements = document.getElementById("decorativeElements")
  if (!decorativeElements) return

  const midnightStar = document.createElement("div")
  midnightStar.className = "midnight-star"
  midnightStar.innerHTML = `<svg viewBox="0 0 24 24" fill="var(--color-gold)"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`
  decorativeElements.appendChild(midnightStar)

  const timeHalo = document.createElement("div")
  timeHalo.className = "time-halo"
  timeHalo.innerHTML = `<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="45" fill="none" stroke="var(--color-gold)" stroke-width="0.5" stroke-dasharray="2,4"/></svg>`
  decorativeElements.appendChild(timeHalo)

  // Secondary memory orbs
  for (let i = 0; i < 10; i++) {
    const orb = document.createElement("div")
    orb.className = "memory-orb"
    orb.style.position = "fixed"
    orb.style.width = Math.random() * 10 + 5 + "px"
    orb.style.height = orb.style.width
    orb.style.background = "var(--color-gold)"
    orb.style.borderRadius = "50%"
    orb.style.opacity = "0.15"
    orb.style.filter = "blur(2px)"
    orb.style.left = Math.random() * 100 + "%"
    orb.style.top = Math.random() * 100 + "%"
    orb.style.animation = `float ${Math.random() * 10 + 10}s ease-in-out infinite`
    decorativeElements.appendChild(orb)
  }
}

// Page navigation
function nextPage(pageNumber) {
  const currentPage = document.querySelector(".page.active")
  const nextPageElement = document.getElementById("page" + pageNumber)

  if (currentPage) {
    currentPage.classList.remove("active")
  }

  if (nextPageElement) {
    nextPageElement.classList.add("active")
    // Scroll to top when changing pages
    nextPageElement.scrollTop = 0
  }

  // Initialize page-specific elements
  if (pageNumber === 3) {
    createParticles()
  }
}

// Gift box interaction
document.addEventListener("DOMContentLoaded", () => {
  createLightParticles()
  createStars()
  createNewYearDecorations()

  function updateCountdown() {
    const startDate = new Date("2025-10-07T21:00:00")
    const now = new Date()
    const diff = now - startDate

    const days = Math.floor(diff / (1000 * 60 * 60 * 24))
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((diff % (1000 * 60)) / 1000)

    const daysEl = document.getElementById("days")
    const hoursEl = document.getElementById("hours")
    const minutesEl = document.getElementById("minutes")
    const secondsEl = document.getElementById("seconds")

    if (daysEl) daysEl.textContent = days
    if (hoursEl) hoursEl.textContent = hours
    if (minutesEl) minutesEl.textContent = minutes
    if (secondsEl) secondsEl.textContent = seconds
  }

  updateCountdown()
  setInterval(updateCountdown, 1000)

  function updateNewYearCountdown() {
    const targetDate = new Date("January 1, 2026 00:00:00").getTime()

    function tick() {
      const now = new Date().getTime()
      const diff = targetDate - now

      if (diff < 0) return

      const days = Math.floor(diff / (1000 * 60 * 60 * 24))
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((diff % (1000 * 60)) / 1000)

      document.getElementById("ny-days").textContent = days.toString().padStart(2, "0")
      document.getElementById("ny-hours").textContent = hours.toString().padStart(2, "0")
      document.getElementById("ny-minutes").textContent = minutes.toString().padStart(2, "0")
      document.getElementById("ny-seconds").textContent = seconds.toString().padStart(2, "0")
    }

    tick()
    setInterval(tick, 1000)
  }

  updateNewYearCountdown()

  const giftBox = document.getElementById("giftBox")
  if (giftBox) {
    giftBox.addEventListener("click", () => {
      giftBox.classList.add("opening")
      setTimeout(() => {
        nextPage(2)
      }, 800)
    })
  }

  const forgiveBtn = document.getElementById("forgiveBtn")
  if (forgiveBtn) {
    forgiveBtn.addEventListener("click", () => {
      const page = document.getElementById("page4")
      for (let i = 0; i < 30; i++) {
        const particle = document.createElement("div")
        particle.innerHTML = i % 3 === 0 ? "❤" : "✦"
        particle.style.position = "absolute"
        particle.style.fontSize = Math.random() * 1.5 + 1 + "rem"
        particle.style.color = i % 3 === 0 ? "#ff6b9d" : "var(--color-gold)"
        particle.style.left = "50%"
        particle.style.top = "50%"
        particle.style.pointerEvents = "none"

        const angle = (Math.PI * 2 * i) / 30
        const velocity = Math.random() * 2 + 3
        const vx = Math.cos(angle) * velocity
        const vy = Math.sin(angle) * velocity

        page.appendChild(particle)

        let posX = 0
        let posY = 0
        const animate = () => {
          posX += vx
          posY += vy
          particle.style.transform = `translate(${posX}px, ${posY}px) rotate(${posX * 2}deg)`
          particle.style.opacity = 1 - (Math.abs(posX) + Math.abs(posY)) / 500

          if (particle.style.opacity > 0) {
            requestAnimationFrame(animate)
          } else {
            particle.remove()
          }
        }

        animate()
      }

      setTimeout(() => {
        nextPage(5)
      }, 1500)
    })
  }

  setInterval(() => {
    if (Math.random() > 0.7) {
      launchFirework(Math.random() * window.innerWidth, Math.random() * (window.innerHeight * 0.5))
    }
  }, 2000)
})

function launchFirework(x, y) {
  const container = document.getElementById("fireworksContainer")
  if (!container) return

  const colors = ["#f7e7ce", "#d4af37", "#ffffff", "#722f37"]
  const color = colors[Math.floor(Math.random() * colors.length)]

  for (let i = 0; i < 25; i++) {
    const spark = document.createElement("div")
    spark.className = "spark"
    spark.style.position = "absolute"
    spark.style.width = "2px"
    spark.style.height = "2px"
    spark.style.background = color
    spark.style.left = x + "px"
    spark.style.top = y + "px"
    spark.style.borderRadius = "50%"
    spark.style.boxShadow = `0 0 8px ${color}`

    const angle = Math.random() * Math.PI * 2
    const velocity = Math.random() * 3 + 2
    const vx = Math.cos(angle) * velocity
    const vy = Math.sin(angle) * velocity

    container.appendChild(spark)

    let life = 1.0
    const animate = () => {
      life -= 0.02
      const cx = Number.parseFloat(spark.style.left) + vx
      const cy = Number.parseFloat(spark.style.top) + vy + 0.5 // gravity
      spark.style.left = cx + "px"
      spark.style.top = cy + "px"
      spark.style.opacity = life

      if (life > 0) requestAnimationFrame(animate)
      else spark.remove()
    }
    requestAnimationFrame(animate)
  }
}
