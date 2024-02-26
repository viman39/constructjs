export const scrollElementIntoView = (elementId: string, options?: any) => {
  const element = document.getElementById(elementId);

  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: options?.block || "start",
      inline: "nearest",
    });
  } else {
    console.error("element must be in dom");
  }
};
