const courseOutline = [
    {
        module: "Module 1: Introduction to Web Development",
        topics: [
            {
                module: "1.1. Understanding the Internet and the World Wide Web",
                content: `<h1 id="topic"></h1>
            <center>
            <br /><br />
            <iframe
                width="560"
                height="315"
                title="YouTube video player"
                src="https://www.youtube.com/embed/C72WkcUZvco?si=36oVIvHv6c-eSHhy"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
            ></iframe>
        </center>
        <hr />
        <p>
            In this lesson, we will delve into the fundamental concepts of the Internet and
            the World Wide Web (WWW). Before you start your journey into web development,
            it's crucial to have a solid grasp of these concepts, as they form the backbone
            of the digital world.
        </p>

        <h3>What is the Internet?</h3>

        <p>
            The Internet, short for "interconnected networks," is a global network of
            computers and devices that communicate with each other through a standardized
            set of protocols. It's a vast, decentralized network that connects millions of
            computers worldwide, enabling them to share information and resources
            seamlessly. Think of the Internet as the infrastructure that makes online
            communication and data exchange possible.
        </p>

        <h3>The World Wide Web (WWW)</h3>

        <p>
            The World Wide Web, often referred to as the "Web," is a subset of the Internet.
            It's a system of interconnected documents and resources linked by hyperlinks and
            URLs (Uniform Resource Locators). When you open a web browser and access a
            website, you are interacting with the World Wide Web.
    </p>`,
            },
        ],
    },
    {
        module: "Module 2: HTML Fundamentals",
        topics: [
            {
                module: "2.1. HTML Document Structure",
                content: `
            <p> 
                HTML (Hypertext Markup Language) is the standard language used to 
                create web pages. It consists of a set of elements that structure the content on a web page. 
                Understanding the basic structure of an HTML document is fundamental to web development. 
            </p>
            
             
            <h3>HTML Document Structure:</h3>
        
            <p>
                An HTML document consists of the following main parts:
            
                Document Type Declaration (DOCTYPE):
            
                The <!DOCTYPE> declaration is the first thing you should include in an HTML document. It informs the web browser about the version of HTML being used. For HTML5, the declaration is: 
            </p>

    </p>`,
            },
            { module: "2.2. HTML Elements and Tags", content: "n" },
            { module: "2.3. Creating Headings, Paragraphs, and Line Breaks", content: "n" },
            { module: "2.4. Lists (Ordered and Unordered)", content: "n" },
            { module: "2.5. Links and Anchors", content: "n" },
            { module: "2.6. Images and Multimedia", content: "n" },
        ],
    },
    {
        module: "Module 3: CSS Fundamentals",
        topics: [
            { module: "3.1. Introduction to CSS and Its Role in Web Design", content: "n" },
            { module: "3.2. CSS Syntax and Selectors", content: "n" },
            { module: "3.3. Adding CSS to HTML (Inline, Internal, and External)", content: "n" },
            { module: "3.4. Styling Text and Fonts", content: "n" },
            { module: "3.5. Working with Colors and Backgrounds", content: "n" },
            { module: "3.6. Formatting Margins, Padding, and Borders", content: "n" },
            { module: "3.7. Introduction to Box Model", content: "n" },
            { module: "3.8. Understanding Display and Position Properties", content: "n" },
        ],
    },
    {
        module: "Module 4: Building Web Pages",
        topics: [
            { module: "4.1. Structuring a Web Page with HTML5 Semantic Elements", content: "n" },
            { module: "4.2. Creating Navigation Menus", content: "n" },
            { module: "4.3. Designing Forms for User Interaction", content: "n" },
            { module: "4.4. Incorporating Multimedia Elements", content: "n" },
            { module: "4.5. Adding External Content with iframes", content: "n" },
            { module: "4.6. Creating a Responsive Web Design", content: "n" },
        ],
    },
    {
        module: "Module 5: Web Development Best Practices",
        topics: [
            { module: "5.1. Ensuring Accessibility and Semantic Markup", content: "n" },
            { module: "5.2. Validating HTML and CSS", content: "n" },
        ],
    },
    {
        module: "Module 6: Final Project",
        topics: [
            { module: "6.1. Applying What You've Learned", content: "n" },
            { module: "6.2. Building a Simple Website", content: "n" },
            { module: "6.3. Troubleshooting and Debugging", content: "n" },
            { module: "6.4. Presenting Your Project", content: "n" },
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

            liTopic.onclick = () => (sessionStorage.courseContent = topic.content)

            liTopic.innerHTML = `<a class="topic" href="practice/?q=${topic.module}">${topic.module}</a>`
            ulTopics.appendChild(liTopic)
        })

        liModule.appendChild(ulTopics)
        ul.appendChild(liModule)
    })

    outlineDiv.appendChild(ul)
}

generateCourseOutline(courseOutline)
