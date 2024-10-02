---
sidebar_position: 8
---

# Returns

In the eighth chapter of the inventory management course from Frappe School, the focus is on returns in ERPNext. Here's a summary:

1. **Types of Returns**:

   - **Purchase Returns**: Goods returned to suppliers due to reasons like poor quality or overstock. This reduces inventory and liability to the supplier.
   - **Sales Returns**: Goods returned by customers, which increases inventory and reduces receivables from customers.

2. **Recording Returns**:

   - **Sales Return**:

     - Start by accessing the sales invoice list.
     - Create or open a sales invoice and then create a delivery note for it.
     - Use the "Create" button to select "Sales Return," which generates a delivery note with the return checkbox selected.
     - This process updates stock and accounting ledgers accordingly, affecting stock balance and customer accounts.

   - **Purchase Return**:
     - Access the purchase receipt list and create a new purchase receipt.
     - Use the "Create" button to select "Return," which generates a purchase receipt with the return checkbox selected.
     - This decreases stock and adjusts the accounting ledger, affecting accounts such as "stock in hand" and "received but not billed."

3. **System Updates**: When returns are processed, the original document status changes (e.g., to "return issued"), and the system maintains accurate stock and accounting balances.

The chapter concludes by directing users to further resources on ERPNext and hints at the next topic on warehouse management.

---
