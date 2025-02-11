import type { Config } from "tailwindcss";

// Typage de la fonction flattenColorPalette
const flattenColorPalette = (
  colors: Record<string, unknown>
): Record<string, string> => {
  const result: Record<string, string> = {};

  Object.entries(colors).forEach(([key, value]) => {
    if (typeof value === "object" && value !== null) {
      // On s'assure ici que les valeurs à l'intérieur sont de type string
      Object.entries(value as Record<string, string>).forEach(
        ([subKey, subValue]) => {
          if (typeof subValue === "string") {
            result[`${key}-${subKey}`] = subValue;
          }
        }
      );
    } else if (typeof value === "string") {
      result[key] = value;
    }
  });

  return result;
};

// Définition des types des paramètres
type AddVariablesForColorsProps = {
  addBase: (arg: { ":root": Record<string, string> }) => void;
  theme: (key: string) => Record<string, string>;
};

// Fonction addVariablesForColors
function addVariablesForColors({ addBase, theme }: AddVariablesForColorsProps) {
  const allColors = flattenColorPalette(theme("colors"));
  const newVars: Record<string, string> = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      screens: {
        "mobile-landscape": {
          raw: "(max-height: 480px) and (orientation: landscape)",
        },
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      backgroundImage: {
        mainBg: "url(../public/home-bg.jpg)",
        mobileBg: "url(../public/dark-bg.jpg)",
      },
    },
  },
  plugins: [addVariablesForColors],
};

export default config;
