import Typography from "typography"

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.666,
  headerWeight: 400,
  headerFontFamily: [
    "Josefin Sans"
  ],
  bodyFontFamily: ["Montserrat"],
  googleFonts: [
    {
      name: 'Montserrat',
      styles: [
        '400',
      ],
    },
    {
      name: 'Josefin Sans',
      styles: [
        '200',
        '300',
        '400',
        '700',
      ],
    },
    {
      name: 'Crimson Text',
      styles: [
        '300',
        '400',
        '600',
      ],
    },
  ],
})

export default typography