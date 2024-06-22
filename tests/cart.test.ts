import { cart } from "./../src/services/cart";

describe("Cart", () => {
  let sampleProductId: number;

  beforeAll(() => {
    sampleProductId = 1;
  });

  test("set username in cart", () => {
    const username = "testUser";

    cart.setUsername(username);

    expect(cart.getCart().username).toBe(username);
  });

  test("add product to cart", () => {
    cart.addProduct(sampleProductId);

    const updatedCart = cart.getCart();

    expect(updatedCart.items.length).toBe(1);
    expect(updatedCart.items.some(item => item.id === sampleProductId)).toBe(true);
  });

  test("add and re-add product to cart", () => {
    cart.addProduct(sampleProductId);
    cart.addProduct(sampleProductId);

    const updatedCart = cart.getCart();

    expect(updatedCart.items.length).toBe(1);
    expect(updatedCart.items.some(item => item.id === sampleProductId)).toBe(true);
  });

  test("update amount in cart", () => {
    const initialCart = cart.getCart();
    const originalAmount = initialCart.items.find(item => item.id === sampleProductId)?.amount || 1;

    cart.updateAmountProduct(sampleProductId, originalAmount + 1);

    const updatedCart = cart.getCart();
    const updatedAmount = updatedCart.items.find(item => item.id === sampleProductId)?.amount;
    expect(updatedAmount).toBe(originalAmount + 1);
  });

  test("update amount of product don't exists on cart", () => {
    const initialCart = cart.getCart();

    cart.updateAmountProduct(999, 3);

    expect(cart.getCart()).toEqual(initialCart);
  });

  test("remove product from cart", () => {
    const initialCart = cart.getCart();

    cart.removeProduct(sampleProductId);

    const updatedCart = cart.getCart();
    expect(updatedCart.items.length).toBe(initialCart.items.length - 1);
    expect(updatedCart.items.some(item => item.id === sampleProductId)).toBe(false);
  });

  test.skip("finish order", () => {
    // Placeholder test for the 'finish order' functionality.
    // This test will be implemented in the future to ensure that the order finishing logic works correctly.
    // You can provide additional comments or details about the expected behavior.
  });
});