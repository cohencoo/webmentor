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
            { module: "2.1. HTML Document Structure", content: null },
            { module: "2.2. HTML Elements and Tags", content: null },
            { module: "2.3. Creating Headings, Paragraphs, and Line Breaks", content: null },
            { module: "2.4. Lists (Ordered and Unordered)", content: null },
            { module: "2.5. Links and Anchors", content: null },
            { module: "2.6. Images and Multimedia", content: null },
        ],
    },
    {
        module: "Module 3: CSS Fundamentals",
        topics: [
            { module: "3.1. Introduction to CSS and Its Role in Web Design", content: null },
            { module: "3.2. CSS Syntax and Selectors", content: null },
            { module: "3.3. Adding CSS to HTML (Inline, Internal, and External)", content: null },
            { module: "3.4. Styling Text and Fonts", content: null },
            { module: "3.5. Working with Colors and Backgrounds", content: null },
            { module: "3.6. Formatting Margins, Padding, and Borders", content: null },
            { module: "3.7. Introduction to Box Model", content: null },
            { module: "3.8. Understanding Display and Position Properties", content: null },
        ],
    },
    {
        module: "Module 4: Building Web Pages",
        topics: [
            { module: "4.1. Structuring a Web Page with HTML5 Semantic Elements", content: null },
            { module: "4.2. Creating Navigation Menus", content: null },
            { module: "4.3. Designing Forms for User Interaction", content: null },
            { module: "4.4. Incorporating Multimedia Elements", content: null },
            { module: "4.5. Adding External Content with iframes", content: null },
            { module: "4.6. Creating a Responsive Web Design", content: null },
        ],
    },
    {
        module: "Module 5: Web Development Best Practices",
        topics: [
            { module: "5.1. Ensuring Accessibility and Semantic Markup", content: null },
            { module: "5.2. Validating HTML and CSS", content: null },
        ],
    },
    {
        module: "Module 6: Final Project",
        topics: [
            { module: "6.1. Applying What You've Learned", content: null },
            { module: "6.2. Building a Simple Website", content: null },
            { module: "6.3. Troubleshooting and Debugging", content: null },
            { module: "6.4. Presenting Your Project", content: null },
        ],
    },
]

const placeholder = `
<h1 id="topic"></h1>
HTML (Hypertext Markup Language) is the backbone of web development. It allows you to structure and present content on the web. In this beginner's guide, we'll introduce you to some of the most common HTML element tags, which are the building blocks of web pages.

<br>
<br>
What Are HTML Tags?
HTML tags are used to define the structure and content of a web page. They consist of an opening tag, some content, and a closing tag.

Commonly Used HTML Tags

<br>
<br>
<br>
<br>
<h2>
1. The Body Tag
</h2>
<br>

The body tag defines the main content of a web page. It contains all the content that is visible to the user, such as text, images, links, and more.
<br>
<img style="width: 30rem; height: auto" src="../assets/2.png" />

<br>
<br>
<br>
<br>
<h2>
2. Heading Tags
</h2>
<br>

Heading tags are used to define headings and subheadings on a web page. There are six heading tags, from h1 to h6, with h1 being the most important and h6 being the least important. The h1 tag is usually used for the main heading of a page, while the h2 tag is used for subheadings.
<br>
<img style="width: 30rem; height: auto" src="../assets/3.png" />

<br>
<br>
<br>
<br>
<h2>
3. The Paragraph Tag
</h2>
<br>

The paragraph tag is used to define a paragraph of text. It's a block-level element, which means it takes up the full width of its parent element. By default, the browser adds some space above and below the paragraph tag.
<br>
<img style="width: 30rem; height: auto" src="../assets/4.png" />

<br>
<br>
<br>
<br>
<h2>
4. List Tags
</h2>
<br>

There are two types of lists in HTML: ordered lists and unordered lists. Ordered lists are numbered lists, while unordered lists are bulleted lists. Both types of lists are used to group related items together.
<br>
<img style="width: 30rem; height: auto" src="../assets/5.png" />


<br>
<br>
<br>
<br>
<h2>
5. The Select/Dropdown tag
</h2>
<br>

The select tag is used to create a dropdown list. It's often used in forms to allow users to select one or more options from a list of predefined options.
<br>
<img style="width: 30rem; height: auto" src="../assets/6.png" />

`

function generateCourseOutline(courseOutline) {
    const outlineDiv = document.getElementById("course-outline")
    const ul = document.createElement("ul")

    courseOutline.forEach((module) => {
        const liModule = document.createElement("li")
        liModule.textContent = module.module
        const ulTopics = document.createElement("ul")

        module.topics.forEach((topic) => {
            const liTopic = document.createElement("li")

            liTopic.onclick = () => (sessionStorage.courseContent = topic.content || placeholder)

            liTopic.innerHTML = `<a class="topic" href="practice/?q=${topic.module}">${topic.module}</a>`
            ulTopics.appendChild(liTopic)
        })

        liModule.appendChild(ulTopics)
        ul.appendChild(liModule)
    })

    outlineDiv.appendChild(ul)
}

generateCourseOutline(courseOutline)
