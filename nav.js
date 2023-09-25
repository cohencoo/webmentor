const nav = document.createElement("nav")
nav.innerHTML = `
    <a style="color: white; text-decoration: none;" href="/"><h1>WebMentor</h1></a>
    <div class="links">
        <a ${location.pathname === "/" ? 'class="active"' : ""} href="/">Home</a>
        <a ${
            location.pathname === "/dashboard/" ? 'class="active"' : ""
        } href="/dashboard">Dashboard</a>
        <a ${
            location.pathname.split("/")[2] === "practice" ? 'class="active"' : ""
        } href="/dashboard/practice/?q=1.1.%20Understanding%20the%20Internet%20and%20the%20World%20Wide%20Web">Practice</a>
        <a ${
            location.pathname.split("/")[2] === "flashcards" ? 'class="active"' : ""
        } href="/dashboard/flashcards/">Flashcards</a>
    </div>
<div></div>
`
document.body.prepend(nav)
