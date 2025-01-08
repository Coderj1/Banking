const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      backgroundImage: {
        "img1" : "url('https://png.pngtree.com/thumb_back/fh260/background/20230702/pngtree-d-illustration-of-black-concrete-background-with-blue-credit-card-design-image_3739414.jpg')",
        "img2" : "url('https://img.freepik.com/premium-vector/white-card-with-words-credit-credit-card-it_125452-3702.jpg?w=360')",
        "img3" : "url('https://img.freepik.com/premium-vector/global-network-connection-world-map-abstract-technology-background_77399-1258.jpg')",
        "img4" : "url('https://cdn.prod.website-files.com/607837a92aca1bb50efd05a0/635c1a214f15f579ec84f15a_extend-virtual-card-overview-min.jpg')"
      },
      letterSpacing: {
        'extra-tight': '0.50em',
        'extra-wide': '0.65em',
      }
    },
  },
  plugins: [
    flowbite.plugin()
  ],
}
