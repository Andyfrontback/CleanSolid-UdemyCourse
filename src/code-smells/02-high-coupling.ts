(() => {
  // No aplicando el principio de responsabilidad única
  type Gender = "M" | "F";

  // Alto Acoplamiento

  // Tarea: Cliente quiere cambiar name por lastName y firstName

  class Person {
    constructor(
      public firstName: string,
      public lastName: string, // 0. Cambio solicitado
      public gender: Gender,
      public birthdate: Date,
    ) {}
  }

  class User extends Person {
    constructor(
      public email: string,
      public role: string,
      private lastAccess: Date,
      firstName: string,
      lastName: string, // 1. Cambio de la cadena
      gender: Gender,
      birthdate: Date,
    ) {
      super(firstName, lastName, gender, birthdate); // 1.1. Obligatorio
      this.lastAccess = new Date();
    }

    checkCredentials() {
      return true;
    }
  }

  class UserSettings extends User {
    constructor(
      public workingDirectory: string,
      public lastFolderOpen: string,
      email: string,
      role: string,
      firstName: string,
      lastName: string, // 2. Cambio de la cadena
      gender: Gender,
      birthdate: Date,
    ) {
      super(email, role, new Date(), firstName, lastName, gender, birthdate); // 2.1. Obligatorio
    }
  }

  const userSettings = new UserSettings(
    "/urs/home",
    "/development",
    "fernando@google.com",
    "F",
    "Fernando",
    "Herrera", // 3. Cambio de la cadena
    "M",
    new Date("1985-10-21"),
  );

  // Inconvenientes, que pasa si cambio el orden de firstName y lastName en algún punto de la cadena?, fallaría mi resultado esperado

  console.log({ userSettings, credentials: userSettings.checkCredentials() });
})();
