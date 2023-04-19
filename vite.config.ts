import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";
import windicss from "vite-plugin-windicss";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    uni(),
    windicss({
      scan: {
        dirs: ["./src"], // 当前目录下所有文件
        fileExtensions: ["vue", "js", "ts"],
      },
    }),
  ],
});
