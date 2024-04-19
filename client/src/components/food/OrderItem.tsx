import React from 'react';

const OrderItem: React.FC = () => {
  return (
    <div className="p-4 bg-white border rounded-lg w-[800px]">
      <h2 className="text-lg font-bold mb-2">
        Order Id: <span className="text-gray-500 text-base font-medium">0x9d02bAf4ff81913DbE9a55FE27481bBD24f0e164</span>
      </h2>

      {/* Token Number */}
      <div className="flex items-center mb-2">
        <span className="font-medium text-gray-700">Token No:</span>
        <h1 className="ml-2 text-xl font-semibold text-indigo-600">72</h1>
      </div>

      <p className="text-sm mb-4">
        Date Time: <span className="">Febararury 23, 2024, 5:548</span>
      </p>
      <p className="text-sm mb-4">
        Order Status: <span className="text-indigo-600 font-bold">PLACED</span>
      </p>

      {/* Ordered Items */}
      <div className="border  border-gray-300">
        {/* Header for the items */}
        <div className="grid grid-cols-3  font-bold text-gray-600 bg-gray-100 py-2 px-4 border-b border-gray-300">
          <div>Item</div>
          <div>Quantity</div>
          <div>Price</div>
        </div>

        {/* Ordered item rows */}
        {[
          { item: 'Cheese Pizza', quantity: 2, price: '239483' },
          { item: 'Cheese Pizza', quantity: 2, price: '239483' },
          { item: 'Cheese Pizza', quantity: 2, price: '239483' },
          { item: 'Cheese Pizza', quantity: 2, price: '239483' },
        ].map((order, index) => (
          <div key={index} className=" grid grid-cols-3 py-2 px-4 border-b border-gray-300">
            <div>{order.item}</div>
            <div>{order.quantity}</div>
            <div>{order.price}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OrderItem;
