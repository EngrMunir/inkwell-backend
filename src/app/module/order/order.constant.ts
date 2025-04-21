export const ORDER_STATUS_CODE = {
    pending: 'pending',
    shipping: 'shipping',
  } as const;
  export const ORDER_STATUS = ['pending', 'shipping'] as const;
  
  export const orderSearchableFields = [
    'userEmail',
    'orderTitle',
    'deliveryStatus',
    'paymentStatus',
    'orderInvoice',
  ];
  