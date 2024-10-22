export const metadata={
    title: "ability pokemona",
    description: "lista pokemonow",
}
export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body
        >
        {children}
        </body>
        </html>
    );
}