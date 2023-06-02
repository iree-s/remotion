module.exports = {
  apiSidebar: [
    "api",
    {
      type: "category",
      label: "Command line",
      link: {
        type: "doc",
        id: "cli/cli",
      },
      collapsed: true,
      items: [
        "cli/preview",
        "cli/render",
        "cli/still",
        "cli/compositions",
        {
          type: "category",
          label: "lambda",
          link: {
            type: "doc",
            id: "lambda/cli",
          },
          items: [
            "lambda/cli/sites",
            "lambda/cli/functions",
            "lambda/cli/render",
            "lambda/cli/still",
            "lambda/cli/policies",
            "lambda/cli/compositions",
            "lambda/cli/regions",
            "lambda/cli/quotas",
          ],
        },
        {
          type: "category",
          label: "cloudrun",
          link: {
            type: "doc",
            id: "cloudrun/cli",
          },
          items: [
            "cloudrun/cli/sites",
            "cloudrun/cli/services",
            "cloudrun/cli/render",
            "cloudrun/cli/permissions",
            "cloudrun/cli/regions",
          ],
        },
        "cli/benchmark",
        "cli/install",
        "cli/versions",
        "cli/upgrade",
        "cli/ffmpeg",
        "cli/ffprobe",
        "cli/help",
      ],
    },
    "config",
    {
      type: "html",
      value:
        '<hr style="margin-top: 4px; margin-bottom: 4px; border-bottom: none"/>', // The HTML to be rendered
      defaultStyle: true, // Use the default menu item styling
    },
    {
      type: "category",
      label: "remotion",
      link: {
        type: "doc",
        id: "remotion",
      },
      items: [
        "use-current-frame",
        "use-video-config",
        "composition",
        "interpolate",
        "continue-render",
        "delay-render",
        "cancel-render",
        "interpolate-colors",
        "get-input-props",
        "measure-spring",
        "random",
        "register-root",
        "spring",
        "staticfile",
        "getstaticfiles",
        "prefetch",
        "audio",
        "sequence",
        "loop",
        "video",
        "offthreadvideo",
        "absolute-fill",
        "img",
        "iframe",
        "freeze",
        "still",
        "series",
        "folder",
        "easing",
        "null",
        "clipper",
      ],
    },
    {
      type: "category",
      label: "@remotion/bundler",
      link: {
        type: "doc",
        id: "bundler",
      },
      items: ["bundle"],
    },
    {
      type: "category",
      link: {
        type: "doc",
        id: "renderer",
      },
      label: "@remotion/renderer",
      items: [
        "renderer/get-compositions",
        "renderer/render-media",
        "renderer/render-frames",
        "renderer/render-still",
        "renderer/stitch-frames-to-video",
        "renderer/open-browser",
        "renderer/make-cancel-signal",
        "renderer/ensure-ffmpeg",
        "renderer/ensure-ffprobe",
        "renderer/get-can-extract-frames-fast",
      ],
    },
    {
      type: "category",
      link: {
        type: "doc",
        id: "player/installation",
      },
      label: "@remotion/player",
      items: ["player/api", "player/thumbnail"],
    },
    {
      type: "category",
      label: "@remotion/gif",
      link: {
        type: "doc",
        id: "gif/index",
      },
      items: ["gif/gif", "gif/get-gif-duration-in-seconds", "gif/preload-gif"],
    },
    {
      type: "category",
      label: "@remotion/media-utils",
      link: {
        type: "doc",
        id: "media-utils/index",
      },
      items: [
        "audio-buffer-to-data-url",
        "get-audio-data",
        "get-audio-duration-in-seconds",
        "get-video-metadata",
        "get-waveform-portion",
        "use-audio-data",
        "visualize-audio",
      ],
    },
    {
      type: "category",
      label: "@remotion/motion-blur",
      link: {
        type: "doc",
        id: "motion-blur/index",
      },
      items: ["motion-blur/trail", "motion-blur/camera-motion-blur"],
    },
    {
      type: "category",
      label: "@remotion/lambda",
      link: {
        type: "doc",
        id: "lambda/api",
      },
      items: [
        {
          type: "link",
          href: "/docs/lambda/cli",
          label: "CLI Reference",
        },
        "lambda/estimateprice",
        "lambda/deployfunction",
        "lambda/deletefunction",
        "lambda/getfunctioninfo",
        "lambda/getfunctions",
        "lambda/deletesite",
        "lambda/deploysite",
        "lambda/getawsclient",
        "lambda/getregions",
        "lambda/getsites",
        "lambda/downloadmedia",
        "lambda/deleterender",
        "lambda/getuserpolicy",
        "lambda/getrolepolicy",
        "lambda/getcompositionsonlambda",
        "lambda/getorcreatebucket",
        "lambda/getrenderprogress",
        "lambda/presignurl",
        "lambda/rendermediaonlambda",
        "lambda/renderstillonlambda",
        "lambda/simulatepermissions",
        "lambda/speculatefunctionname",
        "lambda/validatewebhooksignature",
      ],
    },
    {
      type: "category",
      label: "@remotion/cloudrun",
      link: {
        type: "doc",
        id: "cloudrun/api",
      },
      items: [
        {
          type: "link",
          href: "/docs/cloudrun/cli",
          label: "CLI Reference",
        },
        "cloudrun/getserviceinfo",
        "cloudrun/deployservice",
        "cloudrun/deleteservice",
        "cloudrun/getservices",
        "cloudrun/speculateservicename",
        "cloudrun/getregions",
        "cloudrun/deploysite",
        "cloudrun/deletesite",
        "cloudrun/getsites",
        "cloudrun/getorcreatebucket",
        "cloudrun/rendermediaoncloudrun",
        "cloudrun/renderstilloncloudrun",
        "cloudrun/testpermissions",
      ],
    },
    {
      type: "category",
      label: "@remotion/tailwind",
      link: {
        type: "doc",
        id: "tailwind/tailwind",
      },
      items: ["tailwind/enable-tailwind"],
    },
    {
      type: "category",
      label: "@remotion/three",
      link: {
        type: "doc",
        id: "three",
      },
      items: ["three-canvas", "use-video-texture"],
    },
    {
      type: "category",
      label: "@remotion/skia",
      link: {
        type: "doc",
        id: "skia/skia",
      },
      items: ["skia/enable-skia", "skia/skia-canvas"],
    },
    {
      type: "category",
      label: "@remotion/lottie",
      link: {
        type: "doc",
        id: "lottie/lottie-index",
      },
      items: [
        "lottie/lottie-comp",
        "lottie/getlottiemetadata",
        "lottie/lottie-staticfile",
        "lottie/lottie-remote",
        "lottie/lottie-lottiefiles",
      ],
    },
    {
      type: "category",
      label: "@remotion/preload",
      link: {
        type: "doc",
        id: "preload/preload",
      },
      items: [
        "preload/preload-video",
        "preload/preload-audio",
        "preload/preload-image",
        "preload/preload-font",
        "preload/resolve-redirect",
      ],
    },
    {
      type: "category",
      label: "@remotion/paths",
      link: {
        type: "doc",
        id: "paths/index",
      },
      items: [
        "paths/get-length",
        "paths/get-point-at-length",
        "paths/get-tangent-at-length",
        "paths/reverse-path",
        "paths/normalize-path",
        "paths/interpolate-path",
        "paths/evolve-path",
        "paths/reset-path",
        "paths/get-subpaths",
        "paths/translate-path",
        "paths/warp-path",
        "paths/scale-path",
        "paths/get-bounding-box",
        "paths/extend-viewbox",
        "paths/parse-path",
        "paths/serialize-instructions",
        "paths/reduce-instructions",

        "paths/get-parts",
      ],
    },
    {
      type: "category",
      label: "@remotion/noise",
      link: {
        type: "doc",
        id: "noise/index",
      },
      items: ["noise/noise-2d", "noise/noise-3d", "noise/noise-4d"],
    },
    {
      type: "category",
      label: "@remotion/google-fonts",
      link: {
        type: "doc",
        id: "google-fonts/google-fonts",
      },
      items: [
        "google-fonts/load-font",
        "google-fonts/get-available-fonts",
        "google-fonts/get-info",
      ],
    },
    {
      type: "category",
      label: "@remotion/shapes",
      link: {
        type: "doc",
        id: "shapes/index",
      },
      items: [
        "shapes/rect",
        "shapes/triangle",
        "shapes/circle",
        "shapes/ellipse",
        "shapes/star",
        "shapes/pie",
        "shapes/make-rect",
        "shapes/make-triangle",
        "shapes/make-circle",
        "shapes/make-ellipse",
        "shapes/make-star",
        "shapes/make-pie",
      ],
    },
    {
      type: "category",
      label: "@remotion/rive",
      link: {
        type: "doc",
        id: "rive/index",
      },
      items: ["rive/index", "rive/remotionrivecanvas"],
    },
    {
      type: "category",
      label: "@remotion/zod-types",
      link: {
        type: "doc",
        id: "zod-types/index",
      },
      items: ["zod-types/z-color"],
    },
  ],
  mainSidebar: [
    "4-0-alpha",
    {
      type: "category",
      label: "Getting started",
      items: [
        "getting-started",
        "the-fundamentals",
        "animating-properties",
        "reusability",
        "timeline",
        "render",
      ],
    },
    {
      type: "category",
      label: "Techniques",
      items: [
        "transforms",
        "assets",
        "data-fetching",
        "parametrized-rendering",
        "use-img-and-iframe",
        "using-audio",
        "fonts",
        "using-randomness",
        "audio-visualization",
        "noise-visualization",
        "encoding",
        "transparent-videos",
        "dynamic-metadata",
        "ssr",
        "webpack",
        "tailwind",
        "env-variables",
        "third-party",
        "stills",
        "scaling",
        "video-manipulation",
        "render-as-gif",
        "overlay",
        "docker",
        "javascript",
      ],
    },
    {
      type: "category",
      link: {
        type: "doc",
        id: "player/index",
      },
      label: "Player",
      items: [
        {
          type: "link",
          href: "/docs/player/player",
          label: "API Reference",
        },
        "player/examples",
        "player/scaling",
        "player/integration",
        "player/autoplay",
        "player/current-time",
        "player/preloading",
        "player/best-practices",
      ],
    },
    {
      type: "category",
      label: "Lambda",
      link: {
        type: "doc",
        id: "lambda",
      },
      items: [
        {
          type: "link",
          href: "/docs/lambda/api",
          label: "API Reference",
        },
        "lambda/setup",
        "lambda/authentication",
        "lambda/permissions",
        "lambda/region-selection",
        "lambda/concurrency",
        "lambda/runtime",
        "lambda/disk-size",
        "lambda/faq",
        "lambda/light-client",
        "lambda/custom-layers",
        "lambda/custom-destination",
        "lambda/checklist",
        "lambda/webhooks",
        {
          type: "category",
          label: "Troubleshooting",
          items: [
            "lambda/troubleshooting/debug",
            "lambda/troubleshooting/permissions",
            "lambda/troubleshooting/rate-limit",
            "lambda/troubleshooting/unrecognizedclientexception",
            "lambda/troubleshooting/bucket-disallows-acl",
            "lambda/troubleshooting/security-token",
          ],
        },
        {
          type: "category",
          label: "Using without IAM users",
          link: {
            type: "doc",
            id: "lambda/without-iam/index",
          },
          items: [
            "lambda/without-iam/index",
            "lambda/without-iam/example",
            "lambda/without-iam/ec2",
          ],
        },
        "lambda/php",
        "lambda/go",
        "lambda/serverless-framework-integration",
        "lambda/sqs",
        "lambda/multiple-buckets",
        "lambda/bucket-naming",
        "lambda/optimizing-cost",
        "lambda/optimizing-speed",
        "lambda/limits",
        "lambda/changelog",
        "lambda/upgrading",
        "lambda/uninstall",
        "lambda/feb-2023-incident",
        "lambda/s3-public-access",
      ],
    },
    {
      type: "category",
      label: "Cloudrun",
      link: {
        type: "doc",
        id: "cloudrun",
      },
      items: [
        "cloudrun/setup",
        "cloudrun/generate-env",
        "cloudrun/region-selection",
        "cloudrun/faq",
        "cloudrun/upgrading",
      ],
    },
    {
      type: "category",
      label: "Troubleshooting",
      items: [
        "troubleshooting/debug-failed-render",
        "timeout",
        "target-closed",
        "media-playback-error",
        "performance",
        "webpack-dynamic-imports",
        "non-seekable-media",
        "flickering",
        "version-mismatch",
        "enametoolong",
        "slow-method-to-extract-frame",
        "wrong-composition-mount",
        "staticfile-relative-paths",
        "staticfile-remote-urls",
        "troubleshooting/background-image",
        "troubleshooting/rosetta",
        "troubleshooting/loading-root-component",
        "troubleshooting/defaultprops-too-big",
        "troubleshooting/could-not-be-parsed-as-a-value-list",
        "troubleshooting/player-flicker",
        "troubleshooting/broken-fast-refresh",
      ],
    },
    {
      type: "category",
      label: "Snippets",
      items: [
        "miscellaneous/snippets/accelerated-video",
        "miscellaneous/snippets/player-in-iframe",
        "miscellaneous/snippets/fps-converter",
        "miscellaneous/snippets/adding-animations",
        "miscellaneous/snippets/offthread-video-while-rendering",
      ],
    },
    {
      type: "category",
      label: "Workflows",
      items: [
        "dataset-render",
        "render-all",
        "figma",
        "spline",
        "after-effects",
        "video-uploads",
        "buffer-state",
        "presigned-urls",
        "font-picker",
      ],
    },
    {
      type: "link",
      href: "/docs/api",
      label: "API Reference",
    },
    "react-native",
    "terminology",
    {
      type: "category",
      label: "Migration guides",
      items: ["4-0-migration", "3-0-migration", "2-0-migration"],
    },
    {
      type: "category",
      label: "Miscellaneous",
      items: [
        "get-help",
        "brownfield",
        "ffmpeg",
        "chromium-flags",
        "video-vs-offthreadvideo",
        "prereleases",
        "gpu",
        "react-18",
        "legacy-babel",
        "miscellaneous/typescript-aliases",
        "miscellaneous/render-in-browser",
        "miscellaneous/changing-temp-dir",
        "miscellaneous/automatic-duration",
        "miscellaneous/video-formats",
        "miscellaneous/vercel-functions",
        "miscellaneous/render-on-edge",
        "compare/motion-canvas",
      ],
    },
    {
      type: "category",
      label: "Contributing",
      items: [
        "contributing/index",
        "contributing/feature",
        "contributing/option",
        "contributing/docs",
        "contributing/bounty",
        "contributing/rust",
      ],
    },
    "license",
  ],
};
