import Link from 'next/link';
import React from 'react';

interface OrderItem {
    id: string;
    name: string;
    origin: string;
    weight: string;
    price: number;
    items: string[];
    description: string;
}

interface CustomerInfo {
    fullName: string;
    phoneNumber: string;
    email: string;
    address: string;
    orderDate: string;
    customerId: string;
}

interface OrderDetailsProps {
    customer: CustomerInfo;
    orderItems: OrderItem[];
    total: number;
}

const OrderDetails: React.FC<OrderDetailsProps> = ({ customer, orderItems, total }) => {
    return (
        <div className='border border-gray-200 rounded-md p-5'>
            {/* Header */}
            <div className="text-center mb-8">
                <button className="px-6 py-2 border-2 border-green-500 text-green-600 rounded-full font-medium hover:bg-green-50 transition-colors">
                    Order Details
                </button>
            </div>

            {/* Customer Info */}
            <div className="border rounded-lg p-5 mb-8">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-semibold text-gray-800">Customer Info</h2>
                    <span className="text-sm text-green-600 font-medium">● In Processing</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm text-gray-600 mb-1">Full Name</label>
                            <p className="font-medium text-gray-900">{customer.fullName}</p>
                        </div>
                        <div>
                            <label className="block text-sm text-gray-600 mb-1">Email</label>
                            <p className="font-medium text-gray-900">{customer.email}</p>
                        </div>
                        <div>
                            <label className="block text-sm text-gray-600 mb-1">Order Date</label>
                            <p className="font-medium text-gray-900">{customer.orderDate}</p>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm text-gray-600 mb-1">Phone Number</label>
                            <p className="font-medium text-gray-900">{customer.phoneNumber}</p>
                        </div>
                        <div>
                            <label className="block text-sm text-gray-600 mb-1">Address</label>
                            <p className="font-medium text-gray-900">{customer.address}</p>
                        </div>
                        <div>
                            <label className="block text-sm text-gray-600 mb-1">Customer ID</label>
                            <p className="font-medium text-gray-900">{customer.customerId}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Order Items */}
            <div className="space-y-6 mb-8">
                {orderItems.map((item) => (
                    <div key={item.id} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                        <div className="flex justify-between items-start mb-4">
                            <h3 className="text-xl font-semibold text-gray-900">{item.name}</h3>
                            <div className="text-right">
                                <p className="text-xs text-gray-500 mb-1">Including Tax</p>
                                <p className="text-2xl font-bold text-gray-900">${item.price.toFixed(2)}</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                            <div>
                                <span className="text-sm text-gray-600">Origin: </span>
                                <span className="font-medium text-gray-900">{item.origin}</span>
                            </div>
                            <div>
                                <span className="text-sm text-gray-600">Weight: </span>
                                <span className="font-medium text-gray-900">{item.weight}</span>
                            </div>
                        </div>

                        <div className="mb-4">
                            <p className="text-sm text-gray-600 mb-2">Items:</p>
                            <ul className="list-disc list-inside space-y-1">
                                {item.items.map((listItem, idx) => (
                                    <li key={idx} className="text-sm text-gray-700">{listItem}</li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <p className="text-sm text-gray-600 mb-2">Description:</p>
                            <p className="text-sm text-gray-700 leading-relaxed">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Total */}
            <div className="border-t border-gray-200 pt-6">
                <div className="flex justify-between items-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-900">Total</h3>
                    <p className="text-3xl font-bold text-gray-900">{total}$</p>
                </div>

                <div className="text-center">
                    <Link href="/my-profile/profile/track-order">
                        <button className="w-full md:w-auto px-8 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors">
                            Track your Order
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

// Example usage with sample data
const OrderDetailsPage: React.FC = () => {
    const sampleCustomer: CustomerInfo = {
        fullName: "Saiful Rahman",
        phoneNumber: "+880XXXXXXXXX",
        email: "saifulhagh@gmail.com",
        address: "USA,sufla,25dahgg",
        orderDate: "July 20, 2025",
        customerId: "ID (e.g., CUST-1025)"
    };

    const sampleOrderItems: OrderItem[] = [
        {
            id: "1",
            name: "Vegetable Pack",
            origin: "Japan",
            weight: "0.5kg",
            price: 50.00,
            items: [
                "Tomato 5pn 4",
                "Yasen ipsum 4",
                "Yasen ipsum 4"
            ],
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus."
        },
        {
            id: "2",
            name: "Vegetable Pack",
            origin: "Japan",
            weight: "0.5kg",
            price: 50.00,
            items: [
                "Tomato 5pn",
                "Yasen ipsum 4",
                "Yasen ipsum 4"
            ],
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus."
        }
    ];

    return (
        <div className="mb-20">
            <OrderDetails
                customer={sampleCustomer}
                orderItems={sampleOrderItems}
                total={100}
            />
        </div>
    );
};

export default OrderDetailsPage;