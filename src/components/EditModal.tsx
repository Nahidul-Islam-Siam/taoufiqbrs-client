/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import FileUploader from "./FileUploader";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { useForm } from "react-hook-form";

type EditModalProps = {
    onClose: () => void;
};

const EditModal: React.FC<EditModalProps> = ({ onClose }) => {
    const { register, handleSubmit } = useForm({
        defaultValues: {
            firstName: "Monica",
            lastName: "Lucas",
            siretNumber: "1234",
            shopName: "Monica's Shop",
            phone: "12345678",
            email: "monica@rentaly.com",
            address: "Dhaka, Bangladesh",
            image: null,
        },
    });

    const onSubmit = (data: any) => {
        console.log("Updated profile data:", data);
        onClose();
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <div className="bg-white rounded-lg p-6 w-full max-w-xl relative">
                <h2 className="text-xl font-semibold mb-4">Edit Profile</h2>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-4 max-h-[80vh] overflow-y-auto"
                >
                    {/* First & Last Name */}
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <Label htmlFor="firstName">First Name</Label>
                            <input
                                id="firstName"
                                {...register("firstName", { required: true })}
                                className="border rounded-md p-2 w-full focus:outline-none"
                            />
                        </div>
                        <div>
                            <Label htmlFor="lastName">Last Name</Label>
                            <input
                                id="lastName"
                                {...register("lastName", { required: true })}
                                className="border rounded-md p-2 w-full focus:outline-none"
                            />
                        </div>
                    </div>

                    {/* Shop Name & Siret Number */}
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <Label htmlFor="shopName">Shop Name</Label>
                            <input
                                id="shopName"
                                {...register("shopName")}
                                className="border rounded-md p-2 w-full focus:outline-none"
                            />
                        </div>
                        <div>
                            <Label htmlFor="siretNumber">Siret Number</Label>
                            <input
                                id="siretNumber"
                                {...register("siretNumber")}
                                className="border rounded-md p-2 w-full focus:outline-none"
                            />
                        </div>
                    </div>

                    {/* Email & Phone */}
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <Label htmlFor="email">Email</Label>
                            <input
                                id="email"
                                type="email"
                                {...register("email", { required: true })}
                                className="border rounded-md p-2 w-full focus:outline-none"
                            />
                        </div>
                        <div>
                            <Label htmlFor="phone">Phone</Label>
                            <input
                                id="phone"
                                {...register("phone")}
                                className="border rounded-md p-2 w-full focus:outline-none"
                            />
                        </div>
                    </div>

                    {/* Address */}
                    <div>
                        <Label htmlFor="address">Address</Label>
                        <input
                            id="address"
                            {...register("address")}
                            className="border rounded-md p-2 w-full focus:outline-none"
                        />
                    </div>

                    {/* File Uploader */}
                    <div>
                        <Label>Profile Image</Label>
                        <FileUploader />
                    </div>

                    {/* Buttons */}
                    <div className="flex justify-end gap-2 mt-4">
                        <Button type="button" variant="outline" onClick={onClose}>
                            Cancel
                        </Button>
                        <Button type="submit" variant="default">
                            Save
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditModal;
