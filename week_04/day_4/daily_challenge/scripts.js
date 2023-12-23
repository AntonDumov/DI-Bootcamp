// Create an array which value is the planets of the solar system.
const planets = [
    {
        name: "Mercury",
        color: "#B0C4DE", // It's actually light gray, wow.
        moons: []
    },
    {
        name: "Venus",
        color: "#FFD700", // Gold
        moons: []
    },
    {
        name: "Earth",
        color: "#0000FF", // Blue
        moons: [
            {
                name: "Moon",
                color: "#808080" // Gray
            }
        ]
    },
    {
        name: "Mars",
        color: "#FF4500", // OrangeRed
        moons: [
            {
                name: "Phobos",
                color: "#A9A9A9" // DarkGray
            },
            {
                name: "Deimos",
                color: "#696969" // DimGray
            }
        ]
    },
    {
        name: "Jupiter",
        color: "#FFA07A", // LightSalmon
        moons: [
            { name: "Io", color: "#FFFF00" },
            { name: "Europa", color: "#FFFACD" },
            { name: "Ganymede", color: "#BDB76B" },
            { name: "Callisto", color: "#A9A9A9" },
            // Jupiter has 95 moons (at least).
        ]
    },
    {
        name: "Saturn",
        color: "#DAA520", // GoldenRod
        moons: [
            { name: "Mimas", color: "#D3D3D3" },
            { name: "Enceladus", color: "#F0F8FF" },
            { name: "Tethys", color: "#D3D3D3" },
            { name: "Dione", color: "#D3D3D3" },
            { name: "Rhea", color: "#D3D3D3" },
            { name: "Titan", color: "#D2B48C" },
            { name: "Hyperion", color: "#D3D3D3" },
            // Saturn has 146 moons.
        ]
    },
    {
        name: "Uranus",
        color: "#00FFFF", // Aqua
        moons: [
            { name: "Ariel", color: "#D8BFD8" },
            { name: "Umbriel", color: "#708090" },
            { name: "Titania", color: "#D3D3D3" },
            { name: "Oberon", color: "#D3D3D3" },
            // Uranus has 27 moons.
        ]
    },
    {
        name: "Neptune",
        color: "#1E90FF", // DodgerBlue
        moons: [
            { name: "Triton", color: "#AFEEEE" },
            { name: "Nereid", color: "#ADD8E6" },
            // Neptune has 14 moons.
        ]
    }
];

const section = document.querySelector('section')

for (const planet of planets) {

    // For each planet in the array, create a <div> using createElement.
    const planetElement = document.createElement('div')
    planetElement.dataset['name'] = planet.name

    // This div should have a class named "planet".
    planetElement.classList.add('planet')

    // Each planet should have a different background color.
    planetElement.style.backgroundColor = planet.color

    // Finally append each div to the <section> in the HTML.
    section.appendChild(planetElement)

    // Bonus: Do the same process to create the moons.
    if (planet.moons) {
        let moonOffset = 120
        for (const moon of planet.moons) {
            // Be careful, each planet has a certain amount of moons. How should you display them?
            const moonElement = document.createElement('div')
            moonElement.dataset['name'] = moon.name
            moonElement.classList.add('moon')
            moonElement.style.backgroundColor = moon.color
            moonElement.style.left = `${moonOffset}px`
            planetElement.appendChild(moonElement)
            moonOffset += 50
        }
    }
}
