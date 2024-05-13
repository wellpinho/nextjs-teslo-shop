import { 
    Inter, 
    Roboto,
    Montserrat_Alternates
} from "next/font/google";

export const inter = Inter({ 
    subsets: ["latin"] 
});

export const titleFont = Roboto({
    subsets: ["latin"],
    weight: ["500", "700"]
});

export const titleMontSerrat = Montserrat_Alternates({
    subsets: ["latin"],
    weight: ["500", "700"]
});