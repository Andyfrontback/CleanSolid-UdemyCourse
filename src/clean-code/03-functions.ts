(() => {
  // función para obtener información de una película por Id
  function getMoviesById(id: string) {
    console.log({ id });
  }

  // función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
  function getMovieCastById(id: string) {
    console.log({ id });
  }

  // funcion para obtener el bio del actor por el id
  function getActorBiographyById(id: string) {
    console.log({ id });
  }

  // Crear una película
  interface MovieInput {
    title: string;
    description: string;
    rating: number;
    cast: string[];
  }
  function createMovie({ title, description, rating, cast }: MovieInput) {
    console.log({ title, description, rating, cast });
  }

  // Crea un nuevo actor
  function createActor(fullName: string, birthdate: Date): boolean {
    // tarea asincrona para verificar nombre
    // ..
    // ..
    if (fullName === "fernando") return false;

    console.log("Crear actor");
    return true;
  }

  const possiblePayAmountValues = {
    isDead: 1500,
    isSeparated: 2500,
    isRetired: 3000,
    default: 4000,
  } as const;

  interface PayAmountOptions {
    isDead: boolean;
    isSeparated: boolean;
    isRetired: boolean;
  }

  const getPayAmount = ({
    isDead = false,
    isSeparated = true,
    isRetired = false,
  }: PayAmountOptions): number => {
    if (isDead) return possiblePayAmountValues.isDead;

    if (isSeparated) return possiblePayAmountValues.isSeparated;

    if (isRetired) return possiblePayAmountValues.isRetired;

    return possiblePayAmountValues.default;
  };
})();
