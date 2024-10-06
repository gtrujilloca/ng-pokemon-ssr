export interface SinglePokemon {
  abilities:                Ability[];
  base_experience:          number;
  cries:                    Cries;
  height:                   number;
  id:                       number;
  name:                     string;
  order:                    number;
  past_abilities:           any[];
  past_types:               any[];
  sprites:                  Sprites;
  stats:                    Stat[];
  types:                    Type[];
  weight:                   number;
}

export interface Ability {
  ability:   Species;
  is_hidden: boolean;
  slot:      number;
}

export interface Cries {
  latest: string;
  legacy: string;
}

export interface Species {
  name: string;
  url:  string;
}

export interface Stat {
  base_stat: number;
  effort:    number;
  stat:      Species;
}

export interface Type {
  slot: number;
  type: Species;
}

export interface Sprites {
  back_default:       string;
  back_female:        null;
  back_shiny:         string;
  back_shiny_female:  null;
  front_default:      string;
  front_female:       null;
  front_shiny:        string;
  front_shiny_female: null;
  other?:             Other;
  versions?:          Versions;
  animated?:          Sprites;
}

export interface Versions {
  "generation-i":    GenerationI;
  "generation-ii":   GenerationIi;
  "generation-iii":  GenerationIii;
  "generation-iv":   GenerationIv;
  "generation-v":    GenerationV;
  "generation-vi":   { [key: string]: Home };
  "generation-vii":  GenerationVii;
  "generation-viii": GenerationViii;
}

export interface Sprites {
  back_default:       string;
  back_female:        null;
  back_shiny:         string;
  back_shiny_female:  null;
  front_default:      string;
  front_female:       null;
  front_shiny:        string;
  front_shiny_female: null;
  other?:             Other;
  versions?:          Versions;
  animated?:          Sprites;
}

export interface DreamWorld {
  front_default: string;
  front_female:  null;
}

export interface Home {
  front_default:      string;
  front_female:       null;
  front_shiny:        string;
  front_shiny_female: null;
}

export interface Other {
  dream_world:        DreamWorld;
  home:               Home;
  "official-artwork": OfficialArtwork;
  showdown:           Sprites;
}

export interface RedBlue {
  back_default:      string;
  back_gray:         string;
  back_transparent:  string;
  front_default:     string;
  front_gray:        string;
  front_transparent: string;
}

export interface GenerationI {
  "red-blue": RedBlue;
  yellow:     RedBlue;
}

export interface GenerationIi {
  crystal: Crystal;
  gold:    Gold;
  silver:  Gold;
}

export interface GenerationIii {
  emerald:             OfficialArtwork;
  "firered-leafgreen": Gold;
  "ruby-sapphire":     Gold;
}

export interface GenerationIv {
  "diamond-pearl":        Sprites;
  "heartgold-soulsilver": Sprites;
  platinum:               Sprites;
}

export interface GenerationV {
  "black-white": Sprites;
}


export interface GenerationVii {
  icons:                  DreamWorld;
  "ultra-sun-ultra-moon": Home;
}
export interface GenerationViii {
  icons: DreamWorld;
}


export interface Gold {
  back_default:       string;
  back_shiny:         string;
  front_default:      string;
  front_shiny:        string;
  front_transparent?: string;
}

export interface Crystal {
  back_default:            string;
  back_shiny:              string;
  back_shiny_transparent:  string;
  back_transparent:        string;
  front_default:           string;
  front_shiny:             string;
  front_shiny_transparent: string;
  front_transparent:       string;
}

export interface OfficialArtwork {
  front_default: string;
  front_shiny:   string;
}
