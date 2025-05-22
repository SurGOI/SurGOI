const projects = [
    {
        name: "Woodwork",
        description: "Woodwork is a Minecraft Datapack for 1.21.+",
        repoUrl: "https://github.com/SurGOI/Woodwork",
        image: "https://raw.githubusercontent.com/SurGOI/Woodwork/refs/heads/main/readme.png",
        download: "https://github.com/SurGOI/Woodwork/releases/download/R1.0.0/Woodwork.R1.0.0-1.21.+.zip",
        downloadEnabled: true
    },
    {
        name: "Scrap Mappy",
        description: "Scrap Mappy is a Scrap Mechanic Map Previewer.",
        repoUrl: "https://github.com/SurGOI/ScrapMappy",
        image: "https://raw.githubusercontent.com/SurGOI/ScrapMappy/refs/heads/main/readme.png",
        download: "#",
        downloadEnabled: false
    },
    {
        name: "StationFM",
        description: "A Personal Radio Station Platform",
        repoUrl: "https://github.com/SurGOI/StationFM",
        image: "https://raw.githubusercontent.com/SurGOI/StationFM/refs/heads/main/readme.png",
        download: "#",
        downloadEnabled: false
    }
];

function loadProjects() {
    const container = document.getElementById("projects");
    container.innerHTML = "";

    projects.forEach(project => {
        const card = document.createElement("div");
        card.className = "project-card";

        // Try loading the image from the repo
        const img = document.createElement("img");
        img.src = project.image;
        img.alt = `${project.name} image`;
        img.onerror = () => img.style.display = "none"; // Hide image if not found

        card.innerHTML = `
            <h3>${project.name}</h3>
            <p>${project.description}</p>
            <div class="buttons">
                <a href="${project.repoUrl}" class="btn">Read More</a>
                ${project.downloadEnabled ? `<a href="${project.download}" class="btn">Download</a>` : ""}
            </div>
        `;

        card.prepend(img);
        container.appendChild(card);
    });
}

function searchProjects() {
    const query = document.getElementById("search").value.toLowerCase();
    const container = document.getElementById("projects");
    container.innerHTML = "";

    // Filter projects based on search input
    const filteredProjects = projects.filter(project =>
        project.name.toLowerCase().includes(query) || 
        project.description.toLowerCase().includes(query)
    );

    // Display filtered projects
    filteredProjects.forEach(project => {
        const card = document.createElement("div");
        card.className = "project-card";

        // Try loading the image from the repo
        const img = document.createElement("img");
        img.src = project.image;
        img.alt = `${project.name} image`;
        img.onerror = () => img.style.display = "none"; // Hide image if not found

        card.innerHTML = `
            <h3>${project.name}</h3>
            <p>${project.description}</p>
            <div class="buttons">
                <a href="${project.repoUrl}" class="btn">Read More</a>
                ${project.downloadEnabled ? `<a href="${project.download}" class="btn">Download</a>` : ""}
            </div>
        `;

        card.prepend(img);
        container.appendChild(card);
    });
}

document.addEventListener("DOMContentLoaded", loadProjects);