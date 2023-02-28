type Pokemon = {
    name: string;
    type: string;
};
type PokemonListFunction = (nameFilter: string) => Pokemon[];
export declare function sharedFunction(): string;
export declare const pokemonTypeFilter: PokemonListFunction;
export { CowbellThemeProvider } from "./styleguide/cowbell-styles";
