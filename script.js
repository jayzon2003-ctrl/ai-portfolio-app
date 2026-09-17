/* =========================================
   PORTFOLIO PROJECT LAB
========================================= */


/* =========================================
   PROJECT DATABASE
========================================= */

const projects = [

    /* ================= CODING ================= */

    {
        category: "Coding & Development",

        title: "Interactive Local Resource Finder",

        description:
            "Build a searchable website that helps users find and compare resources based on a specific interest or problem.",

        builds: [
            "Responsive website",
            "Search functionality",
            "Category filters",
            "Resource cards",
            "Individual resource information",
            "Mobile-friendly layout"
        ],

        skills: [
            "HTML/CSS",
            "JavaScript",
            "UI Design",
            "Problem Solving"
        ]
    },


    {
        category: "Coding & Development",

        title: "Personal Productivity Dashboard",

        description:
            "Create a dashboard that allows users to organize tasks and visualize their progress.",

        builds: [
            "Task creation",
            "Task categories",
            "Completion tracking",
            "Progress statistics",
            "Interactive interface"
        ],

        skills: [
            "HTML/CSS",
            "JavaScript",
            "UI Design",
            "Data Visualization"
        ]
    },


    {
        category: "Coding & Development",

        title: "Interactive Decision Simulator",

        description:
            "Create a simple simulation where users make decisions and see how those decisions affect measurable outcomes.",

        builds: [
            "Decision interface",
            "Scenario system",
            "Scoring system",
            "Results screen",
            "Performance metrics"
        ],

        skills: [
            "JavaScript",
            "Logic",
            "Problem Solving",
            "UI Design"
        ]
    },


    /* ================= BUSINESS ================= */

    {
        category: "Business & Analytics",

        title: "Business Performance Dashboard",

        description:
            "Create a dashboard that converts business data into information that a manager could use to make decisions.",

        builds: [
            "KPI dashboard",
            "Charts",
            "Performance metrics",
            "Data filters",
            "Written business insights"
        ],

        skills: [
            "Excel",
            "Data Analysis",
            "Business Analysis",
            "Data Visualization"
        ]
    },


    {
        category: "Business & Analytics",

        title: "Inventory Management Analysis",

        description:
            "Analyze a fictional company's inventory and identify opportunities to improve inventory performance.",

        builds: [
            "Inventory dataset",
            "Inventory calculations",
            "Turnover analysis",
            "Cost analysis",
            "Recommendations"
        ],

        skills: [
            "Excel",
            "Operations Management",
            "Data Analysis",
            "Problem Solving"
        ]
    },


    {
        category: "Business & Analytics",

        title: "Customer Experience Analysis",

        description:
            "Analyze a fictional customer journey and identify areas where a company could improve the customer experience.",

        builds: [
            "Customer journey map",
            "Survey dataset",
            "Problem identification",
            "Data analysis",
            "Improvement recommendations"
        ],

        skills: [
            "Data Analysis",
            "Business Analysis",
            "Customer Service",
            "Communication"
        ]
    },


    /* ================= EVENT PLANNING ================= */

    {
        category: "Event Planning",

        title: "Campus Charity Fundraiser",

        description:
            "Plan a realistic college fundraising event from concept through execution and evaluation.",

        builds: [
            "Event proposal",
            "Target audience",
            "Event budget",
            "Vendor checklist",
            "Marketing plan",
            "Event timeline",
            "Risk management plan",
            "Post-event evaluation"
        ],

        skills: [
            "Event Planning",
            "Budgeting",
            "Project Management",
            "Marketing",
            "Communication"
        ]
    },


    {
        category: "Event Planning",

        title: "Student Organization Networking Event",

        description:
            "Design and plan a networking event that connects college students with professionals in a specific career field.",

        builds: [
            "Event concept",
            "Guest strategy",
            "Venue plan",
            "Budget",
            "Promotion strategy",
            "Event schedule",
            "Registration process"
        ],

        skills: [
            "Event Planning",
            "Marketing",
            "Project Management",
            "Communication"
        ]
    },


    {
        category: "Event Planning",

        title: "Community Festival Planning Project",

        description:
            "Develop a complete event plan for a fictional community festival.",

        builds: [
            "Event proposal",
            "Vendor plan",
            "Entertainment schedule",
            "Budget",
            "Marketing materials",
            "Staff assignments",
            "Emergency plan"
        ],

        skills: [
            "Event Planning",
            "Budgeting",
            "Leadership",
            "Project Management"
        ]
    },


    /* ================= CREATIVE ================= */

    {
        category: "Creative & Design",

        title: "Brand-to-Website Case Study",

        description:
            "Take an organization and translate its branding into a professional responsive website.",

        builds: [
            "Brand color system",
            "Typography system",
            "Landing page",
            "Responsive design",
            "Accessibility improvements",
            "Design case study"
        ],

        skills: [
            "Web Design",
            "HTML/CSS",
            "Branding",
            "UX/UI"
        ]
    },


    {
        category: "Creative & Design",

        title: "Social Media Campaign",

        description:
            "Create a fictional social media campaign designed around a specific audience and measurable objective.",

        builds: [
            "Audience profile",
            "Campaign objective",
            "Content calendar",
            "Sample posts",
            "Visual concepts",
            "Performance metrics"
        ],

        skills: [
            "Marketing",
            "Branding",
            "Content Creation",
            "Communication"
        ]
    },


    /* ================= ACADEMIC ================= */

    {
        category: "Academic Project",

        title: "Assignment-to-Portfolio Case Study",

        description:
            "Take an existing academic assignment and expand it into a polished project that demonstrates a real-world skill.",

        builds: [
            "Original assignment",
            "Expanded project",
            "Problem statement",
            "Improved deliverables",
            "Reflection",
            "Final presentation"
        ],

        skills: [
            "Research",
            "Communication",
            "Problem Solving",
            "Project Management"
        ]
    }

];


