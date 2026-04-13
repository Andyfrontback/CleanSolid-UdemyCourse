(() => {
  // arreglo de temperaturas celsius
  const temperatureInCelciusValues = [33.6, 12.34];

  // Dirección ip del servidor
  const ipServerAddress = "123.123.123.123";

  // Listado de usuarios
  interface person {
    id: number;
    email: string;
  }
  const users: person[] = [
    { id: 1, email: "fernando@google.com" },
    { id: 2, email: "juan@google.com" },
    { id: 3, email: "melissa@google.com" },
  ];

  // Listado de emails de los usuarios
  const userEmailsValues = users.map((user) => user.email);

  // Variables booleanas de un video juego
  const canJump = false;
  const canRun = true;
  const hasItems = true;
  const isLoading = false;

  // Otros ejercicios
  // tiempo inicial
  const startProcessTime = new Date().getTime();
  //....
  // 3 doritos después
  //...
  // Tiempo al final
  const durationProcessTime = new Date().getTime() - startProcessTime;

  // Funciones
  // Obtiene los libros
  function getBooks() {
    throw new Error("Function not implemented.");
  }

  // obtiene libros desde un URL
  function getBooksByUrl(url: string) {
    throw new Error("Function not implemented.");
  }

  // obtiene el área de un cuadrado basado en sus lados
  function calculateSquareArea(side: number) {
    throw new Error("Function not implemented.");
  }

  // imprime el trabajo
  function printJob() {
    throw new Error("Function not implemented.");
  }
})();
