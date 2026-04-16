(() => {
  interface Product {
    id: number;
    name: string;
  }

  type template = "to-clients" | "to-admins";

  class CartBloc {
    public items: Product[] = [];

    addToCart(item: Product) {
      this.items.push(item);
    }
  }

  class ProductService {
    private httpClient: Object = {};

    public getProduct(id: number) {
      console.log("Producto: ", { id, name: "OLED Tv" });
    }

    public saveProduct(product: Product) {
      console.log("Guardando en base de datos", product);
    }
  }

  class Mailer {
    public sendEmail(emailsTo: string[], template: template) {
      console.log(`Enviando correo ${template} a: ${emailsTo}`);
    }
  }

  // Usualmente, esto es una clase para controlar la vista que es desplegada al usuario
  // Recuerden que podemos tener muchas vistas que realicen este mismo trabajo.
  class ProductBloc {
    constructor(
      public productService: ProductService,
      public mailer: Mailer,
    ) {}

    loadProduct(id: number) {
      // Realiza un proceso para obtener el producto y retornarlo
      this.productService.getProduct(id);
    }

    saveProduct(product: Product) {
      // Realiza una petición para salvar en base de datos
      this.productService.saveProduct(product);
    }

    notifyClients(clientsEmails: string[]) {
      this.mailer.sendEmail(clientsEmails, "to-clients");
    }
  }

  const productService = new ProductService();
  const mailer = new Mailer();
  const cartBloc = new CartBloc();
  const productBloc = new ProductBloc(productService, mailer);

  productBloc.loadProduct(10);
  productBloc.saveProduct({ id: 10, name: "OLED TV" });
  productBloc.notifyClients(["andy@google.com"]);
  cartBloc.addToCart({ id: 11, name: "Servidor" });
})();