/* =========================================
   GET USER INPUT
========================================= */

function getUserInput() {

    return {

        category:
            document.getElementById("category").value,

        career:
            document.getElementById("career").value,

        interest:
            document.getElementById("interest").value,

        skills:
            document.getElementById("skills").value,

        experience:
            document.getElementById("experience").value,

        time:
            document.getElementById("time").value,

        assignment:
            document.getElementById("assignment").value,

        avoid:
            document.getElementById("avoid").value

    };

}


/* =========================================
   GENERATE PROJECT
========================================= */

function generateProject() {

    const user = getUserInput();

    let availableProjects = projects;


    /* CATEGORY FILTER */

    if (user.category !== "random") {

        const categoryNames = {

            coding: "Coding & Development",

            business: "Business & Analytics",

            event: "Event Planning",

            creative: "Creative & Design",

            academic: "Academic Project"

        };

        availableProjects =
            projects.filter(
                project =>
                    project.category === categoryNames[user.category]
            );

    }


    /* RANDOM PROJECT */

    const project =
        availableProjects[
            Math.floor(
                Math.random() * availableProjects.length
            )
        ];


    displayProject(project, user);

}


/* =========================================
   DISPLAY PROJECT
========================================= */

function displayProject(project, user) {

    const result =
        document.getElementById("project-result");

    result.classList.remove("hidden");


    /* TITLE */

    document.getElementById("project-title").textContent =
        project.title;


    /* CATEGORY */

    document.getElementById("project-category").textContent =
        project.category;


    /* DESCRIPTION */

    let description =
        project.description;


    if (user.interest) {

        description +=
            ` You can customize this project around your interest in ${user.interest}.`;

    }


    document.getElementById(
        "project-description"
    ).textContent = description;


    /* DIFFICULTY */

    let difficulty = "Beginner";

    if (user.experience === "some") {

        difficulty = "Beginner–Intermediate";

    }

    if (user.experience === "intermediate") {

        difficulty = "Intermediate";

    }

    document.getElementById(
        "project-difficulty"
    ).textContent = difficulty;


    /* TIME */

    const timeNames = {

        weekend: "Weekend",

        week: "About 1 week",

        month: "2–4 weeks",

        long: "1–2 months"

    };

    document.getElementById(
        "project-time"
    ).textContent = timeNames[user.time];


    /* CAREER */

    document.getElementById(
        "project-career"
    ).textContent =
        user.career || "Multiple career paths";


    /* BUILD LIST */

    const buildList =
        document.getElementById("build-list");

    buildList.innerHTML = "";

    project.builds.forEach(item => {

        const li =
            document.createElement("li");

        li.textContent = item;

        buildList.appendChild(li);

    });


    /* SKILLS */

    const skillList =
        document.getElementById("skill-list");

    skillList.innerHTML = "";

    project.skills.forEach(skill => {

        const span =
            document.createElement("span");

        span.className = "skill";

        span.textContent = skill;

        skillList.appendChild(span);

    });


    /* PORTFOLIO CHECKLIST */

    const portfolioList =
        document.getElementById("portfolio-list");

    portfolioList.innerHTML = "";

    const portfolioItems = [

        "Explain the problem you were trying to solve.",

        "Show screenshots of the finished project.",

        "Explain the decisions you made.",

        "Describe one challenge you encountered.",

        "Explain what you learned.",

        "Include what you would improve in a second version."

    ];

    portfolioItems.forEach(item => {

        const li =
            document.createElement("li");

        li.textContent = item;

        portfolioList.appendChild(li);

    });


    /* LINKEDIN CHECKLIST */

    const linkedinList =
        document.getElementById("linkedin-list");

    linkedinList.innerHTML = "";

    const linkedinItems = [

        "Project screenshot",

        "Short project explanation",

        "Skills used",

        "Challenge you solved",

        "What you learned",

        "Link to the project if available"

    ];

    linkedinItems.forEach(item => {

        const li =
            document.createElement("li");

        li.textContent = item;

        linkedinList.appendChild(li);

    });


    /* LINKEDIN DESCRIPTION */

    const linkedinText = createLinkedInDescription(
        project,
        user
    );

    document.getElementById(
        "linkedin-description"
    ).textContent = linkedinText;


    /* SAVE CURRENT PROJECT */

    window.currentProject = {

        ...project,

        user: user,

        linkedin: linkedinText

    };


    /* SCROLL */

    result.scrollIntoView({

        behavior: "smooth",

        block: "start"

    });

}


