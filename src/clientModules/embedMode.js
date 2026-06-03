// Adds `embed-mode` class to <body> when the docs are loaded inside an iframe
// OR when the URL has ?embed=1. Used to hide the Docusaurus chrome (navbar,
// footer) inside the ArcGIS Hub embed so the surrounding hub provides its own.
if (typeof window !== 'undefined') {
  const inIframe = window.top !== window.self;
  const params = new URLSearchParams(window.location.search);
  const forceEmbed = params.get('embed') === '1' || params.get('embed') === 'true';
  if (inIframe || forceEmbed) {
    document.body.classList.add('embed-mode');
  }
}
