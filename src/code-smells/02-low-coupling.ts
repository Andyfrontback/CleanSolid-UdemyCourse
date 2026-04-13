(() => {
  // Aplicando el principio de responsabilidad única
  // Prioriza la composición frente a la herencia

  type Gender = "M" | "F";

  interface PersonProps {
    firstName: string;
    lastName: string; // 0. Cambio solicitado
    gender: Gender;
    birthdate: Date;
  }

  class Person {
    public firstName: string;
    public lastName: string;
    public gender: Gender;
    public birthdate: Date;

    constructor({ firstName, lastName, gender, birthdate }: PersonProps) {
      this.firstName = firstName;
      this.lastName = lastName; // 0.1. Cambio oligatorio para el solicitado
      this.gender = gender;
      this.birthdate = birthdate;
    }
  }

  interface UserProps {
    email: string;
    role: string;
  }
  class User {
    public email: string;
    public role: string;
    private lastAccess: Date;

    constructor({ email, role }: UserProps) {
      this.lastAccess = new Date();
      this.email = email;
      this.role = role;
    }

    checkCredentials() {
      return true;
    }
  }

  interface SettingsProps {
    lastFolderOpen: string;
    workingDirectory: string;
  }

  class Settings {
    public workingDirectory: string;
    public lastFolderOpen: string;

    constructor({ workingDirectory, lastFolderOpen }: SettingsProps) {
      this.workingDirectory = workingDirectory;
      this.lastFolderOpen = lastFolderOpen;
    }
  }

  // Nuevo User Settings
  interface UserSettingsProps {
    birthdate: Date;
    email: string;
    gender: Gender;
    lastFolderOpen: string;
    firstName: string;
    lastName: string; // 1. Cambio de la cadena
    role: string;
    workingDirectory: string;
  }

  class UserSettings {
    // constructor(
    //     public person: Person,
    //     public user  : User,
    //     public settings: Settings,
    // ){}
    public person: Person;
    public user: User;
    public settings: Settings;

    constructor({
      firstName,
      lastName,
      gender,
      birthdate,
      email,
      role,
      workingDirectory,
      lastFolderOpen,
    }: UserSettingsProps) {
      this.person = new Person({ firstName, lastName, gender, birthdate }); // 1.1. Cambio obligatorio
      this.user = new User({ email, role });
      this.settings = new Settings({ workingDirectory, lastFolderOpen });
    }
  }

  const userSettings = new UserSettings({
    birthdate: new Date("1985-10-21"),
    email: "fernando@google.com",
    gender: "M",
    lastFolderOpen: "/home",
    firstName: "Fernando",
    lastName: "Herrera", // 2. Cambio de la cadena
    role: "Admin",
    workingDirectory: "/usr/home",
  });

  // Acá la cadena era más reducida, además de que si cometíamos algún error bajando no nos afectará al realizar todo el proceso usando de-estructuración de objetos

  console.log({
    userSettings,
    credentials: userSettings.user.checkCredentials(),
  });
})();
