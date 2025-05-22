import projects from './projects.js';

function loadProjects() {
    const container = document.getElementById("projects");
    container.innerHTML = "";

    projects.forEach(project => {
        const card = document.createElement("div");
        card.className = "project-card";

        const img = document.createElement("img");
        img.src = project.image;
        img.alt = `${project.name} image`;
        img.onerror = () => img.style.display = "none";

        card.innerHTML = `
            <h3>${project.name}</h3>
            <p>${project.description}</p>
            <div class="buttons">
                ${project.sourceEnabled ? `<a href="${project.repoUrl}" target="_blank" class="btn">Source</a>` : ""}
                ${project.downloadEnabled ? `<a href="${project.download}" target="_blank" class="btn">Download</a>` : ""}
                ${project.previewEnabled ? `<a href="${project.previewUrl}" target="_blank" class="btn">Live Preview</a>` : ""}
            </div>
        `;

        card.prepend(img);
        container.appendChild(card);
    });
}

document.addEventListener("DOMContentLoaded", loadProjects);

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