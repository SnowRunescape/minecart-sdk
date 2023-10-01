import { cart } from "./../src/cart"

describe("Cart", () => {
    let sampleProductId: number;

    beforeAll(() => {
        // Assuming you have a product ID to use for testing
        sampleProductId = 1;
    });

    test("set username in cart", () => {
        const username = "testUser";

        cart.setUsername(username);

        expect(cart.getCart().username).toBe(username);
    });

    test("add product to cart", () => {
        // Arrange
        const initialCart = cart.getCart();

        // Act
        cart.addProduct(sampleProductId, 1);

        // Assert
        const updatedCart = cart.getCart();
        expect(updatedCart.items.length).toBe(initialCart.items.length + 1);
        expect(updatedCart.items.some(item => item.id === sampleProductId)).toBe(true);
    });

    test("update amount in cart", () => {
        // Arrange
        const initialCart = cart.getCart();
        const originalAmount = initialCart.items.find(item => item.id === sampleProductId)?.amount || 1;

        // Act
        cart.updateAmountProduct(sampleProductId, originalAmount + 1);

        // Assert
        const updatedCart = cart.getCart();
        const updatedAmount = updatedCart.items.find(item => item.id === sampleProductId)?.amount;
        expect(updatedAmount).toBe(originalAmount + 1);
    });

    test("remove product from cart", () => {
        // Arrange
        const initialCart = cart.getCart();

        // Act
        cart.removeProduct(sampleProductId);

        // Assert
        const updatedCart = cart.getCart();
        expect(updatedCart.items.length).toBe(initialCart.items.length - 1);
        expect(updatedCart.items.some(item => item.id === sampleProductId)).toBe(false);
    });
});