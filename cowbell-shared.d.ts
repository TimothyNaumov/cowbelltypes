/// <reference types="react" />
export type Pokemon = {
  name: string;
  type: string;
  favoriteColor: string;
};
type PokemonListFunction = (nameFilter: string) => Pokemon[];
export declare function sharedFunction(): string;
export type PokemonListComponent = React.FC<{
  list: Pokemon[];
}>;
export declare const pokemonTypeFilter: PokemonListFunction;
export { CowbellThemeProvider } from "./styleguide/cowbell-styles";
