const nav = document.createElement("nav")
nav.innerHTML = `
    <h1>WebMentor</h1>
    <div class="links">
        <a ${location.pathname === "/" ? 'class="active"' : ""} href="./">Home</a>
        <a ${
            location.pathname.includes("dashboard") ? 'class="active"' : ""
        } href="./dashboard.html">Dashboard</a>
        <a ${
            location.pathname.includes("practice") ? 'class="active"' : ""
        } href="./practice.html">Practice</a>
    </div>
    <div class="buttons">
        <button>Logout</button>
    </div>
`
document.body.prepend(nav)
