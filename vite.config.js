import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, "index.html"),
        login: resolve(__dirname, "login.html"),
        main: resolve(__dirname, "main.html"),
        profile: resolve(__dirname, "profile.html"),
        addfriend: resolve(__dirname, "addfriend.html"),
        blockedUser: resolve(__dirname, "blocked-users.html"),
        customerService: resolve(__dirname, "customer-service.html"),
        friendProfile: resolve(__dirname, "friend-profile.html"),
        friendList: resolve(__dirname, "friendlist.html"),
        friends: resolve(__dirname, "friends.html"),
        language: resolve(__dirname, "language.html"),
        mainMap: resolve(__dirname, "main-map.html"),
        messages: resolve(__dirname, "messages.html"),
        settings: resolve(__dirname, "settings.html"),
        shareLocation: resolve(__dirname, "sharelocation.html"),
        signInSecurity: resolve(__dirname, "signinsecurity.html"),
      },
    },
  },
});
