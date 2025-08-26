"use client"
import React, { useState } from 'react';
import { MoreHorizontal, ChevronLeft, ChevronRight } from 'lucide-react';

const OrderHistoryPage = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const itemsPerPage = 7;

    const sampleOrders = [
        {
            id: "#SH567",
            totalPrice: 1820,
            status: "pending",
            orderDate: "2024-05-25",
            deliveryDate: "2024-05-30",
            time: "07:00 AM"
        },
        {
            id: "#SH567",
            totalPrice: 1250,
            status: "processing",
            orderDate: "2024-05-25",
            deliveryDate: "2024-05-30",
            time: "07:00 AM"
        },
        {
            id: "#SH567",
            totalPrice: 1820,
            status: "delivered",
            orderDate: "2024-05-25",
            deliveryDate: "2024-05-30",
            time: "07:30 AM"
        },
        {
            id: "#SH567",
            totalPrice: 1820,
            status: "delivered",
            orderDate: "2024-05-25",
            deliveryDate: "2024-05-30",
            time: "08:00 AM"
        },
        {
            id: "#SH567",
            totalPrice: 1820,
            status: "delivered",
            orderDate: "2024-05-25",
            deliveryDate: "2024-05-30",
            time: "08:00 AM"
        },
        {
            id: "#SH567",
            totalPrice: 1820,
            status: "delivered",
            orderDate: "2024-05-25",
            deliveryDate: "2024-05-30",
            time: "08:00 AM"
        },
        {
            id: "#SH567",
            totalPrice: 1820,
            status: "delivered",
            orderDate: "2024-05-25",
            deliveryDate: "2024-05-30",
            time: "08:00 AM"
        }
    ];

    const totalItems = 12;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'pending':
                return 'text-gray-600 bg-gray-100';
            case 'processing':
                return 'text-yellow-700 bg-yellow-100';
            case 'delivered':
                return 'text-green-700 bg-green-100';
            default:
                return 'text-gray-600 bg-gray-100';
        }
    };

    const startItem = (currentPage - 1) * itemsPerPage + 1;
    const endItem = Math.min(currentPage * itemsPerPage, totalItems);

    const toggleDropdown = (orderId: string) => {
        setActiveDropdown(activeDropdown === orderId ? null : orderId);
    };

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const handleViewDetails = (orderId: string) => {
        console.log("View details for order:", orderId);
        alert(`View details for order: ${orderId}`);
    };

    const handleDuplicateOrder = (orderId: string) => {
        console.log("Duplicate order:", orderId);
        alert(`Duplicate order: ${orderId}`);
    };

    return (
        <div className="max-w-7xl mx-auto mb-20">
            {/* Header */}
            <h1 className="text-3xl font-bold text-gray-900 mb-8">History</h1>

            {/* Table */}
            <div className="bg-white rounded-md border border-gray-200 overflow-hidden">
                <table className="w-full">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-4 text-left font-semibold text-gray-700">ID</th>
                            <th className="px-6 py-4 text-left font-semibold text-gray-700">Total Price</th>
                            <th className="px-6 py-4 text-left font-semibold text-gray-700">Status</th>
                            <th className="px-6 py-4 text-left font-semibold text-gray-700">Order Date</th>
                            <th className="px-6 py-4 text-left font-semibold text-gray-700">Delivery Date</th>
                            <th className="px-6 py-4 text-left font-semibold text-gray-700">Time</th>
                            <th className="px-6 py-4 text-right font-semibold text-gray-700">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {sampleOrders.map((order, index) => (
                            <tr key={`${order.id}-${index}`} className="hover:bg-gray-50 transition-colors">
                                <td className="px-6 py-4 font-medium text-blue-600">
                                    {order.id}
                                </td>
                                <td className="px-6 py-4 font-semibold text-gray-900">
                                    {order.totalPrice}$
                                </td>
                                <td className="px-6 py-4">
                                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(order.status)}`}>
                                        {order.status === 'delivered' && (
                                            <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                                        )}
                                        {order.status === 'processing' && (
                                            <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                                        )}
                                        {order.status === 'pending' && (
                                            <span className="w-2 h-2 bg-gray-400 rounded-full mr-2"></span>
                                        )}
                                        {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-gray-600">
                                    {order.orderDate}
                                </td>
                                <td className="px-6 py-4 text-gray-600">
                                    {order.deliveryDate}
                                </td>
                                <td className="px-6 py-4 text-gray-600">
                                    {order.time}
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <div className="relative">
                                        <button
                                            onClick={() => toggleDropdown(`${order.id}-${index}`)}
                                            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                                        >
                                            <MoreHorizontal className="h-4 w-4 text-gray-500" />
                                        </button>

                                        {activeDropdown === `${order.id}-${index}` && (
                                            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-10">
                                                <div className="py-2">
                                                    <button
                                                        onClick={() => {
                                                            handleViewDetails(order.id);
                                                            setActiveDropdown(null);
                                                        }}
                                                        className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                                                    >
                                                        Details
                                                    </button>
                                                    <button
                                                        onClick={() => {
                                                            handleDuplicateOrder(order.id);
                                                            setActiveDropdown(null);
                                                        }}
                                                        className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                                                    >
                                                        Duplicate Order
                                                    </button>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-between mt-6">
                <div className="text-sm text-gray-600">
                    Showing {startItem}-{endItem} of {totalItems}
                </div>

                <div className="flex items-center space-x-2">
                    <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="flex items-center justify-center h-8 w-8 border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                        <ChevronLeft className="h-4 w-4" />
                    </button>

                    {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
                        let pageNumber;
                        if (totalPages <= 5) {
                            pageNumber = i + 1;
                        } else if (currentPage <= 3) {
                            pageNumber = i + 1;
                        } else if (currentPage >= totalPages - 2) {
                            pageNumber = totalPages - 4 + i;
                        } else {
                            pageNumber = currentPage - 2 + i;
                        }

                        return (
                            <button
                                key={pageNumber}
                                onClick={() => handlePageChange(pageNumber)}
                                className={`h-8 w-8 rounded-md text-sm font-medium transition-colors ${currentPage === pageNumber
                                    ? 'bg-green-600 text-white hover:bg-green-700'
                                    : 'border border-gray-300 text-gray-700 hover:bg-gray-50'
                                    }`}
                            >
                                {pageNumber}
                            </button>
                        );
                    })}

                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="flex items-center justify-center h-8 w-8 border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                        <ChevronRight className="h-4 w-4" />
                    </button>
                </div>
            </div>

            {/* Click outside to close dropdown */}
            {activeDropdown && (
                <div
                    className="fixed inset-0 z-0"
                    onClick={() => setActiveDropdown(null)}
                ></div>
            )}
        </div>
    );
};

export default OrderHistoryPage;