const courseOutline = [
    {
        module: "Module 1: Introduction to Web Development",
        topics: ["1.1. Understanding the Internet and the World Wide Web"],
    },
    {
        module: "Module 2: HTML Fundamentals",
        topics: [
            "2.1. Introduction to HTML and Its Role in Web Development",
            "2.2. HTML Document Structure",
            "2.3. HTML Elements and Tags",
            "2.4. Creating Headings, Paragraphs, and Line Breaks",
            "2.5. Lists (Ordered and Unordered)",
            "2.6. Links and Anchors",
            "2.7. Images and Multimedia",
        ],
    },
    {
        module: "Module 3: CSS Fundamentals",
        topics: [
            "3.1. Introduction to CSS and Its Role in Web Design",
            "3.2. CSS Syntax and Selectors",
            "3.3. Adding CSS to HTML (Inline, Internal, and External)",
            "3.4. Styling Text and Fonts",
            "3.5. Working with Colors and Backgrounds",
            "3.6. Formatting Margins, Padding, and Borders",
            "3.7. Introduction to Box Model",
            "3.8. Understanding Display and Position Properties",
        ],
    },
    {
        module: "Module 4: Building Web Pages",
        topics: [
            "4.1. Structuring a Web Page with HTML5 Semantic Elements",
            "4.2. Creating Navigation Menus",
            "4.3. Designing Forms for User Interaction",
            "4.4. Incorporating Multimedia Elements",
            "4.5. Adding External Content with iframes",
            "4.6. Creating a Responsive Web Design",
        ],
    },
    {
        module: "Module 5: Web Development Best Practices",
        topics: ["5.1. Ensuring Accessibility and Semantic Markup", "5.2. Validating HTML and CSS"],
    },
    {
        module: "Module 6: Final Project",
        topics: [
            "6.1. Applying What You've Learned",
            "6.2. Building a Simple Website",
            "6.3. Troubleshooting and Debugging",
            "6.4. Presenting Your Project",
        ],
    },
]

function generateCourseOutline(courseOutline) {
    const outlineDiv = document.getElementById("course-outline")
    const ul = document.createElement("ul")

    courseOutline.forEach((module) => {
        const liModule = document.createElement("li")
        liModule.textContent = module.module
        const ulTopics = document.createElement("ul")

        module.topics.forEach((topic) => {
            const liTopic = document.createElement("li")
            liTopic.innerHTML = `<a class="topic" href="code.html?q=${topic}">${topic}</a>`
            ulTopics.appendChild(liTopic)
        })

        liModule.appendChild(ulTopics)
        ul.appendChild(liModule)
    })

    outlineDiv.appendChild(ul)
}

generateCourseOutline(courseOutline)
