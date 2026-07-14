
window.onload = () => {
    const bart = document.getElementsByClassName("bart")[0];
    const bottom = document.getElementsByClassName("bottom")[0];

    if (!bart || !bottom) return;

    for (let i = 0; i < 10; i++) {
        // IMPORTANT: clone EACH time; otherwise DOM moves the same node.
        const clone = bart.cloneNode(true);

        // Stagger animation based on clone index.
        // bounceFAST uses squish keyframes; we delay each subsequent clone.
        const delayMs = i * 30; // tweak this number as desired
        clone.style.animationDelay = `${delayMs}ms`;

        bottom.appendChild(clone);
    }
};
