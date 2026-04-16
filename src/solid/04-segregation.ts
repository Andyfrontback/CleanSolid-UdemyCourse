interface Bird {
  eat(): void;
}

interface FlyingBird {
  fly(): void;
}

interface RunnigBird {
  run(): void;
}

interface SwimmerBird {
  swim(): void;
}

class Tucan implements Bird, FlyingBird {
  public fly() {}
  public eat() {}
}

class Humminbird implements Bird, FlyingBird {
  public fly() {}
  public eat() {}
}

class Ostrich implements Bird, RunnigBird {
  public eat() {}
  public run() {}
}

class Penguin implements Bird, SwimmerBird {
  public eat() {}
  public swim() {}
}
