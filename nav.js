const nav = document.createElement("nav")
nav.innerHTML = `
    <a style="color: white; text-decoration: none;" href="/"><h1>WebMentor</h1></a>
    <div class="links">
        <a class="${location.pathname === "/" ? "active" : ""}" href="/">Home</a>
        <a class="${
            location.pathname === "/dashboard/" ? "active" : ""
        }" href="/dashboard">Dashboard</a>
        <a class="${
            location.pathname.split("/")[2] === "practice" ? "active" : ""
        }" href="/dashboard/practice/?q=1.1.%20Understanding%20the%20Internet%20and%20the%20World%20Wide%20Web">Practice</a>
        <a class="${
            location.pathname.split("/")[2] === "flashcards" ? "active" : ""
        }" href="/dashboard/flashcards/">Flashcards</a>
    </div>
<div></div>
`
document.body.prepend(nav)
