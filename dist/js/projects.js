const projects = [
    {
        name: "Woodwork",
        description: "Woodwork is a Minecraft Datapack for 1.21.+",
        repoUrl: "https://github.com/SurGOI/Woodwork",
        image: "https://raw.githubusercontent.com/SurGOI/Woodwork/refs/heads/main/readme.png",
        download: "https://github.com/SurGOI/Woodwork/releases/download/R1.0.0/Woodwork.R1.0.0-1.21.+.zip",
        downloadEnabled: true,
        sourceEnabled: true,  // Controls Source button visibility
        previewEnabled: false,  // Controls Preview button visibility
        previewUrl: "#" // Replace with actual preview/demo URL
    },
    {
        name: "Scrap Mappy",
        description: "Scrap Mappy is a Scrap Mechanic Map Previewer.",
        repoUrl: "https://github.com/SurGOI/ScrapMappy",
        image: "https://raw.githubusercontent.com/SurGOI/ScrapMappy/refs/heads/main/readme.png",
        download: "#",
        downloadEnabled: false,
        sourceEnabled: true,
        previewEnabled: true, // This project has no preview/demo
		previewUrl: "https://surgoi.github.io/ScrapMappy/" // Replace with actual preview/demo URL
    },
    {
        name: "StationFM",
        description: "A Personal Radio Station Platform",
        repoUrl: "https://github.com/SurGOI/StationFM",
        image: "https://raw.githubusercontent.com/SurGOI/StationFM/refs/heads/main/readme.png",
        download: "#",
        downloadEnabled: false,
        sourceEnabled: true,
        previewEnabled: true,
        previewUrl: "https://surgoi.github.io/StationFM/"
    }
];


// Export projects array
export default projects;
