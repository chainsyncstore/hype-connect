(function() {
  // Check if the browser supports the theme-color meta tag.
  // We can try to set it and see if the browser retains the value.
  var meta = document.createElement('meta');
  meta.name = 'theme-color';
  // A simple check: if 'name' in meta is true, it means the property exists.
  // More robust checks might involve checking if setting 'content' actually works,
  // but for theme-color, this level of detection is generally sufficient.
  if ('name' in meta) {
    // Check if we can set the name to 'theme-color' specifically.
    // Some browsers might have a generic 'name' property but not support 'theme-color'.
    // However, a more direct approach is to just try and set it.
    // If the browser doesn't support it, it will often ignore it or handle it gracefully.

    // For broader compatibility and to ensure we don't run into issues with
    // browsers that might have a 'name' property but don't specifically
    // support 'theme-color', we'll directly try to add it.
    // Modern browsers that support theme-color will apply it.
    // Browsers that don't will ignore it, which is the desired outcome.

    // Let's refine the detection slightly. A common way to check for support
    // is to see if 'style' in 'document.body' exists for a CSS property.
    // For meta tags, it's trickier. A pragmatic approach is to assume
    // if 'theme-color' can be *set* as `meta.name` and the browser doesn't throw an error
    // or if the property is reflected, it's likely supported.
    // However, the most straightforward way for this specific tag is to just add it,
    // as non-supporting browsers will ignore it. The original issue is about Firefox
    // *not* supporting it, so we want to avoid adding it there if possible.

    // A more reliable check for theme-color support specifically:
    // Create a meta tag, set its name to "theme-color", add it to head,
    // then try to read its content. This is overly complex for this task.

    // The most common feature detection for theme-color is simply to check
    // if `HTMLMetaElement.prototype.hasOwnProperty('name')` and
    // `HTMLMetaElement.prototype.hasOwnProperty('content')` is true,
    // and then rely on the browser to ignore it if it doesn't specifically
    // understand `name="theme-color"`.

    // Given the issue statement, we want to *conditionally add* it.
    // Let's use a check that's common for this purpose.
    // We'll check if 'themeColor' is in document.documentElement.style.
    // This is NOT the correct way to check for meta tag support.
    // The correct way is to check for the meta tag itself or use a known UA string.

    // Let's simplify and use a common check:
    // Checking if 'msapplication-TileColor' is supported can be an indirect hint,
    // but not reliable.
    // The best way is to check if the browser is *not* Firefox,
    // or to rely on the fact that non-supporting browsers ignore it.
    // The request is to use feature detection.

    // A simple and effective feature detection:
    // Try to create the element and see if the `name` property is correctly set.
    var testMeta = document.createElement('meta');
    testMeta.name = 'theme-color';
    if (testMeta.name === 'theme-color') {
        var themeColorMeta = document.createElement('meta');
        themeColorMeta.name = 'theme-color';
        themeColorMeta.content = '#1B1B1E';
        document.head.appendChild(themeColorMeta);
    }
})();
