// Paleta derivada del logo: huella azul marino sobre papel crudo.
export const C = {
  paper: "#EFEDE7",
  paperDeep: "#E5E2DA",
  ink: "#1E3F5F",
  inkDeep: "#12283D",
  ridge: "#4A6E8F",
  muted: "#8A9099",
  field: "#6B7548",     // eje comunitario — otra familia a propósito
  fieldSoft: "#8D9668",
  rule: "#D3CFC5",
  // Grises con contraste real sobre papel. muted (#8A9099) es demasiado
  // claro para texto interactivo: falla AA en botones y chips.
  tabIdle: "#5C6672",   // pestañas y chips sin seleccionar
  chipBorder: "#BFB9AC",
  warn: "#B4552F",
  warnText: "#8E3F20",
  caution: "#B08A2E",
  cautionText: "#7A5E1E",
  inter: "#3E7A91",
  interText: "#2C5566",
};

// Densidad de crestas por nivel. Es el lenguaje visual del logo:
// más línea = más evidencia; línea plana = no hay nada medido.
export const RIDGES = { A: 9, B: 6, C: 4, D: 2, NOT_SHOWN: 0, NO_DATA: 0 };

// Dos formas distintas de línea plana:
//   NO_DATA    → punteada y gris: nadie tomó la medición.
//   NOT_SHOWN  → continua y en rojo: se midió y salió plana.
// Es la diferencia entre ausencia de evidencia y evidencia de ausencia.
