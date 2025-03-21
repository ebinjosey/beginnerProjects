const concepts = [
    {
        title: "Newton's First Law",
        description: "An object at rest stays at rest and an object in motion stays in motion unless acted upon by an external force.",
        link: "https://en.wikipedia.org/wiki/Newton%27s_laws_of_motion"
    },
    {
        title: "Newton's Second Law",
        description: "The acceleration of an object is directly proportional to the net force acting on it and inversely proportional to its mass.",
        link: "https://en.wikipedia.org/wiki/Newton%27s_second_law_of_motion"
    },
    {
        title: "Newton's Third Law",
        description: "For every action, there is an equal and opposite reaction.",
        link: "https://en.wikipedia.org/wiki/Newton%27s_third_law_of_motion"
    },
    {
        title: "Law of Conservation of Energy",
        description: "Energy cannot be created or destroyed, only transformed from one form to another.",
        link: "https://en.wikipedia.org/wiki/Law_of_conservation_of_energy"
    },
    {
        title: "Ohm's Law",
        description: "The current through a conductor between two points is directly proportional to the voltage across the two points.",
        link: "https://en.wikipedia.org/wiki/Ohm%27s_law"
    },
    {
        title: "Bernoulli's Principle",
        description: "An increase in the speed of a fluid occurs simultaneously with a decrease in pressure or potential energy.",
        link: "https://en.wikipedia.org/wiki/Bernoulli%27s_principle"
    },
    {
        title: "Archimedes' Principle",
        description: "Any object submerged in a fluid is buoyed up by a force equal to the weight of the fluid displaced by the object.",
        link: "https://en.wikipedia.org/wiki/Archimedes%27_principle"
    },
    {
        title: "Laws of Thermodynamics",
        description: "Rules that describe the relationships between heat, work, temperature, and energy.",
        link: "https://en.wikipedia.org/wiki/Thermodynamics"
    },
    {
        title: "Einstein's Theory of Relativity",
        description: "Includes the special theory of relativity and the general theory of relativity, describing the behavior of objects in space and time.",
        link: "https://en.wikipedia.org/wiki/Theory_of_relativity"
    },
    {
        title: "Quantum Mechanics",
        description: "A fundamental theory in physics describing the physical properties of nature at the scale of atoms and subatomic particles.",
        link: "https://en.wikipedia.org/wiki/Quantum_mechanics"
    },
    {
        title: "Centripetal Force",
        description: "A force that acts on an object moving in a circular path and is directed towards the center around which the object is moving.",
        link: "https://en.wikipedia.org/wiki/Centripetal_force"
    },
    {
        title: "Kinetic Energy",
        description: "The energy an object possesses due to its motion.",
        link: "https://en.wikipedia.org/wiki/Kinetic_energy"
    },
    {
        title: "Potential Energy",
        description: "The stored energy of an object based on its position or state.",
        link: "https://en.wikipedia.org/wiki/Potential_energy"
    },
    {
        title: "Electromagnetic Spectrum",
        description: "The range of all types of electromagnetic radiation.",
        link: "https://en.wikipedia.org/wiki/Electromagnetic_spectrum"
    },
    {
        title: "Magnetic Fields",
        description: "The magnetic effect of electric currents and magnetic materials.",
        link: "https://en.wikipedia.org/wiki/Magnetic_field"
    },
    {
        title: "Friction",
        description: "The resistance that one surface or object encounters when moving over another.",
        link: "https://en.wikipedia.org/wiki/Friction"
    }
];

const randomConcept = concepts[Math.floor(Math.random() * concepts.length)];
const conceptDiv = document.getElementById("concept");
conceptDiv.innerHTML = `<strong>${randomConcept.title}</strong>: ${randomConcept.description} (<a href="${randomConcept.link}" target="_blank">Learn more</a>)`;
