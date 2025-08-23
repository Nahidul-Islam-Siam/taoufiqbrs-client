interface TimelineStep {
    id: string;
    title: string;
    date: string;
    description: string;
    status: 'completed' | 'current' | 'pending';
}

const OrderTracking: React.FC = () => {

    const timeline: TimelineStep[] = [
        {
            id: "1",
            title: "Order Received",
            date: "May 27, 2025",
            description: "Your shipment has been registered in our system.",
            status: "completed"
        },
        {
            id: "2",
            title: "Dispatched",
            date: "April 30, 2025",
            description: "Your Product has been prepared and successfully dispatched from our Farm.",
            status: "completed"
        },
        {
            id: "3",
            title: "Given to Delivery man",
            date: "Jun 01, 2025",
            description: "Your Product is currently on its way to the delivery destination.",
            status: "current"
        },
        {
            id: "4",
            title: "Delivered",
            date: "July 27, 2025",
            description: "Your Product has been successfully delivered to the specified location.",
            status: "pending"
        }
    ];

    return (
        <div className="border border-gray-200 rounded-md p-5 mb-20">
            <div className="space-y-8">


                {/* Timeline Section */}
                <div className="bg-white rounded-md p-5">
                    <h2 className="text-2xl font-bold text-gray-900 mb-8">Order Timeline</h2>

                    <div className="space-y-8">
                        {timeline.map((step, index) => (
                            <div key={step.id} className="flex items-start space-x-4">
                                {/* Timeline dot and line */}
                                <div className="flex flex-col items-center">
                                    <div className={`w-4 h-4 rounded-full border-2 ${step.status === 'completed'
                                        ? 'bg-orange-500 border-orange-500'
                                        : step.status === 'current'
                                            ? 'bg-orange-500 border-orange-500'
                                            : 'bg-gray-300 border-gray-300'
                                        }`}></div>
                                    {index < timeline.length - 1 && (
                                        <div className={`w-0.5 h-16 mt-2 ${step.status === 'completed'
                                            ? 'bg-orange-500'
                                            : 'bg-gray-300'
                                            }`}></div>
                                    )}
                                </div>

                                {/* Timeline content */}
                                <div className="flex-1 pb-8">
                                    <div className="flex items-center space-x-3 mb-2">
                                        <h3 className={`font-semibold ${step.status === 'completed' || step.status === 'current'
                                            ? 'text-gray-900'
                                            : 'text-gray-500'
                                            }`}>
                                            {step.title}
                                        </h3>
                                    </div>
                                    <p className={`text-sm mb-2 ${step.status === 'completed' || step.status === 'current'
                                        ? 'text-gray-600'
                                        : 'text-gray-400'
                                        }`}>
                                        {step.date}
                                    </p>
                                    <p className={`text-sm leading-relaxed ${step.status === 'completed' || step.status === 'current'
                                        ? 'text-gray-700'
                                        : 'text-gray-400'
                                        }`}>
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderTracking;