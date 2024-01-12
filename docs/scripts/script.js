const sectionBtns = document.querySelectorAll("#section-buttons a")

const addStyleToButton = () => {
  window.addEventListener("scroll", function () {
    const scrolled = window.scrollY
    const visibleHeight = window.innerHeight + scrolled

    if (visibleHeight >= 0 && visibleHeight < 900) {
      sectionBtns.forEach((btn) => {
        btn.classList.remove("text-slate-300")
        btn.querySelector("div").classList.replace("w-16", "group-hover:w-16")
        btn.querySelector("div").classList.replace("bg-slate-200", "group-hover:bg-slate-200")
        btn.querySelector("div").classList.add("w-8")
        sectionBtns[0].classList.add("text-slate-300")
        sectionBtns[0].querySelector("div").classList.add("bg-neutral-500")
        sectionBtns[0].querySelector("div").classList.replace("w-8", "w-16")
        sectionBtns[0]
          .querySelector("div")
          .classList.replace("group-hover:bg-slate-200", "bg-slate-200")
      })
    } else if (visibleHeight >= 900 && visibleHeight < 1200) {
      sectionBtns.forEach((btn) => {
        btn.classList.remove("text-slate-300")
        btn.querySelector("div").classList.replace("w-16", "group-hover:w-16")
        btn.querySelector("div").classList.replace("bg-slate-200", "group-hover:bg-slate-200")
        btn.querySelector("div").classList.add("w-8")
        sectionBtns[1].classList.add("text-slate-300")
        sectionBtns[1].querySelector("div").classList.replace("w-8", "w-16")
        sectionBtns[1]
          .querySelector("div")
          .classList.replace("group-hover:bg-slate-200", "bg-slate-200")
      })
    } else if (visibleHeight >= 1200) {
      sectionBtns.forEach((btn) => {
        btn.classList.remove("text-slate-300")
        btn.querySelector("div").classList.replace("w-16", "group-hover:w-16")
        btn.querySelector("div").classList.replace("bg-slate-200", "group-hover:bg-slate-200")
        btn.querySelector("div").classList.add("w-8")
        sectionBtns[2].classList.add("text-slate-300")
        sectionBtns[2].querySelector("div").classList.replace("w-8", "w-16")
        sectionBtns[2]
          .querySelector("div")
          .classList.replace("group-hover:bg-slate-200", "bg-slate-200")
      })
    } else {
      sectionBtns.forEach((btn) => {
        btn.classList.remove("text-slate-300")
        btn.querySelector("div").classList.replace("w-16", "group-hover:w-16")
        btn.querySelector("div").classList.add("w-8")
        btn.querySelector("div").classList.replace("bg-slate-200", "group-hover:bg-slate-200")
      })
    }
  })
}

addStyleToButton()
