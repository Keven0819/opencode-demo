/**
 * 購物車模組
 * 負責計算商品小計、折扣、運費與總金額
 */

function calculateSubtotal(price, quantity) {
    if (quantity <= 0) {
        throw new Error('Quantity must be greater than 0');
    }
    return price * quantity;
}

function applyDiscount(subtotal) {
    if (subtotal > 2000) {
        return subtotal * 0.8;
    } else if (subtotal > 1000) {
        return subtotal * 0.9;
    }
    return subtotal;
}

function calculateTotal(items) {
    if (!items || items.length === 0) {
        return {
            subtotal: 0,
            discounted: 0,
            shipping: 0,
            total: 0,
        };
    }

    let subtotal = 0;

    for (const item of items) {
        subtotal += calculateSubtotal(item.price, item.quantity);
    }

    const discounted = applyDiscount(subtotal);

    const shipping = discounted >= 500 ? 0 : 60;

    return {
        subtotal,
        discounted,
        shipping,
        total: discounted + shipping,
    };
}

module.exports = { calculateSubtotal, applyDiscount, calculateTotal };
