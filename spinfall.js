// Creates multiple falling/spinning elements based on a template image.
// Uses CSS keyframes `fall` (wrapper) and `spin` (image).

window.onload = () => {
  const bottom = document.getElementsByClassName("bottom")[0];
  if (!bottom) return;

  // Remove the old single bartender cloning if it exists.
  // (If you want to keep it, we can merge later.)

  const overlayTemplate = document.getElementById("overlay");
  if (!overlayTemplate) return;

  // Container for the falling items
  const overlayHost = document.getElementById("overlay-host") || document.body;

  const COUNT = 10;

  for (let i = 0; i < COUNT; i++) {
    const clone = overlayTemplate.cloneNode(true);

    // Make sure each clone is positioned independently
    clone.style.position = "absolute";

    // Stagger + slightly vary timing
    const delayMs = i * 150;

    // Put the clone in its own wrapper so we can animate fall separately from spin.
    const wrapper = document.createElement("div");
    wrapper.className = "overlay-wrapper";
    wrapper.style.animationDelay = `${delayMs}ms`;

    // Spread horizontally a bit so multiple overlays are visible
    const left = 50 + (i - (COUNT - 1) / 2) * 30; // tweak spacing
    wrapper.style.left = `${left}%`;

    clone.id = "overlay-clone-" + i;

    // Use spin animation on the image itself
    clone.style.animationDelay = `${delayMs}ms`;

    wrapper.appendChild(clone);
    overlayHost.appendChild(wrapper);
  }
};

