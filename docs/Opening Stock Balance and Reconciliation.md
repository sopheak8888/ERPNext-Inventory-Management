---
sidebar_position: 4
---

# Opening Stock Balance and Reconciliation

In this chapter, the focus is on **opening stock balance** and **stock reconciliation** within the ERPNext system. By the end, you should understand how to:

1. **Add Opening Stock:**

   - When migrating from legacy software, upload the closing stock as opening stock in ERPNext, using a cutoff date (e.g., if starting on April 1, the cutoff is March 31).
   - Ensure that items are configured properly in the item master, particularly checking the "maintained stock" box.
   - Two methods to add opening stock:
     - **Using Stock Entry**: Record item movement between warehouses. Specify the stock entry type (e.g., material receipt), target warehouse, item details (code, quantity, rate), and save the entry.
     - **Stock Reconciliation**: Set the purpose to "opening stock," select items, and submit.

2. **Conduct Stock Reconciliation:**

   - A process that compares physical stock with system stock to correct discrepancies.
   - Navigate to stock reconciliation, set the purpose, and enter the relevant details (item code, warehouse, quantity, valuation rate).
   - Adjustments are recorded in both stock and accounting ledgers, ensuring that post-reconciliation transactions do not alter previously set stock balances.

3. **Examples and Practical Use Cases:**
   - Stock balances from prior transactions remain unchanged after reconciliation.
   - Adjusting stock for serialized or batched items is possible through the reconciliation process, allowing for updates in quantities and valuation rates.

The chapter concludes with a note on further learning resources available on the ERPNext documentation site and previews the next chapter's topics on purchase receipts and landed cost vouchers.

---
