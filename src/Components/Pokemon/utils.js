import styles from './PokemonTypes.module.css';

export const SearchColorTypes = (typeName) => {
  switch (typeName) {
    case 'normal':
      return styles.typeNormal;
    case 'fire':
      return styles.typeFire;
    case 'water':
      return styles.typeWater;
    case 'grass':
      return styles.typeGrass;
    case 'flying':
      return styles.typeFlying;
    case 'fighting':
      return styles.typeFighting;
    case 'poison':
      return styles.typePoison;
    case 'electric':
      return styles.typeElectric;
    case 'ground':
      return styles.typeGround;
    case 'rock':
      return styles.typeRock;
    case 'psychic':
      return styles.typePsychic;
    case 'ice':
      return styles.typeIce;
    case 'bug':
      return styles.typeBug;
    case 'ghost':
      return styles.typeGhost;
    case 'steel':
      return styles.typeSteel;
    case 'dragon':
      return styles.typeDragon;
    case 'dark':
      return styles.typeDark;
    case 'fairy':
      return styles.typeFairy;
    default:
      return '';
  }
};

export const SearchTypes = (typeName) => {
  switch (typeName) {
    case 'normal':
      return styles.typeNormalBack;
    case 'fire':
      return styles.typeFireBack;
    case 'water':
      return styles.typeWaterBack;
    case 'grass':
      return styles.typeGrassBack;
    case 'flying':
      return styles.typeFlyingBack;
    case 'fighting':
      return styles.typeFightingBack;
    case 'poison':
      return styles.typePoisonBack;
    case 'electric':
      return styles.typeElectricBack;
    case 'ground':
      return styles.typeGroundBack;
    case 'rock':
      return styles.typeRockBack;
    case 'psychic':
      return styles.typePsychicBack;
    case 'ice':
      return styles.typeIceBack;
    case 'bug':
      return styles.typeBugBack;
    case 'ghost':
      return styles.typeGhostBack;
    case 'steel':
      return styles.typeSteelBack;
    case 'dragon':
      return styles.typeDragonBack;
    case 'dark':
      return styles.typeDarkBack;
    case 'fairy':
      return styles.typeFairyBack;
    default:
      return '';
  }
};
