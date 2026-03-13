class Product {
  constructor(Name, Price) {
    this.Name = Name;
    this.Price = Price
  }
  discountedPrice(DiscountedPercent) {
    const DiscountAmount = (this.Price * DiscountedPercent) / 100 ;
    return this.Price - DiscountAmount;
  }
}

const Product1 = new Product("Laptop", 75000);
console.log(`Product Name : `,Product1.Name);
console.log(`Original Price :`,Product1.Price);
console.log(`Price After 10% Discount:`,Product1.discountedPrice(10));