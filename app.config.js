export default {
  name: "Hype Connect",
  slug: "hype-connect",
  platforms: ["ios", "android", "web"],
  version: "1.0.0",
  orientation: "portrait",
  icon: "./assets/icon.png",
  userInterfaceStyle: "automatic",
  splash: {
    image: "./assets/splash.png",
    resizeMode: "contain",
    backgroundColor: "#1B1B1E"
  },
  web: {
    bundler: "metro"
  }
};
