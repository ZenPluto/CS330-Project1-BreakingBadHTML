const characters = {
    walter: "Walter White — Walter White begins as an underpaid, overqualified chemistry teacher struggling with pride, financial insecurity, and a sense of wasted potential. After being diagnosed with terminal lung cancer, he turns to manufacturing methamphetamine to secure his family’s future. Walt is extremely intelligent, methodical, and driven, but also deeply egotistical. As the series progresses, his original justification (“for my family”) erodes, revealing his hunger for power, control, and recognition. His transformation into Heisenberg represents the loss of his moral boundaries and the rise of his ruthless, manipulative nature.",
    jesse: "Jesse Pinkman — Walter White's former student who helps Walter start his journey to becoming the drug kingpin Heisenberg.",
    mike: "Mike Ehrmantraut — A fixer, hitman, and enforcer for Gus Fring.",
    hank: "Hank Schrader — A DEA agent and Walter’s brother-in-law.",
    gus: "Gus Fring — A calm, calculated drug kingpin who runs Los Pollos Hermanos."
};

function showCharacter(name) {
    const infoBox = document.getElementById("characterInfo");
    infoBox.style.display = "block";
    infoBox.textContent = characters[name];
}
