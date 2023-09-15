const nav = document.createElement("nav")
nav.innerHTML = `
    <h1>WebMentor</h1>
    <div class="links">
        <a ${location.pathname === "/" ? 'class="active"' : ""} href="./">Home</a>
        <a ${
            location.pathname.includes("dashboard") ? 'class="active"' : ""
        } href="./dashboard.html">Dashboard</a>
        <a ${
            location.pathname.includes("code") ? 'class="active"' : ""
        } href="./code.html">Practice</a>
    </div>
    <div class="buttons">
        <button style="background: rgba(255, 255, 255, 0.1); color: white;">Account</button>
        <button>Logout</button>
    </div>
`
document.body.prepend(nav)
