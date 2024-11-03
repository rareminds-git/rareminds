// vite.config.ts
import { defineConfig } from "file:///D:/tecvolo/raredesigns/node_modules/vitest/dist/config.js";
import { fileURLToPath, URL } from "node:url";
import Pages from "file:///D:/tecvolo/raredesigns/node_modules/vite-plugin-pages/dist/index.mjs";
import react from "file:///D:/tecvolo/raredesigns/node_modules/@vitejs/plugin-react/dist/index.mjs";
import AutoImport from "file:///D:/tecvolo/raredesigns/node_modules/unplugin-auto-import/dist/vite.js";
var __vite_injected_original_import_meta_url = "file:///D:/tecvolo/raredesigns/vite.config.ts";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    Pages(),
    AutoImport({
      dts: true,
      // targets to transform
      include: [
        /\.[tj]sx?$/,
        // .ts, .tsx, .js, .jsx
        /\.md$/
        // .md
      ],
      imports: [
        "react",
        "react-router-dom",
        "vitest",
        // configure third party APIs to be auto imported as shown below
        {
          "@uidotdev/usehooks": [
            "useDebounce",
            "useLocalStorage",
            "useWindowSize",
            "usePrevious",
            "useIntersectionObserver",
            "useNetworkState",
            "useMediaQuery",
            "useOrientation",
            "useSessionStorage",
            "usePreferredLanguage",
            "useFetch",
            "useContinousRetry",
            "useVisibilityChange",
            "useScript",
            "useRenderInfo",
            "useRenderCount",
            "useRandomInterval",
            "useIntervalWhen",
            "useInterval",
            "useLockBodyScroll",
            "useCountDown",
            "useIsClient",
            "useQueue",
            "useHover",
            "useTimeout",
            "useEventListener",
            "useKeyPress",
            "useMap",
            "useThrottle",
            "useSet",
            "useCopyToClipboard",
            "useBattery",
            "useIsIdle",
            "useToggle",
            "useHistoryState",
            "useGeolocation",
            "usePageLeave",
            "useObjectState",
            "useLogger",
            "useDocumentTitle",
            "useIsFirstRender",
            "useLongPress",
            "useFavicon",
            "useDefault",
            "useWindowScroll",
            "useMeasure",
            "useClickAway",
            "useList",
            "useCounter",
            "useMouse"
          ]
        },
        {
          "@reduxjs/toolkit": ["configureStore", "createSlice"]
        },
        {
          "@reduxjs/toolkit/query/react": [
            "createApi",
            "fetchBaseQuery",
            "setupListeners"
          ]
        },
        {
          "@testing-library/react": ["render", "fireEvent", "screen", "cleanup", "renderHook"]
        },
        {
          "react-redux": [
            "TypedUseSelectorHook",
            "useDispatch",
            "useSelector",
            "ConnectedProps",
            "connect",
            "Provider",
            "shallowEqual",
            "useStore",
            "createStoreHook",
            "createDispatchHook",
            "createSelectorHook",
            "batch"
          ]
        }
      ],
      resolvers: [
        (componentName) => {
          if (componentName.startsWith("Icon"))
            return { name: componentName, from: "@iconify/react" };
        }
      ]
    })
  ],
  test: {
    globals: true,
    environment: "happy-dom",
    setupFiles: "./src/tests/tests.setup.ts"
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFx0ZWN2b2xvXFxcXHJhcmVkZXNpZ25zXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFx0ZWN2b2xvXFxcXHJhcmVkZXNpZ25zXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi90ZWN2b2xvL3JhcmVkZXNpZ25zL3ZpdGUuY29uZmlnLnRzXCI7LyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1jb21tZW50ICovXHJcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gXCJ2aXRlc3QvY29uZmlnXCI7XHJcbmltcG9ydCB7IGZpbGVVUkxUb1BhdGgsIFVSTCB9IGZyb20gXCJub2RlOnVybFwiO1xyXG5pbXBvcnQgUGFnZXMgZnJvbSBcInZpdGUtcGx1Z2luLXBhZ2VzXCI7XHJcbmltcG9ydCByZWFjdCBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tcmVhY3RcIjtcclxuaW1wb3J0IEF1dG9JbXBvcnQgZnJvbSBcInVucGx1Z2luLWF1dG8taW1wb3J0L3ZpdGVcIjtcclxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuXHRwbHVnaW5zOiBbXHJcblx0XHRyZWFjdCgpLFxyXG5cdFx0UGFnZXMoKSxcclxuXHRcdEF1dG9JbXBvcnQoe1xyXG5cdFx0XHRkdHM6IHRydWUsXHJcblx0XHRcdC8vIHRhcmdldHMgdG8gdHJhbnNmb3JtXHJcblx0XHRcdGluY2x1ZGU6IFtcclxuXHRcdFx0XHQvXFwuW3RqXXN4PyQvLCAvLyAudHMsIC50c3gsIC5qcywgLmpzeFxyXG5cdFx0XHRcdC9cXC5tZCQvLCAvLyAubWRcclxuXHRcdFx0XSxcclxuXHJcblx0XHRcdGltcG9ydHM6IFtcclxuXHRcdFx0XHRcInJlYWN0XCIsXHJcblx0XHRcdFx0XCJyZWFjdC1yb3V0ZXItZG9tXCIsXHJcblx0XHRcdFx0XCJ2aXRlc3RcIixcclxuXHJcblx0XHRcdFx0Ly8gY29uZmlndXJlIHRoaXJkIHBhcnR5IEFQSXMgdG8gYmUgYXV0byBpbXBvcnRlZCBhcyBzaG93biBiZWxvd1xyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdFwiQHVpZG90ZGV2L3VzZWhvb2tzXCI6IFtcclxuXHRcdFx0XHRcdFx0XCJ1c2VEZWJvdW5jZVwiLFxyXG5cdFx0XHRcdFx0XHRcInVzZUxvY2FsU3RvcmFnZVwiLFxyXG5cdFx0XHRcdFx0XHRcInVzZVdpbmRvd1NpemVcIixcclxuXHRcdFx0XHRcdFx0XCJ1c2VQcmV2aW91c1wiLFxyXG5cdFx0XHRcdFx0XHRcInVzZUludGVyc2VjdGlvbk9ic2VydmVyXCIsXHJcblx0XHRcdFx0XHRcdFwidXNlTmV0d29ya1N0YXRlXCIsXHJcblx0XHRcdFx0XHRcdFwidXNlTWVkaWFRdWVyeVwiLFxyXG5cdFx0XHRcdFx0XHRcInVzZU9yaWVudGF0aW9uXCIsXHJcblx0XHRcdFx0XHRcdFwidXNlU2Vzc2lvblN0b3JhZ2VcIixcclxuXHRcdFx0XHRcdFx0XCJ1c2VQcmVmZXJyZWRMYW5ndWFnZVwiLFxyXG5cdFx0XHRcdFx0XHRcInVzZUZldGNoXCIsXHJcblx0XHRcdFx0XHRcdFwidXNlQ29udGlub3VzUmV0cnlcIixcclxuXHRcdFx0XHRcdFx0XCJ1c2VWaXNpYmlsaXR5Q2hhbmdlXCIsXHJcblx0XHRcdFx0XHRcdFwidXNlU2NyaXB0XCIsXHJcblx0XHRcdFx0XHRcdFwidXNlUmVuZGVySW5mb1wiLFxyXG5cdFx0XHRcdFx0XHRcInVzZVJlbmRlckNvdW50XCIsXHJcblx0XHRcdFx0XHRcdFwidXNlUmFuZG9tSW50ZXJ2YWxcIixcclxuXHRcdFx0XHRcdFx0XCJ1c2VJbnRlcnZhbFdoZW5cIixcclxuXHRcdFx0XHRcdFx0XCJ1c2VJbnRlcnZhbFwiLFxyXG5cdFx0XHRcdFx0XHRcInVzZUxvY2tCb2R5U2Nyb2xsXCIsXHJcblx0XHRcdFx0XHRcdFwidXNlQ291bnREb3duXCIsXHJcblx0XHRcdFx0XHRcdFwidXNlSXNDbGllbnRcIixcclxuXHRcdFx0XHRcdFx0XCJ1c2VRdWV1ZVwiLFxyXG5cdFx0XHRcdFx0XHRcInVzZUhvdmVyXCIsXHJcblx0XHRcdFx0XHRcdFwidXNlVGltZW91dFwiLFxyXG5cdFx0XHRcdFx0XHRcInVzZUV2ZW50TGlzdGVuZXJcIixcclxuXHRcdFx0XHRcdFx0XCJ1c2VLZXlQcmVzc1wiLFxyXG5cdFx0XHRcdFx0XHRcInVzZU1hcFwiLFxyXG5cdFx0XHRcdFx0XHRcInVzZVRocm90dGxlXCIsXHJcblx0XHRcdFx0XHRcdFwidXNlU2V0XCIsXHJcblx0XHRcdFx0XHRcdFwidXNlQ29weVRvQ2xpcGJvYXJkXCIsXHJcblx0XHRcdFx0XHRcdFwidXNlQmF0dGVyeVwiLFxyXG5cdFx0XHRcdFx0XHRcInVzZUlzSWRsZVwiLFxyXG5cdFx0XHRcdFx0XHRcInVzZVRvZ2dsZVwiLFxyXG5cdFx0XHRcdFx0XHRcInVzZUhpc3RvcnlTdGF0ZVwiLFxyXG5cdFx0XHRcdFx0XHRcInVzZUdlb2xvY2F0aW9uXCIsXHJcblx0XHRcdFx0XHRcdFwidXNlUGFnZUxlYXZlXCIsXHJcblx0XHRcdFx0XHRcdFwidXNlT2JqZWN0U3RhdGVcIixcclxuXHRcdFx0XHRcdFx0XCJ1c2VMb2dnZXJcIixcclxuXHRcdFx0XHRcdFx0XCJ1c2VEb2N1bWVudFRpdGxlXCIsXHJcblx0XHRcdFx0XHRcdFwidXNlSXNGaXJzdFJlbmRlclwiLFxyXG5cdFx0XHRcdFx0XHRcInVzZUxvbmdQcmVzc1wiLFxyXG5cdFx0XHRcdFx0XHRcInVzZUZhdmljb25cIixcclxuXHRcdFx0XHRcdFx0XCJ1c2VEZWZhdWx0XCIsXHJcblx0XHRcdFx0XHRcdFwidXNlV2luZG93U2Nyb2xsXCIsXHJcblx0XHRcdFx0XHRcdFwidXNlTWVhc3VyZVwiLFxyXG5cdFx0XHRcdFx0XHRcInVzZUNsaWNrQXdheVwiLFxyXG5cdFx0XHRcdFx0XHRcInVzZUxpc3RcIixcclxuXHRcdFx0XHRcdFx0XCJ1c2VDb3VudGVyXCIsXHJcblx0XHRcdFx0XHRcdFwidXNlTW91c2VcIixcclxuXHRcdFx0XHRcdF0sXHJcblx0XHRcdFx0fSxcclxuXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XCJAcmVkdXhqcy90b29sa2l0XCI6IFtcImNvbmZpZ3VyZVN0b3JlXCIsIFwiY3JlYXRlU2xpY2VcIl0sXHJcblx0XHRcdFx0fSxcclxuXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XCJAcmVkdXhqcy90b29sa2l0L3F1ZXJ5L3JlYWN0XCI6IFtcclxuXHRcdFx0XHRcdFx0XCJjcmVhdGVBcGlcIixcclxuXHRcdFx0XHRcdFx0XCJmZXRjaEJhc2VRdWVyeVwiLFxyXG5cdFx0XHRcdFx0XHRcInNldHVwTGlzdGVuZXJzXCIsXHJcblx0XHRcdFx0XHRdLFxyXG5cdFx0XHRcdH0sXHJcblxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdCdAdGVzdGluZy1saWJyYXJ5L3JlYWN0JzogWydyZW5kZXInLCAnZmlyZUV2ZW50JywgJ3NjcmVlbicsICdjbGVhbnVwJywgJ3JlbmRlckhvb2snXSxcclxuXHRcdFx0XHR9LFxyXG5cclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcInJlYWN0LXJlZHV4XCI6IFtcclxuXHRcdFx0XHRcdFx0XCJUeXBlZFVzZVNlbGVjdG9ySG9va1wiLFxyXG5cdFx0XHRcdFx0XHRcInVzZURpc3BhdGNoXCIsXHJcblx0XHRcdFx0XHRcdFwidXNlU2VsZWN0b3JcIixcclxuXHRcdFx0XHRcdFx0XCJDb25uZWN0ZWRQcm9wc1wiLFxyXG5cdFx0XHRcdFx0XHRcImNvbm5lY3RcIixcclxuXHRcdFx0XHRcdFx0XCJQcm92aWRlclwiLFxyXG5cdFx0XHRcdFx0XHRcInNoYWxsb3dFcXVhbFwiLFxyXG5cdFx0XHRcdFx0XHRcInVzZVN0b3JlXCIsXHJcblx0XHRcdFx0XHRcdFwiY3JlYXRlU3RvcmVIb29rXCIsXHJcblx0XHRcdFx0XHRcdFwiY3JlYXRlRGlzcGF0Y2hIb29rXCIsXHJcblx0XHRcdFx0XHRcdFwiY3JlYXRlU2VsZWN0b3JIb29rXCIsXHJcblx0XHRcdFx0XHRcdFwiYmF0Y2hcIixcclxuXHRcdFx0XHRcdF0sXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XSxcclxuXHRcdFx0cmVzb2x2ZXJzOiBbXHJcblx0XHRcdFx0KGNvbXBvbmVudE5hbWUpID0+IHtcclxuXHRcdFx0XHRcdGlmIChjb21wb25lbnROYW1lLnN0YXJ0c1dpdGgoXCJJY29uXCIpKVxyXG5cdFx0XHRcdFx0XHRyZXR1cm4geyBuYW1lOiBjb21wb25lbnROYW1lLCBmcm9tOiBcIkBpY29uaWZ5L3JlYWN0XCIgfTtcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRdLFxyXG5cdFx0fSksXHJcblx0XSxcclxuXHR0ZXN0OiB7XHJcblx0XHRnbG9iYWxzOiB0cnVlLFxyXG5cdFx0ZW52aXJvbm1lbnQ6IFwiaGFwcHktZG9tXCIsXHJcblx0XHRzZXR1cEZpbGVzOiBcIi4vc3JjL3Rlc3RzL3Rlc3RzLnNldHVwLnRzXCIsXHJcblx0fSxcclxuXHRyZXNvbHZlOiB7XHJcblx0XHRhbGlhczoge1xyXG5cdFx0XHRcIkBcIjogZmlsZVVSTFRvUGF0aChuZXcgVVJMKFwiLi9zcmNcIiwgaW1wb3J0Lm1ldGEudXJsKSksXHJcblx0XHR9LFxyXG5cdH0sXHJcbn0pO1xyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQ0EsU0FBUyxvQkFBb0I7QUFDN0IsU0FBUyxlQUFlLFdBQVc7QUFDbkMsT0FBTyxXQUFXO0FBQ2xCLE9BQU8sV0FBVztBQUNsQixPQUFPLGdCQUFnQjtBQUxrSSxJQUFNLDJDQUEyQztBQU8xTSxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMzQixTQUFTO0FBQUEsSUFDUixNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixXQUFXO0FBQUEsTUFDVixLQUFLO0FBQUE7QUFBQSxNQUVMLFNBQVM7QUFBQSxRQUNSO0FBQUE7QUFBQSxRQUNBO0FBQUE7QUFBQSxNQUNEO0FBQUEsTUFFQSxTQUFTO0FBQUEsUUFDUjtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUE7QUFBQSxRQUdBO0FBQUEsVUFDQyxzQkFBc0I7QUFBQSxZQUNyQjtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxVQUNEO0FBQUEsUUFDRDtBQUFBLFFBRUE7QUFBQSxVQUNDLG9CQUFvQixDQUFDLGtCQUFrQixhQUFhO0FBQUEsUUFDckQ7QUFBQSxRQUVBO0FBQUEsVUFDQyxnQ0FBZ0M7QUFBQSxZQUMvQjtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsVUFDRDtBQUFBLFFBQ0Q7QUFBQSxRQUVBO0FBQUEsVUFDQywwQkFBMEIsQ0FBQyxVQUFVLGFBQWEsVUFBVSxXQUFXLFlBQVk7QUFBQSxRQUNwRjtBQUFBLFFBRUE7QUFBQSxVQUNDLGVBQWU7QUFBQSxZQUNkO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxVQUNEO0FBQUEsUUFDRDtBQUFBLE1BQ0Q7QUFBQSxNQUNBLFdBQVc7QUFBQSxRQUNWLENBQUMsa0JBQWtCO0FBQ2xCLGNBQUksY0FBYyxXQUFXLE1BQU07QUFDbEMsbUJBQU8sRUFBRSxNQUFNLGVBQWUsTUFBTSxpQkFBaUI7QUFBQSxRQUN2RDtBQUFBLE1BQ0Q7QUFBQSxJQUNELENBQUM7QUFBQSxFQUNGO0FBQUEsRUFDQSxNQUFNO0FBQUEsSUFDTCxTQUFTO0FBQUEsSUFDVCxhQUFhO0FBQUEsSUFDYixZQUFZO0FBQUEsRUFDYjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1IsT0FBTztBQUFBLE1BQ04sS0FBSyxjQUFjLElBQUksSUFBSSxTQUFTLHdDQUFlLENBQUM7QUFBQSxJQUNyRDtBQUFBLEVBQ0Q7QUFDRCxDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