/* =========================================
   LINKEDIN DESCRIPTION
========================================= */

function createLinkedInDescription(project, user) {

    const careerText =
        user.career
            ? `I created this project to develop skills relevant to ${user.career}.`
            : "I created this project to develop practical professional skills.";


    return `${careerText}

Project: ${project.title}

The goal was to ${project.description.toLowerCase()}

Through this project, I practiced ${project.skills.join(", ")}.

One of my main goals was to turn what I am learning into something practical that I can demonstrate through my portfolio.

#Portfolio #StudentProjects #ProfessionalDevelopment`;

}


/* =========================================
   COPY LINKEDIN DESCRIPTION
========================================= */

function copyLinkedIn() {

    const text =
        document.getElementById(
            "linkedin-description"
        ).textContent;


    navigator.clipboard.writeText(text);


    const button =
        document.querySelector(".copy-button");

    button.textContent = "Copied!";


    setTimeout(() => {

        button.textContent =
            "Copy LinkedIn Description";

    }, 2000);

}


/* =========================================
   SAVE PROJECT
========================================= */

function saveProject() {

    if (!window.currentProject) {

        return;

    }


    let saved =
        JSON.parse(
            localStorage.getItem(
                "portfolioProjects"
            )
        ) || [];


    saved.push(window.currentProject);


    localStorage.setItem(
        "portfolioProjects",
        JSON.stringify(saved)
    );


    displaySavedProjects();

}


/* =========================================
   DISPLAY SAVED PROJECTS
========================================= */

function displaySavedProjects() {

    const container =
        document.getElementById(
            "saved-projects"
        );


    const saved =
        JSON.parse(
            localStorage.getItem(
                "portfolioProjects"
            )
        ) || [];


    if (saved.length === 0) {

        container.innerHTML =
            `<p class="empty-message">
                Your saved projects will appear here.
            </p>`;

        return;

    }


    container.innerHTML = "";


    saved.forEach((project, index) => {

        const card =
            document.createElement("div");

        card.className =
            "saved-project";


        card.innerHTML = `

            <h3>
                ${project.title}
            </h3>

            <p>
                ${project.category}
            </p>

            <button
                class="secondary-button"
                onclick="deleteProject(${index})"
            >
                Delete
            </button>

        `;


        container.appendChild(card);

    });

}


/* =========================================
   DELETE PROJECT
========================================= */

function deleteProject(index) {

    let saved =
        JSON.parse(
            localStorage.getItem(
                "portfolioProjects"
            )
        ) || [];


    saved.splice(index, 1);


    localStorage.setItem(
        "portfolioProjects",
        JSON.stringify(saved)
    );


    displaySavedProjects();

}


/* =========================================
   LOAD SAVED PROJECTS WHEN PAGE OPENS
========================================= */

displaySavedProjects();
