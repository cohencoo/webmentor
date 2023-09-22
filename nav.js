const nav = document.createElement("nav")
nav.innerHTML = `
    <h1>WebMentor</h1>
    <div class="links">
        <a ${location.pathname === "/" ? 'class="active"' : ""} href="/">Home</a>
        <a ${
            location.pathname === "/dashboard/" ? 'class="active"' : ""
        } href="/dashboard">Dashboard</a>
        <a ${
            location.pathname.split("/")[2] === "practice" ? 'class="active"' : ""
        } href="/dashboard/practice/">Practice</a>
    </div>
    <div class="buttons">
        <button>Logout</button>
    </div>
`
document.body.prepend(nav)
